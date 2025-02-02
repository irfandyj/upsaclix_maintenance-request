export enum MaintenanceTicketUrgency {
  NON_URGENT = 'non_urgent',
  LESS_URGENT = 'less_urgent',
  URGENT = 'urgent',
  EMERGENCY = 'emergency',
}

export function getUrgencyStyle(urgency: MaintenanceTicketUrgency): { textColor: string, text: string } {
  const defaultVal = {
    textColor: "#24BF5F",
    text: "🙂 Non-urgent",
  }
  switch (urgency) {
    case MaintenanceTicketUrgency.NON_URGENT:
      return defaultVal;
    case MaintenanceTicketUrgency.LESS_URGENT:
      return {
        textColor: "#157AD8",
        text: "🔨 Less Urgent",
      };
    case MaintenanceTicketUrgency.URGENT:
      return {
        textColor: "#E3903F",
        text: "⚡ Urgent",
      };
    case MaintenanceTicketUrgency.EMERGENCY:
      return {
        textColor: "#D74B4B",
        text: "🔥 Emergency",
      };
    default:
      return defaultVal;
  }
}

export enum MaintenanceTicketStatus {
  OPEN = 'open',
  RESOLVED = 'resolved',
}
