import AboutRiseImpact from '@/components/Footer/AboutRiseImpact'
import Header from '@/components/Layout/Header'
import PolicyValue from '@/components/Value/PolicyValue'
import SystemValue from '@/components/Value/SystemValue'
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import BlueChart from '/public/image/value/blue-chart.svg'
import PinkChart from '/public/image/value/pink-chart.svg'
import YellowChart from '/public/image/value/yellow-chart.svg'

const ValuePage = () => {
  const [selectedSection, setSelectedSection] = useState<number>(0)
  return (
    <>
      <Header title="คุณค่าของกระบวนการ" description="สิ่งที่เราเชื่อและประโยชน์ของ Policy Dialogue" />
      <main className="relative">
        <section className="relative grid h-[75vh] bg-cover bg-no-repeat items-center bg-process-hero-pattern-mobile sm:bg-process-hero-pattern">
          <div className="flex flex-col items-center justify-center py-12 space-y-4 text-center text-white lg:text-left lg:items-start lg:justify-start lg:ml-48">
            <h1 className="text-4xl font-semibold lg:text-5xl">คุณค่าของกระบวนการ</h1>
            <div className="space-y-1">
              <h2 className="text-base md:text-xl lg:text-2xl font-body">สิ่งที่เราเชื่อและประโยชน์ของ</h2>
              <h2 className="text-base md:text-xl lg:text-2xl font-body">&lsquo;Policy Dialogue&rsquo;</h2>
            </div>
          </div>
        </section>

        <section className="relative grid h-full lg:grid-cols-2">
          <section className="absolute left-0 w-full h-full space-y-12 -top-24">
            <div className="relative bg-[#242054] mx-auto max-w-6xl px-6 py-16 md:p-12 md:h-72">
              <span className="absolute top-6 left-12 lg:left-24 text-white text-[96px] lg:text-[180px] font-bold white-stoke align-top">“</span>
              <h2 className="relative mt-8 text-lg font-bold leading-relaxed tracking-wide text-center text-white lg:mt-12 lg:text-xl">
                หลังจากจัดกระบวนการกว่า 30 ครั้ง
                <br />
                RISE Impact ได้ทบทวนผลลัพธ์ที่เกิดขึ้น และพบว่า Policy Dialogue
                <br />
                มีคุณค่าใน 2 มิติสำคัญ คือ
              </h2>
              <span className="absolute bottom-0 right-12 lg:right-24 text-white text-[96px] lg:text-[180px] font-bold white-stoke align-bottom rotate-180 transform">
                “
              </span>
            </div>
          </section>
          <section
            className={`${selectedSection === 0 ? 'bg-[#FEEDEA]' : 'bg-white'} transition duration-300  hidden md:block cols-span-1 p-6 sm:p-12 sm:pt-64`}
          >
            <div className="relative flex flex-col justify-between h-full mx-24 space-y-12">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">
                  คุณค่าต่อการสร้าง
                  <br />
                  การเปลี่ยนแปลง
                  <br />
                  เชิงระบบ
                </h3>
              </div>
              {selectedSection === 0 ? (
                <MinusCircleIcon onClick={() => setSelectedSection(0)} className="hidden w-12 h-12 cursor-pointer lg:block shrink-0 text-primary" />
              ) : (
                <PlusCircleIcon
                  onClick={() => setSelectedSection(0)}
                  className="hidden w-12 h-12 cursor-pointer lg:block shrink-0 text-primary hover:text-accent"
                />
              )}
            </div>
          </section>
          <section
            className={`${selectedSection === 1 ? 'bg-[#FEEDEA]' : 'bg-white'} transition duration-300  hidden md:block cols-span-1 p-6 sm:p-12 lg:pt-64`}
          >
            <div className="relative flex flex-col justify-between h-full mx-24 space-y-12 ">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">
                  คุณค่าต่อ
                  <br />
                  กระบวนการพัฒนา
                  <br />
                  นโยบาย
                </h3>
              </div>
              {selectedSection === 1 ? (
                <MinusCircleIcon onClick={() => setSelectedSection(1)} className="hidden w-12 h-12 cursor-pointer lg:block shrink-0 text-primary" />
              ) : (
                <PlusCircleIcon
                  onClick={() => setSelectedSection(1)}
                  className="hidden w-12 h-12 cursor-pointer lg:block shrink-0 text-primary hover:text-accent"
                />
              )}
            </div>
          </section>
          <section className="hidden md:block h-full py-24 bg-[#FEEDEA] col-span-full w-full">
            {selectedSection === 0 ? <SystemValue /> : <PolicyValue />}
          </section>

          <section className="block py-12 pt-56 space-y-6 bg-white md:hidden col-span-full">
            <div className="relative px-6 space-y-2">
              <h3 className="text-3xl font-bold">
                คุณค่าต่อการสร้าง
                <br />
                การเปลี่ยนแปลง
                <br />
                เชิงระบบ
              </h3>
            </div>
            <SystemValue />
          </section>
          <section className="block md:hidden bg-[#FEEDEA] space-y-6 py-12 col-span-full">
            <div className="relative px-6 space-y-2">
              <h3 className="text-3xl font-bold">
                คุณค่าต่อการสร้าง
                <br />
                การเปลี่ยนแปลง
                <br />
                เชิงระบบ
              </h3>
            </div>
            <PolicyValue />
          </section>
        </section>

        <section className="relative h-full py-12 bg-white lg:py-24">
          <div className="max-w-6xl px-6 mx-auto space-y-12 text-body">
            <h2 className="text-3xl font-bold leading-snug text-center lg:text-4xl">
              สรุปความคิดเห็น
              <br />
              จากผู้เข้าร่วมต่อกระบวนการ
            </h2>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              <div className="flex flex-col justify-end h-full col-span-1 space-y-2 text-center">
                <h3 className="pb-6 font-bold lg:text-lg">
                  คิดว่ากิจกรรมและหัวข้อที่แลกเปลี่ยน <br />
                  เป็นประโยชน์ ต่อการขับเคลื่อนเชิงนโยบาย
                </h3>
                <Image src={PinkChart} width="420" height="420" priority alt="pink-chart" />
                <p className="text-sm font-body">ผู้ตอบแบบสอบถาม : 213 คน</p>
              </div>
              <div className="flex flex-col justify-end h-full col-span-1 space-y-2 text-center">
                <h3 className="pb-6 font-bold lg:text-lg">
                  คิดว่าตัวเองและหน่วยงาน
                  <br /> ได้รับประโยชน์จากการเข้าร่วม
                </h3>
                <Image src={YellowChart} width="420" height="420" priority alt="yellow-chart" />
                <p className="text-sm font-body">ผู้ตอบแบบสอบถาม : 151 คน</p>
              </div>
              <div className="flex flex-col justify-end h-full col-span-1 space-y-2 text-center">
                <h3 className="pb-6 font-bold lg:text-lg">สามารถนำประเด็นจากการแลกเปลี่ยนไปต่อยอดในการทำงานหรือในหน่วยงานได้</h3>
                <Image src={BlueChart} width="420" height="420" priority alt="blue-chart" />
                <p className="text-sm font-body">ผู้ตอบแบบสอบถาม : 54 คน</p>
              </div>
            </div>
            <p className="px-6 text-sm font-body">
              หมายเหตุ : ด้วยข้อจำกัดของช่องทางหรือความสะดวก ทำให้ไม่สามารถเก็บข้อมูลจากผู้เข้าร่วมได้ครบทุกคน
              และมีบางคำถามที่เป็นการเก็บข้อมูลจากเพิ่มเติมระหว่างโครงการ จึงทำให้ตัวเลขจำนวนผู้ตอบแบบสอบถามไม่เท่ากันทั้งหมด
            </p>
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
    </>
  )
}

export default ValuePage
