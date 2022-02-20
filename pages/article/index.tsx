import graphcms from '@/libs/graphcms'
import { Article, ArticlesConnection, Banner } from '@types'
import { gql } from 'graphql-request'
import Header from '@/components/Layout/Header'
import Carousel from '@/components/Archive/Carousel'
import Pagination from '@/components/Archive/Pagination'

const ARTICLES_QUERY = gql`
  query ArticlesQuery {
    articlesConnection {
      pageInfo {
        pageSize
      }
    }
    articles(orderBy: publishedAt_DESC) {
      id
      title
      description
      url
      createdAt
      coverImage {
        url
      }
    }
    banners(orderBy: publishedAt_DESC) {
      id
      title
      url
      image {
        url
      }
    }
  }
`

const ArticlesPage = ({ articlesConnection, articles, banners }: { articlesConnection: ArticlesConnection; articles: Article[]; banners: Banner[] }) => {
  return (
    <>
      <Header title="บทความของเรา" description="พวกเราเป็นองค์กรที่จะช่วยกระตุ้นให้เกิดการเปลี่ยนแปลงเชิงระบบ เพื่อสร้างผลกระทบเชิงบวก" />
      <main className="relative">
        <section className="relative h-[75vh] bg-top mix-blend-screen bg-cover 2xl:bg-height-100 bg-no-repeat grid items-center bg-about-pattern-mobile md:bg-article-hero-pattern">
          <div className="flex justify-center pt-24 text-white lg:justify-start lg:ml-56">
            <h1 className="text-4xl font-semibold lg:text-5xl">ข่าวสารและบทความ</h1>
          </div>
        </section>
        <section className="relative h-full space-y-6 bg-[#ede8db] lg:space-y-12">
          <div className="max-w-6xl py-12 mx-auto">
            <div className="space-y-8 sm:px-6 lg:px-12">
              <div className="py-12">
                <Carousel data={banners} />
              </div>
              <ul role="list" className="mx-auto px-6 space-y-8 sm:px-0 sm:grid sm:grid-cols-2 sm:gap-8 sm:space-y-0">
                {articles.map(({ id, title, url, coverImage, description }) => (
                  <li key={id} className="flex flex-col w-full overflow-hidden bg-white">
                    <img className="object-top object-cover w-full h-[240px] flex-shrink-0 bg-[#2b2b2b]" src={coverImage.url} alt={title} />
                    <div className="flex flex-col py-8 px-12 h-full">
                      <div className="space-y-6 mb-12">
                        <h3 className="text-lg lg:text-xl font-bold line-clamp-2">{title}</h3>
                        <p className="text-sm font-body line-clamp-4 text-[#707070]">{description}</p>
                      </div>
                      <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="w-20 text-center p-1 mt-auto text-sm justify-center bg-[#a8a8a8] hover:bg-primary text-white"
                      >
                        อ่านต่อ &gt;
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="py-12">
                <Pagination total={articlesConnection.pageInfo.pageSize} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const { articles, banners, articlesConnection }: { articles: Article[]; banners: Banner[]; articlesConnection: ArticlesConnection } = await graphcms.request(
    ARTICLES_QUERY
  )

  return {
    props: {
      articlesConnection,
      articles,
      banners,
    },
    revalidate: 60,
  }
}

export default ArticlesPage
