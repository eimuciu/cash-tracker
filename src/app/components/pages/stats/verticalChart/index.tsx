import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Cell,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function VerticalChartElement({ data }: any) {
  console.log(data);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        layout="vertical"
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" scale="band" />
        <Tooltip />
        <Bar dataKey="amount" barSize={20} fill="#413ea0">
          {data.map((x: any, i: any) => (
            <Cell key={i} fill={x.color} />
          ))}
        </Bar>
      </ComposedChart>
    </ResponsiveContainer>
  );
}
