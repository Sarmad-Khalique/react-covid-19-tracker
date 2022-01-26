import { Container, Box } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import StateChart from './StateChart';

const Chart = ({ data: { confirmed, recovered, deaths } , country}) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `Covid-19 Data Graph for ${country}`,
      },
    },
  };

  const labels = ["Conirmed", "Recovered", "Deaths"];

  const graphData = {
    labels,
    datasets: [
      {
        data: [confirmed.value, recovered.value, deaths.value],
        backgroundColor: [
          "rgba(52, 152, 219 , 0.4)",
          "rgba(255, 199, 132, 0.4)",
          "rgba(231, 76, 60, 0.4)",
        ],
        borderColor: [
          "rgba(52, 152, 219)",
          "rgba(255, 199, 132)",
          "rgba(231, 76, 60)",
        ],
        borderWidth: 4,
      },
    ],
  };

  return (
    <Box marginY={3}>
      <Container>
        <Bar options={options} data={graphData} />
      </Container>
    </Box>
  );
};

export default Chart;
