import AboutRiseImpact from '@/components/Footer/AboutRiseImpact'
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useState } from 'react'

const ProcessPage = () => {
  const [selectedSection, setSelectedSection] = useState<number>(0)
  return (
    <div className="relative">
      <main className="relative">
        <section className="relative grid h-[50vh] lg:h-[75vh] bg-cover bg-no-repeat items-center bg-process-hero-pattern-mobile sm:bg-process-hero-pattern">
          <div className="flex flex-col items-center justify-center pt-24 space-y-3 text-white lg:items-start lg:justify-start lg:ml-48">
            <h1 className="text-4xl font-semibold lg:text-5xl">กระบวนการ</h1>
            <div className="space-y-1">
              <h2 className="text-xl lg:text-2xl font-body">ก่อนจะถึงจุดหมาย</h2>
              <h2 className="text-xl lg:text-2xl font-body">ระหว่างทาง Policy Dialogue </h2>
              <h2 className="text-xl lg:text-2xl font-body">ใช้วิธีการอะไรบ้าง เพื่อหาคำตอบ</h2>
            </div>
          </div>
        </section>

        <section className="relative grid h-full lg:grid-cols-2">
          <section className="absolute w-full h-full space-y-12 -top-24 ">
            <div className="relative bg-[#242054] mx-auto max-w-6xl p-12 h-72 space-x-8">
              <span className="absolute top-6 left-24 text-white text-[180px] font-bold white-stoke align-top">“</span>
              <p className="flex justify-center mt-6 text-white font-body">กรุงโรมไม่ได้สร้างเสร็จในหนึ่งวัน — Rome wasn’t built in a day</p>
              <h2 className="flex items-center justify-center mt-6 text-xl font-bold leading-relaxed tracking-wide text-center text-white">
                กว่าจะเป็นรูปเป็นร่าง Policy Dialogue ผ่านการกลั่นกรองมากมาย
                <br />
                ตั้งแต่การรวบรวมข้อมูลจากหลากหลายแหล่ง ไปจนถึงการออกแบบและดำเนิน
                <br />
                กระบวนการให้เหมาะสมกับผู้เข้าร่วม เพื่อให้บรรลุเป้าหมายที่คาดหวัง
              </h2>
              <span className="absolute bottom-0 right-24 text-white text-[180px] font-bold white-stoke align-bottom rotate-180 transform">“</span>
            </div>
          </section>
          <section className={`${selectedSection === 0 ? 'bg-[#FEEDEA]' : 'bg-white'} cols-span-1 py-12 sm:pt-64`}>
            <div className="relative flex flex-col mx-24 space-y-12">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">ก่อนกระบวนการ</h3>
                <p className="font-body max-w-prose">
                  เราใช้หลากหลายวิธีในการเตรียมข้อมูลให้ครบถ้วน และทันเหตุการณ์ เพื่อเข้าใจที่มาที่ไป ตั้งเป้าหมายที่ เป็นประโยชน์ต่อการออกแบบนโยบายสาธารณะ
                  และสร้างการมีส่วนร่วมกับกลุ่มที่เกี่ยวข้อง
                </p>
              </div>
              {selectedSection === 0 ? (
                <PlusCircleIcon onClick={() => setSelectedSection(0)} className="flex-shrink-0 w-12 h-12 cursor-pointer text-primary hover:text-accent" />
              ) : (
                <MinusCircleIcon onClick={() => setSelectedSection(0)} className="flex-shrink-0 w-12 h-12 cursor-pointer text-primary hover:text-accent" />
              )}
            </div>
          </section>
          <section className={`${selectedSection === 1 ? 'bg-[#FEEDEA]' : 'bg-white'} cols-span-1 p-6 sm:pt-64`}>
            <div className="relative flex flex-col mx-24 space-y-12 ">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">ระหว่างกระบวนการ</h3>
                <p className="font-body max-w-prose">
                  จัดวงหารือในหลากหลายแนวทาง เพื่อได้มาซึ่งผลลัพธ์ ที่มีคุณค่าต่อการผลักดันนโยบาย ผ่านการแลกเปลี่ยน ความคิดเห็น เพื่อหาจุดร่วม-จุดต่าง-ข้อสรุป
                  ทั้งยังสร้าง การมีส่วนร่วมของภาคส่วนที่เกี่ยวข้องต่อประเด็นนั้นๆ
                </p>
              </div>
              {selectedSection === 1 ? (
                <PlusCircleIcon onClick={() => setSelectedSection(1)} className="flex-shrink-0 w-12 h-12 cursor-pointer text-primary hover:text-accent" />
              ) : (
                <MinusCircleIcon onClick={() => setSelectedSection(1)} className="flex-shrink-0 w-12 h-12 cursor-pointer text-primary hover:text-accent" />
              )}
            </div>
          </section>

          <section className="h-full py-24 bg-[#FEEDEA] col-span-full w-full">test</section>
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

export default ProcessPage
