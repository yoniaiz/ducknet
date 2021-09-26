/* eslint-disable no-unused-vars */
export type Maybe<T> = T | null;
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
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: unknown;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: unknown;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: unknown;
  /** The `Long` scalar type represents 52-bit integers */
  Long: unknown;
  /** A time string with format: HH:mm:ss.SSS */
  Time: unknown;
  /** The `Upload` scalar type represents a file upload. */
  Upload: unknown;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

export enum Enum_Projects_Status {
  Completed = 'completed',
  InProgress = 'inProgress',
  Saved = 'saved',
}

export type FileInfoInput = {
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type FileInput = {
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  size: Scalars['Float'];
  updated_by?: Maybe<Scalars['ID']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type Group = {
  __typename?: 'Group';
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  project?: Maybe<Projects>;
  projects?: Maybe<Array<Maybe<Projects>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  users_permissions_users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type GroupProjectsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type GroupUsers_Permissions_UsersArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type GroupAggregator = {
  __typename?: 'GroupAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type GroupConnection = {
  __typename?: 'GroupConnection';
  aggregate?: Maybe<GroupAggregator>;
  groupBy?: Maybe<GroupGroupBy>;
  values?: Maybe<Array<Maybe<Group>>>;
};

export type GroupConnectionCreatedAt = {
  __typename?: 'GroupConnectionCreatedAt';
  connection?: Maybe<GroupConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type GroupConnectionId = {
  __typename?: 'GroupConnectionId';
  connection?: Maybe<GroupConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type GroupConnectionProject = {
  __typename?: 'GroupConnectionProject';
  connection?: Maybe<GroupConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type GroupConnectionPublished_At = {
  __typename?: 'GroupConnectionPublished_at';
  connection?: Maybe<GroupConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type GroupConnectionTitle = {
  __typename?: 'GroupConnectionTitle';
  connection?: Maybe<GroupConnection>;
  key?: Maybe<Scalars['String']>;
};

export type GroupConnectionUpdatedAt = {
  __typename?: 'GroupConnectionUpdatedAt';
  connection?: Maybe<GroupConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type GroupConnection_Id = {
  __typename?: 'GroupConnection_id';
  connection?: Maybe<GroupConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type GroupGroupBy = {
  __typename?: 'GroupGroupBy';
  _id?: Maybe<Array<Maybe<GroupConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<GroupConnectionCreatedAt>>>;
  id?: Maybe<Array<Maybe<GroupConnectionId>>>;
  project?: Maybe<Array<Maybe<GroupConnectionProject>>>;
  published_at?: Maybe<Array<Maybe<GroupConnectionPublished_At>>>;
  title?: Maybe<Array<Maybe<GroupConnectionTitle>>>;
  updatedAt?: Maybe<Array<Maybe<GroupConnectionUpdatedAt>>>;
};

export type GroupInput = {
  created_by?: Maybe<Scalars['ID']>;
  project?: Maybe<Scalars['ID']>;
  projects?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
  users_permissions_users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  _id: Scalars['ID'];
  code?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type InputId = {
  id: Scalars['ID'];
};

export type LocaleInput = {
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Morph =
  | Group
  | GroupAggregator
  | GroupConnection
  | GroupConnectionCreatedAt
  | GroupConnectionId
  | GroupConnectionProject
  | GroupConnectionPublished_At
  | GroupConnectionTitle
  | GroupConnectionUpdatedAt
  | GroupConnection_Id
  | GroupGroupBy
  | I18NLocale
  | Project
  | Projects
  | ProjectsAggregator
  | ProjectsConnection
  | ProjectsConnectionCreatedAt
  | ProjectsConnectionDescription
  | ProjectsConnectionGroup
  | ProjectsConnectionId
  | ProjectsConnectionImage
  | ProjectsConnectionPublished_At
  | ProjectsConnectionStatus
  | ProjectsConnectionTitle
  | ProjectsConnectionUpdatedAt
  | ProjectsConnection_Id
  | ProjectsGroupBy
  | ProjectsInProgress
  | ProjectsInProgressAggregator
  | ProjectsInProgressConnection
  | ProjectsInProgressConnectionCreatedAt
  | ProjectsInProgressConnectionId
  | ProjectsInProgressConnectionPublished_At
  | ProjectsInProgressConnectionUpdatedAt
  | ProjectsInProgressConnection_Id
  | ProjectsInProgressGroupBy
  | Technologies
  | TechnologiesAggregator
  | TechnologiesConnection
  | TechnologiesConnectionCreatedAt
  | TechnologiesConnectionDescription
  | TechnologiesConnectionId
  | TechnologiesConnectionImage
  | TechnologiesConnectionPublished_At
  | TechnologiesConnectionTitle
  | TechnologiesConnectionUpdatedAt
  | TechnologiesConnection_Id
  | TechnologiesGroupBy
  | UploadFile
  | UploadFileAggregator
  | UploadFileAggregatorAvg
  | UploadFileAggregatorMax
  | UploadFileAggregatorMin
  | UploadFileAggregatorSum
  | UploadFileConnection
  | UploadFileConnectionAlternativeText
  | UploadFileConnectionCaption
  | UploadFileConnectionCreatedAt
  | UploadFileConnectionExt
  | UploadFileConnectionFormats
  | UploadFileConnectionHash
  | UploadFileConnectionHeight
  | UploadFileConnectionId
  | UploadFileConnectionMime
  | UploadFileConnectionName
  | UploadFileConnectionPreviewUrl
  | UploadFileConnectionProvider
  | UploadFileConnectionProvider_Metadata
  | UploadFileConnectionSize
  | UploadFileConnectionUpdatedAt
  | UploadFileConnectionUrl
  | UploadFileConnectionWidth
  | UploadFileConnection_Id
  | UploadFileGroupBy
  | UserPermissionsPasswordPayload
  | UserProjects
  | UsersPermissionsLoginPayload
  | UsersPermissionsMe
  | UsersPermissionsMeRole
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsRoleAggregator
  | UsersPermissionsRoleConnection
  | UsersPermissionsRoleConnectionDescription
  | UsersPermissionsRoleConnectionId
  | UsersPermissionsRoleConnectionName
  | UsersPermissionsRoleConnectionType
  | UsersPermissionsRoleConnection_Id
  | UsersPermissionsRoleGroupBy
  | UsersPermissionsUser
  | UsersPermissionsUserAggregator
  | UsersPermissionsUserConnection
  | UsersPermissionsUserConnectionBlocked
  | UsersPermissionsUserConnectionConfirmed
  | UsersPermissionsUserConnectionCreatedAt
  | UsersPermissionsUserConnectionEmail
  | UsersPermissionsUserConnectionId
  | UsersPermissionsUserConnectionMentor
  | UsersPermissionsUserConnectionProvider
  | UsersPermissionsUserConnectionRole
  | UsersPermissionsUserConnectionUpdatedAt
  | UsersPermissionsUserConnectionUsername
  | UsersPermissionsUserConnection_Id
  | UsersPermissionsUserGroupBy
  | CreateGroupPayload
  | CreateProjectPayload
  | CreateProjectsInProgressPayload
  | CreateRolePayload
  | CreateTechnologyPayload
  | CreateUserPayload
  | DeleteFilePayload
  | DeleteGroupPayload
  | DeleteProjectPayload
  | DeleteProjectsInProgressPayload
  | DeleteRolePayload
  | DeleteTechnologyPayload
  | DeleteUserPayload
  | UpdateGroupPayload
  | UpdateProjectPayload
  | UpdateProjectsInProgressPayload
  | UpdateRolePayload
  | UpdateTechnologyPayload
  | UpdateUserPayload;

export type Mutation = {
  __typename?: 'Mutation';
  createGroup?: Maybe<CreateGroupPayload>;
  createProject?: Maybe<CreateProjectPayload>;
  createProjectsInProgress?: Maybe<CreateProjectsInProgressPayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  createTechnology?: Maybe<CreateTechnologyPayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  deleteGroup?: Maybe<DeleteGroupPayload>;
  deleteProject?: Maybe<DeleteProjectPayload>;
  deleteProjectsInProgress?: Maybe<DeleteProjectsInProgressPayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  deleteTechnology?: Maybe<DeleteTechnologyPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFile>>;
  register: UsersPermissionsLoginPayload;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateFileInfo: UploadFile;
  updateGroup?: Maybe<UpdateGroupPayload>;
  updateProject?: Maybe<UpdateProjectPayload>;
  updateProjectsInProgress?: Maybe<UpdateProjectsInProgressPayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  updateTechnology?: Maybe<UpdateTechnologyPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  upload: UploadFile;
};

export type MutationCreateGroupArgs = {
  input?: Maybe<CreateGroupInput>;
};

export type MutationCreateProjectArgs = {
  input?: Maybe<CreateProjectInput>;
};

export type MutationCreateProjectsInProgressArgs = {
  input?: Maybe<CreateProjectsInProgressInput>;
};

export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};

export type MutationCreateTechnologyArgs = {
  input?: Maybe<CreateTechnologyInput>;
};

export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};

export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};

export type MutationDeleteGroupArgs = {
  input?: Maybe<DeleteGroupInput>;
};

export type MutationDeleteProjectArgs = {
  input?: Maybe<DeleteProjectInput>;
};

export type MutationDeleteProjectsInProgressArgs = {
  input?: Maybe<DeleteProjectsInProgressInput>;
};

export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};

export type MutationDeleteTechnologyArgs = {
  input?: Maybe<DeleteTechnologyInput>;
};

export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};

export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

export type MutationMultipleUploadArgs = {
  field?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
  ref?: Maybe<Scalars['String']>;
  refId?: Maybe<Scalars['ID']>;
  source?: Maybe<Scalars['String']>;
};

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};

export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};

export type MutationUpdateGroupArgs = {
  input?: Maybe<UpdateGroupInput>;
};

export type MutationUpdateProjectArgs = {
  input?: Maybe<UpdateProjectInput>;
};

export type MutationUpdateProjectsInProgressArgs = {
  input?: Maybe<UpdateProjectsInProgressInput>;
};

export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};

export type MutationUpdateTechnologyArgs = {
  input?: Maybe<UpdateTechnologyInput>;
};

export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};

export type MutationUploadArgs = {
  field?: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: Maybe<FileInfoInput>;
  ref?: Maybe<Scalars['String']>;
  refId?: Maybe<Scalars['ID']>;
  source?: Maybe<Scalars['String']>;
};

export type Project = {
  __typename?: 'Project';
  description: Scalars['String'];
  id: Scalars['ID'];
  status?: Maybe<ProjectStatus>;
  title: Scalars['String'];
};

export type ProjectInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Enum_Projects_Status>;
  technologies?: Maybe<Array<Maybe<Scalars['ID']>>>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export enum ProjectStatus {
  Completed = 'completed',
  InProgress = 'inProgress',
  Saved = 'saved',
}

export type Projects = {
  __typename?: 'Projects';
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  group?: Maybe<Group>;
  id: Scalars['ID'];
  image?: Maybe<UploadFile>;
  published_at?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Enum_Projects_Status>;
  technologies?: Maybe<Array<Maybe<Technologies>>>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type ProjectsTechnologiesArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ProjectsUsersArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ProjectsAggregator = {
  __typename?: 'ProjectsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ProjectsConnection = {
  __typename?: 'ProjectsConnection';
  aggregate?: Maybe<ProjectsAggregator>;
  groupBy?: Maybe<ProjectsGroupBy>;
  values?: Maybe<Array<Maybe<Projects>>>;
};

export type ProjectsConnectionCreatedAt = {
  __typename?: 'ProjectsConnectionCreatedAt';
  connection?: Maybe<ProjectsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ProjectsConnectionDescription = {
  __typename?: 'ProjectsConnectionDescription';
  connection?: Maybe<ProjectsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProjectsConnectionGroup = {
  __typename?: 'ProjectsConnectionGroup';
  connection?: Maybe<ProjectsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ProjectsConnectionId = {
  __typename?: 'ProjectsConnectionId';
  connection?: Maybe<ProjectsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ProjectsConnectionImage = {
  __typename?: 'ProjectsConnectionImage';
  connection?: Maybe<ProjectsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ProjectsConnectionPublished_At = {
  __typename?: 'ProjectsConnectionPublished_at';
  connection?: Maybe<ProjectsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ProjectsConnectionStatus = {
  __typename?: 'ProjectsConnectionStatus';
  connection?: Maybe<ProjectsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProjectsConnectionTitle = {
  __typename?: 'ProjectsConnectionTitle';
  connection?: Maybe<ProjectsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProjectsConnectionUpdatedAt = {
  __typename?: 'ProjectsConnectionUpdatedAt';
  connection?: Maybe<ProjectsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ProjectsConnection_Id = {
  __typename?: 'ProjectsConnection_id';
  connection?: Maybe<ProjectsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ProjectsGroupBy = {
  __typename?: 'ProjectsGroupBy';
  _id?: Maybe<Array<Maybe<ProjectsConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<ProjectsConnectionCreatedAt>>>;
  description?: Maybe<Array<Maybe<ProjectsConnectionDescription>>>;
  group?: Maybe<Array<Maybe<ProjectsConnectionGroup>>>;
  id?: Maybe<Array<Maybe<ProjectsConnectionId>>>;
  image?: Maybe<Array<Maybe<ProjectsConnectionImage>>>;
  published_at?: Maybe<Array<Maybe<ProjectsConnectionPublished_At>>>;
  status?: Maybe<Array<Maybe<ProjectsConnectionStatus>>>;
  title?: Maybe<Array<Maybe<ProjectsConnectionTitle>>>;
  updatedAt?: Maybe<Array<Maybe<ProjectsConnectionUpdatedAt>>>;
};

export type ProjectsInProgress = {
  __typename?: 'ProjectsInProgress';
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
};

export type ProjectsInProgressAggregator = {
  __typename?: 'ProjectsInProgressAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ProjectsInProgressConnection = {
  __typename?: 'ProjectsInProgressConnection';
  aggregate?: Maybe<ProjectsInProgressAggregator>;
  groupBy?: Maybe<ProjectsInProgressGroupBy>;
  values?: Maybe<Array<Maybe<ProjectsInProgress>>>;
};

export type ProjectsInProgressConnectionCreatedAt = {
  __typename?: 'ProjectsInProgressConnectionCreatedAt';
  connection?: Maybe<ProjectsInProgressConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ProjectsInProgressConnectionId = {
  __typename?: 'ProjectsInProgressConnectionId';
  connection?: Maybe<ProjectsInProgressConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ProjectsInProgressConnectionPublished_At = {
  __typename?: 'ProjectsInProgressConnectionPublished_at';
  connection?: Maybe<ProjectsInProgressConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ProjectsInProgressConnectionUpdatedAt = {
  __typename?: 'ProjectsInProgressConnectionUpdatedAt';
  connection?: Maybe<ProjectsInProgressConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ProjectsInProgressConnection_Id = {
  __typename?: 'ProjectsInProgressConnection_id';
  connection?: Maybe<ProjectsInProgressConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ProjectsInProgressGroupBy = {
  __typename?: 'ProjectsInProgressGroupBy';
  _id?: Maybe<Array<Maybe<ProjectsInProgressConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<ProjectsInProgressConnectionCreatedAt>>>;
  id?: Maybe<Array<Maybe<ProjectsInProgressConnectionId>>>;
  published_at?: Maybe<Array<Maybe<ProjectsInProgressConnectionPublished_At>>>;
  updatedAt?: Maybe<Array<Maybe<ProjectsInProgressConnectionUpdatedAt>>>;
};

export type ProjectsInProgressInput = {
  created_by?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW',
}

export type Query = {
  __typename?: 'Query';
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  group?: Maybe<Group>;
  groups?: Maybe<Array<Maybe<Group>>>;
  groupsConnection?: Maybe<GroupConnection>;
  me?: Maybe<UsersPermissionsMe>;
  project?: Maybe<Projects>;
  projects?: Maybe<Array<Maybe<Projects>>>;
  projectsConnection?: Maybe<ProjectsConnection>;
  projectsInProgress?: Maybe<ProjectsInProgress>;
  projectsInProgresses?: Maybe<Array<Maybe<ProjectsInProgress>>>;
  projectsInProgressesConnection?: Maybe<ProjectsInProgressConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  technologies?: Maybe<Array<Maybe<Technologies>>>;
  technologiesConnection?: Maybe<TechnologiesConnection>;
  technology?: Maybe<Technologies>;
  user?: Maybe<UsersPermissionsUser>;
  userProjectsByStatus?: Maybe<Array<Maybe<Project>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
};

export type QueryFilesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryFilesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryGroupArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryGroupsArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryGroupsConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryProjectArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryProjectsArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryProjectsConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryProjectsInProgressArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryProjectsInProgressesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryProjectsInProgressesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryRolesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryRolesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryTechnologiesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryTechnologiesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryTechnologyArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryUserProjectsByStatusArgs = {
  status?: Maybe<Scalars['String']>;
};

export type QueryUsersArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryUsersConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type RoleInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  type?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type Technologies = {
  __typename?: 'Technologies';
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<UploadFile>;
  projects?: Maybe<Array<Maybe<Projects>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  users_permissions_users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type TechnologiesProjectsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type TechnologiesUsers_Permissions_UsersArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type TechnologiesAggregator = {
  __typename?: 'TechnologiesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TechnologiesConnection = {
  __typename?: 'TechnologiesConnection';
  aggregate?: Maybe<TechnologiesAggregator>;
  groupBy?: Maybe<TechnologiesGroupBy>;
  values?: Maybe<Array<Maybe<Technologies>>>;
};

export type TechnologiesConnectionCreatedAt = {
  __typename?: 'TechnologiesConnectionCreatedAt';
  connection?: Maybe<TechnologiesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TechnologiesConnectionDescription = {
  __typename?: 'TechnologiesConnectionDescription';
  connection?: Maybe<TechnologiesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TechnologiesConnectionId = {
  __typename?: 'TechnologiesConnectionId';
  connection?: Maybe<TechnologiesConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TechnologiesConnectionImage = {
  __typename?: 'TechnologiesConnectionImage';
  connection?: Maybe<TechnologiesConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TechnologiesConnectionPublished_At = {
  __typename?: 'TechnologiesConnectionPublished_at';
  connection?: Maybe<TechnologiesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TechnologiesConnectionTitle = {
  __typename?: 'TechnologiesConnectionTitle';
  connection?: Maybe<TechnologiesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TechnologiesConnectionUpdatedAt = {
  __typename?: 'TechnologiesConnectionUpdatedAt';
  connection?: Maybe<TechnologiesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TechnologiesConnection_Id = {
  __typename?: 'TechnologiesConnection_id';
  connection?: Maybe<TechnologiesConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TechnologiesGroupBy = {
  __typename?: 'TechnologiesGroupBy';
  _id?: Maybe<Array<Maybe<TechnologiesConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<TechnologiesConnectionCreatedAt>>>;
  description?: Maybe<Array<Maybe<TechnologiesConnectionDescription>>>;
  id?: Maybe<Array<Maybe<TechnologiesConnectionId>>>;
  image?: Maybe<Array<Maybe<TechnologiesConnectionImage>>>;
  published_at?: Maybe<Array<Maybe<TechnologiesConnectionPublished_At>>>;
  title?: Maybe<Array<Maybe<TechnologiesConnectionTitle>>>;
  updatedAt?: Maybe<Array<Maybe<TechnologiesConnectionUpdatedAt>>>;
};

export type TechnologyInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  projects?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
  users_permissions_users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  _id: Scalars['ID'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
  size: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileRelatedArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  avg?: Maybe<UploadFileAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<UploadFileAggregatorMax>;
  min?: Maybe<UploadFileAggregatorMin>;
  sum?: Maybe<UploadFileAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  aggregate?: Maybe<UploadFileAggregator>;
  groupBy?: Maybe<UploadFileGroupBy>;
  values?: Maybe<Array<Maybe<UploadFile>>>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCreatedAt = {
  __typename?: 'UploadFileConnectionCreatedAt';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type UploadFileConnectionUpdatedAt = {
  __typename?: 'UploadFileConnectionUpdatedAt';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileConnection_Id = {
  __typename?: 'UploadFileConnection_id';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  _id?: Maybe<Array<Maybe<UploadFileConnection_Id>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  createdAt?: Maybe<Array<Maybe<UploadFileConnectionCreatedAt>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  updatedAt?: Maybe<Array<Maybe<UploadFileConnectionUpdatedAt>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
};

export type UserInput = {
  blocked?: Maybe<Scalars['Boolean']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  email: Scalars['String'];
  groups?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mentor?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  projects?: Maybe<Array<Maybe<Scalars['ID']>>>;
  provider?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['ID']>;
  technologies?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updated_by?: Maybe<Scalars['ID']>;
  username: Scalars['String'];
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UserProjects = {
  __typename?: 'UserProjects';
  completed?: Maybe<Array<Maybe<Project>>>;
  inProgress?: Maybe<Array<Maybe<Project>>>;
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  groups: Scalars['JSON'];
  id: Scalars['ID'];
  projects?: Maybe<Array<Maybe<Project>>>;
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  _id: Scalars['ID'];
  action: Scalars['String'];
  controller: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  type: Scalars['String'];
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  _id: Scalars['ID'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  type?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsRolePermissionsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleUsersArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnection_Id = {
  __typename?: 'UsersPermissionsRoleConnection_id';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  _id?: Maybe<Array<Maybe<UsersPermissionsRoleConnection_Id>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  _id: Scalars['ID'];
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  groups?: Maybe<Array<Maybe<Group>>>;
  id: Scalars['ID'];
  mentor?: Maybe<Scalars['Boolean']>;
  projects?: Maybe<Array<Maybe<Projects>>>;
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  technologies?: Maybe<Array<Maybe<Technologies>>>;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UsersPermissionsUserGroupsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsUserProjectsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsUserTechnologiesArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionCreatedAt = {
  __typename?: 'UsersPermissionsUserConnectionCreatedAt';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionMentor = {
  __typename?: 'UsersPermissionsUserConnectionMentor';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionUpdatedAt = {
  __typename?: 'UsersPermissionsUserConnectionUpdatedAt';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnection_Id = {
  __typename?: 'UsersPermissionsUserConnection_id';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  _id?: Maybe<Array<Maybe<UsersPermissionsUserConnection_Id>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  createdAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreatedAt>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  mentor?: Maybe<Array<Maybe<UsersPermissionsUserConnectionMentor>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  updatedAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdatedAt>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
};

export type CreateGroupInput = {
  data?: Maybe<GroupInput>;
};

export type CreateGroupPayload = {
  __typename?: 'createGroupPayload';
  group?: Maybe<Group>;
};

export type CreateProjectInput = {
  data?: Maybe<ProjectInput>;
};

export type CreateProjectPayload = {
  __typename?: 'createProjectPayload';
  project?: Maybe<Projects>;
};

export type CreateProjectsInProgressInput = {
  data?: Maybe<ProjectsInProgressInput>;
};

export type CreateProjectsInProgressPayload = {
  __typename?: 'createProjectsInProgressPayload';
  projectsInProgress?: Maybe<ProjectsInProgress>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateTechnologyInput = {
  data?: Maybe<TechnologyInput>;
};

export type CreateTechnologyPayload = {
  __typename?: 'createTechnologyPayload';
  technology?: Maybe<Technologies>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeleteGroupInput = {
  where?: Maybe<InputId>;
};

export type DeleteGroupPayload = {
  __typename?: 'deleteGroupPayload';
  group?: Maybe<Group>;
};

export type DeleteProjectInput = {
  where?: Maybe<InputId>;
};

export type DeleteProjectPayload = {
  __typename?: 'deleteProjectPayload';
  project?: Maybe<Projects>;
};

export type DeleteProjectsInProgressInput = {
  where?: Maybe<InputId>;
};

export type DeleteProjectsInProgressPayload = {
  __typename?: 'deleteProjectsInProgressPayload';
  projectsInProgress?: Maybe<ProjectsInProgress>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteTechnologyInput = {
  where?: Maybe<InputId>;
};

export type DeleteTechnologyPayload = {
  __typename?: 'deleteTechnologyPayload';
  technology?: Maybe<Technologies>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type EditFileInput = {
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  size?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['ID']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type EditGroupInput = {
  created_by?: Maybe<Scalars['ID']>;
  project?: Maybe<Scalars['ID']>;
  projects?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
  users_permissions_users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type EditLocaleInput = {
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditProjectInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Enum_Projects_Status>;
  technologies?: Maybe<Array<Maybe<Scalars['ID']>>>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type EditProjectsInProgressInput = {
  created_by?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  type?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type EditTechnologyInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  projects?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
  users_permissions_users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type EditUserInput = {
  blocked?: Maybe<Scalars['Boolean']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  groups?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mentor?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  projects?: Maybe<Array<Maybe<Scalars['ID']>>>;
  provider?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['ID']>;
  technologies?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updated_by?: Maybe<Scalars['ID']>;
  username?: Maybe<Scalars['String']>;
};

export type UpdateGroupInput = {
  data?: Maybe<EditGroupInput>;
  where?: Maybe<InputId>;
};

export type UpdateGroupPayload = {
  __typename?: 'updateGroupPayload';
  group?: Maybe<Group>;
};

export type UpdateProjectInput = {
  data?: Maybe<EditProjectInput>;
  where?: Maybe<InputId>;
};

export type UpdateProjectPayload = {
  __typename?: 'updateProjectPayload';
  project?: Maybe<Projects>;
};

export type UpdateProjectsInProgressInput = {
  data?: Maybe<EditProjectsInProgressInput>;
  where?: Maybe<InputId>;
};

export type UpdateProjectsInProgressPayload = {
  __typename?: 'updateProjectsInProgressPayload';
  projectsInProgress?: Maybe<ProjectsInProgress>;
};

export type UpdateRoleInput = {
  data?: Maybe<EditRoleInput>;
  where?: Maybe<InputId>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateTechnologyInput = {
  data?: Maybe<EditTechnologyInput>;
  where?: Maybe<InputId>;
};

export type UpdateTechnologyPayload = {
  __typename?: 'updateTechnologyPayload';
  technology?: Maybe<Technologies>;
};

export type UpdateUserInput = {
  data?: Maybe<EditUserInput>;
  where?: Maybe<InputId>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};
