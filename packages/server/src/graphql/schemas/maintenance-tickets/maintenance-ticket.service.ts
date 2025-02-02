import prisma from "../../../db";
import { CreateMaintenanceTicketInput, UpdateMaintenanceTicketInput, UpdateMaintenanceTicketStatusInput } from "./maintenance-ticket.typeDef";

/**
 * Create a new maintenance ticket
 * @returns 
 */
export const createTicket = async (maintenanceTicketInput: CreateMaintenanceTicketInput) => {
  return await prisma.maintenanceTicket.create({
    data: {
      urgency: maintenanceTicketInput.urgency,
      status: maintenanceTicketInput.status,
      title: maintenanceTicketInput.title,
      description: maintenanceTicketInput.description ?? ""
    }
  });
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
