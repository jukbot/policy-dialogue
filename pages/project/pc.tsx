import Header from '@/components/Layout/Header'
import Timeline from '@/components/Project/PC/Timeline'
import TimelineHeader from '@/components/Project/PC/TimelineHeader'
import TimelineMobile from '@/components/Project/PC/TimelineMobile'
import TimelineSummary from '@/components/Project/PC/TimelineSummary'
import Meta from '@/data/meta.json'
import policies from '@/data/policies.json'
import projects from '@/data/projects.json'
import { DownloadIcon } from '@heroicons/react/solid'
import { Policy, Project } from '@types'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import FacebookBanner from '/public/image/aip/facebook.jpg'
import Chart from '/public/image/pc/chart.svg'
import Circle from '/public/image/pc/circle.webp'
import HeroImage from '/public/image/pc/hero-image.webp'
import Icon1 from '/public/image/pc/icon-1.svg'
import Icon2 from '/public/image/pc/icon-2.svg'
import Icon3 from '/public/image/pc/icon-3.svg'
import Icon4 from '/public/image/pc/icon-4.svg'
import ProcessResult from '/public/image/pc/process-result.webp'
import Result1 from '/public/image/pc/testimonial-1.webp'
import Result2 from '/public/image/pc/testimonial-2.webp'
import Result3 from '/public/image/pc/testimonial-3.webp'

const InterestProjects = dynamic(() => import('@/components/Project/InterestProjects'))
const RelatedPolicy = dynamic(() => import('@/components/Project/RelatedPolicy'))

const relatedPolicy: Policy[] = [policies[0], policies[1], policies[3]]
const interestProjects: Project[] = [projects[5], projects[4], projects[0], projects[6]]

const PcPage = () => {
  return (
    <>
      <Header
        title="ระบบการดูแลผู้ป่วยแบบประคับประคอง (Palliative Care)"
        description="บั้นปลายชีวิตคนไทย อยู่อย่างไรจึงเป็นสุข ?"
        image={`${Meta.baseUrl}${FacebookBanner.src}`}
        width={FacebookBanner.width}
        height={FacebookBanner.height}
      />
      <main className="relative pt-[3.75rem] bg-[#EBEAF8]">
        <section className="relative h-[70vh] lg:h-[50vh] xl:h-[90vh] transition grid items-center bg-[#3f36b7]">
          <div className="flex flex-col items-center justify-between w-full h-full lg:mb-6 lg:flex-row">
            <div className="flex flex-col justify-center px-6 py-12 mt-6 space-y-4 text-center text-white lg:mt-0 lg:justify-start lg:px-12 lg:ml-12 xl:ml-24 item-center lg:item-start lg:text-left">
              <h1 className="max-w-xl text-3xl font-bold lg:text-5xl 2xl:text-6xl">
                บั้นปลายชีวิตคนไทย
                <br /> อยู่อย่างไรจึงเป็นสุข ?
              </h1>
              <h2 className="max-w-sm mx-auto text-base leading-snug lg:text-lg sm:text-xl font-body lg:m-0">
                นโยบายระบบการดูแลผู้ป่วยแบบประคับประคอง (Palliative Care) ที่ต้องชวนคุย
              </h2>
            </div>
            <Image src={HeroImage} className="h-full shrink-0" width={800} height={480} priority alt="cover image" />
          </div>
        </section>

        <section className="relative h-full bg-[#EBEAF8] pb-6 md:pb-0">
          <section className="left-0 w-full h-full space-y-12 xl:absolute -top-24">
            <div className="relative flex flex-col max-w-6xl px-6 py-12 mx-auto space-y-6 md:items-center md:px-12 md:py-16 md:space-x-8 bg-secondary">
              <h2 className="relative text-xl font-bold leading-relaxed tracking-wide text-white md:text-center md:text-3xl">
                ปัจจุบัน การดูแลผู้ป่วยแบบประคับประคอง
                <br />
                ในประเทศไทย วางอยู่บนฐานของการ
                <br />
                &lquote;ยื้อความตาย&rquote; เป็นหลัก
              </h2>
              <p className="relative flex max-w-2xl leading-relaxed text-white opacity-75 md:justify-center md:text-center font-body">
                ส่งผลให้ผู้ป่วยต้องรับการรักษาในโรงพยาบาลที่แออัด ประกอบกับ &apos;อัตราการครองเตียง&apos; ในโรงพยาบาลที่สูงขึ้นจาก &apos;อัตราการเจ็บป่วย&apos;
                ด้วยโรคไม่ติดต่อเรื้อรังที่เพิ่มขึ้นอย่างต่อเนื่อง
              </p>
            </div>
          </section>

          <div className="grid grid-cols-1 pt-6 gap-y-6 md:gap-0 md:grid-cols-2 xl:pt-72">
            <div className="relative col-span-1 px-6 md:px-0">
              <Image src={Result1} height="640" width="1024" layout="responsive" priority alt="expect-ressult-1" />
            </div>
            <div className="relative flex flex-col col-span-1 p-6 space-y-2 md:space-y-4 lg:px-12 xl:space-y-8 xl:pt-16 xl:px-16 text-body">
              <h3 className="max-w-xl text-xl font-bold leading-snug lg:text-2xl">
                จะเป็นอย่างไร
                <br />
                หากเรายึดแนวคิดการ &lsquo;ตายดี&rsquo;
                <br />
                และ &lsquo;ไม่ยื้อชีวิต&rsquo;
              </h3>
              <p className="leading-relaxed font-body max-xl">ผู้ป่วยไม่ทรมานกับการรักษาที่ไม่มีที่สิ้นสุด ได้อยู่กับครอบครัว และมีภาครัฐช่วยดูแลในชุมชน</p>
            </div>
          </div>

          <div className="relative grid grid-cols-1 gap-y-6 md:gap-0 md:grid-cols-2">
            <div className="flex flex-col order-last col-span-1 p-6 space-y-2 md:space-y-4 lg:p-12 xl:space-y-8 md:order-first xl:pt-16 xl:px-16 text-body">
              <h3 className="max-w-xl text-xl font-bold leading-snug lg:text-2xl">เพิ่มคุณภาพชีวิตของผู้ป่วยและครอบครัว</h3>
              <p className="max-w-xl leading-relaxed font-body">ไม่แออัดที่โรงพยาบาล ได้กลับมาอยู่ในที่ที่คุ้นเคย ไม่ต้องบาดเจ็บทางกายและมีช่วงเวลาสงบสุข</p>
            </div>
            <div className="relative col-span-1 px-6 md:px-0">
              <Image src={Result2} height="640" width="1024" layout="responsive" priority alt="expect-ressult-2" />
            </div>
          </div>

          <div className="relative grid grid-cols-1 gap-y-6 md:gap-0 md:grid-cols-2">
            <div className="col-span-1 px-6 md:px-0">
              <Image src={Result3} height="640" width="1024" layout="responsive" priority alt="expect-ressult-3" />
            </div>
            <div className="relative flex flex-col col-span-1 p-6 space-y-2 md:space-y-4 lg:p-12 xl:space-y-8 xl:pt-16 xl:px-16 text-body">
              <h3 className="max-w-xl text-xl font-bold leading-snug lg:text-2xl">ลดภาระค่าใช้จ่ายทางสุขภาพ</h3>
              <p className="max-w-xl leading-relaxed font-body">
                การดูแลแบบประคับประคองจะช่วยลดค่าใช้จ่ายของตัวผู้ป่วย ครอบครัว และภาครัฐ เมื่อเทียบกับการรักษาแบบยื้อความตาย
              </p>
            </div>
          </div>
        </section>

        <section className="relative h-full bg-[#655DC5]">
          <div className="flex flex-col items-center justify-center px-6 text-white pb-52">
            <svg xmlns="http://www.w3.org/2000/svg" width="62" height="180" viewBox="0 0 62 330">
              <text data-name="!" transform="translate(0 223)" fill="#fff" fontFamily="IBMPlexSansThai, sans-serif" fontWeight="600" fontSize="200">
                <tspan x="0" y="0">
                  !
                </tspan>
              </text>
            </svg>
            <a href="https://kb.hsri.or.th/dspace/handle/11228/1308?locale-attribute=th" target="_blank" rel="noreferrer">
              <p className="text-base font-bold text-center sm:text-lg lg:text-2xl max-w-prose">
                มีครัวเรือนที่อาจจัดได้ว่าอยู่ใน &lsquo;สภาวะล้มละลาย&rsquo; โดยที่มีค่าใช้จ่ายภายใน 1 ปี ก่อนเสียชีวิตมากกว่าร้อยละ 10 ของรายได้ตลอดทั้งปี
                ซึ่งส่วนใหญ่เป็นครัวเรือนที่มีฐานะยากจน*
              </p>
            </a>
            <p className="mt-4 text-xs text-center font-body max-w-prose">
              *ข้อมูลจากการสำรวจการเข้าถึงสถานพยาบาลและรายจ่ายด้านสุขภาพของผู้ป่วยที่เสียชีวิต พ.ศ. 2548-2549
            </p>
          </div>
        </section>

        <section className="relative h-full px-6 py-20 bg-secondary">
          <div className="absolute left-0 flex justify-center w-full -top-40">
            <Image src={Circle} width={300} height={300} alt="circle image" />
          </div>
          <div className="flex flex-col items-center justify-center space-y-6 text-white pt-28">
            <div className="flex flex-col items-center">
              <Image src={Chart} width={450} height={450} alt="chart" />
            </div>
            <div className="flex flex-col items-center space-y-8">
              <p className="max-w-xl text-base text-center font-body">
                ค่ารักษาพยาบาลเดือนสุดท้ายในโรงพยาบาลก่อนเสียชีวิตมีค่าเฉลี่ยที่ ประมาณ 45,000 บาท และมีค่าสูงสุดที่กว่า 340,000 บาท
                แต่หากเป็นการดูแลที่บ้านอย่างได้มาตรฐาน จะมีค่าใช้จ่ายในเดือนสุดท้ายราว 27,000 บาท**
              </p>
              <p className="text-xs font-body">** ข้อมูลจากการสำรวจค่าใช้จ่ายกรณีผู้ป่วยมะเร็งภายใต้โครงการหลักประกันสุขภาพถ้วนหน้า</p>
            </div>
          </div>
        </section>

        <section className="relative h-full pt-6 bg-[#EBEAF8] md:pt-12">
          <div className="max-w-6xl px-6 py-8 mx-auto space-y-12 text-body">
            <h2 className="text-2xl font-bold leading-relaxed text-center md:text-4xl">
              แต่ยังมีความท้าทายที่ต้องฝ่าฟัน
              <br />
              เพื่อให้เกิดนโยบายที่ตอบโจทย์
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              <div className="flex flex-col col-span-1 space-y-4 text-center">
                <Image src={Icon1} width={120} height={120} priority />
                <p className="text-base font-body">การถ่ายทอดความรู้ความเข้าใจยังมีจำกัด ทั้งต่อตัวผู้ป่วย ครอบครัว และบุคลากรในระบบ</p>
              </div>
              <div className="flex flex-col col-span-1 space-y-4 text-center">
                <Image src={Icon2} width={120} height={120} priority />
                <p className="text-base font-body">กฎหมายไม่เอื้อต่อระบบบริหารจัดการการใช้ยาระงับปวดที่บ้าน เพื่อลดความเจ็บไข้ให้ผู้ป่วย</p>
              </div>
              <div className="flex flex-col col-span-1 space-y-4 text-center">
                <Image src={Icon3} width={120} height={120} priority />
                <p className="text-base font-body">ขาดแคลนบุคลากรเฉพาะทาง</p>
              </div>
              <div className="flex flex-col col-span-1 space-y-4 text-center">
                <Image src={Icon4} width={120} height={120} priority />
                <p className="text-base font-body">การเชื่อมประสานระหว่างผู้มีส่วนได้ส่วนเสียในบางพื้นที่ยังไม่ ‘ไร้รอยต่อ’ อย่างแท้จริง</p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative h-full bg-[#B2AEE2] md:mt-16">
          <div className="w-full mx-auto md:absolute md:h-56 md:-mt-12 text-body md:-transform-x-1/2">
            <div className="w-full h-full max-w-4xl px-6 py-16 mx-auto space-y-8 text-white md:px-24 bg-secondary">
              <div className="flex flex-col items-center h-full space-y-6 md:justify-between md:flex-row md:space-y-0">
                <h3 className="text-3xl font-bold">ทำอย่างไร?</h3>
                <p className="leading-relaxed text-center md:max-w-sm md:text-left font-body">
                  จึงจะมีรูปแบบการดูแลผู้ป่วยแบบประคับประคอง ที่บูรณาการการทำงานเชิงระบบ ทั้งฝ่ายสาธารณสุขและชุมชนอย่างมีประสิทธิภาพ สามารถปรับใช้ในแต่ละพื้นที่
                  เพื่อส่งเสริมคุณภาพชีวิตของผู้คนได้
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
        <section className="relative h-full bg-[#3f36b7]">
          <div className="max-w-5xl pb-12 mx-auto">
            <div className="relative overflow-hidden w-full h-[300px] flex justify-center">
              <TimelineSummary />
            </div>
            <div className="grid w-full grid-cols-1 gap-12 px-6 mt-12 text-white md:grid-cols-4 md:px-24">
              <div className="flex flex-col max-w-sm col-span-1 space-y-4">
                <h3 className="text-xl font-bold">ข้อเสนอ 1</h3>
                <p className="font-body">เกิดรูปแบบเครือข่ายที่เชื่อมประสานกับชุมชน ตั้งแต่ระดับโรงพยาบาลศูนย์ลงมา</p>
              </div>
              <div className="flex flex-col max-w-sm col-span-1 space-y-4">
                <h3 className="text-xl font-bold">ข้อเสนอ 2</h3>
                <p className="font-body">เกิดการบริหารจัดการยาระงับปวดในระดับชุมชนที่รวดเร็วและเอื้อต่อการบริหารจัดการ</p>
              </div>
              <div className="flex flex-col max-w-sm col-span-1 space-y-4">
                <h3 className="text-xl font-bold">ข้อเสนอ 3</h3>
                <p className="font-body">เครือข่ายความรู้และความเข้าใจในการดูแลแบบประคับประคองที่ยั่งยืน</p>
              </div>
              <div className="flex flex-col max-w-sm col-span-1 space-y-4">
                <h3 className="text-xl font-bold">ข้อเสนอ 4</h3>
                <p className="font-body">รูปแบบ (model) การดูแลแบบประคับประคองโดยการมีส่วนร่วมของชุมชน</p>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <Link href="/archive#thematic-briefs">
                <a
                  className="text-[#3f36b7] inline-flex btn bg-white hover:text-white hover:bg-primary rounded-full"
                  target="_self"
                  title="ดาวน์โหลดข้อสรุป"
                  rel="noopener noreferrer"
                >
                  <DownloadIcon className="w-5 h-5 mr-2 fill-current" />
                  <span>ดาวน์โหลดข้อสรุป</span>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="relative h-full bg-[#EAEBF8]">
          <div className="py-12 max-w-7xl lg:py-24 lg:mb-24">
            <div className="grid grid-cols-1 gap-6 md:gap-0 xl:gap-6 md:grid-cols-2">
              <div className="flex flex-col col-span-1 space-y-6 text-body">
                <div className="space-y-6 lg:space-y-12">
                  <div className="px-6 space-y-6 md:px-12 lg:px-24">
                    <h3 className="text-4xl font-bold leading-snug">
                      สิ่งที่เกิดขึ้นจาก
                      <br />
                      กระบวนการ
                    </h3>
                    <p className="font-body">Policy dialogue ไม่ได้มีแต่ผลลัพธ์เชิงเนื้อหา แต่ยังสามารถสร้างคุณค่าในการผลักดันเชิงนโยบาย</p>
                  </div>
                  <div className="left-0 w-full px-6 overflow-hidden md:px-0">
                    <Image width={640} height={380} layout="responsive" priority src={ProcessResult} />
                  </div>
                </div>
              </div>
              <div className="h-full col-span-1 px-6 lg:px-12">
                <ul className="flex flex-col items-center h-full space-y-12">
                  <li className="space-y-2 md:space-y-4">
                    <h3 className="text-xl font-bold">ผู้เข้าร่วมเห็นภาพปัญหาที่สำคัญ และเร่งด่วนที่สุดร่วมกัน</h3>
                    <p className="font-body">โดยเฉพาะการทำงานระหว่างผู้มีส่วนได้ส่วนเสียยังไม่เชื่อมประสานและบูรณาการอย่างแท้จริง</p>
                  </li>
                  <li className="space-y-2 md:space-y-4">
                    <h3 className="text-xl font-bold">ผู้เข้าร่วมจากแต่ละวงหารือ ฟังสถานการณ์ รวมถึงได้รับฟังแนวทางการรับมือกับปัญหาและข้อจำกัด</h3>
                    <p className="font-body">
                      ทั้งจากผู้ปฏิบัติงาน ผู้เชี่ยวชาญ นักวิชาการ รวมไปถึงญาติผู้ป่วยระยะประคับประคอง และตัวแทนระดับเขตสุขภาพ เพื่อนำไปปรับปรุง
                      ปรับใช้กับหน่วยงาน ชุมชน หรือส่วนของตนเอง
                    </p>
                  </li>
                  <li className="space-y-2 md:space-y-4">
                    <h3 className="text-xl font-bold">ผู้เข้าร่วมมีความสนใจต่อการขับเคลื่อน</h3>
                    <p className="font-body">
                      อยากให้การดูแลแบบประคับประคองโดยการมีส่วนร่วมในชุมชนเกิดขึ้นได้จริง และแพร่หลายในระดับประเทศ
                      ทั้งยังได้รับรู้การขับเคลื่อนของผู้มีส่วนได้ส่วนเสียต่างๆ ในปัจจุบัน และเห็นโอกาสที่ทุกภาคส่วนจะได้ทำงานร่วมกันต่อไปในอนาคต
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

export default PcPage
