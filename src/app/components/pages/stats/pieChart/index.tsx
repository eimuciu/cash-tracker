'use client';

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  Label,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
  PieChart,
  Pie,
} from 'recharts';
import { data } from '../manifestData';

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) + 8;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="black"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    console.log(payload);
    return (
      <div>
        <p>{`${payload[0].name} : ${'$' + payload[0].value.toFixed(2)}`}</p>
      </div>
    );
  }

  return null;
};

export default function PieChartElement() {
  return (
    <main className="flex w-[100%] h-[75%] mx-auto">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip
            cursor={{ fill: 'transparent' }}
            wrapperStyle={{
              backgroundColor: 'black',
              color: 'white',
              padding: '5px',
            }}
            content={<CustomTooltip />}
          />
          <Pie
            data={data}
            labelLine={false}
            stroke=""
            label={renderCustomizedLabel}
            outerRadius={'75%'}
            dataKey="amount"
          >
            {data.map((x, i) => (
              <Cell key={`${i}`} fill={x.color} style={{ outline: 'none' }} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </main>
  );
}
