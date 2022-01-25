import axios from 'axios';
import './App.css';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import Cards from './Components/Cards';
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';


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


  return (
    <>
      <Header />
      <Typography marginY={2} fontFamily={"cursive"} align='center' variant='h4' >COVID STATS</Typography>
      <SearchBar handleCountryChage={handleCountryChage} />
      <Cards data={data} />
    </>
  );
}

export default App;
