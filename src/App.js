import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Button,
  Flex,
} from '@chakra-ui/react';
import Connect from './components/Connect';
import TablePools from './components/TablePools';
import TableTransactions from './components/TableTransactions';
import TransactionsContext from './context/TransactionsContext';

function App() {
  const [transactions, setTransactions] = useState([]);

  return (
    <ChakraProvider theme={theme}>
      <Flex 
          justifyContent={'center'}
          bg='#000d37' 
          textAlign="center" 
          fontSize="xl">
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
    </ChakraProvider>
  );
}

export default App;
