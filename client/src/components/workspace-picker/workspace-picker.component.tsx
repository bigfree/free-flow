import { FC, Fragment, ReactElement, useCallback, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { Avatar, Center, ComboboxStore, Group, Text, UnstyledButton, useCombobox } from '@mantine/core';
import {
    ActiveWorkspaceColorVar,
    ButtonContent,
    ButtonIcon,
    SpotlightAction,
    SpotlightLink,
    SpotlightOptionGroup,
    WorkspacePickerComponent,
} from '@components/workspace-picker/workspace-picker.css.ts';
import useAuthStore from '@stores/auth.store.ts';
import { MyAssignWorkspacesOnPickerQuery } from '@graphql/freeflow/workspaces.query.ts';
import { useDebouncedValue } from '@mantine/hooks';
import { QueryMode } from '@/generated/freeFlow/graphql.ts';
import { Link, useNavigate } from 'react-router-dom';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { IconFolderPlus, IconSearch, IconSelector } from '@tabler/icons-react';
import { createSpotlight, Spotlight } from '@mantine/spotlight';
import { MyConfig } from '@graphql/freeflow/me.query.ts';
import { myConfigVar } from '@stores/reactive.store.ts';
import { UpdateMyConfig } from '@graphql/freeflow/mutation/me.mutation.ts';

export const [workspacesStore, workspacesSpotlight] = createSpotlight();

const WorkspacePicker: FC = (): ReactElement => {
    const navigate = useNavigate();
    const [searchWorkflow, setSearchWorkflow] = useState<string>('');
    const [debouncedSearchWorkflow] = useDebouncedValue(searchWorkflow, 200);

    const currentUserId = useAuthStore((state) => state.currentUserId);

    const combobox: ComboboxStore = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });

    const [setActiveWorkspace] = useMutation(UpdateMyConfig, {
        update: (cache, { data }) => {
            const cacheId = cache.identify(data?.updateUserConfig ?? {});
            cache.modify({
                id: cacheId,
                fields: {
                    activeWorkspace() {
                        return data?.updateUserConfig.activeWorkspace ?? null;
                    },
                },
            });
            myConfigVar(data?.updateUserConfig);
            navigate('/');
        },
    });

    const { data: workspacesData, loading: workspacesLoading } = useQuery(MyAssignWorkspacesOnPickerQuery, {
        variables: {
            workspaceWhere: {
                name: {
                    contains: debouncedSearchWorkflow ?? '',
                    mode: QueryMode.Insensitive,
                },
                assignedUsers: {
                    every: {
                        userId: {
                            equals: currentUserId,
                        },
                    },
                },
            },
        },
        skip: !currentUserId,
    });

    const { data: myConfigData } = useQuery(MyConfig, {
        onCompleted: (data) => {
            myConfigVar(data.myConfig ?? null);
        },
    });

    const handleSetActiveWorkspace = useCallback(
        async (workspaceId: string) => {
            await setActiveWorkspace({
                variables: {
                    data: {
                        activeWorkspace: {
                            connect: {
                                id: workspaceId,
                            },
                        },
                    },
                    where: {
                        userId: currentUserId,
                    },
                },
            });
            workspacesSpotlight.close();
        },
        [currentUserId, setActiveWorkspace],
    );

    return (
        <Fragment>
            <UnstyledButton
                className={WorkspacePickerComponent}
                onClick={() => workspacesSpotlight.open()}
                style={assignInlineVars({
                    [ActiveWorkspaceColorVar]: myConfigData?.myConfig?.activeWorkspace?.profile?.color ?? '#000000',
                })}
            >
                <Avatar
                    size={'md'}
                    radius={'md'}
                    color={myConfigData?.myConfig?.activeWorkspace?.profile?.color ?? 'initials'}
                    name={myConfigData?.myConfig?.activeWorkspace?.name}
                />
                <div className={ButtonContent}>
                    <Text size={'sm'}>{myConfigData?.myConfig?.activeWorkspace?.name}</Text>
                </div>
                <IconSelector className={ButtonIcon} stroke={1.5} />
            </UnstyledButton>

            <Spotlight.Root
                store={workspacesStore}
                query={searchWorkflow}
                onQueryChange={setSearchWorkflow}
                classNames={{
                    action: SpotlightAction,
                }}
            >
                <Spotlight.Search placeholder="Search..." leftSection={<IconSearch stroke={1.5} />} />
                <Spotlight.ActionsGroup label={'Options'}>
                    <div className={SpotlightOptionGroup}>
                        <Link to={'/workspaces/create'} className={SpotlightLink}>
                            <Group wrap="nowrap" w="100%">
                                <Avatar size={'md'} radius={'md'}>
                                    <IconFolderPlus />
                                </Avatar>
                                <div style={{ flex: 1 }}>Create new workspace</div>
                            </Group>
                        </Link>
                    </div>
                </Spotlight.ActionsGroup>
                <Spotlight.ActionsGroup label={'Workspaces'}>
                    <Spotlight.ActionsList>
                        {workspacesLoading ? <Spotlight.Empty>Loading...</Spotlight.Empty> : null}
                        {workspacesData?.workspaces.length ? (
                            <Fragment>
                                {workspacesData.workspaces.map((workspace) => (
                                    <Spotlight.Action
                                        key={workspace.id}
                                        onClick={() => handleSetActiveWorkspace(workspace.id ?? '')}
                                    >
                                        <Group wrap="nowrap" w="100%">
                                            <Center>
                                                <Avatar
                                                    size={'md'}
                                                    radius={'md'}
                                                    color={workspace.profile?.color ?? 'initials'}
                                                    name={workspace.name}
                                                />
                                            </Center>
                                            <div style={{ flex: 1 }}>
                                                <Text opacity={0.6} size={'xs'} c={'dimmed'}>
                                                    {workspace.aberration}
                                                </Text>
                                                <Text size={'md'}>{workspace.name}</Text>
                                            </div>
                                        </Group>
                                    </Spotlight.Action>
                                ))}
                            </Fragment>
                        ) : (
                            <Spotlight.Empty>Nothing found...</Spotlight.Empty>
                        )}
                    </Spotlight.ActionsList>
                </Spotlight.ActionsGroup>
                <Spotlight.Footer>Footer</Spotlight.Footer>
            </Spotlight.Root>
        </Fragment>
    );
};

export default WorkspacePicker;
