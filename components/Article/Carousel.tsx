import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { Banner } from '@types'
import { useRef, useState } from 'react'
import Slider from 'react-slick'

const Carousel = ({ data }: { data: Banner[] }) => {
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
    customPaging: (i: number) => <div className={`w-4 h-4 rounded-full ${i === index ? 'bg-copper' : 'bg-white shadow-inner hover:bg-opacity-75'}`} />,
  }

  return (
    <section className="relative w-full">
      <Slider ref={sliderRef} {...settings} afterChange={(index) => setIndex(index)}>
        {data.map((banner) => (
          <div key={banner.id} className="bg-white h-[400px] w-full overflow-hidden relative">
            <img src={banner.image.url} loading="eager" alt={banner.title} className="w-full h-full object-top object-cover brightness-90" />
            <div className="absolute -translate-y-1/2 -translate-x-1/3 top-1/2 left-2/3 space-y-4 hidden md:block">
              <h2 className="relative leading-normal font-bold text-2xl text-white line-clamp-3">{banner.title}</h2>
              <a href={banner.url} target="_blank" className="inline-block py-2 px-4 bg-copper hover:bg-[#707070] text-white font-bold" rel="noreferrer">
                อ่านต่อ &gt;
              </a>
            </div>
          </div>
        ))}
      </Slider>

      <button onClick={() => sliderRef?.current?.slickPrev()} className="absolute top-1/2 left-0 sm:left-6 lg:left-8 transform -translate-y-1/2">
        <ChevronLeftIcon className="h-12 w-12 text-white hover:opacity-75" />
      </button>
      <button onClick={() => sliderRef?.current?.slickNext()} className="absolute top-1/2 right-0 sm:right-6 lg:right-8 transform -translate-y-1/2">
        <ChevronRightIcon className="h-12 w-12 text-white hover:opacity-75" />
      </button>
    </section>
  )
}

export default Carousel
