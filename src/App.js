import axios from 'axios';
import './App.css';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import Cards from './Components/Cards';
import { Container, Typography, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

function App() {

  const [country, setCountry] = useState("");
  const [data, setData] = useState({
    confirmed: {
      value: 0
    },
    recovered: {
      value: 0
    },
    deaths: {
      value: 0
    }
  });

  const handleCountryChage = (country) => {
    setCountry(country)
  }

  useEffect(() => {
    let url = "https://covid19.mathdro.id/api";
    if (country) {
      url = url + `/countries/${country}`
    }
    axios.get(url).then(
      res => {
        console.log(res.data);
        setData(res.data);
      }
    )
  }, [country]);

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
      title: {
        display: true,
        text: 'Covid-19 Data Graph',
      },
    },
  };

  const labels = ['Conirmed', 'Recovered', 'Deaths'];

  const graphData = {
    labels,
    datasets: [
      {
        label: "COVID-19 DataSet",
        data: [data.confirmed.value, data.recovered.value, data.deaths.value],
        backgroundColor: ['rgba(52, 152, 219 , 0.4)', 'rgba(255, 199, 132, 0.4)', 'rgba(231, 76, 60, 0.4)'],
        borderColor: ['rgba(52, 152, 219)', 'rgba(255, 199, 132)', 'rgba(231, 76, 60)'],
        borderWidth: 2,
        maxBarThickness: 100
      },
    ],
  };

  return (
    <>
      <Header />
      <Typography marginY={2} fontFamily={"cursive"} align='center' variant='h4' >COVID STATS</Typography>
      <SearchBar handleCountryChage={handleCountryChage} />
      <Cards data={data} />
      <Container>
        <Box padding={5}>
          <Bar options={options} data={graphData} />
        </Box>
      </Container>
    </>
  );
}

export default App;
