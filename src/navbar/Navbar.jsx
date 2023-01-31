import React, { useEffect, useState } from 'react';
import {
  Flex,
  Text, 
  Button,  
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
}  from '@chakra-ui/react';

import { Link, useNavigate } from 'react-router-dom';
import '../css/NavbarCustomCss.css';
import {AiFillCaretDown, AiOutlineClose} from 'react-icons/ai';
import {HiMenuAlt3} from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchValue } from '../redux/action/actions';



const Navbar = () => {

  const [result, setResult] = useState(null);

  const dispatch = useDispatch();

  // toggle-menu state
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => setToggle(!toggle);
  
  const[search , setSearch] = useState('');
  
  const navigate = useNavigate();


  // search

  const handleChange = event => {
    setSearch(event.target.value);
  };

  // search submit

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(getSearchValue(search));
    navigate(`/search/${search}`)
    setSearch('');
  }


  return (
    <>
      
        <div className= {(toggle) ? 'navbar' : 'navbar mobile-navbar'}>

          {/* logo */}

          <Flex justify={'center'} align={'center'} p={'.5rem'} className='logo-wrapper'>
            <Link to='/'>
              <Text fontSize={'3rem'} fontWeight={'800'} p={'.5rem'} color={'rgb(255, 255, 0)'} className='logo'>MovieFlix</Text>
            </Link>
          </Flex>


          {/* movies, shows, watchList */}

          <Flex w={'35%'}  justify={'space-evenly'} align={'center'} className='movies-shows-field'>
            
            <Menu>
              <MenuButton as={Button} rightIcon={<AiFillCaretDown />} colorScheme={'none'} color={'#fff'} fontSize={'1.6rem'} className='button'>
                Movies
              </MenuButton>
              <MenuList bg={'rgb(15,11,11)'} border={'none'} p={'1rem'}>
                <MenuItem bg={'none'} m={'1rem 0'} color={'#fff'} fontSize={'1.6rem'} className='button'>
                  <Link to='movies/popular'>Popular Movies</Link>
                </MenuItem>
                <MenuItem bg={'none'} m={'1rem 0'} color={'#fff'} fontSize={'1.6rem'} className='button'>
                  <Link to='movies/upcoming'>Upcoming Movies</Link>
                </MenuItem>
                <MenuItem bg={'none'} m={'1rem 0'} color={'#fff'} fontSize={'1.6rem'} className='button'>
                  <Link to='movies/toprated'>Top Rated Movies</Link>
                </MenuItem>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton as={Button} rightIcon={<AiFillCaretDown />} colorScheme={'none'} color={'#fff'} fontSize={'1.6rem'} className='button'>
                Tv Shows
              </MenuButton>
              <MenuList bg={'rgb(15,11,11)'} border={'none'} p={'1rem'}>
                <MenuItem  bg={'none'} m={'1rem 0'} color={'#fff'} fontSize={'1.6rem'} className='button'>
                  <Link to='tvshows/popular'>Popular Tv Shows</Link>
                </MenuItem>
                <MenuItem  bg={'none'} m={'1rem 0'} color={'#fff'} fontSize={'1.6rem'} className='button'>
                  <Link to='tvshows/upcoming'>Upcoming Tv Shows</Link>
                </MenuItem>
                <MenuItem  bg={'none'} m={'1rem 0'} color={'#fff'} fontSize={'1.6rem'} className='button'>
                  <Link to='tvshows/toprated'>Top Rated Tv Shows</Link>
                </MenuItem>
              </MenuList>
            </Menu>

          </Flex>

          {/* search bar and login*/}

          {/* <Flex w={'35%'} align={'center'} p={'1rem'} className='search-field'> */}
            <form onSubmit={submitHandler}>
              <input type='text' placeholder='Search movies & shows' className='searchbar' name='search' value={search} onChange={handleChange} autoComplete='off' bg={'#000'}/>
            </form>
          {/* </Flex> */}
        </div>
          <div className='hamburger'>
            {
              (toggle) ? <HiMenuAlt3 className='menu-icon menu-open-icon' onClick={handleToggle}/> : <AiOutlineClose className='menu-icon menu-close-icon' onClick={handleToggle}/>
            }
          </div>
        
    </>
  )
}

export default Navbar 

// import { Box, Flex, Image, Menu, MenuButton, MenuList, MenuItem, Text, Input } from "@chakra-ui/react";

// function Navbar() {
//   return (
//     <Flex as="nav" align="center" justify="space-between" padding="1.5rem">
//       <Flex align="center" mr={5}>
//         <Text fontSize="xl" fontWeight="medium" ml={2}>MovieFlix</Text>
//       </Flex>
//       <Menu>
//         <MenuButton>
//           Movies
//         </MenuButton>
//         <MenuList>
//           <MenuItem>
//             Popular Movies
//           </MenuItem>
//           <MenuItem>
//             Top Rated Movies
//           </MenuItem>
//           <MenuItem>
//             Upcoming Movies
//           </MenuItem>
//         </MenuList>
//       </Menu>
//       <Menu>
//         <MenuButton>
//           TV Shows
//         </MenuButton>
//         <MenuList>
//           <MenuItem>
//             Popular TV Shows
//           </MenuItem>
//           <MenuItem>
//             Top Rated TV Shows
//           </MenuItem>
//           <MenuItem>
//             Upcoming TV Shows
//           </MenuItem>
//         </MenuList>
//       </Menu>
//       <Box mr={5}>
//         <Text fontSize="md">Watch List</Text>
//       </Box>
//       <form action="">
//         <Input placeholder="Search" size="md" mr={5} />
//       </form>
//       <Text fontSize="md">Login</Text>
//     </Flex>
//   );
// }


// export default Navbar
