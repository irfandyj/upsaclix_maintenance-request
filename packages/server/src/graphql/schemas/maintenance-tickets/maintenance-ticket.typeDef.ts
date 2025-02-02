import { Field, ID, InputType, ObjectType, registerEnumType } from "type-graphql";
import { MaintenanceTicketUrgency, MaintenanceTicketStatus } from "@prisma/client";

registerEnumType(MaintenanceTicketUrgency, {
  name: "MaintenanceTicketUrgency"
});

registerEnumType(MaintenanceTicketStatus, {
  name: "MaintenanceTicketStatus"
});

@ObjectType()
class MaintenanceTicket {

  @Field(type => ID)
  id: number;

  @Field(type => MaintenanceTicketUrgency)
  urgency: MaintenanceTicketUrgency;

  @Field(type => MaintenanceTicketStatus)
  status: MaintenanceTicketStatus;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;
}

@InputType()
export class CreateMaintenanceTicketInput {
  
  @Field(type => MaintenanceTicketUrgency)
  urgency: MaintenanceTicketUrgency;

  @Field(type => MaintenanceTicketStatus)
  status: MaintenanceTicketStatus;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;
}

@InputType()
export class UpdateMaintenanceTicketInput {

  @Field(type => ID)
  id: number;

  @Field()
  title: string;

  @Field(type => MaintenanceTicketUrgency)
  urgency: MaintenanceTicketUrgency;

  @Field(type => MaintenanceTicketStatus)
  status: MaintenanceTicketStatus;

  @Field({ nullable: true })
  description?: string;
}

export { MaintenanceTicket, MaintenanceTicketUrgency, MaintenanceTicketStatus };
