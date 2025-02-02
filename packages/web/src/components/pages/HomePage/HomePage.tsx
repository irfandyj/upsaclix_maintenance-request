import HomePageStatCards from '@/components/organisms/HomePageStatCards';
import React from 'react';

const MaintenanceRequestDashboard = () => {
  const stats = [
    { title: 'Open Requests', value: 2 },
    { title: 'Urgent Requests', value: 3 },
    { title: 'Average time (days) to respond', value: 3 },
  ]

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl text-center font-semibold mt-[68px] mb-[22px]">Maintenance Request</h1>

      {/* Maintenance Ticket Stats */}
      <HomePageStatCards stats={stats} />

      {/* Maintenance Ticket List */}
      

      {/* Add button */}
    </div>
  );
};

export default MaintenanceRequestDashboard;
