import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetUpcomingShows } from '../APIfetcher/API';
import { getNewUpcomingShowPage } from '../redux/action/actions';
import FlixCard from './Card';
import { Flex,VStack, Spinner, Button} from '@chakra-ui/react';


const UpcomingShow = () => {
    const dispatch = useDispatch();

    const [page , setPage] = useState(1);


    const getNewPage = (newPage) => {
        if(newPage<=1){
            newPage = 1;
        }
        setPage(newPage);
        dispatch(getNewUpcomingShowPage(newPage))
    }

    const {isLoading} = GetUpcomingShows();  

    const upcomingShows = useSelector((state) => state.upcomingReducer.upcomingShows.results)

    
    if(upcomingShows == []){
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
                upcomingShows.map((currentElement) => {
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

export default UpcomingShow
