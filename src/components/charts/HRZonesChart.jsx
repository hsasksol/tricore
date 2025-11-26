import { Chart, Series, Title } from '@highcharts/react';
import './ChartTheme';

export default function HRZonesChart({ data }) {
  const chartData = [
    { name: 'Zone 1', y: data.zone1, color: '#e3e3df' },
    { name: 'Zone 2', y: data.zone2, color: '#888' },
    { name: 'Zone 3', y: data.zone3, color: '#3d3d3d' },
    { name: 'Zone 4', y: data.zone4, color: '#EEFB13' },
    { name: 'Zone 5', y: data.zone5, color: '#000' },
  ];

  return (
    <Chart
      options={{
        chart: { height: 280 },
        plotOptions: {
          pie: {
            innerSize: '60%',
            dataLabels: {
              format: '{point.name}: {point.percentage:.0f}%',
              style: { fontWeight: 400 },
            },
          },
        },
        tooltip: { pointFormat: '{point.percentage:.1f}%' },
      }}
    >
      <Title>Time in HR Zones</Title>
      <Series type="pie" data={chartData} options={{ name: 'Time' }} />
    </Chart>
  );
}
