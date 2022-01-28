import graphcms from '@/libs/graphcms'
import { Article } from '@types'
import { gql } from 'graphql-request'
import Header from '@/components/Layout/Header'

const ARTICLES_QUERY = gql`
  query ArticlesQuery {
    articles {
      id
      title
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
            <h1 className="text-4xl font-semibold lg:text-6xl">บทความจาก Rise Impact</h1>
          </div>
          <div className="w-full h-full absolute bottom-0 right-0 triangle-bottom-right mix-blend-screen opacity-50 from-[#191919] to-[#242054] bg-gradient-to-b" />
        </section>

        <section className="relative h-full space-y-6 bg-white lg:space-y-12">
          <div className="grid max-w-6xl grid-cols-1 gap-12 py-12 mx-auto lg:gap-16 lg:py-32 md:grid-cols-2">
            <div className="flex flex-col col-span-1 px-6 lg:px-12 text-body">
              <div className="space-y-2">
                <h2 className="text-4xl font-semibold sm:text-5xl">HELLO!</h2>
                <h2 className="text-4xl font-semibold sm:text-5xl">GRAPHCMS</h2>
              </div>
            </div>
            <div className="relative col-span-1 px-6 sm:px-12">
              <p className="leading-relaxed lg:text-lg max-w-prose font-body">
                พวกเราเป็นองค์กรเล็กที่ไม่ขึ้นกับใคร และมองว่าองค์กร ของเราจะช่วยกระตุ้นให้เกิดการเปลี่ยนแปลงเชิงระบบ โดยมุ่งใช้ความเป็นองค์กรที่ยืดหยุ่นนี้
                เชื่อมช่องว่างทั้งหลาย ในระบบนิเวศของนวัตกรรมทางสังคม เพื่อสร้างผลกระทบเชิงบวกให้มากขึ้นกว่าเดิม
              </p>
            </div>
          </div>
        </section>
        <section className="relative h-full space-y-6 bg-secondary lg:space-y-12">
          <div className="max-w-6xl px-6 py-12 mx-auto lg:px-12">
            <div className="space-y-12">
              <div className="mx-auto">
                <h2 className="text-3xl font-bold text-center text-white lg:text-6xl">Title Here</h2>
              </div>
              <ul role="list" className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0">
                {articles.map(({ id, title, url, createdAt, coverImage }) => (
                  <li key={id} className="flex flex-col w-full p-6 space-y-6 overflow-hidden bg-white shadow-md">
                    <img className="object-contain w-full h-[300px] flex-shrink-0" src={coverImage.url} alt={title} />
                    <div className="space-y-2">
                      <div className="space-y-1 font-body">
                        <h3 className="text-lg font-bold leading-6 text-center">{title}</h3>
                        <a href={url} className="justify-center text-center text-primary hover:text-black">
                          อ่านต่อ
                        </a>
                        <p className="text-xs">
                          {new Intl.DateTimeFormat('th', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(createdAt))}
                        </p>
                      </div>
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
