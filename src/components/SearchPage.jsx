import React from 'react'
import { useSelector } from 'react-redux';
import { GetSearchResult } from '../APIfetcher/API'
import { Flex,Spinner, Text } from '@chakra-ui/react';
import FlixCard from './Card';

const SearchPage = () => {

  let {isLoading} = GetSearchResult();
  const searchResult = useSelector((state) => state.searchReducer.searchResult.results)

  if(searchResult == [] || searchResult == undefined){
    isLoading = true;
  }

  return (
    <>

      {
        (isLoading) ? 

        <Flex w={'full'} h={'100vh'} justify={'center'} align={'center'}><Spinner /></Flex> :
        <> 
        <Text textAlign={'center'} fontSize={'2rem'} color={'grey'} marginTop={'2rem'}>Search Result</Text>
        <Flex p={'1rem'} wrap={'wrap'} justify={'center'} gap={'2rem'}>
        {
          searchResult.map((currentElement) => {
            return <FlixCard key={currentElement.id} {...currentElement}/>
          })
        }
        </Flex>
        </>
      }
    </>
  )
}

export default SearchPage
