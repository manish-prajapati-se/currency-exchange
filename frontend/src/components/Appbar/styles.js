import styled from "@emotion/styled";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { Typography,Box, Button } from "@mui/material";

export const CompanyTitle=styled(Typography)(()=>({
    fontWeight:500,
    fontSize: '1.5rem',
    color: 'inherit',
    textDecoration: 'none',
    textAlign:'center',
}))

export const CompanyIcon=styled(CurrencyExchangeIcon)(()=>({
    marginRight: '0.5rem'
}))

export const NavButtonsBox=styled(Box)(()=>({
    flexGrow:1,
    display:'flex',
    justifyContent:'flex-end'
}))

export const NavButton=styled(Button)(()=>({
    color: "white", 
    display: "block",
    fontSize:'1rem',
    fontWeight:'400',
    margin: '0.5rem',
    paddingLeft: '1rem',
    paddingRight: '1rem'
}))