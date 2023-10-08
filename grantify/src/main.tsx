import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import {
//   EthereumClient,
//   w3mProvider,
//   w3mConnectors,
// } from '@web3modal/ethereum';
// import { WagmiConfig, createClient, configureChains } from 'wagmi';
// import { Web3Modal } from '@web3modal/react';
// import { bellecour } from './utils/walletConnection';
// import './main.css';
// import Front from './features/Front';

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement!);

// // material ui theme
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#FCD15A',
//       contrastText: '#1D1D24',
//     },
//   },
// });

// // Wagmi Client
// if (!import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID) {
//   throw new Error(
//     'You need to provide a WALLET_CONNECT_PROJECT_ID env variable'
//   );
// }
// const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID!;
// const chains = [bellecour];
// const { provider } = configureChains(chains, [w3mProvider({ projectId })]);

// const wagmiClient = createClient({
//   autoConnect: true,
//   connectors: w3mConnectors({ version: 1, chains, projectId }),
//   provider,
// });

// // Configure modal ethereum client
// const ethereumClient = new EthereumClient(wagmiClient, chains);




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// import * as React from 'react'
// import * as ReactDOM from 'react-dom/client'
// import { WagmiConfig } from 'wagmi'

// import { App } from './App'
// import { config } from '../../../../wagmi'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <WagmiConfig config={config}>
//       <App />
//     </WagmiConfig>
//   </React.StrictMode>,
// )

