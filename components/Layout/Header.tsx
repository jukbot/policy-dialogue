import Meta from '@/data/meta.json'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

interface Props {
  title?: string
  description?: string
  image?: string | null
  width?: number
  height?: number
}

const Header = (props: Props): JSX.Element => {
  const { asPath, locale } = useRouter()
  const title: string = useMemo(() => (props?.title ? `${props?.title}` : Meta.shortName), [props?.title])
  const description: string = useMemo(() => props.description ?? Meta.description, [props?.description])
  const baseUrl = process.env['NEXT_PUBLIC_BASE_URL'] ?? 'https://policy-dialogue.riseimpact.co/'
  const image = props?.image ?? `${process.env['NEXT_PUBLIC_BASE_URL']}/images/logo/policy-dialogue.png`
  const themeColor = '#2b2b2b'

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1, viewport-fit=cover, width=device-width" />
      <meta name="fragment" content="!" />
      <meta name="category" content="Hospital" />
      <meta name="theme-color" content={themeColor} />
      {/* Page SEO */}
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="author" content={Meta.author} />
      <meta property="fb:app_id" content={Meta.fbAppId} />
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={Meta.title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content={locale ?? 'en'} />
      <meta property="og:url" content={`${baseUrl}${asPath}`} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:image:width" content={String(props?.width) ?? '1200'} />
      <meta property="og:image:height" content={String(props?.width) ?? '630'} />
      {/* Twitter card */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`${baseUrl}${asPath}`} />
      <meta property="twitter:site" content={Meta.twitter} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      {/* Canonical */}
      <link rel="canonical" href={`${baseUrl}${asPath}`} />
    </Head>
  )
}

export default Header
