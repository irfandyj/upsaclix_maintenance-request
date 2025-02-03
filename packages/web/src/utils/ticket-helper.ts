import { MaintenanceTicketUrgency, MaintenanceTicketStatus } from "@/lib/graphql/sdk";

export function getUrgencyStyle(urgency: MaintenanceTicketUrgency): { textColor: string, text: string } {
  const defaultVal = {
    textColor: "#24BF5F",
    text: "🙂 Non-urgent",
  }
  switch (urgency) {
    case MaintenanceTicketUrgency.NonUrgent:
      return defaultVal;
    case MaintenanceTicketUrgency.LessUrgent:
      return {
        textColor: "#157AD8",
        text: "🔨 Less Urgent",
      };
    case MaintenanceTicketUrgency.Urgent:
      return {
        textColor: "#E3903F",
        text: "⚡ Urgent",
      };
    case MaintenanceTicketUrgency.Emergency:
      return {
        textColor: "#D74B4B",
        text: "🔥 Emergency",
      };
    default:
      return defaultVal;
  }
}

export function getStatusStyle(status: MaintenanceTicketStatus): { bgColor: string, textColor: string, text: string } {
  const defaultVal = {
    bgColor: "#36A388", // Tailwind use primary
    textColor: "#FFFFFF",
    text: "Mark as Resolved",
  }
  switch (status) {
    case MaintenanceTicketStatus.Open:
      return defaultVal;
    case MaintenanceTicketStatus.Resolved:
      return {
        bgColor: "#A1AFC3",
        textColor: "#FFFFFF",
        text: "Resolved",
      };
    default:
      return defaultVal;
  }
}