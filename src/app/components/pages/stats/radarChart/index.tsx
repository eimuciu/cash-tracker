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
    <main
      className="w-[100%] h-[75%]"
      style={{ overflow: 'scroll', display: 'block', boxSizing: 'border-box' }}
    >
      <div id="scrollContainer">
        <ResponsiveContainer
          width={'100%'}
          height={'100%'}
          style={{ margin: '0 auto' }}
        >
          <RadarChart
            outerRadius="100%"
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
