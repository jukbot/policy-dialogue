import AboutRiseImpact from '@/components/Footer/AboutRiseImpact'
import Header from '@/components/Layout/Header'
import PostProcess from '@/components/Process/PostProgress'
import PreProcess from '@/components/Process/PreProcess'
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useState } from 'react'

const ProcessPage = () => {
  const [selectedSection, setSelectedSection] = useState<number>(0)
  return (
    <>
      <Header title="การออกแบบนโยบายอย่างมีส่วนร่วม" description="ก่อนจะถึงจุดหมาย ระหว่างทาง Policy Dialogue ใช้วิธีการอะไรบ้าง เพื่อหาคำตอบ" />
      <main className="relative">
        <section className="relative grid h-[50vh] lg:h-[75vh] bg-cover bg-no-repeat items-center bg-process-hero-pattern-mobile sm:bg-process-hero-pattern">
          <div className="flex flex-col items-center justify-center py-12 space-y-3 text-center text-white lg:text-left lg:items-start lg:justify-start lg:ml-48">
            <h1 className="text-4xl font-semibold lg:text-5xl">กระบวนการ</h1>
            <div className="space-y-1">
              <h2 className="text-xl lg:text-2xl font-body">ก่อนจะถึงจุดหมาย</h2>
              <h2 className="text-xl lg:text-2xl font-body">ระหว่างทาง Policy Dialogue</h2>
              <h2 className="text-xl lg:text-2xl font-body">ใช้วิธีการอะไรบ้าง เพื่อหาคำตอบ</h2>
            </div>
          </div>
        </section>

        <section className="relative grid h-full lg:grid-cols-2">
          <section className="absolute left-0 w-full h-full space-y-12 -top-24">
            <div className="relative bg-[#242054] mx-auto max-w-6xl py-20 px-6 md:p-12 md:h-72 md:space-x-8">
              <span className="absolute top-6 md:left-24 text-white text-[96px] md:text-[180px] font-bold white-stoke align-top">“</span>
              <p className="flex justify-center mt-6 text-center text-white font-body">กรุงโรมไม่ได้สร้างเสร็จในหนึ่งวัน — Rome wasn&apos;t built in a day</p>
              <h2 className="relative mt-6 text-xl font-bold leading-relaxed tracking-wide text-center text-white">
                กว่าจะเป็นรูปเป็นร่าง Policy Dialogue ผ่านการกลั่นกรองมากมาย
                <br />
                ตั้งแต่การรวบรวมข้อมูลจากหลากหลายแหล่ง ไปจนถึงการออกแบบและดำเนิน
                <br />
                กระบวนการให้เหมาะสมกับผู้เข้าร่วม เพื่อให้บรรลุเป้าหมายที่คาดหวัง
              </h2>
              <span className="absolute bottom-0 right-12 md:right-24 text-white text-[96px] md:text-[180px] font-bold white-stoke align-bottom rotate-180 transform">
                “
              </span>
            </div>
          </section>
          <section className={`${selectedSection === 0 ? 'bg-[#FEEDEA]' : 'bg-white'} hidden md:block cols-span-1 p-6 sm:p-12 sm:pt-64`}>
            <div className="relative flex flex-col mx-24 space-y-12">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">ก่อนกระบวนการ</h3>
                <p className="font-body max-w-prose">
                  เราใช้หลากหลายวิธีในการเตรียมข้อมูลให้ครบถ้วนและทันเหตุการณ์ เพื่อเข้าใจที่มาที่ไป ตั้งเป้าหมายที่เป็นประโยชน์ต่อการออกแบบนโยบายสาธารณะ
                  และสร้างการมีส่วนร่วมกับกลุ่มที่เกี่ยวข้อง
                </p>
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
                <h3 className="text-3xl font-bold">ระหว่างกระบวนการ</h3>
                <p className="font-body max-w-prose">
                  จัดวงหารือในหลากหลายแนวทาง เพื่อได้มาซึ่งผลลัพธ์ ที่มีคุณค่าต่อการผลักดันนโยบาย ผ่านการแลกเปลี่ยน ความคิดเห็น เพื่อหาจุดร่วม-จุดต่าง-ข้อสรุป
                  ทั้งยังสร้างการมีส่วนร่วมของภาคส่วนที่เกี่ยวข้องต่อประเด็นนั้น ๆ
                </p>
              </div>
              {selectedSection === 1 ? (
                <MinusCircleIcon onClick={() => setSelectedSection(1)} className="w-12 h-12 cursor-pointer shrink-0 text-primary hover:text-accent" />
              ) : (
                <PlusCircleIcon onClick={() => setSelectedSection(1)} className="w-12 h-12 cursor-pointer shrink-0 text-primary hover:text-accent" />
              )}
            </div>
          </section>
          <section className="h-full py-24 bg-[#FEEDEA] hidden md:block col-span-full w-full">
            {selectedSection === 0 ? <PreProcess /> : <PostProcess />}
          </section>

          <section className="block py-12 space-y-6 bg-white md:hidden col-span-full pt-96">
            <div className="relative px-6">
              <h3 className="text-3xl font-bold">ก่อนกระบวนการ</h3>
            </div>
            <PreProcess />
          </section>
          <section className="block md:hidden bg-[#FEEDEA] space-y-6 py-12 col-span-full">
            <div className="relative px-6">
              <h3 className="text-3xl font-bold">ระหว่างกระบวนการ</h3>
            </div>
            <PostProcess />
          </section>
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
    </>
  )
}

export default ProcessPage
