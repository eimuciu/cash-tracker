import { colorPalette } from '@/utils/themeUnits';
import BarChartElement from './barChart';
import PieChartElement from './pieChart';
import RadarChartElement from './radarChart';

export default function StatsPage() {
  return (
    <section
      className={
        'rounded-[10px] h-[100%] p-[10px]' +
        ' ' +
        `bg-[${colorPalette.greened}]`
      }
    >
      {/* <BarChartElement /> */}
      {/* <PieChartElement /> */}
      <RadarChartElement />
    </section>
  );
}
