import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetUpcomingMovies } from '../APIfetcher/API';
import { getNewUpcomingMoviePage } from '../redux/action/actions';
import FlixCard from './Card';
import { Flex,VStack, Spinner, Button} from '@chakra-ui/react';


const UpcomingMovie = () => {
    const dispatch = useDispatch();

    const [page , setPage] = useState(1);


    const getNewPage = (newPage) => {
        if(newPage<=1){
            newPage = 1;
        }
        setPage(newPage);
        dispatch(getNewUpcomingMoviePage(newPage))
    }

    const {isLoading} = GetUpcomingMovies();  

    const upcomingMovies = useSelector((state) => state.upcomingReducer.upcomingMovies.results)

    
    if(upcomingMovies == []){
        isLoading = true;
    }


  return (
    <>
        <VStack align={'flex-start'} p={'1rem'}>
        {
        (isLoading) ? 
        <Flex w={'100%'} h={'100vh'} justify={'center'} align={'center'}><Spinner color={'rgb(255,255,0)'}/></Flex> : 

        <>
            <Flex p={'.5rem'} wrap={'wrap'} justify={'center'} gap={'2rem'}>
                {
                upcomingMovies.map((currentElement) => {
                    return <FlixCard key={currentElement.id} {...currentElement}/>
                })
                }
            </Flex>
            <Flex w={'full'} justify={'center'} marginTop={'1rem'} gap={'1rem'}>
                
                <Button onClick={() => getNewPage(page-1)} colorScheme={'none'} color={'#fff'} fontSize={'1.6rem'} className='active-button button'>Prev</Button>
                <Button onClick={() => getNewPage(page+1)} colorScheme={'none'} color={'#fff'} fontSize={'1.6rem'} className='active-button button'>Next</Button>
            </Flex>
        </>
        }
        </VStack>
    </>
  )
}

export default UpcomingMovie
