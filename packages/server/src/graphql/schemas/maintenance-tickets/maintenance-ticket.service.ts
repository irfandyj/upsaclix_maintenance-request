import prisma from "../../../db";
import { CreateMaintenanceTicketInput, MaintenanceTicketStats, MaintenanceTicketStatus, MaintenanceTicketUrgency, UpdateMaintenanceTicketInput, UpdateMaintenanceTicketStatusInput } from "./maintenance-ticket.typeDef";

/**
 * Create a new maintenance ticket
 * @returns 
 */
export const createTicket = async (maintenanceTicketInput: CreateMaintenanceTicketInput) => {
  return await prisma.maintenanceTicket.create({
    data: {
      urgency: maintenanceTicketInput.urgency,
      status: maintenanceTicketInput.status ?? MaintenanceTicketStatus.OPEN,
      title: maintenanceTicketInput.title,
      description: maintenanceTicketInput.description ?? ""
    }
  });
}

/**
 * Get the maintenance ticket statistics
 */
export const getTicketStats = async (): Promise<MaintenanceTicketStats> => {
  const totalOpenTickets = await prisma.maintenanceTicket.count({
    where: { status: MaintenanceTicketStatus.OPEN }
  });

  // Include emergency and urgent, but not status resolved
  const totalUrgentTickets = await prisma.maintenanceTicket.count({
    where: {
      urgency: { in: [MaintenanceTicketUrgency.URGENT, MaintenanceTicketUrgency.EMERGENCY] },
      status: { not: MaintenanceTicketStatus.RESOLVED }
    }
  });

  // Average time in days to resolve a ticket, where resolvedAt is not null
  // resolvedAt and createdAt are both Date fields
  // const averageTime = await prisma.maintenanceTicket.aggregate({
  //   _avg: {
  //     id: true
  //   },
  //   where: {
  //     resolvedAt: { not: undefined }
  //   }
  // });

  return {
    open: totalOpenTickets ?? 0,
    totalUrgent: totalUrgentTickets ?? 0,
    averageTime: 0
  };
}

/**
 * Get all the maintenance tickets
 */
export const getTickets = async () => {
  return await prisma.maintenanceTicket.findMany();
};

/**
 * Get a single maintenance ticket
 * @param id 
 */
export const getTicketById = async (id: number) => {
  return await prisma.maintenanceTicket.findUnique({
    where: {
      id
    }
  });
}

/**
 * Update the maintenance ticket
 */
export const updateTicket = async (ticket: UpdateMaintenanceTicketInput) => {
  const ticketId = typeof ticket.id === "string" ? parseInt(ticket.id) : ticket.id;
  return await prisma.maintenanceTicket.update({
    where: { id: ticketId },
    data: { ...ticket, id: ticketId }
  });
}

/**
 * Update the status of a maintenance ticket
 * @param id 
 * @param status 
 */
export const updateTicketStatus = async (ticket: UpdateMaintenanceTicketStatusInput) => {
  const ticketId = typeof ticket.id === "string" ? parseInt(ticket.id) : ticket.id;
  return await prisma.maintenanceTicket.update({
    where: { id: ticketId },
    data: { status: ticket.status }
  });
}
