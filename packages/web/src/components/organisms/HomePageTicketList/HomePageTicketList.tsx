'use client'
import { useQuery } from "@tanstack/react-query";
import { getMaintenanceTickets } from "@/lib/graphql/api";
import TicketListCard from "@/components/molecules/TicketListCard";
import { useEffect } from "react";
import { MaintenanceTicket } from "@/lib/graphql/sdk";

const HomePageTicketList = () => {
  const tickets: MaintenanceTicket[] = []

  const { data } = useQuery({
    queryKey: ['maintenance-tickets'],
    queryFn: () => getMaintenanceTickets(),
  })

  return (
    <ul className="HomePageTicketList pt-5 px-[30.5px] flex flex-col gap-5">
      {tickets.map((ticket) => (
        <TicketListCard key={ticket.id} {...ticket} />
      ))}
    </ul>
  );
}

export default HomePageTicketList;
