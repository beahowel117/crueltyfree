import '../styles/globals.css'
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react"
import { myNewTheme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={myNewTheme}>
      <ColorModeProvider 
        options={{
          initialColorMode: "dark",
          useSystemColorMode: true,
        }}>
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
    
  );
  
}

export default MyApp
