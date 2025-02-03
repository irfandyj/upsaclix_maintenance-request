import { GraphQLClient } from "graphql-request";

import { getSdk } from "./sdk";

const gqlClient = new GraphQLClient("http://localhost:3333/graphql");

export const {
  createMaintenanceTicket,
  getMaintenanceTickets,
  getMaintenanceTicketsById,
  updateMaintenanceTicket
} = getSdk(gqlClient);
