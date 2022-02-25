import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { memo, useMemo } from 'react'

const itemPerPage = 8

interface Props {
  total: number
  currentPage: number
}
const shouldRerender = (prevProps: Props, nextProps: Props) => {
  return prevProps.currentPage === nextProps.currentPage
}

const Pagination = ({ total, currentPage }: Props) => {
  const totalPages = useMemo(() => Math.ceil(total / itemPerPage), [total])
  const pages = useMemo(() => Array.from({ length: totalPages }, (_, i) => i + 1), [totalPages])

  return (
    <nav className="flex items-center justify-center">
      <div className="items-center inline-flex text-[#707070] space-x-4">
        <Link href={`/article?page=1#article`}>
          <a>
            <ChevronDoubleLeftIcon className="w-6 h-6 cursor-pointer hover:text-primary" />
          </a>
        </Link>
        <Link href={`?page=${currentPage >= 1 ? 1 : currentPage - 1}#article`}>
          <a>
            <ChevronLeftIcon className="w-6 h-6 cursor-pointer hover:text-primary" />{' '}
          </a>
        </Link>
        <div className="pt-1 space-x-4 font-medium">
          {pages.map((page) => (
            <Link key={page} href={`?page=${page}#article`} aria-current={page === currentPage ? 'page' : undefined}>
              <a
                className={`w-8 h-8 font-body ${
                  page === currentPage ? 'rounded-full bg-[#707070] text-white' : 'hover:text-primary'
                } inline-flex justify-center items-center`}
              >
                {page}
              </a>
            </Link>
          ))}
        </div>
        <Link href={`?page=${currentPage >= pages[pages.length - 1] ? pages[pages.length - 1] : currentPage + 1}#article`}>
          <a>
            <ChevronRightIcon className="w-6 h-6 cursor-pointer hover:text-primary" />
          </a>
        </Link>
        <Link href={`?page=${pages[pages.length - 1]}#article`}>
          <a>
            <ChevronDoubleRightIcon className="w-6 h-6 cursor-pointer hover:text-primary" />
          </a>
        </Link>
      </div>
    </nav>
  )
}

export default memo(Pagination, shouldRerender)
