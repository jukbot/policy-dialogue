import Header from '@/components/Layout/Header'
import Timeline from '@/components/Project/IMC/Timeline'
import TimelineHeader from '@/components/Project/IMC/TimelineHeader'
import TimelineMobile from '@/components/Project/IMC/TimelineMobile'
import TimelineSummary from '@/components/Project/IMC/TimelineSummary'
import Meta from '@/data/meta.json'
import policies from '@/data/policies.json'
import projects from '@/data/projects.json'
import { DownloadIcon, ArrowRightIcon } from '@heroicons/react/solid'
import { Policy, Project } from '@types'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import Circle from '/public/image/imc/circle.webp'
import Chart from '/public/image/imc/chart.svg'
import FacebookBanner from '/public/image/imc/facebook.jpg'
import HeroImage from '/public/image/imc/hero-image.webp'
import Icon1 from '/public/image/imc/icon-1.svg'
import Icon2 from '/public/image/imc/icon-2.svg'
import Icon3 from '/public/image/imc/icon-3.svg'
import Icon4 from '/public/image/imc/icon-4.svg'
import Icon5 from '/public/image/imc/icon-5.svg'
import ProcessResult from '/public/image/imc/process-result.webp'
import Result1 from '/public/image/imc/testimonial-1.webp'
import Result2 from '/public/image/imc/testimonial-2.webp'
import Result3 from '/public/image/imc/testimonial-3.webp'

const InterestProjects = dynamic(() => import('@/components/Project/InterestProjects'))
const RelatedPolicy = dynamic(() => import('@/components/Project/RelatedPolicy'))

const relatedPolicy: Policy[] = [policies[0], policies[3]]
const interestProjects: Project[] = [projects[5], projects[0], projects[2], projects[6]]

const ImcPage = () => {
  return (
    <>
      <Header
        title="ระบบการดูแลผู้ป่วยระยะกลาง (Intermediate Care)"
        description="ฟื้นฟูผู้สูงวัย ในห้วง 6 เดือนทอง หลังพ้นระยะวิกฤต"
        image={`${Meta.baseUrl}${FacebookBanner.src}`}
        width={FacebookBanner.width}
        height={FacebookBanner.height}
      />
      <main className="relative pt-[3.75rem] bg-[#F0F7FA]">
        <section className="relative h-[70vh] lg:h-[50vh] xl:h-[90vh] grid items-center bg-[#6badcb]">
          <div className="flex flex-col items-center justify-between w-full h-full lg:mb-6 lg:flex-row">
            <div className="flex flex-col justify-center px-6 py-12 mt-6 space-y-4 text-center text-body lg:mt-0 lg:justify-start lg:px-12 lg:ml-12 xl:ml-24 item-center lg:item-start lg:text-left">
              <div className="space-y-4 text-3xl font-bold lg:text-4xl 2xl:text-6xl">
                <h1>ฟื้นฟูผู้สูงวัย</h1>
                <h1>ในห้วง 6 เดือนทอง</h1>
                <h1>หลังพ้นระยะวิกฤต</h1>
              </div>
              <h2 className="max-w-sm mx-auto text-base leading-snug lg:text-lg sm:text-xl font-body lg:m-0">
                ระบบการดูแลผู้ป่วยระยะกลาง (Intermediate Care) : นโยบายที่ควรให้ความสำคัญ
              </h2>
            </div>
            <Image src={HeroImage} className="h-full shrink-0" width={800} height={480} priority alt="cover image" />
          </div>
        </section>

        <section className="relative h-full bg-[#F0F7FA] pb-6 md:pb-0">
          <section className="left-0 w-full h-full space-y-12 xl:absolute -top-24">
            <div className="relative flex flex-col max-w-6xl px-6 py-12 mx-auto space-y-6 md:items-center md:px-12 md:py-16 md:space-x-8 bg-secondary">
              <h2 className="relative max-w-2xl text-xl font-bold leading-relaxed tracking-wide text-white md:text-center md:text-3xl">
                ปัจจุบัน ประเทศไทยยังไม่ได้มุ่งเน้น
                <br /> พัฒนาระบบการดูแลผู้ป่วยระยะกลาง
                <br /> ที่มีประสิทธิภาพและเข้าถึงได้
              </h2>
              <p className="relative flex leading-relaxed text-white opacity-75 max-w-prose md:justify-center md:text-center font-body">
                ส่งผลให้ผู้ป่วยบางส่วนไม่ได้รับการฟื้นฟู หากได้รับก็ไม่เข้มข้นเพียงพอ หลุดหายออกไปจากระบบบริการสุขภาพก่อนหายดี ทำให้มีโอกาสเป็นผู้มีภาวะพึ่งพิง
              </p>
            </div>
          </section>

          <div className="grid grid-cols-1 pt-6 gap-y-6 md:gap-0 md:grid-cols-2 xl:pt-80">
            <div className="relative col-span-1 px-6 md:px-0 ">
              <Image src={Result1} layout="responsive" priority height="640" width="1024" alt="expect-ressult-1" />
            </div>
            <div className="relative flex flex-col justify-center col-span-1 p-6 space-y-2 md:space-y-4 lg:p-12 xl:space-y-8 xl:pt-12 xl:px-16 text-body">
              <h3 className="max-w-xl text-xl font-bold leading-snug lg:text-2xl">
                จะดีแค่ไหน หากประเทศไทยมีระบบ
                <br className="hidden lg:block" /> การดูแลผู้ป่วยระยะกลาง ที่มุ่งเน้นไปที่
                <br className="hidden lg:block" />
                การฟื้นฟูสมรรถภาพผู้ป่วยได้เพียงพอ
                <br className="hidden lg:block" /> และต่อเนื่อง
              </h3>
              <p className="max-w-sm leading-relaxed font-body">
                ผู้ป่วยได้รับการกายภาพบำบัดครบชั่วโมงอย่างเข้มข้น
                <br className="hidden lg:block" /> (Intensive rehabilitation) และใกล้ชิดทีมสหวิชาชีพ โดย
                <br className="hidden lg:block" />
                ไม่ต้องยากลำบากกับการเดินทาง โดยเฉพาะในเขตพื้นที่ชนบทห่างไกล
              </p>
            </div>
          </div>

          <div className="relative grid grid-cols-1 gap-y-6 md:gap-0 md:grid-cols-2">
            <div className="flex flex-col justify-center order-last col-span-1 p-6 space-y-2 xl:ml-8 2xl:ml-16 md:space-y-4 lg:p-12 xl:space-y-8 md:order-first xl:pt-16 xl:px-16 text-body">
              <h3 className="max-w-xl text-xl font-bold leading-snug lg:text-2xl">
                หากฟื้นฟูได้ทันท่วงที ผู้ป่วยมีโอกาสหายดี
                <br className="hidden lg:block" /> และใช้ชีวิตได้อย่างอิสระ
              </h3>
              <p className="max-w-xl leading-relaxed font-body">
                สามารถกลับมาประกอบอาชีพ เป็นกำลังสำคัญในการพัฒนาเศรษฐกิจ
                <br className="hidden lg:block" /> ผู้ป่วยและครอบครัวเองไม่เสียโอกาสในชีวิตนานเกินไป
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
            <div className="relative flex flex-col justify-center col-span-1 p-6 space-y-2 md:space-y-4 lg:px-12 xl:space-y-8 xl:pt-16 xl:px-16 text-body">
              <h3 className="max-w-xl text-xl font-bold leading-snug lg:text-2xl">
                ช่วยลดอัตราผู้มีภาวะพึ่งพิง ซึ่งอาจลดค่าใช้จ่าย
                <br className="hidden lg:block" />
                ด้านการบริการดูแลระยะยาวในอนาคต
                <br className="hidden lg:block" />
                ของประเทศและตัวผู้ป่วยเองได้อย่างมหาศาล
              </h3>
            </div>
          </div>
        </section>

        <section className="relative h-full bg-[#88BDD5]">
          <div className="flex flex-col items-center justify-center px-6 pb-52 text-[#191919]">
            <svg xmlns="http://www.w3.org/2000/svg" width="62" height="180" viewBox="0 0 62 330">
              <text data-name="!" transform="translate(0 223)" fill="#191919" fontFamily="IBMPlexSansThai, sans-serif" fontWeight="600" fontSize="200">
                <tspan x="0" y="0">
                  !
                </tspan>
              </text>
            </svg>{' '}
            <p className="max-w-3xl text-base font-bold leading-relaxed tracking-wide text-center sm:text-lg lg:text-2xl">
              การฟื้นฟูสมรรภภาพร่างกายผู้ป่วยภายใน 6 เดือนทองหลังพ้นระยะวิกฤต นับเป็นความสำคัญอย่างยิ่ง
              เนื่องจากเป็นช่วงเวลาที่ร่างกายของของผู้ป่วยยังสามารถฟื้นตัวกลับมาเป็นปกติได้ โดยเฉพาะใน 3 โรคสำคัญ ได้แก่ โรคหลอดเลือดสมอง สมองบาดเจ็บ
              และกระดูกสันหลังบาดเจ็บ
            </p>
          </div>
        </section>

        <section className="relative h-full px-6 py-24 bg-secondary">
          <div className="absolute left-0 flex justify-center w-full -top-40">
            <Image src={Circle} width={300} height={300} alt="circle image" />
          </div>
          <div className="flex flex-col items-center justify-center space-y-6 text-white pt-28">
            <div className="flex flex-col items-center space-y-2">
              <p className="text-xl font-bold">จำนวนผู้ป่วยใน ที่ป่วยด้วยโรคหลอดเลือดสมองในประเทศไทย (คน)*</p>
              <Image src={Chart} width={350} alt="elderly home" />
            </div>
            <div className="flex flex-col items-center space-y-8">
              <p className="max-w-lg text-base font-semibold text-center font-body">
                การเพิ่มขึ้นของจำนวนผู้ป่วยโรคหลอดเลือดสมอง
                <br />
                มีอัตราเพิ่มสูงขึ้นเรื่อยๆ ในแต่ละปี
                <br />
                <br />
                แปรผันตรงกับจำนวนประชากรผู้สูงอายุที่เพิ่มขึ้นอย่างต่อเนื่อง
                <br />
                เป็นหนึ่งในตัวบ่งชี้ถึงความสำคัญของการดูแลระยะกลางได้อย่างดี
              </p>
              <a href="http://www.thaincd.com/2016/mission/documents-detail.php?id=13684&tid=32&gid=1-020" target="_blank" rel="noreferrer">
                <p className="text-xs font-body">*ข้อมูลจากกองโรคไม่ติดต่อ กรมควบคุมโรค กระทรวงสาธารณสุข</p>
              </a>
            </div>
          </div>
        </section>

        <section className="relative h-full pt-6 bg-[#F0F7FA] md:pt-12">
          <div className="max-w-6xl px-6 py-8 mx-auto space-y-12 text-body">
            <div className="space-y-1 text-2xl font-bold text-center md:text-4xl">
              <p>แต่ยังมีความท้าทายหลายประการ</p>
              <p>เพื่อให้เกิดระบบการบริการที่ตอบโจทย์</p>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:gap-16 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col col-span-1 space-y-4 text-center">
                <Image src={Icon1} width={120} height={120} priority />
                <p className="mx-auto text-base font-body sm:max-w-sm">
                  โรงพยาบาลศูนย์แออัดเกินไป
                  <br /> ส่วนโรงพยาบาลชุมชนยังไม่สามารถ
                  <br /> ให้บริการฟื้นฟูอย่างเข้มข้นได้
                  <br /> อย่างเต็มที่ยังเน้นไปที่การรักษา
                  <br /> แบบผู้ป่วยนอก (OPD) ซึ่งเป็นรูปแบบ
                  <br /> บริการที่ผู้ป่วยเสี่ยงจะหลุดออก
                  <br /> จากระบบ จากการแบกรับค่าใช้จ่าย
                  <br /> และการเดินทางที่ยากลำบาก
                </p>
              </div>
              <div className="flex flex-col col-span-1 space-y-4 text-center">
                <Image src={Icon2} width={120} height={120} priority />
                <p className="mx-auto text-base font-body sm:max-w-sm">
                  ระบบการเบิกจ่ายสำหรับโรงพยาบาล
                  <br /> ชุมชนที่ไม่เหมาะกับรูปแบบการ
                  <br /> บริการในการดูแลผู้ป่วยระยะกลาง
                  <br /> ส่งผลต่อจำนวนวันนอนและการรักษา
                  <br /> ที่ไม่เข้มข้นและต่อเนื่องพอ
                </p>
              </div>
              <div className="flex flex-col col-span-1 space-y-4 text-center">
                <Image src={Icon3} width={120} height={120} priority />
                <p className="mx-auto text-base font-body sm:max-w-sm">
                  ขาดแคลนบุคลากรสหวิชาชีพในระบบ
                  <br /> เช่น นักกายภาพบำบัด นักกิจกรรม
                  <br /> บำบัด เป็นต้น ซึ่งส่วนใหญ่อยู่ใน
                  <br /> ภาคเอกชน ทำให้ผู้ป่วยบางกลุ่ม
                  <br /> เข้าถึงบริการได้ยาก เนื่องจากไม่มี
                  <br /> กำลังทรัพย์มากพอ
                </p>
              </div>
              <div className="flex flex-col col-span-1 space-y-4 text-center">
                <Image src={Icon4} width={120} height={120} priority />
                <p className="mx-auto text-base font-body sm:max-w-sm">
                  ระบบการส่งต่อข้อมูลและส่งต่อผู้ป่วย
                  <br />
                  ที่ยังไม่ไร้รอยต่อ (seamless)
                  <br /> อย่างแท้จริง ส่งผลให้ข้อมูลและ
                  <br /> ตัวผู้ป่วยตกหล่นจากระบบ
                </p>
              </div>
              <div className="flex flex-col col-span-1 space-y-4 text-center">
                <Image src={Icon5} width={120} height={120} priority />
                <p className="mx-auto text-base font-body sm:max-w-sm">
                  ระบบสุขภาพของไทยยังไม่ได้เน้นพัฒนา <br />
                  ระบบการดูแลผู้ป่วยระยะกลาง
                  <br /> อย่างจริงจัง และไม่เป็นบริการ <br />
                  ภาคบังคับของระบบสาธารณสุข แม้รวม
                  <br /> เข้าไว้ใน Service Plan แล้ว <br />
                  เน้นเพียงระบบการดูแลระยะยาว
                  <br /> ทำให้ปัญหายังไม่ถูกแก้ตั้งแต่ต้นเหตุ
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative h-full bg-[#A5CEE0] md:mt-16">
          <div className="w-full mx-auto md:absolute md:h-56 md:-mt-12 text-body md:-transform-x-1/2">
            <div className="w-full h-full max-w-4xl px-6 py-12 mx-auto space-y-8 text-white md:px-24 bg-secondary">
              <div className="flex flex-col items-center h-full space-y-6 md:justify-between md:flex-row md:space-y-0">
                <h3 className="text-3xl font-bold">ทำอย่างไร?</h3>
                <p className="leading-relaxed text-center md:max-w-sm md:text-left font-body">
                  จึงจะเกิดระบบการดูแลผู้ป่วยระยะกลางที่มีประสิทธิภาพ ส่งผลดีต่อผู้ป่วยและครอบครัวที่สุดและเกิดข้อเสนอเชิงนโยบายเพื่ออุดหนุน
                  การจัดบริการดูแลระยะกลางโดยหน่วยงานต่างๆ ที่เกี่ยวข้อง เพื่อสร้างแรงจูงใจในการจัดบริการดูแลระยะกลางได้ดียิ่งขึ้น
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

        <section className="relative h-full bg-[#6badcb]">
          <div className="max-w-6xl pb-12 mx-auto">
            <div className="relative overflow-hidden w-full h-[300px] flex justify-center">
              <TimelineSummary />
            </div>
            <div className="grid w-full grid-cols-1 gap-8 px-6 mt-12 text-white lg:gap-12 md:grid-cols-2 lg:grid-cols-4 md:px-24">
              <div className="flex flex-col col-span-1 space-y-4">
                <h3 className="h-full text-xl font-bold">ข้อเสนอ 1</h3>
                <p className="font-body">
                  การปรับเกณฑ์การจ่ายชดเชยค่าบริการสาธารณสุขของสำนักงานหลักประกันสุขภาพแห่งชาติ เพื่อส่งเสริมการดูแลระยะกลางอย่างเข้มข้น ในระดับโรงพยาบาลชุมชน
                  <br />
                  <br />
                </p>

                <p className="font-body">ดูข้อเสนอฉบับเต็ม</p>
                <Link href="/archive#ccu">
                  <a
                    className="text-[#6badcb] lg:w-full max-w-sm text-sm mt-auto justify-center items-center inline-flex px-4 btn bg-white mx-auto hover:text-white hover:bg-[#191919] rounded-full"
                    target="_self"
                    title="ข้อเสนอเชิงนโยบาย"
                    rel="noopener noreferrer"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-1 fill-current" />
                    <span>ข้อเสนอเชิงนโยบาย</span>
                  </a>
                </Link>
              </div>
              <div className="flex flex-col col-span-1 space-y-4">
                <h3 className="text-xl font-bold">ข้อเสนอ 2</h3>
                <p className="font-body">
                  ควรเน้นการให้บริการฟื้นฟูแบบผู้ป่วยใน (IMC ward) และการให้บริการฟื้นฟูที่บ้าน เพื่อการดูแลที่มีประสิทธิภาพ ส่งผลดีต่อคนไข้ที่สุด
                </p>
              </div>
              <div className="flex flex-col col-span-1 space-y-4">
                <h3 className="text-xl font-bold">ข้อเสนอ 3</h3>
                <p className="font-body">สมควรมีการปรับระบบส่งต่อผู้ป่วย ข้อมูล และกำลังคน ควบคู่ไปกับการปรับด้านงบประมาณ</p>
              </div>
              <div className="flex flex-col col-span-1 space-y-4">
                <h3 className="text-xl font-bold">ข้อเสนอ 4</h3>
                <p className="h-full font-body">เพิ่มความรู้ความเข้าใจต่อเรื่องการดูแลผู้ป่วยระยะกลางแก่ทั้งประชาชนและหน่วยงานที่เกี่ยวข้อง</p>
                <Link href="/archive#thematic-briefs">
                  <a
                    className="text-[#6badcb] lg:w-full justify-center items-center text-sm inline-flex btn mt-auto mx-auto bg-white hover:text-white hover:bg-[#191919] rounded-full"
                    target="_self"
                    title="ดาวน์โหลดข้อสรุป"
                    rel="noopener noreferrer"
                  >
                    <DownloadIcon className="w-5 h-5 mr-1 fill-current" />
                    <span>ดาวน์โหลดข้อสรุป</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="relative h-full bg-[#F0F7FA]">
          <div className="py-12 mx-auto max-w-7xl lg:py-24 lg:mb-24">
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
                <ul className="space-y-12">
                  <li className="space-y-2 md:space-y-4">
                    <h3 className="text-xl font-bold">ผู้เข้าร่วมมีความเห็นร่วมค่อนข้างตรงกันในประเด็นช่องว่างของระบบ </h3>
                    <p className="font-body">
                      ในเรื่องข้อจำกัดและอุปสรรคการทำงาน โดยเฉพาะประเด็นการบูรณาการข้อมูล การขาดแคลนนักกายภาพบำบัด
                      และความต้องการในการปรับระบบการเบิกจ่ายในโรงพยาบาล แม้ว่าจะมีรูปแบบการดูแลผู้ป่วยที่ต่างกัน
                      นั่นก็เพราะต้องปรับให้เหมาะสมกับสภาพแวดล้อมและทรัพยากรที่เอื้อในพื้นที่
                    </p>
                  </li>
                  <li className="space-y-2 md:space-y-4">
                    <h3 className="text-xl font-bold">
                      ผู้เข้าร่วมระดับปฏิบัติงานได้รับประโยชน์ ได้เห็นความพยายาม และความตั้งใจของหน่วยงานต่างๆ ทำให้มีความหวังต่อการพัฒนาระบบ
                    </h3>
                    <p className="font-body">
                      ได้นำข้อเสนอแนะต่างๆ มาเติมเต็มในพื้นที่ของตนเอง เห็นความสำคัญของผู้ป่วย
                      และบุคคลที่เกี่ยวข้องทราบความต้องการของผู้ป่วยจากญาติผู้ดูแลผู้ป่วยจริง สามารถนำไปต่อยอดให้ตอบสนองได้จริง เห็นคุณค่าในวิชาชีพของตนเอง
                      และเติมพลังใจ รวมไปถึง ด้แลกเปลี่ยนประสบการณ์กับพื้นที่อื่นๆ อีกด้วย
                    </p>
                  </li>
                  <li className="space-y-2 md:space-y-4">
                    <h3 className="text-xl font-bold">หน่วยงานของภาครัฐและบุคคลที่เกี่ยวข้องรวมทั้งญาติผู้ดูแล ได้รับฟังกันและกันโดยตรง</h3>
                    <p className="font-body">
                      ได้ร่วมกันหารือจากหลายฝ่าย ทั้งแพทย์ นักวิชาการ นักกายภาพบำบัด และหน่วยงานที่เกี่ยวข้อง เป็นต้น
                      ทำให้เห็นหนทางในการผลักดันประเด็นเหล่านี้ต่อไป
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

export default ImcPage
