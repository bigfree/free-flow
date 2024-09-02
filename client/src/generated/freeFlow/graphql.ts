/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** A field whose value is a JSON Web Token (JWT): https://jwt.io/introduction. */
  JWT: { input: any; output: any; }
};

export type Action = {
  __typename?: 'Action';
  _count: ActionCount;
  actionsOnWorkspaces?: Maybe<Array<ActionsOnWorkspaces>>;
  class?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  radius?: Maybe<Scalars['Int']['output']>;
  type: ActionType;
  /** Variables on action */
  variables?: Maybe<Scalars['JSON']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type ActionAvgAggregate = {
  __typename?: 'ActionAvgAggregate';
  height?: Maybe<Scalars['Float']['output']>;
  radius?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type ActionCount = {
  __typename?: 'ActionCount';
  actionsOnWorkspaces: Scalars['Int']['output'];
};

export type ActionCountAggregate = {
  __typename?: 'ActionCountAggregate';
  _all: Scalars['Int']['output'];
  class: Scalars['Int']['output'];
  code: Scalars['Int']['output'];
  color: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  radius: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
  variables: Scalars['Int']['output'];
  width: Scalars['Int']['output'];
};

export type ActionCreateInput = {
  actionsOnWorkspaces?: InputMaybe<ActionsOnWorkspacesCreateNestedManyWithoutActionInput>;
  class?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  radius?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<ActionType>;
  variables?: InputMaybe<Scalars['JSON']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type ActionCreateNestedOneWithoutActionsOnWorkspacesInput = {
  connect?: InputMaybe<ActionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ActionCreateOrConnectWithoutActionsOnWorkspacesInput>;
  create?: InputMaybe<ActionCreateWithoutActionsOnWorkspacesInput>;
};

export type ActionCreateOrConnectWithoutActionsOnWorkspacesInput = {
  create: ActionCreateWithoutActionsOnWorkspacesInput;
  where: ActionWhereUniqueInput;
};

export type ActionCreateWithoutActionsOnWorkspacesInput = {
  class?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  radius?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<ActionType>;
  variables?: InputMaybe<Scalars['JSON']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type ActionMaxAggregate = {
  __typename?: 'ActionMaxAggregate';
  class?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  radius?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<ActionType>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type ActionMinAggregate = {
  __typename?: 'ActionMinAggregate';
  class?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  radius?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<ActionType>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type ActionOrderByWithRelationInput = {
  actionsOnWorkspaces?: InputMaybe<ActionsOnWorkspacesOrderByRelationAggregateInput>;
  class?: InputMaybe<SortOrderInput>;
  code?: InputMaybe<SortOrderInput>;
  color?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrderInput>;
  description?: InputMaybe<SortOrderInput>;
  height?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  radius?: InputMaybe<SortOrderInput>;
  type?: InputMaybe<SortOrder>;
  variables?: InputMaybe<SortOrderInput>;
  width?: InputMaybe<SortOrderInput>;
};

export type ActionRelationFilter = {
  is?: InputMaybe<ActionWhereInput>;
  isNot?: InputMaybe<ActionWhereInput>;
};

export enum ActionScalarFieldEnum {
  Class = 'class',
  Code = 'code',
  Color = 'color',
  CreatedAt = 'createdAt',
  Description = 'description',
  Height = 'height',
  Id = 'id',
  Name = 'name',
  Radius = 'radius',
  Type = 'type',
  Variables = 'variables',
  Width = 'width'
}

export type ActionSumAggregate = {
  __typename?: 'ActionSumAggregate';
  height?: Maybe<Scalars['Int']['output']>;
  radius?: Maybe<Scalars['Int']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export enum ActionType {
  Circle = 'CIRCLE',
  Square = 'SQUARE',
  Triangle = 'TRIANGLE'
}

export type ActionUpdateInput = {
  actionsOnWorkspaces?: InputMaybe<ActionsOnWorkspacesUpdateManyWithoutActionNestedInput>;
  class?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  height?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  radius?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumActionTypeFieldUpdateOperationsInput>;
  variables?: InputMaybe<Scalars['JSON']['input']>;
  width?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type ActionUpdateOneRequiredWithoutActionsOnWorkspacesNestedInput = {
  connect?: InputMaybe<ActionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ActionCreateOrConnectWithoutActionsOnWorkspacesInput>;
  create?: InputMaybe<ActionCreateWithoutActionsOnWorkspacesInput>;
  update?: InputMaybe<ActionUpdateToOneWithWhereWithoutActionsOnWorkspacesInput>;
  upsert?: InputMaybe<ActionUpsertWithoutActionsOnWorkspacesInput>;
};

export type ActionUpdateToOneWithWhereWithoutActionsOnWorkspacesInput = {
  data: ActionUpdateWithoutActionsOnWorkspacesInput;
  where?: InputMaybe<ActionWhereInput>;
};

export type ActionUpdateWithoutActionsOnWorkspacesInput = {
  class?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  height?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  radius?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumActionTypeFieldUpdateOperationsInput>;
  variables?: InputMaybe<Scalars['JSON']['input']>;
  width?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type ActionUpsertWithoutActionsOnWorkspacesInput = {
  create: ActionCreateWithoutActionsOnWorkspacesInput;
  update: ActionUpdateWithoutActionsOnWorkspacesInput;
  where?: InputMaybe<ActionWhereInput>;
};

export type ActionWhereInput = {
  AND?: InputMaybe<Array<ActionWhereInput>>;
  NOT?: InputMaybe<Array<ActionWhereInput>>;
  OR?: InputMaybe<Array<ActionWhereInput>>;
  actionsOnWorkspaces?: InputMaybe<ActionsOnWorkspacesListRelationFilter>;
  class?: InputMaybe<StringNullableFilter>;
  code?: InputMaybe<StringNullableFilter>;
  color?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  height?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  radius?: InputMaybe<IntNullableFilter>;
  type?: InputMaybe<EnumActionTypeFilter>;
  variables?: InputMaybe<JsonNullableFilter>;
  width?: InputMaybe<IntNullableFilter>;
};

export type ActionWhereUniqueInput = {
  AND?: InputMaybe<Array<ActionWhereInput>>;
  NOT?: InputMaybe<Array<ActionWhereInput>>;
  OR?: InputMaybe<Array<ActionWhereInput>>;
  actionsOnWorkspaces?: InputMaybe<ActionsOnWorkspacesListRelationFilter>;
  class?: InputMaybe<StringNullableFilter>;
  code?: InputMaybe<StringNullableFilter>;
  color?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  height?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  radius?: InputMaybe<IntNullableFilter>;
  type?: InputMaybe<EnumActionTypeFilter>;
  variables?: InputMaybe<JsonNullableFilter>;
  width?: InputMaybe<IntNullableFilter>;
};

export type ActionsOnWorkspaces = {
  __typename?: 'ActionsOnWorkspaces';
  action: Action;
  actionId: Scalars['String']['output'];
  assignedAt?: Maybe<Scalars['DateTime']['output']>;
  workspace: Workspace;
  workspaceId: Scalars['String']['output'];
};

export type ActionsOnWorkspacesActionIdWorkspaceIdCompoundUniqueInput = {
  actionId: Scalars['String']['input'];
  workspaceId: Scalars['String']['input'];
};

export type ActionsOnWorkspacesCountAggregate = {
  __typename?: 'ActionsOnWorkspacesCountAggregate';
  _all: Scalars['Int']['output'];
  actionId: Scalars['Int']['output'];
  assignedAt: Scalars['Int']['output'];
  workspaceId: Scalars['Int']['output'];
};

export type ActionsOnWorkspacesCreateManyActionInput = {
  assignedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workspaceId: Scalars['String']['input'];
};

export type ActionsOnWorkspacesCreateManyActionInputEnvelope = {
  data: Array<ActionsOnWorkspacesCreateManyActionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ActionsOnWorkspacesCreateManyWorkspaceInput = {
  actionId: Scalars['String']['input'];
  assignedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ActionsOnWorkspacesCreateManyWorkspaceInputEnvelope = {
  data: Array<ActionsOnWorkspacesCreateManyWorkspaceInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ActionsOnWorkspacesCreateNestedManyWithoutActionInput = {
  connect?: InputMaybe<Array<ActionsOnWorkspacesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ActionsOnWorkspacesCreateOrConnectWithoutActionInput>>;
  create?: InputMaybe<Array<ActionsOnWorkspacesCreateWithoutActionInput>>;
  createMany?: InputMaybe<ActionsOnWorkspacesCreateManyActionInputEnvelope>;
};

export type ActionsOnWorkspacesCreateNestedManyWithoutWorkspaceInput = {
  connect?: InputMaybe<Array<ActionsOnWorkspacesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ActionsOnWorkspacesCreateOrConnectWithoutWorkspaceInput>>;
  create?: InputMaybe<Array<ActionsOnWorkspacesCreateWithoutWorkspaceInput>>;
  createMany?: InputMaybe<ActionsOnWorkspacesCreateManyWorkspaceInputEnvelope>;
};

export type ActionsOnWorkspacesCreateOrConnectWithoutActionInput = {
  create: ActionsOnWorkspacesCreateWithoutActionInput;
  where: ActionsOnWorkspacesWhereUniqueInput;
};

export type ActionsOnWorkspacesCreateOrConnectWithoutWorkspaceInput = {
  create: ActionsOnWorkspacesCreateWithoutWorkspaceInput;
  where: ActionsOnWorkspacesWhereUniqueInput;
};

export type ActionsOnWorkspacesCreateWithoutActionInput = {
  assignedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workspace: WorkspaceCreateNestedOneWithoutActionsOnWorkspacesInput;
};

export type ActionsOnWorkspacesCreateWithoutWorkspaceInput = {
  action: ActionCreateNestedOneWithoutActionsOnWorkspacesInput;
  assignedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ActionsOnWorkspacesListRelationFilter = {
  every?: InputMaybe<ActionsOnWorkspacesWhereInput>;
  none?: InputMaybe<ActionsOnWorkspacesWhereInput>;
  some?: InputMaybe<ActionsOnWorkspacesWhereInput>;
};

export type ActionsOnWorkspacesMaxAggregate = {
  __typename?: 'ActionsOnWorkspacesMaxAggregate';
  actionId?: Maybe<Scalars['String']['output']>;
  assignedAt?: Maybe<Scalars['DateTime']['output']>;
  workspaceId?: Maybe<Scalars['String']['output']>;
};

export type ActionsOnWorkspacesMinAggregate = {
  __typename?: 'ActionsOnWorkspacesMinAggregate';
  actionId?: Maybe<Scalars['String']['output']>;
  assignedAt?: Maybe<Scalars['DateTime']['output']>;
  workspaceId?: Maybe<Scalars['String']['output']>;
};

export type ActionsOnWorkspacesOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ActionsOnWorkspacesScalarWhereInput = {
  AND?: InputMaybe<Array<ActionsOnWorkspacesScalarWhereInput>>;
  NOT?: InputMaybe<Array<ActionsOnWorkspacesScalarWhereInput>>;
  OR?: InputMaybe<Array<ActionsOnWorkspacesScalarWhereInput>>;
  actionId?: InputMaybe<StringFilter>;
  assignedAt?: InputMaybe<DateTimeNullableFilter>;
  workspaceId?: InputMaybe<StringFilter>;
};

export type ActionsOnWorkspacesUpdateManyMutationInput = {
  assignedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type ActionsOnWorkspacesUpdateManyWithWhereWithoutActionInput = {
  data: ActionsOnWorkspacesUpdateManyMutationInput;
  where: ActionsOnWorkspacesScalarWhereInput;
};

export type ActionsOnWorkspacesUpdateManyWithWhereWithoutWorkspaceInput = {
  data: ActionsOnWorkspacesUpdateManyMutationInput;
  where: ActionsOnWorkspacesScalarWhereInput;
};

export type ActionsOnWorkspacesUpdateManyWithoutActionNestedInput = {
  connect?: InputMaybe<Array<ActionsOnWorkspacesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ActionsOnWorkspacesCreateOrConnectWithoutActionInput>>;
  create?: InputMaybe<Array<ActionsOnWorkspacesCreateWithoutActionInput>>;
  createMany?: InputMaybe<ActionsOnWorkspacesCreateManyActionInputEnvelope>;
  delete?: InputMaybe<Array<ActionsOnWorkspacesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ActionsOnWorkspacesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ActionsOnWorkspacesWhereUniqueInput>>;
  set?: InputMaybe<Array<ActionsOnWorkspacesWhereUniqueInput>>;
  update?: InputMaybe<Array<ActionsOnWorkspacesUpdateWithWhereUniqueWithoutActionInput>>;
  updateMany?: InputMaybe<Array<ActionsOnWorkspacesUpdateManyWithWhereWithoutActionInput>>;
  upsert?: InputMaybe<Array<ActionsOnWorkspacesUpsertWithWhereUniqueWithoutActionInput>>;
};

export type ActionsOnWorkspacesUpdateManyWithoutWorkspaceNestedInput = {
  connect?: InputMaybe<Array<ActionsOnWorkspacesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ActionsOnWorkspacesCreateOrConnectWithoutWorkspaceInput>>;
  create?: InputMaybe<Array<ActionsOnWorkspacesCreateWithoutWorkspaceInput>>;
  createMany?: InputMaybe<ActionsOnWorkspacesCreateManyWorkspaceInputEnvelope>;
  delete?: InputMaybe<Array<ActionsOnWorkspacesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ActionsOnWorkspacesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ActionsOnWorkspacesWhereUniqueInput>>;
  set?: InputMaybe<Array<ActionsOnWorkspacesWhereUniqueInput>>;
  update?: InputMaybe<Array<ActionsOnWorkspacesUpdateWithWhereUniqueWithoutWorkspaceInput>>;
  updateMany?: InputMaybe<Array<ActionsOnWorkspacesUpdateManyWithWhereWithoutWorkspaceInput>>;
  upsert?: InputMaybe<Array<ActionsOnWorkspacesUpsertWithWhereUniqueWithoutWorkspaceInput>>;
};

export type ActionsOnWorkspacesUpdateWithWhereUniqueWithoutActionInput = {
  data: ActionsOnWorkspacesUpdateWithoutActionInput;
  where: ActionsOnWorkspacesWhereUniqueInput;
};

export type ActionsOnWorkspacesUpdateWithWhereUniqueWithoutWorkspaceInput = {
  data: ActionsOnWorkspacesUpdateWithoutWorkspaceInput;
  where: ActionsOnWorkspacesWhereUniqueInput;
};

export type ActionsOnWorkspacesUpdateWithoutActionInput = {
  assignedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  workspace?: InputMaybe<WorkspaceUpdateOneRequiredWithoutActionsOnWorkspacesNestedInput>;
};

export type ActionsOnWorkspacesUpdateWithoutWorkspaceInput = {
  action?: InputMaybe<ActionUpdateOneRequiredWithoutActionsOnWorkspacesNestedInput>;
  assignedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type ActionsOnWorkspacesUpsertWithWhereUniqueWithoutActionInput = {
  create: ActionsOnWorkspacesCreateWithoutActionInput;
  update: ActionsOnWorkspacesUpdateWithoutActionInput;
  where: ActionsOnWorkspacesWhereUniqueInput;
};

export type ActionsOnWorkspacesUpsertWithWhereUniqueWithoutWorkspaceInput = {
  create: ActionsOnWorkspacesCreateWithoutWorkspaceInput;
  update: ActionsOnWorkspacesUpdateWithoutWorkspaceInput;
  where: ActionsOnWorkspacesWhereUniqueInput;
};

export type ActionsOnWorkspacesWhereInput = {
  AND?: InputMaybe<Array<ActionsOnWorkspacesWhereInput>>;
  NOT?: InputMaybe<Array<ActionsOnWorkspacesWhereInput>>;
  OR?: InputMaybe<Array<ActionsOnWorkspacesWhereInput>>;
  action?: InputMaybe<ActionRelationFilter>;
  actionId?: InputMaybe<StringFilter>;
  assignedAt?: InputMaybe<DateTimeNullableFilter>;
  workspace?: InputMaybe<WorkspaceRelationFilter>;
  workspaceId?: InputMaybe<StringFilter>;
};

export type ActionsOnWorkspacesWhereUniqueInput = {
  AND?: InputMaybe<Array<ActionsOnWorkspacesWhereInput>>;
  NOT?: InputMaybe<Array<ActionsOnWorkspacesWhereInput>>;
  OR?: InputMaybe<Array<ActionsOnWorkspacesWhereInput>>;
  action?: InputMaybe<ActionRelationFilter>;
  actionId?: InputMaybe<StringFilter>;
  actionId_workspaceId?: InputMaybe<ActionsOnWorkspacesActionIdWorkspaceIdCompoundUniqueInput>;
  assignedAt?: InputMaybe<DateTimeNullableFilter>;
  workspace?: InputMaybe<WorkspaceRelationFilter>;
  workspaceId?: InputMaybe<StringFilter>;
};

export type AuditlogCountAggregate = {
  __typename?: 'AuditlogCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  data: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  operation: Scalars['Int']['output'];
  table: Scalars['Int']['output'];
};

export type AuditlogMaxAggregate = {
  __typename?: 'AuditlogMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  operation?: Maybe<OperationType>;
  table?: Maybe<Scalars['String']['output']>;
};

export type AuditlogMinAggregate = {
  __typename?: 'AuditlogMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  operation?: Maybe<OperationType>;
  table?: Maybe<Scalars['String']['output']>;
};

export type Authorize = {
  __typename?: 'Authorize';
  /** JWT Token */
  accessToken: Scalars['JWT']['output'];
  /** JWT Token */
  refreshToken: Scalars['JWT']['output'];
  user: User;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type EnumActionTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<ActionType>;
};

export type EnumActionTypeFilter = {
  equals?: InputMaybe<ActionType>;
  in?: InputMaybe<Array<ActionType>>;
  not?: InputMaybe<NestedEnumActionTypeFilter>;
  notIn?: InputMaybe<Array<ActionType>>;
};

export type EnumLogFromNullableFilter = {
  equals?: InputMaybe<LogFrom>;
  in?: InputMaybe<Array<LogFrom>>;
  not?: InputMaybe<NestedEnumLogFromNullableFilter>;
  notIn?: InputMaybe<Array<LogFrom>>;
};

export type EnumLogTypeFilter = {
  equals?: InputMaybe<LogType>;
  in?: InputMaybe<Array<LogType>>;
  not?: InputMaybe<NestedEnumLogTypeFilter>;
  notIn?: InputMaybe<Array<LogType>>;
};

export type EnumThemeColorNullableFilter = {
  equals?: InputMaybe<ThemeColor>;
  in?: InputMaybe<Array<ThemeColor>>;
  not?: InputMaybe<NestedEnumThemeColorNullableFilter>;
  notIn?: InputMaybe<Array<ThemeColor>>;
};

export type EnumUserRoleNullableListFilter = {
  equals?: InputMaybe<Array<UserRole>>;
  has?: InputMaybe<UserRole>;
  hasEvery?: InputMaybe<Array<UserRole>>;
  hasSome?: InputMaybe<Array<UserRole>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EnumUserTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<UserType>;
};

export type EnumUserTypeFilter = {
  equals?: InputMaybe<UserType>;
  in?: InputMaybe<Array<UserType>>;
  not?: InputMaybe<NestedEnumUserTypeFilter>;
  notIn?: InputMaybe<Array<UserType>>;
};

export type Flow = {
  __typename?: 'Flow';
  _count: FlowCount;
  assignedWorkspaces?: Maybe<Array<FlowsOnWorkspaces>>;
  code: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  edges?: Maybe<Scalars['JSON']['output']>;
  externalId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
  versions?: Maybe<Array<FlowVersion>>;
};

export type FlowCount = {
  __typename?: 'FlowCount';
  assignedWorkspaces: Scalars['Int']['output'];
  versions: Scalars['Int']['output'];
};

export type FlowCountAggregate = {
  __typename?: 'FlowCountAggregate';
  _all: Scalars['Int']['output'];
  code: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  data: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  edges: Scalars['Int']['output'];
  externalId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type FlowCreateInput = {
  assignedWorkspaces?: InputMaybe<FlowsOnWorkspacesCreateNestedManyWithoutFlowInput>;
  code: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  edges?: InputMaybe<Scalars['JSON']['input']>;
  externalId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  user?: InputMaybe<UserCreateNestedOneWithoutFlowsInput>;
  versions?: InputMaybe<FlowVersionCreateNestedManyWithoutFlowInput>;
};

export type FlowCreateManyUserInput = {
  code: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  edges?: InputMaybe<Scalars['JSON']['input']>;
  externalId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type FlowCreateManyUserInputEnvelope = {
  data: Array<FlowCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FlowCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<FlowWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FlowCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<FlowCreateWithoutUserInput>>;
  createMany?: InputMaybe<FlowCreateManyUserInputEnvelope>;
};

export type FlowCreateNestedOneWithoutAssignedWorkspacesInput = {
  connect?: InputMaybe<FlowWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FlowCreateOrConnectWithoutAssignedWorkspacesInput>;
  create?: InputMaybe<FlowCreateWithoutAssignedWorkspacesInput>;
};

export type FlowCreateNestedOneWithoutVersionsInput = {
  connect?: InputMaybe<FlowWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FlowCreateOrConnectWithoutVersionsInput>;
  create?: InputMaybe<FlowCreateWithoutVersionsInput>;
};

export type FlowCreateOrConnectWithoutAssignedWorkspacesInput = {
  create: FlowCreateWithoutAssignedWorkspacesInput;
  where: FlowWhereUniqueInput;
};

export type FlowCreateOrConnectWithoutUserInput = {
  create: FlowCreateWithoutUserInput;
  where: FlowWhereUniqueInput;
};

export type FlowCreateOrConnectWithoutVersionsInput = {
  create: FlowCreateWithoutVersionsInput;
  where: FlowWhereUniqueInput;
};

export type FlowCreateWithoutAssignedWorkspacesInput = {
  code: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  edges?: InputMaybe<Scalars['JSON']['input']>;
  externalId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  user?: InputMaybe<UserCreateNestedOneWithoutFlowsInput>;
  versions?: InputMaybe<FlowVersionCreateNestedManyWithoutFlowInput>;
};

export type FlowCreateWithoutUserInput = {
  assignedWorkspaces?: InputMaybe<FlowsOnWorkspacesCreateNestedManyWithoutFlowInput>;
  code: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  edges?: InputMaybe<Scalars['JSON']['input']>;
  externalId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  versions?: InputMaybe<FlowVersionCreateNestedManyWithoutFlowInput>;
};

export type FlowCreateWithoutVersionsInput = {
  assignedWorkspaces?: InputMaybe<FlowsOnWorkspacesCreateNestedManyWithoutFlowInput>;
  code: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  edges?: InputMaybe<Scalars['JSON']['input']>;
  externalId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  user?: InputMaybe<UserCreateNestedOneWithoutFlowsInput>;
};

export type FlowListRelationFilter = {
  every?: InputMaybe<FlowWhereInput>;
  none?: InputMaybe<FlowWhereInput>;
  some?: InputMaybe<FlowWhereInput>;
};

export type FlowMaxAggregate = {
  __typename?: 'FlowMaxAggregate';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  externalId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type FlowMinAggregate = {
  __typename?: 'FlowMinAggregate';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  externalId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type FlowOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FlowOrderByWithRelationInput = {
  assignedWorkspaces?: InputMaybe<FlowsOnWorkspacesOrderByRelationAggregateInput>;
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrderInput>;
  data?: InputMaybe<SortOrderInput>;
  description?: InputMaybe<SortOrderInput>;
  edges?: InputMaybe<SortOrderInput>;
  externalId?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrderInput>;
  versions?: InputMaybe<FlowVersionOrderByRelationAggregateInput>;
};

export type FlowRelationFilter = {
  is?: InputMaybe<FlowWhereInput>;
  isNot?: InputMaybe<FlowWhereInput>;
};

export enum FlowScalarFieldEnum {
  Code = 'code',
  CreatedAt = 'createdAt',
  Data = 'data',
  Description = 'description',
  Edges = 'edges',
  ExternalId = 'externalId',
  Id = 'id',
  Name = 'name',
  UserId = 'userId'
}

export type FlowScalarWhereInput = {
  AND?: InputMaybe<Array<FlowScalarWhereInput>>;
  NOT?: InputMaybe<Array<FlowScalarWhereInput>>;
  OR?: InputMaybe<Array<FlowScalarWhereInput>>;
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  data?: InputMaybe<JsonNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  edges?: InputMaybe<JsonNullableFilter>;
  externalId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type FlowUpdateInput = {
  assignedWorkspaces?: InputMaybe<FlowsOnWorkspacesUpdateManyWithoutFlowNestedInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  edges?: InputMaybe<Scalars['JSON']['input']>;
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutFlowsNestedInput>;
  versions?: InputMaybe<FlowVersionUpdateManyWithoutFlowNestedInput>;
};

export type FlowUpdateManyMutationInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  edges?: InputMaybe<Scalars['JSON']['input']>;
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FlowUpdateManyWithWhereWithoutUserInput = {
  data: FlowUpdateManyMutationInput;
  where: FlowScalarWhereInput;
};

export type FlowUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<FlowWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FlowCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<FlowCreateWithoutUserInput>>;
  createMany?: InputMaybe<FlowCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<FlowWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FlowScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FlowWhereUniqueInput>>;
  set?: InputMaybe<Array<FlowWhereUniqueInput>>;
  update?: InputMaybe<Array<FlowUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<FlowUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<FlowUpsertWithWhereUniqueWithoutUserInput>>;
};

export type FlowUpdateOneRequiredWithoutAssignedWorkspacesNestedInput = {
  connect?: InputMaybe<FlowWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FlowCreateOrConnectWithoutAssignedWorkspacesInput>;
  create?: InputMaybe<FlowCreateWithoutAssignedWorkspacesInput>;
  update?: InputMaybe<FlowUpdateToOneWithWhereWithoutAssignedWorkspacesInput>;
  upsert?: InputMaybe<FlowUpsertWithoutAssignedWorkspacesInput>;
};

export type FlowUpdateOneRequiredWithoutVersionsNestedInput = {
  connect?: InputMaybe<FlowWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FlowCreateOrConnectWithoutVersionsInput>;
  create?: InputMaybe<FlowCreateWithoutVersionsInput>;
  update?: InputMaybe<FlowUpdateToOneWithWhereWithoutVersionsInput>;
  upsert?: InputMaybe<FlowUpsertWithoutVersionsInput>;
};

export type FlowUpdateToOneWithWhereWithoutAssignedWorkspacesInput = {
  data: FlowUpdateWithoutAssignedWorkspacesInput;
  where?: InputMaybe<FlowWhereInput>;
};

export type FlowUpdateToOneWithWhereWithoutVersionsInput = {
  data: FlowUpdateWithoutVersionsInput;
  where?: InputMaybe<FlowWhereInput>;
};

export type FlowUpdateWithWhereUniqueWithoutUserInput = {
  data: FlowUpdateWithoutUserInput;
  where: FlowWhereUniqueInput;
};

export type FlowUpdateWithoutAssignedWorkspacesInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  edges?: InputMaybe<Scalars['JSON']['input']>;
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutFlowsNestedInput>;
  versions?: InputMaybe<FlowVersionUpdateManyWithoutFlowNestedInput>;
};

export type FlowUpdateWithoutUserInput = {
  assignedWorkspaces?: InputMaybe<FlowsOnWorkspacesUpdateManyWithoutFlowNestedInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  edges?: InputMaybe<Scalars['JSON']['input']>;
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  versions?: InputMaybe<FlowVersionUpdateManyWithoutFlowNestedInput>;
};

export type FlowUpdateWithoutVersionsInput = {
  assignedWorkspaces?: InputMaybe<FlowsOnWorkspacesUpdateManyWithoutFlowNestedInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  edges?: InputMaybe<Scalars['JSON']['input']>;
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutFlowsNestedInput>;
};

export type FlowUpsertWithWhereUniqueWithoutUserInput = {
  create: FlowCreateWithoutUserInput;
  update: FlowUpdateWithoutUserInput;
  where: FlowWhereUniqueInput;
};

export type FlowUpsertWithoutAssignedWorkspacesInput = {
  create: FlowCreateWithoutAssignedWorkspacesInput;
  update: FlowUpdateWithoutAssignedWorkspacesInput;
  where?: InputMaybe<FlowWhereInput>;
};

export type FlowUpsertWithoutVersionsInput = {
  create: FlowCreateWithoutVersionsInput;
  update: FlowUpdateWithoutVersionsInput;
  where?: InputMaybe<FlowWhereInput>;
};

export type FlowVersion = {
  __typename?: 'FlowVersion';
  code: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  edges?: Maybe<Scalars['JSON']['output']>;
  externalId?: Maybe<Scalars['String']['output']>;
  flow: Flow;
  flowId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['DateTime']['output']>;
  versionName?: Maybe<Scalars['String']['output']>;
};

export type FlowVersionCountAggregate = {
  __typename?: 'FlowVersionCountAggregate';
  _all: Scalars['Int']['output'];
  code: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  data: Scalars['Int']['output'];
  edges: Scalars['Int']['output'];
  externalId: Scalars['Int']['output'];
  flowId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
  version: Scalars['Int']['output'];
  versionName: Scalars['Int']['output'];
};

export type FlowVersionCreateManyFlowInput = {
  code: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  edges?: InputMaybe<Scalars['JSON']['input']>;
  externalId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['DateTime']['input']>;
  versionName?: InputMaybe<Scalars['String']['input']>;
};

export type FlowVersionCreateManyFlowInputEnvelope = {
  data: Array<FlowVersionCreateManyFlowInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FlowVersionCreateManyUserInput = {
  code: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  edges?: InputMaybe<Scalars['JSON']['input']>;
  externalId?: InputMaybe<Scalars['String']['input']>;
  flowId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  version?: InputMaybe<Scalars['DateTime']['input']>;
  versionName?: InputMaybe<Scalars['String']['input']>;
};

export type FlowVersionCreateManyUserInputEnvelope = {
  data: Array<FlowVersionCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FlowVersionCreateNestedManyWithoutFlowInput = {
  connect?: InputMaybe<Array<FlowVersionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FlowVersionCreateOrConnectWithoutFlowInput>>;
  create?: InputMaybe<Array<FlowVersionCreateWithoutFlowInput>>;
  createMany?: InputMaybe<FlowVersionCreateManyFlowInputEnvelope>;
};

export type FlowVersionCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<FlowVersionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FlowVersionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<FlowVersionCreateWithoutUserInput>>;
  createMany?: InputMaybe<FlowVersionCreateManyUserInputEnvelope>;
};

export type FlowVersionCreateOrConnectWithoutFlowInput = {
  create: FlowVersionCreateWithoutFlowInput;
  where: FlowVersionWhereUniqueInput;
};

export type FlowVersionCreateOrConnectWithoutUserInput = {
  create: FlowVersionCreateWithoutUserInput;
  where: FlowVersionWhereUniqueInput;
};

export type FlowVersionCreateWithoutFlowInput = {
  code: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  edges?: InputMaybe<Scalars['JSON']['input']>;
  externalId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  user?: InputMaybe<UserCreateNestedOneWithoutFlowsVersionInput>;
  version?: InputMaybe<Scalars['DateTime']['input']>;
  versionName?: InputMaybe<Scalars['String']['input']>;
};

export type FlowVersionCreateWithoutUserInput = {
  code: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  edges?: InputMaybe<Scalars['JSON']['input']>;
  externalId?: InputMaybe<Scalars['String']['input']>;
  flow: FlowCreateNestedOneWithoutVersionsInput;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  version?: InputMaybe<Scalars['DateTime']['input']>;
  versionName?: InputMaybe<Scalars['String']['input']>;
};

export type FlowVersionListRelationFilter = {
  every?: InputMaybe<FlowVersionWhereInput>;
  none?: InputMaybe<FlowVersionWhereInput>;
  some?: InputMaybe<FlowVersionWhereInput>;
};

export type FlowVersionMaxAggregate = {
  __typename?: 'FlowVersionMaxAggregate';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  externalId?: Maybe<Scalars['String']['output']>;
  flowId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['DateTime']['output']>;
  versionName?: Maybe<Scalars['String']['output']>;
};

export type FlowVersionMinAggregate = {
  __typename?: 'FlowVersionMinAggregate';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  externalId?: Maybe<Scalars['String']['output']>;
  flowId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['DateTime']['output']>;
  versionName?: Maybe<Scalars['String']['output']>;
};

export type FlowVersionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FlowVersionOrderByWithRelationInput = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrderInput>;
  data?: InputMaybe<SortOrderInput>;
  edges?: InputMaybe<SortOrderInput>;
  externalId?: InputMaybe<SortOrderInput>;
  flow?: InputMaybe<FlowOrderByWithRelationInput>;
  flowId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrderInput>;
  version?: InputMaybe<SortOrderInput>;
  versionName?: InputMaybe<SortOrderInput>;
};

export enum FlowVersionScalarFieldEnum {
  Code = 'code',
  CreatedAt = 'createdAt',
  Data = 'data',
  Edges = 'edges',
  ExternalId = 'externalId',
  FlowId = 'flowId',
  Id = 'id',
  Name = 'name',
  UserId = 'userId',
  Version = 'version',
  VersionName = 'versionName'
}

export type FlowVersionScalarWhereInput = {
  AND?: InputMaybe<Array<FlowVersionScalarWhereInput>>;
  NOT?: InputMaybe<Array<FlowVersionScalarWhereInput>>;
  OR?: InputMaybe<Array<FlowVersionScalarWhereInput>>;
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  data?: InputMaybe<JsonNullableFilter>;
  edges?: InputMaybe<JsonNullableFilter>;
  externalId?: InputMaybe<StringNullableFilter>;
  flowId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringNullableFilter>;
  version?: InputMaybe<DateTimeNullableFilter>;
  versionName?: InputMaybe<StringNullableFilter>;
};

export type FlowVersionUniqueVersionCompoundUniqueInput = {
  flowId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
  version: Scalars['DateTime']['input'];
};

export type FlowVersionUpdateManyMutationInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  edges?: InputMaybe<Scalars['JSON']['input']>;
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  version?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  versionName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type FlowVersionUpdateManyWithWhereWithoutFlowInput = {
  data: FlowVersionUpdateManyMutationInput;
  where: FlowVersionScalarWhereInput;
};

export type FlowVersionUpdateManyWithWhereWithoutUserInput = {
  data: FlowVersionUpdateManyMutationInput;
  where: FlowVersionScalarWhereInput;
};

export type FlowVersionUpdateManyWithoutFlowNestedInput = {
  connect?: InputMaybe<Array<FlowVersionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FlowVersionCreateOrConnectWithoutFlowInput>>;
  create?: InputMaybe<Array<FlowVersionCreateWithoutFlowInput>>;
  createMany?: InputMaybe<FlowVersionCreateManyFlowInputEnvelope>;
  delete?: InputMaybe<Array<FlowVersionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FlowVersionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FlowVersionWhereUniqueInput>>;
  set?: InputMaybe<Array<FlowVersionWhereUniqueInput>>;
  update?: InputMaybe<Array<FlowVersionUpdateWithWhereUniqueWithoutFlowInput>>;
  updateMany?: InputMaybe<Array<FlowVersionUpdateManyWithWhereWithoutFlowInput>>;
  upsert?: InputMaybe<Array<FlowVersionUpsertWithWhereUniqueWithoutFlowInput>>;
};

export type FlowVersionUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<FlowVersionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FlowVersionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<FlowVersionCreateWithoutUserInput>>;
  createMany?: InputMaybe<FlowVersionCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<FlowVersionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FlowVersionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FlowVersionWhereUniqueInput>>;
  set?: InputMaybe<Array<FlowVersionWhereUniqueInput>>;
  update?: InputMaybe<Array<FlowVersionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<FlowVersionUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<FlowVersionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type FlowVersionUpdateWithWhereUniqueWithoutFlowInput = {
  data: FlowVersionUpdateWithoutFlowInput;
  where: FlowVersionWhereUniqueInput;
};

export type FlowVersionUpdateWithWhereUniqueWithoutUserInput = {
  data: FlowVersionUpdateWithoutUserInput;
  where: FlowVersionWhereUniqueInput;
};

export type FlowVersionUpdateWithoutFlowInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  edges?: InputMaybe<Scalars['JSON']['input']>;
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutFlowsVersionNestedInput>;
  version?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  versionName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type FlowVersionUpdateWithoutUserInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  edges?: InputMaybe<Scalars['JSON']['input']>;
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  flow?: InputMaybe<FlowUpdateOneRequiredWithoutVersionsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  version?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  versionName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type FlowVersionUpsertWithWhereUniqueWithoutFlowInput = {
  create: FlowVersionCreateWithoutFlowInput;
  update: FlowVersionUpdateWithoutFlowInput;
  where: FlowVersionWhereUniqueInput;
};

export type FlowVersionUpsertWithWhereUniqueWithoutUserInput = {
  create: FlowVersionCreateWithoutUserInput;
  update: FlowVersionUpdateWithoutUserInput;
  where: FlowVersionWhereUniqueInput;
};

export type FlowVersionWhereInput = {
  AND?: InputMaybe<Array<FlowVersionWhereInput>>;
  NOT?: InputMaybe<Array<FlowVersionWhereInput>>;
  OR?: InputMaybe<Array<FlowVersionWhereInput>>;
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  data?: InputMaybe<JsonNullableFilter>;
  edges?: InputMaybe<JsonNullableFilter>;
  externalId?: InputMaybe<StringNullableFilter>;
  flow?: InputMaybe<FlowRelationFilter>;
  flowId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserNullableRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
  version?: InputMaybe<DateTimeNullableFilter>;
  versionName?: InputMaybe<StringNullableFilter>;
};

export type FlowVersionWhereUniqueInput = {
  AND?: InputMaybe<Array<FlowVersionWhereInput>>;
  NOT?: InputMaybe<Array<FlowVersionWhereInput>>;
  OR?: InputMaybe<Array<FlowVersionWhereInput>>;
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  data?: InputMaybe<JsonNullableFilter>;
  edges?: InputMaybe<JsonNullableFilter>;
  externalId?: InputMaybe<StringNullableFilter>;
  flow?: InputMaybe<FlowRelationFilter>;
  flowId?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
  uniqueVersion?: InputMaybe<FlowVersionUniqueVersionCompoundUniqueInput>;
  user?: InputMaybe<UserNullableRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
  version?: InputMaybe<DateTimeNullableFilter>;
  versionName?: InputMaybe<StringNullableFilter>;
};

export type FlowWhereInput = {
  AND?: InputMaybe<Array<FlowWhereInput>>;
  NOT?: InputMaybe<Array<FlowWhereInput>>;
  OR?: InputMaybe<Array<FlowWhereInput>>;
  assignedWorkspaces?: InputMaybe<FlowsOnWorkspacesListRelationFilter>;
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  data?: InputMaybe<JsonNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  edges?: InputMaybe<JsonNullableFilter>;
  externalId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserNullableRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
  versions?: InputMaybe<FlowVersionListRelationFilter>;
};

export type FlowWhereUniqueInput = {
  AND?: InputMaybe<Array<FlowWhereInput>>;
  NOT?: InputMaybe<Array<FlowWhereInput>>;
  OR?: InputMaybe<Array<FlowWhereInput>>;
  assignedWorkspaces?: InputMaybe<FlowsOnWorkspacesListRelationFilter>;
  code?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  data?: InputMaybe<JsonNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  edges?: InputMaybe<JsonNullableFilter>;
  externalId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserNullableRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
  versions?: InputMaybe<FlowVersionListRelationFilter>;
};

export type FlowsOnWorkspaces = {
  __typename?: 'FlowsOnWorkspaces';
  assignedAt?: Maybe<Scalars['DateTime']['output']>;
  flow: Flow;
  flowId: Scalars['String']['output'];
  workspace: Workspace;
  workspaceId: Scalars['String']['output'];
};

export type FlowsOnWorkspacesCountAggregate = {
  __typename?: 'FlowsOnWorkspacesCountAggregate';
  _all: Scalars['Int']['output'];
  assignedAt: Scalars['Int']['output'];
  flowId: Scalars['Int']['output'];
  workspaceId: Scalars['Int']['output'];
};

export type FlowsOnWorkspacesCreateManyFlowInput = {
  assignedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workspaceId: Scalars['String']['input'];
};

export type FlowsOnWorkspacesCreateManyFlowInputEnvelope = {
  data: Array<FlowsOnWorkspacesCreateManyFlowInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FlowsOnWorkspacesCreateManyWorkspaceInput = {
  assignedAt?: InputMaybe<Scalars['DateTime']['input']>;
  flowId: Scalars['String']['input'];
};

export type FlowsOnWorkspacesCreateManyWorkspaceInputEnvelope = {
  data: Array<FlowsOnWorkspacesCreateManyWorkspaceInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FlowsOnWorkspacesCreateNestedManyWithoutFlowInput = {
  connect?: InputMaybe<Array<FlowsOnWorkspacesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FlowsOnWorkspacesCreateOrConnectWithoutFlowInput>>;
  create?: InputMaybe<Array<FlowsOnWorkspacesCreateWithoutFlowInput>>;
  createMany?: InputMaybe<FlowsOnWorkspacesCreateManyFlowInputEnvelope>;
};

export type FlowsOnWorkspacesCreateNestedManyWithoutWorkspaceInput = {
  connect?: InputMaybe<Array<FlowsOnWorkspacesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FlowsOnWorkspacesCreateOrConnectWithoutWorkspaceInput>>;
  create?: InputMaybe<Array<FlowsOnWorkspacesCreateWithoutWorkspaceInput>>;
  createMany?: InputMaybe<FlowsOnWorkspacesCreateManyWorkspaceInputEnvelope>;
};

export type FlowsOnWorkspacesCreateOrConnectWithoutFlowInput = {
  create: FlowsOnWorkspacesCreateWithoutFlowInput;
  where: FlowsOnWorkspacesWhereUniqueInput;
};

export type FlowsOnWorkspacesCreateOrConnectWithoutWorkspaceInput = {
  create: FlowsOnWorkspacesCreateWithoutWorkspaceInput;
  where: FlowsOnWorkspacesWhereUniqueInput;
};

export type FlowsOnWorkspacesCreateWithoutFlowInput = {
  assignedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workspace: WorkspaceCreateNestedOneWithoutAssignedFlowsInput;
};

export type FlowsOnWorkspacesCreateWithoutWorkspaceInput = {
  assignedAt?: InputMaybe<Scalars['DateTime']['input']>;
  flow: FlowCreateNestedOneWithoutAssignedWorkspacesInput;
};

export type FlowsOnWorkspacesFlowIdWorkspaceIdCompoundUniqueInput = {
  flowId: Scalars['String']['input'];
  workspaceId: Scalars['String']['input'];
};

export type FlowsOnWorkspacesListRelationFilter = {
  every?: InputMaybe<FlowsOnWorkspacesWhereInput>;
  none?: InputMaybe<FlowsOnWorkspacesWhereInput>;
  some?: InputMaybe<FlowsOnWorkspacesWhereInput>;
};

export type FlowsOnWorkspacesMaxAggregate = {
  __typename?: 'FlowsOnWorkspacesMaxAggregate';
  assignedAt?: Maybe<Scalars['DateTime']['output']>;
  flowId?: Maybe<Scalars['String']['output']>;
  workspaceId?: Maybe<Scalars['String']['output']>;
};

export type FlowsOnWorkspacesMinAggregate = {
  __typename?: 'FlowsOnWorkspacesMinAggregate';
  assignedAt?: Maybe<Scalars['DateTime']['output']>;
  flowId?: Maybe<Scalars['String']['output']>;
  workspaceId?: Maybe<Scalars['String']['output']>;
};

export type FlowsOnWorkspacesOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FlowsOnWorkspacesScalarWhereInput = {
  AND?: InputMaybe<Array<FlowsOnWorkspacesScalarWhereInput>>;
  NOT?: InputMaybe<Array<FlowsOnWorkspacesScalarWhereInput>>;
  OR?: InputMaybe<Array<FlowsOnWorkspacesScalarWhereInput>>;
  assignedAt?: InputMaybe<DateTimeNullableFilter>;
  flowId?: InputMaybe<StringFilter>;
  workspaceId?: InputMaybe<StringFilter>;
};

export type FlowsOnWorkspacesUpdateManyMutationInput = {
  assignedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type FlowsOnWorkspacesUpdateManyWithWhereWithoutFlowInput = {
  data: FlowsOnWorkspacesUpdateManyMutationInput;
  where: FlowsOnWorkspacesScalarWhereInput;
};

export type FlowsOnWorkspacesUpdateManyWithWhereWithoutWorkspaceInput = {
  data: FlowsOnWorkspacesUpdateManyMutationInput;
  where: FlowsOnWorkspacesScalarWhereInput;
};

export type FlowsOnWorkspacesUpdateManyWithoutFlowNestedInput = {
  connect?: InputMaybe<Array<FlowsOnWorkspacesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FlowsOnWorkspacesCreateOrConnectWithoutFlowInput>>;
  create?: InputMaybe<Array<FlowsOnWorkspacesCreateWithoutFlowInput>>;
  createMany?: InputMaybe<FlowsOnWorkspacesCreateManyFlowInputEnvelope>;
  delete?: InputMaybe<Array<FlowsOnWorkspacesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FlowsOnWorkspacesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FlowsOnWorkspacesWhereUniqueInput>>;
  set?: InputMaybe<Array<FlowsOnWorkspacesWhereUniqueInput>>;
  update?: InputMaybe<Array<FlowsOnWorkspacesUpdateWithWhereUniqueWithoutFlowInput>>;
  updateMany?: InputMaybe<Array<FlowsOnWorkspacesUpdateManyWithWhereWithoutFlowInput>>;
  upsert?: InputMaybe<Array<FlowsOnWorkspacesUpsertWithWhereUniqueWithoutFlowInput>>;
};

export type FlowsOnWorkspacesUpdateManyWithoutWorkspaceNestedInput = {
  connect?: InputMaybe<Array<FlowsOnWorkspacesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FlowsOnWorkspacesCreateOrConnectWithoutWorkspaceInput>>;
  create?: InputMaybe<Array<FlowsOnWorkspacesCreateWithoutWorkspaceInput>>;
  createMany?: InputMaybe<FlowsOnWorkspacesCreateManyWorkspaceInputEnvelope>;
  delete?: InputMaybe<Array<FlowsOnWorkspacesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FlowsOnWorkspacesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FlowsOnWorkspacesWhereUniqueInput>>;
  set?: InputMaybe<Array<FlowsOnWorkspacesWhereUniqueInput>>;
  update?: InputMaybe<Array<FlowsOnWorkspacesUpdateWithWhereUniqueWithoutWorkspaceInput>>;
  updateMany?: InputMaybe<Array<FlowsOnWorkspacesUpdateManyWithWhereWithoutWorkspaceInput>>;
  upsert?: InputMaybe<Array<FlowsOnWorkspacesUpsertWithWhereUniqueWithoutWorkspaceInput>>;
};

export type FlowsOnWorkspacesUpdateWithWhereUniqueWithoutFlowInput = {
  data: FlowsOnWorkspacesUpdateWithoutFlowInput;
  where: FlowsOnWorkspacesWhereUniqueInput;
};

export type FlowsOnWorkspacesUpdateWithWhereUniqueWithoutWorkspaceInput = {
  data: FlowsOnWorkspacesUpdateWithoutWorkspaceInput;
  where: FlowsOnWorkspacesWhereUniqueInput;
};

export type FlowsOnWorkspacesUpdateWithoutFlowInput = {
  assignedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  workspace?: InputMaybe<WorkspaceUpdateOneRequiredWithoutAssignedFlowsNestedInput>;
};

export type FlowsOnWorkspacesUpdateWithoutWorkspaceInput = {
  assignedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  flow?: InputMaybe<FlowUpdateOneRequiredWithoutAssignedWorkspacesNestedInput>;
};

export type FlowsOnWorkspacesUpsertWithWhereUniqueWithoutFlowInput = {
  create: FlowsOnWorkspacesCreateWithoutFlowInput;
  update: FlowsOnWorkspacesUpdateWithoutFlowInput;
  where: FlowsOnWorkspacesWhereUniqueInput;
};

export type FlowsOnWorkspacesUpsertWithWhereUniqueWithoutWorkspaceInput = {
  create: FlowsOnWorkspacesCreateWithoutWorkspaceInput;
  update: FlowsOnWorkspacesUpdateWithoutWorkspaceInput;
  where: FlowsOnWorkspacesWhereUniqueInput;
};

export type FlowsOnWorkspacesWhereInput = {
  AND?: InputMaybe<Array<FlowsOnWorkspacesWhereInput>>;
  NOT?: InputMaybe<Array<FlowsOnWorkspacesWhereInput>>;
  OR?: InputMaybe<Array<FlowsOnWorkspacesWhereInput>>;
  assignedAt?: InputMaybe<DateTimeNullableFilter>;
  flow?: InputMaybe<FlowRelationFilter>;
  flowId?: InputMaybe<StringFilter>;
  workspace?: InputMaybe<WorkspaceRelationFilter>;
  workspaceId?: InputMaybe<StringFilter>;
};

export type FlowsOnWorkspacesWhereUniqueInput = {
  AND?: InputMaybe<Array<FlowsOnWorkspacesWhereInput>>;
  NOT?: InputMaybe<Array<FlowsOnWorkspacesWhereInput>>;
  OR?: InputMaybe<Array<FlowsOnWorkspacesWhereInput>>;
  assignedAt?: InputMaybe<DateTimeNullableFilter>;
  flow?: InputMaybe<FlowRelationFilter>;
  flowId?: InputMaybe<StringFilter>;
  flowId_workspaceId?: InputMaybe<FlowsOnWorkspacesFlowIdWorkspaceIdCompoundUniqueInput>;
  workspace?: InputMaybe<WorkspaceRelationFilter>;
  workspaceId?: InputMaybe<StringFilter>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type JsonNullableFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type Log = {
  __typename?: 'Log';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  from?: Maybe<LogFrom>;
  id: Scalars['ID']['output'];
  type: LogType;
};

export type LogCountAggregate = {
  __typename?: 'LogCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  data: Scalars['Int']['output'];
  from: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
};

export type LogCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  from?: InputMaybe<LogFrom>;
  type?: InputMaybe<LogType>;
};

export enum LogFrom {
  Api = 'API',
  App = 'APP'
}

export type LogMaxAggregate = {
  __typename?: 'LogMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  from?: Maybe<LogFrom>;
  id?: Maybe<Scalars['String']['output']>;
  type?: Maybe<LogType>;
};

export type LogMinAggregate = {
  __typename?: 'LogMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  from?: Maybe<LogFrom>;
  id?: Maybe<Scalars['String']['output']>;
  type?: Maybe<LogType>;
};

export type LogOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrderInput>;
  data?: InputMaybe<SortOrderInput>;
  from?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export enum LogScalarFieldEnum {
  CreatedAt = 'createdAt',
  Data = 'data',
  From = 'from',
  Id = 'id',
  Type = 'type'
}

export enum LogType {
  Debug = 'DEBUG',
  Error = 'ERROR',
  Log = 'LOG',
  Verbose = 'VERBOSE',
  Warn = 'WARN'
}

export type LogWhereInput = {
  AND?: InputMaybe<Array<LogWhereInput>>;
  NOT?: InputMaybe<Array<LogWhereInput>>;
  OR?: InputMaybe<Array<LogWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  data?: InputMaybe<JsonNullableFilter>;
  from?: InputMaybe<EnumLogFromNullableFilter>;
  id?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumLogTypeFilter>;
};

export type LogWhereUniqueInput = {
  AND?: InputMaybe<Array<LogWhereInput>>;
  NOT?: InputMaybe<Array<LogWhereInput>>;
  OR?: InputMaybe<Array<LogWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  data?: InputMaybe<JsonNullableFilter>;
  from?: InputMaybe<EnumLogFromNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<EnumLogTypeFilter>;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAction: Action;
  createFlow: Flow;
  createLog: Log;
  createMyConfig: UserConfig;
  createTab: Tab;
  createUser: User;
  createUserConfig: UserConfig;
  createWorkspace: Workspace;
  deleteUser: User;
  login: Authorize;
  logout: User;
  refreshTokens: Authorize;
  register: Authorize;
  removeAction: Action;
  removeFlow: Flow;
  removeManyTab: Tab;
  removeOneTab: Tab;
  removeWorkspace: Workspace;
  updateAction: Action;
  updateFlow: Flow;
  updateMyConfig: UserConfig;
  updateUser: User;
  updateUserConfig: UserConfig;
  updateWorkspace: Workspace;
  upsertUserConfig: UserConfig;
};


export type MutationCreateActionArgs = {
  data: ActionCreateInput;
};


export type MutationCreateFlowArgs = {
  data: FlowCreateInput;
};


export type MutationCreateLogArgs = {
  data?: InputMaybe<LogCreateInput>;
};


export type MutationCreateMyConfigArgs = {
  userConfigCreateInput: UserConfigCreateInput;
};


export type MutationCreateTabArgs = {
  data: TabCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUserConfigArgs = {
  data: UserConfigCreateInput;
};


export type MutationCreateWorkspaceArgs = {
  data: WorkspaceCreateInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRefreshTokensArgs = {
  refreshInput: RefreshInput;
};


export type MutationRegisterArgs = {
  registerInput: RegisterInput;
};


export type MutationRemoveActionArgs = {
  where: ActionWhereUniqueInput;
};


export type MutationRemoveFlowArgs = {
  where: FlowWhereUniqueInput;
};


export type MutationRemoveManyTabArgs = {
  where?: InputMaybe<TabWhereInput>;
};


export type MutationRemoveOneTabArgs = {
  where: TabWhereUniqueInput;
};


export type MutationRemoveWorkspaceArgs = {
  where: WorkspaceWhereUniqueInput;
};


export type MutationUpdateActionArgs = {
  data: ActionUpdateInput;
  where: ActionWhereUniqueInput;
};


export type MutationUpdateFlowArgs = {
  data: FlowUpdateInput;
  where: FlowWhereUniqueInput;
};


export type MutationUpdateMyConfigArgs = {
  userConfigUpdateInput: UserConfigUpdateInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUserConfigArgs = {
  data: UserConfigUpdateInput;
  where: UserConfigWhereUniqueInput;
};


export type MutationUpdateWorkspaceArgs = {
  data: WorkspaceUpdateInput;
  where: WorkspaceWhereUniqueInput;
};


export type MutationUpsertUserConfigArgs = {
  create: UserConfigCreateInput;
  update: UserConfigUpdateInput;
  where: UserConfigWhereUniqueInput;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedEnumActionTypeFilter = {
  equals?: InputMaybe<ActionType>;
  in?: InputMaybe<Array<ActionType>>;
  not?: InputMaybe<NestedEnumActionTypeFilter>;
  notIn?: InputMaybe<Array<ActionType>>;
};

export type NestedEnumLogFromNullableFilter = {
  equals?: InputMaybe<LogFrom>;
  in?: InputMaybe<Array<LogFrom>>;
  not?: InputMaybe<NestedEnumLogFromNullableFilter>;
  notIn?: InputMaybe<Array<LogFrom>>;
};

export type NestedEnumLogTypeFilter = {
  equals?: InputMaybe<LogType>;
  in?: InputMaybe<Array<LogType>>;
  not?: InputMaybe<NestedEnumLogTypeFilter>;
  notIn?: InputMaybe<Array<LogType>>;
};

export type NestedEnumThemeColorNullableFilter = {
  equals?: InputMaybe<ThemeColor>;
  in?: InputMaybe<Array<ThemeColor>>;
  not?: InputMaybe<NestedEnumThemeColorNullableFilter>;
  notIn?: InputMaybe<Array<ThemeColor>>;
};

export type NestedEnumUserTypeFilter = {
  equals?: InputMaybe<UserType>;
  in?: InputMaybe<Array<UserType>>;
  not?: InputMaybe<NestedEnumUserTypeFilter>;
  notIn?: InputMaybe<Array<UserType>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NullableEnumThemeColorFieldUpdateOperationsInput = {
  set?: InputMaybe<ThemeColor>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export enum OperationType {
  Create = 'CREATE',
  Delete = 'DELETE',
  Update = 'UPDATE'
}

export type PasswordCountAggregate = {
  __typename?: 'PasswordCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  password: Scalars['Int']['output'];
};

export type PasswordCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<PasswordWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PasswordCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<PasswordCreateWithoutUserInput>;
};

export type PasswordCreateOrConnectWithoutUserInput = {
  create: PasswordCreateWithoutUserInput;
  where: PasswordWhereUniqueInput;
};

export type PasswordCreateWithoutUserInput = {
  password: Scalars['String']['input'];
};

export type PasswordMaxAggregate = {
  __typename?: 'PasswordMaxAggregate';
  id?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
};

export type PasswordMinAggregate = {
  __typename?: 'PasswordMinAggregate';
  id?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
};

export type PasswordOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
};

export type PasswordUpdateOneRequiredWithoutUserNestedInput = {
  connect?: InputMaybe<PasswordWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PasswordCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<PasswordCreateWithoutUserInput>;
  update?: InputMaybe<PasswordUpdateToOneWithWhereWithoutUserInput>;
  upsert?: InputMaybe<PasswordUpsertWithoutUserInput>;
};

export type PasswordUpdateToOneWithWhereWithoutUserInput = {
  data: PasswordUpdateWithoutUserInput;
  where?: InputMaybe<PasswordWhereInput>;
};

export type PasswordUpdateWithoutUserInput = {
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PasswordUpsertWithoutUserInput = {
  create: PasswordCreateWithoutUserInput;
  update: PasswordUpdateWithoutUserInput;
  where?: InputMaybe<PasswordWhereInput>;
};

export type PasswordWhereInput = {
  AND?: InputMaybe<Array<PasswordWhereInput>>;
  NOT?: InputMaybe<Array<PasswordWhereInput>>;
  OR?: InputMaybe<Array<PasswordWhereInput>>;
  id?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserNullableRelationFilter>;
};

export type PasswordWhereUniqueInput = {
  AND?: InputMaybe<Array<PasswordWhereInput>>;
  NOT?: InputMaybe<Array<PasswordWhereInput>>;
  OR?: InputMaybe<Array<PasswordWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserNullableRelationFilter>;
};

export type Profile = {
  __typename?: 'Profile';
  acronym?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type ProfileCountAggregate = {
  __typename?: 'ProfileCountAggregate';
  _all: Scalars['Int']['output'];
  acronym: Scalars['Int']['output'];
  avatar: Scalars['Int']['output'];
  bio: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  firstName: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  lastName: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
  username: Scalars['Int']['output'];
};

export type ProfileCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<ProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProfileCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<ProfileCreateWithoutUserInput>;
};

export type ProfileCreateOrConnectWithoutUserInput = {
  create: ProfileCreateWithoutUserInput;
  where: ProfileWhereUniqueInput;
};

export type ProfileCreateWithoutUserInput = {
  acronym?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  username?: InputMaybe<Scalars['String']['input']>;
};

export type ProfileFullnameCompoundUniqueInput = {
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
};

export type ProfileMaxAggregate = {
  __typename?: 'ProfileMaxAggregate';
  acronym?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type ProfileMinAggregate = {
  __typename?: 'ProfileMinAggregate';
  acronym?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type ProfileNullableRelationFilter = {
  is?: InputMaybe<ProfileWhereInput>;
  isNot?: InputMaybe<ProfileWhereInput>;
};

export type ProfileOrderByWithRelationInput = {
  acronym?: InputMaybe<SortOrderInput>;
  avatar?: InputMaybe<SortOrderInput>;
  bio?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrderInput>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrderInput>;
};

export type ProfileUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<ProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProfileCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<ProfileCreateWithoutUserInput>;
  delete?: InputMaybe<ProfileWhereInput>;
  disconnect?: InputMaybe<ProfileWhereInput>;
  update?: InputMaybe<ProfileUpdateToOneWithWhereWithoutUserInput>;
  upsert?: InputMaybe<ProfileUpsertWithoutUserInput>;
};

export type ProfileUpdateToOneWithWhereWithoutUserInput = {
  data: ProfileUpdateWithoutUserInput;
  where?: InputMaybe<ProfileWhereInput>;
};

export type ProfileUpdateWithoutUserInput = {
  acronym?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ProfileUpsertWithoutUserInput = {
  create: ProfileCreateWithoutUserInput;
  update: ProfileUpdateWithoutUserInput;
  where?: InputMaybe<ProfileWhereInput>;
};

export type ProfileWhereInput = {
  AND?: InputMaybe<Array<ProfileWhereInput>>;
  NOT?: InputMaybe<Array<ProfileWhereInput>>;
  OR?: InputMaybe<Array<ProfileWhereInput>>;
  acronym?: InputMaybe<StringNullableFilter>;
  avatar?: InputMaybe<StringNullableFilter>;
  bio?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  username?: InputMaybe<StringNullableFilter>;
};

export type ProfileWhereUniqueInput = {
  AND?: InputMaybe<Array<ProfileWhereInput>>;
  NOT?: InputMaybe<Array<ProfileWhereInput>>;
  OR?: InputMaybe<Array<ProfileWhereInput>>;
  acronym?: InputMaybe<StringNullableFilter>;
  avatar?: InputMaybe<StringNullableFilter>;
  bio?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  firstName?: InputMaybe<StringFilter>;
  fullname?: InputMaybe<ProfileFullnameCompoundUniqueInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  action: Action;
  actions: Array<Action>;
  flow: Flow;
  flowVersion: FlowVersion;
  flowVersions: Array<FlowVersion>;
  flows: Array<Flow>;
  log: Log;
  logs: Array<Log>;
  me: User;
  myConfig: UserConfig;
  tabs: Array<Tab>;
  user: User;
  userConfig: UserConfig;
  users: Array<User>;
  workspace: Workspace;
  workspaces: Array<Workspace>;
};


export type QueryActionArgs = {
  where: ActionWhereUniqueInput;
};


export type QueryActionsArgs = {
  cursor?: InputMaybe<ActionWhereUniqueInput>;
  distinct?: InputMaybe<Array<ActionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ActionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ActionWhereInput>;
};


export type QueryFlowArgs = {
  where: FlowWhereUniqueInput;
};


export type QueryFlowVersionArgs = {
  where: FlowVersionWhereUniqueInput;
};


export type QueryFlowVersionsArgs = {
  cursor?: InputMaybe<FlowVersionWhereUniqueInput>;
  distinct?: InputMaybe<Array<FlowVersionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FlowVersionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FlowVersionWhereInput>;
};


export type QueryFlowsArgs = {
  cursor?: InputMaybe<FlowWhereUniqueInput>;
  distinct?: InputMaybe<Array<FlowScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FlowOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FlowWhereInput>;
};


export type QueryLogArgs = {
  where: LogWhereUniqueInput;
};


export type QueryLogsArgs = {
  cursor?: InputMaybe<LogWhereUniqueInput>;
  distinct?: InputMaybe<Array<LogScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LogWhereInput>;
};


export type QueryTabsArgs = {
  cursor?: InputMaybe<TabWhereUniqueInput>;
  distinct?: InputMaybe<Array<TabScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TabOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TabWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUserConfigArgs = {
  where: UserConfigWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryWorkspaceArgs = {
  where: WorkspaceWhereUniqueInput;
};


export type QueryWorkspacesArgs = {
  cursor?: InputMaybe<WorkspaceWhereUniqueInput>;
  distinct?: InputMaybe<Array<WorkspaceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<WorkspaceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<WorkspaceWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RefreshInput = {
  /** Refresh token */
  refreshToken: Scalars['String']['input'];
};

export type RefreshTokenCountAggregate = {
  __typename?: 'RefreshTokenCountAggregate';
  _all: Scalars['Int']['output'];
  expiresAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isRevoked: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type RefreshTokenMaxAggregate = {
  __typename?: 'RefreshTokenMaxAggregate';
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isRevoked?: Maybe<Scalars['Boolean']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type RefreshTokenMinAggregate = {
  __typename?: 'RefreshTokenMinAggregate';
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isRevoked?: Maybe<Scalars['Boolean']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type RegisterInput = {
  /** User unique email address */
  email: Scalars['String']['input'];
  /** User password */
  password: Scalars['String']['input'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  flowCreated: Flow;
  flowDeleted: Flow;
  flowUpdated: Flow;
  logCreated: Log;
  userCreated: User;
  userDeleted: User;
  userLogout: User;
  userUpdated: User;
  workspaceCreated: User;
  workspaceDeleted: User;
  workspaceUpdated: User;
};

export type Tab = {
  __typename?: 'Tab';
  data?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type TabCountAggregate = {
  __typename?: 'TabCountAggregate';
  _all: Scalars['Int']['output'];
  data: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type TabCreateInput = {
  data?: InputMaybe<Scalars['JSON']['input']>;
  user: UserCreateNestedOneWithoutTabsInput;
};

export type TabCreateManyUserInput = {
  data?: InputMaybe<Scalars['JSON']['input']>;
};

export type TabCreateManyUserInputEnvelope = {
  data: Array<TabCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TabCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<TabWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TabCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TabCreateWithoutUserInput>>;
  createMany?: InputMaybe<TabCreateManyUserInputEnvelope>;
};

export type TabCreateOrConnectWithoutUserInput = {
  create: TabCreateWithoutUserInput;
  where: TabWhereUniqueInput;
};

export type TabCreateWithoutUserInput = {
  data?: InputMaybe<Scalars['JSON']['input']>;
};

export type TabListRelationFilter = {
  every?: InputMaybe<TabWhereInput>;
  none?: InputMaybe<TabWhereInput>;
  some?: InputMaybe<TabWhereInput>;
};

export type TabMaxAggregate = {
  __typename?: 'TabMaxAggregate';
  id?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type TabMinAggregate = {
  __typename?: 'TabMinAggregate';
  id?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type TabOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TabOrderByWithRelationInput = {
  data?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum TabScalarFieldEnum {
  Data = 'data',
  Id = 'id',
  UserId = 'userId'
}

export type TabScalarWhereInput = {
  AND?: InputMaybe<Array<TabScalarWhereInput>>;
  NOT?: InputMaybe<Array<TabScalarWhereInput>>;
  OR?: InputMaybe<Array<TabScalarWhereInput>>;
  data?: InputMaybe<JsonNullableFilter>;
  id?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type TabUpdateManyMutationInput = {
  data?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TabUpdateManyWithWhereWithoutUserInput = {
  data: TabUpdateManyMutationInput;
  where: TabScalarWhereInput;
};

export type TabUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<TabWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TabCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TabCreateWithoutUserInput>>;
  createMany?: InputMaybe<TabCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<TabWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TabScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TabWhereUniqueInput>>;
  set?: InputMaybe<Array<TabWhereUniqueInput>>;
  update?: InputMaybe<Array<TabUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<TabUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<TabUpsertWithWhereUniqueWithoutUserInput>>;
};

export type TabUpdateWithWhereUniqueWithoutUserInput = {
  data: TabUpdateWithoutUserInput;
  where: TabWhereUniqueInput;
};

export type TabUpdateWithoutUserInput = {
  data?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TabUpsertWithWhereUniqueWithoutUserInput = {
  create: TabCreateWithoutUserInput;
  update: TabUpdateWithoutUserInput;
  where: TabWhereUniqueInput;
};

export type TabWhereInput = {
  AND?: InputMaybe<Array<TabWhereInput>>;
  NOT?: InputMaybe<Array<TabWhereInput>>;
  OR?: InputMaybe<Array<TabWhereInput>>;
  data?: InputMaybe<JsonNullableFilter>;
  id?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type TabWhereUniqueInput = {
  AND?: InputMaybe<Array<TabWhereInput>>;
  NOT?: InputMaybe<Array<TabWhereInput>>;
  OR?: InputMaybe<Array<TabWhereInput>>;
  data?: InputMaybe<JsonNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export enum ThemeColor {
  Auto = 'AUTO',
  Dark = 'DARK',
  Light = 'LIGHT'
}

export type User = {
  __typename?: 'User';
  _count: UserCount;
  assignedWorkspaces?: Maybe<Array<UsersOnWorkspaces>>;
  config?: Maybe<UserConfig>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdWorkspaces?: Maybe<Array<Workspace>>;
  email: Scalars['EmailAddress']['output'];
  flows?: Maybe<Array<Flow>>;
  flowsVersion?: Maybe<Array<FlowVersion>>;
  id: Scalars['ID']['output'];
  pairId?: Maybe<Scalars['String']['output']>;
  profile?: Maybe<Profile>;
  role?: Maybe<Array<UserRole>>;
  tabs?: Maybe<Array<Tab>>;
  type: UserType;
};

export type UserConfig = {
  __typename?: 'UserConfig';
  activeWorkspace?: Maybe<Workspace>;
  activeWorkspaceId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  theme?: Maybe<ThemeColor>;
  user: User;
  userId: Scalars['String']['output'];
};

export type UserConfigCountAggregate = {
  __typename?: 'UserConfigCountAggregate';
  _all: Scalars['Int']['output'];
  activeWorkspaceId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  theme: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type UserConfigCreateInput = {
  activeWorkspace?: InputMaybe<WorkspaceCreateNestedOneWithoutActiveOnUserInput>;
  theme?: InputMaybe<ThemeColor>;
  user: UserCreateNestedOneWithoutConfigInput;
};

export type UserConfigCreateManyActiveWorkspaceInput = {
  theme?: InputMaybe<ThemeColor>;
  userId: Scalars['String']['input'];
};

export type UserConfigCreateManyActiveWorkspaceInputEnvelope = {
  data: Array<UserConfigCreateManyActiveWorkspaceInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserConfigCreateNestedManyWithoutActiveWorkspaceInput = {
  connect?: InputMaybe<Array<UserConfigWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserConfigCreateOrConnectWithoutActiveWorkspaceInput>>;
  create?: InputMaybe<Array<UserConfigCreateWithoutActiveWorkspaceInput>>;
  createMany?: InputMaybe<UserConfigCreateManyActiveWorkspaceInputEnvelope>;
};

export type UserConfigCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<UserConfigWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserConfigCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<UserConfigCreateWithoutUserInput>;
};

export type UserConfigCreateOrConnectWithoutActiveWorkspaceInput = {
  create: UserConfigCreateWithoutActiveWorkspaceInput;
  where: UserConfigWhereUniqueInput;
};

export type UserConfigCreateOrConnectWithoutUserInput = {
  create: UserConfigCreateWithoutUserInput;
  where: UserConfigWhereUniqueInput;
};

export type UserConfigCreateWithoutActiveWorkspaceInput = {
  theme?: InputMaybe<ThemeColor>;
  user: UserCreateNestedOneWithoutConfigInput;
};

export type UserConfigCreateWithoutUserInput = {
  activeWorkspace?: InputMaybe<WorkspaceCreateNestedOneWithoutActiveOnUserInput>;
  theme?: InputMaybe<ThemeColor>;
};

export type UserConfigListRelationFilter = {
  every?: InputMaybe<UserConfigWhereInput>;
  none?: InputMaybe<UserConfigWhereInput>;
  some?: InputMaybe<UserConfigWhereInput>;
};

export type UserConfigMaxAggregate = {
  __typename?: 'UserConfigMaxAggregate';
  activeWorkspaceId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  theme?: Maybe<ThemeColor>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserConfigMinAggregate = {
  __typename?: 'UserConfigMinAggregate';
  activeWorkspaceId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  theme?: Maybe<ThemeColor>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserConfigNullableRelationFilter = {
  is?: InputMaybe<UserConfigWhereInput>;
  isNot?: InputMaybe<UserConfigWhereInput>;
};

export type UserConfigOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserConfigOrderByWithRelationInput = {
  activeWorkspace?: InputMaybe<WorkspaceOrderByWithRelationInput>;
  activeWorkspaceId?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  theme?: InputMaybe<SortOrderInput>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type UserConfigScalarWhereInput = {
  AND?: InputMaybe<Array<UserConfigScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserConfigScalarWhereInput>>;
  OR?: InputMaybe<Array<UserConfigScalarWhereInput>>;
  activeWorkspaceId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  theme?: InputMaybe<EnumThemeColorNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserConfigUpdateInput = {
  activeWorkspace?: InputMaybe<WorkspaceUpdateOneWithoutActiveOnUserNestedInput>;
  theme?: InputMaybe<NullableEnumThemeColorFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutConfigNestedInput>;
};

export type UserConfigUpdateManyMutationInput = {
  theme?: InputMaybe<NullableEnumThemeColorFieldUpdateOperationsInput>;
};

export type UserConfigUpdateManyWithWhereWithoutActiveWorkspaceInput = {
  data: UserConfigUpdateManyMutationInput;
  where: UserConfigScalarWhereInput;
};

export type UserConfigUpdateManyWithoutActiveWorkspaceNestedInput = {
  connect?: InputMaybe<Array<UserConfigWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserConfigCreateOrConnectWithoutActiveWorkspaceInput>>;
  create?: InputMaybe<Array<UserConfigCreateWithoutActiveWorkspaceInput>>;
  createMany?: InputMaybe<UserConfigCreateManyActiveWorkspaceInputEnvelope>;
  delete?: InputMaybe<Array<UserConfigWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserConfigScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserConfigWhereUniqueInput>>;
  set?: InputMaybe<Array<UserConfigWhereUniqueInput>>;
  update?: InputMaybe<Array<UserConfigUpdateWithWhereUniqueWithoutActiveWorkspaceInput>>;
  updateMany?: InputMaybe<Array<UserConfigUpdateManyWithWhereWithoutActiveWorkspaceInput>>;
  upsert?: InputMaybe<Array<UserConfigUpsertWithWhereUniqueWithoutActiveWorkspaceInput>>;
};

export type UserConfigUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<UserConfigWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserConfigCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<UserConfigCreateWithoutUserInput>;
  delete?: InputMaybe<UserConfigWhereInput>;
  disconnect?: InputMaybe<UserConfigWhereInput>;
  update?: InputMaybe<UserConfigUpdateToOneWithWhereWithoutUserInput>;
  upsert?: InputMaybe<UserConfigUpsertWithoutUserInput>;
};

export type UserConfigUpdateToOneWithWhereWithoutUserInput = {
  data: UserConfigUpdateWithoutUserInput;
  where?: InputMaybe<UserConfigWhereInput>;
};

export type UserConfigUpdateWithWhereUniqueWithoutActiveWorkspaceInput = {
  data: UserConfigUpdateWithoutActiveWorkspaceInput;
  where: UserConfigWhereUniqueInput;
};

export type UserConfigUpdateWithoutActiveWorkspaceInput = {
  theme?: InputMaybe<NullableEnumThemeColorFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutConfigNestedInput>;
};

export type UserConfigUpdateWithoutUserInput = {
  activeWorkspace?: InputMaybe<WorkspaceUpdateOneWithoutActiveOnUserNestedInput>;
  theme?: InputMaybe<NullableEnumThemeColorFieldUpdateOperationsInput>;
};

export type UserConfigUpsertWithWhereUniqueWithoutActiveWorkspaceInput = {
  create: UserConfigCreateWithoutActiveWorkspaceInput;
  update: UserConfigUpdateWithoutActiveWorkspaceInput;
  where: UserConfigWhereUniqueInput;
};

export type UserConfigUpsertWithoutUserInput = {
  create: UserConfigCreateWithoutUserInput;
  update: UserConfigUpdateWithoutUserInput;
  where?: InputMaybe<UserConfigWhereInput>;
};

export type UserConfigWhereInput = {
  AND?: InputMaybe<Array<UserConfigWhereInput>>;
  NOT?: InputMaybe<Array<UserConfigWhereInput>>;
  OR?: InputMaybe<Array<UserConfigWhereInput>>;
  activeWorkspace?: InputMaybe<WorkspaceNullableRelationFilter>;
  activeWorkspaceId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  theme?: InputMaybe<EnumThemeColorNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserConfigWhereUniqueInput = {
  AND?: InputMaybe<Array<UserConfigWhereInput>>;
  NOT?: InputMaybe<Array<UserConfigWhereInput>>;
  OR?: InputMaybe<Array<UserConfigWhereInput>>;
  activeWorkspace?: InputMaybe<WorkspaceNullableRelationFilter>;
  activeWorkspaceId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  theme?: InputMaybe<EnumThemeColorNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UserCount = {
  __typename?: 'UserCount';
  assignedWorkspaces: Scalars['Int']['output'];
  createdWorkspaces: Scalars['Int']['output'];
  flows: Scalars['Int']['output'];
  flowsVersion: Scalars['Int']['output'];
  refreshTokens: Scalars['Int']['output'];
  tabs: Scalars['Int']['output'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  pairId: Scalars['Int']['output'];
  role: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
};

export type UserCreateInput = {
  assignedWorkspaces?: InputMaybe<UsersOnWorkspacesCreateNestedManyWithoutUserInput>;
  config?: InputMaybe<UserConfigCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdWorkspaces?: InputMaybe<WorkspaceCreateNestedManyWithoutCreatedByInput>;
  email: Scalars['EmailAddress']['input'];
  flows?: InputMaybe<FlowCreateNestedManyWithoutUserInput>;
  flowsVersion?: InputMaybe<FlowVersionCreateNestedManyWithoutUserInput>;
  password: PasswordCreateNestedOneWithoutUserInput;
  profile?: InputMaybe<ProfileCreateNestedOneWithoutUserInput>;
  role?: InputMaybe<UserCreateroleInput>;
  tabs?: InputMaybe<TabCreateNestedManyWithoutUserInput>;
  type?: InputMaybe<UserType>;
};

export type UserCreateNestedOneWithoutAssignedWorkspacesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAssignedWorkspacesInput>;
  create?: InputMaybe<UserCreateWithoutAssignedWorkspacesInput>;
};

export type UserCreateNestedOneWithoutConfigInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutConfigInput>;
  create?: InputMaybe<UserCreateWithoutConfigInput>;
};

export type UserCreateNestedOneWithoutCreatedWorkspacesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedWorkspacesInput>;
  create?: InputMaybe<UserCreateWithoutCreatedWorkspacesInput>;
};

export type UserCreateNestedOneWithoutFlowsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFlowsInput>;
  create?: InputMaybe<UserCreateWithoutFlowsInput>;
};

export type UserCreateNestedOneWithoutFlowsVersionInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFlowsVersionInput>;
  create?: InputMaybe<UserCreateWithoutFlowsVersionInput>;
};

export type UserCreateNestedOneWithoutTabsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTabsInput>;
  create?: InputMaybe<UserCreateWithoutTabsInput>;
};

export type UserCreateOrConnectWithoutAssignedWorkspacesInput = {
  create: UserCreateWithoutAssignedWorkspacesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutConfigInput = {
  create: UserCreateWithoutConfigInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCreatedWorkspacesInput = {
  create: UserCreateWithoutCreatedWorkspacesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutFlowsInput = {
  create: UserCreateWithoutFlowsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutFlowsVersionInput = {
  create: UserCreateWithoutFlowsVersionInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTabsInput = {
  create: UserCreateWithoutTabsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAssignedWorkspacesInput = {
  config?: InputMaybe<UserConfigCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdWorkspaces?: InputMaybe<WorkspaceCreateNestedManyWithoutCreatedByInput>;
  email: Scalars['EmailAddress']['input'];
  flows?: InputMaybe<FlowCreateNestedManyWithoutUserInput>;
  flowsVersion?: InputMaybe<FlowVersionCreateNestedManyWithoutUserInput>;
  password: PasswordCreateNestedOneWithoutUserInput;
  profile?: InputMaybe<ProfileCreateNestedOneWithoutUserInput>;
  role?: InputMaybe<UserCreateroleInput>;
  tabs?: InputMaybe<TabCreateNestedManyWithoutUserInput>;
  type?: InputMaybe<UserType>;
};

export type UserCreateWithoutConfigInput = {
  assignedWorkspaces?: InputMaybe<UsersOnWorkspacesCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdWorkspaces?: InputMaybe<WorkspaceCreateNestedManyWithoutCreatedByInput>;
  email: Scalars['EmailAddress']['input'];
  flows?: InputMaybe<FlowCreateNestedManyWithoutUserInput>;
  flowsVersion?: InputMaybe<FlowVersionCreateNestedManyWithoutUserInput>;
  password: PasswordCreateNestedOneWithoutUserInput;
  profile?: InputMaybe<ProfileCreateNestedOneWithoutUserInput>;
  role?: InputMaybe<UserCreateroleInput>;
  tabs?: InputMaybe<TabCreateNestedManyWithoutUserInput>;
  type?: InputMaybe<UserType>;
};

export type UserCreateWithoutCreatedWorkspacesInput = {
  assignedWorkspaces?: InputMaybe<UsersOnWorkspacesCreateNestedManyWithoutUserInput>;
  config?: InputMaybe<UserConfigCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['EmailAddress']['input'];
  flows?: InputMaybe<FlowCreateNestedManyWithoutUserInput>;
  flowsVersion?: InputMaybe<FlowVersionCreateNestedManyWithoutUserInput>;
  password: PasswordCreateNestedOneWithoutUserInput;
  profile?: InputMaybe<ProfileCreateNestedOneWithoutUserInput>;
  role?: InputMaybe<UserCreateroleInput>;
  tabs?: InputMaybe<TabCreateNestedManyWithoutUserInput>;
  type?: InputMaybe<UserType>;
};

export type UserCreateWithoutFlowsInput = {
  assignedWorkspaces?: InputMaybe<UsersOnWorkspacesCreateNestedManyWithoutUserInput>;
  config?: InputMaybe<UserConfigCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdWorkspaces?: InputMaybe<WorkspaceCreateNestedManyWithoutCreatedByInput>;
  email: Scalars['EmailAddress']['input'];
  flowsVersion?: InputMaybe<FlowVersionCreateNestedManyWithoutUserInput>;
  password: PasswordCreateNestedOneWithoutUserInput;
  profile?: InputMaybe<ProfileCreateNestedOneWithoutUserInput>;
  role?: InputMaybe<UserCreateroleInput>;
  tabs?: InputMaybe<TabCreateNestedManyWithoutUserInput>;
  type?: InputMaybe<UserType>;
};

export type UserCreateWithoutFlowsVersionInput = {
  assignedWorkspaces?: InputMaybe<UsersOnWorkspacesCreateNestedManyWithoutUserInput>;
  config?: InputMaybe<UserConfigCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdWorkspaces?: InputMaybe<WorkspaceCreateNestedManyWithoutCreatedByInput>;
  email: Scalars['EmailAddress']['input'];
  flows?: InputMaybe<FlowCreateNestedManyWithoutUserInput>;
  password: PasswordCreateNestedOneWithoutUserInput;
  profile?: InputMaybe<ProfileCreateNestedOneWithoutUserInput>;
  role?: InputMaybe<UserCreateroleInput>;
  tabs?: InputMaybe<TabCreateNestedManyWithoutUserInput>;
  type?: InputMaybe<UserType>;
};

export type UserCreateWithoutTabsInput = {
  assignedWorkspaces?: InputMaybe<UsersOnWorkspacesCreateNestedManyWithoutUserInput>;
  config?: InputMaybe<UserConfigCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdWorkspaces?: InputMaybe<WorkspaceCreateNestedManyWithoutCreatedByInput>;
  email: Scalars['EmailAddress']['input'];
  flows?: InputMaybe<FlowCreateNestedManyWithoutUserInput>;
  flowsVersion?: InputMaybe<FlowVersionCreateNestedManyWithoutUserInput>;
  password: PasswordCreateNestedOneWithoutUserInput;
  profile?: InputMaybe<ProfileCreateNestedOneWithoutUserInput>;
  role?: InputMaybe<UserCreateroleInput>;
  type?: InputMaybe<UserType>;
};

export type UserCreateroleInput = {
  set: Array<UserRole>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['EmailAddress']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  pairId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<UserType>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['EmailAddress']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  pairId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<UserType>;
};

export type UserNullableRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserOrderByWithRelationInput = {
  assignedWorkspaces?: InputMaybe<UsersOnWorkspacesOrderByRelationAggregateInput>;
  config?: InputMaybe<UserConfigOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrderInput>;
  createdWorkspaces?: InputMaybe<WorkspaceOrderByRelationAggregateInput>;
  email?: InputMaybe<SortOrder>;
  flows?: InputMaybe<FlowOrderByRelationAggregateInput>;
  flowsVersion?: InputMaybe<FlowVersionOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  pairId?: InputMaybe<SortOrderInput>;
  password?: InputMaybe<PasswordOrderByWithRelationInput>;
  passwordId?: InputMaybe<SortOrder>;
  profile?: InputMaybe<ProfileOrderByWithRelationInput>;
  role?: InputMaybe<SortOrder>;
  tabs?: InputMaybe<TabOrderByRelationAggregateInput>;
  type?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserRole {
  RoleAdmin = 'ROLE_ADMIN',
  RoleDeveloper = 'ROLE_DEVELOPER',
  RoleGuest = 'ROLE_GUEST',
  RoleUser = 'ROLE_USER'
}

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  Id = 'id',
  PairId = 'pairId',
  PasswordId = 'passwordId',
  Role = 'role',
  Type = 'type'
}

export enum UserType {
  Admin = 'ADMIN',
  Guest = 'GUEST',
  User = 'USER'
}

export type UserUpdateInput = {
  assignedWorkspaces?: InputMaybe<UsersOnWorkspacesUpdateManyWithoutUserNestedInput>;
  config?: InputMaybe<UserConfigUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdWorkspaces?: InputMaybe<WorkspaceUpdateManyWithoutCreatedByNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  flows?: InputMaybe<FlowUpdateManyWithoutUserNestedInput>;
  flowsVersion?: InputMaybe<FlowVersionUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<PasswordUpdateOneRequiredWithoutUserNestedInput>;
  profile?: InputMaybe<ProfileUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  tabs?: InputMaybe<TabUpdateManyWithoutUserNestedInput>;
  type?: InputMaybe<EnumUserTypeFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutAssignedWorkspacesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAssignedWorkspacesInput>;
  create?: InputMaybe<UserCreateWithoutAssignedWorkspacesInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutAssignedWorkspacesInput>;
  upsert?: InputMaybe<UserUpsertWithoutAssignedWorkspacesInput>;
};

export type UserUpdateOneRequiredWithoutConfigNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutConfigInput>;
  create?: InputMaybe<UserCreateWithoutConfigInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutConfigInput>;
  upsert?: InputMaybe<UserUpsertWithoutConfigInput>;
};

export type UserUpdateOneRequiredWithoutCreatedWorkspacesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedWorkspacesInput>;
  create?: InputMaybe<UserCreateWithoutCreatedWorkspacesInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutCreatedWorkspacesInput>;
  upsert?: InputMaybe<UserUpsertWithoutCreatedWorkspacesInput>;
};

export type UserUpdateOneWithoutFlowsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFlowsInput>;
  create?: InputMaybe<UserCreateWithoutFlowsInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutFlowsInput>;
  upsert?: InputMaybe<UserUpsertWithoutFlowsInput>;
};

export type UserUpdateOneWithoutFlowsVersionNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFlowsVersionInput>;
  create?: InputMaybe<UserCreateWithoutFlowsVersionInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutFlowsVersionInput>;
  upsert?: InputMaybe<UserUpsertWithoutFlowsVersionInput>;
};

export type UserUpdateToOneWithWhereWithoutAssignedWorkspacesInput = {
  data: UserUpdateWithoutAssignedWorkspacesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutConfigInput = {
  data: UserUpdateWithoutConfigInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutCreatedWorkspacesInput = {
  data: UserUpdateWithoutCreatedWorkspacesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutFlowsInput = {
  data: UserUpdateWithoutFlowsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutFlowsVersionInput = {
  data: UserUpdateWithoutFlowsVersionInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutAssignedWorkspacesInput = {
  config?: InputMaybe<UserConfigUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdWorkspaces?: InputMaybe<WorkspaceUpdateManyWithoutCreatedByNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  flows?: InputMaybe<FlowUpdateManyWithoutUserNestedInput>;
  flowsVersion?: InputMaybe<FlowVersionUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<PasswordUpdateOneRequiredWithoutUserNestedInput>;
  profile?: InputMaybe<ProfileUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  tabs?: InputMaybe<TabUpdateManyWithoutUserNestedInput>;
  type?: InputMaybe<EnumUserTypeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutConfigInput = {
  assignedWorkspaces?: InputMaybe<UsersOnWorkspacesUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdWorkspaces?: InputMaybe<WorkspaceUpdateManyWithoutCreatedByNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  flows?: InputMaybe<FlowUpdateManyWithoutUserNestedInput>;
  flowsVersion?: InputMaybe<FlowVersionUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<PasswordUpdateOneRequiredWithoutUserNestedInput>;
  profile?: InputMaybe<ProfileUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  tabs?: InputMaybe<TabUpdateManyWithoutUserNestedInput>;
  type?: InputMaybe<EnumUserTypeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCreatedWorkspacesInput = {
  assignedWorkspaces?: InputMaybe<UsersOnWorkspacesUpdateManyWithoutUserNestedInput>;
  config?: InputMaybe<UserConfigUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  flows?: InputMaybe<FlowUpdateManyWithoutUserNestedInput>;
  flowsVersion?: InputMaybe<FlowVersionUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<PasswordUpdateOneRequiredWithoutUserNestedInput>;
  profile?: InputMaybe<ProfileUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  tabs?: InputMaybe<TabUpdateManyWithoutUserNestedInput>;
  type?: InputMaybe<EnumUserTypeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutFlowsInput = {
  assignedWorkspaces?: InputMaybe<UsersOnWorkspacesUpdateManyWithoutUserNestedInput>;
  config?: InputMaybe<UserConfigUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdWorkspaces?: InputMaybe<WorkspaceUpdateManyWithoutCreatedByNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  flowsVersion?: InputMaybe<FlowVersionUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<PasswordUpdateOneRequiredWithoutUserNestedInput>;
  profile?: InputMaybe<ProfileUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  tabs?: InputMaybe<TabUpdateManyWithoutUserNestedInput>;
  type?: InputMaybe<EnumUserTypeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutFlowsVersionInput = {
  assignedWorkspaces?: InputMaybe<UsersOnWorkspacesUpdateManyWithoutUserNestedInput>;
  config?: InputMaybe<UserConfigUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdWorkspaces?: InputMaybe<WorkspaceUpdateManyWithoutCreatedByNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  flows?: InputMaybe<FlowUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<PasswordUpdateOneRequiredWithoutUserNestedInput>;
  profile?: InputMaybe<ProfileUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  tabs?: InputMaybe<TabUpdateManyWithoutUserNestedInput>;
  type?: InputMaybe<EnumUserTypeFieldUpdateOperationsInput>;
};

export type UserUpdateroleInput = {
  push?: InputMaybe<Array<UserRole>>;
  set?: InputMaybe<Array<UserRole>>;
};

export type UserUpsertWithoutAssignedWorkspacesInput = {
  create: UserCreateWithoutAssignedWorkspacesInput;
  update: UserUpdateWithoutAssignedWorkspacesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutConfigInput = {
  create: UserCreateWithoutConfigInput;
  update: UserUpdateWithoutConfigInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutCreatedWorkspacesInput = {
  create: UserCreateWithoutCreatedWorkspacesInput;
  update: UserUpdateWithoutCreatedWorkspacesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutFlowsInput = {
  create: UserCreateWithoutFlowsInput;
  update: UserUpdateWithoutFlowsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutFlowsVersionInput = {
  create: UserCreateWithoutFlowsVersionInput;
  update: UserUpdateWithoutFlowsVersionInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  assignedWorkspaces?: InputMaybe<UsersOnWorkspacesListRelationFilter>;
  config?: InputMaybe<UserConfigNullableRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdWorkspaces?: InputMaybe<WorkspaceListRelationFilter>;
  email?: InputMaybe<StringFilter>;
  flows?: InputMaybe<FlowListRelationFilter>;
  flowsVersion?: InputMaybe<FlowVersionListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  pairId?: InputMaybe<StringNullableFilter>;
  profile?: InputMaybe<ProfileNullableRelationFilter>;
  role?: InputMaybe<EnumUserRoleNullableListFilter>;
  tabs?: InputMaybe<TabListRelationFilter>;
  type?: InputMaybe<EnumUserTypeFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  assignedWorkspaces?: InputMaybe<UsersOnWorkspacesListRelationFilter>;
  config?: InputMaybe<UserConfigNullableRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdWorkspaces?: InputMaybe<WorkspaceListRelationFilter>;
  email?: InputMaybe<Scalars['EmailAddress']['input']>;
  flows?: InputMaybe<FlowListRelationFilter>;
  flowsVersion?: InputMaybe<FlowVersionListRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  pairId?: InputMaybe<StringNullableFilter>;
  profile?: InputMaybe<ProfileNullableRelationFilter>;
  role?: InputMaybe<EnumUserRoleNullableListFilter>;
  tabs?: InputMaybe<TabListRelationFilter>;
  type?: InputMaybe<EnumUserTypeFilter>;
};

export type UsersOnWorkspaces = {
  __typename?: 'UsersOnWorkspaces';
  assignedAt?: Maybe<Scalars['DateTime']['output']>;
  user: User;
  userId: Scalars['String']['output'];
  workspace: Workspace;
  workspaceId: Scalars['String']['output'];
};

export type UsersOnWorkspacesCountAggregate = {
  __typename?: 'UsersOnWorkspacesCountAggregate';
  _all: Scalars['Int']['output'];
  assignedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
  workspaceId: Scalars['Int']['output'];
};

export type UsersOnWorkspacesCreateManyUserInput = {
  assignedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workspaceId: Scalars['String']['input'];
};

export type UsersOnWorkspacesCreateManyUserInputEnvelope = {
  data: Array<UsersOnWorkspacesCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UsersOnWorkspacesCreateManyWorkspaceInput = {
  assignedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type UsersOnWorkspacesCreateManyWorkspaceInputEnvelope = {
  data: Array<UsersOnWorkspacesCreateManyWorkspaceInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UsersOnWorkspacesCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UsersOnWorkspacesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UsersOnWorkspacesCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UsersOnWorkspacesCreateWithoutUserInput>>;
  createMany?: InputMaybe<UsersOnWorkspacesCreateManyUserInputEnvelope>;
};

export type UsersOnWorkspacesCreateNestedManyWithoutWorkspaceInput = {
  connect?: InputMaybe<Array<UsersOnWorkspacesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UsersOnWorkspacesCreateOrConnectWithoutWorkspaceInput>>;
  create?: InputMaybe<Array<UsersOnWorkspacesCreateWithoutWorkspaceInput>>;
  createMany?: InputMaybe<UsersOnWorkspacesCreateManyWorkspaceInputEnvelope>;
};

export type UsersOnWorkspacesCreateOrConnectWithoutUserInput = {
  create: UsersOnWorkspacesCreateWithoutUserInput;
  where: UsersOnWorkspacesWhereUniqueInput;
};

export type UsersOnWorkspacesCreateOrConnectWithoutWorkspaceInput = {
  create: UsersOnWorkspacesCreateWithoutWorkspaceInput;
  where: UsersOnWorkspacesWhereUniqueInput;
};

export type UsersOnWorkspacesCreateWithoutUserInput = {
  assignedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workspace: WorkspaceCreateNestedOneWithoutAssignedUsersInput;
};

export type UsersOnWorkspacesCreateWithoutWorkspaceInput = {
  assignedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutAssignedWorkspacesInput;
};

export type UsersOnWorkspacesListRelationFilter = {
  every?: InputMaybe<UsersOnWorkspacesWhereInput>;
  none?: InputMaybe<UsersOnWorkspacesWhereInput>;
  some?: InputMaybe<UsersOnWorkspacesWhereInput>;
};

export type UsersOnWorkspacesMaxAggregate = {
  __typename?: 'UsersOnWorkspacesMaxAggregate';
  assignedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  workspaceId?: Maybe<Scalars['String']['output']>;
};

export type UsersOnWorkspacesMinAggregate = {
  __typename?: 'UsersOnWorkspacesMinAggregate';
  assignedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  workspaceId?: Maybe<Scalars['String']['output']>;
};

export type UsersOnWorkspacesOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UsersOnWorkspacesScalarWhereInput = {
  AND?: InputMaybe<Array<UsersOnWorkspacesScalarWhereInput>>;
  NOT?: InputMaybe<Array<UsersOnWorkspacesScalarWhereInput>>;
  OR?: InputMaybe<Array<UsersOnWorkspacesScalarWhereInput>>;
  assignedAt?: InputMaybe<DateTimeNullableFilter>;
  userId?: InputMaybe<StringFilter>;
  workspaceId?: InputMaybe<StringFilter>;
};

export type UsersOnWorkspacesUpdateManyMutationInput = {
  assignedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type UsersOnWorkspacesUpdateManyWithWhereWithoutUserInput = {
  data: UsersOnWorkspacesUpdateManyMutationInput;
  where: UsersOnWorkspacesScalarWhereInput;
};

export type UsersOnWorkspacesUpdateManyWithWhereWithoutWorkspaceInput = {
  data: UsersOnWorkspacesUpdateManyMutationInput;
  where: UsersOnWorkspacesScalarWhereInput;
};

export type UsersOnWorkspacesUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<UsersOnWorkspacesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UsersOnWorkspacesCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UsersOnWorkspacesCreateWithoutUserInput>>;
  createMany?: InputMaybe<UsersOnWorkspacesCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UsersOnWorkspacesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UsersOnWorkspacesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UsersOnWorkspacesWhereUniqueInput>>;
  set?: InputMaybe<Array<UsersOnWorkspacesWhereUniqueInput>>;
  update?: InputMaybe<Array<UsersOnWorkspacesUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<UsersOnWorkspacesUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<UsersOnWorkspacesUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UsersOnWorkspacesUpdateManyWithoutWorkspaceNestedInput = {
  connect?: InputMaybe<Array<UsersOnWorkspacesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UsersOnWorkspacesCreateOrConnectWithoutWorkspaceInput>>;
  create?: InputMaybe<Array<UsersOnWorkspacesCreateWithoutWorkspaceInput>>;
  createMany?: InputMaybe<UsersOnWorkspacesCreateManyWorkspaceInputEnvelope>;
  delete?: InputMaybe<Array<UsersOnWorkspacesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UsersOnWorkspacesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UsersOnWorkspacesWhereUniqueInput>>;
  set?: InputMaybe<Array<UsersOnWorkspacesWhereUniqueInput>>;
  update?: InputMaybe<Array<UsersOnWorkspacesUpdateWithWhereUniqueWithoutWorkspaceInput>>;
  updateMany?: InputMaybe<Array<UsersOnWorkspacesUpdateManyWithWhereWithoutWorkspaceInput>>;
  upsert?: InputMaybe<Array<UsersOnWorkspacesUpsertWithWhereUniqueWithoutWorkspaceInput>>;
};

export type UsersOnWorkspacesUpdateWithWhereUniqueWithoutUserInput = {
  data: UsersOnWorkspacesUpdateWithoutUserInput;
  where: UsersOnWorkspacesWhereUniqueInput;
};

export type UsersOnWorkspacesUpdateWithWhereUniqueWithoutWorkspaceInput = {
  data: UsersOnWorkspacesUpdateWithoutWorkspaceInput;
  where: UsersOnWorkspacesWhereUniqueInput;
};

export type UsersOnWorkspacesUpdateWithoutUserInput = {
  assignedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  workspace?: InputMaybe<WorkspaceUpdateOneRequiredWithoutAssignedUsersNestedInput>;
};

export type UsersOnWorkspacesUpdateWithoutWorkspaceInput = {
  assignedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutAssignedWorkspacesNestedInput>;
};

export type UsersOnWorkspacesUpsertWithWhereUniqueWithoutUserInput = {
  create: UsersOnWorkspacesCreateWithoutUserInput;
  update: UsersOnWorkspacesUpdateWithoutUserInput;
  where: UsersOnWorkspacesWhereUniqueInput;
};

export type UsersOnWorkspacesUpsertWithWhereUniqueWithoutWorkspaceInput = {
  create: UsersOnWorkspacesCreateWithoutWorkspaceInput;
  update: UsersOnWorkspacesUpdateWithoutWorkspaceInput;
  where: UsersOnWorkspacesWhereUniqueInput;
};

export type UsersOnWorkspacesUserIdWorkspaceIdCompoundUniqueInput = {
  userId: Scalars['String']['input'];
  workspaceId: Scalars['String']['input'];
};

export type UsersOnWorkspacesWhereInput = {
  AND?: InputMaybe<Array<UsersOnWorkspacesWhereInput>>;
  NOT?: InputMaybe<Array<UsersOnWorkspacesWhereInput>>;
  OR?: InputMaybe<Array<UsersOnWorkspacesWhereInput>>;
  assignedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  workspace?: InputMaybe<WorkspaceRelationFilter>;
  workspaceId?: InputMaybe<StringFilter>;
};

export type UsersOnWorkspacesWhereUniqueInput = {
  AND?: InputMaybe<Array<UsersOnWorkspacesWhereInput>>;
  NOT?: InputMaybe<Array<UsersOnWorkspacesWhereInput>>;
  OR?: InputMaybe<Array<UsersOnWorkspacesWhereInput>>;
  assignedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  userId_workspaceId?: InputMaybe<UsersOnWorkspacesUserIdWorkspaceIdCompoundUniqueInput>;
  workspace?: InputMaybe<WorkspaceRelationFilter>;
  workspaceId?: InputMaybe<StringFilter>;
};

export type Workspace = {
  __typename?: 'Workspace';
  _count: WorkspaceCount;
  aberration: Scalars['String']['output'];
  actionsOnWorkspaces?: Maybe<Array<ActionsOnWorkspaces>>;
  activeOnUser?: Maybe<Array<UserConfig>>;
  assignedFlows?: Maybe<Array<FlowsOnWorkspaces>>;
  assignedUsers?: Maybe<Array<UsersOnWorkspaces>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy: User;
  createdById: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  profile?: Maybe<WorkspaceProfile>;
};

export type WorkspaceCount = {
  __typename?: 'WorkspaceCount';
  actionsOnWorkspaces: Scalars['Int']['output'];
  activeOnUser: Scalars['Int']['output'];
  assignedFlows: Scalars['Int']['output'];
  assignedUsers: Scalars['Int']['output'];
};

export type WorkspaceCountAggregate = {
  __typename?: 'WorkspaceCountAggregate';
  _all: Scalars['Int']['output'];
  aberration: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  createdById: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
};

export type WorkspaceCreateInput = {
  aberration: Scalars['String']['input'];
  actionsOnWorkspaces?: InputMaybe<ActionsOnWorkspacesCreateNestedManyWithoutWorkspaceInput>;
  activeOnUser?: InputMaybe<UserConfigCreateNestedManyWithoutActiveWorkspaceInput>;
  assignedFlows?: InputMaybe<FlowsOnWorkspacesCreateNestedManyWithoutWorkspaceInput>;
  assignedUsers?: InputMaybe<UsersOnWorkspacesCreateNestedManyWithoutWorkspaceInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy: UserCreateNestedOneWithoutCreatedWorkspacesInput;
  name: Scalars['String']['input'];
  profile?: InputMaybe<WorkspaceProfileCreateNestedOneWithoutWorkspaceInput>;
};

export type WorkspaceCreateManyCreatedByInput = {
  aberration: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  name: Scalars['String']['input'];
};

export type WorkspaceCreateManyCreatedByInputEnvelope = {
  data: Array<WorkspaceCreateManyCreatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WorkspaceCreateNestedManyWithoutCreatedByInput = {
  connect?: InputMaybe<Array<WorkspaceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WorkspaceCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<WorkspaceCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<WorkspaceCreateManyCreatedByInputEnvelope>;
};

export type WorkspaceCreateNestedOneWithoutActionsOnWorkspacesInput = {
  connect?: InputMaybe<WorkspaceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<WorkspaceCreateOrConnectWithoutActionsOnWorkspacesInput>;
  create?: InputMaybe<WorkspaceCreateWithoutActionsOnWorkspacesInput>;
};

export type WorkspaceCreateNestedOneWithoutActiveOnUserInput = {
  connect?: InputMaybe<WorkspaceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<WorkspaceCreateOrConnectWithoutActiveOnUserInput>;
  create?: InputMaybe<WorkspaceCreateWithoutActiveOnUserInput>;
};

export type WorkspaceCreateNestedOneWithoutAssignedFlowsInput = {
  connect?: InputMaybe<WorkspaceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<WorkspaceCreateOrConnectWithoutAssignedFlowsInput>;
  create?: InputMaybe<WorkspaceCreateWithoutAssignedFlowsInput>;
};

export type WorkspaceCreateNestedOneWithoutAssignedUsersInput = {
  connect?: InputMaybe<WorkspaceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<WorkspaceCreateOrConnectWithoutAssignedUsersInput>;
  create?: InputMaybe<WorkspaceCreateWithoutAssignedUsersInput>;
};

export type WorkspaceCreateOrConnectWithoutActionsOnWorkspacesInput = {
  create: WorkspaceCreateWithoutActionsOnWorkspacesInput;
  where: WorkspaceWhereUniqueInput;
};

export type WorkspaceCreateOrConnectWithoutActiveOnUserInput = {
  create: WorkspaceCreateWithoutActiveOnUserInput;
  where: WorkspaceWhereUniqueInput;
};

export type WorkspaceCreateOrConnectWithoutAssignedFlowsInput = {
  create: WorkspaceCreateWithoutAssignedFlowsInput;
  where: WorkspaceWhereUniqueInput;
};

export type WorkspaceCreateOrConnectWithoutAssignedUsersInput = {
  create: WorkspaceCreateWithoutAssignedUsersInput;
  where: WorkspaceWhereUniqueInput;
};

export type WorkspaceCreateOrConnectWithoutCreatedByInput = {
  create: WorkspaceCreateWithoutCreatedByInput;
  where: WorkspaceWhereUniqueInput;
};

export type WorkspaceCreateWithoutActionsOnWorkspacesInput = {
  aberration: Scalars['String']['input'];
  activeOnUser?: InputMaybe<UserConfigCreateNestedManyWithoutActiveWorkspaceInput>;
  assignedFlows?: InputMaybe<FlowsOnWorkspacesCreateNestedManyWithoutWorkspaceInput>;
  assignedUsers?: InputMaybe<UsersOnWorkspacesCreateNestedManyWithoutWorkspaceInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy: UserCreateNestedOneWithoutCreatedWorkspacesInput;
  name: Scalars['String']['input'];
  profile?: InputMaybe<WorkspaceProfileCreateNestedOneWithoutWorkspaceInput>;
};

export type WorkspaceCreateWithoutActiveOnUserInput = {
  aberration: Scalars['String']['input'];
  actionsOnWorkspaces?: InputMaybe<ActionsOnWorkspacesCreateNestedManyWithoutWorkspaceInput>;
  assignedFlows?: InputMaybe<FlowsOnWorkspacesCreateNestedManyWithoutWorkspaceInput>;
  assignedUsers?: InputMaybe<UsersOnWorkspacesCreateNestedManyWithoutWorkspaceInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy: UserCreateNestedOneWithoutCreatedWorkspacesInput;
  name: Scalars['String']['input'];
  profile?: InputMaybe<WorkspaceProfileCreateNestedOneWithoutWorkspaceInput>;
};

export type WorkspaceCreateWithoutAssignedFlowsInput = {
  aberration: Scalars['String']['input'];
  actionsOnWorkspaces?: InputMaybe<ActionsOnWorkspacesCreateNestedManyWithoutWorkspaceInput>;
  activeOnUser?: InputMaybe<UserConfigCreateNestedManyWithoutActiveWorkspaceInput>;
  assignedUsers?: InputMaybe<UsersOnWorkspacesCreateNestedManyWithoutWorkspaceInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy: UserCreateNestedOneWithoutCreatedWorkspacesInput;
  name: Scalars['String']['input'];
  profile?: InputMaybe<WorkspaceProfileCreateNestedOneWithoutWorkspaceInput>;
};

export type WorkspaceCreateWithoutAssignedUsersInput = {
  aberration: Scalars['String']['input'];
  actionsOnWorkspaces?: InputMaybe<ActionsOnWorkspacesCreateNestedManyWithoutWorkspaceInput>;
  activeOnUser?: InputMaybe<UserConfigCreateNestedManyWithoutActiveWorkspaceInput>;
  assignedFlows?: InputMaybe<FlowsOnWorkspacesCreateNestedManyWithoutWorkspaceInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy: UserCreateNestedOneWithoutCreatedWorkspacesInput;
  name: Scalars['String']['input'];
  profile?: InputMaybe<WorkspaceProfileCreateNestedOneWithoutWorkspaceInput>;
};

export type WorkspaceCreateWithoutCreatedByInput = {
  aberration: Scalars['String']['input'];
  actionsOnWorkspaces?: InputMaybe<ActionsOnWorkspacesCreateNestedManyWithoutWorkspaceInput>;
  activeOnUser?: InputMaybe<UserConfigCreateNestedManyWithoutActiveWorkspaceInput>;
  assignedFlows?: InputMaybe<FlowsOnWorkspacesCreateNestedManyWithoutWorkspaceInput>;
  assignedUsers?: InputMaybe<UsersOnWorkspacesCreateNestedManyWithoutWorkspaceInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  name: Scalars['String']['input'];
  profile?: InputMaybe<WorkspaceProfileCreateNestedOneWithoutWorkspaceInput>;
};

export type WorkspaceListRelationFilter = {
  every?: InputMaybe<WorkspaceWhereInput>;
  none?: InputMaybe<WorkspaceWhereInput>;
  some?: InputMaybe<WorkspaceWhereInput>;
};

export type WorkspaceMaxAggregate = {
  __typename?: 'WorkspaceMaxAggregate';
  aberration?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdById?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type WorkspaceMinAggregate = {
  __typename?: 'WorkspaceMinAggregate';
  aberration?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdById?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type WorkspaceNullableRelationFilter = {
  is?: InputMaybe<WorkspaceWhereInput>;
  isNot?: InputMaybe<WorkspaceWhereInput>;
};

export type WorkspaceOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type WorkspaceOrderByWithRelationInput = {
  aberration?: InputMaybe<SortOrder>;
  actionsOnWorkspaces?: InputMaybe<ActionsOnWorkspacesOrderByRelationAggregateInput>;
  activeOnUser?: InputMaybe<UserConfigOrderByRelationAggregateInput>;
  assignedFlows?: InputMaybe<FlowsOnWorkspacesOrderByRelationAggregateInput>;
  assignedUsers?: InputMaybe<UsersOnWorkspacesOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrderInput>;
  createdBy?: InputMaybe<UserOrderByWithRelationInput>;
  createdById?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  profile?: InputMaybe<WorkspaceProfileOrderByWithRelationInput>;
};

export type WorkspaceProfile = {
  __typename?: 'WorkspaceProfile';
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  workspace: Workspace;
  workspaceId: Scalars['String']['output'];
};

export type WorkspaceProfileCountAggregate = {
  __typename?: 'WorkspaceProfileCountAggregate';
  _all: Scalars['Int']['output'];
  color: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  icon: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  workspaceId: Scalars['Int']['output'];
};

export type WorkspaceProfileCreateNestedOneWithoutWorkspaceInput = {
  connect?: InputMaybe<WorkspaceProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<WorkspaceProfileCreateOrConnectWithoutWorkspaceInput>;
  create?: InputMaybe<WorkspaceProfileCreateWithoutWorkspaceInput>;
};

export type WorkspaceProfileCreateOrConnectWithoutWorkspaceInput = {
  create: WorkspaceProfileCreateWithoutWorkspaceInput;
  where: WorkspaceProfileWhereUniqueInput;
};

export type WorkspaceProfileCreateWithoutWorkspaceInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
};

export type WorkspaceProfileMaxAggregate = {
  __typename?: 'WorkspaceProfileMaxAggregate';
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  workspaceId?: Maybe<Scalars['String']['output']>;
};

export type WorkspaceProfileMinAggregate = {
  __typename?: 'WorkspaceProfileMinAggregate';
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  workspaceId?: Maybe<Scalars['String']['output']>;
};

export type WorkspaceProfileNullableRelationFilter = {
  is?: InputMaybe<WorkspaceProfileWhereInput>;
  isNot?: InputMaybe<WorkspaceProfileWhereInput>;
};

export type WorkspaceProfileOrderByWithRelationInput = {
  color?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrderInput>;
  description?: InputMaybe<SortOrderInput>;
  icon?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  workspace?: InputMaybe<WorkspaceOrderByWithRelationInput>;
  workspaceId?: InputMaybe<SortOrder>;
};

export type WorkspaceProfileUpdateOneWithoutWorkspaceNestedInput = {
  connect?: InputMaybe<WorkspaceProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<WorkspaceProfileCreateOrConnectWithoutWorkspaceInput>;
  create?: InputMaybe<WorkspaceProfileCreateWithoutWorkspaceInput>;
  delete?: InputMaybe<WorkspaceProfileWhereInput>;
  disconnect?: InputMaybe<WorkspaceProfileWhereInput>;
  update?: InputMaybe<WorkspaceProfileUpdateToOneWithWhereWithoutWorkspaceInput>;
  upsert?: InputMaybe<WorkspaceProfileUpsertWithoutWorkspaceInput>;
};

export type WorkspaceProfileUpdateToOneWithWhereWithoutWorkspaceInput = {
  data: WorkspaceProfileUpdateWithoutWorkspaceInput;
  where?: InputMaybe<WorkspaceProfileWhereInput>;
};

export type WorkspaceProfileUpdateWithoutWorkspaceInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type WorkspaceProfileUpsertWithoutWorkspaceInput = {
  create: WorkspaceProfileCreateWithoutWorkspaceInput;
  update: WorkspaceProfileUpdateWithoutWorkspaceInput;
  where?: InputMaybe<WorkspaceProfileWhereInput>;
};

export type WorkspaceProfileWhereInput = {
  AND?: InputMaybe<Array<WorkspaceProfileWhereInput>>;
  NOT?: InputMaybe<Array<WorkspaceProfileWhereInput>>;
  OR?: InputMaybe<Array<WorkspaceProfileWhereInput>>;
  color?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  icon?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  workspace?: InputMaybe<WorkspaceRelationFilter>;
  workspaceId?: InputMaybe<StringFilter>;
};

export type WorkspaceProfileWhereUniqueInput = {
  AND?: InputMaybe<Array<WorkspaceProfileWhereInput>>;
  NOT?: InputMaybe<Array<WorkspaceProfileWhereInput>>;
  OR?: InputMaybe<Array<WorkspaceProfileWhereInput>>;
  color?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  icon?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  workspace?: InputMaybe<WorkspaceRelationFilter>;
  workspaceId?: InputMaybe<Scalars['String']['input']>;
};

export type WorkspaceRelationFilter = {
  is?: InputMaybe<WorkspaceWhereInput>;
  isNot?: InputMaybe<WorkspaceWhereInput>;
};

export enum WorkspaceScalarFieldEnum {
  Aberration = 'aberration',
  CreatedAt = 'createdAt',
  CreatedById = 'createdById',
  Id = 'id',
  Name = 'name'
}

export type WorkspaceScalarWhereInput = {
  AND?: InputMaybe<Array<WorkspaceScalarWhereInput>>;
  NOT?: InputMaybe<Array<WorkspaceScalarWhereInput>>;
  OR?: InputMaybe<Array<WorkspaceScalarWhereInput>>;
  aberration?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdById?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type WorkspaceUpdateInput = {
  aberration?: InputMaybe<StringFieldUpdateOperationsInput>;
  actionsOnWorkspaces?: InputMaybe<ActionsOnWorkspacesUpdateManyWithoutWorkspaceNestedInput>;
  activeOnUser?: InputMaybe<UserConfigUpdateManyWithoutActiveWorkspaceNestedInput>;
  assignedFlows?: InputMaybe<FlowsOnWorkspacesUpdateManyWithoutWorkspaceNestedInput>;
  assignedUsers?: InputMaybe<UsersOnWorkspacesUpdateManyWithoutWorkspaceNestedInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdBy?: InputMaybe<UserUpdateOneRequiredWithoutCreatedWorkspacesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<WorkspaceProfileUpdateOneWithoutWorkspaceNestedInput>;
};

export type WorkspaceUpdateManyMutationInput = {
  aberration?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type WorkspaceUpdateManyWithWhereWithoutCreatedByInput = {
  data: WorkspaceUpdateManyMutationInput;
  where: WorkspaceScalarWhereInput;
};

export type WorkspaceUpdateManyWithoutCreatedByNestedInput = {
  connect?: InputMaybe<Array<WorkspaceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WorkspaceCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<WorkspaceCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<WorkspaceCreateManyCreatedByInputEnvelope>;
  delete?: InputMaybe<Array<WorkspaceWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<WorkspaceScalarWhereInput>>;
  disconnect?: InputMaybe<Array<WorkspaceWhereUniqueInput>>;
  set?: InputMaybe<Array<WorkspaceWhereUniqueInput>>;
  update?: InputMaybe<Array<WorkspaceUpdateWithWhereUniqueWithoutCreatedByInput>>;
  updateMany?: InputMaybe<Array<WorkspaceUpdateManyWithWhereWithoutCreatedByInput>>;
  upsert?: InputMaybe<Array<WorkspaceUpsertWithWhereUniqueWithoutCreatedByInput>>;
};

export type WorkspaceUpdateOneRequiredWithoutActionsOnWorkspacesNestedInput = {
  connect?: InputMaybe<WorkspaceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<WorkspaceCreateOrConnectWithoutActionsOnWorkspacesInput>;
  create?: InputMaybe<WorkspaceCreateWithoutActionsOnWorkspacesInput>;
  update?: InputMaybe<WorkspaceUpdateToOneWithWhereWithoutActionsOnWorkspacesInput>;
  upsert?: InputMaybe<WorkspaceUpsertWithoutActionsOnWorkspacesInput>;
};

export type WorkspaceUpdateOneRequiredWithoutAssignedFlowsNestedInput = {
  connect?: InputMaybe<WorkspaceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<WorkspaceCreateOrConnectWithoutAssignedFlowsInput>;
  create?: InputMaybe<WorkspaceCreateWithoutAssignedFlowsInput>;
  update?: InputMaybe<WorkspaceUpdateToOneWithWhereWithoutAssignedFlowsInput>;
  upsert?: InputMaybe<WorkspaceUpsertWithoutAssignedFlowsInput>;
};

export type WorkspaceUpdateOneRequiredWithoutAssignedUsersNestedInput = {
  connect?: InputMaybe<WorkspaceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<WorkspaceCreateOrConnectWithoutAssignedUsersInput>;
  create?: InputMaybe<WorkspaceCreateWithoutAssignedUsersInput>;
  update?: InputMaybe<WorkspaceUpdateToOneWithWhereWithoutAssignedUsersInput>;
  upsert?: InputMaybe<WorkspaceUpsertWithoutAssignedUsersInput>;
};

export type WorkspaceUpdateOneWithoutActiveOnUserNestedInput = {
  connect?: InputMaybe<WorkspaceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<WorkspaceCreateOrConnectWithoutActiveOnUserInput>;
  create?: InputMaybe<WorkspaceCreateWithoutActiveOnUserInput>;
  delete?: InputMaybe<WorkspaceWhereInput>;
  disconnect?: InputMaybe<WorkspaceWhereInput>;
  update?: InputMaybe<WorkspaceUpdateToOneWithWhereWithoutActiveOnUserInput>;
  upsert?: InputMaybe<WorkspaceUpsertWithoutActiveOnUserInput>;
};

export type WorkspaceUpdateToOneWithWhereWithoutActionsOnWorkspacesInput = {
  data: WorkspaceUpdateWithoutActionsOnWorkspacesInput;
  where?: InputMaybe<WorkspaceWhereInput>;
};

export type WorkspaceUpdateToOneWithWhereWithoutActiveOnUserInput = {
  data: WorkspaceUpdateWithoutActiveOnUserInput;
  where?: InputMaybe<WorkspaceWhereInput>;
};

export type WorkspaceUpdateToOneWithWhereWithoutAssignedFlowsInput = {
  data: WorkspaceUpdateWithoutAssignedFlowsInput;
  where?: InputMaybe<WorkspaceWhereInput>;
};

export type WorkspaceUpdateToOneWithWhereWithoutAssignedUsersInput = {
  data: WorkspaceUpdateWithoutAssignedUsersInput;
  where?: InputMaybe<WorkspaceWhereInput>;
};

export type WorkspaceUpdateWithWhereUniqueWithoutCreatedByInput = {
  data: WorkspaceUpdateWithoutCreatedByInput;
  where: WorkspaceWhereUniqueInput;
};

export type WorkspaceUpdateWithoutActionsOnWorkspacesInput = {
  aberration?: InputMaybe<StringFieldUpdateOperationsInput>;
  activeOnUser?: InputMaybe<UserConfigUpdateManyWithoutActiveWorkspaceNestedInput>;
  assignedFlows?: InputMaybe<FlowsOnWorkspacesUpdateManyWithoutWorkspaceNestedInput>;
  assignedUsers?: InputMaybe<UsersOnWorkspacesUpdateManyWithoutWorkspaceNestedInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdBy?: InputMaybe<UserUpdateOneRequiredWithoutCreatedWorkspacesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<WorkspaceProfileUpdateOneWithoutWorkspaceNestedInput>;
};

export type WorkspaceUpdateWithoutActiveOnUserInput = {
  aberration?: InputMaybe<StringFieldUpdateOperationsInput>;
  actionsOnWorkspaces?: InputMaybe<ActionsOnWorkspacesUpdateManyWithoutWorkspaceNestedInput>;
  assignedFlows?: InputMaybe<FlowsOnWorkspacesUpdateManyWithoutWorkspaceNestedInput>;
  assignedUsers?: InputMaybe<UsersOnWorkspacesUpdateManyWithoutWorkspaceNestedInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdBy?: InputMaybe<UserUpdateOneRequiredWithoutCreatedWorkspacesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<WorkspaceProfileUpdateOneWithoutWorkspaceNestedInput>;
};

export type WorkspaceUpdateWithoutAssignedFlowsInput = {
  aberration?: InputMaybe<StringFieldUpdateOperationsInput>;
  actionsOnWorkspaces?: InputMaybe<ActionsOnWorkspacesUpdateManyWithoutWorkspaceNestedInput>;
  activeOnUser?: InputMaybe<UserConfigUpdateManyWithoutActiveWorkspaceNestedInput>;
  assignedUsers?: InputMaybe<UsersOnWorkspacesUpdateManyWithoutWorkspaceNestedInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdBy?: InputMaybe<UserUpdateOneRequiredWithoutCreatedWorkspacesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<WorkspaceProfileUpdateOneWithoutWorkspaceNestedInput>;
};

export type WorkspaceUpdateWithoutAssignedUsersInput = {
  aberration?: InputMaybe<StringFieldUpdateOperationsInput>;
  actionsOnWorkspaces?: InputMaybe<ActionsOnWorkspacesUpdateManyWithoutWorkspaceNestedInput>;
  activeOnUser?: InputMaybe<UserConfigUpdateManyWithoutActiveWorkspaceNestedInput>;
  assignedFlows?: InputMaybe<FlowsOnWorkspacesUpdateManyWithoutWorkspaceNestedInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdBy?: InputMaybe<UserUpdateOneRequiredWithoutCreatedWorkspacesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<WorkspaceProfileUpdateOneWithoutWorkspaceNestedInput>;
};

export type WorkspaceUpdateWithoutCreatedByInput = {
  aberration?: InputMaybe<StringFieldUpdateOperationsInput>;
  actionsOnWorkspaces?: InputMaybe<ActionsOnWorkspacesUpdateManyWithoutWorkspaceNestedInput>;
  activeOnUser?: InputMaybe<UserConfigUpdateManyWithoutActiveWorkspaceNestedInput>;
  assignedFlows?: InputMaybe<FlowsOnWorkspacesUpdateManyWithoutWorkspaceNestedInput>;
  assignedUsers?: InputMaybe<UsersOnWorkspacesUpdateManyWithoutWorkspaceNestedInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<WorkspaceProfileUpdateOneWithoutWorkspaceNestedInput>;
};

export type WorkspaceUpsertWithWhereUniqueWithoutCreatedByInput = {
  create: WorkspaceCreateWithoutCreatedByInput;
  update: WorkspaceUpdateWithoutCreatedByInput;
  where: WorkspaceWhereUniqueInput;
};

export type WorkspaceUpsertWithoutActionsOnWorkspacesInput = {
  create: WorkspaceCreateWithoutActionsOnWorkspacesInput;
  update: WorkspaceUpdateWithoutActionsOnWorkspacesInput;
  where?: InputMaybe<WorkspaceWhereInput>;
};

export type WorkspaceUpsertWithoutActiveOnUserInput = {
  create: WorkspaceCreateWithoutActiveOnUserInput;
  update: WorkspaceUpdateWithoutActiveOnUserInput;
  where?: InputMaybe<WorkspaceWhereInput>;
};

export type WorkspaceUpsertWithoutAssignedFlowsInput = {
  create: WorkspaceCreateWithoutAssignedFlowsInput;
  update: WorkspaceUpdateWithoutAssignedFlowsInput;
  where?: InputMaybe<WorkspaceWhereInput>;
};

export type WorkspaceUpsertWithoutAssignedUsersInput = {
  create: WorkspaceCreateWithoutAssignedUsersInput;
  update: WorkspaceUpdateWithoutAssignedUsersInput;
  where?: InputMaybe<WorkspaceWhereInput>;
};

export type WorkspaceWhereInput = {
  AND?: InputMaybe<Array<WorkspaceWhereInput>>;
  NOT?: InputMaybe<Array<WorkspaceWhereInput>>;
  OR?: InputMaybe<Array<WorkspaceWhereInput>>;
  aberration?: InputMaybe<StringFilter>;
  actionsOnWorkspaces?: InputMaybe<ActionsOnWorkspacesListRelationFilter>;
  activeOnUser?: InputMaybe<UserConfigListRelationFilter>;
  assignedFlows?: InputMaybe<FlowsOnWorkspacesListRelationFilter>;
  assignedUsers?: InputMaybe<UsersOnWorkspacesListRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserRelationFilter>;
  createdById?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  profile?: InputMaybe<WorkspaceProfileNullableRelationFilter>;
};

export type WorkspaceWhereUniqueInput = {
  AND?: InputMaybe<Array<WorkspaceWhereInput>>;
  NOT?: InputMaybe<Array<WorkspaceWhereInput>>;
  OR?: InputMaybe<Array<WorkspaceWhereInput>>;
  aberration?: InputMaybe<Scalars['String']['input']>;
  actionsOnWorkspaces?: InputMaybe<ActionsOnWorkspacesListRelationFilter>;
  activeOnUser?: InputMaybe<UserConfigListRelationFilter>;
  assignedFlows?: InputMaybe<FlowsOnWorkspacesListRelationFilter>;
  assignedUsers?: InputMaybe<UsersOnWorkspacesListRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserRelationFilter>;
  createdById?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  profile?: InputMaybe<WorkspaceProfileNullableRelationFilter>;
};

export type ActionQueryVariables = Exact<{
  where: ActionWhereUniqueInput;
}>;


export type ActionQuery = { __typename: 'Query', action: { __typename: 'Action', width?: number | null, height?: number | null, radius?: number | null, class?: string | null, description?: string | null, id: string, name: string, code?: string | null, color?: string | null, variables?: any | null, type: ActionType, createdAt?: any | null } };

export type ActionsQueryVariables = Exact<{
  where?: InputMaybe<ActionWhereInput>;
  orderBy?: InputMaybe<Array<ActionOrderByWithRelationInput> | ActionOrderByWithRelationInput>;
}>;


export type ActionsQuery = { __typename: 'Query', actions: Array<{ __typename: 'Action', width?: number | null, height?: number | null, radius?: number | null, class?: string | null, description?: string | null, id: string, name: string, code?: string | null, color?: string | null, variables?: any | null, type: ActionType, createdAt?: any | null }> };

export type ActionsQueryFragmentFragment = { __typename: 'Action', width?: number | null, height?: number | null, radius?: number | null, class?: string | null, description?: string | null, id: string, name: string, code?: string | null, color?: string | null, variables?: any | null, type: ActionType, createdAt?: any | null };

export type FlowQueryVariables = Exact<{
  where: FlowWhereUniqueInput;
}>;


export type FlowQuery = { __typename: 'Query', flow: { __typename: 'Flow', description?: string | null, data?: any | null, edges?: any | null, id: string, name: string, code: string, externalId?: string | null, createdAt?: any | null, _count: { __typename?: 'FlowCount', versions: number } } };

export type FlowsQueryVariables = Exact<{
  where?: InputMaybe<FlowWhereInput>;
  orderBy?: InputMaybe<Array<FlowOrderByWithRelationInput> | FlowOrderByWithRelationInput>;
}>;


export type FlowsQuery = { __typename?: 'Query', flows: Array<{ __typename: 'Flow', id: string, name: string, code: string, externalId?: string | null, createdAt?: any | null }> };

export type FlowsQueryFragmentFragment = { __typename: 'Flow', id: string, name: string, code: string, externalId?: string | null, createdAt?: any | null };

export type ActionBaseFragmentFragment = { __typename?: 'Action', id: string, name: string, code?: string | null, color?: string | null, variables?: any | null, type: ActionType, createdAt?: any | null };

export type FlowBaseFragmentFragment = { __typename?: 'Flow', id: string, name: string, code: string, externalId?: string | null, createdAt?: any | null };

export type ProfileFragmentFragment = { __typename: 'Profile', id: string, acronym?: string | null, avatar?: string | null, firstName: string, lastName: string, username?: string | null, bio?: string | null };

export type TabFragmentFragment = { __typename: 'Tab', id: string, data?: any | null };

export type MeFragmentFragment = { __typename: 'User', id: string, type: UserType, role?: Array<UserRole> | null, email: any, tabs?: Array<{ __typename: 'Tab', id: string, data?: any | null }> | null, profile?: { __typename: 'Profile', id: string, acronym?: string | null, avatar?: string | null, firstName: string, lastName: string, username?: string | null, bio?: string | null } | null, createdWorkspaces?: Array<{ __typename: 'Workspace', id: string, name: string, aberration: string }> | null, assignedWorkspaces?: Array<{ __typename: 'UsersOnWorkspaces', workspace: { __typename: 'Workspace', id: string, name: string, aberration: string } }> | null };

export type WorkspaceBaseFragmentFragment = { __typename: 'Workspace', id: string, name: string, aberration: string };

export type WorkspaceProfileFragmentFragment = { __typename?: 'WorkspaceProfile', id: string, color?: string | null, icon?: string | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename: 'Query', me: { __typename: 'User', id: string, type: UserType, role?: Array<UserRole> | null, email: any, tabs?: Array<{ __typename: 'Tab', id: string, data?: any | null }> | null, profile?: { __typename: 'Profile', id: string, acronym?: string | null, avatar?: string | null, firstName: string, lastName: string, username?: string | null, bio?: string | null } | null, createdWorkspaces?: Array<{ __typename: 'Workspace', id: string, name: string, aberration: string }> | null, assignedWorkspaces?: Array<{ __typename: 'UsersOnWorkspaces', workspace: { __typename: 'Workspace', id: string, name: string, aberration: string } }> | null } };

export type MyConfigQueryVariables = Exact<{ [key: string]: never; }>;


export type MyConfigQuery = { __typename?: 'Query', myConfig: { __typename: 'UserConfig', id: string, theme?: ThemeColor | null, activeWorkspace?: { __typename: 'Workspace', id: string, name: string, aberration: string, profile?: { __typename: 'WorkspaceProfile', id: string, color?: string | null, icon?: string | null } | null } | null } };

export type MyConfigFragmentFragment = { __typename: 'UserConfig', id: string, theme?: ThemeColor | null, activeWorkspace?: { __typename: 'Workspace', id: string, name: string, aberration: string, profile?: { __typename: 'WorkspaceProfile', id: string, color?: string | null, icon?: string | null } | null } | null };

export type CreateActionMutationVariables = Exact<{
  data: ActionCreateInput;
}>;


export type CreateActionMutation = { __typename: 'Mutation', createAction: { __typename: 'Action', width?: number | null, height?: number | null, radius?: number | null, class?: string | null, description?: string | null, id: string, name: string, code?: string | null, color?: string | null, variables?: any | null, type: ActionType, createdAt?: any | null } };

export type UpdateActionMutationVariables = Exact<{
  data: ActionUpdateInput;
  where: ActionWhereUniqueInput;
}>;


export type UpdateActionMutation = { __typename: 'Mutation', updateAction: { __typename: 'Action', width?: number | null, height?: number | null, radius?: number | null, class?: string | null, description?: string | null, id: string, name: string, code?: string | null, color?: string | null, variables?: any | null, type: ActionType, createdAt?: any | null } };

export type UpdateFlowMutationVariables = Exact<{
  data: FlowUpdateInput;
  where: FlowWhereUniqueInput;
}>;


export type UpdateFlowMutation = { __typename?: 'Mutation', updateFlow: { __typename: 'Flow', description?: string | null, data?: any | null, id: string, name: string, code: string, externalId?: string | null, createdAt?: any | null, _count: { __typename?: 'FlowCount', versions: number } } };

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename: 'Authorize', accessToken: any, refreshToken: any, user: { __typename: 'User', id: string } } };

export type UpdateUserConfigMutationVariables = Exact<{
  data: UserConfigUpdateInput;
  where: UserConfigWhereUniqueInput;
}>;


export type UpdateUserConfigMutation = { __typename?: 'Mutation', updateUserConfig: { __typename: 'UserConfig', id: string, theme?: ThemeColor | null, activeWorkspace?: { __typename: 'Workspace', id: string, name: string, aberration: string, profile?: { __typename: 'WorkspaceProfile', id: string, color?: string | null, icon?: string | null } | null } | null } };

export type WorkspaceOnWorkspacesPickerQueryVariables = Exact<{
  workspaceWhere: WorkspaceWhereUniqueInput;
}>;


export type WorkspaceOnWorkspacesPickerQuery = { __typename?: 'Query', workspace: { __typename: 'Workspace', id: string, name: string, aberration: string, profile?: { __typename: 'WorkspaceProfile', id: string, color?: string | null, icon?: string | null } | null } };

export type MyAssignWorkspacesOnPickerQueryVariables = Exact<{
  workspaceWhere?: InputMaybe<WorkspaceWhereInput>;
}>;


export type MyAssignWorkspacesOnPickerQuery = { __typename?: 'Query', workspaces: Array<{ __typename: 'Workspace', id: string, name: string, aberration: string, profile?: { __typename: 'WorkspaceProfile', id: string, color?: string | null, icon?: string | null } | null }> };

export const ActionBaseFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActionBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Action"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"variables"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<ActionBaseFragmentFragment, unknown>;
export const ActionsQueryFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActionsQueryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Action"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActionBaseFragment"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"radius"}},{"kind":"Field","name":{"kind":"Name","value":"class"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActionBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Action"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"variables"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<ActionsQueryFragmentFragment, unknown>;
export const FlowBaseFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FlowBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Flow"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<FlowBaseFragmentFragment, unknown>;
export const FlowsQueryFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FlowsQueryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Flow"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FlowBaseFragment"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FlowBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Flow"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<FlowsQueryFragmentFragment, unknown>;
export const TabFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TabFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tab"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}}]} as unknown as DocumentNode<TabFragmentFragment, unknown>;
export const ProfileFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfileFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Profile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"acronym"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}}]} as unknown as DocumentNode<ProfileFragmentFragment, unknown>;
export const WorkspaceBaseFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorkspaceBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Workspace"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"aberration"}}]}}]} as unknown as DocumentNode<WorkspaceBaseFragmentFragment, unknown>;
export const MeFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"tabs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TabFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdWorkspaces"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WorkspaceBaseFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedWorkspaces"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"workspace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WorkspaceBaseFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TabFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tab"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfileFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Profile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"acronym"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorkspaceBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Workspace"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"aberration"}}]}}]} as unknown as DocumentNode<MeFragmentFragment, unknown>;
export const WorkspaceProfileFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorkspaceProfileFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WorkspaceProfile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}}]}}]} as unknown as DocumentNode<WorkspaceProfileFragmentFragment, unknown>;
export const MyConfigFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MyConfigFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserConfig"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"activeWorkspace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WorkspaceBaseFragment"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WorkspaceProfileFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorkspaceBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Workspace"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"aberration"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorkspaceProfileFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WorkspaceProfile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}}]}}]} as unknown as DocumentNode<MyConfigFragmentFragment, unknown>;
export const ActionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Action"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ActionWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"action"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActionBaseFragment"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"radius"}},{"kind":"Field","name":{"kind":"Name","value":"class"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActionBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Action"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"variables"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<ActionQuery, ActionQueryVariables>;
export const ActionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Actions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ActionWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ActionOrderByWithRelationInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"actions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActionsQueryFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActionBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Action"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"variables"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActionsQueryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Action"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActionBaseFragment"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"radius"}},{"kind":"Field","name":{"kind":"Name","value":"class"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]} as unknown as DocumentNode<ActionsQuery, ActionsQueryVariables>;
export const FlowDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Flow"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FlowWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"flow"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"edges"}},{"kind":"Field","name":{"kind":"Name","value":"_count"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"versions"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FlowBaseFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FlowBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Flow"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<FlowQuery, FlowQueryVariables>;
export const FlowsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Flows"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FlowWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FlowOrderByWithRelationInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"flows"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FlowsQueryFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FlowBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Flow"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FlowsQueryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Flow"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FlowBaseFragment"}}]}}]} as unknown as DocumentNode<FlowsQuery, FlowsQueryVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MeFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TabFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tab"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfileFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Profile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"acronym"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorkspaceBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Workspace"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"aberration"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"tabs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TabFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdWorkspaces"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WorkspaceBaseFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedWorkspaces"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"workspace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WorkspaceBaseFragment"}}]}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const MyConfigDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyConfig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myConfig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MyConfigFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorkspaceBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Workspace"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"aberration"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorkspaceProfileFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WorkspaceProfile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MyConfigFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserConfig"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"activeWorkspace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WorkspaceBaseFragment"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WorkspaceProfileFragment"}}]}}]}}]}}]} as unknown as DocumentNode<MyConfigQuery, MyConfigQueryVariables>;
export const CreateActionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ActionCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createAction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActionBaseFragment"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"radius"}},{"kind":"Field","name":{"kind":"Name","value":"class"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActionBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Action"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"variables"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<CreateActionMutation, CreateActionMutationVariables>;
export const UpdateActionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ActionUpdateInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ActionWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"updateAction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActionBaseFragment"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"radius"}},{"kind":"Field","name":{"kind":"Name","value":"class"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActionBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Action"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"variables"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<UpdateActionMutation, UpdateActionMutationVariables>;
export const UpdateFlowDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateFlow"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FlowUpdateInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FlowWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateFlow"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"_count"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"versions"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FlowBaseFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FlowBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Flow"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<UpdateFlowMutation, UpdateFlowMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const UpdateUserConfigDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserConfig"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserConfigUpdateInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserConfigWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUserConfig"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MyConfigFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorkspaceBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Workspace"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"aberration"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorkspaceProfileFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WorkspaceProfile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MyConfigFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserConfig"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"activeWorkspace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WorkspaceBaseFragment"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WorkspaceProfileFragment"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateUserConfigMutation, UpdateUserConfigMutationVariables>;
export const WorkspaceOnWorkspacesPickerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WorkspaceOnWorkspacesPicker"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workspaceWhere"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WorkspaceWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workspace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workspaceWhere"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WorkspaceBaseFragment"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WorkspaceProfileFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorkspaceBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Workspace"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"aberration"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorkspaceProfileFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WorkspaceProfile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}}]}}]} as unknown as DocumentNode<WorkspaceOnWorkspacesPickerQuery, WorkspaceOnWorkspacesPickerQueryVariables>;
export const MyAssignWorkspacesOnPickerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"myAssignWorkspacesOnPicker"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workspaceWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"WorkspaceWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workspaces"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workspaceWhere"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WorkspaceBaseFragment"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WorkspaceProfileFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorkspaceBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Workspace"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"aberration"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorkspaceProfileFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WorkspaceProfile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}}]}}]} as unknown as DocumentNode<MyAssignWorkspacesOnPickerQuery, MyAssignWorkspacesOnPickerQueryVariables>;