import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Create from './pages/Create.tsx'
import Vote from './pages/Vote.tsx'
import './index.css'
import { WagmiConfig, createConfig, configureChains  } from 'wagmi'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { config } from '../wagmi.ts'
import { bellecour } from './utils/walletConnection';
import {
  EthereumClient,
  w3mProvider,
  w3mConnectors,
} from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';

//browserRoute installation 

import { BrowserRouter, Routes, Route } from 'react-router-dom'


// material ui theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#FCD15A',
      contrastText: '#1D1D24',
    },
  },
});

// Wagmi Client
if (!import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID) {
  throw new Error(
    'You need to provide a WALLET_CONNECT_PROJECT_ID env variable'
  );
}
const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID!;
const chains = [bellecour];
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);

const wagmiClient = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ chains, projectId }),
  publicClient,
});

// Configure modal ethereum client
const ethereumClient = new EthereumClient(wagmiClient, chains);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> 
    <WagmiConfig config={config}>
    <BrowserRouter>
    <Routes> 
        <Route path="/" element={<App/>}/> 
  
        <Route path="/create" element={<Create/>}/> 

        <Route path="/vote" element={ <Vote/>} />
    </Routes> 
    </BrowserRouter>

    </WagmiConfig>
    <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </ThemeProvider>

  </React.StrictMode>,
)