import React from 'react';
import StatCard from '@/components/molecules/StatsCard';
import { StatCardProps } from '@/components/molecules/StatsCard/StatsCard';

interface HomePageStatCardsProps {
  className?: string;
  stats: StatCardProps[];
}

const HomePageStatCards: React.FC<HomePageStatCardsProps> = ({ className, stats }) => {
  return (
    <div className={`HomePageStatCards flex gap-5 justify-center ${className}`}>
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}

export default HomePageStatCards;
