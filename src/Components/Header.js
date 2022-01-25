import { Toolbar, AppBar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6">
          COVID-19 Tracker BY M Sarmad Khalique
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
