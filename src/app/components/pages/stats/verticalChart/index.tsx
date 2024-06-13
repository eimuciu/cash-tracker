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
import './style.css'

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div>
        <p>{`${label} total: ${'$' + payload[0].value.toFixed(2)}`}</p>
      </div>
    );
  }

  return null;
};

export default function VerticalChartElement({ data }: any) {
  return (
    <div id="scrollContainer">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          data={data}
          margin={{
            top: 20,
            bottom: 20,
            right: 20,
            left: 20
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="amount" barSize={20} fill="#413ea0">
            {data.map((x: any, i: any) => (
              <Cell key={i} fill={x.color} />
            ))}
          </Bar>
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
