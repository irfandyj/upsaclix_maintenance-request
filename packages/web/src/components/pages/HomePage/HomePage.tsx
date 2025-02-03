import HomePageStatCards from '@/components/organisms/HomePageStatCards';
import HomePageTicketList from '@/components/organisms/HomePageTicketList';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import { getMaintenanceTickets, getMaintenanceTicketStats } from '@/lib/graphql/api';
import Link from 'next/link';
import React from 'react';

async function HomePage() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['maintenance-tickets', 'stats'],
    queryFn: () => getMaintenanceTicketStats(),
  })

  await queryClient.prefetchQuery({
    queryKey: ['maintenance-tickets'],
    queryFn: () => getMaintenanceTickets(),
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="HomePage p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl text-center font-semibold mt-[68px] mb-[22px]">Maintenance Request</h1>

        {/* Maintenance Ticket Stats */}
        <HomePageStatCards className="mb-6" />

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
