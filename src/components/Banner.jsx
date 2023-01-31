import React from 'react';
import { Flex, Button } from '@chakra-ui/react';
import {BsFillPlayFill} from 'react-icons/bs'
import FlixCard from './Card';
import Cast from './Cast';


const Banner = (singleDetail) => {
  return (
    <>
        <Flex w={'100%'} direction={'column'} pos={'relative'}>
            <div className="poster">
            <img src= {`https://image.tmdb.org/t/p/original${singleDetail.backdrop_path}`} alt="" />
            </div>
            
            <div className="details">
            <p className='name'>{singleDetail.title || singleDetail.name}</p>

                <div className="genre-btns">
            {
                singleDetail.genres.map((currentInfo, index) => {
                return <Button key={index} fontSize={'1.6rem'} p={'2rem 1rem'} m={'0 .4rem'} color={'yellow.300'}>{currentInfo.name}</Button>
                })
            }
                </div>

            {/* <div className="flix-btns">
                {
                    (singleDetail.video) ? <BsFillPlayFill /> : null
                }
            </div> */}

            <p className='tagline'>"{singleDetail.tagline}"</p>
            <p className="name">Overview</p>
            <p className='overview'>{singleDetail.overview}</p>
            </div>
            <div className="current-card">
                <FlixCard {...singleDetail}/>
            </div>
        </Flex>

        <Cast />
    </>
  )
}

export default Banner
