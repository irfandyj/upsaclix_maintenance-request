import { buildSchema } from "type-graphql";
import { MaintenanceTicketResolver } from "./maintenance-tickets/maintenance-ticket.resolver";

async function bootstrapSchema() {
  const schema = await buildSchema({
    resolvers: [
      MaintenanceTicketResolver
    ]
  });

  return schema;
}

export default bootstrapSchema;
