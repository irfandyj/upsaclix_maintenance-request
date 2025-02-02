import { GraphQLTypeResolver } from "graphql";

export enum MaintenanceTicketUrgency {
  NON_URGENT = "NON_URGENT",
  LESS_URGENT = "LESS_URGENT",
  URGENT = "URGENT",

  /** Achieved through URGENT state, after 6 hours Urgent state will become EMERGENCY. */
  EMERGENCY = "EMERGENCY",
}

export enum MaintenanceTicketStatus {
  OPEN = "OPEN",
  IN_PROGRESS = "IN_PROGRESS",
  RESOLVED = "RESOLVED",
  CLOSED = "CLOSED",
}

type MaintenanceTicket = {
  id: string;
  urgency: MaintenanceTicketUrgency;
  status: MaintenanceTicketStatus;
  title: string;
  description?: string;
}

type MaintenanceTicketStats = {
  total: number;
  open: number;
  inProgress: number;
  resolved: number;
  closed: number;
}

type Query = {
  getMaintenanceTicketStats: MaintenanceTicketStats;
  getMaintenanceTickets: MaintenanceTicket[];
}

const getMaintenanceTicketStats = (): MaintenanceTicketStats => {
  return {
    total: 0,
    open: 0,
    inProgress: 0,
    resolved: 0,
    closed: 0,
  };
}

const getMaintenanceTickets = (): MaintenanceTicket[] => {
  return [
    {
      id: "1",
      urgency: MaintenanceTicketUrgency.EMERGENCY,
      status: MaintenanceTicketStatus.OPEN,
      title: "Broken door handle",
      description: "The door handle to the main entrance is broken",
    },
    {
      id: "2",
      urgency: MaintenanceTicketUrgency.URGENT,
      status: MaintenanceTicketStatus.IN_PROGRESS,
      title: "Leaky faucet",
      description: "The faucet in the kitchen is leaking",
    },
    {
      id: "3",
      urgency: MaintenanceTicketUrgency.LESS_URGENT,
      status: MaintenanceTicketStatus.RESOLVED,
      title: "Broken window",
      description: "The window in the living room is broken",
    },
    {
      id: "4",
      urgency: MaintenanceTicketUrgency.NON_URGENT,
      status: MaintenanceTicketStatus.CLOSED,
      title: "Broken window",
      description: "The window in the living room is broken",
    },
  ];
};

interface CreateMaintenanceTicketDto {
  urgency: MaintenanceTicketUrgency;
  title: string;
  description?: string;
}

const createMaintenanceTicket = (
  createMaintenanceTicketData: CreateMaintenanceTicketDto,
): MaintenanceTicket => {
  return {
    id: "5",
    urgency: createMaintenanceTicketData.urgency,
    status: MaintenanceTicketStatus.OPEN,
    title: createMaintenanceTicketData.title,
    description: createMaintenanceTicketData.description,
  };
}

const updateMaintenanceTicket = (
  id: string,
  urgency: MaintenanceTicketUrgency,
  title: string,
  description?: string,
): MaintenanceTicket => {
  return {
    id,
    urgency,
    status: MaintenanceTicketStatus.OPEN,
    title,
    description,
  };
}

const updateMaintenanceTicketStatus = (
  id: string,
  status: MaintenanceTicketStatus,
): MaintenanceTicket => {
  return {
    id,
    urgency: MaintenanceTicketUrgency.NON_URGENT,
    status,
    title: "Broken window",
    description: "The window in the living room is broken",
  };
}

const deleteMaintenanceTicket = (id: string): MaintenanceTicket => {
  return {
    id,
    urgency: MaintenanceTicketUrgency.NON_URGENT,
    status: MaintenanceTicketStatus.CLOSED,
    title: "Broken window",
    description: "The window in the living room is broken",
  };
}


export const rootResolvers = {
  getMaintenanceTicketStats,
  getMaintenanceTickets,
  createMaintenanceTicket,
  updateMaintenanceTicket,
  updateMaintenanceTicketStatus,
  deleteMaintenanceTicket,
}