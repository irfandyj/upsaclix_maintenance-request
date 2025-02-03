'use client'
import { useQuery } from "@tanstack/react-query";
import { getMaintenanceTickets } from "@/lib/graphql/api";
import TicketListCard from "@/components/molecules/TicketListCard";
import { useEffect, useState } from "react";
import { MaintenanceTicket } from "@/lib/graphql/sdk";

const HomePageTicketList = () => {
  const { data } = useQuery({
    queryKey: ['maintenance-tickets'],
    queryFn: () => getMaintenanceTickets(),
  })

  const [tickets, setTickets] = useState<MaintenanceTicket[]>([])
  
  // For queries
  useEffect(() => {
    if (data) {
      setTickets(data.getTickets)
    }
  }, [data, data?.getTickets]);

  // For streams
  useEffect(() => {
    const url = new URL('http://localhost:3333/graphql');
    url.searchParams.append('query', `subscription {
      ticketCreated {
        id
        title
        status
        urgency
        description
        createdAt
        updatedAt
      } 
    }`);

    const source = new EventSource(url);

    source.addEventListener('next', ({ data }) => {
      const ticketEvent = JSON.parse(data);
      setTickets((prevTickets) => [...prevTickets, ticketEvent.data.ticketCreated]);
    });

    source.addEventListener('error', (e) => {
      console.error(e);
    });

    source.addEventListener('complete', () => {
      source.close();
    });
    return () => {
      source.close();
    }
  }, []);

  return (
    <ul className="HomePageTicketList pt-5 px-[30.5px] flex flex-col gap-5">
      {tickets.map((ticket) => (
        <TicketListCard key={ticket.id} {...ticket} />
      ))}
    </ul>
  );
}

export default HomePageTicketList;
