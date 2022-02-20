import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'

const Pagination = () => {
  return (
    <nav className="flex items-center justify-center">
      <div className="items-center inline-flex text-[#707070] space-x-4">
        <ChevronDoubleLeftIcon className="w-6 h-6 cursor-pointer hover:text-primary" role="button" />
        <ChevronLeftIcon className="w-6 h-6 cursor-pointer hover:text-primary" role="button" />
        <div className="space-x-4 pt-1 font-medium">
          <a href="?page=1" className="w-8 h-8 rounded-full bg-[#707070] text-white inline-flex justify-center items-center" aria-current="page">
            1
          </a>
        </div>
        <ChevronRightIcon className="w-6 h-6 cursor-pointer hover:text-primary" role="button" />
        <ChevronDoubleRightIcon className="w-6 h-6 cursor-pointer hover:text-primary" role="button" />
      </div>
    </nav>
  )
}

export default Pagination
