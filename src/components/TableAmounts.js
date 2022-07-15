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

import TableAmountRow from './TableAmountRow';
import {assets} from '../data/assets';


function TableAmounts() {
  const {
    status,
    network
  } = useWallet();


  return (
    <>
      <TableContainer w={['100%']} display={'flex'} alignItems={'center'}>
          <Table variant='simple'>
          <Tbody>
            {
              Object.keys(assets[network.chainID]).map((asset)=>{
                  console.log(assets[network.chainID][asset])
                  return <TableAmountRow asset={asset}></TableAmountRow>
              })}
          </Tbody>
          </Table>
      </TableContainer>
    </>
  );
}

export default TableAmounts;
