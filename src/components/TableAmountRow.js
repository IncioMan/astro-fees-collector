import React, { useContext, useEffect, useState } from 'react';
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
import {getAsset} from '../utils/AssetProvider'
import {useConnectedWallet, useLCDClient, useWallet, WalletStatus} from '@terra-money/wallet-provider';
import {maker_address} from '../data/maker_contract';
import {queryBalance} from '../utils/ContractQueryProvider'


function TableAmountRow(props) {
  const {asset} = props
  const [loading, setLoading] = useState(false)
  const [amount, setAmount] = useState()
  const [assetInfo, setAssetInfo] = useState()
  const lcd = useLCDClient();
  const wallet = useConnectedWallet();
  const {
    status,
    network
  } = useWallet();

  useEffect(()=>{
    setLoading(true)
    console.log(asset)
    queryBalance(lcd, maker_address[network.chainID], [getAsset(asset, assets[network.chainID])])
           .then(result => {
            console.log(result)
            try{
              setAmount(result.balances[0].amount/1000000)
            }catch(error){
              setAmount(0)
            }
          }).finally(()=>{
            setLoading(false)
          })
  },[lcd, network])

  useEffect(()=>{
    setAssetInfo(assets[network.chainID][asset])
  },[network])

  return (
    <Tr>
        <Td>
            <Flex justifyContent={'initial'}
                  fontSize={['12px','17px']}>
                <Flex alignItems={'center'}
                      paddingRight={3}>
                    <Image 
                        marginRight={'5px'}
                        w={'25px'}
                        src={icons[assetInfo?.name]} 
                        alt={assetInfo?.name} />
                </Flex>
                {assetInfo?.name}
            </Flex>
        </Td>
        <Td textAlign={'center'}>
            <Flex 
                justifyContent={'center'}
                height={'32px'}
                width={'127px'}
                fontSize={['12px','17px']}>
            {(!loading)&&(amount)&&
                <div>{amount}</div>
            }
            {(loading)&&
                <Spinner/>
            }
            </Flex>
        </Td>
    </Tr>
  );
}

export default TableAmountRow;
