// pages/_app.js
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fontsource-variable/rubik';
import { inputTheme } from './utils/input.js'
const theme = extendTheme({
  fonts: {
    heading: `'Rubik Variable', sans-serif`,
    body: `'Rubik Variable', sans-serif`,
  },
  components: {
    Progress: {
      baseStyle: {
        filledTrack: {
          bg: '#FFBE37'
        }
      }
    },

     Input: inputTheme ,
  }
  

})
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      startEvent: 'DOMContentLoaded',
         duration: 800,
         once: false,
     
       })
 }, [])
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;