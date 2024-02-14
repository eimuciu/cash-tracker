'use client';

import {
  RadarChart,
  ResponsiveContainer,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
} from 'recharts';
import { data } from '../manifestData';
import './style.css';

const CustomTooltip = ({ active, payload, label }: any) => {
  console.log(payload);
  if (active && payload && payload.length) {
    console.log(payload);
    return (
      <div>
        <p>{`${payload[0].payload.name} : ${
          '$' + payload[0].value.toFixed(2)
        }`}</p>
      </div>
    );
  }

  return null;
};

export default function RadarChartElement() {
  return (
    <main className="flex w-[100%] h-[75%] mx-auto ">
      <div
        className="h-[100%] w-[100%] mx-auto exampleScroll"
        style={{ overflow: 'auto' }}
      >
        <ResponsiveContainer width="130%" height="130%">
          <RadarChart
            outerRadius="90%"
            data={data}
            margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
          >
            <Tooltip
              cursor={{ fill: 'transparent' }}
              wrapperStyle={{
                backgroundColor: 'black',
                color: 'white',
                padding: '5px',
              }}
              content={<CustomTooltip />}
            />
            <PolarGrid />
            <PolarAngleAxis dataKey="name" overflow="auto" />
            <PolarRadiusAxis />
            <Radar
              dataKey="amount"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}
