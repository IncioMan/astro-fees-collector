import React, { useEffect, useState } from 'react';
import {
  Box,
} from '@chakra-ui/react';
import TablePools from './TablePools';
import TransactionsContext from '../context/TransactionsContext';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import TableAmounts from './TableAmounts';
import TableTransactions from './TableTransactions';

export default function SectionContainer() {
    const [transactions, setTransactions] = useState([]);
    const [tabIndex, setTabIndex] = useState(0);

    useEffect(()=>{
      if(transactions.length>0){
        setTabIndex(2)
      }
    },[transactions])

    const handleTabsChange = (index) => {
      setTabIndex(index)
    }

    return (
        
          <TransactionsContext.Provider value={{transactions, setTransactions}}>
            <Tabs
              index={tabIndex} 
              onChange={handleTabsChange}
              height={'50%'}
            >
              <TabList justifyContent={'center'}>
                  <Tab>Pools</Tab>
                  <Tab>Fees To Collect</Tab>
                  <Tab>Txs</Tab>
              </TabList>
              <Box height={'90%'}
                  overflow={'auto'}>
              <TabPanels>
                <TabPanel>
                    <TablePools/>
                </TabPanel>
                <TabPanel>
                    <TableAmounts/>
                </TabPanel>
                <TabPanel>
                    <TableTransactions/>
                </TabPanel>
              </TabPanels>
                  </Box>
            </Tabs>
          </TransactionsContext.Provider>
    )
}