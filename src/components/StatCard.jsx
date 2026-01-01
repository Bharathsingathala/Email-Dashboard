import { TrendingUp } from 'lucide-react';

export const StatCard = ({ title, value, change, icon, color }) => {
  return (
    <div className="stat-card">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="stat-card-title">{title}</p>
          <p className="stat-card-value">{value}</p>
          <div className="stat-card-change">
            <TrendingUp size={16} /> <span>{change}</span>
          </div>
        </div>
        <div className={`stat-card-icon stat-card-${color}`}>
          {icon}
        </div>
      </div>
    </div>
  );
};
