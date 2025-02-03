import { GraphQLClient } from "graphql-request";

import { getSdk } from "./sdk";

const gqlClient = new GraphQLClient("http://localhost:3000/api/graphql");

export const { getMaintenanceTickets } = getSdk(gqlClient);

