import AboutRiseImpact from '@/components/Footer/AboutRiseImpact'
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
    <div className="relative">
      <main className="relative">
        <section className="relative grid h-[50vh] lg:h-[75vh] bg-cover bg-no-repeat items-center bg-process-hero-pattern-mobile sm:bg-process-hero-pattern">
          <div className="flex flex-col items-center justify-center pt-24 space-y-3 text-white lg:items-start lg:justify-start lg:ml-48">
            <h1 className="text-4xl font-semibold lg:text-5xl">คุณค่าของกระบวนการ</h1>
            <div className="space-y-1">
              <h2 className="text-xl lg:text-2xl font-body">สิ่งที่เราเชื่อและประโยชน์ของ </h2>
              <h2 className="text-xl lg:text-2xl font-body">‘policy dialogue’</h2>
            </div>
          </div>
        </section>

        <section className="relative grid h-full lg:grid-cols-2">
          <section className="absolute w-full h-full space-y-12 -top-24 ">
            <div className="relative bg-[#242054] mx-auto max-w-6xl p-12 h-72 space-x-8">
              <span className="absolute top-6 left-24 text-white text-[180px] font-bold white-stoke align-top">“</span>
              <h2 className="flex items-center justify-center mt-12 text-xl font-bold leading-relaxed tracking-wide text-center text-white">
                หลังจากจัดกระบวนการกว่า 30 ครั้ง RISE Impact
                <br />
                ได้ทบทวนผลลัพธ์ที่เกิดขึ้น และพบว่า Policy Dialogue
                <br />
                มีคุณค่าใน 2 มิติสำคัญ คือ
              </h2>
              <span className="absolute bottom-0 right-24 text-white text-[180px] font-bold white-stoke align-bottom rotate-180 transform">“</span>
            </div>
          </section>
          <section className={`${selectedSection === 0 ? 'bg-[#FEEDEA]' : 'bg-white'} cols-span-1 p-6 sm:p-12 sm:pt-64`}>
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
                <PlusCircleIcon onClick={() => setSelectedSection(0)} className="flex-shrink-0 w-12 h-12 cursor-pointer text-primary hover:text-accent" />
              ) : (
                <MinusCircleIcon onClick={() => setSelectedSection(0)} className="flex-shrink-0 w-12 h-12 cursor-pointer text-primary hover:text-accent" />
              )}
            </div>
          </section>
          <section className={`${selectedSection === 1 ? 'bg-[#FEEDEA]' : 'bg-white'} cols-span-1 p-6 sm:p-12 sm:pt-64`}>
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
                <PlusCircleIcon onClick={() => setSelectedSection(1)} className="flex-shrink-0 w-12 h-12 cursor-pointer text-primary hover:text-accent" />
              ) : (
                <MinusCircleIcon onClick={() => setSelectedSection(1)} className="flex-shrink-0 w-12 h-12 cursor-pointer text-primary hover:text-accent" />
              )}
            </div>
          </section>
          <section className="h-full py-24 bg-[#FEEDEA] col-span-full w-full">{selectedSection === 0 ? <SystemValue /> : <PolicyValue />}</section>
        </section>

        <section className="relative h-full py-12 bg-white sm:py-24">
          <div className="max-w-6xl mx-auto space-y-12 text-body">
            <h2 className="text-4xl font-bold text-center">
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
                <Image src={PinkChart} width="500" height="500" alt="pink-chart" />
                <p className="text-sm font-body">ผู้ตอบแบบสอบถาม : 213 คน</p>
              </div>
              <div className="flex flex-col col-span-1 space-y-2 text-center">
                <h3 className="pb-6 text-lg font-bold">คิดว่าตัวเองและหน่วยงาน ได้รับประโยชน์จากการเข้าร่วม</h3>
                <Image src={YellowChart} width="500" height="500" alt="pink-chart" />
                <p className="text-sm font-body">ผู้ตอบแบบสอบถาม : 151 คน</p>
              </div>
              <div className="flex flex-col col-span-1 space-y-2 text-center">
                <h3 className="pb-6 text-lg font-bold">สามารถนำประเด็นจากการ แลกเปลี่ยนไป ต่อยอดในการทำงานหรือในหน่วยงานได้</h3>
                <Image src={BlueChart} width="500" height="500" alt="pink-chart" />
                <p className="text-sm font-body">ผู้ตอบแบบสอบถาม : 54 คน</p>
              </div>
            </div>
            <p className="text-sm font-body">
              หมายเหตุ : ด้วยข้อจำกัดของช่องทางหรือความสะดวก ทำให้ไม่สามารถเก็บข้อมูลจากผู้เข้าร่วมได้ครบทุกคน
              และมีบางคำถามที่เป็นการเก็บข้อมูลจากเพิ่มเติมระหว่างโครงการ จึงทำให้ตัวเลขจำนวนผู้ตอบแบบสอบถามไม่เท่ากันทั้งหมด
            </p>
          </div>

          {/* <div className="grid max-w-6xl grid-cols-1 gap-6 px-6 mx-auto text-body md:grid-cols-2">
            <div className="flex flex-col col-span-1 space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-semibold sm:text-5xl">จัดการอย่างไร</h2>
                <h2 className="text-4xl font-semibold sm:text-5xl">ให้สำเร็จ</h2>
                <p className="font-body">
                  รวบรวมปัญหาที่พบ ข้อควรคำนึงและคำแนะนำ
                  <br />
                  จากประสบการณ์ของทีม เพื่อให้กระบวนการเป็นไปอย่างราบรื่น
                  <br /> ชวนคุยได้บรรลุเป้าหมายที่ผู้จัดตั้งใจ
                </p>
              </div>
            </div>
            <div className="flex items-end justify-center">
              <Link href="/">
                <a className="w-1/2 btn">ดาวน์โหลดเอกสาร</a>
              </Link>
            </div>
          </div> */}
        </section>

        <section className="relative h-full px-6 pt-24 bg-center bg-no-repeat bg-cover bg-secondary bg-landing-footer">
          <div className="flex flex-col items-center justify-center sm:space-y-8">
            <div className="space-y-3 text-4xl font-bold text-center text-white sm:text-5xl">
              <h3>คุณค่าของกระบวนการ</h3>
              <h3>โพลิซี ไดอะล็อก</h3>
            </div>
            <p className="text-base text-center text-white font-body sm:text-lg max-w-prose">
              กระบวนการหารือเชิงนโยบาย ไม่ได้เป็นเพียงวิธีการหาคำตอบเท่านั้น แต่ยังสามารถสร้างการมีส่วนร่วมกับผู้คน ช่วยจุดประเด็นและพลังใจเพื่อผลักดันต่อ
            </p>
            <div className="flex justify-center pt-8 pb-12">
              <Link href="/value">
                <a className="w-full btn">ดูรายละเอียดเพิ่มเติม</a>
              </Link>
            </div>
            <AboutRiseImpact />
          </div>
        </section>
      </main>
    </div>
  )
}

export default ValuePage
