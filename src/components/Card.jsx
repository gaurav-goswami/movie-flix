import { Box, Flex, Image} from '@chakra-ui/react';
import React from 'react';
import '../css/component css/Trending.css';
import { Link } from 'react-router-dom';
import { getMediaType, getCurrentID } from '../redux/action/actions';
import { useDispatch } from 'react-redux';

const FlixCard = ({id, poster_path, title, original_name, width}) => {

  // details (media_type and id)

  const dispatch = useDispatch();
  const sendDetails = () => {
    dispatch(getMediaType(original_name));
    dispatch(getCurrentID(id));
  }

  
  return (

    <Flex w={'24rem'} className='trending-card' direction={'column'} borderRadius={'1rem'}>
        <Link to={`/${title || original_name}/view`} onClick = {() => sendDetails()}>
        <Box pos={'relative'} >
            <Image src= {`https://image.tmdb.org/t/p/w500${poster_path}`} w={'100%'}/>
        </Box>
      </Link>
    </Flex>

  )
}

export default FlixCard
