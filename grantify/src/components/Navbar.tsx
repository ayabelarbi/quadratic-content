import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

// import { IExecDataProtector, getWeb3Provider } from "@iexec/dataprotector";

// const { PRIVATE_KEY } = import.meta.env;
// get web3 provider from a private key
// const web3Provider = getWeb3Provider(PRIVATE_KEY);
// console.log("web3Provider", web3Provider);

// // instantiate
// const dataProtector = new IExecDataProtector(web3Provider);
// console.log("dataProtector", dataProtector);

//TODO:  understand why this code doesn't work ? Is it because of web3Provider ?? s
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ color: "black", background: "#7e57c2" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            align="center"
          >
            Grantify
          </Typography>
          <Button style={{ color: "black", background: "grey" }}>
            {" "}
            Login{" "}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
