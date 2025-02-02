import { FunctionComponent } from "react";
import styles from './TicketListCard.module.css';

type TicketListCardProps = {
  title: string;
  urgency: string;
  status: string;
  date: string;
}

const TicketListCard: FunctionComponent<TicketListCardProps> = (props: TicketListCardProps) => {
  return (
    <li className={`TicketListCard ${styles.TicketListCard} pt-5 px-[30.5px]`}>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[#404040] font-medium text-sm mb-[10px]">{props.title}</p>
          <p className="font-light text-sm">{props.urgency}</p>
        </div>

        <div className="text-right">
          <p className="text-[#A1AFC3] text-[0.75rem] text-right mb-[10px]">{props.date}</p>
          <p className="">{props.status}</p>
        </div>

      </div>
    </li>
  )
};

export default TicketListCard;
