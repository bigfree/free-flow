import { PrismaClient, UserRole, UserType } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

const randomIntFromInterval = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1) + min);

const generateUniquePokemons = (n: number) => {
    // Generovanie pola s číslami od 1 do 200
    const pokemonIds = Array.from({ length: 400 }, (_, i) => i + 1);

    // Premiešanie poľa
    for (let i = pokemonIds.length - 1; i > 0; i--) {
        const j = randomIntFromInterval(0, i);
        [pokemonIds[i], pokemonIds[j]] = [pokemonIds[j], pokemonIds[i]];
    }

    return Array.from({ length: n }, (_, i) => ({ pokemonId: pokemonIds[i] }));
};

async function main() {
    await prisma.user.deleteMany();
    await prisma.log.deleteMany();
    await prisma.refreshToken.deleteMany();
    await prisma.favoritePokemon.deleteMany();

    console.log('Seeding...');

    const roleAdminUser = await prisma.user.create({
        include: {
            profile: true,
            password: true,
        },
        data: {
            email: 'adam@miko.sk',
            role: [UserRole.ROLE_GUEST, UserRole.ROLE_USER, UserRole.ROLE_ADMIN],
            type: UserType.ADMIN,
            password: {
                create: {
                    password: await hash('123456', 10),
                },
            },
            favoritePokemon: {
                createMany: {
                    data: generateUniquePokemons(50),
                },
            },
            profile: {
                create: {
                    firstName: 'Adam',
                    lastName: 'Miko',
                    username: 'Adminko',
                },
            },
        },
    });

    Array(50)
        .fill(null)
        .map(async (value, index) => {
            await prisma.user.create({
                include: {
                    profile: true,
                    password: true,
                },
                data: {
                    email: `user${index}@user${index}.sk`,
                    role: [UserRole.ROLE_GUEST, UserRole.ROLE_USER],
                    type: UserType.USER,
                    password: {
                        create: {
                            password: await hash('123456', 10),
                        },
                    },
                    favoritePokemon: {
                        createMany: {
                            data: generateUniquePokemons(50),
                        },
                    },
                    profile: {
                        create: {
                            firstName: `User${index}`,
                            lastName: `User${index}`,
                            username: `Userko${index}`,
                        },
                    },
                },
            });
        });

    await prisma.user.create({
        include: {
            profile: true,
            password: true,
        },
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
        },
    });

    console.log({
        roleAdminUser,
    });
}

main()
    .catch((error) => console.error(error))
    .finally(async () => await prisma.$disconnect());
