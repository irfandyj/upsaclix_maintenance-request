import { buildSchema } from "graphql";

const schema = buildSchema(/* GraphQL */`
  enum MaintenanceTicketUrgency {
    NON_URGENT
    LESS_URGENT
    URGENT
    EMERGENCY
  }

  enum MaintenanceTicketStatus {
    OPEN
    IN_PROGRESS
    RESOLVED
    CLOSED
  }

  type MaintenanceTicket {
    id: ID!
    urgency: MaintenanceTicketUrgency!
    status: MaintenanceTicketStatus!
    title: String!
    description: String
  }

  type MaintenanceTicketStats {
    total: Int
    open: Int
    inProgress: Int
    resolved: Int
    closed: Int
  }

  type Query {
    getMaintenanceTicketStats: MaintenanceTicketStats
    getMaintenanceTickets: [MaintenanceTicket]
  }

  type Mutation {
    createMaintenanceTicket(
      urgency: MaintenanceTicketUrgency!
      title: String!
      description: String
    ): MaintenanceTicket
    
    updateMaintenanceTicket(
      id: ID!
      urgency: MaintenanceTicketUrgency!
      title: String!
      description: String
    ): MaintenanceTicket
    updateMaintenanceTicketStatus(
      id: ID!
      status: MaintenanceTicketStatus!
    ): MaintenanceTicket
    
    deleteMaintenanceTicket(id: ID!): MaintenanceTicket
  }
`);

export default schema;