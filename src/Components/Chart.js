import { Container, Box } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
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

  const isMobile = window.screen.width <= "600";

  const labels = ["Conirmed", "Recovered", "Deaths"];

  const barData = {
    borderColor: [
      "rgba(52, 152, 219)",
      "rgba(255, 199, 132)",
      "rgba(231, 76, 60)",
    ],
    borderWidth: 4,
  };
  const pieData = {
    hoverOffset: 4,
  };

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
        ...{ ...(isMobile ? barData : pieData) },
      },
    ],
  };

  return (
    <Box marginY={3}>
      <Container>
        {isMobile ? (
          <Pie options={options} data={graphData} />
        ) : (
          <Bar options={options} data={graphData} />
        )}
      </Container>
    </Box>
  );
};

export default Chart;
