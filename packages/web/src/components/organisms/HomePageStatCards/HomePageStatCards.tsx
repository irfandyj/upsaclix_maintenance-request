"use client";

import React, { useEffect, useState } from 'react';
import StatCard from '@/components/molecules/StatsCard';
import { StatCardProps } from '@/components/molecules/StatsCard/StatsCard';
import { getMaintenanceTicketStats } from '@/lib/graphql/api';
import { useQuery } from '@tanstack/react-query';

interface HomePageStatCardsProps {
  className?: string;
}

const HomePageStatCards: React.FC<HomePageStatCardsProps> = ({ className }) => {
  const { data } = useQuery({
    queryKey: ['maintenance-tickets', 'stats'],
    queryFn: () => getMaintenanceTicketStats(),
  })

  const [stats, setStats] = useState<StatCardProps[]>([])

  // For queries
  useEffect(() => {
    if (data) {
      setStats([
        { title: 'Open Requests', value: data.getTicketStats.open },
        { title: 'Urgent Requests', value: data.getTicketStats.totalUrgent },
        { title: 'Average time (days) to respond', value: data.getTicketStats.averageTime },
      ])
    }
  }, [data, data?.getTicketStats]);

  return (
    <div className={`HomePageStatCards flex gap-5 justify-center ${className}`}>
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}

export default HomePageStatCards;
