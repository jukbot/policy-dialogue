import Footer from '@/components/Layout/Footer'
import DownloadModal from '@/components/Modal/DownloadModal'
import { isModalOpenAtom } from '@/stores/global'
import '@/styles/globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { setUserEmail } from '@/utils/userAnalytics'
import { useAtom, Provider as JotaiProvider } from 'jotai'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Script from 'next/script'
import React, { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

const Navbar = dynamic(() => import('@/components/Layout/Navbar'))

export default function MyApp({ Component, pageProps }: AppProps) {
  const [modal] = useAtom(isModalOpenAtom)

  useEffect(() => {
    // Make hover support on touchscreen display
    document.addEventListener('touchstart', () => null, {
      passive: true,
    })

    const email = localStorage.getItem('policy-dialogue:email') || null
    if (email) {
      setUserEmail(email)
    }
  }, [])

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
      <JotaiProvider>
        <main className={`relative w-full min-h-full bg-secondary ${process.env.NODE_ENV === 'development' ? 'debug-screens' : ''}`}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </main>
        <Toaster position="bottom-center" reverseOrder={false} />
        {modal.open ? <DownloadModal isOpen={modal.open} type={modal.type} fileName={modal.link} /> : null}
      </JotaiProvider>
    </>
  )
}
