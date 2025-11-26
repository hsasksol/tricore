import { Chart, Series, Title, XAxis, YAxis } from '@highcharts/react';
import './ChartTheme';

export default function VolumeChart({ data, onWeekClick, selectedWeek }) {
  const weekNumbers = data.weekNumbers || [];

  // Determine which bar index is selected
  const selectedIndex = selectedWeek !== null
    ? weekNumbers.indexOf(selectedWeek)
    : -1;

  return (
    <Chart
      options={{
        chart: { height: 300 },
        plotOptions: {
          column: {
            stacking: 'normal',
            borderWidth: 2,
            borderColor: '#000',
            cursor: 'pointer',
            point: {
              events: {
                click: function () {
                  if (onWeekClick) {
                    onWeekClick(this.index, weekNumbers);
                  }
                },
              },
            },
          },
        },
        tooltip: { shared: true },
      }}
    >
      <Title>Weekly Training Volume</Title>
      <XAxis
        categories={data.weeks}
        crosshair={{ color: '#EEFB13', width: 2 }}
        options={{
          plotBands: selectedIndex >= 0 ? [{
            from: selectedIndex - 0.5,
            to: selectedIndex + 0.5,
            color: 'rgba(238, 251, 19, 0.3)',
          }] : [],
        }}
      />
      <YAxis options={{ title: { text: 'Distance (km)' }, stackLabels: { enabled: true } }} />
      <Series type="column" data={data.swim} options={{ name: 'Swim', color: '#000' }} />
      <Series type="column" data={data.bike} options={{ name: 'Bike', color: '#EEFB13' }} />
      <Series type="column" data={data.run} options={{ name: 'Run', color: '#3d3d3d' }} />
    </Chart>
  );
}
