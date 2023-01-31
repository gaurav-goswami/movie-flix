import { Flex, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react'

const Error = () => {
  return (
    <>
    <Flex w={'full'} h={'85vh'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}> 
        <Text fontSize={'1.6rem'}>404 Page Not Found</Text>
        <Button marginTop={'1rem'} padding={'2rem'} fontSize={'1.5rem'}>
          <Link to='/'>Back To Home</Link>
        </Button>
    </Flex>
    </>
  )
}

export default Error
