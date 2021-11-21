import AboutRiseImpact from '@/components/Footer/AboutRiseImpact'
import Link from 'next/link'

const ProcessPage = () => {
  return (
    <div className="relative">
      <main className="relative">
        <section className="relative grid h-[50vh] lg:h-[75vh] bg-right-top bg-cover bg-no-repeat mix-blend-screen filter saturate-150 items-center bg-value-hero-pattern-mobile sm:bg-value-hero-pattern">
          <div className="flex flex-col items-center justify-center pt-24 space-y-3 text-white lg:items-start lg:justify-start lg:ml-48">
            <h1 className="text-4xl font-semibold lg:text-5xl">กระบวนการ</h1>
            <div className="space-y-1">
              <h2 className="text-xl lg:text-2xl font-body">ก่อนจะถึงจุดหมาย</h2>
              <h2 className="text-xl lg:text-2xl font-body">ระหว่างทาง Policy Dialogue </h2>
              <h2 className="text-xl lg:text-2xl font-body">ใช้วิธีการอะไรบ้าง เพื่อหาคำตอบ</h2>
            </div>
          </div>
        </section>

        <section className="relative h-full py-24 bg-[#FEEDEA]">
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
        </section>

        <section className="relative h-full py-12 bg-white sm:py-24">
          <div className="grid max-w-6xl grid-cols-1 gap-6 px-6 mx-auto text-body md:grid-cols-2">
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
          </div>
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
