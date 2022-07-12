import React, { useContext, useEffect, useState } from 'react';
import {
    Box,
  Button,
  Flex,
  Spinner,
  Image,
  Link
} from '@chakra-ui/react';
import {
  Tr,
  Td,
} from '@chakra-ui/react'
import {useWallet, useLCDClient} from '@terra-money/wallet-provider';

function TableTransactionRow(props) {
  const {hash} = props
  const [loading, setLoading] = useState(false)
  const [astroCollected, setAstroCollected] = useState()
  const {
    network
  } = useWallet();
  const lcd = useLCDClient();

  const getAstroCollected = async (hash)=>{
    setLoading(true)
    await new Promise(r => setTimeout(r, 10000));
    lcd.tx.txInfo(hash).then((r)=>{
        console.log(r)
        try{
            const amounts = r.logs[0].eventsByType.wasm.amount.slice(-2)
            setAstroCollected(amounts.reduce((partialSum, a) => partialSum + parseInt(a)/1000000, 0))
        } catch(error){
            setAstroCollected(null)
        }
    }).catch(()=>{
        setAstroCollected(null)
    })
    setLoading(false)
  }

  useEffect(()=>{
    getAstroCollected(hash)
  },[hash, network, lcd])

  return (
    <Tr>
        <Td>
            <Flex minW={'220px'} justifyContent={'initial'}>
                <Link color='teal.500' href={'https://finder.terra.money/'+network.name+'/tx/'+hash} target='_blank'>
                    {hash.slice(0,5)+'...'+hash.slice(-5)}
                </Link>
            </Flex>
        </Td>
        <Td textAlign={'center'}>
            <Flex 
                justifyContent={'center'}
                height={'32px'}
                width={'127px'}>
                {(!loading)&&(astroCollected)&&
                    <>{astroCollected}</>
                }
                {(!loading)&&(!astroCollected)&&
                    <>No fees to collect</>
                }
                {(loading)&&
                <Spinner/>
                }
            </Flex>
        </Td>
    </Tr>
  );
}

export default TableTransactionRow;
