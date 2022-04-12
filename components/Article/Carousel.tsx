import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { Banner } from '@types'
import { useRef, useState } from 'react'
import Slider from 'react-slick'

const Carousel = ({ data }: { data: Banner[] }) => {
  const sliderRef = useRef<any>(null)
  const [index, setIndex] = useState<number>(0)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    cssEase: 'linear',
    pauseOnDotsHover: true,
    pauseOnHover: true,
    appendDots: (dots: any) => (
      <div
        style={{
          padding: '10px',
        }}
      >
        <ul className="absolute m-0 -translate-x-1/2 bottom-6 left-1/2">{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div className={`w-4 h-4 rounded-full ${i === index ? 'bg-primary' : 'bg-white shadow-inner transition hover:bg-opacity-75'}`} />
    ),
  }

  return (
    <section className="relative w-full h-full bg-[#2B2B2B] ">
      <Slider ref={sliderRef} {...settings} beforeChange={(_: any, index: number) => setIndex(index)}>
        {data.map((banner) => (
          <>
            <div key={banner.id} className="h-[280px] sm:h-[400px] w-full overflow-hidden relative">
              {banner.image?.url && (
                <img src={banner.image?.url} loading="eager" alt={banner.title} className="w-full h-full object-top object-cover brightness-90 bg-[#707070]" />
              )}
              <div className="absolute hidden space-y-4 -translate-y-1/2 -translate-x-1/3 top-1/2 left-2/3 md:block">
                <h2 className="relative text-2xl font-bold leading-normal text-white line-clamp-3">{banner.title}</h2>
                <a
                  href={banner.url}
                  target="_blank"
                  className="inline-block py-2 px-4 bg-primary transition hover:bg-[#707070] text-white font-bold"
                  rel="noreferrer"
                >
                  อ่านต่อ &gt;
                </a>
              </div>
            </div>
            <div className="block md:hidden px-6 py-12 bg-[#2b2b2b]">
              <div className="max-w-sm mx-auto space-y-6">
                <h2 className="relative text-2xl font-bold leading-normal text-white line-clamp-3">{banner.title}</h2>
                <a
                  href={banner.url}
                  target="_blank"
                  className="inline-block py-2 px-4 bg-primary transition hover:bg-[#707070] text-white font-bold"
                  rel="noreferrer"
                >
                  อ่านต่อ &gt;
                </a>
              </div>
            </div>
          </>
        ))}
      </Slider>

      <button
        onClick={() => sliderRef?.current?.slickPrev()}
        className="absolute left-0 transform top-1/4 -translate-y-1/3 sm:top-1/2 sm:left-6 sm:-translate-y-1/2"
      >
        <ChevronLeftIcon role="button" className="w-12 h-12 text-white transition hover:opacity-75" />
      </button>
      <button
        onClick={() => sliderRef?.current?.slickNext()}
        className="absolute right-0 transform top-1/4 -translate-y-1/3 sm:top-1/2 sm:right-6 sm:-translate-y-1/2"
      >
        <ChevronRightIcon role="button" className="w-12 h-12 text-white transition hover:opacity-75" />
      </button>
    </section>
  )
}

export default Carousel
