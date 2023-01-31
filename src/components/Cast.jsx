import {Flex, Text, Spinner } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux';
import { GetCastInfo } from '../APIfetcher/API'
import '../css/component css/Cast.css';

const Cast = () => {

  let {data, isLoading} = GetCastInfo();

  const castDetails = useSelector((state) => state.castReducer.castDetails.cast);

  if(castDetails == [] || castDetails == undefined) isLoading = true;

  // console.log(castDetails);

  return (
    <div className="cast">
      {
        (isLoading) ? <Flex w={'100%'} h={'100vh'} justify={'center'} align={'center'}>
          <Spinner />
        </Flex> : 
        <>
          <Text fontSize={'3rem'} fontWeight={'700'} p={'1rem'}>Cast</Text>
          <div className="cast-img">
            {
              castDetails.map((currentElement, index) => {
                return <div className='img-holder' key={index}>
                    <img src= {`https://image.tmdb.org/t/p/w500${currentElement.profile_path}`} />
                    <Text textAlign={'center'} fontSize={'1.5rem'}>{currentElement.name}</Text>
                  </div>
                
              })
            }
          </div>
        </>
      }
    </div>
  )
}

export default Cast
