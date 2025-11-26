import { useRef, useEffect } from 'react';
import { Chart, Series, Title, XAxis, YAxis } from '@highcharts/react';
import './ChartTheme';

export default function PaceTrendChart({ data, highlightedWorkoutId, onPointHover }) {
  const chartRef = useRef(null);

  // Highlight a point when highlightedWorkoutId changes
  useEffect(() => {
    if (!chartRef.current?.chart) return;

    const chart = chartRef.current.chart;

    // Clear previous highlights
    chart.series.forEach((series) => {
      series.points?.forEach((point) => {
        point.setState('');
      });
    });

    // Highlight matching point
    if (highlightedWorkoutId) {
      chart.series.forEach((series) => {
        series.points?.forEach((point) => {
          if (point.options?.id === highlightedWorkoutId) {
            point.setState('hover');
          }
        });
      });
    }
  }, [highlightedWorkoutId]);

  // Prepare series data with point events
  const seriesData = data.map((series) => ({
    ...series,
    data: series.data.map((point) => ({
      x: point.x,
      y: point.y,
      id: point.id,
      events: {
        mouseOver: function () {
          if (onPointHover && this.options.id) {
            onPointHover(this.options.id);
          }
        },
        mouseOut: function () {
          if (onPointHover) {
            onPointHover(null);
          }
        },
      },
    })),
  }));

  if (data.length === 0) {
    return (
      <Chart options={{ chart: { height: 300 } }}>
        <Title>Pace Trends</Title>
        <XAxis type="datetime" />
        <YAxis reversed options={{ title: { text: 'Pace (min/km)' } }} />
      </Chart>
    );
  }

  return (
    <Chart
      ref={chartRef}
      options={{
        chart: { height: 300 },
        tooltip: {
          formatter: function () {
            const mins = Math.floor(this.y / 60);
            const secs = Math.round(this.y % 60);
            return `<b>${this.series.name}</b><br/>${mins}:${secs.toString().padStart(2, '0')} /km`;
          },
        },
        plotOptions: {
          spline: {
            marker: {
              enabled: true,
              radius: 5,
              states: {
                hover: {
                  enabled: true,
                  radius: 8,
                  lineWidth: 3,
                  lineColor: '#EEFB13',
                },
              },
            },
          },
        },
      }}
    >
      <Title>Pace Trends</Title>
      <XAxis type="datetime" />
      <YAxis
        reversed
        options={{
          title: { text: 'Pace (min/km)' },
          labels: {
            formatter: function () {
              const mins = Math.floor(this.value / 60);
              const secs = this.value % 60;
              return `${mins}:${secs.toString().padStart(2, '0')}`;
            },
          },
        }}
      />
      {seriesData.map((series, index) => (
        <Series
          key={index}
          type="spline"
          data={series.data}
          options={{ name: series.name, color: series.color }}
        />
      ))}
    </Chart>
  );
}
