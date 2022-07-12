import React, { useState } from 'react';
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
import TableTransactions from './components/TableTransactions';
import TransactionsContext from './context/TransactionsContext';

function App() {
  const [transactions, setTransactions] = useState([]);

  return (
    <ChakraProvider theme={theme}>
      <DarkMode>
      <Flex 
          justifyContent={'center'}
          bg='#000d37' 
          textAlign="center" 
          fontSize="xl"
          color={'white'}>
        <Flex minH="100vh" 
              w={['100%','100%','50%']}
              flexDirection={'column'} 
              justifyContent={'center'}
              p={3}>
        <Connect></Connect>
        <TransactionsContext.Provider value={{transactions, setTransactions}}>
          <TablePools></TablePools>
          <TableTransactions></TableTransactions>
        </TransactionsContext.Provider>
        </Flex>
      </Flex>
      </DarkMode>
    </ChakraProvider>
  );
}

export default App;
