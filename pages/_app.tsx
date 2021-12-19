import Footer from '@/components/Layout/Footer'
import DownloadModal from '@/components/Modal/DownloadModal'
import { isModalOpenAtom } from '@/stores/global'
import '@/styles/globals.css'
import { useAtom } from 'jotai'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Script from 'next/script'
import React, { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

const Navbar = dynamic(() => import('@/components/Layout/Navbar'))

function MyApp({ Component, pageProps }: AppProps) {
  const [modal] = useAtom(isModalOpenAtom)

  useEffect(() => {
    document.addEventListener('touchstart', () => null, {
      passive: true,
    })
  }, [])

  // useEffect(() => {
  //   const handleRouteChange = (url: string) => {
  //     // Log beacon view to Google Analytics
  //     pageView(url)
  //   }
  //   events.on('routeChangeComplete', handleRouteChange)
  //   return () => {
  //     events.off('routeChangeComplete', handleRouteChange)
  //   }
  // }, [events])

  return (
    <>
      <Head>
        <title>Policy Dialogue | กระบวนการหารือเชิงนโยบาย</title>
      </Head>
      {/* Google Analytics */}
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env['NEXT_PUBLIC_GTAG_ID']}`} strategy="afterInteractive" />
      <Script id="ga-script" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env['NEXT_PUBLIC_GTAG_ID']}');
        `}
      </Script>
      <main className={`relative w-full h-full bg-secondary ${process.env.NODE_ENV === 'development' ? 'debug-screens' : ''}`}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
      <Toaster position="bottom-center" reverseOrder={false} />
      {modal.open ? <DownloadModal isOpen={modal.open} type={modal.type} fileName={modal.link} /> : null}
    </>
  )
}

export default MyApp
