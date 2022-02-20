import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { useMemo } from 'react'

const itemPerPage = 8

const Pagination = ({ total }: { total: number }) => {
  const totalPages = useMemo(() => Math.ceil(total / itemPerPage), [total])
  const pages = useMemo(() => Array.from({ length: totalPages }, (_, i) => i + 1), [totalPages])
  const currentPage = 1
  return (
    <nav className="flex items-center justify-center">
      <div className="items-center inline-flex text-[#707070] space-x-4">
        <a href={`?page=1`}>
          <ChevronDoubleLeftIcon className="w-6 h-6 cursor-pointer hover:text-primary" role="button" />
        </a>
        <a href={`?page=${currentPage >= 1 ? 1 : currentPage - 1}`}>
          <ChevronLeftIcon className="w-6 h-6 cursor-pointer hover:text-primary" role="button" />
        </a>
        <div className="space-x-4 pt-1 font-medium">
          {pages.map((page) => (
            <a
              key={page}
              href={`?page=${page}`}
              className="w-8 h-8 rounded-full bg-[#707070] text-white inline-flex justify-center items-center"
              aria-current="page"
            >
              {page}
            </a>
          ))}
        </div>
        <a href={`?page=${currentPage >= pages[pages.length - 1] ? pages[pages.length - 1] : currentPage + 1}`}>
          <ChevronRightIcon className="w-6 h-6 cursor-pointer hover:text-primary" role="button" />
        </a>
        <a href={`?page=${pages[pages.length - 1]}`}>
          <ChevronDoubleRightIcon className="w-6 h-6 cursor-pointer hover:text-primary" role="button" />
        </a>
      </div>
    </nav>
  )
}

export default Pagination
