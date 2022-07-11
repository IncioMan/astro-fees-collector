import React from 'react';
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
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import Connect from './components/Connect';
import TablePools from './components/TablePools';

function App() {
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
        <TablePools></TablePools>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
