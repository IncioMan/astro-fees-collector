import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import {useConnectedWallet, useLCDClient, useWallet, WalletStatus} from '@terra-money/wallet-provider';

import TablePoolRow from './TablePoolRow';
import {pools} from '../data/pools';


function TablePools() {
  const {
    network
  } = useWallet();
  return (
    <TableContainer 
        height={'100%'}
        w={['100%']} 
        display={'flex'} 
        overflowY={'auto'}>
        <Table variant='simple'>
        <Tbody>
            {
            Object.keys(pools[network.chainID]).map((pool)=>{
                console.log(pool)
                return <TablePoolRow pool={pool}></TablePoolRow>
            })}
        </Tbody>
        </Table>
    </TableContainer>
  );
}

export default TablePools;
