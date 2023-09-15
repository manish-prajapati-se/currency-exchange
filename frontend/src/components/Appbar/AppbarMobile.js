import { useState } from "react";
import { AppBar,IconButton,MenuItem,Typography,Menu} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import { Container, Toolbar, Box } from "@mui/material";
import { CompanyIcon, CompanyTitle } from "./styles";


function AppbarMobile() {
    
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              keepMounted
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
                <MenuItem key="market" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Market</Typography>
                </MenuItem>
                <MenuItem key="compare" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Compare</Typography>
                </MenuItem>
            </Menu>
          </Box>
          <CompanyIcon />
          <CompanyTitle
            component="a"
            href="/"
            sx={{ display: "flex", flexGrow: 1 }}
          >
            CurrencyExchange
          </CompanyTitle>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default AppbarMobile;
