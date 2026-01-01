import { Header } from '../components/Header';
import { StatCard } from '../components/StatCard';
import { Mail, Users, Eye, MousePointer } from 'lucide-react';
import { PerformanceChart } from '../components/Charts/PerformanceChart';
import { EngagementChart } from '../components/Charts/EngagementChart';
import { useState } from 'react';
import { StatusBadge } from '../components/StatusBadge';

export const Dashboard = ({ campaigns = [] }) => {
  const [chartView, setChartView] = useState('performance');
  // derive some quick stats
  const totalCampaigns = campaigns.length;
  const totalSent = campaigns.reduce((s, c) => s + (c.sent || 0), 0);
  const totalOpened = campaigns.reduce((s, c) => s + (c.opened || 0), 0);
  const avgOpenRate = totalSent > 0 ? ((totalOpened / totalSent) * 100).toFixed(1) + '%' : '0%';
  return (
    <div className="main-content p-8">
      <Header title="Dashboard" subtitle="Welcome back! Here's your campaign overview" />

      {/* Stat Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Campaigns" value={totalCampaigns} change="" icon={<Mail size={24} />} color="blue" />
        <StatCard title="Total Sent" value={totalSent.toLocaleString()} change="" icon={<Users size={24} />} color="green" />
        <StatCard title="Avg Open Rate" value={avgOpenRate} change="" icon={<Eye size={24} />} color="purple" />
        <StatCard title="Avg Click Rate" value="15.2%" change="" icon={<MousePointer size={24} />} color="orange" />
      </div>

      {/* Recent Campaigns */}
      <div className="table-wrapper p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h3>Recent Campaigns</h3>
        </div>
        <div className="space-y-4">
          {campaigns.slice(0, 3).map(c => (
            <div key={c.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex-1">
                <h4>{c.name}</h4>
                <p className="mt-1">{c.date}</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="text-2xl font-bold">{c.sent.toLocaleString()}</p>
                  <p className="text-xs">Sent</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{c.sent > 0 ? ((c.opened / c.sent) * 100).toFixed(1) : 0}%</p>
                  <p className="text-xs">Open Rate</p>
                </div>
                <StatusBadge status={c.status} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="table-wrapper p-6">
        <div className="flex items-center justify-between mb-6">
          <h3>Campaign Performance</h3>
          <div className="flex gap-2">
            <button onClick={() => setChartView('performance')} className={`btn ${chartView === 'performance' ? 'btn-primary' : ''}`}>Volume Metrics</button>
            <button onClick={() => setChartView('engagement')} className={`btn ${chartView === 'engagement' ? 'btn-primary' : ''}`}>Engagement Rates</button>
          </div>
        </div>
        {chartView === 'performance' ? <PerformanceChart /> : <EngagementChart />}
      </div>
    </div>
  );
};
