import AboutRiseImpact from '@/components/Footer/AboutRiseImpact'
import DialogueLoop from '@/components/Guideline/DialogueLoop'
import DialogueLoopMobile from '@/components/Guideline/DialogueLoopMobile'
import TeamRoleChart from '@/components/Guideline/TeamRoleChart'
import TeamRoleContent from '@/components/Guideline/TeamRoleContent'
import { Goals, Process, Teamwork } from '@/components/Icon'
import Image from 'next/image'
import Link from 'next/link'
import Content from '/public/image/guideline/content.svg'
import Participants from '/public/image/guideline/participants.svg'
import Resources from '/public/image/guideline/resources.svg'

const GuidelinePage = () => {
  return (
    <div className="relative">
      <main className="relative">
        <section className="relative grid h-[50vh] lg:h-[75vh] bg-left-bottom bg-contain bg-no-repeat mix-blend-screen filter saturate-150 items-center bg-guideline-hero-pattern-mobile sm:bg-guideline-hero-pattern">
          <div className="flex flex-col items-center justify-center pt-24 space-y-3 text-white lg:items-start lg:justify-start lg:ml-48">
            <h1 className="text-4xl font-semibold lg:text-5xl">คู่มือการจัดกระบวนการ</h1>
            <div className="space-y-1">
              <h2 className="text-xl lg:text-2xl font-body">ทีมงานต้องเตรียมงานและจัดการอย่างไร</h2>
              <h2 className="text-xl lg:text-2xl font-body">ตั้งแต่ต้นจนจบ เราได้รวบรวมไว้แล้ว</h2>
            </div>
          </div>
        </section>

        <section className="relative h-full space-y-12 bg-white">
          <div className="max-w-6xl px-6 py-16 mx-auto space-y-12 sm:px-12">
            <div className="flex items-center justify-center space-x-6">
              <h2 className="font-bold text-9xl text-primary">6</h2>
              <div className="space-y-1 text-3xl font-bold sm:text-4xl">
                <h2>สิ่งที่จะทำให้</h2>
                <h2>Policy Dialogue สำเร็จ</h2>
              </div>
            </div>

            <div className="space-y-12 sm:space-y-16">
              <div className="grid grid-cols-1 gap-8 md:gap-12 md:grid-cols-3">
                <div className="flow-root">
                  <div className="space-y-3">
                    <Image className="flex-shrink-0 w-12 h-12" width="48" height="48" aria-hidden="true" src={Participants} alt="participants" />
                    <h3 className="text-xl font-bold">Participants</h3>
                    <p className="text-sm leading-relaxed sm:text-base font-body">
                      เฟ้นหาผู้มีส่วนร่วมในแต่ละประเด็นอย่างเหมาะสม อาจมาจากหลายภาคส่วน กระจายพื้นที่ เข้าถึงผู้คนให้มากที่สุด
                    </p>
                  </div>
                </div>
                <div className="flow-root">
                  <div className="space-y-4">
                    <Image className="flex-shrink-0 w-12 h-12" width="48" height="48" aria-hidden="true" src={Content} alt="content" />
                    <h3 className="text-xl font-bold">Content</h3>
                    <p className="text-sm leading-relaxed sm:text-base font-body">
                      มีข้อมูลที่หลากหลาย น่าเชื่อถือ และตรงประเด็น อาจเป็นข่าวสาร บทความวิชาการ งานวิจัยที่เกี่ยวข้อง ฯลฯ เพื่อนำมาวิเคราะห์ ตั้งเป้าหมาย
                      และหาข้อสรุป
                    </p>
                  </div>
                </div>
                <div className="flow-root">
                  <div className="space-y-4">
                    <Image className="flex-shrink-0 w-12 h-12" width="48" height="48" aria-hidden="true" src={Resources} alt="resources" />
                    <h3 className="text-xl font-bold">Resources</h3>
                    <p className="text-sm leading-relaxed sm:text-base font-body">
                      มีแหล่งทรัพยากรที่พร้อม ตั้งแต่แหล่งข้อมูลเนื้อหา ข้อมูลบุคคลที่เกี่ยวข้อง ไปจนถึงมีอุปกรณ์ เครื่องมือสื่อสารต่าง ๆ
                      เพื่อหาคำตอบและจัดกระบวนการ
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 md:gap-12 md:grid-cols-3">
                <div className="flow-root">
                  <div className="space-y-4">
                    <div className="flex-shrink-0">
                      <Process className="w-12 h-12" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold">Process</h3>
                    <p className="text-sm leading-relaxed sm:text-base font-body">
                      มีบรรยากาศการแลกเปลี่ยนที่ปลอดภัยและบรรลุเป้าหมายที่ตั้งไว้ กระบวนการควรประกอบด้วย
                    </p>
                    <ul className="space-y-2 text-sm leading-relaxed list-inside sm:text-base">
                      <li className="inline-flex space-x-2">
                        <span className="text-xl font-bold leading-none align-top">•</span>
                        <div className="space-y-1">
                          <p className="font-bold">Document</p>
                          <p className="font-body">เอกสารที่อธิบายรายละเอียดวงหารือ</p>
                        </div>
                      </li>
                      <li className="inline-flex space-x-2">
                        <span className="text-xl font-bold leading-none align-top">•</span>
                        <div className="space-y-1">
                          <p className="font-bold">Materials</p>
                          <p className="font-body">สื่อนำเสนอที่ชัดเจน ดึงดูด ตรงประเด็น และน่าสนใจ </p>
                        </div>
                      </li>
                      <li className="inline-flex space-x-2">
                        <span className="text-xl font-bold leading-none align-top">•</span>
                        <div className="space-y-1">
                          <p className="font-bold">Facilitation Skills</p>
                          <p className="font-body">นำกระบวนการ ด้วยทักษะการตั้งคำถาม เพื่อให้ได้ปลายทางที่ตรงประเด็น</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flow-root">
                  <div className="space-y-4">
                    <div className="flex-shrink-0">
                      <Teamwork className="w-12 h-12" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold">Team Work</h3>
                    <p className="text-sm leading-relaxed sm:text-base font-body">
                      การทำงานเป็นทีมที่สอดประสานกัน เพื่อรองรับ ‘ความยืดหยุ่น’ ของเนื้อหาและกระบวนการ
                    </p>
                    <ul className="space-y-2 text-sm leading-relaxed list-inside sm:text-base">
                      <li className="inline-flex space-x-2">
                        <span className="text-xl font-bold leading-none align-top">•</span>
                        <div className="space-y-1">
                          <p className="font-bold">Communication skills</p>
                          <p className="font-body">สื่อสาร อัปเดทเนื้อหาและกระบวนการต่าง ๆ ภายในทีม เพื่อการทำงานที่ราบรื่น</p>
                        </div>
                      </li>
                      <li className="inline-flex space-x-2">
                        <span className="text-xl font-bold leading-none align-top">•</span>
                        <div className="space-y-1">
                          <p className="font-bold">Problem-Solving Skills</p>
                          <p className="font-body">เข้าใจปัญหาอย่างลึกซึ้งและเห็นอกเห็นใจ และสามารถตัดสินใจเร็วพอ เพื่อแก้ปัญหาอย่างมีประสิทธิภาพ</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flow-root">
                  <div className="space-y-4">
                    <div className="flex-shrink-0">
                      <Goals className="w-12 h-12" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold">Goals</h3>
                    <p className="text-sm leading-relaxed sm:text-base font-body">เป้าหมายที่ชัดเจน แต่ยืดหยุ่น</p>
                    <ul className="space-y-2 text-sm leading-relaxed list-inside sm:text-base">
                      <li className="inline-flex space-x-2">
                        <span className="text-xl font-bold leading-none align-top">•</span>
                        <div className="space-y-1">
                          <p className="font-bold">Goals</p>
                          <p className="font-body">เป้าหมายของการจัดกระบวนการทั้งหมด</p>
                        </div>
                      </li>
                      <li className="inline-flex space-x-2">
                        <span className="text-xl font-bold leading-none align-top">•</span>
                        <div className="space-y-1">
                          <p className="font-bold">Objectives</p>
                          <p className="font-body">จุดประสงค์ของการจัดกระบวนในแต่ละครั้ง</p>
                        </div>
                      </li>
                      <li className="inline-flex space-x-2">
                        <span className="text-xl font-bold leading-none align-top">•</span>
                        <div className="space-y-1">
                          <p className="font-bold">Expected</p>
                          <p className="font-body">ผลลัพธ์ที่คาดหวังของการจัดกระบวนในแต่ละครั้ง</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative h-full py-12 sm:py-24 bg-secondary">
          <div className="max-w-6xl px-6 mx-auto space-y-12 text-white">
            <div className="relative flex flex-col-reverse grid-cols-1 gap-12 md:grid md:grid-cols-2">
              <article className="col-span-1 space-y-12">
                <TeamRoleContent />
              </article>
              <article className="col-span-1 space-y-12 md:space-y-0">
                <div className="flex flex-col space-y-4 md:hidden">
                  <h3 className="text-4xl font-bold">บทบาทของทีม</h3>
                  <p className="text-sm sm:text-base font-body">ทีม RISE Impact แบ่งการทำงานเป็นทีมย่อยของแต่ละประเด็น ออกเป็น 3 บทบาท ดังนี้</p>
                </div>
                <TeamRoleChart className="w-full h-full" />
              </article>
            </div>
          </div>
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

        <section className="relative h-full py-12 sm:py-24 bg-secondary">
          <div className="max-w-6xl px-6 mx-auto space-y-12 text-white">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold">Dialogue Loop</h2>
              <p className="leading-snug font-body">
                Policy Dialogue มีความจำเป็นจะต้องจัดมากกว่า 1 ครั้ง
                <br />
                เพื่อบรรลุเป้าหมายและสร้างการมีส่วนร่วม
                <br />
                และภายใต้การจัดกระบวนการหารือเชิงนโยบาย
                <br />
                ในแต่ละครั้งมีวิธีการดังนี้
              </p>
            </div>
            <div className="relative space-y-8">
              <DialogueLoop className="hidden w-full md:block" />
              <DialogueLoopMobile className="block w-full md:hidden" />
              <div className="grid grid-cols-1 gap-8 md:gap-12 md:grid-cols-3">
                <div className="flex items-start space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-8 h-8" viewBox="0 0 50 50">
                    <circle cx="25" cy="25" r="25" fill="#6badcb" />
                  </svg>
                  <p className="text-sm font-body">จุดประสงค์ (Objectives) ของกระบวนการหารือเชิงนโยบายแต่ละครั้ง</p>
                </div>
                <div className="flex items-start space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-8 h-8" viewBox="0 0 50 50">
                    <circle cx="25" cy="25" r="25" fill="#daa13d" />
                  </svg>
                  <p className="text-sm font-body">ผลลัพธ์ (Outcomes) ของกระบวนการหารือเชิงนโยบายแต่ละครั้ง</p>
                </div>
                <div className="flex items-start space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-8 h-8" viewBox="0 0 50 50">
                    <circle cx="25" cy="25" r="25" fill="#36723b" />
                  </svg>
                  <p className="text-sm font-body">เป้าหมาย (Goal) หรือข้อเสนอแนะเชิงนโยบายของแต่ละหัวข้อ</p>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-center">
              <Link href="/">
                <a className="btn">ดาวน์โหลดคู่มือฉบับเต็ม</a>
              </Link>
            </div>
          </div>
        </section>

        <section className="relative h-full py-12 bg-white sm:py-24">
          <div className="max-w-6xl px-6 mx-auto text-body">
            <h2 className="text-4xl font-bold text-center">ผลลัพธ์ที่คาดหวังได้</h2>
          </div>
        </section>

        <section className="relative h-full px-6 pt-24 bg-center bg-no-repeat bg-cover bg-secondary bg-landing-footer">
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="space-y-3 text-4xl font-bold text-center text-white sm:text-5xl">
              <h3>เข้าถึงคลังข้อมูลของ</h3>
              <h3>Policy Dialogue</h3>
            </div>
            <p className="text-base text-center text-white font-body sm:text-lg max-w-prose">
              เราได้เปิดข้อมูลโครงการเป็นแบบสาธารณะ เพื่อให้ทุกคนสามารถนำวิธีการและเนื้อหาไปพัฒนา และปรับใช้ในโครงการใหม่ๆ
            </p>
            <div className="flex justify-center pt-8 pb-12">
              <Link href="/archive">
                <a className="w-full btn">ไปที่คลังข้อมูล</a>
              </Link>
            </div>
            <AboutRiseImpact />
          </div>
        </section>
      </main>
    </div>
  )
}

export default GuidelinePage
