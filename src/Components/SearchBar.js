import { Box, FormControl, NativeSelect } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const SearchBar = ({ handleCountryChage }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://covid19.mathdro.id/api/countries/").then((res) => {
      setCountries(res.data.countries);
    });
  }, []);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <FormControl variant="standard" sx={{ minWidth: 200, m: 3 }}>
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleCountryChage(e.target.value)}
        >
          {countries.length > 0 ? (
            countries.map((country, key) => (
              <option className="countryOption" key={key} value={country.name}>
                {country.name}
              </option>
            ))
          ) : (
            <option value="Loading">Loading</option>
          )}
        </NativeSelect>
      </FormControl>
    </Box>
  );
};

export default SearchBar;
