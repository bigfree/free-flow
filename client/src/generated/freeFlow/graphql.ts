/* eslint-disable */
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
  code: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  externalId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type FlowCountAggregate = {
  __typename?: 'FlowCountAggregate';
  _all: Scalars['Int']['output'];
  code: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  data: Scalars['Int']['output'];
  externalId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type FlowCreateInput = {
  code: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  externalId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  user: UserCreateNestedOneWithoutFlowsInput;
};

export type FlowCreateManyUserInput = {
  code: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
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

export type FlowCreateOrConnectWithoutUserInput = {
  create: FlowCreateWithoutUserInput;
  where: FlowWhereUniqueInput;
};

export type FlowCreateWithoutUserInput = {
  code: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  externalId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
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
  externalId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type FlowMinAggregate = {
  __typename?: 'FlowMinAggregate';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  externalId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type FlowOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FlowOrderByWithRelationInput = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrderInput>;
  data?: InputMaybe<SortOrderInput>;
  externalId?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum FlowScalarFieldEnum {
  Code = 'code',
  CreatedAt = 'createdAt',
  Data = 'data',
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
  externalId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type FlowUpdateInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutFlowsNestedInput>;
};

export type FlowUpdateManyMutationInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  data?: InputMaybe<Scalars['JSON']['input']>;
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

export type FlowUpdateWithWhereUniqueWithoutUserInput = {
  data: FlowUpdateWithoutUserInput;
  where: FlowWhereUniqueInput;
};

export type FlowUpdateWithoutUserInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FlowUpsertWithWhereUniqueWithoutUserInput = {
  create: FlowCreateWithoutUserInput;
  update: FlowUpdateWithoutUserInput;
  where: FlowWhereUniqueInput;
};

export type FlowWhereInput = {
  AND?: InputMaybe<Array<FlowWhereInput>>;
  NOT?: InputMaybe<Array<FlowWhereInput>>;
  OR?: InputMaybe<Array<FlowWhereInput>>;
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  data?: InputMaybe<JsonNullableFilter>;
  externalId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type FlowWhereUniqueInput = {
  AND?: InputMaybe<Array<FlowWhereInput>>;
  NOT?: InputMaybe<Array<FlowWhereInput>>;
  OR?: InputMaybe<Array<FlowWhereInput>>;
  code?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  data?: InputMaybe<JsonNullableFilter>;
  externalId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
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
  createFlow: Flow;
  createLog: Log;
  createUser: User;
  deleteUser: User;
  login: Authorize;
  logout: User;
  refresh: Authorize;
  register: Authorize;
  removeFlow: Flow;
  updateFlow: Flow;
  updateUser: User;
};


export type MutationCreateFlowArgs = {
  data: FlowCreateInput;
};


export type MutationCreateLogArgs = {
  data?: InputMaybe<LogCreateInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRefreshArgs = {
  refreshInput: RefreshInput;
};


export type MutationRegisterArgs = {
  registerInput: RegisterInput;
};


export type MutationRemoveFlowArgs = {
  where: FlowWhereUniqueInput;
};


export type MutationUpdateFlowArgs = {
  data: FlowUpdateInput;
  where: FlowWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
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

export type NestedEnumUserTypeFilter = {
  equals?: InputMaybe<UserType>;
  in?: InputMaybe<Array<UserType>>;
  not?: InputMaybe<NestedEnumUserTypeFilter>;
  notIn?: InputMaybe<Array<UserType>>;
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

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

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
  bio?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
  username?: Maybe<Scalars['String']['output']>;
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

export type ProfileNullableRelationFilter = {
  is?: InputMaybe<ProfileWhereInput>;
  isNot?: InputMaybe<ProfileWhereInput>;
};

export type ProfileOrderByWithRelationInput = {
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
  flow: Flow;
  flows: Array<Flow>;
  log: Log;
  logs: Array<Log>;
  me: User;
  user: User;
  users: Array<User>;
};


export type QueryFlowArgs = {
  where: FlowWhereUniqueInput;
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


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RefreshInput = {
  /** Refresh token */
  refreshToken: Scalars['String']['input'];
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
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['EmailAddress']['output'];
  flows?: Maybe<Array<Flow>>;
  id: Scalars['ID']['output'];
  pairId?: Maybe<Scalars['String']['output']>;
  profile?: Maybe<Profile>;
  role?: Maybe<Array<UserRole>>;
  type: UserType;
};

export type UserCount = {
  __typename?: 'UserCount';
  flows: Scalars['Int']['output'];
  refreshTokens: Scalars['Int']['output'];
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
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['EmailAddress']['input'];
  flows?: InputMaybe<FlowCreateNestedManyWithoutUserInput>;
  password: PasswordCreateNestedOneWithoutUserInput;
  profile?: InputMaybe<ProfileCreateNestedOneWithoutUserInput>;
  role?: InputMaybe<UserCreateroleInput>;
  type?: InputMaybe<UserType>;
};

export type UserCreateNestedOneWithoutFlowsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFlowsInput>;
  create?: InputMaybe<UserCreateWithoutFlowsInput>;
};

export type UserCreateOrConnectWithoutFlowsInput = {
  create: UserCreateWithoutFlowsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutFlowsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['EmailAddress']['input'];
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
  createdAt?: InputMaybe<SortOrderInput>;
  email?: InputMaybe<SortOrder>;
  flows?: InputMaybe<FlowOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  pairId?: InputMaybe<SortOrderInput>;
  password?: InputMaybe<PasswordOrderByWithRelationInput>;
  passwordId?: InputMaybe<SortOrder>;
  profile?: InputMaybe<ProfileOrderByWithRelationInput>;
  role?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserRole {
  RoleAdmin = 'ROLE_ADMIN',
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
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  flows?: InputMaybe<FlowUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<PasswordUpdateOneRequiredWithoutUserNestedInput>;
  profile?: InputMaybe<ProfileUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  type?: InputMaybe<EnumUserTypeFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutFlowsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFlowsInput>;
  create?: InputMaybe<UserCreateWithoutFlowsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutFlowsInput>;
  upsert?: InputMaybe<UserUpsertWithoutFlowsInput>;
};

export type UserUpdateToOneWithWhereWithoutFlowsInput = {
  data: UserUpdateWithoutFlowsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutFlowsInput = {
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<PasswordUpdateOneRequiredWithoutUserNestedInput>;
  profile?: InputMaybe<ProfileUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  type?: InputMaybe<EnumUserTypeFieldUpdateOperationsInput>;
};

export type UserUpdateroleInput = {
  push?: InputMaybe<Array<UserRole>>;
  set?: InputMaybe<Array<UserRole>>;
};

export type UserUpsertWithoutFlowsInput = {
  create: UserCreateWithoutFlowsInput;
  update: UserUpdateWithoutFlowsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  flows?: InputMaybe<FlowListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  pairId?: InputMaybe<StringNullableFilter>;
  profile?: InputMaybe<ProfileNullableRelationFilter>;
  role?: InputMaybe<EnumUserRoleNullableListFilter>;
  type?: InputMaybe<EnumUserTypeFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<Scalars['EmailAddress']['input']>;
  flows?: InputMaybe<FlowListRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  pairId?: InputMaybe<StringNullableFilter>;
  profile?: InputMaybe<ProfileNullableRelationFilter>;
  role?: InputMaybe<EnumUserRoleNullableListFilter>;
  type?: InputMaybe<EnumUserTypeFilter>;
};
