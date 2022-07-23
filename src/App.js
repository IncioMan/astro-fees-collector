import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  Flex,
  DarkMode,
} from '@chakra-ui/react';
import theme from './theme';
import Connect from './components/Connect';
import TablePools from './components/TablePools';
import IconFooter from './components/IconFooter';
import TableTransactions from './components/TableTransactions';
import TransactionsContext from './context/TransactionsContext';
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import SectionContainer from './components/SectionContainer';
import LiquidityPools from './components/drag/LiquidityPools';

function App() {

  return (
    <ChakraProvider theme={theme}>
      <DarkMode>
      <Flex 
          justifyContent={'center'}
          bg='#000d37' 
          textAlign="center" 
          fontSize="xl"
          color={'white'}
          height={'inherit'}>
        <Flex w={['100%','100%','50%']}
              flexDirection={'column'} 
              justifyContent={'center'}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SectionContainer/>} />
            <Route index path="/lps" element={<LiquidityPools/>} />
          </Routes>
        </BrowserRouter>
        <Flex 
          height={'10%'}
          w={['100%']}
          justifyContent={'center'}
          paddingTop={'32px'}>
          <Connect></Connect>
        </Flex>
        <IconFooter/>
        </Flex>
      </Flex>
      </DarkMode>
    </ChakraProvider>
  );
}

export default App;
