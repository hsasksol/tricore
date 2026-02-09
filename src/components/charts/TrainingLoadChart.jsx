import { Chart, Title, XAxis, YAxis } from '@highcharts/react';
import { AreaSplineSeries } from '@highcharts/react/series/AreaSpline';
import './ChartTheme';

export default function TrainingLoadChart({ data }) {
    return (
        <Chart
            options={{
                chart: { height: 280 },
                plotOptions: {
                    areaspline: {
                        fillColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            stops: [
                                [0, '#EEFB13'],
                                [1, 'rgba(238, 251, 19, 0.1)']
                            ]
                        },
                        lineColor: '#000',
                        lineWidth: 2,
                        marker: {
                            fillColor: '#000',
                            lineColor: '#EEFB13',
                            lineWidth: 2
                        }
                    }
                }
            }}
        >
            <Title>Training Load (TSS)</Title>
            <XAxis categories={data.weeks} />
            <YAxis options={{ title: { text: 'TSS' } }} />
            <AreaSplineSeries
                data={data.tss}
                options={{ name: 'Weekly TSS' }}
            />
        </Chart>
    );
}
