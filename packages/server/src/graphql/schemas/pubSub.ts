import { createPubSub } from "@graphql-yoga/subscription";
import { CreateMaintenanceTicketPayload } from "./maintenance-tickets/maintenance-ticket.typeDef";

export enum Topics {
  MAINTENANCE_TICKET_CREATED = "MAINTENANCE_TICKET_CREATED",
  MAINTENANCE_TICKET_UPDATED = "MAINTENANCE_TICKET_UPDATED",
  MAINTENANCE_TICKET_DELETED = "MAINTENANCE_TICKET_DELETED",
}

export const pubSub = createPubSub<{
  [Topics.MAINTENANCE_TICKET_CREATED]: [CreateMaintenanceTicketPayload];
  [Topics.MAINTENANCE_TICKET_UPDATED]: [CreateMaintenanceTicketPayload];
}>();
