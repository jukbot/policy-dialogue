import Footer from '@/components/Layout/Footer'
import DownloadModal from '@/components/Modal/DownloadModal'
import { isModalOpenAtom } from '@/stores/global'
import '@/styles/globals.css'
import { useAtom } from 'jotai'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import Head from 'next/head'
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
      {modal.open && modal.type === 'download' ? <DownloadModal isOpen={modal.open} fileName={modal.link} /> : null}
    </>
  )
}

export default MyApp
