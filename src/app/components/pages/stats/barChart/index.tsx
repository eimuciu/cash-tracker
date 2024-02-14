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

const data = [
  {
    name: 'Food',
    amount: 25,
    color: '#ADA8B6',
  },
  {
    name: 'Sport',
    amount: 35,
    color: '#FFEEDB',
  },
  {
    name: 'Car',
    amount: 150,
    color: '#5AFF15',
  },
  {
    name: 'Entertainment',
    amount: 25,
    color: '#A53860',
  },
  {
    name: 'Rent',
    amount: 35,
    color: '#838184',
  },
  {
    name: 'Holiday',
    amount: 150,
    color: '#FF6F59',
  },
];

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

export default function BarChartElement() {
  return (
    <main className="flex w-[100%] h-[75%] mx-auto">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
        >
          <YAxis dataKey="amount" />
          <Tooltip
            cursor={{ fill: '#A09EBB' }}
            wrapperStyle={{
              backgroundColor: 'black',
              color: 'white',
              padding: '5px',
            }}
            content={<CustomTooltip />}
          />
          <Bar dataKey="amount" fill="#8884d8">
            {data.map((x, i) => (
              <Cell key={i} fill={x.color} />
            ))}

            <LabelList dataKey="amount" content={renderCustomizedLabel} />
          </Bar>
          <XAxis
            dataKey="name"
            tickLine={false}
            tick={<CustomizedAxisTick />}
          />
        </BarChart>
      </ResponsiveContainer>
    </main>
  );
}
