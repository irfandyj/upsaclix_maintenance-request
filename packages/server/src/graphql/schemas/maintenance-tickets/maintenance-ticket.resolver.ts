import { Resolver, Query, Mutation, Arg, ID } from "type-graphql";
import { MaintenanceTicket, MaintenanceTicketUrgency, MaintenanceTicketStatus } from "./maintenance-ticket.typeDef";

@Resolver(of => MaintenanceTicket)
class MaintenanceTicketResolver {
  
  private tickets: MaintenanceTicket[] = [];

  @Query(returns => [MaintenanceTicket])
  async getTickets(): Promise<MaintenanceTicket[]> {
    return this.tickets;
  }

  @Query(returns => MaintenanceTicket, { nullable: true })
  async getTicket(@Arg("id", type => ID) id: string): Promise<MaintenanceTicket | undefined> {
    return this.tickets.find(ticket => ticket.id === id);
  }

  @Mutation(returns => MaintenanceTicket)
  async createTicket(
    @Arg("urgency", type => MaintenanceTicketUrgency) urgency: MaintenanceTicketUrgency,
    @Arg("status", type => MaintenanceTicketStatus) status: MaintenanceTicketStatus,
    @Arg("title") title: string,
    @Arg("description", { nullable: true }) description?: string
  ): Promise<MaintenanceTicket> {
    const ticket = {
      id: (this.tickets.length + 1).toString(),
      urgency,
      status,
      title,
      description
    };
    this.tickets.push(ticket);
    return ticket;
  }

  @Mutation(returns => MaintenanceTicket, { nullable: true })
  async updateTicketStatus(
    @Arg("id", type => ID) id: string,
    @Arg("status", type => MaintenanceTicketStatus) status: MaintenanceTicketStatus
  ): Promise<MaintenanceTicket | undefined> {
    const ticket = this.tickets.find(ticket => ticket.id === id);
    if (ticket) {
      ticket.status = status;
    }
    return ticket;
  }
}

export { MaintenanceTicketResolver };
