import axios from "axios";
import "./App.css";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import Cards from "./Components/Cards";
import { Typography, Box, Alert, BottomNavigation } from "@mui/material";
import { useEffect, useState } from "react";
import Chart from "./Components/Chart";
import FavoriteIcon from "@mui/icons-material/Favorite";

const App = () => {
  const [country, setCountry] = useState("World");
  const [data, setData] = useState({
    confirmed: {
      value: 0,
    },
    recovered: {
      value: 0,
    },
    deaths: {
      value: 0,
    },
  });

  const handleCountryChage = (country) => {
    setCountry(country);
  };

  useEffect(() => {
    let baseURL = "https://covid19.mathdro.id/api";
    if (country !== "World") {
      baseURL = baseURL + `/countries/${country}`;
    }
    axios.get(baseURL).then((res) => {
      setData(res.data);
    });
  }, [country]);
  return (
    <>
      <Header />
      <Alert severity="info">
        For Best User Experience, We Recommend to use this site on Desktop or
        Laptops
      </Alert>
      <Box padding={2}>
        <Typography
          marginY={2}
          fontFamily={"cursive"}
          align="center"
          variant="h4"
        >
          COVID-19 STATS
        </Typography>
        <SearchBar handleCountryChage={handleCountryChage} />
        <Cards data={data} />
        <Chart data={data} country={country} />
      </Box>
      <BottomNavigation>
        <Typography
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Created with{" "}
          <FavoriteIcon
            sx={{
              color: "red",
              marginX: "5px",
              width: "16px",
            }}
          />
          by M.Sarmad Khalque
        </Typography>
      </BottomNavigation>
    </>
  );
};

export default App;
