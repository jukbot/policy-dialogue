import AboutRiseImpact from '@/components/Footer/AboutRiseImpact'
import TeamRoleChart from '@/components/Guideline/TeamRoleChart'
import TeamRoleContent from '@/components/Guideline/TeamRoleContent'
import Header from '@/components/Layout/Header'
import Meta from '@/data/meta.json'
import { DownloadIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'
import Content from '/public/image/guideline/content.svg'
import DialogueLoopMobile from '/public/image/guideline/dialogue-loop-mobile.svg'
import DialogueLoop from '/public/image/guideline/dialogue-loop.svg'
import Result1 from '/public/image/guideline/expect-result-1.webp'
import Result2 from '/public/image/guideline/expect-result-2.webp'
import Result3 from '/public/image/guideline/expect-result-3.webp'
import Goals from '/public/image/guideline/goals.svg'
import Participants from '/public/image/guideline/participants.svg'
import Process from '/public/image/guideline/process.svg'
import Resources from '/public/image/guideline/resources.svg'
import Teamwork from '/public/image/guideline/teamwork.svg'

const GuidelinePage = () => {
  return (
    <>
      <Header
        title="คู่มือจัดกระบวนการ"
        description="ทีมงานต้องเตรียมงานและจัดการอย่างไร ตั้งแต่ต้นจนจบ เราได้รวบรวมไว้แล้ว"
        image={`${Meta.baseUrl}${Result2.src}`}
        width={Result2.width}
        height={Result2.height}
      />
      <main className="relative">
        <section className="relative grid h-[50vh] lg:h-[75vh] bg-left-bottom bg-cover bg-no-repeat mix-blend-screen filter saturate-150 items-center bg-guideline-hero-pattern-mobile sm:bg-guideline-hero-pattern">
          <div className="flex flex-col items-center justify-center pt-24 space-y-3 text-center text-white lg:text-left lg:items-start lg:justify-start lg:ml-48">
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
                    <Image className="w-12 h-12 shrink-0" width="48" height="48" aria-hidden="true" src={Participants} alt="participants" />
                    <h3 className="text-xl font-bold">Participants</h3>
                    <p className="text-sm leading-relaxed sm:text-base font-body">
                      เฟ้นหาผู้มีส่วนร่วมในแต่ละประเด็นอย่างเหมาะสม อาจมาจากหลายภาคส่วน กระจายพื้นที่ เข้าถึงผู้คนให้มากที่สุด
                    </p>
                  </div>
                </div>
                <div className="flow-root">
                  <div className="space-y-4">
                    <Image className="w-12 h-12 shrink-0" width="48" height="48" aria-hidden="true" src={Content} alt="content" />
                    <h3 className="text-xl font-bold">Content</h3>
                    <p className="text-sm leading-relaxed sm:text-base font-body">
                      มีข้อมูลที่หลากหลาย น่าเชื่อถือ และตรงประเด็น อาจเป็นข่าวสาร บทความวิชาการ งานวิจัยที่เกี่ยวข้อง ฯลฯ เพื่อนำมาวิเคราะห์ ตั้งเป้าหมาย
                      และหาข้อสรุป
                    </p>
                  </div>
                </div>
                <div className="flow-root">
                  <div className="space-y-4">
                    <Image className="w-12 h-12 shrink-0" width="48" height="48" aria-hidden="true" src={Resources} alt="resources" />
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
                    <Image className="w-12 h-12 shrink-0" width="48" height="48" aria-hidden="true" src={Process} alt="process" />
                    <h3 className="text-xl font-bold">Process</h3>
                    <p className="text-sm leading-relaxed sm:text-base font-body">
                      มีบรรยากาศการแลกเปลี่ยนที่ปลอดภัยและบรรลุเป้าหมายที่ตั้งไว้ กระบวนการควรประกอบด้วย
                    </p>
                    <ul className="space-y-2 text-sm leading-relaxed list-inside sm:text-base">
                      <li className="inline-flex space-x-2">
                        <span className="text-2xl font-bold leading-none align-top">•</span>
                        <div className="space-y-1">
                          <p className="font-bold">Document</p>
                          <p className="font-body">เอกสารที่อธิบายรายละเอียดวงหารือ</p>
                        </div>
                      </li>
                      <li className="inline-flex space-x-2">
                        <span className="text-2xl font-bold leading-none align-top">•</span>
                        <div className="space-y-1">
                          <p className="font-bold">Materials</p>
                          <p className="font-body">สื่อนำเสนอที่ชัดเจน ดึงดูด ตรงประเด็น และน่าสนใจ </p>
                        </div>
                      </li>
                      <li className="inline-flex space-x-2">
                        <span className="text-2xl font-bold leading-none align-top">•</span>
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
                    <Image className="w-12 h-12 shrink-0" width="48" height="48" aria-hidden="true" src={Teamwork} alt="teamwork" />
                    <h3 className="text-xl font-bold">Team Work</h3>
                    <p className="text-sm leading-relaxed sm:text-base font-body">
                      การทำงานเป็นทีมที่สอดประสานกัน เพื่อรองรับ ‘ความยืดหยุ่น’ ของเนื้อหาและกระบวนการ
                    </p>
                    <ul className="space-y-2 text-sm leading-relaxed list-inside sm:text-base">
                      <li className="inline-flex space-x-2">
                        <span className="text-2xl font-bold leading-none align-top">•</span>
                        <div className="space-y-1">
                          <p className="font-bold">Communication skills</p>
                          <p className="font-body">สื่อสาร อัปเดทเนื้อหาและกระบวนการต่าง ๆ ภายในทีม เพื่อการทำงานที่ราบรื่น</p>
                        </div>
                      </li>
                      <li className="inline-flex space-x-2">
                        <span className="text-2xl font-bold leading-none align-top">•</span>
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
                    <Image className="w-12 h-12 shrink-0" width="48" height="48" aria-hidden="true" src={Goals} alt="goals" />
                    <h3 className="text-xl font-bold">Goals</h3>
                    <p className="text-sm leading-relaxed sm:text-base font-body">เป้าหมายที่ชัดเจน แต่ยืดหยุ่น</p>
                    <ul className="space-y-2 text-sm leading-relaxed list-inside sm:text-base">
                      <li className="inline-flex space-x-2">
                        <span className="text-2xl font-bold leading-none align-top">•</span>
                        <div className="space-y-1">
                          <p className="font-bold">Goal</p>
                          <p className="font-body">เป้าหมายของการจัดกระบวนการทั้งหมด</p>
                        </div>
                      </li>
                      <li className="inline-flex space-x-2">
                        <span className="text-2xl font-bold leading-none align-top">•</span>
                        <div className="space-y-1">
                          <p className="font-bold">Objectives</p>
                          <p className="font-body">จุดประสงค์ของการจัดกระบวนในแต่ละครั้ง</p>
                        </div>
                      </li>
                      <li className="inline-flex space-x-2">
                        <span className="text-2xl font-bold leading-none align-top">•</span>
                        <div className="space-y-1">
                          <p className="font-bold">Expected outcome</p>
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
              <article className="col-span-1 py-6 space-y-12 md:space-y-0">
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
              <Link href="/archive#practical-guidelines">
                <a className="inline-flex btn" target="_self" rel="noopener noreferrer">
                  <DownloadIcon className="w-5 h-5 mr-2 fill-current" />
                  <span>ดาวน์โหลดเอกสาร</span>
                </a>
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
              <div className="hidden md:block">
                <Image src={DialogueLoop} alt="dialogue-loop" />
              </div>
              <div className="flex justify-center md:hidden">
                <Image src={DialogueLoopMobile} alt="dialogue-loop" />
              </div>
              <div className="grid grid-cols-1 gap-8 md:gap-12 md:grid-cols-3">
                <div className="flex items-start space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 shrink-0" viewBox="0 0 50 50">
                    <circle cx="25" cy="25" r="25" fill="#6badcb" />
                  </svg>
                  <p className="text-sm font-body">จุดประสงค์ (Objectives) ของกระบวนการหารือเชิงนโยบายแต่ละครั้ง</p>
                </div>
                <div className="flex items-start space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 shrink-0" viewBox="0 0 50 50">
                    <circle cx="25" cy="25" r="25" fill="#daa13d" />
                  </svg>
                  <p className="text-sm font-body">ผลลัพธ์ (Outcomes) ของกระบวนการหารือเชิงนโยบายแต่ละครั้ง</p>
                </div>
                <div className="flex items-start space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 shrink-0" viewBox="0 0 50 50">
                    <circle cx="25" cy="25" r="25" fill="#36723b" />
                  </svg>
                  <p className="text-sm font-body">เป้าหมาย (Goal) หรือข้อเสนอแนะเชิงนโยบายของแต่ละหัวข้อ</p>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-center">
              <Link href="/archive#practical-guidelines">
                <a className="inline-flex btn" target="_self" rel="noopener noreferrer">
                  <DownloadIcon className="w-5 h-5 mr-2 fill-current" />
                  <span>ดาวน์โหลดคู่มือฉบับเต็ม</span>
                </a>
              </Link>
            </div>
          </div>
        </section>

        <section className="relative h-full py-12 bg-white sm:py-24">
          <div className="max-w-6xl mx-auto text-body">
            <h2 className="text-4xl font-bold text-center">ผลลัพธ์ที่คาดหวังได้</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 pt-8 md:pt-16 md:grid-cols-2">
            <div className="relative col-span-1 px-6 md:px-0">
              <Image src={Result1} height="640" width="1024" className="w-full" alt="expect-ressult-1" />
            </div>
            <div className="flex flex-col col-span-1 px-6 space-y-4 md:space-y-8 md:pt-8 xl:pt-16 sm:px-16 text-body">
              <h3 className="text-2xl font-bold">เนื้อหาที่ได้</h3>
              <ul className="space-y-4 text-sm leading-relaxed list-inside sm:text-base">
                <li className="inline-flex space-x-2">
                  <span className="text-2xl font-bold leading-none align-top">•</span>
                  <div className="space-y-1">
                    <p className="font-bold">ข้อมูลเชิงลึก</p>
                    <p className="font-body">จากผู้เข้าร่วม จุดร่วมของปัญหา อุปสรรคและช่องโหว่ของประเด็นนั้น ๆ</p>
                  </div>
                </li>
                <li className="inline-flex space-x-2">
                  <span className="text-2xl font-bold leading-none align-top">•</span>
                  <div className="space-y-1">
                    <p className="font-bold">ความคิดเห็น</p>
                    <p className="font-body">ความคิดเห็นของผู้เข้าร่วมที่หลากหลาย ไปจนถึงข้อเสนอที่เกิดขึ้นจากวง</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 pt-8 md:pt-24 md:grid-cols-2">
            <div className="flex flex-col order-last col-span-1 px-6 space-y-4 md:order-first md:space-y-8 md:pt-8 xl:pt-16 sm:px-16 text-body">
              <h3 className="text-2xl font-bold">ช่วยในการขับเคลื่อนนโยบาย</h3>
              <ul className="space-y-4 text-sm leading-relaxed list-inside sm:text-base">
                <li className="inline-flex space-x-2">
                  <span className="text-2xl font-bold leading-none align-top">•</span>
                  <div className="space-y-1">
                    <p className="font-bold">สร้างการมีส่วนร่วมกับผู้คน</p>
                    <p className="font-body">
                      ภาคส่วนต่าง ๆ เข้าใจกันมากขึ้น ซึ่งอาจมีส่วนช่วยในการขับเคลื่อนนโยบาย หรือออกแบบการแก้ไขปัญหาในอนาคต สร้างความเข้าใจ หาจุดร่วม
                      และแลกเปลี่ยนความต่าง อาจทำให้เกิดทางเลือกใหม่จากภาพที่ชัดขึ้น
                    </p>
                  </div>
                </li>
                <li className="inline-flex space-x-2">
                  <span className="text-2xl font-bold leading-none align-top">•</span>
                  <div className="space-y-1">
                    <p className="font-bold">โอกาสในการผลักดันต่อ</p>
                    <p className="font-body">ผู้กำหนดนโยบายและผู้ที่นำไปใช้ในพื้นที่ได้รับฟังกันและกัน สามารถเติมเต็มและเพิ่มโอกาสผลักดันนโยบายร่วมกันต่อได้</p>
                  </div>
                </li>
                <li className="inline-flex space-x-2">
                  <span className="text-2xl font-bold leading-none align-top">•</span>
                  <div className="space-y-1">
                    <p className="font-bold">การสื่อสารในวงกว้าง</p>
                    <p className="font-body">เป็นอีกกระบอกเสียง แสดงพลังความต้องการและร่วมผลักดันนโยบาย</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative col-span-1 px-6 md:px-0">
              <Image src={Result2} height="640" width="1024" className="w-full" alt="expect-ressult-2" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 pt-8 md:pt-24 md:grid-cols-2">
            <div className="relative col-span-1 px-6 md:px-0">
              <Image src={Result3} height="640" width="1024" className="w-full" alt="expect-ressult-3" />
            </div>
            <div className="flex flex-col col-span-1 px-6 space-y-4 md:space-y-8 md:pt-8 xl:pt-16 sm:px-16 text-body">
              <h3 className="text-2xl font-bold">ตอบสนองการพัฒนา</h3>
              <ul className="space-y-4 text-sm leading-relaxed list-inside sm:text-base">
                <li className="inline-flex space-x-2">
                  <span className="text-2xl font-bold leading-none align-top">•</span>
                  <div className="space-y-1">
                    <p className="font-bold">ลดช่องว่างระหว่างตำแหน่งงาน</p>
                    <p className="font-body">เกิดการพูดคุยแลกเปลี่ยนกันระหว่างผู้กำหนดใช้นโยบายและผู้ปฏิบัติงาน ทำให้ลดช่องว่างระหว่างกัน </p>
                  </div>
                </li>
                <li className="inline-flex space-x-2">
                  <span className="text-2xl font-bold leading-none align-top">•</span>
                  <div className="space-y-1">
                    <p className="font-bold">เปลี่ยน-ปรับโจทย์ได้อย่างเหมาะสม</p>
                    <p className="font-body">มีความยืดหยุ่นในการทบทวนสมมติฐานและตีโจทย์ เพื่อเลือกโจทย์ที่สามารถตอบสนองต่อบริบทที่เหมาะสมที่สุด</p>
                  </div>
                </li>
                <li className="inline-flex space-x-2">
                  <span className="text-2xl font-bold leading-none align-top">•</span>
                  <div className="space-y-1">
                    <p className="font-bold">เกิดการแบ่งปันทรัพยากร</p>
                    <p className="font-body">ผู้เข้าร่วมได้เรียนรู้จากประสบการณ์ในพื้นที่อื่น เกิดการผลักดันและสร้างแรงบันดาลใจในการปฏิบัติงานต่อ</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="relative h-full px-6 pt-24 bg-center bg-no-repeat bg-cover bg-secondary bg-landing-footer">
          <div className="flex flex-col items-center justify-center sm:space-y-8">
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
    </>
  )
}

export default GuidelinePage
