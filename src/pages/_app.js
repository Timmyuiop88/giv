// pages/_app.js
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/rubik';
import { inputTheme } from './input.js'
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
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;