import { AppBar, Container, Toolbar} from "@mui/material";
import { CompanyTitle, CompanyIcon, NavButtonsBox,NavButton} from "./styles";

function AppbarDesktop() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <CompanyIcon />
          <CompanyTitle component='a' href="/">CurrencyExchange</CompanyTitle>
          <NavButtonsBox>
              <NavButton>Market</NavButton>
              <NavButton>Compare</NavButton>
          </NavButtonsBox>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default AppbarDesktop;
