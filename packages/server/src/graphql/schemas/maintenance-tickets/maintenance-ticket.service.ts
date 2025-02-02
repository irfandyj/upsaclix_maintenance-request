import prisma from "../../../db";
import { CreateMaintenanceTicketInput } from "./maintenance-ticket.typeDef";

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
