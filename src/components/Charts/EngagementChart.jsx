import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { engagementData } from '../../data/chartData';

export const EngagementChart = () => (
  <ResponsiveContainer width="100%" height={350}>
    <BarChart data={engagementData}>
      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
      <XAxis dataKey="week" stroke="#64748b" />
      <YAxis stroke="#64748b" label={{ value: 'Rate (%)', angle: -90, position: 'insideLeft', style: { fill: '#64748b' } }} />
      <Tooltip formatter={value => `${value}%`} />
      <Legend />
      <Bar dataKey="openRate" fill="#10b981" name="Open Rate" radius={[8,8,0,0]} />
      <Bar dataKey="clickRate" fill="#3b82f6" name="Click Rate" radius={[8,8,0,0]} />
      <Bar dataKey="bounceRate" fill="#ef4444" name="Bounce Rate" radius={[8,8,0,0]} />
    </BarChart>
  </ResponsiveContainer>
);
