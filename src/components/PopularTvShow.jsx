import React, { useState } from 'react';
import FlixCard from './Card';
import { Flex,VStack, Spinner, Button} from '@chakra-ui/react';
import { GetPopularShows } from '../APIfetcher/API';
import { useDispatch, useSelector } from 'react-redux';
import { getNewPopularShowPage } from '../redux/action/actions';


const PopularTvShow = () => {
    const dispatch = useDispatch();

    const [page , setPage] = useState(1);


    const getNewPage = (newPage) => {
        if(newPage<=1){
            newPage = 1;
        }
        setPage(newPage);
        dispatch(getNewPopularShowPage(newPage))
    }

    const {isLoading, status, data} = GetPopularShows();  

    const popularShows = useSelector((state) => state.popularReducer.popularShows.results)

    if(popularShows == []){
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
                popularShows.map((currentElement) => {
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

export default PopularTvShow
