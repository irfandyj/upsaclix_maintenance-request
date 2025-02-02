import { Field, ID, ObjectType, registerEnumType } from "type-graphql";

enum MaintenanceTicketUrgency {
  NON_URGENT,
  LESS_URGENT,
  URGENT,
  EMERGENCY
}

enum MaintenanceTicketStatus {
  OPEN,
  IN_PROGRESS,
  RESOLVED,
  CLOSED
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
