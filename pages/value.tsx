import AboutRiseImpact from '@/components/Footer/AboutRiseImpact'
import PolicyValue from '@/components/Value/PolicyValue'
import SystemValue from '@/components/Value/SystemValue'
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/solid'
import Head from 'next/head'
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
      <Head>
        <title>คุณค่าของกระบวนการ</title>
      </Head>
      <main className="relative">
        <section className="relative grid h-[50vh] lg:h-[75vh] bg-cover bg-no-repeat items-center bg-process-hero-pattern-mobile sm:bg-process-hero-pattern">
          <div className="flex flex-col items-center justify-center py-12 space-y-3 text-center text-white lg:text-left lg:items-start lg:justify-start lg:ml-48">
            <h1 className="text-4xl font-semibold lg:text-5xl">คุณค่าของกระบวนการ</h1>
            <div className="space-y-1">
              <h2 className="text-xl lg:text-2xl font-body">สิ่งที่เราเชื่อและประโยชน์ของ </h2>
              <h2 className="text-xl lg:text-2xl font-body">‘policy dialogue’</h2>
            </div>
          </div>
        </section>

        <section className="relative grid h-full lg:grid-cols-2">
          <section className="absolute left-0 w-full h-full space-y-12 -top-24">
            <div className="relative bg-[#242054] mx-auto max-w-6xl p-12 h-96 md:h-72 space-x-8">
              <span className="absolute top-6 md:left-24 text-white text-[96px] md:text-[180px] font-bold white-stoke align-top">“</span>
              <h2 className="relative mt-12 text-xl font-bold leading-relaxed tracking-wide text-center text-white">
                หลังจากจัดกระบวนการกว่า 30 ครั้ง RISE Impact
                <br />
                ได้ทบทวนผลลัพธ์ที่เกิดขึ้น และพบว่า Policy Dialogue
                <br />
                มีคุณค่าใน 2 มิติสำคัญ คือ
              </h2>
              <span className="absolute bottom-0 right-12 md:right-24 text-white text-[96px] md:text-[180px] font-bold white-stoke align-bottom rotate-180 transform">
                “
              </span>
            </div>
          </section>
          <section className={`${selectedSection === 0 ? 'bg-[#FEEDEA]' : 'bg-white'} hidden md:block cols-span-1 p-6 sm:p-12 sm:pt-64`}>
            <div className="relative flex flex-col mx-24 space-y-12">
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
                <MinusCircleIcon onClick={() => setSelectedSection(0)} className="w-12 h-12 cursor-pointer shrink-0 text-primary hover:text-accent" />
              ) : (
                <PlusCircleIcon onClick={() => setSelectedSection(0)} className="w-12 h-12 cursor-pointer shrink-0 text-primary hover:text-accent" />
              )}
            </div>
          </section>
          <section className={`${selectedSection === 1 ? 'bg-[#FEEDEA]' : 'bg-white'} hidden md:block cols-span-1 p-6 sm:p-12 sm:pt-64`}>
            <div className="relative flex flex-col mx-24 space-y-12 ">
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
                <MinusCircleIcon onClick={() => setSelectedSection(1)} className="w-12 h-12 cursor-pointer shrink-0 text-primary hover:text-accent" />
              ) : (
                <PlusCircleIcon onClick={() => setSelectedSection(1)} className="w-12 h-12 cursor-pointer shrink-0 text-primary hover:text-accent" />
              )}
            </div>
          </section>
          <section className="hidden md:block h-full py-24 bg-[#FEEDEA] col-span-full w-full">
            {selectedSection === 0 ? <SystemValue /> : <PolicyValue />}
          </section>

          <section className="block py-12 space-y-6 bg-white md:hidden col-span-full pt-96">
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

        <section className="relative h-full py-12 bg-white sm:py-24">
          <div className="max-w-6xl mx-auto space-y-12 text-body">
            <h2 className="text-2xl font-bold leading-snug text-center md:text-4xl">
              สรุปความคิดเห็น
              <br />
              จากผู้เข้าร่วมต่อกระบวนการ
            </h2>
            <div className="grid gap-12 md:grid-cols-3">
              <div className="flex flex-col col-span-1 space-y-2 text-center">
                <h3 className="pb-6 text-lg font-bold">
                  คิดว่ากิจกรรมและหัวข้อที่แลกเปลี่ยน <br />
                  เป็นประโยชน์ ต่อการขับเคลื่อนเชิงนโยบาย
                </h3>
                <Image src={PinkChart} className="w-full h-full" width="480" height="480" alt="pink-chart" />
                <p className="text-sm font-body">ผู้ตอบแบบสอบถาม : 213 คน</p>
              </div>
              <div className="flex flex-col col-span-1 space-y-2 text-center">
                <h3 className="pb-6 text-lg font-bold">
                  คิดว่าตัวเองและหน่วยงาน
                  <br /> ได้รับประโยชน์จากการเข้าร่วม
                </h3>
                <Image src={YellowChart} className="w-full h-full" width="480" height="480" alt="pink-chart" />
                <p className="text-sm font-body">ผู้ตอบแบบสอบถาม : 151 คน</p>
              </div>
              <div className="flex flex-col col-span-1 space-y-2 text-center">
                <h3 className="pb-6 text-lg font-bold">
                  สามารถนำประเด็นจากการ แลกเปลี่ยนไป
                  <br /> ต่อยอดในการทำงานหรือในหน่วยงานได้
                </h3>
                <Image src={BlueChart} className="w-full h-full" width="480" height="480" alt="pink-chart" />
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
          <div className="flex flex-col items-center justify-center sm:space-y-8">
            <div className="space-y-3 text-4xl font-bold text-center text-white sm:text-5xl">
              <h3>โพลิซี ไดอะล็อก</h3>
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
    </>
  )
}

export default ValuePage
