import {Flex, Spinner, Text, VStack, Button } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import {GetSearchDetails } from '../APIfetcher/API';
import '../css/component css/SinglePage.css';
import Banner from './Banner';


const SinglePage = () => {

  // movie / show data

  let {data,  isLoading} = GetSearchDetails();

  const singleDetail = useSelector((state) => state.searchReducer.singleDetail);

  if(singleDetail == []){
    isLoading = true;
  }


  // cast data


  return (
    <>
        {
          (isLoading) ? 
          <Flex w={'full'} h={'100vh'} justify={'center'} align={'center'}><Spinner color='yellow' /></Flex>
          :
          <>
            <Banner {...singleDetail}/>
          </>
        }
    </>
  )
}

export default SinglePage
