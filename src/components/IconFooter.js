import React from "react";
import {
  Link,
  Flex,
} from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react'
import { FaTwitter, FaGithub } from 'react-icons/fa'

export default function IconFooter() {
    return (
        <Flex height={'10%'} justifyContent={'center'} p={'24px 0px'}>
          <Link href={'https://twitter.com/IncioMan'}
            padding={'0px 4px'}
            target={'_blank'}><Icon as={FaTwitter} w={7} h={7}></Icon></Link>
          <Link href={'https://github.com/IncioMan/astro-fees-collector'}
            padding={'0px 4px'}
            target={'_blank'}><Icon as={FaGithub} w={7} h={7}></Icon></Link>
        </Flex>
    )
}