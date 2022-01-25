import Grid from "@mui/material/Grid";
import CardItem from "./CardItem";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  return (
    <Grid container spacing={3} justifyContent={"center"} marginY={2}>
      <CardItem title="Confirmed" value={confirmed.value} updatedOn={lastUpdate} />
      <CardItem title="Recovered" value={recovered.value} updatedOn={lastUpdate} />
      <CardItem title="Deaths" value={deaths.value} updatedOn={lastUpdate} />
    </Grid>
  );
};

export default Cards;
