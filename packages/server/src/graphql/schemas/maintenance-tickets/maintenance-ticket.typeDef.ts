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

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

// Please move this as a DTO later on, it suits better there
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

  @Field({ nullable: true })
  title?: string;

  @Field(type => MaintenanceTicketUrgency, { nullable: true })
  urgency?: MaintenanceTicketUrgency;

  @Field(type => MaintenanceTicketStatus, { nullable: true })
  status?: MaintenanceTicketStatus;

  @Field({ nullable: true })
  description?: string;
}

@InputType()
export class UpdateMaintenanceTicketStatusInput {

  @Field(type => ID)
  id: number;

  @Field(type => MaintenanceTicketStatus)
  status: MaintenanceTicketStatus;
}


export { MaintenanceTicket, MaintenanceTicketUrgency, MaintenanceTicketStatus };
