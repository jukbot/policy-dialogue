import Header from '@/components/Layout/Header'
import Timeline from '@/components/Project/GM/Timeline'
import TimelineHeader from '@/components/Project/GM/TimelineHeader'
import TimelineMobile from '@/components/Project/GM/TimelineMobile'
import TimelineSummary from '@/components/Project/GM/TimelineSummary'
import Meta from '@/data/meta.json'
import policies from '@/data/policies.json'
import projects from '@/data/projects.json'
import { Policy, Project } from '@types'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import Circle from '/public/image/gm/circle.webp'
import Chart from '/public/image/gm/chart.svg'
import FacebookBanner from '/public/image/aip/facebook.jpg'
import HeroImage from '/public/image/gm/hero-image.webp'
import Icon1 from '/public/image/gm/icon-1.svg'
import Icon2 from '/public/image/gm/icon-2.svg'
import Icon3 from '/public/image/gm/icon-3.svg'
import Icon4 from '/public/image/gm/icon-4.svg'
import ProcessResult from '/public/image/gm/process-result.webp'
import Result1 from '/public/image/gm/testimonial-1.webp'
import Result2 from '/public/image/gm/testimonial-2.webp'
import Result3 from '/public/image/gm/testimonial-3.webp'

const InterestProjects = dynamic(() => import('@/components/Project/InterestProjects'))
const RelatedPolicy = dynamic(() => import('@/components/Project/RelatedPolicy'))

const relatedPolicy: Policy[] = [policies[2]]
const interestProjects: Project[] = [projects[0], projects[1], projects[6], projects[2]]

const GmPage = () => {
  return (
    <>
      <Header
        title="กลไกติดตามและพัฒนา นโยบายเพื่อสังคมสูงวัย (Governing Mechanism)"
        description="ทำอย่างไรให้ประชาชนเป็นศูนย์กลาง ของการออกแบบนโยบาย"
        image={`${Meta.baseUrl}${FacebookBanner.src}`}
        width={FacebookBanner.width}
        height={FacebookBanner.height}
      />
      <main className="relative pt-[3.75rem] bg-[#EAF1EB]">
        <section className="relative h-[70vh] lg:h-[50vh] xl:h-[90vh] grid items-center bg-[#36723b]">
          <div className="flex flex-col items-center justify-between w-full h-full lg:mb-6 lg:flex-row">
            <div className="flex flex-col justify-center px-6 py-12 mt-6 space-y-4 text-center text-white lg:mt-0 lg:justify-start lg:px-12 lg:ml-12 xl:ml-24 item-center lg:item-start lg:text-left">
              <div className="space-y-2 text-3xl font-bold lg:text-4xl 2xl:text-6xl">
                <h1>กลไกติดตามและพัฒนา</h1>
                <h1>นโยบายเพื่อสังคมสูงวัย</h1>
                <h1>(Governing Mechanism)</h1>
              </div>
              <h2 className="max-w-sm mx-auto text-base leading-snug lg:text-lg sm:text-xl font-body lg:m-0">
                ทำอย่างไรให้ประชาชนเป็นศูนย์กลาง ของการออกแบบนโยบาย
              </h2>
            </div>
            <Image src={HeroImage} className="h-full shrink-0" width={800} height={480} priority alt="cover image" />
          </div>
        </section>

        <section className="relative h-full bg-[#EAF1EB] pb-6 md:pb-0">
          <section className="left-0 w-full h-full space-y-12 xl:absolute -top-24">
            <div className="relative flex flex-col max-w-6xl px-6 py-12 mx-auto space-y-6 md:items-center md:px-12 md:py-16 md:space-x-8 bg-secondary">
              <p className="relative max-w-2xl text-xl font-bold leading-relaxed tracking-wide text-white md:text-center md:text-3xl">
                ภายใต้การเปลี่ยนแปลงโครงสร้างประชากร เข้าสู่สังคมสูงวัย นโยบายสาธารณะเป็นเครื่องมือสำคัญ ในการวางแผนและกำหนดทิศทางของภาคส่วนต่างๆ
                เพื่อตอบสนองกับความต้องการที่เปลี่ยนแปลง
              </p>
            </div>
          </section>

          <div className="grid grid-cols-1 pt-6 gap-y-6 md:gap-0 md:grid-cols-2 xl:pt-72">
            <div className="relative col-span-1 px-6 md:px-0 ">
              <Image src={Result1} layout="responsive" priority height="640" width="1024" alt="expect-ressult-1" />
            </div>
            <div className="relative flex flex-col col-span-1 p-6 space-y-2 md:space-y-4 lg:p-12 xl:space-y-8 xl:pt-16 xl:px-16 text-body">
              <h3 className="max-w-xl text-xl font-bold leading-snug lg:text-2xl">จะดีกว่าไหม</h3>
              <p className="max-w-sm leading-relaxed font-body">
                หากประเทศไทยมีกลไกการติดตาม ทบทวน และพัฒนานโยบาย เพื่อรองรับสังคมสูงวัยให้ดีขึ้นอย่างต่อเนื่อง
              </p>
            </div>
          </div>

          <div className="relative grid grid-cols-1 gap-y-6 md:gap-0 md:grid-cols-2">
            <div className="flex flex-col order-last col-span-1 p-6 space-y-2 md:space-y-4 lg:p-12 xl:space-y-8 md:order-first xl:pt-16 xl:px-16 text-body">
              <h3 className="max-w-xl text-xl font-bold leading-snug lg:text-2xl">มองปัญหาในเชิงระบบ ร่วมมือกัน จากหลายภาคส่วน</h3>
              <p className="max-w-xl leading-relaxed font-body">
                ไม่ได้มุ่งขับเคลื่อนผ่านกระทรวงใดกระทรวงหนึ่ง แต่ยังร่วมหารือกับภาคการเมือง ซึ่งมีบทบาทในการกำหนดนโยบายและทำหน้าที่ในสภาผู้แทนราษฎร
              </p>

              <span className="max-w-xl text-xs font-body">
                ภาพการประชุมสภาผู้แทนราษฎร ณ อาคารรัฐสภา ถนนอู่ทองใน 20 สิงหาคม 2552 โดย พีรพัฒน์ วิมลรังครัตน์
              </span>
            </div>
            <div className="relative col-span-1 px-6 md:px-0">
              <Image src={Result2} layout="responsive" priority height="640" width="1024" alt="expect-ressult-2" />
            </div>
          </div>

          <div className="relative grid grid-cols-1 gap-y-6 md:gap-0 md:grid-cols-2">
            <div className="col-span-1 px-6 md:px-0">
              <Image src={Result3} layout="responsive" priority height="640" width="1024" alt="expect-ressult-3" />
            </div>
            <div className="relative flex flex-col col-span-1 p-6 space-y-2 md:space-y-4 lg:px-12 xl:space-y-8 xl:pt-16 xl:px-16 text-body">
              <h3 className="max-w-xl text-xl font-bold leading-snug lg:text-2xl">
                เกิดการออกแบบติดตามนโยบาย
                <br /> ที่ประชาชนเป็นศูนย์กลาง
              </h3>
              <p className="max-w-xl leading-relaxed font-body">
                เพื่อให้มีนโยบายที่สนับสนุนให้เกิดบริการ และสภาพแวดล้อมที่ดีสำหรับผู้สูงอายุ
                <br />
                <br />
                ช่วยเอื้อให้ผู้สูงอายุพึ่งพาตัวเองได้มากที่สุด ลดภาวะพึ่งพิงโดยไม่จำเป็น{' '}
              </p>
            </div>
          </div>
        </section>

        <section className="relative h-full bg-[#5D8E62]">
          <div className="flex flex-col items-center justify-center px-6 text-white pb-52">
            <svg xmlns="http://www.w3.org/2000/svg" width="62" height="180" viewBox="0 0 62 330">
              <text data-name="!" transform="translate(0 223)" fill="#fff" fontFamily="IBMPlexSansThai, sans-serif" fontWeight="600" fontSize="200">
                <tspan x="0" y="0">
                  !
                </tspan>
              </text>
            </svg>{' '}
            <p className="max-w-3xl text-base font-bold text-center sm:text-lg lg:text-2xl">
              แต่ปัจจุบัน การขับเคลื่อนนโยบายเพื่อรองรับสังคมสูงวัยของไทยยังไม่ชัดเจน และขาดการมีส่วนร่วมของภาคประชาชน
            </p>
          </div>
        </section>

        <section className="relative h-full px-6 py-24 bg-secondary">
          <div className="absolute left-0 flex justify-center w-full -top-40">
            <Image src={Circle} width={300} height={300} alt="circle image" />
          </div>
          <div className="flex flex-col items-center justify-center text-white pt-28">
            <div className="flex flex-col items-center">
              <Image src={Chart} height={700} width={500} alt="elderly home" />
            </div>
          </div>
        </section>

        <section className="relative h-full pt-6 bg-[#EAF1EB] md:pt-12">
          <div className="max-w-6xl px-6 py-8 mx-auto space-y-12 text-body">
            <h2 className="text-2xl font-bold leading-relaxed text-center md:text-4xl">
              แต่ยังมีความท้าทายหลายประการ
              <br />
              ที่จะเอื้อให้เกิดภาพสำเร็จดังกล่าว
            </h2>
            <div className="grid grid-cols-1 gap-8 lg:gap-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col col-span-1 space-y-4 text-center">
                <Image src={Icon1} width={120} height={120} priority />
                <p className="mx-auto text-base font-body sm:max-w-sm">
                  ขาดทิศทางของนโยบาย ที่ชัดเจนเพื่อการบูรณาการและทำงานร่วมกัน ภายใต้กระทรวงเดียวกัน หรือต่างกระทรวงอย่างมีประสิทธิภาพ
                </p>
              </div>
              <div className="flex flex-col col-span-1 space-y-4 text-center">
                <Image src={Icon2} width={120} height={120} priority />
                <p className="mx-auto text-base font-body sm:max-w-sm">ความซ้ำซ้อนในการกำหนดและนำนโยบายไปปฏิบัติใช้</p>
              </div>
              <div className="flex flex-col col-span-1 space-y-4 text-center">
                <Image src={Icon3} width={120} height={120} priority />
                <p className="mx-auto text-base font-body sm:max-w-sm">งบประมาณจำกัด และขาดการสนับสนุน การพัฒนาทักษะ และประเมินคุณภาพ ของบริการอย่างเป็นระบบ</p>
              </div>
              <div className="flex flex-col col-span-1 space-y-4 text-center">
                <Image src={Icon4} width={120} height={120} priority />
                <p className="mx-auto text-base font-body sm:max-w-sm">ขาดองค์ประกอบและ มุมมองจากสื่อรวมถึง ภาคประชาสังคม</p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative h-full bg-[#9AB89C] md:mt-16">
          <div className="w-full mx-auto md:absolute md:h-56 md:-mt-12 text-body md:-transform-x-1/2">
            <div className="w-full h-full max-w-4xl px-6 py-12 mx-auto space-y-8 text-white md:px-24 bg-secondary">
              <div className="flex flex-col items-center h-full space-y-6 md:justify-between md:flex-row md:space-y-0">
                <h3 className="text-3xl font-bold">โจทย์สำคัญ</h3>
                <p className="leading-relaxed text-center md:max-w-sm md:text-left font-body">
                  คือการหาคำตอบว่า กลไกดังกล่าวควรมีหน้าตาอย่างไร จะเกิดขึ้นได้อย่างไร
                  และเป็นไปได้หรือไม่ที่จะสร้างเจตจำนงทางการเมืองในเรื่องการรองรับสังคมสูงวัย
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-0 md:px-6 md:pt-[11rem]">
            <div className="relative overflow-hidden w-full h-[300px] flex justify-center">
              <TimelineHeader />
            </div>
            <div className="hidden md:block">
              <Timeline />
            </div>
            <div className="block md:hidden">
              <TimelineMobile />
            </div>
          </div>
        </section>

        <section className="relative h-full bg-[#36723b]">
          <div className="max-w-6xl pb-12 mx-auto">
            <div className="relative overflow-hidden w-full h-[300px] flex justify-center">
              <TimelineSummary />
            </div>
            <div className="flex flex-col items-center px-6 mt-12 space-y-12 text-white">
              <p className="max-w-xl text-lg text-center font-body">
                การออกแบบโครงสร้างบุคลากรและการทำงานของ คณะกรรมการผู้สูงอายุแห่งชาติ โดยยึดหลักประชาชนเป็นศูนย์กลาง ผ่านการมีส่วนร่วมของภาคประชาสังคม
              </p>
              <Link href="/archive#policy-recommendations">
                <a
                  className="text-[#36723b] text-sm inline-flex btn bg-white mx-auto hover:text-white hover:bg-[#191919] rounded-full"
                  target="_self"
                  title="ข้อเสนอเชิงนโยบาย"
                  rel="noopener noreferrer"
                >
                  <span>ข้อเสนอเชิงนโยบาย</span>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="relative h-full bg-[#ECF1EB]">
          <div className="py-12 mx-auto max-w-7xl lg:py-24 lg:mb-24">
            <div className="grid grid-cols-1 gap-6 md:gap-0 xl:gap-6 md:grid-cols-2">
              <div className="relative flex flex-col col-span-1 space-y-6 text-body">
                <div className="px-6 space-y-6 lg:px-12">
                  <h3 className="text-4xl font-bold leading-snug">
                    สิ่งที่เกิดขึ้นจาก
                    <br />
                    กระบวนการ
                  </h3>
                  <p className="font-body">Policy dialogue ไม่ได้มีแต่ผลลัพธ์เชิงเนื้อหา แต่ยังสามารถสร้างคุณค่าในการผลักดันเชิงนโยบาย</p>
                </div>
                <div className="right-0 w-full px-6 overflow-hidden md:absolute md:px-0 md:pt-48">
                  <Image width={640} height={380} layout="responsive" priority src={ProcessResult} />
                </div>
              </div>
              <div className="h-full col-span-1 px-6 lg:px-12">
                <ul className="space-y-12">
                  <li className="space-y-2 md:space-y-4">
                    <h3 className="text-xl font-bold">ผู้เข้าร่วมสะท้อนว่าวงหารือมีความ เป็นกันเอง ช่วยเปิดมุมมองที่แตกต่าง และสร้างการมีส่วนร่วม</h3>
                    <p className="font-body">
                      พูดคุยกันง่ายขึ้น กว้างขึ้น แม้ว่าจะเคยร่วมงานกันมาก่อน เห็นความสำคัญในหัวข้อนี้และอยากมีส่วนร่วมต่อ
                      อยากแลกเปลี่ยนประสบการณ์ให้ผู้ที่เกี่ยวข้องท่านอื่นๆ ได้รับรู้เช่นกัน
                    </p>
                  </li>
                  <li className="space-y-2 md:space-y-4">
                    <h3 className="text-xl font-bold">ผู้เข้าร่วมเห็นจุดร่วมและข้อสรุปที่ตรงกัน เห็นว่าควรมีกลไกติดตามเชิงนโยบาย</h3>
                    <p className="font-body">
                      และไม่เห็นด้วยกับแนวทางการจัดตั้งองค์กร หรือกลไกใหม่ เนื่องจากจะยิ่งทำให้ซับซ้อนยิ่งขึ้น แต่ควรใช้ประโยชน์จากกลไกที่มีอยู่เดิม เช่น
                      “คณะอนุกรรมการขับเคลื่อนนโยบายเตรียมความพร้อมรองรับสังคมสูงวัย” ภายใต้คณะกรรมการผู้สูงอายุ แห่งชาติ (กผส.)
                      และพิจารณาปรับการทำงานภายใต้กลไกเดิมแทน
                      <br />
                      <br />
                      มีความเห็นร่วมกันในหลายประเด็น อาทิ การทำให้บทบาทและผลงานของ กผส. เป็นที่รับรู้มากขึ้น ให้สังคมช่วยกันติดตามผลจากนโยบาย เป็นต้น
                    </p>
                  </li>
                  <li className="space-y-2 md:space-y-4">
                    <h3 className="text-xl font-bold">เกิดการปฏิบัติจริงทันที</h3>
                    <p className="font-body">
                      ส.ส. ที่มาร่วมในวงหารือนโยบายฯ ได้แจ้งในวงหารือว่า จะเสนอต่อสภาผู้แทนราษฎรให้มีการพิจารณาตั้ง
                      คณะกรรมาธิการวิสามัญเพื่อพิจารณาศึกษาและติดตามการขับเคลื่อนนโยบายเพื่อรองรับสังคมสูงวัย
                      และได้ยื่นญัตติเพื่อเสนอตั้งคณะกรรมาธิการวิสามัญดังกล่าวแล้ว
                      <br />
                      <br />
                      กรมกิจการผู้สูงอายุ พม. ได้เพิ่มรายชื่อคณะ อนุกรรมการฯ ในเว็บไซต์เพื่อให้เข้าถึงข้อมูลได้อย่าง เปิดเผยขึ้น
                      โดยที่ก่อนหน้านี้ไม่มีข้อมูลอยู่และเป็นประเด็นหารือว่าควรมีการเปิดเผยกับสาธารณะ
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <RelatedPolicy policies={relatedPolicy} />
        <InterestProjects projects={interestProjects} />
      </main>
    </>
  )
}

export default GmPage
