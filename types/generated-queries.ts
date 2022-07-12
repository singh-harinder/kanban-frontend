import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from "@apollo/client/cache";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
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

export type CreateBoardMutationVariables = Exact<{
  name: Scalars["String"];
}>;

export type CreateBoardMutation = {
  __typename?: "Mutation";
  createBoard?: { __typename?: "Board"; id: string; name?: string | null } | null;
};

export type CreateSectionMutationVariables = Exact<{
  name: Scalars["String"];
  board: Scalars["ID"];
}>;

export type CreateSectionMutation = {
  __typename?: "Mutation";
  createSection?: { __typename?: "Section"; id: string; name?: string | null } | null;
};

export type CreateTaskMutationVariables = Exact<{
  title: Scalars["String"];
  description: Scalars["String"];
  id: Scalars["ID"];
}>;

export type CreateTaskMutation = {
  __typename?: "Mutation";
  createTask?: { __typename?: "Task"; id: string; title?: string | null } | null;
};

export type DeleteBoardMutationVariables = Exact<{
  id: Scalars["ID"];
}>;

export type DeleteBoardMutation = {
  __typename?: "Mutation";
  deleteBoard?: { __typename?: "Board"; id: string; name?: string | null } | null;
};

export type DeleteSectionMutationVariables = Exact<{
  id: Scalars["ID"];
}>;

export type DeleteSectionMutation = {
  __typename?: "Mutation";
  deleteSection?: { __typename?: "Section"; id: string; name?: string | null } | null;
};

export type DeleteTaskMutationVariables = Exact<{
  id: Scalars["ID"];
}>;

export type DeleteTaskMutation = {
  __typename?: "Mutation";
  deleteTask?: { __typename?: "Task"; id: string; title?: string | null } | null;
};

export type UpdateTaskMutationVariables = Exact<{
  id: Scalars["ID"];
  title?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  sectionID: Scalars["ID"];
}>;

export type UpdateTaskMutation = {
  __typename?: "Mutation";
  updateTask?: { __typename?: "Task"; id: string; title?: string | null } | null;
};

export type BoardsQueryVariables = Exact<{ [key: string]: never }>;

export type BoardsQuery = {
  __typename?: "Query";
  boards?: Array<{
    __typename?: "Board";
    id: string;
    name?: string | null;
    section?: Array<{
      __typename?: "Section";
      id: string;
      name?: string | null;
      tasks?: Array<{ __typename?: "Task"; id: string }> | null;
    }> | null;
  }> | null;
};

export type SectionsQueryVariables = Exact<{ [key: string]: never }>;

export type SectionsQuery = {
  __typename?: "Query";
  sections?: Array<{
    __typename?: "Section";
    id: string;
    name?: string | null;
    board?: { __typename?: "Board"; id: string; name?: string | null } | null;
    tasks?: Array<{ __typename?: "Task"; id: string; title?: string | null; description?: string | null }> | null;
  }> | null;
};

export type SingleBoardQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type SingleBoardQuery = {
  __typename?: "Query";
  board?: {
    __typename?: "Board";
    id: string;
    name?: string | null;
    section?: Array<{
      __typename?: "Section";
      id: string;
      name?: string | null;
      tasks?: Array<{ __typename?: "Task"; id: string; title?: string | null; description?: string | null }> | null;
    }> | null;
  } | null;
};

export type TasksQueryVariables = Exact<{ [key: string]: never }>;

export type TasksQuery = {
  __typename?: "Query";
  tasks?: Array<{
    __typename?: "Task";
    id: string;
    title?: string | null;
    description?: string | null;
    priority?: TaskPriorityType | null;
    publishedAt?: any | null;
    isComplete?: boolean | null;
    assignedToCount?: number | null;
    section?: { __typename?: "Section"; name?: string | null } | null;
    assignedTo?: Array<{ __typename?: "Member"; id: string; name?: string | null }> | null;
  }> | null;
};

export type UserQueryVariables = Exact<{ [key: string]: never }>;

export type UserQuery = {
  __typename?: "Query";
  authenticatedItem?: {
    __typename?: "User";
    id: string;
    name?: string | null;
    email?: string | null;
    board?: Array<{
      __typename?: "Board";
      id: string;
      name?: string | null;
      section?: Array<{
        __typename?: "Section";
        id: string;
        name?: string | null;
        tasks?: Array<{ __typename?: "Task"; id: string }> | null;
      }> | null;
    }> | null;
  } | null;
};

export type SignInMutationVariables = Exact<{
  email: Scalars["String"];
  password: Scalars["String"];
}>;

export type SignInMutation = {
  __typename?: "Mutation";
  authenticateUserWithPassword?:
    | { __typename?: "UserAuthenticationWithPasswordFailure"; message: string }
    | {
        __typename?: "UserAuthenticationWithPasswordSuccess";
        item: { __typename?: "User"; id: string; email?: string | null; name?: string | null };
      }
    | null;
};

export type SignOutMutationVariables = Exact<{ [key: string]: never }>;

export type SignOutMutation = { __typename?: "Mutation"; endSession: boolean };

export type SingleTaskQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type SingleTaskQuery = {
  __typename?: "Query";
  task?: {
    __typename?: "Task";
    id: string;
    title?: string | null;
    description?: string | null;
    section?: { __typename?: "Section"; name?: string | null; id: string } | null;
  } | null;
};

export const CreateBoardDocument = gql`
  mutation createBoard($name: String!) {
    createBoard(data: { name: $name }) {
      id
      name
    }
  }
`;
export type CreateBoardMutationFn = Apollo.MutationFunction<CreateBoardMutation, CreateBoardMutationVariables>;

/**
 * __useCreateBoardMutation__
 *
 * To run a mutation, you first call `useCreateBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBoardMutation, { data, loading, error }] = useCreateBoardMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateBoardMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateBoardMutation, CreateBoardMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateBoardMutation, CreateBoardMutationVariables>(CreateBoardDocument, options);
}
export type CreateBoardMutationHookResult = ReturnType<typeof useCreateBoardMutation>;
export type CreateBoardMutationResult = Apollo.MutationResult<CreateBoardMutation>;
export type CreateBoardMutationOptions = Apollo.BaseMutationOptions<CreateBoardMutation, CreateBoardMutationVariables>;
export const CreateSectionDocument = gql`
  mutation createSection($name: String!, $board: ID!) {
    createSection(data: { name: $name, board: { connect: { id: $board } } }) {
      id
      name
    }
  }
`;
export type CreateSectionMutationFn = Apollo.MutationFunction<CreateSectionMutation, CreateSectionMutationVariables>;

/**
 * __useCreateSectionMutation__
 *
 * To run a mutation, you first call `useCreateSectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSectionMutation, { data, loading, error }] = useCreateSectionMutation({
 *   variables: {
 *      name: // value for 'name'
 *      board: // value for 'board'
 *   },
 * });
 */
export function useCreateSectionMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateSectionMutation, CreateSectionMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateSectionMutation, CreateSectionMutationVariables>(CreateSectionDocument, options);
}
export type CreateSectionMutationHookResult = ReturnType<typeof useCreateSectionMutation>;
export type CreateSectionMutationResult = Apollo.MutationResult<CreateSectionMutation>;
export type CreateSectionMutationOptions = Apollo.BaseMutationOptions<
  CreateSectionMutation,
  CreateSectionMutationVariables
>;
export const CreateTaskDocument = gql`
  mutation createTask($title: String!, $description: String!, $id: ID!) {
    createTask(data: { title: $title, description: $description, section: { connect: { id: $id } } }) {
      id
      title
    }
  }
`;
export type CreateTaskMutationFn = Apollo.MutationFunction<CreateTaskMutation, CreateTaskMutationVariables>;

/**
 * __useCreateTaskMutation__
 *
 * To run a mutation, you first call `useCreateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaskMutation, { data, loading, error }] = useCreateTaskMutation({
 *   variables: {
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCreateTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateTaskMutation, CreateTaskMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateTaskMutation, CreateTaskMutationVariables>(CreateTaskDocument, options);
}
export type CreateTaskMutationHookResult = ReturnType<typeof useCreateTaskMutation>;
export type CreateTaskMutationResult = Apollo.MutationResult<CreateTaskMutation>;
export type CreateTaskMutationOptions = Apollo.BaseMutationOptions<CreateTaskMutation, CreateTaskMutationVariables>;
export const DeleteBoardDocument = gql`
  mutation deleteBoard($id: ID!) {
    deleteBoard(where: { id: $id }) {
      id
      name
    }
  }
`;
export type DeleteBoardMutationFn = Apollo.MutationFunction<DeleteBoardMutation, DeleteBoardMutationVariables>;

/**
 * __useDeleteBoardMutation__
 *
 * To run a mutation, you first call `useDeleteBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBoardMutation, { data, loading, error }] = useDeleteBoardMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteBoardMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteBoardMutation, DeleteBoardMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteBoardMutation, DeleteBoardMutationVariables>(DeleteBoardDocument, options);
}
export type DeleteBoardMutationHookResult = ReturnType<typeof useDeleteBoardMutation>;
export type DeleteBoardMutationResult = Apollo.MutationResult<DeleteBoardMutation>;
export type DeleteBoardMutationOptions = Apollo.BaseMutationOptions<DeleteBoardMutation, DeleteBoardMutationVariables>;
export const DeleteSectionDocument = gql`
  mutation deleteSection($id: ID!) {
    deleteSection(where: { id: $id }) {
      id
      name
    }
  }
`;
export type DeleteSectionMutationFn = Apollo.MutationFunction<DeleteSectionMutation, DeleteSectionMutationVariables>;

/**
 * __useDeleteSectionMutation__
 *
 * To run a mutation, you first call `useDeleteSectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSectionMutation, { data, loading, error }] = useDeleteSectionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteSectionMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteSectionMutation, DeleteSectionMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteSectionMutation, DeleteSectionMutationVariables>(DeleteSectionDocument, options);
}
export type DeleteSectionMutationHookResult = ReturnType<typeof useDeleteSectionMutation>;
export type DeleteSectionMutationResult = Apollo.MutationResult<DeleteSectionMutation>;
export type DeleteSectionMutationOptions = Apollo.BaseMutationOptions<
  DeleteSectionMutation,
  DeleteSectionMutationVariables
>;
export const DeleteTaskDocument = gql`
  mutation deleteTask($id: ID!) {
    deleteTask(where: { id: $id }) {
      id
      title
    }
  }
`;
export type DeleteTaskMutationFn = Apollo.MutationFunction<DeleteTaskMutation, DeleteTaskMutationVariables>;

/**
 * __useDeleteTaskMutation__
 *
 * To run a mutation, you first call `useDeleteTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTaskMutation, { data, loading, error }] = useDeleteTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteTaskMutation, DeleteTaskMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteTaskMutation, DeleteTaskMutationVariables>(DeleteTaskDocument, options);
}
export type DeleteTaskMutationHookResult = ReturnType<typeof useDeleteTaskMutation>;
export type DeleteTaskMutationResult = Apollo.MutationResult<DeleteTaskMutation>;
export type DeleteTaskMutationOptions = Apollo.BaseMutationOptions<DeleteTaskMutation, DeleteTaskMutationVariables>;
export const UpdateTaskDocument = gql`
  mutation updateTask($id: ID!, $title: String, $description: String, $sectionID: ID!) {
    updateTask(
      where: { id: $id }
      data: { title: $title, description: $description, section: { connect: { id: $sectionID } } }
    ) {
      id
      title
    }
  }
`;
export type UpdateTaskMutationFn = Apollo.MutationFunction<UpdateTaskMutation, UpdateTaskMutationVariables>;

/**
 * __useUpdateTaskMutation__
 *
 * To run a mutation, you first call `useUpdateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskMutation, { data, loading, error }] = useUpdateTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      sectionID: // value for 'sectionID'
 *   },
 * });
 */
export function useUpdateTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateTaskMutation, UpdateTaskMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateTaskMutation, UpdateTaskMutationVariables>(UpdateTaskDocument, options);
}
export type UpdateTaskMutationHookResult = ReturnType<typeof useUpdateTaskMutation>;
export type UpdateTaskMutationResult = Apollo.MutationResult<UpdateTaskMutation>;
export type UpdateTaskMutationOptions = Apollo.BaseMutationOptions<UpdateTaskMutation, UpdateTaskMutationVariables>;
export const BoardsDocument = gql`
  query Boards {
    boards {
      id
      name
      section {
        id
        name
        tasks {
          id
        }
      }
    }
  }
`;

/**
 * __useBoardsQuery__
 *
 * To run a query within a React component, call `useBoardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBoardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBoardsQuery({
 *   variables: {
 *   },
 * });
 */
export function useBoardsQuery(baseOptions?: Apollo.QueryHookOptions<BoardsQuery, BoardsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BoardsQuery, BoardsQueryVariables>(BoardsDocument, options);
}
export function useBoardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BoardsQuery, BoardsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BoardsQuery, BoardsQueryVariables>(BoardsDocument, options);
}
export type BoardsQueryHookResult = ReturnType<typeof useBoardsQuery>;
export type BoardsLazyQueryHookResult = ReturnType<typeof useBoardsLazyQuery>;
export type BoardsQueryResult = Apollo.QueryResult<BoardsQuery, BoardsQueryVariables>;
export function refetchBoardsQuery(variables?: BoardsQueryVariables) {
  return { query: BoardsDocument, variables: variables };
}
export const SectionsDocument = gql`
  query Sections {
    sections {
      id
      name
      board {
        id
        name
      }
      tasks {
        id
        title
        description
      }
    }
  }
`;

/**
 * __useSectionsQuery__
 *
 * To run a query within a React component, call `useSectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSectionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSectionsQuery(baseOptions?: Apollo.QueryHookOptions<SectionsQuery, SectionsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SectionsQuery, SectionsQueryVariables>(SectionsDocument, options);
}
export function useSectionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SectionsQuery, SectionsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SectionsQuery, SectionsQueryVariables>(SectionsDocument, options);
}
export type SectionsQueryHookResult = ReturnType<typeof useSectionsQuery>;
export type SectionsLazyQueryHookResult = ReturnType<typeof useSectionsLazyQuery>;
export type SectionsQueryResult = Apollo.QueryResult<SectionsQuery, SectionsQueryVariables>;
export function refetchSectionsQuery(variables?: SectionsQueryVariables) {
  return { query: SectionsDocument, variables: variables };
}
export const SingleBoardDocument = gql`
  query singleBoard($id: ID!) {
    board(where: { id: $id }) {
      id
      name
      section {
        id
        name
        tasks {
          id
          title
          description
        }
      }
    }
  }
`;

/**
 * __useSingleBoardQuery__
 *
 * To run a query within a React component, call `useSingleBoardQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleBoardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleBoardQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingleBoardQuery(baseOptions: Apollo.QueryHookOptions<SingleBoardQuery, SingleBoardQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SingleBoardQuery, SingleBoardQueryVariables>(SingleBoardDocument, options);
}
export function useSingleBoardLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<SingleBoardQuery, SingleBoardQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SingleBoardQuery, SingleBoardQueryVariables>(SingleBoardDocument, options);
}
export type SingleBoardQueryHookResult = ReturnType<typeof useSingleBoardQuery>;
export type SingleBoardLazyQueryHookResult = ReturnType<typeof useSingleBoardLazyQuery>;
export type SingleBoardQueryResult = Apollo.QueryResult<SingleBoardQuery, SingleBoardQueryVariables>;
export function refetchSingleBoardQuery(variables: SingleBoardQueryVariables) {
  return { query: SingleBoardDocument, variables: variables };
}
export const TasksDocument = gql`
  query Tasks {
    tasks {
      id
      title
      description
      section {
        name
      }
      priority
      publishedAt
      isComplete
      assignedTo {
        id
        name
      }
      assignedToCount
    }
  }
`;

/**
 * __useTasksQuery__
 *
 * To run a query within a React component, call `useTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTasksQuery({
 *   variables: {
 *   },
 * });
 */
export function useTasksQuery(baseOptions?: Apollo.QueryHookOptions<TasksQuery, TasksQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TasksQuery, TasksQueryVariables>(TasksDocument, options);
}
export function useTasksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TasksQuery, TasksQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TasksQuery, TasksQueryVariables>(TasksDocument, options);
}
export type TasksQueryHookResult = ReturnType<typeof useTasksQuery>;
export type TasksLazyQueryHookResult = ReturnType<typeof useTasksLazyQuery>;
export type TasksQueryResult = Apollo.QueryResult<TasksQuery, TasksQueryVariables>;
export function refetchTasksQuery(variables?: TasksQueryVariables) {
  return { query: TasksDocument, variables: variables };
}
export const UserDocument = gql`
  query User {
    authenticatedItem {
      ... on User {
        id
        name
        email
        board {
          id
          name
          section {
            id
            name
            tasks {
              id
            }
          }
        }
      }
    }
  }
`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export function refetchUserQuery(variables?: UserQueryVariables) {
  return { query: UserDocument, variables: variables };
}
export const SignInDocument = gql`
  mutation signIn($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        message
      }
    }
  }
`;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
}
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const SignOutDocument = gql`
  mutation signOut {
    endSession
  }
`;
export type SignOutMutationFn = Apollo.MutationFunction<SignOutMutation, SignOutMutationVariables>;

/**
 * __useSignOutMutation__
 *
 * To run a mutation, you first call `useSignOutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignOutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signOutMutation, { data, loading, error }] = useSignOutMutation({
 *   variables: {
 *   },
 * });
 */
export function useSignOutMutation(
  baseOptions?: Apollo.MutationHookOptions<SignOutMutation, SignOutMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignOutMutation, SignOutMutationVariables>(SignOutDocument, options);
}
export type SignOutMutationHookResult = ReturnType<typeof useSignOutMutation>;
export type SignOutMutationResult = Apollo.MutationResult<SignOutMutation>;
export type SignOutMutationOptions = Apollo.BaseMutationOptions<SignOutMutation, SignOutMutationVariables>;
export const SingleTaskDocument = gql`
  query singleTask($id: ID!) {
    task(where: { id: $id }) {
      id
      title
      description
      section {
        name
        id
      }
    }
  }
`;

/**
 * __useSingleTaskQuery__
 *
 * To run a query within a React component, call `useSingleTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleTaskQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingleTaskQuery(baseOptions: Apollo.QueryHookOptions<SingleTaskQuery, SingleTaskQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SingleTaskQuery, SingleTaskQueryVariables>(SingleTaskDocument, options);
}
export function useSingleTaskLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<SingleTaskQuery, SingleTaskQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SingleTaskQuery, SingleTaskQueryVariables>(SingleTaskDocument, options);
}
export type SingleTaskQueryHookResult = ReturnType<typeof useSingleTaskQuery>;
export type SingleTaskLazyQueryHookResult = ReturnType<typeof useSingleTaskLazyQuery>;
export type SingleTaskQueryResult = Apollo.QueryResult<SingleTaskQuery, SingleTaskQueryVariables>;
export function refetchSingleTaskQuery(variables: SingleTaskQueryVariables) {
  return { query: SingleTaskDocument, variables: variables };
}
export type BoardKeySpecifier = ("id" | "name" | "section" | "sectionCount" | "user" | BoardKeySpecifier)[];
export type BoardFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  section?: FieldPolicy<any> | FieldReadFunction<any>;
  sectionCount?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminMetaKeySpecifier = (
  | "enableSessionItem"
  | "enableSignout"
  | "list"
  | "lists"
  | KeystoneAdminMetaKeySpecifier
)[];
export type KeystoneAdminMetaFieldPolicy = {
  enableSessionItem?: FieldPolicy<any> | FieldReadFunction<any>;
  enableSignout?: FieldPolicy<any> | FieldReadFunction<any>;
  list?: FieldPolicy<any> | FieldReadFunction<any>;
  lists?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminUIFieldMetaKeySpecifier = (
  | "createView"
  | "customViewsIndex"
  | "description"
  | "fieldMeta"
  | "isFilterable"
  | "isOrderable"
  | "itemView"
  | "label"
  | "listView"
  | "path"
  | "search"
  | "viewsIndex"
  | KeystoneAdminUIFieldMetaKeySpecifier
)[];
export type KeystoneAdminUIFieldMetaFieldPolicy = {
  createView?: FieldPolicy<any> | FieldReadFunction<any>;
  customViewsIndex?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  fieldMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  isFilterable?: FieldPolicy<any> | FieldReadFunction<any>;
  isOrderable?: FieldPolicy<any> | FieldReadFunction<any>;
  itemView?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  listView?: FieldPolicy<any> | FieldReadFunction<any>;
  path?: FieldPolicy<any> | FieldReadFunction<any>;
  search?: FieldPolicy<any> | FieldReadFunction<any>;
  viewsIndex?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminUIFieldMetaCreateViewKeySpecifier = (
  | "fieldMode"
  | KeystoneAdminUIFieldMetaCreateViewKeySpecifier
)[];
export type KeystoneAdminUIFieldMetaCreateViewFieldPolicy = {
  fieldMode?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminUIFieldMetaItemViewKeySpecifier = (
  | "fieldMode"
  | KeystoneAdminUIFieldMetaItemViewKeySpecifier
)[];
export type KeystoneAdminUIFieldMetaItemViewFieldPolicy = {
  fieldMode?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminUIFieldMetaListViewKeySpecifier = (
  | "fieldMode"
  | KeystoneAdminUIFieldMetaListViewKeySpecifier
)[];
export type KeystoneAdminUIFieldMetaListViewFieldPolicy = {
  fieldMode?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminUIListMetaKeySpecifier = (
  | "description"
  | "fields"
  | "hideCreate"
  | "hideDelete"
  | "initialColumns"
  | "initialSort"
  | "isHidden"
  | "itemQueryName"
  | "key"
  | "label"
  | "labelField"
  | "listQueryName"
  | "pageSize"
  | "path"
  | "plural"
  | "singular"
  | KeystoneAdminUIListMetaKeySpecifier
)[];
export type KeystoneAdminUIListMetaFieldPolicy = {
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  fields?: FieldPolicy<any> | FieldReadFunction<any>;
  hideCreate?: FieldPolicy<any> | FieldReadFunction<any>;
  hideDelete?: FieldPolicy<any> | FieldReadFunction<any>;
  initialColumns?: FieldPolicy<any> | FieldReadFunction<any>;
  initialSort?: FieldPolicy<any> | FieldReadFunction<any>;
  isHidden?: FieldPolicy<any> | FieldReadFunction<any>;
  itemQueryName?: FieldPolicy<any> | FieldReadFunction<any>;
  key?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelField?: FieldPolicy<any> | FieldReadFunction<any>;
  listQueryName?: FieldPolicy<any> | FieldReadFunction<any>;
  pageSize?: FieldPolicy<any> | FieldReadFunction<any>;
  path?: FieldPolicy<any> | FieldReadFunction<any>;
  plural?: FieldPolicy<any> | FieldReadFunction<any>;
  singular?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminUISortKeySpecifier = ("direction" | "field" | KeystoneAdminUISortKeySpecifier)[];
export type KeystoneAdminUISortFieldPolicy = {
  direction?: FieldPolicy<any> | FieldReadFunction<any>;
  field?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneMetaKeySpecifier = ("adminMeta" | KeystoneMetaKeySpecifier)[];
export type KeystoneMetaFieldPolicy = {
  adminMeta?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MemberKeySpecifier = (
  | "email"
  | "id"
  | "leader"
  | "name"
  | "password"
  | "tasks"
  | "tasksCount"
  | MemberKeySpecifier
)[];
export type MemberFieldPolicy = {
  email?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  leader?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  password?: FieldPolicy<any> | FieldReadFunction<any>;
  tasks?: FieldPolicy<any> | FieldReadFunction<any>;
  tasksCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MutationKeySpecifier = (
  | "authenticateUserWithPassword"
  | "createBoard"
  | "createBoards"
  | "createInitialUser"
  | "createMember"
  | "createMembers"
  | "createSection"
  | "createSections"
  | "createTask"
  | "createTasks"
  | "createUser"
  | "createUsers"
  | "deleteBoard"
  | "deleteBoards"
  | "deleteMember"
  | "deleteMembers"
  | "deleteSection"
  | "deleteSections"
  | "deleteTask"
  | "deleteTasks"
  | "deleteUser"
  | "deleteUsers"
  | "endSession"
  | "updateBoard"
  | "updateBoards"
  | "updateMember"
  | "updateMembers"
  | "updateSection"
  | "updateSections"
  | "updateTask"
  | "updateTasks"
  | "updateUser"
  | "updateUsers"
  | MutationKeySpecifier
)[];
export type MutationFieldPolicy = {
  authenticateUserWithPassword?: FieldPolicy<any> | FieldReadFunction<any>;
  createBoard?: FieldPolicy<any> | FieldReadFunction<any>;
  createBoards?: FieldPolicy<any> | FieldReadFunction<any>;
  createInitialUser?: FieldPolicy<any> | FieldReadFunction<any>;
  createMember?: FieldPolicy<any> | FieldReadFunction<any>;
  createMembers?: FieldPolicy<any> | FieldReadFunction<any>;
  createSection?: FieldPolicy<any> | FieldReadFunction<any>;
  createSections?: FieldPolicy<any> | FieldReadFunction<any>;
  createTask?: FieldPolicy<any> | FieldReadFunction<any>;
  createTasks?: FieldPolicy<any> | FieldReadFunction<any>;
  createUser?: FieldPolicy<any> | FieldReadFunction<any>;
  createUsers?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteBoard?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteBoards?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteMember?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteMembers?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteSection?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteSections?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteTask?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteTasks?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteUser?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteUsers?: FieldPolicy<any> | FieldReadFunction<any>;
  endSession?: FieldPolicy<any> | FieldReadFunction<any>;
  updateBoard?: FieldPolicy<any> | FieldReadFunction<any>;
  updateBoards?: FieldPolicy<any> | FieldReadFunction<any>;
  updateMember?: FieldPolicy<any> | FieldReadFunction<any>;
  updateMembers?: FieldPolicy<any> | FieldReadFunction<any>;
  updateSection?: FieldPolicy<any> | FieldReadFunction<any>;
  updateSections?: FieldPolicy<any> | FieldReadFunction<any>;
  updateTask?: FieldPolicy<any> | FieldReadFunction<any>;
  updateTasks?: FieldPolicy<any> | FieldReadFunction<any>;
  updateUser?: FieldPolicy<any> | FieldReadFunction<any>;
  updateUsers?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PasswordStateKeySpecifier = ("isSet" | PasswordStateKeySpecifier)[];
export type PasswordStateFieldPolicy = {
  isSet?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryKeySpecifier = (
  | "authenticatedItem"
  | "board"
  | "boards"
  | "boardsCount"
  | "keystone"
  | "member"
  | "members"
  | "membersCount"
  | "section"
  | "sections"
  | "sectionsCount"
  | "task"
  | "tasks"
  | "tasksCount"
  | "user"
  | "users"
  | "usersCount"
  | QueryKeySpecifier
)[];
export type QueryFieldPolicy = {
  authenticatedItem?: FieldPolicy<any> | FieldReadFunction<any>;
  board?: FieldPolicy<any> | FieldReadFunction<any>;
  boards?: FieldPolicy<any> | FieldReadFunction<any>;
  boardsCount?: FieldPolicy<any> | FieldReadFunction<any>;
  keystone?: FieldPolicy<any> | FieldReadFunction<any>;
  member?: FieldPolicy<any> | FieldReadFunction<any>;
  members?: FieldPolicy<any> | FieldReadFunction<any>;
  membersCount?: FieldPolicy<any> | FieldReadFunction<any>;
  section?: FieldPolicy<any> | FieldReadFunction<any>;
  sections?: FieldPolicy<any> | FieldReadFunction<any>;
  sectionsCount?: FieldPolicy<any> | FieldReadFunction<any>;
  task?: FieldPolicy<any> | FieldReadFunction<any>;
  tasks?: FieldPolicy<any> | FieldReadFunction<any>;
  tasksCount?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
  users?: FieldPolicy<any> | FieldReadFunction<any>;
  usersCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SectionKeySpecifier = ("board" | "id" | "name" | "tasks" | "tasksCount" | SectionKeySpecifier)[];
export type SectionFieldPolicy = {
  board?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  tasks?: FieldPolicy<any> | FieldReadFunction<any>;
  tasksCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TaskKeySpecifier = (
  | "assignedTo"
  | "assignedToCount"
  | "description"
  | "id"
  | "isComplete"
  | "priority"
  | "publishedAt"
  | "section"
  | "title"
  | TaskKeySpecifier
)[];
export type TaskFieldPolicy = {
  assignedTo?: FieldPolicy<any> | FieldReadFunction<any>;
  assignedToCount?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  isComplete?: FieldPolicy<any> | FieldReadFunction<any>;
  priority?: FieldPolicy<any> | FieldReadFunction<any>;
  publishedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  section?: FieldPolicy<any> | FieldReadFunction<any>;
  title?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserKeySpecifier = (
  | "board"
  | "boardCount"
  | "email"
  | "id"
  | "isAdmin"
  | "member"
  | "memberCount"
  | "name"
  | "password"
  | UserKeySpecifier
)[];
export type UserFieldPolicy = {
  board?: FieldPolicy<any> | FieldReadFunction<any>;
  boardCount?: FieldPolicy<any> | FieldReadFunction<any>;
  email?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  isAdmin?: FieldPolicy<any> | FieldReadFunction<any>;
  member?: FieldPolicy<any> | FieldReadFunction<any>;
  memberCount?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  password?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserAuthenticationWithPasswordFailureKeySpecifier = (
  | "message"
  | UserAuthenticationWithPasswordFailureKeySpecifier
)[];
export type UserAuthenticationWithPasswordFailureFieldPolicy = {
  message?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserAuthenticationWithPasswordSuccessKeySpecifier = (
  | "item"
  | "sessionToken"
  | UserAuthenticationWithPasswordSuccessKeySpecifier
)[];
export type UserAuthenticationWithPasswordSuccessFieldPolicy = {
  item?: FieldPolicy<any> | FieldReadFunction<any>;
  sessionToken?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StrictTypedTypePolicies = {
  Board?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | BoardKeySpecifier | (() => undefined | BoardKeySpecifier);
    fields?: BoardFieldPolicy;
  };
  KeystoneAdminMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | KeystoneAdminMetaKeySpecifier | (() => undefined | KeystoneAdminMetaKeySpecifier);
    fields?: KeystoneAdminMetaFieldPolicy;
  };
  KeystoneAdminUIFieldMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | KeystoneAdminUIFieldMetaKeySpecifier | (() => undefined | KeystoneAdminUIFieldMetaKeySpecifier);
    fields?: KeystoneAdminUIFieldMetaFieldPolicy;
  };
  KeystoneAdminUIFieldMetaCreateView?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | KeystoneAdminUIFieldMetaCreateViewKeySpecifier
      | (() => undefined | KeystoneAdminUIFieldMetaCreateViewKeySpecifier);
    fields?: KeystoneAdminUIFieldMetaCreateViewFieldPolicy;
  };
  KeystoneAdminUIFieldMetaItemView?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | KeystoneAdminUIFieldMetaItemViewKeySpecifier
      | (() => undefined | KeystoneAdminUIFieldMetaItemViewKeySpecifier);
    fields?: KeystoneAdminUIFieldMetaItemViewFieldPolicy;
  };
  KeystoneAdminUIFieldMetaListView?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | KeystoneAdminUIFieldMetaListViewKeySpecifier
      | (() => undefined | KeystoneAdminUIFieldMetaListViewKeySpecifier);
    fields?: KeystoneAdminUIFieldMetaListViewFieldPolicy;
  };
  KeystoneAdminUIListMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | KeystoneAdminUIListMetaKeySpecifier | (() => undefined | KeystoneAdminUIListMetaKeySpecifier);
    fields?: KeystoneAdminUIListMetaFieldPolicy;
  };
  KeystoneAdminUISort?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | KeystoneAdminUISortKeySpecifier | (() => undefined | KeystoneAdminUISortKeySpecifier);
    fields?: KeystoneAdminUISortFieldPolicy;
  };
  KeystoneMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | KeystoneMetaKeySpecifier | (() => undefined | KeystoneMetaKeySpecifier);
    fields?: KeystoneMetaFieldPolicy;
  };
  Member?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | MemberKeySpecifier | (() => undefined | MemberKeySpecifier);
    fields?: MemberFieldPolicy;
  };
  Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier);
    fields?: MutationFieldPolicy;
  };
  PasswordState?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | PasswordStateKeySpecifier | (() => undefined | PasswordStateKeySpecifier);
    fields?: PasswordStateFieldPolicy;
  };
  Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier);
    fields?: QueryFieldPolicy;
  };
  Section?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | SectionKeySpecifier | (() => undefined | SectionKeySpecifier);
    fields?: SectionFieldPolicy;
  };
  Task?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | TaskKeySpecifier | (() => undefined | TaskKeySpecifier);
    fields?: TaskFieldPolicy;
  };
  User?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier);
    fields?: UserFieldPolicy;
  };
  UserAuthenticationWithPasswordFailure?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UserAuthenticationWithPasswordFailureKeySpecifier
      | (() => undefined | UserAuthenticationWithPasswordFailureKeySpecifier);
    fields?: UserAuthenticationWithPasswordFailureFieldPolicy;
  };
  UserAuthenticationWithPasswordSuccess?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UserAuthenticationWithPasswordSuccessKeySpecifier
      | (() => undefined | UserAuthenticationWithPasswordSuccessKeySpecifier);
    fields?: UserAuthenticationWithPasswordSuccessFieldPolicy;
  };
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
