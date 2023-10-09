import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu"; 
import { useWeb3Modal } from '@web3modal/react';
import { useEffect } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import LogoutIcon from '@mui/icons-material/Logout';


import "../main.css"; 


export default function ButtonAppBar() {

  const { address, isConnected } = useAccount();

  const { open } = useWeb3Modal();
  const { error } = useConnect();
  const { isConnecting, isDisconnected } = useAccount();

  const { disconnect } = useDisconnect();

  useEffect(() => {
    if (isDisconnected) {
      open();
    }
  }, [isDisconnected, open]);

    //wallet address shortening
    const shortAddress = (address: string) => {
      return address.slice(0, 6) + '...' + address.slice(-4);
    };

  
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar 
        position="static"
        style={{ color: "white", background: "#0f172a" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
            style={{ color: "white"}}
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

          {error && <Typography>{error.message}</Typography>}

          {isConnecting &&  <Button style={{background:"#ddd7ff", color:"black"}}>
            Connecting...
          </Button>}

          {isDisconnected && (
          <Button style={{background:"#ddd7ff", color:"black"}}>
            Connect your Wallet
          </Button>
          )}

          {isConnected && (
          <>
          <Button style={{background:"#ddd7ff", color:"black"}}>
              {shortAddress(address)}
          </Button>

          <IconButton onClick={disconnect} >
            <LogoutIcon style={{ color:"white" }} />
          </IconButton>
          </>  
          )}
    
        </Toolbar>
      </AppBar>
    </Box>
  );
}
