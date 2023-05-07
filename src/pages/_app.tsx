import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {CoinMarketProvider} from '../contex/contex'
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <CoinMarketProvider>
      <Component {...pageProps} />
    </CoinMarketProvider>
  ) 
}
