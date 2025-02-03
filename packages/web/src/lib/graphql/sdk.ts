import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTimeISO: { input: any; output: any; }
};

export type CreateMaintenanceTicketInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  status: MaintenanceTicketStatus;
  title: Scalars['String']['input'];
  urgency: MaintenanceTicketUrgency;
};

export type MaintenanceTicket = {
  __typename?: 'MaintenanceTicket';
  createdAt: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  resolvedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  status: MaintenanceTicketStatus;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  urgency: MaintenanceTicketUrgency;
};

export type MaintenanceTicketStats = {
  __typename?: 'MaintenanceTicketStats';
  averageTime: Scalars['Float']['output'];
  open: Scalars['Float']['output'];
  totalUrgent: Scalars['Float']['output'];
};

export enum MaintenanceTicketStatus {
  Open = 'OPEN',
  Resolved = 'RESOLVED'
}

export enum MaintenanceTicketUrgency {
  Emergency = 'EMERGENCY',
  LessUrgent = 'LESS_URGENT',
  NonUrgent = 'NON_URGENT',
  Urgent = 'URGENT'
}

export type Mutation = {
  __typename?: 'Mutation';
  createTicket: MaintenanceTicket;
  updateTicket?: Maybe<MaintenanceTicket>;
  updateTicketStatus?: Maybe<MaintenanceTicket>;
};


export type MutationCreateTicketArgs = {
  input: CreateMaintenanceTicketInput;
};


export type MutationUpdateTicketArgs = {
  input: UpdateMaintenanceTicketInput;
};


export type MutationUpdateTicketStatusArgs = {
  input: UpdateMaintenanceTicketStatusInput;
};

export type Query = {
  __typename?: 'Query';
  getTicket?: Maybe<MaintenanceTicket>;
  getTicketStats: MaintenanceTicketStats;
  getTickets: Array<MaintenanceTicket>;
};


export type QueryGetTicketArgs = {
  id: Scalars['ID']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  ticketCreated: MaintenanceTicket;
};

export type UpdateMaintenanceTicketInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  status?: InputMaybe<MaintenanceTicketStatus>;
  title?: InputMaybe<Scalars['String']['input']>;
  urgency?: InputMaybe<MaintenanceTicketUrgency>;
};

export type UpdateMaintenanceTicketStatusInput = {
  id: Scalars['ID']['input'];
  status: MaintenanceTicketStatus;
};

export type GetMaintenanceTicketStatsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMaintenanceTicketStatsQuery = { __typename?: 'Query', getTicketStats: { __typename?: 'MaintenanceTicketStats', open: number, totalUrgent: number, averageTime: number } };

export type GetMaintenanceTicketsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMaintenanceTicketsQuery = { __typename?: 'Query', getTickets: Array<{ __typename?: 'MaintenanceTicket', id: string, title: string, status: MaintenanceTicketStatus, urgency: MaintenanceTicketUrgency, description?: string | null, resolvedAt?: any | null, createdAt: any, updatedAt: any }> };

export type GetMaintenanceTicketsByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetMaintenanceTicketsByIdQuery = { __typename?: 'Query', getTicket?: { __typename?: 'MaintenanceTicket', id: string, title: string, status: MaintenanceTicketStatus, urgency: MaintenanceTicketUrgency, description?: string | null, resolvedAt?: any | null, createdAt: any, updatedAt: any } | null };

export type CreateMaintenanceTicketMutationVariables = Exact<{
  input: CreateMaintenanceTicketInput;
}>;


export type CreateMaintenanceTicketMutation = { __typename?: 'Mutation', createTicket: { __typename?: 'MaintenanceTicket', id: string, title: string, status: MaintenanceTicketStatus, urgency: MaintenanceTicketUrgency, description?: string | null, resolvedAt?: any | null, createdAt: any, updatedAt: any } };

export type MaintenanceTicketCreatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type MaintenanceTicketCreatedSubscription = { __typename?: 'Subscription', ticketCreated: { __typename?: 'MaintenanceTicket', id: string, title: string, status: MaintenanceTicketStatus, urgency: MaintenanceTicketUrgency, description?: string | null, resolvedAt?: any | null, createdAt: any, updatedAt: any } };

export type UpdateMaintenanceTicketMutationVariables = Exact<{
  input: UpdateMaintenanceTicketInput;
}>;


export type UpdateMaintenanceTicketMutation = { __typename?: 'Mutation', updateTicket?: { __typename?: 'MaintenanceTicket', id: string, title: string, status: MaintenanceTicketStatus, urgency: MaintenanceTicketUrgency, description?: string | null, resolvedAt?: any | null, createdAt: any, updatedAt: any } | null };


export const GetMaintenanceTicketStatsDocument = gql`
    query getMaintenanceTicketStats {
  getTicketStats {
    open
    totalUrgent
    averageTime
  }
}
    `;
export const GetMaintenanceTicketsDocument = gql`
    query getMaintenanceTickets {
  getTickets {
    id
    title
    status
    urgency
    description
    resolvedAt
    createdAt
    updatedAt
  }
}
    `;
export const GetMaintenanceTicketsByIdDocument = gql`
    query getMaintenanceTicketsById($id: ID!) {
  getTicket(id: $id) {
    id
    title
    status
    urgency
    description
    resolvedAt
    createdAt
    updatedAt
  }
}
    `;
export const CreateMaintenanceTicketDocument = gql`
    mutation createMaintenanceTicket($input: CreateMaintenanceTicketInput!) {
  createTicket(input: $input) {
    id
    title
    status
    urgency
    description
    resolvedAt
    createdAt
    updatedAt
  }
}
    `;
export const MaintenanceTicketCreatedDocument = gql`
    subscription maintenanceTicketCreated {
  ticketCreated {
    id
    title
    status
    urgency
    description
    resolvedAt
    createdAt
    updatedAt
  }
}
    `;
export const UpdateMaintenanceTicketDocument = gql`
    mutation updateMaintenanceTicket($input: UpdateMaintenanceTicketInput!) {
  updateTicket(input: $input) {
    id
    title
    status
    urgency
    description
    resolvedAt
    createdAt
    updatedAt
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getMaintenanceTicketStats(variables?: GetMaintenanceTicketStatsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetMaintenanceTicketStatsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMaintenanceTicketStatsQuery>(GetMaintenanceTicketStatsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getMaintenanceTicketStats', 'query', variables);
    },
    getMaintenanceTickets(variables?: GetMaintenanceTicketsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetMaintenanceTicketsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMaintenanceTicketsQuery>(GetMaintenanceTicketsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getMaintenanceTickets', 'query', variables);
    },
    getMaintenanceTicketsById(variables: GetMaintenanceTicketsByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetMaintenanceTicketsByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMaintenanceTicketsByIdQuery>(GetMaintenanceTicketsByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getMaintenanceTicketsById', 'query', variables);
    },
    createMaintenanceTicket(variables: CreateMaintenanceTicketMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateMaintenanceTicketMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateMaintenanceTicketMutation>(CreateMaintenanceTicketDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createMaintenanceTicket', 'mutation', variables);
    },
    maintenanceTicketCreated(variables?: MaintenanceTicketCreatedSubscriptionVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<MaintenanceTicketCreatedSubscription> {
      return withWrapper((wrappedRequestHeaders) => client.request<MaintenanceTicketCreatedSubscription>(MaintenanceTicketCreatedDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'maintenanceTicketCreated', 'subscription', variables);
    },
    updateMaintenanceTicket(variables: UpdateMaintenanceTicketMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateMaintenanceTicketMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateMaintenanceTicketMutation>(UpdateMaintenanceTicketDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateMaintenanceTicket', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;