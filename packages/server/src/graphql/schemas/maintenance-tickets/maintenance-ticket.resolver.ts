import { Resolver, Query, Mutation, Arg, ID } from "type-graphql";
import { MaintenanceTicket, MaintenanceTicketStatus, CreateMaintenanceTicketInput, UpdateMaintenanceTicketInput } from "./maintenance-ticket.typeDef";
import { createTicket, getTicketById, getTickets } from "./maintenance-ticket.service";

@Resolver(of => MaintenanceTicket)
class MaintenanceTicketResolver {
  
  private tickets: MaintenanceTicket[] = [];

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
    return ticket;
  }

  @Mutation(returns => MaintenanceTicket, { nullable: true })
  async updateTicketStatus(
    @Arg("input") updateMaintenanceTicketInput: UpdateMaintenanceTicketInput
  ): Promise<MaintenanceTicket | undefined> {
    const ticket = this.tickets.find(ticket => ticket.id === updateMaintenanceTicketInput.id);
    if (ticket) {
      ticket.status = updateMaintenanceTicketInput.status;
    }
    return ticket;
  }
}

export { MaintenanceTicketResolver };
