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
} from 'recharts';
import './style.css';

const renderCustomizedLabel = (props: any) => {
  const { x, y, width, height, value } = props;

  return (
    <g transform={`translate(${x + width / 2},${(y + height) / 2})`}>
      <text
        fill="black"
        textAnchor="start"
        dominantBaseline="middle"
        transform="rotate(-90)"
      >
        {'$' + value.toFixed(2)}
      </text>
    </g>
  );
};

const CustomizedAxisTick = (props: any) => {
  const { x, y, stroke, payload } = props;

  return (
    <g transform={`translate(${x},${y - 15})`}>
      <text
        fill="black"
        textAnchor="start"
        dominantBaseline="middle"
        transform="rotate(-90)"
      >
        {payload.value}
      </text>
    </g>
  );
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div>
        <p>{`${label} : ${'$' + payload[0].value.toFixed(2)}`}</p>
      </div>
    );
  }

  return null;
};

export default function BarChartElement({ data }: any) {
  return (
    <div id="scrollContainer">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          {/* <YAxis dataKey="amount" /> */}
          <Tooltip
            cursor={{ fill: 'white' }}
            wrapperStyle={{
              backgroundColor: 'black',
              color: 'white',
              padding: '5px',
            }}
            content={<CustomTooltip />}
          />
          <Bar dataKey="amount" fill="#8884d8">
            {data.map((x: any, i: any) => (
              <Cell key={i} fill={x.color} />
            ))}
            <LabelList dataKey="amount" content={renderCustomizedLabel} />
          </Bar>
          <XAxis
            dataKey="name"
            tickLine={false}
            interval={0}
            tick={<CustomizedAxisTick />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
