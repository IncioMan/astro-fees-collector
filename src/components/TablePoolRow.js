import React, { useContext, useState } from 'react';
import {
    Box,
  Button,
  Flex,
  Spinner,
  Image
} from '@chakra-ui/react';
import {
  Tr,
  Td,
} from '@chakra-ui/react'
import {pools} from '../data/pools';
import {assets} from '../data/assets';
import {icons} from '../data/icons';
import {collectFees} from '../utils/ContractExecuteProvider'
import TransactionsContext from '../context/TransactionsContext';
import {useConnectedWallet, useLCDClient, useWallet, WalletStatus} from '@terra-money/wallet-provider';
import {maker_address} from '../data/maker_contract';


function TablePoolRow(props) {
  const {pool} = props
  const [loading, setLoading] = useState(false)
  const lcd = useLCDClient();
  const wallet = useConnectedWallet();
  const {
    status,
    network
  } = useWallet();
  const {transactions, setTransactions} = useContext(TransactionsContext);
  const assets_ = pools[network.chainID][pool]?.assets
  const asset1 = assets_?assets[network.chainID][assets_[0].name]:''
  const asset2 = assets_?assets[network.chainID][assets_[1].name]:''

  const handleTxHash = (hash)=>{
    const txs = [...transactions, hash]
    setTransactions(txs)
  }

  const handleClick = () => {
    setLoading(true)
    console.log(network, status)
    collectFees(maker_address[network.chainID], 
                pools[network.chainID][pool], 
                wallet, lcd, handleTxHash).finally(()=>{
        setLoading(false)
    })
  }

  return (
    <Tr>
        <Td>
            <Flex minW={'220px'} justifyContent={'initial'}>
                <Flex alignItems={'center'}>
                    <Image 
                        marginRight={'5px'}
                        w={'25px'}
                        src={icons[asset1]} 
                        alt={asset1} />
                    {asset1}
                </Flex>
                <Flex margin={'0px 10px'}>
                -
                </Flex>
                <Flex alignItems={'center'}>
                    <Image 
                        w={'25px'}
                        marginRight={'5px'}
                        src={icons[asset2]} 
                        alt={asset2} />
                    {asset2}
                </Flex>
            </Flex>
        </Td>
        <Td textAlign={'center'}>
            <Flex 
                justifyContent={'center'}
                height={'32px'}
                width={'127px'}>
            {
                (!loading)&&(status==WalletStatus.WALLET_CONNECTED)&&<Button 
                bg={'whiteAlpha.400'}
                borderRadius={'30px'}
                width={'127px'}
                fontWeight={'400'}
                border={'solid 0.1px'}
                height={'32px'}
                onClick={()=>handleClick()}
                >Collect Fees</Button>
            }
            {(loading)&&
                <Spinner/>
            }
            </Flex>
        </Td>
    </Tr>
  );
}

export default TablePoolRow;
