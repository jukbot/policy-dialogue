import graphcms from '@/libs/graphcms'
import { Article } from '@types'
import { gql } from 'graphql-request'
import Header from '@/components/Layout/Header'

const ARTICLES_QUERY = gql`
  query ArticlesQuery {
    articles {
      id
      title
      description
      url
      createdAt
      coverImage {
        url
      }
    }
  }
`

const ArticlesPage = ({ articles }: { articles: Article[] }) => {
  return (
    <>
      <Header title="บทความของเรา" description="พวกเราเป็นองค์กรที่จะช่วยกระตุ้นให้เกิดการเปลี่ยนแปลงเชิงระบบ เพื่อสร้างผลกระทบเชิงบวก" />
      <main className="relative">
        <div className="absolute top-0 right-0 w-full h-full bg-no-repeat bg-contain opacity-75 bg-about-hero-shape" />
        <section className="relative h-[75vh] bg-left-bottom bg-cover sm:bg-contain bg-no-repeat grid items-center bg-about-pattern-mobile sm:bg-about-pattern">
          <div className="flex justify-center pt-24 text-white lg:justify-start lg:ml-48">
            <h1 className="text-4xl font-semibold lg:text-5xl">ข่าวสารและบทความ</h1>
          </div>
          <div className="w-full h-full absolute bottom-0 right-0 triangle-bottom-right mix-blend-screen opacity-50 from-[#191919] to-[#242054] bg-gradient-to-b" />
        </section>
        <section className="relative h-full space-y-6 bg-[#ede8db] lg:space-y-12">
          <div className="max-w-6xl px-6 py-12 mx-auto lg:px-12">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold">ข่าวสาร</h2>
                <p className="text-xl">News</p>
              </div>
              <div className="bg-white h-[400px] w-full">Carousell here</div>
              <div className="space-y-4">
                <h2 className="text-4xl font-bold">บทความ</h2>
                <p className="text-xl">Articles</p>
              </div>
              <ul role="list" className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-8 sm:space-y-0">
                {articles.map(({ id, title, url, coverImage, description }) => (
                  <li key={id} className="flex flex-col w-full overflow-hidden bg-white">
                    <img className="object-cover w-full h-[240px] flex-shrink-0 bg-[#2b2b2b]" src={coverImage.url} alt={title} />
                    <div className="flex flex-col space-y-6 py-8 px-12">
                      <div className="space-y-6 font-body mb-12">
                        <h3 className="text-lg font-bold leading-6">{title}</h3>
                        <p className="text-sm">{description}</p>
                      </div>
                      <a href={url} className="w-20 text-center p-1 mt-auto text-sm justify-center bg-[#a8a8a8] hover:bg-primary text-white hover:text-black">
                        อ่านต่อ &gt;
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const { articles }: { articles: Article[] } = await graphcms.request(ARTICLES_QUERY)

  return {
    props: {
      articles,
    },
    revalidate: 60,
  }
}

export default ArticlesPage
