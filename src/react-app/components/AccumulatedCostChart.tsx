import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const chartData = [
  { date: 'Dec 1', cost: 0 },
  { date: 'Dec 5', cost: 500 },
  { date: 'Dec 8', cost: 1200 },
  { date: 'Dec 13', cost: 2000 },
  { date: 'Dec 17', cost: 2800 },
  { date: 'Dec 21', cost: 3400 },
  { date: 'Dec 26', cost: 3900 },
  { date: 'Dec 29', cost: 4099.31 },
];

export default function AccumulatedCostChart() {
  return (
    <div className="mt-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
        <span className="text-[14px] font-medium text-[#1A1A1A]">
          Accumulated cost
        </span>
      </div>
      
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart
          data={chartData}
          margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="costGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10B981" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#10B981" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="0" stroke="#F0F0F0" vertical={false} />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#9CA3AF', fontSize: 12 }}
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#9CA3AF', fontSize: 12 }}
            tickFormatter={(value) => `$${value.toLocaleString()}`}
            ticks={[0, 1500, 3000, 4500, 6000]}
            dx={-10}
          />
          <Area
            type="monotone"
            dataKey="cost"
            stroke="#10B981"
            strokeWidth={2}
            fill="url(#costGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
