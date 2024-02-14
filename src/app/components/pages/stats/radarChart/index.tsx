'use client';

import {
  RadarChart,
  ResponsiveContainer,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
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
    color: '#D6D1B1',
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

export default function RadarChartElement() {
  return (
      <main className="flex w-[100%] h-[75%] mx-auto">
        <ResponsiveContainer
          width="100%"
          height="100%"
          className="bg-[#91F5AD]"
        >
          <RadarChart outerRadius="75%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis />
            <Radar
              dataKey="amount"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </main>
  );
}
