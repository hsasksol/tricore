import Highcharts from 'highcharts';
import accessibility from 'highcharts/modules/accessibility';

// Initialize accessibility module
if (typeof accessibility === 'function') {
  accessibility(Highcharts);
}

Highcharts.setOptions({
  colors: ['#000', '#EEFB13', '#3d3d3d', '#888'],
  chart: {
    backgroundColor: 'transparent',
    style: { fontFamily: '"Hind", sans-serif' },
  },
  title: {
    style: {
      fontFamily: '"Vazirmatn", sans-serif',
      fontWeight: 600,
      color: '#000',
    },
  },
  xAxis: {
    lineColor: '#000',
    lineWidth: 2,
    tickColor: '#000',
    labels: { style: { color: '#000' } },
  },
  yAxis: {
    gridLineColor: '#e3e3df',
    lineColor: '#000',
    labels: { style: { color: '#000' } },
  },
  legend: {
    itemStyle: { fontFamily: '"Hind", sans-serif', color: '#000' },
  },
  tooltip: {
    backgroundColor: '#000',
    borderColor: '#000',
    borderRadius: 0,
    style: { color: '#fff' },
  },
  plotOptions: {
    series: { borderWidth: 0 },
    column: { borderRadius: 0 },
    pie: { borderWidth: 2, borderColor: '#fff' },
  },
  credits: { enabled: false },
  accessibility: {
    enabled: true,
    keyboardNavigation: {
      enabled: true,
    },
  },
});

export default Highcharts;
