import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import {
  getChainOptions,
  WalletProvider,
} from "@terra-money/wallet-provider";


const container = document.getElementById('root');
container.style.height = 'inherit'
const root = ReactDOM.createRoot(container);

const documentHeight = () => {
  const doc = document.documentElement
  doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
  console.log(window.innerHeight)
 }
 window.addEventListener('resize', documentHeight)
 documentHeight()


getChainOptions().then((chainOptions) => {
  root.render(
    <WalletProvider {...chainOptions}>
      <StrictMode>
        <ColorModeScript />
        <App />
      </StrictMode>
    </WalletProvider>,
    document.getElementById("root")
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
