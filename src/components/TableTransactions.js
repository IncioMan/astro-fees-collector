import React, { useContext, useEffect } from 'react';
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
import TableTransactionRow from './TableTransactionRow';
import TransactionsContext from '../context/TransactionsContext';


function TableTransactions() {
  const {transactions} = useContext(TransactionsContext);
  const {
    status,
    network
  } = useWallet();


  return (
    <>
      {(status === WalletStatus.WALLET_CONNECTED) && (transactions)&&(transactions.length>0)&&
      <TableContainer p={'24px 0px'} w={['100%']} display={'flex'} alignItems={'center'}>
          <Table variant='simple'>
          <Thead>
              <Tr>
              <Th>Tx Hash</Th>
              <Th>ASTRO Collected</Th>
              </Tr>
          </Thead>
          <Tbody>
            {
              transactions.map((h)=>{
                  return <TableTransactionRow hash={h}></TableTransactionRow>
              })}
          </Tbody>
          </Table>
      </TableContainer>
    }
    </>
  );
}

export default TableTransactions;
