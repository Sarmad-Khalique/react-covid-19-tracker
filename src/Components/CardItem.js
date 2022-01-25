import { Card, Box, Grid, Typography } from '@mui/material';
import CountUp from 'react-countup';

const CardItem = ({title, value, updatedOn}) => {
  return (
    <Grid item xs={3}>
      <Card variant="elevation">
        <Box marginX={1} marginY={1} textAlign={'center'}>
          <Typography variant="h5">
            {title}
          </Typography>
          <Typography variant="h6" fontFamily={"monospace"}>
            <CountUp end={value} separator=',' duration={3}/>
          </Typography>
          <Typography variant="subtitle1" marginTop={2}>
            Last Updated on: {new Date(updatedOn).toDateString()}
          </Typography>
        </Box>
      </Card>
    </Grid>
  );
};

export default CardItem;
