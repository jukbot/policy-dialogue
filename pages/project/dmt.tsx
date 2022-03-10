import Header from '@/components/Layout/Header'
import Timeline from '@/components/Project/DMT/Timeline'
import TimelineHeader from '@/components/Project/DMT/TimelineHeader'
import TimelineMobile from '@/components/Project/DMT/TimelineMobile'
import TimelineSummary from '@/components/Project/DMT/TimelineSummary'
import Meta from '@/data/meta.json'
import policies from '@/data/policies.json'
import projects from '@/data/projects.json'
import { DownloadIcon } from '@heroicons/react/solid'
import { Policy, Project } from '@types'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import FacebookBanner from '/public/image/aip/facebook.jpg'
import Emotion from '/public/image/dmt/emotion.svg'
import Chart1 from '/public/image/dmt/chart-1.svg'
import Chart2 from '/public/image/dmt/chart-2.svg'
import Circle from '/public/image/dmt/circle.webp'
import HeroImage from '/public/image/dmt/hero-image.webp'
import Icon1 from '/public/image/dmt/icon-1.svg'
import Icon2 from '/public/image/dmt/icon-2.svg'
import Icon3 from '/public/image/dmt/icon-3.svg'
import Icon4 from '/public/image/dmt/icon-4.svg'
import ProcessResult from '/public/image/dmt/process-result.webp'
import Result1 from '/public/image/dmt/testimonial-1.webp'
import Result2 from '/public/image/dmt/testimonial-2.webp'
import Result3 from '/public/image/dmt/testimonial-3.webp'
import Result4 from '/public/image/dmt/testimonial-4.webp'

const InterestProjects = dynamic(() => import('@/components/Project/InterestProjects'))
const RelatedPolicy = dynamic(() => import('@/components/Project/RelatedPolicy'))

const relatedPolicy: Policy[] = [policies[0], policies[1]]
const interestProjects: Project[] = [projects[5], projects[2], projects[3], projects[6]]

const DmtPage = () => {
  return (
    <>
      <Header
        title="ระบบบริการและการดูแลผู้มีภาวะสมองเสื่อม (Dementia)"
        description="เป็นอยู่อย่างไร ในช่วงวัยที่เราอาจเลอะเลือน"
        image={`${Meta.baseUrl}${FacebookBanner.src}`}
        width={FacebookBanner.width}
        height={FacebookBanner.height}
      />
      <main className="relative pt-[3.75rem] bg-[#EFEFEF]">
        <section className="relative h-[70vh] lg:h-[50vh] xl:h-[90vh] grid items-center bg-[#717171]">
          <div className="flex flex-col items-center justify-between w-full h-full lg:mb-6 lg:flex-row">
            <div className="flex flex-col justify-center px-6 py-12 mt-6 space-y-4 text-center text-white lg:mt-0 lg:justify-start lg:px-12 lg:ml-12 xl:ml-24 item-center lg:item-start lg:text-left">
              <div className="space-y-2 text-3xl font-bold lg:text-4xl 2xl:text-6xl">
                <h1>เป็นอยู่อย่างไร</h1>
                <h1>ในช่วงวัยที่เราอาจเลอะเลือน</h1>
              </div>
              <h2 className="max-w-sm mx-auto text-base leading-snug lg:text-lg sm:text-xl font-body lg:m-0">
                ระบบบริการและการดูแลผู้มีภาวะสมองเสื่อม (Dementia) นโยบายที่ต้องผลักดัน
              </h2>
            </div>
            <Image src={HeroImage} className="h-full shrink-0" width={800} height={480} priority alt="cover image" />
          </div>
        </section>

        <section className="relative h-full bg-[#EFEFEF] pb-6 md:pb-0">
          <section className="left-0 w-full h-full space-y-12 xl:absolute -top-24">
            <div className="relative flex flex-col max-w-6xl px-6 py-12 mx-auto space-y-6 md:items-center md:px-12 md:py-16 md:space-x-8 bg-secondary">
              <h2 className="relative max-w-3xl text-xl font-bold leading-relaxed tracking-wide text-white md:text-center md:text-3xl">
                สมองเสื่อมเป็นภาวะที่ส่วนใหญ่ ไม่สามารถรักษาให้หายขาด ผู้ป่วยอาจอยู่ในภาวะทุพพลภาพยาวนาน 10-20 ปี
              </h2>
              <p className="relative flex leading-relaxed text-white opacity-75 max-w-prose md:justify-center md:text-center font-body">
                ภาวะสมองเสื่อมจึงไม่ได้มีผลกระทบต่อผู้ป่วยเท่านั้น แต่ยังส่งผลต่อผู้ดูแลและคนรอบข้างซึ่งมีจำนวนใกล้เคียงกับผู้ป่วย ทั้งด้านร่างกาย จิตใจ
                เศรษฐกิจ และสังคม
              </p>
            </div>
          </section>

          <div className="grid grid-cols-1 pt-6 gap-y-6 md:gap-0 md:grid-cols-2 xl:pt-72">
            <div className="relative col-span-1 px-6 md:px-0 ">
              <Image src={Result1} layout="responsive" priority height="640" width="1024" alt="expect-ressult-1" />
            </div>
            <div className="relative flex flex-col col-span-1 p-6 space-y-2 md:space-y-4 lg:p-12 xl:space-y-8 xl:pt-16 xl:px-16 text-body">
              <h3 className="max-w-lg text-xl font-bold leading-snug lg:text-2xl">
                จะดีกว่าไหม หากประเทศไทยมีระบบคัดกรอง และดูแลผู้มีภาวะสมองเสื่อมอย่างมีประสิทธิภาพ
              </h3>
              <p className="max-w-sm leading-relaxed font-body">
                มีคุณภาพชีวิตและความเป็นอยู่ที่ดีทั้งผู้ป่วย และครอบครัว ลดการพึ่งพาเจ้าหน้าที่ในระบบสาธารณสุขในการดูแล
              </p>
            </div>
          </div>

          <div className="relative grid grid-cols-1 gap-y-6 md:gap-0 md:grid-cols-2">
            <div className="flex flex-col order-last col-span-1 p-6 space-y-2 md:space-y-4 lg:p-12 xl:space-y-8 md:order-first xl:pt-16 xl:px-16 text-body">
              <h3 className="max-w-lg text-xl font-bold leading-snug lg:text-2xl">
                เร่งคัดแยกผู้สูงอายุที่มีภาวะการรู้คิดบกพร่องเล็กน้อย (MCI) ซึ่งเป็นกลุ่มเสี่ยงสำคัญของภาวะสมองเสื่อมตั้งแต่เนิ่นๆ
              </h3>
              <p className="max-w-xl leading-relaxed font-body">
                เพื่อให้กลุ่มเสี่ยงได้ตระหนักถึงภาวะทางสมอง ของตนเอง เพิ่มโอกาสในการปรับพฤติกรรมเพื่อกระตุ้นและชะลอความเสื่อมของสมอง
              </p>
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
              <h3 className="max-w-lg text-xl font-bold leading-snug lg:text-2xl">
                มีบริการดูแลผู้ป่วยชั่วคราว (Respite Service) ทั้งแบบศูนย์บริการ หรืออยู่ในชุมชน
              </h3>
              <p className="max-w-xl leading-relaxed font-body">
                ผู้ป่วยไม่ถูกทอดทิ้งให้อยู่ตามลำพังยามที่ผู้ดูแลมีกิจธุระ อีกทั้งยังเพื่ื่อลดความเหนื่อย ท้อ เครียดสะสม ของผู้ดูแล จากการดูแลที่ต่อเนื่องยาวนาน
                ซึ่งอาจส่งผลต่อสภาพจิตใจ
              </p>
            </div>
          </div>

          <div className="relative grid grid-cols-1 gap-y-6 md:gap-0 md:grid-cols-2">
            <div className="flex flex-col order-last col-span-1 p-6 space-y-2 md:space-y-4 lg:p-12 xl:space-y-8 md:order-first xl:pt-16 xl:px-16 text-body">
              <h3 className="max-w-lg text-xl font-bold leading-snug lg:text-2xl">เกิดเครือข่ายเกื้อกูลผู้ดูแลผู้ป่วยสมองเสื่อม (Support Group)</h3>
              <p className="max-w-xl leading-relaxed font-body">
                เพื่อสอดส่องดูแลสุขภาพใจ ทั้งความเครียดและภาวะ ซึมเศร้าในญาติที่เป็นผู้ดูแล จัดกิจกรรมเสริมแรงใจ
                รวมถึงช่วยให้เกิดการแลกเปลี่ยนองค์ความรู้และประสบการณ์
              </p>
            </div>
            <div className="relative col-span-1 px-6 md:px-0">
              <Image src={Result4} layout="responsive" priority height="640" width="1024" alt="expect-ressult-2" />
            </div>
          </div>
        </section>

        <section className="relative h-full bg-[#8C8C8C]">
          <div className="flex flex-col items-center justify-center px-6 text-white pb-52">
            <svg xmlns="http://www.w3.org/2000/svg" width="62" height="180" viewBox="0 0 62 330">
              <text data-name="!" transform="translate(0 223)" fill="#fff" fontFamily="IBMPlexSansThai, sans-serif" fontWeight="600" fontSize="200">
                <tspan x="0" y="0">
                  !
                </tspan>
              </text>
            </svg>
            <p className="max-w-lg text-base font-bold leading-relaxed text-center sm:text-lg lg:text-xl">
              ภาวะสมองเสื่อมเป็นอาการที่พบมากในผู้สูงอายุ อาจพบได้ถึง 0.2-1 ล้านคน<span className="text-base">*</span> จากประชากรผู้สูงอายุในปี 2563
              ซึ่งเป็นความท้าทายสำคัญของประเทศไทยต่อการเตรียมรับมือ จำนวนผู้มีภาวะพึ่งพิงที่อาจเพิ่มขึ้นเรื่อยๆ จากภาวะทางสมอง
            </p>
            <p className="max-w-xl mt-6 text-sm text-center font-body">
              *คำนวณจากความชุกผู้ป่วยสมองเสื่อมในไทย 2-10% :
              <br />
              <a href="https://thaitgri.org/?p=38965" target="_blank" rel="noreferrer">
                ข้อมูลจาก มส.ผส., “ภาวะสมองเสื่อม” ป่วยเพิ่มปีละ 1 แสนราย สถิติชี้ ร้อยละ 50 ของผู้สูงวัย80ขึ้นไปมีอาการ (2020)
              </a>
            </p>
          </div>
        </section>

        <section className="relative h-full px-6 py-24 bg-secondary">
          <div className="absolute left-0 flex justify-center w-full -top-40">
            <Image src={Circle} width={300} height={300} alt="circle image" />
          </div>
          <div className="flex flex-col items-center justify-center pt-20 space-y-2 text-white">
            <div className="flex flex-col items-center space-y-8">
              <p className="max-w-xl text-xl font-bold leading-relaxed text-center">
                ความรุนแรงของภาวะสมองเสื่อมในระยะต่างๆ ยังส่งผลต่อความสามารถ ในการใช้ชีวิตประจำวันด้วยตนเอง ยิ่งอยู่ในระยะรุนแรงมากขึ้น
                ก็จะยิ่งสูญเสียความสามารถในการใช้ชีวิต และมีโอกาสมีอาการทางประสาทจิตเวชร่วมด้วย เช่น อาการหลงผิด ประสาทหลอน มีปัญหาการนอนหลับ เป็นต้น
              </p>
              <Image src={Emotion} width={350} alt="emotion" />
            </div>
            <div className="flex flex-col items-center space-y-8">
              <p className="max-w-xl text-xl font-bold leading-relaxed text-center">การพึ่งพาผู้ดูแลจึงเป็นสิ่งที่จำเป็นอย่างมาก </p>
              <p className="max-w-xl text-base text-center font-body ">
                แต่การดูแลผู้ป่วยสมองเสื่อม 1 คนอย่างครอบคลุมและมีคุณภาพ อาจมีค่าใช้จ่ายสูงถึง 50,000 บาทต่อเดือน ซึ่งเป็นค่าใช้จ่ายด้านการจ้างผู้ดูแล ค่ายา
                ค่าปรับปรุง สภาพบ้าน หรือซ่อมแซมข้าวของเสียหาย
              </p>
              <Image src={Chart1} width={350} alt="chart-1" />
              <p className="max-w-xl text-base text-center font-body">
                หรือหากไม่จ้าง สมาชิกครอบครัวก็ต้องสูญเสียรายได้จากงานประจำ 9,000-15,000 บาทต่อเดือน เป็นอย่างน้อย
              </p>
              <p className="max-w-lg text-xl font-bold leading-relaxed text-center">
                และยังพบว่า ผู้ดูแลผู้ป่วยสมองเสื่อม 9 ใน 10 ราย มีอาการเครียดและวิตกกังวลหลายครั้งต่อสัปดาห์*
              </p>
              <Image src={Chart2} width={400} alt="chart-2" />
              <p className="text-xs text-center text-white font-body">
                *ข้อมูลจาก Alzheimer&apos;s Society survey, Carers for people with dementia struggling in silence (2018)
              </p>
            </div>
          </div>
        </section>

        <section className="relative h-full pt-6 bg-[#EFEFEF] md:pt-12">
          <div className="max-w-6xl px-6 py-8 mx-auto space-y-12 text-body">
            <h2 className="text-2xl font-bold leading-relaxed text-center md:text-4xl">
              แต่ยังมีความท้าทายหลายประการ
              <br />
              ที่จะเอื้อให้เกิดระบบที่เหมาะสม
            </h2>
            <div className="grid grid-cols-1 gap-8 lg:gap-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col col-span-1 space-y-4 text-center">
                <Image src={Icon1} width={120} height={120} priority />
                <p className="mx-auto text-base font-body sm:max-w-sm">
                  ระบบการคัดกรองผู้มี ภาวะสมองเสื่อมเป็นคอขวด เนื่องจากบุคลากร ทางการแพทย์ที่สามารถ คัดกรองและดูแลผู้มีภาวะ สมองเสื่อมได้
                  มีจำนวนจำกัดและมักมีภาระงานหนัก
                </p>
              </div>
              <div className="flex flex-col col-span-1 space-y-4 text-center">
                <Image src={Icon2} width={120} height={120} priority />
                <p className="mx-auto text-base font-body sm:max-w-sm">
                  บุคลากรในพื้นที่ไม่มีความรู้และกำลังในการจัดการดูแลผู้ป่วยสมองเสื่อม รวมถึง การจัด intervention เพื่อกระตุ้นสมอง ชะลอความเสื่อม
                </p>
              </div>
              <div className="flex flex-col col-span-1 space-y-4 text-center">
                <Image src={Icon3} width={120} height={120} priority />
                <p className="mx-auto text-base font-body sm:max-w-sm">
                  บุคลากรในพื้นที่ ขาดความตระหนักเรื่องภาวะ สมองเสื่อม ไม่เห็นความ เร่งด่วน และผู้สูงอายุ ส่วนใหญ่ไม่ต้องการ คัดกรองภาวะทางสมอง
                  รวมถึงทัศนคติแง่ลบ ต่อภาวะสมองเสื่อมในสังคมไทย เช่น รู้สึกอับอาย กลัวไม่ได้รับการยอมรับ
                </p>
              </div>
              <div className="flex flex-col col-span-1 space-y-4 text-center">
                <Image src={Icon4} width={120} height={120} priority />
                <p className="mx-auto text-base font-body sm:max-w-sm">
                  ระบบการจัดบริการดูแลระยะยาวไม่ได้ตอบสนองต่อการดูแลผู้สูงอายุที่มีภาวะสมองเสื่อมเนื่องจาก ต้องการการดูแลอย่าง ต่อเนื่องวันละ 24 ชั่วโมง
                  และยังเป็นการดูแลที่ ต่อเนื่องยาวนานนับสิบปี ซึ่งมีค่าใช้จ่ายค่อนข้างสูง
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto text-body">
            <div className="w-full h-full max-w-4xl px-6 pt-16 pb-6 mx-auto space-y-8 text-white md:px-24 bg-secondary">
              <div className="flex flex-col items-center h-full space-y-6 md:justify-between md:flex-row md:space-y-0">
                <h3 className="text-3xl font-bold">ทำอย่างไร?</h3>
                <p className="font-bold text-center md:max-w-sm md:text-left font-body">
                  จึงเกิดระบบที่คัดกรองได้ตั้งแต่เนิ่นๆ สามารถ หาทางกระตุ้นสมอง ชะลอไม่ให้เข้าสู่ภาวะ สมองเสื่อมในอนาคตได้
                  และสร้างความตระหนักรู้ต่อภาวะสมองเสื่อม
                </p>
              </div>
              <p className="flex flex-col flex-wrap text-base text-center font-body md:block">
                และทำอย่างไร ให้ผู้สูงอายุที่มีภาวะสมองเสื่อมได้รับการดูแลที่เหมาะสม เกิดกลไกสนับสนุนญาติ ที่เป็นผู้ดูแล
                เพื่อช่วยลดภาระสำหรับครอบครัวให้ได้มากที่สุด
              </p>
            </div>
          </div>
        </section>
        <section className="relative h-full bg-[#A9A9A9]">
          <div className="w-full h-full max-w-4xl px-6 pb-6 mx-auto space-y-8 text-white md:pb-12 md:px-24 bg-secondary">
            <div className="w-full border-t-2 border-white md:px-24" />
            <p className="text-center font-body">โดยแบ่งออกเป็น 2 หัวข้อย่อย</p>
            <div className="grid w-full grid-cols-1 gap-12 mt-6 md:grid-cols-2">
              <div className="flex flex-col col-span-1 space-y-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 shrink-0" viewBox="0 0 50 50">
                  <path
                    d="M754.415 1113.507a7.919 7.919 0 0 0-6.045-14.593 7.919 7.919 0 0 0-14.593-6.045 7.919 7.919 0 0 0-14.593 6.045 7.919 7.919 0 0 0-6.045 14.593 7.919 7.919 0 0 0 6.045 14.594 7.919 7.919 0 0 0 14.593 6.045 7.919 7.919 0 0 0 14.593-6.045 7.919 7.919 0 0 0 6.045-14.594z"
                    transform="translate(-708.777 -1088.507)"
                    fill="#8f8ac7"
                  />
                </svg>
                <p className="font-body">ระบบคัดกรองภาวะสมองเสื่อม</p>
              </div>
              <div className="flex flex-col col-span-1 space-y-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 shrink-0" viewBox="0 0 50 50">
                  <path
                    d="M754.415 1113.507a7.919 7.919 0 0 0-6.045-14.593 7.919 7.919 0 0 0-14.593-6.045 7.919 7.919 0 0 0-14.593 6.045 7.919 7.919 0 0 0-6.045 14.593 7.919 7.919 0 0 0 6.045 14.594 7.919 7.919 0 0 0 14.593 6.045 7.919 7.919 0 0 0 14.593-6.045 7.919 7.919 0 0 0 6.045-14.594z"
                    transform="translate(-708.777 -1088.507)"
                    fill="#daa13d"
                  />
                </svg>
                <p className="font-body">กลไกเจ้าภาพบริหารจัดการระหว่าง หน่วยงานที่เกี่ยวข้องกับการดูแลระยะยาวและการดูแลผู้ที่มีภาวะสมองเสื่อม</p>
              </div>
            </div>
          </div>
          <div className="max-w-6xl px-0 mx-auto md:px-6 text-body">
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
        <section className="relative h-full bg-[#717171]">
          <div className="max-w-4xl mx-auto bg-[#2b2b2b] pb-12">
            <div className="relative overflow-hidden w-full h-[300px] flex justify-center">
              <TimelineSummary />
            </div>
            <div className="grid w-full grid-cols-1 gap-12 px-6 mt-6 text-white md:gap-24 md:grid-cols-2 md:px-24">
              <div className="flex flex-col max-w-sm col-span-1 space-y-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 shrink-0" viewBox="0 0 50 50">
                  <path
                    d="M754.415 1113.507a7.919 7.919 0 0 0-6.045-14.593 7.919 7.919 0 0 0-14.593-6.045 7.919 7.919 0 0 0-14.593 6.045 7.919 7.919 0 0 0-6.045 14.593 7.919 7.919 0 0 0 6.045 14.594 7.919 7.919 0 0 0 14.593 6.045 7.919 7.919 0 0 0 14.593-6.045 7.919 7.919 0 0 0 6.045-14.594z"
                    transform="translate(-708.777 -1088.507)"
                    fill="#8f8ac7"
                  />
                </svg>
                <p>ระบบคัดกรองภาวะสมองเสื่อม</p>
                <div className="w-full border-t-2 border-white md:px-24" />
                <div className="pt-6 space-y-6">
                  <ul className="flex flex-col space-y-6">
                    <li className="space-y-2">
                      <h3 className="text-xl font-bold">ยุทธศาสตร์ย่อยที่ 1</h3>
                      <p className="font-body">ผู้สูงอายุทุกคนเข้าถึงการคัดแยกภาวะ การรู้คิดบกพร่องเล็กน้อย (MCI)</p>
                    </li>
                    <li className="space-y-2">
                      <h3 className="text-xl font-bold">ยุทธศาสตร์ย่อยที่ 2</h3>
                      <p className="font-body">ประชาชนมีความรู้ความเข้าใจต่อภาวะ การรู้คิดบกพร่องเล็กน้อย (MCI) และ ภาวะสมองเสื่อมที่ถูกต้อง</p>
                    </li>
                    <li className="space-y-2">
                      <h3 className="text-xl font-bold">ยุทธศาสตร์ย่อยที่ 3</h3>
                      <p className="font-body">
                        จัดให้มี intervention กระตุ้นสมองและชะลอความเสื่อมสำหรับผู้สูงอายุที่มีภาวะการรู้คิดบกพร่องเล็กน้อย (MCI) ในระดับครอบครัวจนถึงชุมชน
                      </p>
                    </li>
                  </ul>
                  <Link href="/archive#thematic-briefs">
                    <a
                      className="text-[#8f8ac7] inline-flex mt-auto items-center btn bg-white hover:text-white hover:bg-[#8f8ac7] rounded-full"
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
              <div className="flex flex-col max-w-sm col-span-1 space-y-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 shrink-0" viewBox="0 0 50 50">
                  <path
                    d="M754.415 1113.507a7.919 7.919 0 0 0-6.045-14.593 7.919 7.919 0 0 0-14.593-6.045 7.919 7.919 0 0 0-14.593 6.045 7.919 7.919 0 0 0-6.045 14.593 7.919 7.919 0 0 0 6.045 14.594 7.919 7.919 0 0 0 14.593 6.045 7.919 7.919 0 0 0 14.593-6.045 7.919 7.919 0 0 0 6.045-14.594z"
                    transform="translate(-708.777 -1088.507)"
                    fill="#daa13d"
                  />
                </svg>
                <p>กลไกเจ้าภาพบริหารจัดการระหว่างหน่วยงานที่เกี่ยวข้องกับการดูแลระยะยาวและการดูแลผู้ที่มีภาวะสมองเสื่อม</p>
                <div className="w-full border-t-2 border-white md:px-24" />
                <div className="pt-6 space-y-6">
                  <ul className="flex flex-col space-y-6">
                    <li className="space-y-2">
                      <h3 className="text-xl font-bold">แนวทางที่ 1</h3>
                      <p className="font-body">ลดผลกระทบต่อผู้ดูแลจากการดูแลผู้ป่วย </p>
                    </li>
                    <li className="space-y-2">
                      <h3 className="text-xl font-bold">แนวทางที่ 2</h3>
                      <p className="font-body">เสริมแรงใจ เพื่อให้ผู้ดูแลมีกำลังใจพอที่จะสู้กับความเหนื่อย ความท้อจากการดูแลอย่างต่อเนื่อง</p>
                    </li>
                    <li className="space-y-2">
                      <h3 className="text-xl font-bold">แนวทางที่ 3</h3>
                      <p className="font-body">ส่งต่อองค์ความรู้ เพื่อให้ผู้ดูแลมีองค์ ความรู้ที่เพียงพอต่อการดูแล</p>
                    </li>
                  </ul>
                  <Link href="/archive#thematic-briefs">
                    <a
                      className="text-[#daa13d] mt-auto inline-flex bg-white hover:text-white hover:bg-[#daa13d] btn rounded-full"
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
            </div>
          </div>
        </section>

        <section className="relative h-full bg-[#EFEFEF]">
          <div className="py-12 max-w-7xl lg:py-24 lg:mb-24">
            <div className="grid grid-cols-1 gap-6 md:gap-0 xl:gap-6 md:grid-cols-2">
              <div className="flex flex-col col-span-1 space-y-6 text-body">
                <div className="space-y-6 lg:space-y-12 top-32 md:sticky">
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
                <ul className="space-y-12">
                  <li className="space-y-2 md:space-y-4">
                    <h3 className="text-xl font-bold">ผู้เข้าร่วมสะท้อนว่าเป็นประโยชน์กับตนเองและงานที่ทำ จากการแลกเปลี่ยนมุมมองที่หลากหลาย</h3>
                    <p className="font-body">
                      เห็นแนวทางที่น่าสนใจสามารถพัฒนาต่อยอดงาน ของตนเอง ได้คุยกับผู้มีส่วนเกี่ยวข้องซึ่งน่าจะผลักดันร่วมกันต่อได้
                      <br />
                      <br />
                      ได้เห็นการแสดงความคิดเห็นจากหน่วยงานของรัฐ และประชาชน สามารถสะท้อนให้เห็นว่าเรื่องดังกล่าวมีความจำเป็นและสำคัญ
                      <br />
                      <br />
                      แพทย์ประสาทวิทยาได้รับฟังความคิดเห็นจากตัวแทนประชาชน ทำให้เห็นว่าควรคิดโจทย์เพื่อตอบ ความต้องการประชาชนจริงๆ
                      จากเดิมที่ไม่ได้รับฟังขนาดนี้มาก่อน
                    </p>
                  </li>
                  <li className="space-y-2 md:space-y-4">
                    <h3 className="text-xl font-bold">เป็นพื้นที่ที่เชื่อมต่อผู้ที่เกี่ยวข้อง ที่สามารถร่วมมือกันได้หลังจากกิจกรรม</h3>
                    <p className="font-body">
                      ผู้พัฒนาบอร์ดเกมได้ติดต่อกับตัวแทนจากคลินิก ผู้สูงอายุ เพื่อพัฒนาสื่อสร้างสรรค์สำหรับโจทย์นี้
                      <br />
                      <br />
                      แพทย์ประสาทวิทยาได้แลกเปลี่ยนกับพื้นที่ที่มีโอกาสนำร่อง และเห็นโอกาสทดลอง intervention หรือ เครื่องมือที่เกี่ยวข้องหลังจากนี้
                      <br />
                      <br />
                      ตัวแทนกรมอนามัยได้ประโยชน์จากที่ได้เห็นแนวทางพัฒนา intervention สำหรับผู้ดูแลผู้ป่วยสมองเสื่อม และสนใจอยากเข้าร่วมกิจกรรมในครั้งถัดไป
                    </p>
                  </li>
                  <li className="space-y-2 md:space-y-4">
                    <h3 className="text-xl font-bold">ได้เผยแพร่ข้อมูลในวงกว้างผ่านช่องทางออนไลน์ </h3>
                    <p className="font-body">
                      ตัวแทนสื่อสะท้อนว่าสามารถนำเอาสิ่งที่ได้จากวันนี้ ไปต่อยอดเพื่อให้สังคมรู้เรื่องนี้มากขึ้น
                      <br />
                      <br />
                      ทีมจัดทำโครงการไปเล่าเรื่อง policy dialogue ในครั้งนี้ผ่าน{' '}
                      <a target="_blank" href="https://www.youtube.com/watch?v=WFAEnHgwpUw" className="underline text-primary" rel="noreferrer">
                        podcast
                      </a>
                      <br />
                      <br />
                      สื่อได้นัดหมายผู้เชี่ยวชาญด้านสมอง ที่พบกันในวงหารือไปเป็นแขกรับเชิญใน podcast ด้วยเช่นกัน
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

export default DmtPage
