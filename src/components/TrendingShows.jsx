import React, { useState } from 'react';
import { GetTrendingShows } from '../APIfetcher/API';
import { useDispatch, useSelector } from 'react-redux';
import FlixCard from '../components/Card';
import { Flex , Text, VStack, Spinner, HStack, Button} from '@chakra-ui/react';
import { getTrendingShowTime } from '../redux/action/actions';


const TrendingShows = () => {

    const [currentTime, setCurrentTime] = useState('day');

    const dispatch = useDispatch();

    const {isLoading} = GetTrendingShows();
  
    const trendingShows = useSelector((state) => state.trendingReducer.trendingShows.results);    
    
    // trending time
    
    const changeTrendingTime = (time) => {
      setCurrentTime(time)
      dispatch(getTrendingShowTime(time))

    }

  
    if(trendingShows === []){
      isLoading = true;
    }
    

  return (
    <>
        <VStack align={'flex-start'} p={'1rem'}>
        {
        (isLoading) ? 
        <Flex w={'100%'} h={'100vh'} justify={'center'} align={'center'}><Spinner color={'rgb(255,255,0)'}/></Flex> : 

        <>
            <HStack w={'100%'} h={'10vh'} justify={'space-between'} p={'3rem'}>
                <Text fontSize={'2rem'} color={'yellow'} fontWeight={'300'}>Trending Tv Shows</Text>

                <HStack gap={'1rem'}>

                <Button onClick={() => changeTrendingTime('day')} colorScheme={'none'} color={'#fff'} fontSize={'1.4rem'} className={(currentTime === 'day') ? 'active-button button' : 'button'}>Today</Button>

                <Button onClick={() => changeTrendingTime('week')} colorScheme={'none'} color={'#fff'} fontSize={'1.4rem'} className={(currentTime === 'week') ? 'active-button button' : 'button'}>This Week</Button>

                </HStack>

            </HStack>

            <Flex p={'.5rem'} wrap={'wrap'} justify={'center'} gap={'2rem'}>
                {
                trendingShows.map((currentElement) => {
                    return <FlixCard key={currentElement.id} {...currentElement}/>
                })
                }
            </Flex>
        </>
        }
        </VStack>
    </>
  )
}

export default TrendingShows
