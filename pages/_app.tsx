import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Navbar from '@/components/Layout/Navbar'
import Footer from '@/components/Layout/Footer'
import '@/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.addEventListener('touchstart', () => null, {
      passive: true,
    })
  }, [])

  return (
    <main className="relative w-full h-full bg-secondary">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}

export default MyApp
