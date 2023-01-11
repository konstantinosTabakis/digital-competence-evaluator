import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)
const options =
{
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        },
        // title: {
        //     display: true,
        //     text: 'Chart.js Bar Chart',
        // },
    },
};

function VerticalBar({ data }) {
    return (
        <Bar options={options} data={data}/>
    )
}

export default VerticalBar