import { Resolver, Query, Mutation, Arg, ID, Subscription, Root } from "type-graphql";
import { MaintenanceTicket, CreateMaintenanceTicketInput, UpdateMaintenanceTicketInput, UpdateMaintenanceTicketStatusInput, CreateMaintenanceTicketPayload, MaintenanceTicketStats, UpdateMaintenanceTicketPayload } from "./maintenance-ticket.typeDef";
import { createTicket, getTicketById, getTickets, getTicketStats, updateTicket, updateTicketStatus } from "./maintenance-ticket.service";
import { pubSub, Topics } from "../pubSub";

@Resolver(of => MaintenanceTicket)
class MaintenanceTicketResolver {

  @Query (returns => MaintenanceTicketStats)
  async getTicketStats(): Promise<MaintenanceTicketStats | undefined> {
    return await getTicketStats();
  }

  @Query(returns => [MaintenanceTicket])
  async getTickets() {
    return await getTickets();
  }

  @Query(returns => MaintenanceTicket, { nullable: true })
  async getTicket(@Arg("id", type => ID) id: number): Promise<MaintenanceTicket | undefined> {
    const parsedId = parseInt(id.toString());
    const ticket = await getTicketById(parsedId);
    if (!ticket) return undefined;
    return ticket;
  }

  @Mutation(returns => MaintenanceTicket)
  async createTicket(
    @Arg("input") maintenanceTicketInput: CreateMaintenanceTicketInput
  ) {
    const ticket = await createTicket(maintenanceTicketInput);
    
    // Trigger subscriptions topics
    const payload: CreateMaintenanceTicketPayload = ticket;
    pubSub.publish(Topics.MAINTENANCE_TICKET_CREATED, payload);

    return ticket;
  }

  /**
   * Update a maintenance ticket
   */
  @Mutation(returns => MaintenanceTicket, { nullable: true })
  async updateTicket(
    @Arg("input") updateMaintenanceTicketInput: UpdateMaintenanceTicketInput,
  ): Promise<MaintenanceTicket | undefined> {
    const ticket = await updateTicket(updateMaintenanceTicketInput);
    return ticket;
  }

  @Mutation(returns => MaintenanceTicket, { nullable: true })
  async updateTicketStatus(
    @Arg("input") updateMaintenanceTicketStatusInput: UpdateMaintenanceTicketStatusInput
  ): Promise<MaintenanceTicket | undefined> {
    const ticket = await updateTicketStatus(updateMaintenanceTicketStatusInput);
    if (!ticket) {
      // Should throw an error here
      return undefined;
    }
    return ticket;
  }

  @Subscription({ topics: Topics.MAINTENANCE_TICKET_CREATED, })
  ticketCreated(@Root() ticket: CreateMaintenanceTicketPayload): MaintenanceTicket {
    return ticket;
  }

  @Subscription({ topics: Topics.MAINTENANCE_TICKET_UPDATED, })
  ticketUpdated(@Root() ticket: UpdateMaintenanceTicketPayload): MaintenanceTicket {
    return ticket;
  }

  // Was trying to get all the websocket in one go, but it's not working.
  // Something related to it being async function cause it to not work.
  // @Subscription({
  //   topics: [Topics.MAINTENANCE_TICKET_CREATED, Topics.MAINTENANCE_TICKET_UPDATED],
  // })
  // subscribeDashboard(): SubscribeDashboard {
  //   return dashboardVal;
  // }
}

export { MaintenanceTicketResolver };
