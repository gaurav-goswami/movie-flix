import React from 'react';
import {ChakraProvider, extendTheme, theme} from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/store/store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
     <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider> 
     </Provider>

  </>

);
