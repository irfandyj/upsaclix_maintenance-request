import { Field, ID, ObjectType, registerEnumType } from "type-graphql";

enum MaintenanceTicketUrgency {
  NON_URGENT = "non_urgent",
  LESS_URGENT = "less_urgent",
  URGENT = "urgent",
  EMERGENCY = "emergency"
}

enum MaintenanceTicketStatus {
  OPEN = "open",
  IN_PROGRESS = "in_progress",
  RESOLVED = "resolved",
  CLOSED = "closed"
}

registerEnumType(MaintenanceTicketUrgency, {
  name: "MaintenanceTicketUrgency"
});

registerEnumType(MaintenanceTicketStatus, {
  name: "MaintenanceTicketStatus"
});

@ObjectType()
class MaintenanceTicket {

  @Field(type => ID)
  id: string;

  @Field(type => MaintenanceTicketUrgency)
  urgency: MaintenanceTicketUrgency;

  @Field(type => MaintenanceTicketStatus)
  status: MaintenanceTicketStatus;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;
}

export { MaintenanceTicket, MaintenanceTicketUrgency, MaintenanceTicketStatus };
