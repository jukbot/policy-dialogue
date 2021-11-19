import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useIntersection } from 'react-use'
import { useRef } from 'react'
import ScrollToContent from '../components/Landing/ScrollToContent'
import QuestionMark from '../components/Icon/QuestionMark'
import PolicyWheel from '../components/Landing/PolicyWheel'
import CountUp from 'react-countup'
import DesignPolicy from '/public/image/landing/designPolicy.webp'
import { useInView } from 'react-intersection-observer'
import PolicyCircle from '../components/Landing/PolicyCircle'
import AboutRiseImpact from '@/components/Footer/AboutRiseImpact'
import PolicyWheelMobile from '@/components/Landing/PolicyWheelMobile'

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
    <div className="relative">
      <div className="bg-fixed fixed w-1/2 h-screen sm:w-[52%] sm:h-[120%] bg-right bg-[#232151] mix-blend-screen bg-opacity-75 from-[#191919] to-[#232151] rounded-l-[100%] bg-gradient-to-b bottom-0 -top-24 right-0"></div>
      <main className="relative overflow-hidden">
        <section
          className={`${
            intersection && intersection.intersectionRatio < 1 ? '' : 'blur-md backdrop-blur-md saturate-50 backdrop-saturate-50'
          } grid h-[90vh] bg-fixed bg-center bg-landing-size filter bg-no-repeat transition backdrop-filter place-content-center bg-hero-pattern-mobile sm:bg-hero-pattern`}
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

        <section className="relative z-10 h-full bg-white">
          <ScrollToContent />
          <div ref={learnmoreRef} className="grid grid-cols-1 gap-6 pt-32 md:grid-cols-2" id="learnmore">
            <div className="flex flex-col col-span-1 px-6 pt-16 space-y-4 sm:px-24 text-body">
              <div className="space-y-2">
                <h2 className="text-4xl font-semibold sm:text-5xl">นโยบายที่ดี สังคมต้อง</h2>
                <h2 className="text-4xl font-semibold sm:text-5xl">ร่วมกันออกแบบ</h2>
              </div>
              <p className="sm:text-lg font-body">
                สร้างการมีส่วนร่วมที่เปิดกว้าง เปิดใจรับฟังความ แตกต่าง ให้ผู้คนได้แลกเปลี่ยนความคิดเห็นบนฐานความรู้และประสบการณ์ เพื่อร่วมออกแบบนโยบาย ให้เป็น
                ‘นโยบาย’ ของคนในสังคมอย่างแท้จริง
              </p>
            </div>
            <div className="relative col-span-1">
              <Image src={DesignPolicy} priority height="640" width="1024" className="w-full" alt="about-policy-dialogue" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-12 pt-12 md:grid-cols-2">
            <div className="grid grid-cols-1 col-span-1 px-6 mx-auto md:grid-cols-2 sm:px-12 gap-y-12 gap-x-16 ">
              <PolicyCircle
                text="น้ำประปาดื่มได้"
                position="-translate-x-6 -translate-y-6"
                bgHover="group-hover:bg-clean-water"
                bgColor="bg-[#6badcb]"
                borderColor="border-[#6badcb]"
                className="hidden md:block"
              />
              <PolicyCircle
                text="การศึกษาขั้นพื้นฐาน"
                position="-translate-x-6 translate-y-6"
                bgHover="group-hover:bg-education"
                bgColor="bg-[#cc79a7]"
                borderColor="border-[#cc79a7]"
              />
              <PolicyCircle
                text="รัฐสวัสดิการถ้วนหน้า"
                position="-translate-x-6 translate-y-6"
                bgHover="group-hover:bg-welfare"
                bgColor="bg-[#daa13d]"
                borderColor="border-[#daa13d]"
              />
              <PolicyCircle
                text="อากาศบริสุทธิ์ปลอดฝุ่นควัน"
                position="translate-x-6 translate-y-6"
                bgHover="group-hover:bg-environment"
                bgColor="bg-[#6badcb]"
                borderColor="border-[#6badcb]"
              />
              <PolicyCircle
                text="สวัสดิการค่ารักษาพยาบาล"
                position="translate-x-6 translate-y-6"
                bgHover="group-hover:bg-healthcare"
                bgColor="bg-[#cc79a7]"
                borderColor="border-[#cc79a7]"
              />
              <PolicyCircle text="" position="hidden" bgColor="bg-secondary" borderColor="border-transparent" className="absolute hidden -bottom-8 md:block" />
            </div>
            <div className="flex flex-col justify-between col-span-1 px-6 py-16 space-y-4 sm:px-12 text-body">
              <div className="space-y-4">
                <h2 className="text-4xl font-semibold sm:text-5xl">เพราะนโยบาย</h2>
                <h2 className="text-4xl font-semibold sm:text-5xl">เกี่ยวข้องกับทุกมิติใน</h2>
                <h2 className="text-4xl font-semibold sm:text-5xl">ชีวิตของผู้คน</h2>
                <p className="pt-4 sm:text-lg font-body">
                  เราจะมีชีวิตที่ดีขึ้นได้ ก็ต้องอาศัยนโยบายสาธารณะ ที่ตอบโจทย์ สอดคล้องกับบริบท พร้อมรองรับ ความเปลี่ยนแปลงและความต้องการของสังคม
                </p>
              </div>
              <div className="bottom-0 hidden grid-cols-2 mx-auto gap-y-12 gap-x-16 col-span-full sm:grid">
                <PolicyCircle
                  text="ขนส่งมวลชนเชื่อมต่อ"
                  position="-translate-x-6 translate-y-6"
                  bgHover="group-hover:bg-public-transport"
                  bgColor="bg-[#daa13d]"
                  borderColor="border-[#daa13d]"
                />
                <PolicyCircle
                  text="สวนสาธารณะพื้นที่ออกกำลังกาย"
                  position="translate-x-6 -translate-y-6"
                  bgHover="group-hover:bg-public-park"
                  bgColor="bg-[#36723b]"
                  borderColor="border-[#36723b]"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="relative z-10 h-full bg-secondary">
          <div className="px-12 py-12 space-y-12 text-white sm:py-24">
            <h2 className="text-4xl font-bold text-center sm:text-5xl">นโยบายเพื่อสังคมสูงวัย</h2>
            <div className="flex flex-col justify-center space-y-8 text-center md:space-x-8 md:flex-row font-body">
              <blockquote className="bg-[#36723b] speech-dialog bubble-lt border-t-green">
                <p className="text-xl">แก่ตัวไปจะมีใครดูแลไหม?</p>
              </blockquote>
              <blockquote className="bg-[#cc79a7] speech-dialog bubble-rt boder-b-pink md:top-12 justify-end flex ml-auto">
                <p className="text-xl">ถ้าทำงานไม่ไหว จะมีกินมีใช้ หรือเปล่า?</p>
              </blockquote>
              <blockquote className="bg-[#36723b] speech-dialog bubble-lt border-t-green">
                <p className="text-xl">รัฐจะดูแลเราอย่างไร ตอนเราอายุ 70 ปี?</p>
              </blockquote>
              <blockquote className="bg-[#6badcb] speech-dialog bubble-rb border-t-blue md:top-8 justify-end flex ml-auto">
                <p className="text-xl">ถ้าต้องอยู่ บ้านพักคนชรา จะจ่ายไหวไหม?</p>
              </blockquote>
              <blockquote className="bg-[#daa13d] speech-dialog bubble-rb border-t-yellow">
                <p className="text-xl">หากเจ็บป่วยขึ้นมาใครจะพา ไปส่ง โรงพยาบาล?</p>
              </blockquote>
            </div>
          </div>
        </section>
        <section className="z-10 relative h-full bg-[#242054]">
          <div className="flex flex-col items-center justify-center px-6 py-20 text-white">
            <QuestionMark className="w-48 h-48" />
            <p className="text-lg text-center max-w-prose font-body">
              คำถามเหล่านี้ เป็นหนึ่งในโจทย์สำคัญของการพัฒนานโยบาย เพื่อสร้างการเปลี่ยนแปลงเชิงระบบ กระบวนการหาคำตอบ จึงไม่ได้มีเพียงฝั่งผู้กำหนดนโยบาย
              แต่ยังมีเสียงจากผู้ปฏิบัติงานที่เกี่ยวข้อง ภาครัฐ ภาคประชาสังคม ภาคเอกชน และประชาชน ที่ล้วนเป็นผู้รับผลกระทบไม่ทางตรงก็ทางอ้อม
            </p>
          </div>
          <div className="absolute bottom-0 hidden -ml-4 lg:block triangle-up left-1/2"></div>
        </section>
        <section className="relative h-full overflow-hidden bg-secondary">
          <div className="absolute top-0 right-0 translate-y-[50%] w-2/3 lg:w-[344px] h-[500px] lg:h-screen mix-blend-screen from-[#242054] to-[#191919] rounded-tl-full rounded-bl-full bg-gradient-to-b"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-fixed bg-center bg-no-repeat filter blur-md bg-width-90 bg-step-blur-pattern-mobile lg:bg-step-blur-pattern"></div>
          <div className="absolute top-0 w-full h-full bg-fixed bg-top bg-no-repeat bg-step-pattern-mobile lg:bg-step-pattern bg-width-90"></div>
          <div className="absolute w-full bg-no-repeat h-full lg:h-[40rem] -left-16 lg:left-auto bg-top-left-2 lg:-top-16 lg:-bg-top-6 bg-contain md:bg-75% lg:bg-contain bg-process-step-mobile lg:bg-process-step">
            <div className="justify-start hidden lg:justify-center lg:flex">
              <div className="flex flex-col items-start justify-center pl-20 mt-48 space-y-6 font-bold bg-white rounded-full lg:mt-0 lg:text-center lg:pt-10 w-60 h-60 lg:pl-0 lg:items-center lg:w-80 lg:h-80 text-body">
                <h3 className="hidden text-2xl lg:block">
                  ตอบคำถามดังกล่าว
                  <br /> ผ่านกรอบการทำงาน
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

          <div className="relative hidden lg:flex justify-center lg:mt-[32rem]">
            <Link href="/process">
              <a className="w-3/4 sm:w-max btn">กระบวนการของเรา</a>
            </Link>
          </div>
          <div className="relative flex lg:hidden justify-center mt-[40rem] sm:mt-[60rem]">
            <p className="text-sm text-white font-body">*Adapted from Systemicdesigntoolkit.org</p>
          </div>
          <div className="relative flex flex-col items-center justify-center h-full p-6 mx-6 my-12 bg-white sm:p-12 lg:mx-24 rounded-xl">
            <div className="flex flex-col py-8 space-y-4 jutify-center">
              <h2 className="text-4xl font-bold text-center uppercase text-body">TGRI X RISE IMPACT</h2>
              <p className="text-center sm:text-lg text-body font-body max-w-prose">
                มูลนิธิสถาบันวิจัยและพัฒนาผู้สูงอายุไทย (มส.ผส.) และ ไรซ์ อิมแพค ได้ร่วมกันออกแบบกระบวนการ พัฒนานโยบายเพื่อรองรับสังคมผู้สูงวัย โดยครอบคลุม 7
                ประเด็นหลัก
              </p>
            </div>

            <div className="relative">
              <div className="absolute mx-auto mt-60 lg:mt-72 -ml-28 inset-x-1/2 ">
                <div className="items-center justify-center hidden lg:flex w-56 h-56 p-6 rounded-full bg-[#FEEDEA]">
                  <h3 className="text-2xl text-center text-body">นโยบายเพื่อสังคมสูงวัย</h3>
                </div>
              </div>
              <PolicyWheel className="hidden w-full h-full fill-current text-primary lg:block" />
              <PolicyWheelMobile className="block w-full h-full fill-current text-primary lg:hidden" />
              <div className="flex flex-col justify-between block w-full h-64 p-6 mt-8 space-y-4 rounded-lg lg:hidden bg-[#FFECEA]">
                <p className="text-sm text-center sm:text-lg font-body text-body">การสูงวันในถื่นที่อยู่อาศัยเดิมอย่างมีสุขภาวะ (Aging in Place)</p>
                <button className="w-full btn">อ่านต่อ</button>
              </div>
            </div>
          </div>
        </section>
        <section className="relative h-full py-24 bg-white" ref={ref}>
          <div className="grid grid-cols-1 gap-6 px-6 sm:px-24 sm:max-w-3/4 md:grid-cols-2">
            <div className="flex flex-col col-span-1 space-y-8 text-body">
              <div className="space-y-4">
                <h2 className="text-4xl font-semibold sm:text-5xl">สร้างการมีส่วนร่วม</h2>
                <h2 className="text-4xl font-semibold sm:text-5xl">เพื่อออกแบบนโยบาย</h2>
                <h2 className="text-4xl font-semibold sm:text-5xl">ในระยะเวลา 1 ปี</h2>
              </div>
              <div className="hidden sm:block">
                <Link href="/value">
                  <a className="btn">คุณค่ากระบวนการ</a>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 col-span-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col col-span-1 space-y-4 text-body">
                <p className="font-body">
                  จัดวงหารือแบบออฟไลน์
                  <br />
                  และออนไลน์
                </p>
                <p className="text-6xl">
                  {inView ? <CountUp end={30} duration={2} /> : '0'}
                  <span className="text-base font-bold font-body"> ครั้ง</span>
                </p>
              </div>
              <div className="flex flex-col col-span-1 space-y-4 text-body">
                <p className="font-body">
                  มีผู้เข้าร่วมที่
                  <br />
                  หลากหลายมากกว่า
                </p>
                <p className="text-6xl">
                  {inView ? <CountUp end={400} duration={2.5} /> : '0'}
                  <span className="text-base font-bold font-body"> ครั้ง</span>
                </p>
              </div>
              <div className="flex flex-col col-span-1 space-y-4 text-body">
                <p className="font-body">
                  เกิด public engagement
                  <br /> ผ่านช่องทางออนไลน์
                </p>
                <p className="text-6xl">
                  {inView ? <CountUp end={2} duration={2} /> : '0'}
                  <span className="text-base font-bold font-body"> ครั้ง</span>
                </p>
              </div>
              <div className="flex flex-col col-span-1 space-y-4 text-body">
                <p className="font-body">
                  มีผู้เข้าร่วมที่
                  <br />
                  หลากหลายมากกว่า
                </p>
                <p className="text-6xl">
                  {inView ? <CountUp end={1000} duration={2.75} separator="," /> : '0'}
                  <span className="text-base font-bold font-body"> ครั้ง</span>
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-12 sm:hidden">
              <Link href="/value">
                <a className="w-full lg:w-3/4 btn">คุณค่ากระบวนการ</a>
              </Link>
            </div>
          </div>
        </section>
        <section className="relative h-full px-6 pt-24 bg-center bg-no-repeat bg-cover bg-secondary bg-landing-footer">
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="space-y-3 text-4xl font-bold text-center text-white sm:text-5xl">
              <h3>โพลิซี ไดอะลอค</h3>
              <h3>ทำงานอย่างไร ?</h3>
            </div>
            <p className="text-base text-center text-white font-body sm:text-lg max-w-prose">
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
  )
}

export default Home
