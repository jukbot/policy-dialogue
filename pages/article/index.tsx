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
        <section className="relative h-[75vh] bg-center mix-blend-screen bg-cover bg-no-repeat grid items-center bg-about-pattern-mobile sm:bg-article-hero-pattern">
          <div className="flex justify-center pt-24 text-white lg:justify-start lg:ml-48">
            <h1 className="text-4xl font-semibold lg:text-5xl">ข่าวสารและบทความ</h1>
          </div>
        </section>
        <section className="relative h-full space-y-6 bg-[#ede8db] lg:space-y-12">
          <div className="max-w-6xl px-6 py-12 mx-auto lg:px-12">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold">ข่าวสาร</h2>
                <p className="text-xl">News</p>
              </div>
              <div className="bg-white h-[400px] w-full overflow-hidden">
                <img src="https://media.graphcms.com/ncAYdZvTdS9R7p7utvbY" className="w-full h-full object-top object-cover" />
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl font-bold">บทความ</h2>
                <p className="text-xl">Articles</p>
              </div>
              <ul role="list" className="mx-auto space-y-8 lg:space-y-16 sm:grid sm:grid-cols-2 sm:gap-8 sm:space-y-0">
                {articles.map(({ id, title, url, coverImage, description }) => (
                  <li key={id} className="flex flex-col w-full overflow-hidden bg-white">
                    <img className="object-top object-cover w-full h-[240px] flex-shrink-0 bg-[#2b2b2b]" src={coverImage.url} alt={title} />
                    <div className="flex flex-col py-8 px-12 h-full">
                      <div className="space-y-6 font-body mb-12">
                        <h3 className="text-lg font-bold leading-6 line-clamp-2">{title}</h3>
                        <p className="text-sm line-clamp-4 text-[#707070]">{description}</p>
                      </div>
                      <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="w-20 text-center p-1 mt-auto text-sm justify-center bg-[#a8a8a8] hover:bg-primary text-white hover:text-black"
                      >
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
