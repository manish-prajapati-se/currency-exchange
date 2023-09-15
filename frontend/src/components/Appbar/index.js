import { useMediaQuery,useTheme } from "@mui/material";
import AppbarMobile from "./AppbarMobile";
import AppbarDesktop from "./AppbarDesktop";

function AppBar(){
    const theme=useTheme();
    const isMobileView=useMediaQuery(theme.breakpoints.down('md'));
    console.log(theme)
    return (
        <>
        {isMobileView?<AppbarMobile/>:<AppbarDesktop/>}
        </>
    )
}

export default AppBar;