import { FunctionComponent, useMemo } from "react";
import styles from './TicketListCard.module.css';
import { MaintenanceTicketStatus, MaintenanceTicketUrgency } from "@/lib/graphql/sdk";
import { getUrgencyStyle } from "@/utils/ticket-helper";
import { formatDate } from "@/utils/date";
import Link from "next/link";
import TicketCardStatus from "@/components/atoms/TicketCardStatus";

type TicketListCardProps = {
  id: number;
  title: string;
  urgency: MaintenanceTicketUrgency;
  status: MaintenanceTicketStatus;
  date: string;
}

const TicketListCard: FunctionComponent<TicketListCardProps> = (props) => {
  const urgencyStyle = useMemo(() => {
    return getUrgencyStyle(props.urgency);
  }, [props.urgency]);
  return (
    <li className={`TicketListCard ${styles.TicketListCard} pt-5 px-[30.5px]`}>
      <Link href={`/${props.id}`} className="flex justify-between items-center">
        <div>
          <p className="text-[#404040] font-medium text-sm mb-[10px]">{props.title}</p>
          <p
            className="font-light text-sm"
            style={{ color: urgencyStyle.textColor }}
          >
            {urgencyStyle.text}
          </p>
        </div>

        <div className="text-right">
          <p className="text-[#A1AFC3] text-[0.75rem] text-right mb-[10px]">{formatDate(props.date)}</p>
          <TicketCardStatus status={props.status} />
        </div>

      </Link>
    </li>
  )
};

export default TicketListCard;
