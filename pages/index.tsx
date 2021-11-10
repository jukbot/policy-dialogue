import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useIntersection } from 'react-use'
import { useRef } from 'react'
import ScrollToContent from '../components/Landing/ScrollToContent'
import QuestionMark from '../components/Icon/QuestionMark'
import PolicyWheel from '../components/Landing/PolicyWheel'
import CountUp from 'react-countup'
import RiseImpactLogo from '/public/image/logo/rise-impact.svg'
import DesignPolicy from '/public/image/landing/designPolicy.webp'
import { useInView } from 'react-intersection-observer'
import PolicyCircle from '../components/Landing/PolicyCircle'

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
      <Head>
        <title>Policy Dialogue | กระบวนการหารือเชิงนโยบาย</title>
        <meta name="description" content="นโยบายที่ดี สังคมต้องร่วมกันออกแบบ" />
      </Head>
      <div className="bg-fixed fixed w-1/2 h-auto overflow-hidden sm:w-[52%] sm:h-[120%] bg-right bg-[#232151] mix-blend-screen bg-opacity-75 from-[#191919] to-[#232151] rounded-l-[50%] bg-gradient-to-b bottom-0 -top-24 right-0"></div>

      <main className="relative">
        <section
          className={`${
            intersection && intersection.intersectionRatio < 1 ? '' : 'blur-md backdrop-blur-md saturate-50 backdrop-saturate-50'
          } grid h-[90vh] overflow-hidden bg-fixed bg-center bg-landing-size filter bg-no-repeat transition backdrop-filter place-content-center bg-hero-pattern-mobile sm:bg-hero-pattern`}
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
          <div ref={learnmoreRef} className="grid grid-cols-1 gap-6 pt-32 sm:grid-cols-2" id="learnmore">
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
          <div className="grid grid-cols-1 gap-12 pt-12 sm:grid-cols-2">
            <div className="grid grid-cols-2 col-span-1 gap-12 mx-auto">
              <PolicyCircle
                text="น้ำประปาดื่มได้"
                position="-translate-x-6 -translate-y-6"
                bgHover="group-hover:bg-clean-water"
                bgColor="bg-[#6badcb]"
                borderColor="border-[#6badcb]"
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
              <PolicyCircle text="" position="" className="bottom-4" bgColor="bg-secondary" borderColor="border-transparent" />
            </div>
            <div className="flex flex-col justify-between col-span-1 px-6 py-16 space-y-4 sm:px-12 text-body">
              <div className="space-y-2">
                <h2 className="text-4xl font-semibold sm:text-5xl">เพราะนโยบาย</h2>
                <h2 className="text-4xl font-semibold sm:text-5xl">เกี่ยวข้องกับทุกมิติใน</h2>
                <h2 className="text-4xl font-semibold sm:text-5xl">ชีวิตของผู้คน</h2>
              </div>
              <p className="sm:text-lg font-body">
                เราจะมีชีวิตที่ดีขึ้นได้ ก็ต้องอาศัยนโยบายสาธารณะ ที่ตอบโจทย์ สอดคล้องกับบริบท พร้อมรองรับ ความเปลี่ยนแปลงและความต้องการของสังคม
              </p>
              <div className="bottom-0 hidden grid-cols-2 gap-12 mx-auto col-span-full sm:grid">
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

        <section className="relative h-full bg-secondary">
          <div className="px-12 py-12 space-y-12 text-white sm:py-24">
            <h2 className="text-4xl text-center sm:text-5xl">นโยบายเพื่อสังคมสูงวัย</h2>
            <div className="grid grid-cols-1 text-center gap-y-4 md:gap-x-8 md:grid-cols-5 font-body">
              <blockquote className="relative bg-[#36723b] p-6 w-full h-32 md:h-64 flex items-center justify-center bubble-lt">
                <p className="text-xl">แก่ตัวไปจะมีใครดูแลไหม?</p>
              </blockquote>
              <blockquote className="relative bg-[#cc79a7] p-6 w-full h-32 md:h-64 flex items-center justify-center top-12 bubble-rt">
                <p className="text-xl">ถ้าทำงานไม่ไหว จะมีกินมีใช้ หรือเปล่า?</p>
              </blockquote>
              <blockquote className="relative bg-[#36723b] p-6 w-full h-32 md:h-64 flex items-center justify-center bubble-lt">
                <p className="text-xl">รัฐจะดูแลเราอย่างไร ตอนเราอายุ 70 ปี?</p>
              </blockquote>
              <blockquote className="relative bg-[#6badcb] p-6 w-full h-32 md:h-64 flex items-center top-8 justify-center bubble-rb border-t-blue">
                <p className="text-xl">ถ้าต้องอยู่ บ้านพักคนชรา จะจ่ายไหวไหม?</p>
              </blockquote>
              <blockquote className="relative bg-[#daa13d] p-6 w-full h-32 md:h-64 flex items-center justify-center bubble-rb border-t-yellow">
                <p className="text-xl">หากเจ็บป่วยขึ้นมาใครจะพา ไปส่ง โรงพยาบาล?</p>
              </blockquote>
            </div>
          </div>
        </section>
        <section className="relative h-full bg-[#242054]">
          <div className="flex flex-col items-center justify-center px-6 py-20 text-white">
            <QuestionMark className="w-48 h-48" />
            <p className="text-lg text-center max-w-prose font-body">
              คำถามเหล่านี้ เป็นหนึ่งในโจทย์สำคัญของการพัฒนานโยบาย เพื่อสร้างการเปลี่ยนแปลงเชิงระบบ กระบวนการหาคำตอบ จึงไม่ได้มีเพียงฝั่งผู้กำหนดนโยบาย
              แต่ยังมีเสียงจากผู้ปฏิบัติงานที่เกี่ยวข้อง ภาครัฐ ภาคประชาสังคม ภาคเอกชน และประชาชน ที่ล้วนเป็นผู้รับผลกระทบไม่ทางตรงก็ทางอ้อม
            </p>
          </div>
          <div className="absolute bottom-0 -ml-4 triangle-up left-1/2"></div>
        </section>
        <section className="relative h-full overflow-hidden bg-secondary">
          <div className="absolute z-10 w-full bg-no-repeat h-[40rem] -top-16 -bg-top-6 bg-contain bg-process-step">
            <div className="flex justify-center">
              <div className="flex flex-col items-center justify-center pt-10 space-y-6 font-bold text-center bg-white rounded-full w-80 h-80 text-body">
                <h3 className="text-2xl">
                  ตอบคำถามดังกล่าว
                  <br /> ผ่านกรอบการทำงาน
                  <br />
                </h3>

                <span className="text-4xl">5 ขั้น</span>
              </div>
            </div>
          </div>
          <div className="relative w-full flex justify-center mt-[32rem]">
            <Link href="/process">
              <a className="w-3/4 sm:w-max btn">กระบวนการของเรา</a>
            </Link>
          </div>
          <div className="relative flex flex-col items-center justify-center h-full p-6 mx-6 my-12 bg-white sm:p-12 sm:mx-24 rounded-xl">
            <div className="flex flex-col py-12 space-y-4 jutify-center">
              <h2 className="text-4xl text-center text-body">TGRI x RISE IMPACT</h2>
              <p className="text-center sm:text-lg text-body font-body max-w-prose">
                มูลนิธิสถาบันวิจัยและพัฒนาผู้สูงอายุไทย (มส.ผส.) และ ไรซ์ อิมแพค ได้ร่วมกันออกแบบกระบวนการ พัฒนานโยบายเพื่อรองรับสังคมผู้สูงวัย โดยครอบคลุม 7
                ประเด็นหลัก
              </p>
            </div>

            <div className="relative">
              <div className="absolute mx-auto mt-56 -ml-28 inset-x-1/2 ">
                <div className="flex items-center justify-center w-56 h-56 p-6 rounded-full bg-[#FEEDEA]">
                  <h3 className="text-2xl text-center text-body">นโยบายเพื่อสังคมสูงวัย</h3>
                </div>
              </div>
              <PolicyWheel className="fill-current text-primary" />
            </div>
          </div>
        </section>
        <section className="relative h-full py-24 bg-white" ref={ref}>
          <div className="grid grid-cols-1 gap-6 px-6 sm:px-24 sm:max-w-3/4 sm:grid-cols-2">
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
            <div className="grid grid-cols-1 col-span-1 gap-8 sm:grid-cols-2">
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
                <a className="w-3/4 btn">คุณค่ากระบวนการ</a>
              </Link>
            </div>
          </div>
        </section>
        <section className="relative h-full py-24 bg-top bg-no-repeat bg-cover bg-secondary bg-landing-footer">
          <div className="flex flex-col items-center justify-center space-y-6">
            <h3 className="text-4xl leading-snug text-center text-white sm:text-5xl">
              โพลิซี ไดอะล็อก
              <br /> ทำงานอย่างไร ?
            </h3>
            <p className="text-base text-center text-white font-body sm:text-lg max-w-prose">
              เราได้จัดทำคู่มือการจัดกระบวนการจากประสบการณ์ของทีมงาน ผู้ที่สนใจสามารถนำไปปรับใช้สำหรับออกแบบและพัฒนานโยบาย ทุกระดับ ทุกประเด็นในสังคม
              เพื่อร่วมกันสร้างการเปลี่ยนแปลงเชิงระบบ
            </p>
            <div className="flex justify-center pt-6">
              <Link href="/">
                <a className="w-3/4 btn sm:w-max">คู่มือการจัดกระบวนการ</a>
              </Link>
            </div>
            <div className="flex justify-center w-3/4 pt-6">
              <div className="flex items-center justify-between w-full px-24 py-6 bg-local bg-white bg-no-repeat rounded-xl bg-footer-size bg-top-right bg-rise-impact-footer">
                <div>
                  <Image src={RiseImpactLogo} alt="rise-impact-logo" className="w-full h-full" width="240" height="120" />
                </div>
                <div>
                  <Link href="/about">
                    <a className="w-3/4 btn sm:w-max">เกี่ยวกับเรา</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
