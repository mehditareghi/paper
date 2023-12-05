import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@/public/fonts/yekanbakhpro/css/yekanbakhpro.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
