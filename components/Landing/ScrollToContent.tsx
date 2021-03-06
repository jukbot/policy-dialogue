import { ArrowDownIcon } from '@heroicons/react/solid'

const ScrollToContent = (): JSX.Element => {
  return (
    <div className="absolute flex justify-center w-full left-0 -top-24">
      <div className="p-2 border-2 border-dashed group transform-gpu transition-all border-primary rounded-[100%] hover:border hover:scale-125 w-40 h-40">
        <a href="#learnmore">
          <div className="flex flex-col items-center justify-center h-full pt-4 space-y-2 text-center text-white bg-primary rounded-[100%] p-2">
            <p className="text-sm sm:text-base font-body">
              รู้จักกับ
              <br /> โพลิซี ไดอะล็อก
            </p>
            <ArrowDownIcon className="w-5 h-5 group-hover:animate-bounce group-hover:translate-y-2" />
          </div>
        </a>
      </div>
    </div>
  )
}

export default ScrollToContent
