import Footer from '@/components/Layout/Footer'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React, { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

const Navbar = dynamic(() => import('@/components/Layout/Navbar'))

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
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  )
}

export default MyApp
