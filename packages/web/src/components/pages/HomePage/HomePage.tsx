import HomePageStatCards from '@/components/organisms/HomePageStatCards';
import HomePageTicketList from '@/components/organisms/HomePageTicketList';
import Link from 'next/link';
import React from 'react';

const MaintenanceRequestDashboard = () => {
  const stats = [
    { title: 'Open Requests', value: 2 },
    { title: 'Urgent Requests', value: 3 },
    { title: 'Average time (days) to respond', value: 3 },
  ]

  return (
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
  );
};

export default MaintenanceRequestDashboard;
