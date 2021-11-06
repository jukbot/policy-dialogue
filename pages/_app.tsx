import type { AppProps } from 'next/app'
import Navbar from '../components/Layout/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="relative bg-secondary">
      <Navbar />
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
