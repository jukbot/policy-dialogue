import Header from '@/components/Layout/Header'
import Timeline from '@/components/Project/LTC/Timeline'
import TimelineHeader from '@/components/Project/LTC/TimelineHeader'
import TimelineMobile from '@/components/Project/LTC/TimelineMobile'
import TimelineSummary from '@/components/Project/LTC/TimelineSummary'
import Meta from '@/data/meta.json'
import policies from '@/data/policies.json'
import projects from '@/data/projects.json'
import { DownloadIcon } from '@heroicons/react/solid'
import { Policy, Project } from '@types'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import Circle from '/public/image/ltc/circle.webp'
import Chart from '/public/image/ltc/chart.svg'
import FacebookBanner from '/public/image/aip/facebook.jpg'
import HeroImage from '/public/image/ltc/hero-image.webp'
import Icon1 from '/public/image/ltc/icon-1.svg'
import Icon2 from '/public/image/ltc/icon-2.svg'
import Icon3 from '/public/image/ltc/icon-3.svg'
import Icon4 from '/public/image/ltc/icon-4.svg'
import ProcessResult from '/public/image/ltc/process-result.webp'
import Result1 from '/public/image/ltc/testimonial-1.webp'
import Result2 from '/public/image/ltc/testimonial-2.webp'
import Result3 from '/public/image/ltc/testimonial-3.webp'

const InterestProjects = dynamic(() => import('@/components/Project/InterestProjects'))
const RelatedPolicy = dynamic(() => import('@/components/Project/RelatedPolicy'))

const relatedPolicy: Policy[] = [policies[0], policies[1], policies[2]]
const interestProjects: Project[] = [projects[5], projects[4], projects[0], projects[6]]

const LtcPage = () => {
  return (
    <>
      <Header
        title="ระบบบริการดูแลระยะยาว (Long-Term Care)"
        description="ประเทศไทยพร้อมแค่ไหน? ที่จะรองรับผู้มีภาวะพึ่งพิง"
        image={`${Meta.baseUrl}${FacebookBanner.src}`}
        width={FacebookBanner.width}
        height={FacebookBanner.height}
      />
      <main className="relative pt-[3.75rem] bg-[#FAF1F6]">
        <section className="relative h-[70vh] lg:h-[50vh] xl:h-[90vh] grid items-center bg-[#cc79a7]">
          <div className="flex flex-col items-center justify-between w-full h-full lg:mb-6 lg:flex-row">
            <div className="flex flex-col justify-center px-6 py-12 mt-6 space-y-4 text-center text-white lg:mt-0 lg:justify-start lg:px-12 lg:ml-12 xl:ml-24 item-center lg:item-start lg:text-left">
              <div className="space-y-2 text-3xl font-bold lg:text-4xl 2xl:text-6xl">
                <h1>ประเทศไทยพร้อมแค่ไหน? </h1>
                <h1>ที่จะรองรับผู้มีภาวะพึ่งพิง*</h1>
              </div>
              <h2 className="max-w-sm mx-auto text-base leading-snug lg:text-lg sm:text-xl font-body lg:m-0">
                ระบบบริการดูแลระยะยาว (Long-Term Care) นโยบายสำคัญที่ต้องผลักดันต่อ
              </h2>
              <p className="text-xs">*หรือผู้สูงอายุกลุ่มติดบ้าน-ติดเตียง</p>
            </div>
            <Image src={HeroImage} className="h-full shrink-0" width={800} height={480} priority alt="cover image" />
          </div>
        </section>

        <section className="relative h-full bg-[#FAF1F6] pb-6 md:pb-0">
          <section className="left-0 w-full h-full space-y-12 xl:absolute -top-24">
            <div className="relative flex flex-col max-w-6xl px-6 py-12 mx-auto space-y-6 md:items-center md:px-12 md:py-16 md:space-x-8 bg-secondary">
              <h2 className="relative max-w-3xl text-xl font-bold leading-relaxed tracking-wide text-white md:text-center md:text-3xl">
                ประเทศไทยมีผู้สูงอายุที่มีภาวะพึ่งพิงกว่า
                <br />
                245,907 คน* จากประชากรผู้สูงอายุทั้งหมด 11 ล้านคน
              </h2>
              <p className="relative flex leading-relaxed text-white opacity-75 max-w-prose md:justify-center md:text-center font-body">
                ถือเป็นสัดส่วนที่ไม่น้อย แต่ประเทศไทยยังขาดระบบบริการการดูแลระยะยาวที่เหมาะสม ซึ่งอาจส่งผลต่อคุณภาพชีวิตและเศรษฐกิจของผู้ป่วย ครอบครัว ผู้ดูแล
                และระบบสาธารณสุขในภาพรวม
              </p>
              <p className="relative flex text-white opacity-75 text-xs font-body ">*ข้อมูลจาก รายงานสถานการณ์ผู้สูงอายุไทย พ.ศ. 2563 (มส.ผส.)</p>
            </div>
          </section>

          <div className="grid grid-cols-1 pt-6 gap-y-6 md:gap-0 md:grid-cols-2 xl:pt-72">
            <div className="relative col-span-1 px-6 md:px-0 ">
              <Image src={Result1} layout="responsive" priority height="640" width="1024" alt="expect-ressult-1" />
            </div>
            <div className="relative flex flex-col col-span-1 p-6 space-y-2 md:space-y-4 lg:p-12 xl:space-y-8 xl:pt-16 xl:px-16 text-body">
              <h3 className="max-w-xl text-xl font-bold leading-snug lg:text-2xl">
                คงจะดี.. หากประเทศไทย มีระบบบริการ การดูแลระยะยาวที่ครอบคลุมประชากรสูงวัย ได้ถ้วนหน้า และจัดสรรบริการพื้นฐาน ที่ตอบสนองความต้องการได้
              </h3>
              <p className="max-w-sm leading-relaxed font-body">
                มีหลักประกันให้มั่นใจว่าจะไม่ถูกทอดทิ้งและได้รับ การดูแลเมื่อเข้าวัยชราและเมื่อมีภาวะพึ่งพิง
                ได้รับบริการทางสุขภาพและสังคมที่จำเป็นอย่างต่อเนื่อง เป็นระบบ
              </p>
            </div>
          </div>

          <div className="relative grid grid-cols-1 gap-y-6 md:gap-0 md:grid-cols-2">
            <div className="flex flex-col order-last col-span-1 p-6 space-y-2 md:space-y-4 lg:p-12 xl:space-y-8 md:order-first xl:pt-16 xl:px-16 text-body">
              <h3 className="max-w-xl text-xl font-bold leading-snug lg:text-2xl">
                เพื่อให้ผู้ที่อยู่ในภาวะพึ่งพิง สามารถดำรงชีวิตได้อย่างมีศักดิ์ศรี ของความเป็นมนุษย์
              </h3>
              <p className="max-w-xl leading-relaxed font-body">
                ได้รับการดูแลที่บ้าน เพื่อให้สามารถใช้ชีวิตประจำวันได้ ไม่บกพร่องในปัจจัย 4 ทั้งอาหาร เครื่องนุ่งห่ม ที่อยู่อาศัย และยารักษาโรค รวมถึงจิตใจ
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
              <h3 className="max-w-xl text-xl font-bold leading-snug lg:text-2xl">ได้รับการดูแลที่ครอบคลุมทั้งมิติสุขภาพ สังคม เศรษฐกิจ และสิ่งแวดล้อม</h3>
              <p className="max-w-xl leading-relaxed font-body">
                มีสุขอนามัยที่ดี ได้รับวัสดุอุปกรณ์ที่จำเป็น มีผู้ดูแล ใกล้ชิด ไม่ต้องแบกรับค่าใช้จ่ายมากเกินไป และไม่เป็นภาระของครอบครัว เป็นต้น{' '}
              </p>
            </div>
          </div>
        </section>

        <section className="relative h-full bg-[#D693B8]">
          <div className="flex flex-col items-center justify-center px-6 pb-52 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="62" height="180" viewBox="0 0 62 330">
              <text data-name="!" transform="translate(0 223)" fill="#fff" fontFamily="IBMPlexSansThai, sans-serif" fontWeight="600" fontSize="200">
                <tspan x="0" y="0">
                  !
                </tspan>
              </text>
            </svg>{' '}
            <p className="text-base font-bold text-center sm:text-lg lg:text-xl max-w-3xl leading-relaxed">
              เพื่อให้ได้รับบริการและการสนับสนุนดังกล่าว ต้องมีทรัพยากรสำคัญ คือ
              <br />
              1&#41; กำลังคน ได้แก่ ผู้ดูแล ซึ่งต้องมีความรู้ ประสบการณ์ และเวลา
              <br />
              2&#41; งบประมาณ เพื่อเป็นค่าใช้จ่ายสำหรับการจัดหาอุปกรณ์และวัสดุสิ้นเปลือง
            </p>
          </div>
        </section>

        <section className="relative h-full px-6 py-24 bg-secondary">
          <div className="absolute left-0 flex justify-center w-full -top-40">
            <Image src={Circle} width={300} height={300} alt="circle image" />
          </div>
          <div className="flex flex-col items-center justify-center pt-20 space-y-2 text-white">
            <div className="flex flex-col items-center space-y-2">
              <p className="text-xl font-bold">ค่าใช้จ่ายในการดูแลระยะยาวของผู้สูงอายุแต่ละกลุ่ม (บาท/คน/เดือน)</p>
              <Image src={Chart} width={350} alt="elderly home" />
            </div>
            <div className="flex flex-col items-center space-y-6">
              <p className="max-w-2xl text-base text-center font-body">
                ในการดูแลระยะยาว กลุ่มผู้สูงอายุติดเตียงมีค่าใช้จ่าย 19,129 บาท/คน/เดือน และผู้สูงอายุติดบ้านมีค่าใช้จ่าย 9,667 บาท/คน/เดือน
                รวมค่าใช้จ่ายด้านอุปกรณ์และวัสดุสิ้นเปลือง ค่าใช้จ่ายด้านบุคลากร และค่าเดินทาง*
              </p>
              <p className="max-w-2xl text-base text-center font-body font-semibold">
                ในขณะที่ผู้สูงอายุในบ้านเรา ได้รับเบี้ยยังชีพเริ่มต้นเพียงคนละ 600 บาทถ้วน
              </p>
              <p className="text-xs font-body">*ข้อมูลจาก รายงานทีดีอาร์ไอ ฉบับที่ 138 มีนาคม 2561 “ระบบประกันการดูแลระยะยาว : ระบบที่เหมาะสมกับประเทศไทย”</p>
            </div>
          </div>
        </section>

        <section className="relative h-full pt-6 bg-[#FAF1F6] md:pt-12">
          <div className="max-w-5xl px-6 py-8 mx-auto space-y-12 text-body">
            <h2 className="text-2xl font-bold leading-relaxed text-center md:text-4xl">
              แต่ยังมีความท้าทายหลายประการ
              <br />
              ที่จะเอื้อให้เกิดภาพสำเร็จดังกล่าว
            </h2>
            <div className="grid grid-cols-1 gap-8 lg:gap-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col col-span-1 space-y-4 text-center">
                <Image src={Icon1} width={120} height={120} priority />
                <p className="mx-auto text-base font-body sm:max-w-sm">
                  ระบบการเงินการคลังเพื่อจัดบริการการดูแลระยะยาวของประเทศไทยในปัจจุบันยังไม่ตอบโจทย์สถานการณ์ปัจจุบันและอนาคต
                </p>
              </div>
              <div className="flex flex-col col-span-1 space-y-4 text-center">
                <Image src={Icon2} width={120} height={120} priority />
                <p className="mx-auto text-base font-body sm:max-w-sm">
                  ยังไม่ได้ข้อสรุปเรื่องขอบเขตการบริการและชุดบริการสำหรับผู้สูงอายุ ติดบ้านติดเตียงที่ชัดเจน
                </p>
              </div>
              <div className="flex flex-col col-span-1 space-y-4 text-center">
                <Image src={Icon3} width={120} height={120} priority />
                <p className="mx-auto text-base font-body sm:max-w-sm">การขาดปัจจัยที่สนับสนุนให้ องค์กรปกครองส่วนท้องถิ่นสามารถทำหน้าที่ได้อย่าง มีคุณภาพ</p>
              </div>
              <div className="flex flex-col col-span-1 space-y-4 text-center">
                <Image src={Icon4} width={120} height={120} priority />
                <p className="mx-auto text-base font-body sm:max-w-sm">
                  ขาดการบูรณาการการจัดบริการทางสังคมกับบริการสาธารณสุข โดยที่การพัฒนากำลังคน (care manager และ caregiver) ยังไม่ทันสถานการณ์
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto text-body">
            <div className="w-full h-full max-w-4xl px-6 pt-16 pb-6 mx-auto space-y-8 text-white md:px-24 bg-secondary">
              <div className="flex flex-col items-center space-y-6 md:justify-between md:flex-row md:space-y-0">
                <h3 className="text-3xl font-bold">ทำอย่างไร?</h3>
                <p className="font-bold text-center md:max-w-sm md:text-left font-body">
                  เพื่อให้มีข้อเสนอระบบหลักประกันการดูแลระยะยาวที่มีรายละเอียดชัดเจน เป็นที่ยอมรับและสามารถจะนำไปปฏิบัติจริงได้
                </p>
              </div>
              <p className="flex flex-col flex-wrap text-base text-center font-body md:block">
                และเพื่อพัฒนาข้อเสนอรูปแบบและแนวทางการทำงานของท้องถิ่น ที่จะสามารถทำให้เกิดแผนการดูแล ผู้สูงอายุติดบ้าน ติดเตียง
                โดยใช้การสนับสนุนทางการเงินจากแหล่งต่างๆ ร่วมกับการระดมทรัพยากร ในท้องถิ่น ซึ่งจะทำให้ผู้สูงอายุที่มีภาวะติดบ้าน
                ติดเตียงได้รับการดูแลอย่างมีคุณภาพ{' '}
              </p>
            </div>
          </div>
        </section>
        <section className="relative h-full bg-[#E0AECA]">
          <div className="w-full h-full max-w-4xl px-6 pb-6 mx-auto space-y-8 text-white md:pb-12 md:px-24 bg-secondary">
            <div className="w-full border-t-2 border-white md:px-24" />
            <p className="text-center font-body">โดยแบ่งออกเป็น 2 หัวข้อย่อย</p>
            <div className="grid w-full grid-cols-1 gap-12 mt-6 md:grid-cols-2">
              <div className="flex flex-col col-span-1 space-y-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 shrink-0" viewBox="0 0 50 50">
                  <path
                    d="M1376.025 41.633c-3.693 0-7.081 2.019-9.722 5.378-2.641-3.36-6.029-5.378-9.722-5.378-8.438 0-15.278 10.535-15.278 23.53s6.84 23.529 15.278 23.529c3.693 0 7.081-2.019 9.722-5.378 2.642 3.36 6.029 5.378 9.722 5.378 8.438 0 15.278-10.535 15.278-23.529s-6.84-23.53-15.278-23.53z"
                    transform="translate(-1341.303 -41.633)"
                    fill="#cc79a7"
                  />
                </svg>
                <p className="font-body">ระบบหลักประกันการดูแลระยะยาวสำหรับผู้สูงอายุที่มีภาวะพึ่งพิง </p>
              </div>
              <div className="flex flex-col col-span-1 space-y-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 shrink-0" viewBox="0 0 50 50">
                  <path
                    d="M1376.025 41.633c-3.693 0-7.081 2.019-9.722 5.378-2.641-3.36-6.029-5.378-9.722-5.378-8.438 0-15.278 10.535-15.278 23.53s6.84 23.529 15.278 23.529c3.693 0 7.081-2.019 9.722-5.378 2.642 3.36 6.029 5.378 9.722 5.378 8.438 0 15.278-10.535 15.278-23.529s-6.84-23.53-15.278-23.53z"
                    transform="translate(-1341.303 -41.633)"
                    fill="#8f8ac7"
                  />
                </svg>
                <p className="font-body">บทบาทของท้องถิ่นในการจัดระบบบริการการดูแลระยะยาวสำหรับผู้สูงอายุที่มีภาวะพึ่งพิง</p>
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
        <section className="relative h-full bg-[#cc79a7]">
          <div className="max-w-4xl mx-auto bg-[#2b2b2b] pb-12">
            <div className="relative overflow-hidden w-full h-[300px] flex justify-center">
              <TimelineSummary />
            </div>
            <div className="grid w-full grid-cols-1 gap-12 px-6 mt-6 text-white md:gap-24 md:grid-cols-2 md:px-24">
              <div className="flex flex-col max-w-sm col-span-1 space-y-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 shrink-0" viewBox="0 0 50 50">
                  <path
                    d="M1376.025 41.633c-3.693 0-7.081 2.019-9.722 5.378-2.641-3.36-6.029-5.378-9.722-5.378-8.438 0-15.278 10.535-15.278 23.53s6.84 23.529 15.278 23.529c3.693 0 7.081-2.019 9.722-5.378 2.642 3.36 6.029 5.378 9.722 5.378 8.438 0 15.278-10.535 15.278-23.529s-6.84-23.53-15.278-23.53z"
                    transform="translate(-1341.303 -41.633)"
                    fill="#cc79a7"
                  />
                </svg>
                <p>ระบบหลักประกันการดูแลระยะยาวสำหรับผู้สูงอายุที่มีภาวะพึ่งพิง</p>
                <div className="w-full border-t-2 border-white md:px-24" />
                <div className="pt-6 space-y-6">
                  <ul className="flex flex-col space-y-6">
                    <li className="space-y-2">
                      <h3 className="text-xl font-bold">ข้อสรุป</h3>
                      <p className="font-body">ข้อสรุปเกี่ยวกับชุดบริการที่สำคัญและจำเป็นในการจัดบริการการดูแลระยะยาว</p>
                    </li>
                  </ul>
                  <Link href="/archive#thematic-briefs">
                    <a
                      className="text-[#cc79a7] inline-flex items-center btn bg-white hover:text-white hover:bg-[#cc79a7] rounded-full"
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
                    d="M1376.025 41.633c-3.693 0-7.081 2.019-9.722 5.378-2.641-3.36-6.029-5.378-9.722-5.378-8.438 0-15.278 10.535-15.278 23.53s6.84 23.529 15.278 23.529c3.693 0 7.081-2.019 9.722-5.378 2.642 3.36 6.029 5.378 9.722 5.378 8.438 0 15.278-10.535 15.278-23.529s-6.84-23.53-15.278-23.53z"
                    transform="translate(-1341.303 -41.633)"
                    fill="#8f8ac7"
                  />
                </svg>

                <p>บทบาทของท้องถิ่นในการจัดระบบบริการการดูแลระยะยาวสำหรับผู้สูงอายุที่มีภาวะพึ่งพิง</p>
                <div className="w-full border-t-2 border-white md:px-24" />
                <div className="pt-6 space-y-6">
                  <ul className="flex flex-col space-y-6">
                    <li className="space-y-2">
                      <h3 className="text-xl font-bold">ข้อเสนอ 1</h3>
                      <p className="font-body">ข้อเสนอแนะเพื่อส่งเสริมบทบาทการทำงานด้านผู้สูงอายุขององค์กรปกครอง ส่วนท้องถิ่น</p>
                    </li>
                    <li className="space-y-2">
                      <h3 className="text-xl font-bold">ข้อเสนอ 2</h3>
                      <p className="font-body">การพัฒนาบุคลากรและแนวทางการทำงานร่วมกันระหว่างบุคลากรของ องค์กรปกครองส่วนท้องถิ่น และ สาธารณสุข ในท้องถิ่น</p>
                    </li>
                    <li className="space-y-2">
                      <h3 className="text-xl font-bold">ข้อเสนอ 3</h3>
                      <p className="font-body">การเพิ่มบทบาทและอำนาจในการบริหารจัดการให้ท้องถิ่น สามารถจัดการทาง การเงินและจัดสรรบุคลากรเองได้</p>
                    </li>
                  </ul>
                  <Link href="/archive#thematic-briefs">
                    <a
                      className="text-[#8f8ac7] inline-flex bg-white hover:text-white hover:bg-[##8f8ac7] btn rounded-full"
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

        <section className="relative h-full bg-[#FAF1F6]">
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
                    <h3 className="text-xl font-bold">เข้าใจความต่างและเห็นจุดร่วมชัดขึ้น</h3>
                    <p className="font-body">
                      เห็นจุดร่วมเรื่องการจัดตั้งกองทุนหลักประกัน เป็นทางเลือกที่เป็นไปได้และเหมาะสมกับอนาคต ในระยะยาว ในขณะเดียวกัน ยังเกิดโอกาสให้ได้
                      ทำความเข้าใจฐานคิดของการออกแบบรายละเอียด ข้อเสนอที่ต่างกัน แต่การหารือช่วยให้เห็นแนวทางในการขับเคลื่อนร่วมกันต่อ
                    </p>
                  </li>
                  <li className="space-y-2 md:space-y-4">
                    <h3 className="text-xl font-bold">ช่วยเปิดมุมมองของผู้ที่เกี่ยวข้อง และสร้างการรับรู้</h3>
                    <p className="font-body">
                      ผู้ดูแลที่เป็นญาติ ได้รับข้อมูลที่เป็นประโยชน์ต่อการ นำไปใช้ในชีวิต จากที่ไม่เคยทราบข้อมูลเกี่ยวกับ บริการหรือสวัสดิการของภาครัฐมาก่อน{' '}
                      <br />
                      <br />
                      ตัวแทนบุคลากรสาธารณสุข ตระหนักถึงความทุกข์ ของญาติในการดูแลผู้ป่วย ทำให้อยากพัฒนางานต่อ และเห็นโอกาสในการจัดการอบรมให้ญาติหรือ
                      เสริมสร้างชุมชนให้ดูแลผู้ป่วยได้
                    </p>
                  </li>
                  <li className="space-y-2 md:space-y-4">
                    <h3 className="text-xl font-bold">
                      ผู้เข้าร่วมจากต่างพื้นที่ได้เห็นรูปแบบการจัดระบบบริการที่แตกต่างกัน เห็นแนวทางทำให้ดีขึ้น และเกิดโอกาสการวางแผนทำงานร่วมกันในอนาคต
                    </h3>
                    <p className="font-body">
                      ตัวแทนจากท้องถิ่นได้ค้นพบว่า มีแนวทางปฏิบัติ ที่สามารถทำให้งานดีขึ้นได้ เป็นโอกาสที่จะนำกลับไปสื่อสารกับทีมปฏิบัติงานและพัฒนางานที่ทำอยู่
                      <br />
                      <br />
                      หลายท่านแสดงความสนใจต่อแนวคิดการสร้างเครือข่ายแลกเปลี่ยนระหว่างผู้ปฏิบัติงาน หรือแนวทางการทำงานร่วมกันระหว่างพื้นที่ที่เป็นมากกว่าการดูงาน
                      แต่อาจให้ผลดีกว่า เช่นระบบพี่เลี้ยง ทั้งยังเห็นความสำคัญของการมีวงหารือแลกเปลี่ยนกัน โดยมีหน่วยงานส่วนกลาง เป็นเจ้าภาพหลัก
                      แต่ยังไม่ได้มีข้อสรุปที่ชัดเจน
                    </p>
                  </li>
                  <li className="space-y-2 md:space-y-4">
                    <h3 className="text-xl font-bold">เกิดโอกาสในการวางแผนการทำงานร่วมกันระหว่างหน่วยงานในอนาคต</h3>
                    <p className="font-body">
                      ผู้เข้าร่วมเห็นประโยชน์ในการร่วมแลกเปลี่ยนจากมุม การทำงานของตัวเอง เห็นความเชื่อมโยงแม้มีบทบาทต่างกัน
                      จึงทำให้การแลกเปลี่ยนขยายประเด็นเป็นภาพบทบาทของท้องถิ่นที่ควรทำและเกี่ยวข้องกับ หน่วยงานอื่น โดยเห็นพ้องกันว่า
                      ท้องถิ่นต้องมีบทบาทเป็นหลักในการดำเนินการ
                    </p>
                  </li>
                  <li className="space-y-2 md:space-y-4">
                    <h3 className="text-xl font-bold">หน่วยงานของภาครัฐได้ปรับความเข้าใจร่วมกัน </h3>
                    <p className="font-body">
                      ทั้งต่อหน่วยงานที่เกี่ยวข้องกับการกำหนดนโยบาย ด้วยกันเอง และกับหน่วยงานในพื้นที่ และเป็นโอกาสให้
                      ผู้กำหนดนโยบายได้ทำความเข้าใจความท้าทายของ การทำงานของผู้ปฏิบัติงาน ได้รับฟังปัญหา และชี้แจงส่วนที่เป็นข้อกังวลของผู้ปฏิบัติงาน
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

export default LtcPage
