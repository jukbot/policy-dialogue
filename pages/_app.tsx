import Footer from '@/components/Layout/Footer'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useEffect } from 'react'

const Navbar = dynamic(() => import('@/components/Layout/Navbar'), { ssr: false })

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.addEventListener('touchstart', () => null, {
      passive: true,
    })
  }, [])

  return (
    <>
      <Head>
        <title>Policy Dialogue | กระบวนการหารือเชิงนโยบาย</title>
      </Head>
      <main className={`relative w-full h-full bg-secondary ${process.env.NODE_ENV === 'development' ? 'debug-screens' : ''}`}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}

export default MyApp
