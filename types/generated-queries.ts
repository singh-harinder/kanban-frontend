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
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AuthenticatedItem = User;

/**  A keystone list  */
export type Board = {
  __typename?: "Board";
  _sectionMeta?: Maybe<_QueryMeta>;
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  section: Array<Section>;
};

/**  A keystone list  */
export type Board_SectionMetaArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortSectionsBy>>;
  where?: InputMaybe<SectionWhereInput>;
};

/**  A keystone list  */
export type BoardSectionArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortSectionsBy>>;
  where?: InputMaybe<SectionWhereInput>;
};

export type BoardCreateInput = {
  name?: InputMaybe<Scalars["String"]>;
  section?: InputMaybe<SectionRelateToManyInput>;
};

export type BoardRelateToOneInput = {
  connect?: InputMaybe<BoardWhereUniqueInput>;
  create?: InputMaybe<BoardCreateInput>;
  disconnect?: InputMaybe<BoardWhereUniqueInput>;
  disconnectAll?: InputMaybe<Scalars["Boolean"]>;
};

export type BoardUpdateInput = {
  name?: InputMaybe<Scalars["String"]>;
  section?: InputMaybe<SectionRelateToManyInput>;
};

export type BoardWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<BoardWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<BoardWhereInput>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_i?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_i?: InputMaybe<Scalars["String"]>;
  name_i?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_i?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  name_not_i?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_i?: InputMaybe<Scalars["String"]>;
  /**  condition must be true for all nodes  */
  section_every?: InputMaybe<SectionWhereInput>;
  /**  condition must be false for all nodes  */
  section_none?: InputMaybe<SectionWhereInput>;
  /**  condition must be true for at least 1 node  */
  section_some?: InputMaybe<SectionWhereInput>;
};

export type BoardWhereUniqueInput = {
  id: Scalars["ID"];
};

export type BoardsCreateInput = {
  data?: InputMaybe<BoardCreateInput>;
};

export type BoardsUpdateInput = {
  data?: InputMaybe<BoardUpdateInput>;
  id: Scalars["ID"];
};

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
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
  customViewsHash?: Maybe<Scalars["String"]>;
  fieldMeta?: Maybe<Scalars["JSON"]>;
  isOrderable: Scalars["Boolean"];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars["String"];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars["String"];
  viewsHash: Scalars["String"];
};

export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id: Scalars["ID"];
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
  fieldMode: KeystoneAdminUiFieldMetaItemViewFieldMode;
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

export type Mutation = {
  __typename?: "Mutation";
  authenticateUserWithPassword: UserAuthenticationWithPasswordResult;
  /**  Create a single Board item.  */
  createBoard?: Maybe<Board>;
  /**  Create multiple Board items.  */
  createBoards?: Maybe<Array<Maybe<Board>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  /**  Create a single Section item.  */
  createSection?: Maybe<Section>;
  /**  Create multiple Section items.  */
  createSections?: Maybe<Array<Maybe<Section>>>;
  /**  Create a single Task item.  */
  createTask?: Maybe<Task>;
  /**  Create multiple Task items.  */
  createTasks?: Maybe<Array<Maybe<Task>>>;
  /**  Create a single User item.  */
  createUser?: Maybe<User>;
  /**  Create multiple User items.  */
  createUsers?: Maybe<Array<Maybe<User>>>;
  /**  Delete a single Board item by ID.  */
  deleteBoard?: Maybe<Board>;
  /**  Delete multiple Board items by ID.  */
  deleteBoards?: Maybe<Array<Maybe<Board>>>;
  /**  Delete a single Section item by ID.  */
  deleteSection?: Maybe<Section>;
  /**  Delete multiple Section items by ID.  */
  deleteSections?: Maybe<Array<Maybe<Section>>>;
  /**  Delete a single Task item by ID.  */
  deleteTask?: Maybe<Task>;
  /**  Delete multiple Task items by ID.  */
  deleteTasks?: Maybe<Array<Maybe<Task>>>;
  /**  Delete a single User item by ID.  */
  deleteUser?: Maybe<User>;
  /**  Delete multiple User items by ID.  */
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars["Boolean"];
  /**  Update a single Board item by ID.  */
  updateBoard?: Maybe<Board>;
  /**  Update multiple Board items by ID.  */
  updateBoards?: Maybe<Array<Maybe<Board>>>;
  /**  Update a single Section item by ID.  */
  updateSection?: Maybe<Section>;
  /**  Update multiple Section items by ID.  */
  updateSections?: Maybe<Array<Maybe<Section>>>;
  /**  Update a single Task item by ID.  */
  updateTask?: Maybe<Task>;
  /**  Update multiple Task items by ID.  */
  updateTasks?: Maybe<Array<Maybe<Task>>>;
  /**  Update a single User item by ID.  */
  updateUser?: Maybe<User>;
  /**  Update multiple User items by ID.  */
  updateUsers?: Maybe<Array<Maybe<User>>>;
};

export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationCreateBoardArgs = {
  data?: InputMaybe<BoardCreateInput>;
};

export type MutationCreateBoardsArgs = {
  data?: InputMaybe<Array<InputMaybe<BoardsCreateInput>>>;
};

export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};

export type MutationCreateSectionArgs = {
  data?: InputMaybe<SectionCreateInput>;
};

export type MutationCreateSectionsArgs = {
  data?: InputMaybe<Array<InputMaybe<SectionsCreateInput>>>;
};

export type MutationCreateTaskArgs = {
  data?: InputMaybe<TaskCreateInput>;
};

export type MutationCreateTasksArgs = {
  data?: InputMaybe<Array<InputMaybe<TasksCreateInput>>>;
};

export type MutationCreateUserArgs = {
  data?: InputMaybe<UserCreateInput>;
};

export type MutationCreateUsersArgs = {
  data?: InputMaybe<Array<InputMaybe<UsersCreateInput>>>;
};

export type MutationDeleteBoardArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteBoardsArgs = {
  ids?: InputMaybe<Array<Scalars["ID"]>>;
};

export type MutationDeleteSectionArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteSectionsArgs = {
  ids?: InputMaybe<Array<Scalars["ID"]>>;
};

export type MutationDeleteTaskArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteTasksArgs = {
  ids?: InputMaybe<Array<Scalars["ID"]>>;
};

export type MutationDeleteUserArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteUsersArgs = {
  ids?: InputMaybe<Array<Scalars["ID"]>>;
};

export type MutationUpdateBoardArgs = {
  data?: InputMaybe<BoardUpdateInput>;
  id: Scalars["ID"];
};

export type MutationUpdateBoardsArgs = {
  data?: InputMaybe<Array<InputMaybe<BoardsUpdateInput>>>;
};

export type MutationUpdateSectionArgs = {
  data?: InputMaybe<SectionUpdateInput>;
  id: Scalars["ID"];
};

export type MutationUpdateSectionsArgs = {
  data?: InputMaybe<Array<InputMaybe<SectionsUpdateInput>>>;
};

export type MutationUpdateTaskArgs = {
  data?: InputMaybe<TaskUpdateInput>;
  id: Scalars["ID"];
};

export type MutationUpdateTasksArgs = {
  data?: InputMaybe<Array<InputMaybe<TasksUpdateInput>>>;
};

export type MutationUpdateUserArgs = {
  data?: InputMaybe<UserUpdateInput>;
  id: Scalars["ID"];
};

export type MutationUpdateUsersArgs = {
  data?: InputMaybe<Array<InputMaybe<UsersUpdateInput>>>;
};

export enum PasswordAuthErrorCode {
  Failure = "FAILURE",
  IdentityNotFound = "IDENTITY_NOT_FOUND",
  MultipleIdentityMatches = "MULTIPLE_IDENTITY_MATCHES",
  SecretMismatch = "SECRET_MISMATCH",
  SecretNotSet = "SECRET_NOT_SET",
}

export type Query = {
  __typename?: "Query";
  /**  Search for the Board item with the matching ID.  */
  Board?: Maybe<Board>;
  /**  Search for the Section item with the matching ID.  */
  Section?: Maybe<Section>;
  /**  Search for the Task item with the matching ID.  */
  Task?: Maybe<Task>;
  /**  Search for the User item with the matching ID.  */
  User?: Maybe<User>;
  /**  Retrieve the meta-data for the Board list.  */
  _BoardsMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the Section list.  */
  _SectionsMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the Task list.  */
  _TasksMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the User list.  */
  _UsersMeta?: Maybe<_ListMeta>;
  /**  Perform a meta-query on all Board items which match the where clause.  */
  _allBoardsMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all Section items which match the where clause.  */
  _allSectionsMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all Task items which match the where clause.  */
  _allTasksMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all User items which match the where clause.  */
  _allUsersMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for all lists.  */
  _ksListsMeta?: Maybe<Array<Maybe<_ListMeta>>>;
  /**  Search for all Board items which match the where clause.  */
  allBoards?: Maybe<Array<Maybe<Board>>>;
  /**  Search for all Section items which match the where clause.  */
  allSections?: Maybe<Array<Maybe<Section>>>;
  /**  Search for all Task items which match the where clause.  */
  allTasks?: Maybe<Array<Maybe<Task>>>;
  /**  Search for all User items which match the where clause.  */
  allUsers?: Maybe<Array<Maybe<User>>>;
  /** The version of the Keystone application serving this API. */
  appVersion?: Maybe<Scalars["String"]>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  keystone: KeystoneMeta;
};

export type QueryBoardArgs = {
  where: BoardWhereUniqueInput;
};

export type QuerySectionArgs = {
  where: SectionWhereUniqueInput;
};

export type QueryTaskArgs = {
  where: TaskWhereUniqueInput;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type Query_AllBoardsMetaArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortBoardsBy>>;
  where?: InputMaybe<BoardWhereInput>;
};

export type Query_AllSectionsMetaArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortSectionsBy>>;
  where?: InputMaybe<SectionWhereInput>;
};

export type Query_AllTasksMetaArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortTasksBy>>;
  where?: InputMaybe<TaskWhereInput>;
};

export type Query_AllUsersMetaArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortUsersBy>>;
  where?: InputMaybe<UserWhereInput>;
};

export type Query_KsListsMetaArgs = {
  where?: InputMaybe<_KsListsMetaInput>;
};

export type QueryAllBoardsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortBoardsBy>>;
  where?: InputMaybe<BoardWhereInput>;
};

export type QueryAllSectionsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortSectionsBy>>;
  where?: InputMaybe<SectionWhereInput>;
};

export type QueryAllTasksArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortTasksBy>>;
  where?: InputMaybe<TaskWhereInput>;
};

export type QueryAllUsersArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortUsersBy>>;
  where?: InputMaybe<UserWhereInput>;
};

/**  A keystone list  */
export type Section = {
  __typename?: "Section";
  _tasksMeta?: Maybe<_QueryMeta>;
  board?: Maybe<Board>;
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  tasks: Array<Task>;
};

/**  A keystone list  */
export type Section_TasksMetaArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortTasksBy>>;
  where?: InputMaybe<TaskWhereInput>;
};

/**  A keystone list  */
export type SectionTasksArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortTasksBy>>;
  where?: InputMaybe<TaskWhereInput>;
};

export type SectionCreateInput = {
  board?: InputMaybe<BoardRelateToOneInput>;
  name?: InputMaybe<Scalars["String"]>;
  tasks?: InputMaybe<TaskRelateToManyInput>;
};

export type SectionRelateToManyInput = {
  connect?: InputMaybe<Array<InputMaybe<SectionWhereUniqueInput>>>;
  create?: InputMaybe<Array<InputMaybe<SectionCreateInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<SectionWhereUniqueInput>>>;
  disconnectAll?: InputMaybe<Scalars["Boolean"]>;
};

export type SectionRelateToOneInput = {
  connect?: InputMaybe<SectionWhereUniqueInput>;
  create?: InputMaybe<SectionCreateInput>;
  disconnect?: InputMaybe<SectionWhereUniqueInput>;
  disconnectAll?: InputMaybe<Scalars["Boolean"]>;
};

export type SectionUpdateInput = {
  board?: InputMaybe<BoardRelateToOneInput>;
  name?: InputMaybe<Scalars["String"]>;
  tasks?: InputMaybe<TaskRelateToManyInput>;
};

export type SectionWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<SectionWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<SectionWhereInput>>>;
  board?: InputMaybe<BoardWhereInput>;
  board_is_null?: InputMaybe<Scalars["Boolean"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_i?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_i?: InputMaybe<Scalars["String"]>;
  name_i?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_i?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  name_not_i?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_i?: InputMaybe<Scalars["String"]>;
  /**  condition must be true for all nodes  */
  tasks_every?: InputMaybe<TaskWhereInput>;
  /**  condition must be false for all nodes  */
  tasks_none?: InputMaybe<TaskWhereInput>;
  /**  condition must be true for at least 1 node  */
  tasks_some?: InputMaybe<TaskWhereInput>;
};

export type SectionWhereUniqueInput = {
  id: Scalars["ID"];
};

export type SectionsCreateInput = {
  data?: InputMaybe<SectionCreateInput>;
};

export type SectionsUpdateInput = {
  data?: InputMaybe<SectionUpdateInput>;
  id: Scalars["ID"];
};

export enum SortBoardsBy {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  SectionAsc = "section_ASC",
  SectionDesc = "section_DESC",
}

export enum SortSectionsBy {
  BoardAsc = "board_ASC",
  BoardDesc = "board_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  TasksAsc = "tasks_ASC",
  TasksDesc = "tasks_DESC",
}

export enum SortTasksBy {
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  SectionAsc = "section_ASC",
  SectionDesc = "section_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export enum SortUsersBy {
  EmailAsc = "email_ASC",
  EmailDesc = "email_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  IsAdminAsc = "isAdmin_ASC",
  IsAdminDesc = "isAdmin_DESC",
  MagicAuthIssuedAtAsc = "magicAuthIssuedAt_ASC",
  MagicAuthIssuedAtDesc = "magicAuthIssuedAt_DESC",
  MagicAuthRedeemedAtAsc = "magicAuthRedeemedAt_ASC",
  MagicAuthRedeemedAtDesc = "magicAuthRedeemedAt_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  PasswordResetIssuedAtAsc = "passwordResetIssuedAt_ASC",
  PasswordResetIssuedAtDesc = "passwordResetIssuedAt_DESC",
  PasswordResetRedeemedAtAsc = "passwordResetRedeemedAt_ASC",
  PasswordResetRedeemedAtDesc = "passwordResetRedeemedAt_DESC",
}

/**  A keystone list  */
export type Task = {
  __typename?: "Task";
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  section?: Maybe<Section>;
  title?: Maybe<Scalars["String"]>;
};

export type TaskCreateInput = {
  description?: InputMaybe<Scalars["String"]>;
  section?: InputMaybe<SectionRelateToOneInput>;
  title?: InputMaybe<Scalars["String"]>;
};

export type TaskRelateToManyInput = {
  connect?: InputMaybe<Array<InputMaybe<TaskWhereUniqueInput>>>;
  create?: InputMaybe<Array<InputMaybe<TaskCreateInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<TaskWhereUniqueInput>>>;
  disconnectAll?: InputMaybe<Scalars["Boolean"]>;
};

export type TaskUpdateInput = {
  description?: InputMaybe<Scalars["String"]>;
  section?: InputMaybe<SectionRelateToOneInput>;
  title?: InputMaybe<Scalars["String"]>;
};

export type TaskWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<TaskWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<TaskWhereInput>>>;
  description?: InputMaybe<Scalars["String"]>;
  description_contains?: InputMaybe<Scalars["String"]>;
  description_contains_i?: InputMaybe<Scalars["String"]>;
  description_ends_with?: InputMaybe<Scalars["String"]>;
  description_ends_with_i?: InputMaybe<Scalars["String"]>;
  description_i?: InputMaybe<Scalars["String"]>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  description_not?: InputMaybe<Scalars["String"]>;
  description_not_contains?: InputMaybe<Scalars["String"]>;
  description_not_contains_i?: InputMaybe<Scalars["String"]>;
  description_not_ends_with?: InputMaybe<Scalars["String"]>;
  description_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  description_not_i?: InputMaybe<Scalars["String"]>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  description_not_starts_with?: InputMaybe<Scalars["String"]>;
  description_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  description_starts_with?: InputMaybe<Scalars["String"]>;
  description_starts_with_i?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  section?: InputMaybe<SectionWhereInput>;
  section_is_null?: InputMaybe<Scalars["Boolean"]>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_contains_i?: InputMaybe<Scalars["String"]>;
  title_ends_with?: InputMaybe<Scalars["String"]>;
  title_ends_with_i?: InputMaybe<Scalars["String"]>;
  title_i?: InputMaybe<Scalars["String"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_contains_i?: InputMaybe<Scalars["String"]>;
  title_not_ends_with?: InputMaybe<Scalars["String"]>;
  title_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  title_not_i?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not_starts_with?: InputMaybe<Scalars["String"]>;
  title_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  title_starts_with?: InputMaybe<Scalars["String"]>;
  title_starts_with_i?: InputMaybe<Scalars["String"]>;
};

export type TaskWhereUniqueInput = {
  id: Scalars["ID"];
};

export type TasksCreateInput = {
  data?: InputMaybe<TaskCreateInput>;
};

export type TasksUpdateInput = {
  data?: InputMaybe<TaskUpdateInput>;
  id: Scalars["ID"];
};

/**  A keystone list  */
export type User = {
  __typename?: "User";
  email?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  isAdmin?: Maybe<Scalars["Boolean"]>;
  magicAuthIssuedAt?: Maybe<Scalars["String"]>;
  magicAuthRedeemedAt?: Maybe<Scalars["String"]>;
  magicAuthToken_is_set?: Maybe<Scalars["Boolean"]>;
  name?: Maybe<Scalars["String"]>;
  passwordResetIssuedAt?: Maybe<Scalars["String"]>;
  passwordResetRedeemedAt?: Maybe<Scalars["String"]>;
  passwordResetToken_is_set?: Maybe<Scalars["Boolean"]>;
  password_is_set?: Maybe<Scalars["Boolean"]>;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: "UserAuthenticationWithPasswordFailure";
  code: PasswordAuthErrorCode;
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
  email?: InputMaybe<Scalars["String"]>;
  isAdmin?: InputMaybe<Scalars["Boolean"]>;
  magicAuthIssuedAt?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt?: InputMaybe<Scalars["String"]>;
  magicAuthToken?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt?: InputMaybe<Scalars["String"]>;
  passwordResetToken?: InputMaybe<Scalars["String"]>;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars["String"]>;
  isAdmin?: InputMaybe<Scalars["Boolean"]>;
  magicAuthIssuedAt?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt?: InputMaybe<Scalars["String"]>;
  magicAuthToken?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt?: InputMaybe<Scalars["String"]>;
  passwordResetToken?: InputMaybe<Scalars["String"]>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  email?: InputMaybe<Scalars["String"]>;
  email_contains?: InputMaybe<Scalars["String"]>;
  email_contains_i?: InputMaybe<Scalars["String"]>;
  email_ends_with?: InputMaybe<Scalars["String"]>;
  email_ends_with_i?: InputMaybe<Scalars["String"]>;
  email_i?: InputMaybe<Scalars["String"]>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  email_not?: InputMaybe<Scalars["String"]>;
  email_not_contains?: InputMaybe<Scalars["String"]>;
  email_not_contains_i?: InputMaybe<Scalars["String"]>;
  email_not_ends_with?: InputMaybe<Scalars["String"]>;
  email_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  email_not_i?: InputMaybe<Scalars["String"]>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  email_not_starts_with?: InputMaybe<Scalars["String"]>;
  email_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  email_starts_with?: InputMaybe<Scalars["String"]>;
  email_starts_with_i?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  isAdmin?: InputMaybe<Scalars["Boolean"]>;
  isAdmin_not?: InputMaybe<Scalars["Boolean"]>;
  magicAuthIssuedAt?: InputMaybe<Scalars["String"]>;
  magicAuthIssuedAt_gt?: InputMaybe<Scalars["String"]>;
  magicAuthIssuedAt_gte?: InputMaybe<Scalars["String"]>;
  magicAuthIssuedAt_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  magicAuthIssuedAt_lt?: InputMaybe<Scalars["String"]>;
  magicAuthIssuedAt_lte?: InputMaybe<Scalars["String"]>;
  magicAuthIssuedAt_not?: InputMaybe<Scalars["String"]>;
  magicAuthIssuedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  magicAuthRedeemedAt?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt_gt?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt_gte?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  magicAuthRedeemedAt_lt?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt_lte?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt_not?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  magicAuthToken_is_set?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_i?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_i?: InputMaybe<Scalars["String"]>;
  name_i?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_i?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  name_not_i?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_i?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt_gt?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt_gte?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  passwordResetIssuedAt_lt?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt_lte?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt_not?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  passwordResetRedeemedAt?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt_gt?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt_gte?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  passwordResetRedeemedAt_lt?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt_lte?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt_not?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  passwordResetToken_is_set?: InputMaybe<Scalars["Boolean"]>;
  password_is_set?: InputMaybe<Scalars["Boolean"]>;
};

export type UserWhereUniqueInput = {
  id: Scalars["ID"];
};

export type UsersCreateInput = {
  data?: InputMaybe<UserCreateInput>;
};

export type UsersUpdateInput = {
  data?: InputMaybe<UserUpdateInput>;
  id: Scalars["ID"];
};

export type _ListAccess = {
  __typename?: "_ListAccess";
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'auth' operations.
   */
  auth?: Maybe<Scalars["JSON"]>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'create' operations.
   * NOTE: 'create' can only return a Boolean.
   * It is not possible to specify a declarative Where clause for this
   * operation
   */
  create?: Maybe<Scalars["Boolean"]>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'delete' operations.
   */
  delete?: Maybe<Scalars["JSON"]>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'read' operations.
   */
  read?: Maybe<Scalars["JSON"]>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'update' operations.
   */
  update?: Maybe<Scalars["JSON"]>;
};

export type _ListInputTypes = {
  __typename?: "_ListInputTypes";
  /** Create mutation input type name */
  createInput?: Maybe<Scalars["String"]>;
  /** Create many mutation input type name */
  createManyInput?: Maybe<Scalars["String"]>;
  /** Update mutation name input */
  updateInput?: Maybe<Scalars["String"]>;
  /** Update many mutation name input */
  updateManyInput?: Maybe<Scalars["String"]>;
  /** Input type for matching multiple items */
  whereInput?: Maybe<Scalars["String"]>;
  /** Input type for matching a unique item */
  whereUniqueInput?: Maybe<Scalars["String"]>;
};

export type _ListMeta = {
  __typename?: "_ListMeta";
  /** Access control configuration for the currently authenticated request */
  access?: Maybe<_ListAccess>;
  /** The list's user-facing description */
  description?: Maybe<Scalars["String"]>;
  /** The Keystone list key */
  key?: Maybe<Scalars["String"]>;
  /** The list's display name in the Admin UI */
  label?: Maybe<Scalars["String"]>;
  /**
   * The Keystone List name
   * @deprecated Use `key` instead
   */
  name?: Maybe<Scalars["String"]>;
  /** The list's data path */
  path?: Maybe<Scalars["String"]>;
  /** The list's plural display name */
  plural?: Maybe<Scalars["String"]>;
  /** Information on the generated GraphQL schema */
  schema?: Maybe<_ListSchema>;
  /** The list's singular display name */
  singular?: Maybe<Scalars["String"]>;
};

export type _ListMutations = {
  __typename?: "_ListMutations";
  /** Create mutation name */
  create?: Maybe<Scalars["String"]>;
  /** Create many mutation name */
  createMany?: Maybe<Scalars["String"]>;
  /** Delete mutation name */
  delete?: Maybe<Scalars["String"]>;
  /** Delete many mutation name */
  deleteMany?: Maybe<Scalars["String"]>;
  /** Update mutation name */
  update?: Maybe<Scalars["String"]>;
  /** Update many mutation name */
  updateMany?: Maybe<Scalars["String"]>;
};

export type _ListQueries = {
  __typename?: "_ListQueries";
  /** Single-item query name */
  item?: Maybe<Scalars["String"]>;
  /** All-items query name */
  list?: Maybe<Scalars["String"]>;
  /** List metadata query name */
  meta?: Maybe<Scalars["String"]>;
};

export type _ListSchema = {
  __typename?: "_ListSchema";
  /** Information about fields defined on this list */
  fields?: Maybe<Array<Maybe<_ListSchemaFields>>>;
  /** Top-level GraphQL input types */
  inputTypes?: Maybe<_ListInputTypes>;
  /** Top-level GraphQL mutation names */
  mutations?: Maybe<_ListMutations>;
  /**
   * Top level GraphQL query names which either return this type, or
   * provide aggregate information about this type
   */
  queries?: Maybe<_ListQueries>;
  /**
   * Information about fields on other types which return this type, or
   * provide aggregate information about this type
   */
  relatedFields?: Maybe<Array<Maybe<_ListSchemaRelatedFields>>>;
  /** The typename as used in GraphQL queries */
  type?: Maybe<Scalars["String"]>;
};

export type _ListSchemaFieldsArgs = {
  where?: InputMaybe<_ListSchemaFieldsInput>;
};

export type _ListSchemaFields = {
  __typename?: "_ListSchemaFields";
  /**
   * The name of the field in its list
   * @deprecated Use `path` instead
   */
  name?: Maybe<Scalars["String"]>;
  /** The path of the field in its list */
  path?: Maybe<Scalars["String"]>;
  /** The field type (ie, Checkbox, Text, etc) */
  type?: Maybe<Scalars["String"]>;
};

export type _ListSchemaFieldsInput = {
  type?: InputMaybe<Scalars["String"]>;
};

export type _ListSchemaRelatedFields = {
  __typename?: "_ListSchemaRelatedFields";
  /** A list of GraphQL field names */
  fields?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** The typename as used in GraphQL queries */
  type?: Maybe<Scalars["String"]>;
};

export type _QueryMeta = {
  __typename?: "_QueryMeta";
  count?: Maybe<Scalars["Int"]>;
};

export type _KsListsMetaInput = {
  /** Whether this is an auxiliary helper list */
  auxiliary?: InputMaybe<Scalars["Boolean"]>;
  key?: InputMaybe<Scalars["String"]>;
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
  allBoards?: Array<{
    __typename?: "Board";
    id: string;
    name?: string | null;
    section: Array<{
      __typename?: "Section";
      id: string;
      name?: string | null;
      tasks: Array<{ __typename?: "Task"; id: string }>;
    }>;
  } | null> | null;
};

export type SectionsQueryVariables = Exact<{ [key: string]: never }>;

export type SectionsQuery = {
  __typename?: "Query";
  allSections?: Array<{
    __typename?: "Section";
    id: string;
    name?: string | null;
    board?: { __typename?: "Board"; id: string; name?: string | null } | null;
    tasks: Array<{ __typename?: "Task"; id: string; title?: string | null; description?: string | null }>;
  } | null> | null;
};

export type SingleBoardQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type SingleBoardQuery = {
  __typename?: "Query";
  Board?: {
    __typename?: "Board";
    id: string;
    name?: string | null;
    section: Array<{
      __typename?: "Section";
      id: string;
      name?: string | null;
      tasks: Array<{ __typename?: "Task"; id: string; title?: string | null; description?: string | null }>;
    }>;
  } | null;
};

export type TasksQueryVariables = Exact<{ [key: string]: never }>;

export type TasksQuery = {
  __typename?: "Query";
  allTasks?: Array<{
    __typename?: "Task";
    id: string;
    title?: string | null;
    description?: string | null;
    section?: { __typename?: "Section"; name?: string | null } | null;
  } | null> | null;
};

export type UserQueryVariables = Exact<{ [key: string]: never }>;

export type UserQuery = {
  __typename?: "Query";
  authenticatedItem?: { __typename?: "User"; id: string; name?: string | null; email?: string | null } | null;
};

export type SingleTaskQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type SingleTaskQuery = {
  __typename?: "Query";
  Task?: {
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
    deleteBoard(id: $id) {
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
    deleteSection(id: $id) {
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
    deleteTask(id: $id) {
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
    updateTask(id: $id, data: { title: $title, description: $description, section: { connect: { id: $sectionID } } }) {
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
    allBoards {
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
    allSections {
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
    Board(where: { id: $id }) {
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
    allTasks {
      id
      title
      description
      section {
        name
      }
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
export const SingleTaskDocument = gql`
  query singleTask($id: ID!) {
    Task(where: { id: $id }) {
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
export type BoardKeySpecifier = ("_sectionMeta" | "id" | "name" | "section" | BoardKeySpecifier)[];
export type BoardFieldPolicy = {
  _sectionMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  section?: FieldPolicy<any> | FieldReadFunction<any>;
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
  | "customViewsHash"
  | "fieldMeta"
  | "isOrderable"
  | "itemView"
  | "label"
  | "listView"
  | "path"
  | "viewsHash"
  | KeystoneAdminUIFieldMetaKeySpecifier
)[];
export type KeystoneAdminUIFieldMetaFieldPolicy = {
  createView?: FieldPolicy<any> | FieldReadFunction<any>;
  customViewsHash?: FieldPolicy<any> | FieldReadFunction<any>;
  fieldMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  isOrderable?: FieldPolicy<any> | FieldReadFunction<any>;
  itemView?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  listView?: FieldPolicy<any> | FieldReadFunction<any>;
  path?: FieldPolicy<any> | FieldReadFunction<any>;
  viewsHash?: FieldPolicy<any> | FieldReadFunction<any>;
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
export type MutationKeySpecifier = (
  | "authenticateUserWithPassword"
  | "createBoard"
  | "createBoards"
  | "createInitialUser"
  | "createSection"
  | "createSections"
  | "createTask"
  | "createTasks"
  | "createUser"
  | "createUsers"
  | "deleteBoard"
  | "deleteBoards"
  | "deleteSection"
  | "deleteSections"
  | "deleteTask"
  | "deleteTasks"
  | "deleteUser"
  | "deleteUsers"
  | "endSession"
  | "updateBoard"
  | "updateBoards"
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
  createSection?: FieldPolicy<any> | FieldReadFunction<any>;
  createSections?: FieldPolicy<any> | FieldReadFunction<any>;
  createTask?: FieldPolicy<any> | FieldReadFunction<any>;
  createTasks?: FieldPolicy<any> | FieldReadFunction<any>;
  createUser?: FieldPolicy<any> | FieldReadFunction<any>;
  createUsers?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteBoard?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteBoards?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteSection?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteSections?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteTask?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteTasks?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteUser?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteUsers?: FieldPolicy<any> | FieldReadFunction<any>;
  endSession?: FieldPolicy<any> | FieldReadFunction<any>;
  updateBoard?: FieldPolicy<any> | FieldReadFunction<any>;
  updateBoards?: FieldPolicy<any> | FieldReadFunction<any>;
  updateSection?: FieldPolicy<any> | FieldReadFunction<any>;
  updateSections?: FieldPolicy<any> | FieldReadFunction<any>;
  updateTask?: FieldPolicy<any> | FieldReadFunction<any>;
  updateTasks?: FieldPolicy<any> | FieldReadFunction<any>;
  updateUser?: FieldPolicy<any> | FieldReadFunction<any>;
  updateUsers?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryKeySpecifier = (
  | "Board"
  | "Section"
  | "Task"
  | "User"
  | "_BoardsMeta"
  | "_SectionsMeta"
  | "_TasksMeta"
  | "_UsersMeta"
  | "_allBoardsMeta"
  | "_allSectionsMeta"
  | "_allTasksMeta"
  | "_allUsersMeta"
  | "_ksListsMeta"
  | "allBoards"
  | "allSections"
  | "allTasks"
  | "allUsers"
  | "appVersion"
  | "authenticatedItem"
  | "keystone"
  | QueryKeySpecifier
)[];
export type QueryFieldPolicy = {
  Board?: FieldPolicy<any> | FieldReadFunction<any>;
  Section?: FieldPolicy<any> | FieldReadFunction<any>;
  Task?: FieldPolicy<any> | FieldReadFunction<any>;
  User?: FieldPolicy<any> | FieldReadFunction<any>;
  _BoardsMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _SectionsMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _TasksMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _UsersMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _allBoardsMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _allSectionsMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _allTasksMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _allUsersMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _ksListsMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  allBoards?: FieldPolicy<any> | FieldReadFunction<any>;
  allSections?: FieldPolicy<any> | FieldReadFunction<any>;
  allTasks?: FieldPolicy<any> | FieldReadFunction<any>;
  allUsers?: FieldPolicy<any> | FieldReadFunction<any>;
  appVersion?: FieldPolicy<any> | FieldReadFunction<any>;
  authenticatedItem?: FieldPolicy<any> | FieldReadFunction<any>;
  keystone?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SectionKeySpecifier = ("_tasksMeta" | "board" | "id" | "name" | "tasks" | SectionKeySpecifier)[];
export type SectionFieldPolicy = {
  _tasksMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  board?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  tasks?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TaskKeySpecifier = ("description" | "id" | "section" | "title" | TaskKeySpecifier)[];
export type TaskFieldPolicy = {
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  section?: FieldPolicy<any> | FieldReadFunction<any>;
  title?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserKeySpecifier = (
  | "email"
  | "id"
  | "isAdmin"
  | "magicAuthIssuedAt"
  | "magicAuthRedeemedAt"
  | "magicAuthToken_is_set"
  | "name"
  | "passwordResetIssuedAt"
  | "passwordResetRedeemedAt"
  | "passwordResetToken_is_set"
  | "password_is_set"
  | UserKeySpecifier
)[];
export type UserFieldPolicy = {
  email?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  isAdmin?: FieldPolicy<any> | FieldReadFunction<any>;
  magicAuthIssuedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  magicAuthRedeemedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  magicAuthToken_is_set?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  passwordResetIssuedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  passwordResetRedeemedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  passwordResetToken_is_set?: FieldPolicy<any> | FieldReadFunction<any>;
  password_is_set?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserAuthenticationWithPasswordFailureKeySpecifier = (
  | "code"
  | "message"
  | UserAuthenticationWithPasswordFailureKeySpecifier
)[];
export type UserAuthenticationWithPasswordFailureFieldPolicy = {
  code?: FieldPolicy<any> | FieldReadFunction<any>;
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
export type _ListAccessKeySpecifier = ("auth" | "create" | "delete" | "read" | "update" | _ListAccessKeySpecifier)[];
export type _ListAccessFieldPolicy = {
  auth?: FieldPolicy<any> | FieldReadFunction<any>;
  create?: FieldPolicy<any> | FieldReadFunction<any>;
  delete?: FieldPolicy<any> | FieldReadFunction<any>;
  read?: FieldPolicy<any> | FieldReadFunction<any>;
  update?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ListInputTypesKeySpecifier = (
  | "createInput"
  | "createManyInput"
  | "updateInput"
  | "updateManyInput"
  | "whereInput"
  | "whereUniqueInput"
  | _ListInputTypesKeySpecifier
)[];
export type _ListInputTypesFieldPolicy = {
  createInput?: FieldPolicy<any> | FieldReadFunction<any>;
  createManyInput?: FieldPolicy<any> | FieldReadFunction<any>;
  updateInput?: FieldPolicy<any> | FieldReadFunction<any>;
  updateManyInput?: FieldPolicy<any> | FieldReadFunction<any>;
  whereInput?: FieldPolicy<any> | FieldReadFunction<any>;
  whereUniqueInput?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ListMetaKeySpecifier = (
  | "access"
  | "description"
  | "key"
  | "label"
  | "name"
  | "path"
  | "plural"
  | "schema"
  | "singular"
  | _ListMetaKeySpecifier
)[];
export type _ListMetaFieldPolicy = {
  access?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  key?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  path?: FieldPolicy<any> | FieldReadFunction<any>;
  plural?: FieldPolicy<any> | FieldReadFunction<any>;
  schema?: FieldPolicy<any> | FieldReadFunction<any>;
  singular?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ListMutationsKeySpecifier = (
  | "create"
  | "createMany"
  | "delete"
  | "deleteMany"
  | "update"
  | "updateMany"
  | _ListMutationsKeySpecifier
)[];
export type _ListMutationsFieldPolicy = {
  create?: FieldPolicy<any> | FieldReadFunction<any>;
  createMany?: FieldPolicy<any> | FieldReadFunction<any>;
  delete?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteMany?: FieldPolicy<any> | FieldReadFunction<any>;
  update?: FieldPolicy<any> | FieldReadFunction<any>;
  updateMany?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ListQueriesKeySpecifier = ("item" | "list" | "meta" | _ListQueriesKeySpecifier)[];
export type _ListQueriesFieldPolicy = {
  item?: FieldPolicy<any> | FieldReadFunction<any>;
  list?: FieldPolicy<any> | FieldReadFunction<any>;
  meta?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ListSchemaKeySpecifier = (
  | "fields"
  | "inputTypes"
  | "mutations"
  | "queries"
  | "relatedFields"
  | "type"
  | _ListSchemaKeySpecifier
)[];
export type _ListSchemaFieldPolicy = {
  fields?: FieldPolicy<any> | FieldReadFunction<any>;
  inputTypes?: FieldPolicy<any> | FieldReadFunction<any>;
  mutations?: FieldPolicy<any> | FieldReadFunction<any>;
  queries?: FieldPolicy<any> | FieldReadFunction<any>;
  relatedFields?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ListSchemaFieldsKeySpecifier = ("name" | "path" | "type" | _ListSchemaFieldsKeySpecifier)[];
export type _ListSchemaFieldsFieldPolicy = {
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  path?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ListSchemaRelatedFieldsKeySpecifier = ("fields" | "type" | _ListSchemaRelatedFieldsKeySpecifier)[];
export type _ListSchemaRelatedFieldsFieldPolicy = {
  fields?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _QueryMetaKeySpecifier = ("count" | _QueryMetaKeySpecifier)[];
export type _QueryMetaFieldPolicy = {
  count?: FieldPolicy<any> | FieldReadFunction<any>;
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
  Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier);
    fields?: MutationFieldPolicy;
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
  _ListAccess?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | _ListAccessKeySpecifier | (() => undefined | _ListAccessKeySpecifier);
    fields?: _ListAccessFieldPolicy;
  };
  _ListInputTypes?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | _ListInputTypesKeySpecifier | (() => undefined | _ListInputTypesKeySpecifier);
    fields?: _ListInputTypesFieldPolicy;
  };
  _ListMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | _ListMetaKeySpecifier | (() => undefined | _ListMetaKeySpecifier);
    fields?: _ListMetaFieldPolicy;
  };
  _ListMutations?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | _ListMutationsKeySpecifier | (() => undefined | _ListMutationsKeySpecifier);
    fields?: _ListMutationsFieldPolicy;
  };
  _ListQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | _ListQueriesKeySpecifier | (() => undefined | _ListQueriesKeySpecifier);
    fields?: _ListQueriesFieldPolicy;
  };
  _ListSchema?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | _ListSchemaKeySpecifier | (() => undefined | _ListSchemaKeySpecifier);
    fields?: _ListSchemaFieldPolicy;
  };
  _ListSchemaFields?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | _ListSchemaFieldsKeySpecifier | (() => undefined | _ListSchemaFieldsKeySpecifier);
    fields?: _ListSchemaFieldsFieldPolicy;
  };
  _ListSchemaRelatedFields?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | _ListSchemaRelatedFieldsKeySpecifier | (() => undefined | _ListSchemaRelatedFieldsKeySpecifier);
    fields?: _ListSchemaRelatedFieldsFieldPolicy;
  };
  _QueryMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | _QueryMetaKeySpecifier | (() => undefined | _QueryMetaKeySpecifier);
    fields?: _QueryMetaFieldPolicy;
  };
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
