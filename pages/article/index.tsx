import graphcms from '@/libs/graphcms'
import { Article, ArticlesConnection, Banner, Tag } from '@types'
import { gql } from 'graphql-request'
import Header from '@/components/Layout/Header'
import Carousel from '@/components/Article/Carousel'
import Pagination from '@/components/Article/Pagination'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useMemo, useState } from 'react'
import TagList from '@/components/Article/Tag'

const ARTICLES_QUERY_BY_TAG = gql`
  query ArticlesQuery($tag: [String!]) {
    articles(orderBy: createdAt_DESC, where: { tags_some: { title_in: $tag } }) {
      id
      title
      description
      url
      createdAt
      tags {
        title
      }
      coverImage {
        url
      }
    }
  }
`
interface Props {
  articlesConnection: ArticlesConnection
  articles: Article[]
  banners: Banner[]
  tags: Tag[]
}

const ARTICLES_QUERY = gql`
  query ArticlesQuery {
    articlesConnection {
      pageInfo {
        pageSize
      }
    }
    articles(orderBy: createdAt_DESC) {
      id
      title
      description
      url
      createdAt
      tags {
        title
      }
      coverImage {
        url
      }
    }
    banners(orderBy: createdAt_DESC) {
      id
      title
      url
      image {
        url
      }
    }
    tags {
      title
    }
  }
`

const ArticlesPage = ({ articlesConnection, articles, banners, tags }: Props) => {
  const { query, asPath } = useRouter()
  const currentPage = Number(query.page) || 1
  const itemPerPage = 8
  const articlesData = useMemo(() => articles.slice((currentPage - 1) * itemPerPage, currentPage * itemPerPage), [articles, currentPage])
  const [currentArticles, setCurrentArticles] = useState<Article[]>(articlesData)
  const [currentTag, setCurrentTag] = useState<string>('')

  const queryArticles = useCallback(
    async (currentTag: string) => {
      if (currentTag === 'all') {
        setCurrentTag('')
        setCurrentArticles(articlesData)
        return
      }
      setCurrentTag(currentTag)
      const res = await graphcms.request(ARTICLES_QUERY_BY_TAG, { tag: [currentTag] })
      setCurrentArticles(res.articles)
    },
    [articlesData]
  )

  useEffect(() => {
    console.log(setCurrentTag(''))
    if (asPath?.match(/#([a-z0-9%]+)/gi)) {
      queryArticles(decodeURI(asPath.split('#')[1]))
    } else {
      setCurrentTag('')
      setCurrentArticles(articlesData)
    }
  }, [queryArticles, asPath, articlesData])

  return (
    <>
      <Header title="????????????????????????????????????????????????" description="??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ????????????????????????????????????????????????????????????????????????" />
      <main className="relative">
        <section className="relative h-[75vh] 2xl:h-[60vh] bg-center mix-blend-screen bg-cover 2xl:bg-height-100 bg-no-repeat grid items-center bg-article-hero-pattern-mobile md:bg-article-hero-pattern">
          <div className="flex justify-center pt-24 text-white lg:justify-start lg:ml-56">
            <h1 className="text-4xl font-semibold lg:text-5xl">????????????????????????????????????????????????</h1>
          </div>
        </section>
        <section className="relative h-full space-y-6 bg-[#ede8db] lg:space-y-12">
          <div className="max-w-6xl py-12 mx-auto">
            <div className="space-y-8 sm:px-6 lg:px-12">
              <div className="lg:py-12">
                <Carousel data={banners} />
              </div>
              <TagList tags={tags} currentTag={currentTag} />
              <ul role="list" className="px-6 mx-auto space-y-8 sm:px-0 sm:grid sm:grid-cols-2 sm:gap-8 sm:space-y-0">
                {currentArticles.map(({ id, title, url, coverImage, description }) => (
                  <li key={id} className="flex flex-col w-full overflow-hidden transition ease-in bg-white">
                    <img className="object-top object-cover w-full h-[240px] flex-shrink-0 bg-[#2b2b2b]" loading="eager" src={coverImage?.url} alt={title} />
                    <div className="flex flex-col h-full p-6 sm:px-12 sm:py-8">
                      <div className="mb-12 space-y-4">
                        <h3 className="text-lg font-bold lg:text-xl line-clamp-2">{title}</h3>
                        <p className="text-sm font-body leading-relaxed line-clamp-5 text-[#707070]">{description.substring(0, 320)}</p>
                      </div>
                      <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="w-20 text-center p-1 mt-auto text-sm justify-center bg-[#707070] hover:bg-primary text-white transition"
                      >
                        ????????????????????? &gt;
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
              {currentArticles.length === 0 && (
                <div className="py-24">
                  <h3 className="text-2xl font-bold text-center">?????????????????????????????????</h3>
                </div>
              )}
              <div className={`${articles.length <= 8 && 'hidden'} lg:py-12`}>
                <Pagination total={articlesConnection.pageInfo.pageSize} currentPage={currentPage} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const { articles, banners, articlesConnection, tags }: Props = await graphcms.request(ARTICLES_QUERY)

  return {
    props: {
      articlesConnection,
      articles,
      banners,
      tags,
    },
    revalidate: 10,
  }
}

export default ArticlesPage
