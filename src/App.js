import axios from 'axios';
import './App.css';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import Cards from './Components/Cards';
import { Typography, Box, Alert } from '@mui/material';
import { useEffect, useState } from 'react';
import Chart from './Components/Chart';


function App() {

  const [country, setCountry] = useState("World");
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
    if (country !== "World") {
      url = url + `/countries/${country}`
    }
    axios.get(url).then(
      res => {
        console.log(res.data);
        setData(res.data);
      }
    )
  }, [country]);


  return (
    <>
      <Header />
      <Alert severity="info">For Best User Experience, We Recommend to use this site of Desktop or Laptops</Alert>
      <Box padding={2}>
        <Typography marginY={2} fontFamily={"cursive"} align='center' variant='h4' >COVID-19 STATS</Typography>
        <SearchBar handleCountryChage={handleCountryChage} />
        <Cards data={data} />
        <Chart data={data} country={country} />
      </Box>
    </>
  );
}

export default App;
