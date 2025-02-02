import React from 'react';
import StatCard from '@/components/molecules/StatsCard';
import { StatCardProps } from '@/components/molecules/StatsCard/StatsCard';

interface HomePageStatCardsProps {
  stats: StatCardProps[];
}

const HomePageStatCards: React.FC<HomePageStatCardsProps> = ({ stats }) => {
  return (
    <div className="HomePageStatCards flex gap-5 justify-center">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}

export default HomePageStatCards;
