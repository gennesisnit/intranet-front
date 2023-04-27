import '@/styles/globals.scss'
import "swiper/css";
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';



export default function App({ Component, pageProps }: AppProps) {
  return(
   
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>  
   
  )
}
