import { GraphQLClient } from "graphql-request";

import { getSdk } from "./sdk";

const gqlClient = new GraphQLClient("http://localhost:3333/graphql");

export const {
  createMaintenanceTicket,
  getMaintenanceTickets,
  getMaintenanceTicketsById,
  updateMaintenanceTicket,

  // Subscriptions, idk how to use it here!
  maintenanceTicketCreated,
} = getSdk(gqlClient);
