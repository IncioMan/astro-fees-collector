import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import {icons} from '../../data/icons'
import MyDraggable from './MyDraggable';
import MyDroppable from './MyDroppable';
import {DndContext, DragOverlay, KeyboardSensor, useSensors} from '@dnd-kit/core';
import {MouseSensor, TouchSensor, useSensor} from '@dnd-kit/core';

export default function LiquidityPools() {

  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const keyboardSensor = useSensor(KeyboardSensor);

  const sensors = useSensors(
      mouseSensor,
      touchSensor,
      keyboardSensor,
  );

  function handleDragEnd(event) {
    const {over} = event;
}

function handleDragStart(event) { 
}

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd} sensors={sensors}>
      <Flex 
        justifyContent={'center'}
        alignItems={'center'}
        padding={[4,8,20]}
        height={'25%'}>
        <Flex 
          flexDirection={'column'}
          width={'33%'}
          justifyContent={'center'}
          alignItems={'center'}>
          <Flex fontSize={16}>
            APR
          </Flex>
          <Flex fontSize={24}>
            12%
          </Flex>
        </Flex>
        <Flex 
          flexDirection={'column'}
          width={'33%'}
          justifyContent={'center'}
          alignItems={'center'}>
          <Flex fontSize={16}>
            Daily Volume
          </Flex>
          <Flex fontSize={24}>
            $312k
          </Flex>
        </Flex>
        <Flex 
          flexDirection={'column'}
          width={'33%'}
          justifyContent={'center'}
          alignItems={'center'}>
          <Flex fontSize={16}>
            Liquidity
          </Flex>
          <Flex fontSize={24}>
            $1.4M
          </Flex>
        </Flex>
      </Flex>
      <Flex height={'60%'}
            flexDirection={'column'}>
        <>Liquidity Pool</>
        <Flex width={'100%'}
              height={'90%'} 
              justifyContent={'center'}
              alignItems={'center'}>
          <MyDroppable key={'asset1'} id={'asset1'}>
            <Box 
                width={'80px'} 
                height={'80px'} 
                border={'dotted'}
                margin={4}>
            </Box>
          </MyDroppable>
          <MyDroppable key={'asset2'} id={'asset2'}>
            <Box 
                width={'80px'} 
                height={'80px'} 
                border={'dotted'}
                margin={2}>
            </Box>
          </MyDroppable>
        </Flex>
      </Flex>
      <Flex height={'15%'}
            width={'100%'} 
            justifyContent={'center'}>
        <Flex 
          width={'90%'} 
          height={'100%'} 
          border={'dotted'}
          padding={4}
          overflowX={'auto'}>
          {Object.keys(icons).map((icon)=>(
            <MyDraggable id={icon}>
              <Image 
                marginRight={'5px'}
                w={['50px']}
                src={icons[icon]} 
                alt={icon}/>
            </MyDraggable>
          ))}
        </Flex>
      </Flex>
    </DndContext>
  )
}