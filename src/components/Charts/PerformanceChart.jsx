import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { performanceData } from '../../data/chartData';

export const PerformanceChart = () => (
  <ResponsiveContainer width="100%" height={350}>
    <AreaChart data={performanceData}>
      <defs>
        <linearGradient id="colorSent" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
        </linearGradient>
        <linearGradient id="colorOpened" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
          <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
        </linearGradient>
        <linearGradient id="colorClicked" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
          <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0"/>
      <XAxis dataKey="month" stroke="#64748b"/>
      <YAxis stroke="#64748b"/>
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="sent" stroke="#3b82f6" fill="url(#colorSent)" name="Emails Sent"/>
      <Area type="monotone" dataKey="opened" stroke="#10b981" fill="url(#colorOpened)" name="Opened"/>
      <Area type="monotone" dataKey="clicked" stroke="#8b5cf6" fill="url(#colorClicked)" name="Clicked"/>
    </AreaChart>
  </ResponsiveContainer>
);
