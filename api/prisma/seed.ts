import { Prisma, PrismaClient, UserRole, UserType } from '@prisma/client';
import { hash } from 'bcryptjs';
import { faker } from '@faker-js/faker/locale/sk';

const prisma = new PrismaClient();

async function main() {
    console.log('Deleting...');
    await prisma.workspaceProfile.deleteMany();
    await prisma.workspace.deleteMany();
    await prisma.userConfig.deleteMany();
    await prisma.user.deleteMany();
    await prisma.log.deleteMany();
    await prisma.refreshToken.deleteMany();
    await prisma.tab.deleteMany();
    await prisma.flowVersion.deleteMany();
    await prisma.flow.deleteMany();
    await prisma.action.deleteMany();

    console.log('Seeding...');

    /**
     * Create user with role Admin
     */
    const roleAdminUser = await prisma.user.create({
        data: {
            email: 'adam@miko.sk',
            role: [UserRole.ROLE_GUEST, UserRole.ROLE_USER, UserRole.ROLE_ADMIN],
            type: UserType.ADMIN,
            password: {
                create: {
                    password: await hash('123456', 10),
                },
            },
            profile: {
                create: {
                    firstName: 'Adam',
                    lastName: 'Miko',
                    username: 'Adminko',
                    bio: faker.person.bio(),
                    acronym: 'AM',
                },
            },
            config: {
                create: {
                    activeWorkspaceId: null,
                },
            },
        },
    });

    /**
     * Create users with role User
     */
    Array(50)
        .fill(null)
        .map(async (value, index) => {
            const sexType = faker.person.sexType();
            const firstName = faker.person.firstName(sexType);
            const lastName = faker.person.lastName(sexType);
            const email = faker.internet
                .email({
                    firstName,
                    lastName,
                })
                .toLowerCase();

            await prisma.user.create({
                include: {
                    profile: true,
                    password: true,
                },
                data: {
                    email,
                    role: [UserRole.ROLE_GUEST, UserRole.ROLE_USER],
                    type: UserType.USER,
                    password: {
                        create: {
                            password: await hash('123456', 10),
                        },
                    },
                    profile: {
                        create: {
                            firstName,
                            lastName,
                            bio: faker.person.bio(),
                            avatar: faker.image.avatar(),
                            username: `Userko${index}`,
                        },
                    },
                    config: {
                        create: {
                            activeWorkspaceId: null,
                        },
                    },
                },
            });
        });

    /**
     * Create user with role Guest
     */
    await prisma.user.create({
        data: {
            email: 'guest@guest.sk',
            role: [UserRole.ROLE_GUEST],
            type: UserType.GUEST,
            password: {
                create: {
                    password: await hash('123456', 10),
                },
            },
            profile: {
                create: {
                    firstName: 'Guest',
                    lastName: 'Guest',
                    username: 'Guestko',
                },
            },
            config: {
                create: {
                    activeWorkspaceId: null,
                },
            },
        },
    });

    /**
     * Create workspace
     */
    const workspace = await prisma.workspace.create({
        data: {
            name: 'Workspace',
            aberration: faker.string.alpha(5),
            profile: {
                create: {
                    description: faker.lorem.sentence(),
                    color: faker.color.rgb(),
                },
            },
            createdBy: {
                connect: {
                    id: roleAdminUser.id,
                },
            },
            assignedUsers: {
                create: {
                    userId: roleAdminUser.id,
                },
            },
            activeOnUser: {
                connect: {
                    userId: roleAdminUser.id,
                },
            },
        },
    });

    const workspace1 = await prisma.workspace.create({
        data: {
            name: 'My Workspace 1',
            aberration: faker.string.alpha(5),
            profile: {
                create: {
                    description: faker.lorem.sentence(),
                    color: faker.color.rgb(),
                },
            },
            createdBy: {
                connect: {
                    id: roleAdminUser.id,
                },
            },
            assignedUsers: {
                create: {
                    userId: roleAdminUser.id,
                },
            },
        },
    });

    /**
     * Create flows
     */
    Array(10)
        .fill(null)
        .map(async () => {
            const flowName = faker.string.alpha({ length: { min: 10, max: 15 } });
            const flowCode = faker.string.alpha({ length: { min: 5, max: 10 } });
            const flow = await prisma.flow.create({
                data: {
                    name: flowName,
                    code: `FLW_${flowCode}`,
                    data: [
                        { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
                        { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
                    ],
                    user: {
                        connect: {
                            id: roleAdminUser.id,
                        },
                    },
                    assignedWorkspaces: {
                        create: {
                            workspaceId: workspace.id,
                        },
                    },
                },
            });

            await prisma.flowVersion.create({
                data: {
                    name: flow.name,
                    code: flow.code,
                    data: flow.data as Prisma.JsonArray,
                    flow: {
                        connect: {
                            id: flow.id,
                        },
                    },
                    user: {
                        connect: {
                            id: flow.userId,
                        },
                    },
                },
            });
        });

    console.log({
        roleAdminUser,
    });
}

main()
    .catch((error) => console.error(error))
    .finally(async () => await prisma.$disconnect());
