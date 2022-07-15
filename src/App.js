import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Button,
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
import SectionContainer from './components/SectionContainer';

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
        <SectionContainer/>
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
