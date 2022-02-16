import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { useRef, useState } from 'react'
import Slider from 'react-slick'

const Carousel = () => {
  const sliderRef = useRef<Slider>(null)
  const [index, setIndex] = useState<number>(0)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots: any) => (
      <div
        style={{
          bottom: 1,
          padding: '10px',
        }}
      >
        <ul className="m-0">{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => <div className={`w-4 h-4 rounded-full ${i === index ? 'bg-primary' : 'bg-white hover:bg-opacity-50'}`} />,
  }

  return (
    <section className="sm:px-6 lg:px-12 relative w-full">
      <Slider ref={sliderRef} {...settings} afterChange={(index) => setIndex(index)}>
        <div className="bg-white h-[400px] w-full overflow-hidden">
          <img src="https://media.graphcms.com/ncAYdZvTdS9R7p7utvbY" className="w-full h-full object-center object-cover" />
        </div>
        <div className="bg-white h-[400px] w-full overflow-hidden">
          <img src="https://media.graphcms.com/tDy18IDERpOQYfC6Tv4w" className="w-full h-full object-center object-cover" />
        </div>
        <div className="bg-white h-[400px] w-full overflow-hidden">
          <img src="https://media.graphcms.com/w66ySXNURUigR16JwVus" className="w-full h-full object-center object-cover" />
        </div>
        <div className="bg-white h-[400px] w-full overflow-hidden">
          <img src="https://media.graphcms.com/XCkjRf7mTbyFhnufbktl" className="w-full h-full object-center object-cover" />
        </div>
      </Slider>

      <button onClick={() => sliderRef?.current?.slickPrev()} className="absolute top-1/2 left-0 sm:left-6 lg:left-12 transform -translate-y-1/2">
        <ChevronLeftIcon className="h-12 w-12 text-white hover:opacity-75" />
      </button>
      <button onClick={() => sliderRef?.current?.slickNext()} className="absolute top-1/2 right-0 sm:right-6 lg:right-12 transform -translate-y-1/2">
        <ChevronRightIcon className="h-12 w-12 text-white hover:opacity-75" />
      </button>
    </section>
  )
}

export default Carousel
