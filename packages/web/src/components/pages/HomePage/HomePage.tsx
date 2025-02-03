import HomePageStatCards from '@/components/organisms/HomePageStatCards';
import HomePageTicketList from '@/components/organisms/HomePageTicketList';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import { getMaintenanceTickets } from '@/lib/graphql/api';
import Link from 'next/link';
import React from 'react';

async function HomePage () {
  const stats = [
    { title: 'Open Requests', value: 2 },
    { title: 'Urgent Requests', value: 3 },
    { title: 'Average time (days) to respond', value: 3 },
  ]
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['maintenance-tickets'],
    queryFn: () => getMaintenanceTickets(),
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="HomePage p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl text-center font-semibold mt-[68px] mb-[22px]">Maintenance Request</h1>

        {/* Maintenance Ticket Stats */}
        <HomePageStatCards className="mb-6" stats={stats} />

        {/* Maintenance Ticket List */}
        <HomePageTicketList />

        {/* Add button */}
        <div className="flex justify-center mt-5">
          <Link href="/add">
            Add Maintenance Request
          </Link>
        </div>
      </div>
    </HydrationBoundary>
  );
};

export default HomePage;
