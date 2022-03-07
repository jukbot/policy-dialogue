import AboutRiseImpact from '@/components/Footer/AboutRiseImpact'
import PolicyContent from '@/components/Landing/PolicyContent'
import Header from '@/components/Layout/Header'
import Meta from '@/data/meta.json'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { useIntersection } from 'react-use'
import QuestionMark from '../components/Icon/QuestionMark'
import PolicyCircle from '../components/Landing/PolicyCircle'
import ScrollToContent from '../components/Landing/ScrollToContent'
import DesignPolicy from '/public/image/landing/designPolicy.webp'
import FacebookBanner from '/public/image/opengraph/facebook.jpg'

const intersectopnOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 1,
}

const Home: NextPage = () => {
  const learnmoreRef = useRef(null)
  const { ref, inView } = useInView({
    trackVisibility: true,
    delay: 100,
    triggerOnce: true,
  })
  const intersection = useIntersection(learnmoreRef, intersectopnOptions)

  return (
    <>
      <Header
        title="Policy Dialogue | กระบวนการหารือเชิงนโยบาย"
        description="นโยบายที่ดี สังคมต้องร่วมกันออกแบบ"
        image={`${Meta.baseUrl}${FacebookBanner.src}`}
        width={FacebookBanner.width}
        height={FacebookBanner.height}
      />
      <div className="relative">
        <main className="relative overflow-hidden">
          <div className="absolute top-0 w-full h-screen bg-fixed bg-no-repeat bg-contain sm:bg-right sm:bg-cover mix-blend-screen bg-hero-circle-mobile sm:bg-hero-circle"></div>
          <section
            className={`${
              intersection && intersection.intersectionRatio < 1 ? '' : ''
            } relative grid h-[75vh] xl:h-[90vh] bg-top bg-fixed sm:bg-cover filter bg-no-repeat transition backdrop-filter place-content-center bg-hero-pattern-mobile lg:bg-hero-pattern`}
          >
            <div className="pt-24 space-y-8 text-center text-white">
              <h1 className="text-5xl font-semibold sm:text-7xl">Policy Dialogue</h1>
              <h2 className="text-xl font-body ">
                โพลิซี ไดอะล็อก
                <br />
                กระบวนการหารือเชิงนโยบาย
              </h2>
            </div>
          </section>
          <section className="relative h-full bg-white">
            <ScrollToContent />
            <div ref={learnmoreRef} className="grid grid-cols-1 gap-6 pt-32 md:grid-cols-2" id="learnmore">
              <div className="flex flex-col col-span-1 px-6 pt-4 space-y-4 lg:pt-16 lg:px-24 text-body">
                <div className="space-y-2 whitespace-nowrap">
                  <h2 className="text-3xl font-semibold lg:text-5xl">นโยบายที่ดี สังคมต้อง</h2>
                  <h2 className="text-3xl font-semibold lg:text-5xl">ร่วมกันออกแบบ</h2>
                </div>
                <p className="lg:text-lg font-body">
                  สร้างการมีส่วนร่วมที่เปิดกว้าง เปิดใจรับฟังความแตกต่าง ให้ผู้คนได้แลกเปลี่ยนความคิดเห็นบนฐานความรู้และประสบการณ์ เพื่อร่วมออกแบบนโยบาย ให้เป็น
                  ‘นโยบาย’ ของคนในสังคมอย่างแท้จริง
                </p>
              </div>
              <div className="relative col-span-1">
                <Image src={DesignPolicy} priority height="640" width="1024" className="w-full" alt="about-policy-dialogue" />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-12 pt-12 md:grid-cols-2">
              <div className="grid grid-cols-1 col-span-1 gap-8 px-6 mx-auto md:grid-cols-2 lg:px-12 lg:gap-y-12 lg:gap-x-16 ">
                <PolicyCircle
                  text="น้ำประปาดื่มได้"
                  position="-translate-x-4 -translate-y-4"
                  bgHover="group-hover:bg-clean-water"
                  bgColor="bg-[#6badcb]"
                  borderColor="border-[#6badcb]"
                  className="hidden md:block"
                />
                <PolicyCircle
                  text="การศึกษาขั้นพื้นฐาน"
                  position="-translate-x-4 translate-y-4"
                  bgHover="group-hover:bg-education"
                  bgColor="bg-[#cc79a7]"
                  borderColor="border-[#cc79a7]"
                  className="hidden md:block"
                />
                <PolicyCircle
                  text="รัฐสวัสดิการถ้วนหน้า"
                  position="-translate-x-4 translate-y-4"
                  bgHover="group-hover:bg-welfare"
                  bgColor="bg-[#daa13d]"
                  borderColor="border-[#daa13d]"
                  className="hidden md:block"
                />
                <PolicyCircle
                  text="สวนสาธารณะพื้นที่ออกกำลังกาย"
                  position="translate-x-4 -translate-y-4"
                  bgHover="group-hover:bg-public-park"
                  bgColor="bg-[#36723b]"
                  borderColor="border-[#36723b]"
                  className="block md:hidden"
                />
                <PolicyCircle
                  text="ขนส่งมวลชนเชื่อมต่อ"
                  position="-translate-x-4 translate-y-4"
                  bgHover="group-hover:bg-public-transport"
                  bgColor="bg-[#daa13d]"
                  borderColor="border-[#daa13d]"
                  className="block md:hidden"
                />
                <PolicyCircle
                  text="อากาศบริสุทธิ์ปลอดฝุ่นควัน"
                  position="translate-x-4 translate-y-4"
                  bgHover="group-hover:bg-environment"
                  bgColor="bg-[#6badcb]"
                  borderColor="border-[#6badcb]"
                />
                <PolicyCircle
                  text="สวัสดิการค่ารักษาพยาบาล"
                  position="translate-x-4 translate-y-4"
                  bgHover="group-hover:bg-healthcare"
                  bgColor="bg-[#cc79a7]"
                  borderColor="border-[#cc79a7]"
                />
                <PolicyCircle
                  text=""
                  position="hidden"
                  bgColor="bg-secondary"
                  borderColor="border-transparent"
                  className="absolute hidden -bottom-8 md:block"
                />
              </div>
              <div className="flex flex-col justify-between col-span-1 p-6 space-y-4 lg:py-16 lg:px-12 text-body">
                <div className="space-y-2">
                  <h2 className="text-3xl font-semibold lg:text-5xl">เพราะนโยบาย</h2>
                  <h2 className="text-3xl font-semibold lg:text-5xl">เกี่ยวข้องกับทุกมิติใน</h2>
                  <h2 className="text-3xl font-semibold lg:text-5xl">ชีวิตของผู้คน</h2>
                  <p className="pt-4 lg:text-lg font-body">
                    เราจะมีชีวิตที่ดีขึ้นได้ ก็ต้องอาศัยนโยบายสาธารณะ ที่ตอบโจทย์ สอดคล้องกับบริบท พร้อมรองรับ ความเปลี่ยนแปลงและความต้องการของสังคม
                  </p>
                </div>
                <div className="bottom-0 hidden w-full gap-8 md:flex col-span-full lg:gap-y-12 lg:gap-x-16">
                  <PolicyCircle
                    text="ขนส่งมวลชนเชื่อมต่อ"
                    position="-translate-x-4 translate-y-4"
                    bgHover="group-hover:bg-public-transport"
                    bgColor="bg-[#daa13d]"
                    borderColor="border-[#daa13d]"
                  />
                  <PolicyCircle
                    text="สวนสาธารณะพื้นที่ออกกำลังกาย"
                    position="translate-x-4 -translate-y-4"
                    bgHover="group-hover:bg-public-park"
                    bgColor="bg-[#36723b]"
                    borderColor="border-[#36723b]"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="relative h-full bg-secondary">
            <div className="px-12 py-12 space-y-12 text-white sm:py-24">
              <h2 className="text-4xl font-bold text-center break-words lg:text-5xl">นโยบายเพื่อสังคมสูงวัย</h2>
              <div className="flex flex-col justify-center space-y-8 text-center md:space-x-4 lg:space-x-8 md:flex-row font-body">
                <blockquote className="bg-[#36723b] speech-dialog bubble-lt border-t-green">
                  <p className="lg:text-xl">แก่ตัวไปจะมีใครดูแลไหม?</p>
                </blockquote>
                <blockquote className="bg-[#cc79a7] speech-dialog bubble-rt boder-b-pink md:top-12 justify-end flex ml-auto">
                  <p className="lg:text-xl">ถ้าทำงานไม่ไหว จะมีกินมีใช้ หรือเปล่า?</p>
                </blockquote>
                <blockquote className="bg-[#36723b] speech-dialog bubble-lt border-t-green">
                  <p className="lg:text-xl">รัฐจะดูแลเราอย่างไร ตอนเราอายุ 70 ปี?</p>
                </blockquote>
                <blockquote className="bg-[#6badcb] speech-dialog bubble-rb border-t-blue md:top-8 justify-end flex ml-auto">
                  <p className="lg:text-xl">ถ้าต้องอยู่บ้านพักคนชรา จะจ่ายไหวไหม?</p>
                </blockquote>
                <blockquote className="bg-[#daa13d] speech-dialog bubble-rb border-t-yellow">
                  <p className="lg:text-xl">หากเจ็บป่วยขึ้นมา ใครจะพาไปส่งโรงพยาบาล?</p>
                </blockquote>
              </div>
            </div>
          </section>
          <section className="relative h-full bg-[#242054]">
            <div className="flex flex-col items-center justify-center px-6 py-12 text-white">
              <QuestionMark className="w-48 h-48" />
              <p className="text-base leading-relaxed text-center lg:text-lg font-body max-w-prose">
                คำถามเหล่านี้ เป็นหนึ่งในโจทย์สำคัญของการพัฒนานโยบาย
                <br /> เพื่อสร้างการเปลี่ยนแปลงเชิงระบบ กระบวนการหาคำตอบ จึงไม่ได้มีเพียงฝั่งผู้กำหนดนโยบาย แต่ยังมีเสียงจากผู้ปฏิบัติงานที่เกี่ยวข้อง ภาครัฐ
                ภาคประชาสังคม ภาคเอกชน และประชาชน ที่ล้วนเป็นผู้รับผลกระทบไม่ทางตรงก็ทางอ้อม
              </p>
            </div>
            <div className="absolute bottom-0 hidden -ml-4 lg:block triangle-up left-1/2"></div>
          </section>
          <section className="relative h-full overflow-hidden bg-secondary">
            <div className="absolute top-0 right-0 w-full h-full bg-fixed bg-center bg-no-repeat filter blur-md bg-width-90 bg-step-blur-pattern-mobile lg:bg-step-blur-pattern"></div>
            <div className="absolute top-0 w-full h-full bg-fixed bg-top bg-no-repeat opacity-70 bg-step-pattern-mobile lg:bg-step-pattern bg-width-90"></div>
            <div className="absolute w-full bg-no-repeat h-full lg:h-[40rem] -left-4 lg:left-auto bg-top-left-2 lg:-top-16 lg:-bg-top-6 sm:bg-75 md:bg-70 lg:bg-contain bg-process-step-mobile lg:bg-process-step">
              <div className="justify-start hidden lg:justify-center lg:flex">
                <div className="flex flex-col items-start justify-center pl-20 mt-48 space-y-6 font-bold bg-white rounded-full lg:mt-0 lg:text-center lg:pt-10 w-60 h-60 lg:pl-0 lg:items-center lg:w-80 lg:h-80 text-body">
                  <h3 className="hidden text-2xl lg:block">
                    ตอบคำถามดังกล่าว
                    <br /> ผ่านกรอบการทำงาน*
                    <br />
                  </h3>
                  <h3 className="block text-2xl lg:hidden">
                    หาคำตอบ
                    <br /> ผ่านกรอบ
                    <br />
                    การทำงาน*
                  </h3>
                  <span className="text-3xl lg:text-4xl">5 ขั้น</span>
                </div>
              </div>
            </div>
            <div className="absolute right-0 w-full h-full bg-fixed bg-right-bottom bg-no-repeat bg-contain opacity-75 mix-blend-screen bg-landing-circle-mobile sm:bg-landing-circle"></div>
            <div className="relative space-y-8 flex flex-col items-center justify-between mt-[36rem] sm:mt-[54rem] lg:mt-[32rem]">
              <Link href="/process">
                <a className="w-3/4 sm:w-max btn">กระบวนการของเรา</a>
              </Link>
              <p className="text-sm text-white font-body">*Adapted from Systemicdesigntoolkit.org</p>
            </div>
            <div className="mx-auto max-w-7xl">
              <div className="relative flex flex-col items-center justify-center h-full p-6 mx-6 mx-auto my-8 bg-white sm:p-12 rounded-xl">
                <div className="flex flex-col py-8 space-y-4 jutify-center">
                  <h2 className="text-4xl font-bold text-center uppercase text-body">TGRI X RISE IMPACT</h2>
                  <p className="text-center lg:text-lg text-body font-body max-w-prose">
                    มูลนิธิสถาบันวิจัยและพัฒนาผู้สูงอายุไทย (มส.ผส.) และ ไรซ์ อิมแพค ได้ร่วมกันออกแบบกระบวนการ พัฒนานโยบายเพื่อรองรับสังคมผู้สูงวัย โดยครอบคลุม
                    7 ประเด็นหลัก
                  </p>
                </div>
                <PolicyContent />
              </div>
            </div>
          </section>
          <section className="relative h-full py-12 bg-white lg:py-24" ref={ref}>
            <div className="grid grid-cols-1 gap-6 px-6 sm:px-12 lg:px-24 sm:max-w-3/4 md:grid-cols-2">
              <div className="flex flex-col col-span-1 space-y-8 text-body">
                <div className="lg:space-y-4">
                  <h2 className="text-3xl font-semibold lg:text-5xl">สร้างการมีส่วนร่วม</h2>
                  <h2 className="text-3xl font-semibold lg:text-5xl">เพื่อออกแบบนโยบาย</h2>
                  <h2 className="text-3xl font-semibold lg:text-5xl">ในระยะเวลา 1 ปี</h2>
                </div>
                <div className="hidden sm:block">
                  <Link href="/value">
                    <a className="btn">คุณค่ากระบวนการ</a>
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-1 col-span-1 gap-4 lg:gap-8 md:grid-cols-2">
                <div className="flex flex-col col-span-1 space-y-4 text-body">
                  <p className="font-body lg:text-lg">จัดวงหารือแบบออฟไลน์ และออนไลน์</p>
                  <p className="text-4xl lg:text-6xl">
                    {inView ? <CountUp end={30} duration={2} /> : '0'}
                    <span className="text-base font-bold font-body"> ครั้ง</span>
                  </p>
                </div>
                <div className="flex flex-col col-span-1 space-y-4 text-body">
                  <p className="font-body lg:text-lg">
                    มีผู้เข้าร่วมที่
                    <br />
                    หลากหลายมากกว่า
                  </p>
                  <p className="text-4xl lg:text-6xl">
                    {inView ? <CountUp end={400} duration={2.5} /> : '0'}
                    <span className="text-base font-bold font-body"> คน</span>
                  </p>
                </div>
                <div className="flex flex-col col-span-1 space-y-4 text-body">
                  <p className="font-body lg:text-lg">
                    เกิด public engagement
                    <br /> ผ่านช่องทางออนไลน์
                  </p>
                  <p className="text-4xl lg:text-6xl">
                    {inView ? <CountUp end={2} duration={2} /> : '0'}
                    <span className="text-base font-bold font-body"> เว็บไซต์</span>
                  </p>
                </div>
                <div className="flex flex-col col-span-1 space-y-4 text-body">
                  <p className="font-body lg:text-lg">มีผู้แสดงความคิดเห็นมากกว่า</p>
                  <p className="text-4xl lg:text-6xl">
                    {inView ? <CountUp end={1000} duration={2.75} separator="," /> : '0'}
                    <span className="text-base font-bold font-body"> คน</span>
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-12 sm:hidden">
                <Link href="/value">
                  <a className="px-16 btn">คุณค่ากระบวนการ</a>
                </Link>
              </div>
            </div>
          </section>
          <section className="relative h-full px-6 pt-24 bg-center bg-no-repeat bg-cover bg-secondary bg-landing-footer">
            <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-8">
              <div className="text-4xl font-bold leading-snug text-center text-white lg:text-5xl">
                <h3>โพลิซี ไดอะล็อก</h3>
                <h3>ทำงานอย่างไร ?</h3>
              </div>
              <p className="text-base text-center text-white font-body lg:text-lg max-w-prose">
                เราได้จัดทำคู่มือการจัดกระบวนการจากประสบการณ์ของทีมงาน ผู้ที่สนใจสามารถนำไปปรับใช้สำหรับออกแบบและพัฒนานโยบาย ทุกระดับ ทุกประเด็นในสังคม
                เพื่อร่วมกันสร้างการเปลี่ยนแปลงเชิงระบบ
              </p>
              <div className="flex justify-center pt-8 pb-12">
                <Link href="/guideline">
                  <a className="w-full btn">คู่มือการจัดกระบวนการ</a>
                </Link>
              </div>
              <AboutRiseImpact />
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default Home
