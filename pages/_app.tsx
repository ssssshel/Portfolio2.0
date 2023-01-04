import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { LangContextComponent } from '../utils/hooks/useLanguage'

function MyApp({ Component, pageProps }: AppProps) {
  return <LangContextComponent>
    <Component {...pageProps} />
  </LangContextComponent>
}

export default MyApp
