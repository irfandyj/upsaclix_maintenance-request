import React from 'react'
import styles from './StatsCard.module.css'

export interface StatCardProps {
  title: string
  value: number
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value
}) => {
  return (
    <div className={`StatCard ${styles.StatCard}`}>
      <div className="StatCard__value text-4xl font-medium text-primary">{value}</div>
      <div className="StatCard__content">
        <div className="StatCard__title text-[9px] text-center">{title}</div>
      </div>
    </div>
  )
}

export default StatCard
