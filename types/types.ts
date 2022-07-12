export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AuthenticatedItem = User;

export type Board = {
  __typename?: "Board";
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  section?: Maybe<Array<Section>>;
  sectionCount?: Maybe<Scalars["Int"]>;
  user?: Maybe<User>;
};

export type BoardSectionArgs = {
  orderBy?: Array<SectionOrderByInput>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["Int"]>;
  where?: SectionWhereInput;
};

export type BoardSectionCountArgs = {
  where?: SectionWhereInput;
};

export type BoardCreateInput = {
  name?: InputMaybe<Scalars["String"]>;
  section?: InputMaybe<SectionRelateToManyForCreateInput>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type BoardManyRelationFilter = {
  every?: InputMaybe<BoardWhereInput>;
  none?: InputMaybe<BoardWhereInput>;
  some?: InputMaybe<BoardWhereInput>;
};

export type BoardOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type BoardRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<BoardWhereUniqueInput>>;
  create?: InputMaybe<Array<BoardCreateInput>>;
};

export type BoardRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<BoardWhereUniqueInput>>;
  create?: InputMaybe<Array<BoardCreateInput>>;
  disconnect?: InputMaybe<Array<BoardWhereUniqueInput>>;
  set?: InputMaybe<Array<BoardWhereUniqueInput>>;
};

export type BoardRelateToOneForCreateInput = {
  connect?: InputMaybe<BoardWhereUniqueInput>;
  create?: InputMaybe<BoardCreateInput>;
};

export type BoardRelateToOneForUpdateInput = {
  connect?: InputMaybe<BoardWhereUniqueInput>;
  create?: InputMaybe<BoardCreateInput>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
};

export type BoardUpdateArgs = {
  data: BoardUpdateInput;
  where: BoardWhereUniqueInput;
};

export type BoardUpdateInput = {
  name?: InputMaybe<Scalars["String"]>;
  section?: InputMaybe<SectionRelateToManyForUpdateInput>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type BoardWhereInput = {
  AND?: InputMaybe<Array<BoardWhereInput>>;
  NOT?: InputMaybe<Array<BoardWhereInput>>;
  OR?: InputMaybe<Array<BoardWhereInput>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  section?: InputMaybe<SectionManyRelationFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type BoardWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type BooleanFilter = {
  equals?: InputMaybe<Scalars["Boolean"]>;
  not?: InputMaybe<BooleanFilter>;
};

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars["ID"]>;
  gt?: InputMaybe<Scalars["ID"]>;
  gte?: InputMaybe<Scalars["ID"]>;
  in?: InputMaybe<Array<Scalars["ID"]>>;
  lt?: InputMaybe<Scalars["ID"]>;
  lte?: InputMaybe<Scalars["ID"]>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars["ID"]>>;
};

export type KeystoneAdminMeta = {
  __typename?: "KeystoneAdminMeta";
  enableSessionItem: Scalars["Boolean"];
  enableSignout: Scalars["Boolean"];
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};

export type KeystoneAdminMetaListArgs = {
  key: Scalars["String"];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: "KeystoneAdminUIFieldMeta";
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars["Int"]>;
  description?: Maybe<Scalars["String"]>;
  fieldMeta?: Maybe<Scalars["JSON"]>;
  isFilterable: Scalars["Boolean"];
  isOrderable: Scalars["Boolean"];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars["String"];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars["String"];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars["Int"];
};

export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: "KeystoneAdminUIFieldMetaCreateView";
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = "edit",
  Hidden = "hidden",
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: "KeystoneAdminUIFieldMetaItemView";
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = "edit",
  Hidden = "hidden",
  Read = "read",
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: "KeystoneAdminUIFieldMetaListView";
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = "hidden",
  Read = "read",
}

export type KeystoneAdminUiListMeta = {
  __typename?: "KeystoneAdminUIListMeta";
  description?: Maybe<Scalars["String"]>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  hideCreate: Scalars["Boolean"];
  hideDelete: Scalars["Boolean"];
  initialColumns: Array<Scalars["String"]>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars["Boolean"];
  itemQueryName: Scalars["String"];
  key: Scalars["String"];
  label: Scalars["String"];
  labelField: Scalars["String"];
  listQueryName: Scalars["String"];
  pageSize: Scalars["Int"];
  path: Scalars["String"];
  plural: Scalars["String"];
  singular: Scalars["String"];
};

export type KeystoneAdminUiSort = {
  __typename?: "KeystoneAdminUISort";
  direction: KeystoneAdminUiSortDirection;
  field: Scalars["String"];
};

export enum KeystoneAdminUiSortDirection {
  Asc = "ASC",
  Desc = "DESC",
}

export type KeystoneMeta = {
  __typename?: "KeystoneMeta";
  adminMeta: KeystoneAdminMeta;
};

export type Member = {
  __typename?: "Member";
  email?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  leader?: Maybe<User>;
  name?: Maybe<Scalars["String"]>;
  password?: Maybe<PasswordState>;
  tasks?: Maybe<Array<Task>>;
  tasksCount?: Maybe<Scalars["Int"]>;
};

export type MemberTasksArgs = {
  orderBy?: Array<TaskOrderByInput>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["Int"]>;
  where?: TaskWhereInput;
};

export type MemberTasksCountArgs = {
  where?: TaskWhereInput;
};

export type MemberCreateInput = {
  email?: InputMaybe<Scalars["String"]>;
  leader?: InputMaybe<UserRelateToOneForCreateInput>;
  name?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  tasks?: InputMaybe<TaskRelateToManyForCreateInput>;
};

export type MemberManyRelationFilter = {
  every?: InputMaybe<MemberWhereInput>;
  none?: InputMaybe<MemberWhereInput>;
  some?: InputMaybe<MemberWhereInput>;
};

export type MemberOrderByInput = {
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type MemberRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<MemberWhereUniqueInput>>;
  create?: InputMaybe<Array<MemberCreateInput>>;
};

export type MemberRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<MemberWhereUniqueInput>>;
  create?: InputMaybe<Array<MemberCreateInput>>;
  disconnect?: InputMaybe<Array<MemberWhereUniqueInput>>;
  set?: InputMaybe<Array<MemberWhereUniqueInput>>;
};

export type MemberUpdateArgs = {
  data: MemberUpdateInput;
  where: MemberWhereUniqueInput;
};

export type MemberUpdateInput = {
  email?: InputMaybe<Scalars["String"]>;
  leader?: InputMaybe<UserRelateToOneForUpdateInput>;
  name?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  tasks?: InputMaybe<TaskRelateToManyForUpdateInput>;
};

export type MemberWhereInput = {
  AND?: InputMaybe<Array<MemberWhereInput>>;
  NOT?: InputMaybe<Array<MemberWhereInput>>;
  OR?: InputMaybe<Array<MemberWhereInput>>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  leader?: InputMaybe<UserWhereInput>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<PasswordFilter>;
  tasks?: InputMaybe<TaskManyRelationFilter>;
};

export type MemberWhereUniqueInput = {
  email?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createBoard?: Maybe<Board>;
  createBoards?: Maybe<Array<Maybe<Board>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createMember?: Maybe<Member>;
  createMembers?: Maybe<Array<Maybe<Member>>>;
  createSection?: Maybe<Section>;
  createSections?: Maybe<Array<Maybe<Section>>>;
  createTask?: Maybe<Task>;
  createTasks?: Maybe<Array<Maybe<Task>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteBoard?: Maybe<Board>;
  deleteBoards?: Maybe<Array<Maybe<Board>>>;
  deleteMember?: Maybe<Member>;
  deleteMembers?: Maybe<Array<Maybe<Member>>>;
  deleteSection?: Maybe<Section>;
  deleteSections?: Maybe<Array<Maybe<Section>>>;
  deleteTask?: Maybe<Task>;
  deleteTasks?: Maybe<Array<Maybe<Task>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars["Boolean"];
  updateBoard?: Maybe<Board>;
  updateBoards?: Maybe<Array<Maybe<Board>>>;
  updateMember?: Maybe<Member>;
  updateMembers?: Maybe<Array<Maybe<Member>>>;
  updateSection?: Maybe<Section>;
  updateSections?: Maybe<Array<Maybe<Section>>>;
  updateTask?: Maybe<Task>;
  updateTasks?: Maybe<Array<Maybe<Task>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
};

export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationCreateBoardArgs = {
  data: BoardCreateInput;
};

export type MutationCreateBoardsArgs = {
  data: Array<BoardCreateInput>;
};

export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};

export type MutationCreateMemberArgs = {
  data: MemberCreateInput;
};

export type MutationCreateMembersArgs = {
  data: Array<MemberCreateInput>;
};

export type MutationCreateSectionArgs = {
  data: SectionCreateInput;
};

export type MutationCreateSectionsArgs = {
  data: Array<SectionCreateInput>;
};

export type MutationCreateTaskArgs = {
  data: TaskCreateInput;
};

export type MutationCreateTasksArgs = {
  data: Array<TaskCreateInput>;
};

export type MutationCreateUserArgs = {
  data: UserCreateInput;
};

export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};

export type MutationDeleteBoardArgs = {
  where: BoardWhereUniqueInput;
};

export type MutationDeleteBoardsArgs = {
  where: Array<BoardWhereUniqueInput>;
};

export type MutationDeleteMemberArgs = {
  where: MemberWhereUniqueInput;
};

export type MutationDeleteMembersArgs = {
  where: Array<MemberWhereUniqueInput>;
};

export type MutationDeleteSectionArgs = {
  where: SectionWhereUniqueInput;
};

export type MutationDeleteSectionsArgs = {
  where: Array<SectionWhereUniqueInput>;
};

export type MutationDeleteTaskArgs = {
  where: TaskWhereUniqueInput;
};

export type MutationDeleteTasksArgs = {
  where: Array<TaskWhereUniqueInput>;
};

export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};

export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};

export type MutationUpdateBoardArgs = {
  data: BoardUpdateInput;
  where: BoardWhereUniqueInput;
};

export type MutationUpdateBoardsArgs = {
  data: Array<BoardUpdateArgs>;
};

export type MutationUpdateMemberArgs = {
  data: MemberUpdateInput;
  where: MemberWhereUniqueInput;
};

export type MutationUpdateMembersArgs = {
  data: Array<MemberUpdateArgs>;
};

export type MutationUpdateSectionArgs = {
  data: SectionUpdateInput;
  where: SectionWhereUniqueInput;
};

export type MutationUpdateSectionsArgs = {
  data: Array<SectionUpdateArgs>;
};

export type MutationUpdateTaskArgs = {
  data: TaskUpdateInput;
  where: TaskWhereUniqueInput;
};

export type MutationUpdateTasksArgs = {
  data: Array<TaskUpdateArgs>;
};

export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export enum OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export type PasswordFilter = {
  isSet: Scalars["Boolean"];
};

export type PasswordState = {
  __typename?: "PasswordState";
  isSet: Scalars["Boolean"];
};

export type Query = {
  __typename?: "Query";
  authenticatedItem?: Maybe<AuthenticatedItem>;
  board?: Maybe<Board>;
  boards?: Maybe<Array<Board>>;
  boardsCount?: Maybe<Scalars["Int"]>;
  keystone: KeystoneMeta;
  member?: Maybe<Member>;
  members?: Maybe<Array<Member>>;
  membersCount?: Maybe<Scalars["Int"]>;
  section?: Maybe<Section>;
  sections?: Maybe<Array<Section>>;
  sectionsCount?: Maybe<Scalars["Int"]>;
  task?: Maybe<Task>;
  tasks?: Maybe<Array<Task>>;
  tasksCount?: Maybe<Scalars["Int"]>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars["Int"]>;
};

export type QueryBoardArgs = {
  where: BoardWhereUniqueInput;
};

export type QueryBoardsArgs = {
  orderBy?: Array<BoardOrderByInput>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["Int"]>;
  where?: BoardWhereInput;
};

export type QueryBoardsCountArgs = {
  where?: BoardWhereInput;
};

export type QueryMemberArgs = {
  where: MemberWhereUniqueInput;
};

export type QueryMembersArgs = {
  orderBy?: Array<MemberOrderByInput>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["Int"]>;
  where?: MemberWhereInput;
};

export type QueryMembersCountArgs = {
  where?: MemberWhereInput;
};

export type QuerySectionArgs = {
  where: SectionWhereUniqueInput;
};

export type QuerySectionsArgs = {
  orderBy?: Array<SectionOrderByInput>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["Int"]>;
  where?: SectionWhereInput;
};

export type QuerySectionsCountArgs = {
  where?: SectionWhereInput;
};

export type QueryTaskArgs = {
  where: TaskWhereUniqueInput;
};

export type QueryTasksArgs = {
  orderBy?: Array<TaskOrderByInput>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["Int"]>;
  where?: TaskWhereInput;
};

export type QueryTasksCountArgs = {
  where?: TaskWhereInput;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["Int"]>;
  where?: UserWhereInput;
};

export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};

export enum QueryMode {
  Default = "default",
  Insensitive = "insensitive",
}

export type Section = {
  __typename?: "Section";
  board?: Maybe<Board>;
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  tasks?: Maybe<Array<Task>>;
  tasksCount?: Maybe<Scalars["Int"]>;
};

export type SectionTasksArgs = {
  orderBy?: Array<TaskOrderByInput>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["Int"]>;
  where?: TaskWhereInput;
};

export type SectionTasksCountArgs = {
  where?: TaskWhereInput;
};

export type SectionCreateInput = {
  board?: InputMaybe<BoardRelateToOneForCreateInput>;
  name?: InputMaybe<Scalars["String"]>;
  tasks?: InputMaybe<TaskRelateToManyForCreateInput>;
};

export type SectionManyRelationFilter = {
  every?: InputMaybe<SectionWhereInput>;
  none?: InputMaybe<SectionWhereInput>;
  some?: InputMaybe<SectionWhereInput>;
};

export type SectionOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type SectionRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<SectionWhereUniqueInput>>;
  create?: InputMaybe<Array<SectionCreateInput>>;
};

export type SectionRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<SectionWhereUniqueInput>>;
  create?: InputMaybe<Array<SectionCreateInput>>;
  disconnect?: InputMaybe<Array<SectionWhereUniqueInput>>;
  set?: InputMaybe<Array<SectionWhereUniqueInput>>;
};

export type SectionRelateToOneForCreateInput = {
  connect?: InputMaybe<SectionWhereUniqueInput>;
  create?: InputMaybe<SectionCreateInput>;
};

export type SectionRelateToOneForUpdateInput = {
  connect?: InputMaybe<SectionWhereUniqueInput>;
  create?: InputMaybe<SectionCreateInput>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
};

export type SectionUpdateArgs = {
  data: SectionUpdateInput;
  where: SectionWhereUniqueInput;
};

export type SectionUpdateInput = {
  board?: InputMaybe<BoardRelateToOneForUpdateInput>;
  name?: InputMaybe<Scalars["String"]>;
  tasks?: InputMaybe<TaskRelateToManyForUpdateInput>;
};

export type SectionWhereInput = {
  AND?: InputMaybe<Array<SectionWhereInput>>;
  NOT?: InputMaybe<Array<SectionWhereInput>>;
  OR?: InputMaybe<Array<SectionWhereInput>>;
  board?: InputMaybe<BoardWhereInput>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  tasks?: InputMaybe<TaskManyRelationFilter>;
};

export type SectionWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type Task = {
  __typename?: "Task";
  assignedTo?: Maybe<Array<Member>>;
  assignedToCount?: Maybe<Scalars["Int"]>;
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  isComplete?: Maybe<Scalars["Boolean"]>;
  priority?: Maybe<TaskPriorityType>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  section?: Maybe<Section>;
  title?: Maybe<Scalars["String"]>;
};

export type TaskAssignedToArgs = {
  orderBy?: Array<MemberOrderByInput>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["Int"]>;
  where?: MemberWhereInput;
};

export type TaskAssignedToCountArgs = {
  where?: MemberWhereInput;
};

export type TaskCreateInput = {
  assignedTo?: InputMaybe<MemberRelateToManyForCreateInput>;
  description?: InputMaybe<Scalars["String"]>;
  isComplete?: InputMaybe<Scalars["Boolean"]>;
  priority?: InputMaybe<TaskPriorityType>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  section?: InputMaybe<SectionRelateToOneForCreateInput>;
  title?: InputMaybe<Scalars["String"]>;
};

export type TaskManyRelationFilter = {
  every?: InputMaybe<TaskWhereInput>;
  none?: InputMaybe<TaskWhereInput>;
  some?: InputMaybe<TaskWhereInput>;
};

export type TaskOrderByInput = {
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isComplete?: InputMaybe<OrderDirection>;
  priority?: InputMaybe<OrderDirection>;
  publishedAt?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export enum TaskPriorityType {
  High = "high",
  Low = "low",
  Medium = "medium",
}

export type TaskPriorityTypeNullableFilter = {
  equals?: InputMaybe<TaskPriorityType>;
  in?: InputMaybe<Array<TaskPriorityType>>;
  not?: InputMaybe<TaskPriorityTypeNullableFilter>;
  notIn?: InputMaybe<Array<TaskPriorityType>>;
};

export type TaskRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<TaskWhereUniqueInput>>;
  create?: InputMaybe<Array<TaskCreateInput>>;
};

export type TaskRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<TaskWhereUniqueInput>>;
  create?: InputMaybe<Array<TaskCreateInput>>;
  disconnect?: InputMaybe<Array<TaskWhereUniqueInput>>;
  set?: InputMaybe<Array<TaskWhereUniqueInput>>;
};

export type TaskUpdateArgs = {
  data: TaskUpdateInput;
  where: TaskWhereUniqueInput;
};

export type TaskUpdateInput = {
  assignedTo?: InputMaybe<MemberRelateToManyForUpdateInput>;
  description?: InputMaybe<Scalars["String"]>;
  isComplete?: InputMaybe<Scalars["Boolean"]>;
  priority?: InputMaybe<TaskPriorityType>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  section?: InputMaybe<SectionRelateToOneForUpdateInput>;
  title?: InputMaybe<Scalars["String"]>;
};

export type TaskWhereInput = {
  AND?: InputMaybe<Array<TaskWhereInput>>;
  NOT?: InputMaybe<Array<TaskWhereInput>>;
  OR?: InputMaybe<Array<TaskWhereInput>>;
  assignedTo?: InputMaybe<MemberManyRelationFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  isComplete?: InputMaybe<BooleanFilter>;
  priority?: InputMaybe<TaskPriorityTypeNullableFilter>;
  publishedAt?: InputMaybe<DateTimeNullableFilter>;
  section?: InputMaybe<SectionWhereInput>;
  title?: InputMaybe<StringFilter>;
};

export type TaskWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type User = {
  __typename?: "User";
  board?: Maybe<Array<Board>>;
  boardCount?: Maybe<Scalars["Int"]>;
  email?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  isAdmin?: Maybe<Scalars["Boolean"]>;
  member?: Maybe<Array<Member>>;
  memberCount?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  password?: Maybe<PasswordState>;
};

export type UserBoardArgs = {
  orderBy?: Array<BoardOrderByInput>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["Int"]>;
  where?: BoardWhereInput;
};

export type UserBoardCountArgs = {
  where?: BoardWhereInput;
};

export type UserMemberArgs = {
  orderBy?: Array<MemberOrderByInput>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["Int"]>;
  where?: MemberWhereInput;
};

export type UserMemberCountArgs = {
  where?: MemberWhereInput;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: "UserAuthenticationWithPasswordFailure";
  message: Scalars["String"];
};

export type UserAuthenticationWithPasswordResult =
  | UserAuthenticationWithPasswordFailure
  | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: "UserAuthenticationWithPasswordSuccess";
  item: User;
  sessionToken: Scalars["String"];
};

export type UserCreateInput = {
  board?: InputMaybe<BoardRelateToManyForCreateInput>;
  email?: InputMaybe<Scalars["String"]>;
  isAdmin?: InputMaybe<Scalars["Boolean"]>;
  member?: InputMaybe<MemberRelateToManyForCreateInput>;
  name?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
};

export type UserOrderByInput = {
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isAdmin?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type UserRelateToOneForCreateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
};

export type UserRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  board?: InputMaybe<BoardRelateToManyForUpdateInput>;
  email?: InputMaybe<Scalars["String"]>;
  isAdmin?: InputMaybe<Scalars["Boolean"]>;
  member?: InputMaybe<MemberRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  board?: InputMaybe<BoardManyRelationFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  isAdmin?: InputMaybe<BooleanFilter>;
  member?: InputMaybe<MemberManyRelationFilter>;
  name?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
};
