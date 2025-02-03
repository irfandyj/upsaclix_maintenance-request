import { buildSchema } from "type-graphql";
import { MaintenanceTicketResolver } from "./maintenance-tickets/maintenance-ticket.resolver";
import { pubSub } from "./pubSub";

async function bootstrapSchema() {
  const schema = await buildSchema({
    resolvers: [
      MaintenanceTicketResolver
    ],
    pubSub
  });

  return schema;
}

export default bootstrapSchema;
