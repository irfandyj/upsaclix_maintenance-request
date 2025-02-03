import { MaintenanceTicketStatus } from "@/lib/graphql/sdk";
import { getStatusStyle } from "@/utils/ticket-helper";


interface TicketCardStatusProps {
  status: MaintenanceTicketStatus;
  onClick: () => void;
}

function TicketCardStatus ({ status, onClick }: TicketCardStatusProps) {
  const statusStyle = getStatusStyle(status);
  return (
    <div
      style={{ backgroundColor: statusStyle.bgColor, color: statusStyle.textColor }}
      className={`TicketCardStatus TicketCardStatus--${status} px-2 py-[3px] rounded-[100px] hover:cursor-pointer`}
      onClick={onClick}
    >
      {statusStyle.text}
    </div>
  );
}

export default TicketCardStatus;