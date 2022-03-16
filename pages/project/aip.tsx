import Header from '@/components/Layout/Header'
import Timeline from '@/components/Project/AIP/Timeline'
import TimelineHeader from '@/components/Project/AIP/TimelineHeader'
import TimelineMobile from '@/components/Project/AIP/TimelineMobile'
import TimelineSummary from '@/components/Project/AIP/TimelineSummary'
import Meta from '@/data/meta.json'
import policies from '@/data/policies.json'
import projects from '@/data/projects.json'
import { DownloadIcon } from '@heroicons/react/solid'
import { Policy, Project } from '@types'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import Circle from '/public/image/aip/circle.webp'
import ElderlyHome from '/public/image/aip/elderly-home.svg'
import ElderlyLogo from '/public/image/aip/elderly-logo.svg'
import FacebookBanner from '/public/image/aip/facebook.jpg'
import HeroImage from '/public/image/aip/hero-image.webp'
import Icon1 from '/public/image/aip/icon-1.svg'
import Icon2 from '/public/image/aip/icon-2.svg'
import Icon3 from '/public/image/aip/icon-3.svg'
import Icon4 from '/public/image/aip/icon-4.svg'
import ProcessResult from '/public/image/aip/process-result.webp'
import Result1 from '/public/image/aip/testimonial-1.webp'
import Result2 from '/public/image/aip/testimonial-2.webp'
import Result3 from '/public/image/aip/testimonial-3.webp'

const InterestProjects = dynamic(() => import('@/components/Project/InterestProjects'))
const RelatedPolicy = dynamic(() => import('@/components/Project/RelatedPolicy'))

const relatedPolicy: Policy[] = [policies[1], policies[0]]
const interestProjects: Project[] = [projects[5], projects[4], projects[3], projects[6]]

const AipPage = () => {
  return (
    <>
      <Header
        title="การสูงวัยในถิ่นที่อยู่อาศัยเดิม อย่างมีสุขภาวะ (Aging in Place)"
        description="เตรียมพร้อมอย่างไร ? หากอยากอยู่บ้านในยามชรา"
        image={`${Meta.baseUrl}${FacebookBanner.src}`}
        width={FacebookBanner.width}
        height={FacebookBanner.height}
      />
      <main className="relative pt-[3.75rem] bg-[#F9EEE9]">
        <section className="relative h-[70vh] lg:h-[50vh] xl:h-[90vh] grid items-center bg-[#c7642a]">
          <div className="flex flex-col items-center justify-between w-full h-full lg:mb-6 lg:flex-row">
            <div className="flex flex-col justify-center px-6 py-12 mt-6 space-y-4 text-center text-white lg:mt-0 lg:justify-start lg:px-12 lg:ml-12 xl:ml-24 item-center lg:item-start lg:text-left">
              <h1 className="text-3xl font-bold lg:text-5xl 2xl:text-6xl">
                เตรียมพร้อมอย่างไร ?<br />
                หากอยากอยู่บ้านในยามชรา
              </h1>
              <h2 className="max-w-sm mx-auto text-base leading-snug lg:text-lg sm:text-xl font-body lg:m-0">
                แนวคิดการชราในถิ่นที่อยู่เดิม (Aging in Place) นโยบายเพื่อการเตรียมพร้อมด้านที่อยู่อาศัยและ บริการทางสังคมสำหรับผู้สูงอายุ
              </h2>
            </div>
            <Image src={HeroImage} className="h-full shrink-0" width={800} height={480} priority alt="cover image" />
          </div>
        </section>

        <section className="relative h-full bg-[#FCF5EB] pb-6 md:pb-0">
          <section className="left-0 w-full h-full space-y-12 xl:absolute -top-24">
            <div className="relative flex flex-col max-w-6xl px-6 py-12 mx-auto space-y-6 md:items-center md:px-12 md:py-16 md:space-x-8 bg-secondary">
              <h2 className="relative max-w-2xl text-xl font-bold leading-relaxed tracking-wide text-white md:text-center md:text-3xl">
                ปัจจุบันประเทศไทยมีนโยบายที่รองรับ สังคมผู้สูงวัยที่โดดเด่นด้านสุขภาพ แต่ยังขาดการพัฒนามิติด้านที่อยู่อาศัยและสังคม ซึ่งสำคัญไม่แพ้กัน
              </h2>
              <p className="relative flex leading-relaxed text-white opacity-75 max-w-prose md:justify-center md:text-center font-body">
                ส่งผลให้ผู้สูงอายุส่วนหนึ่ง ประสบปัญหาด้านที่อยู่อาศัย ขาดการซ่อมแซมและไม่มีรูปแบบที่เหมาะสม ใช้ชีวิตได้ยากลำบากหากต้องอยู่ลำพัง
              </p>
            </div>
          </section>

          <div className="grid grid-cols-1 pt-6 gap-y-6 md:gap-0 md:grid-cols-2 xl:pt-80">
            <div className="relative col-span-1 px-6 md:px-0 ">
              <Image src={Result1} layout="responsive" priority height="640" width="1024" alt="expect-ressult-1" />
            </div>
            <div className="relative flex flex-col col-span-1 p-6 space-y-2 md:space-y-4 lg:p-12 xl:space-y-8 xl:pt-16 xl:px-16 text-body">
              <h3 className="max-w-xl text-xl font-bold leading-snug lg:text-2xl">
                คงจะดี หากผู้สูงอายุสามารถเลือกอยู่ที่บ้าน หรือที่อยู่อาศัยเดิมได้นานที่สุดเท่าที่ต้องการ ได้อย่างสะดวกปลอดภัย
              </h3>
              <p className="max-w-sm leading-relaxed font-body">แม้ว่าจะมีสภาวะทางร่างกาย สังคมและจิตใจที่ค่อยๆ เสื่อมถอยจากความชรา</p>
            </div>
          </div>

          <div className="relative grid grid-cols-1 gap-y-6 md:gap-0 md:grid-cols-2">
            <div className="flex flex-col order-last col-span-1 p-6 space-y-2 md:space-y-4 lg:p-12 xl:space-y-8 md:order-first xl:pt-16 xl:px-16 text-body">
              <h3 className="max-w-xl text-xl font-bold leading-snug lg:text-2xl">
                ผู้สูงอายุมีแนวโน้มที่จะมีความรู้สึกเชิงบวกต่อการดำรงชีวิต หากสามารถอาศัยอยู่ที่บ้านของตนเองได้ต่อเนื่อง
              </h3>
              <p className="max-w-xl leading-relaxed font-body">
                เพราะ ”บ้าน” คือพื้นที่ที่ให้ความรู้สึกปลอดภัย มีสังคมและสิ่งแวดล้อมที่ผู้สูงอายุคุ้นเคย ลดความกังวลด้านจิตใจ ส่งผลดีต่อการดูแลรักษาสุขภาพ
                ควบคุมโรค และคุณภาพชีวิต
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
              <h3 className="max-w-xl text-xl font-bold leading-snug lg:text-2xl">ตอบสนองการดูแลผู้สูงอายุในประเทศไทย ที่มีแนวโน้มสูงขึ้นในทุกปี</h3>
              <p className="max-w-xl leading-relaxed font-body">สามารถลดการพึ่งพิงสถานบริบาลที่มีค่าใช้จ่ายมาก ทั้งงบประมาณภาครัฐและของผู้สูงอายุเอง</p>
            </div>
          </div>
        </section>

        <section className="relative h-full bg-[#D28354]">
          <div className="flex flex-col items-center justify-center px-6 text-white pb-52">
            <svg xmlns="http://www.w3.org/2000/svg" width="62" height="180" viewBox="0 0 62 330">
              <text data-name="!" transform="translate(0 223)" fill="#fff" fontFamily="IBMPlexSansThai, sans-serif" fontWeight="600" fontSize="200">
                <tspan x="0" y="0">
                  !
                </tspan>
              </text>
            </svg>
            <a href="https://www.prachachat.net/property/news-596824" className="hover:text-neutral-900" target="_blank" rel="noopener noreferrer">
              <p className="text-base font-bold text-center sm:text-lg lg:text-2xl max-w-prose">
                การลงทุนสร้างบ้านพักคนชรา 1 แห่งในปัจจุบัน
                <br /> ต้องใช้เงินลงทุนในการสร้างประมาณ 305 ล้านบาท สำหรับผู้สูงอายุ 150 คน
                <br /> หรือคิดเป็นเงินลงทุนต่อหัวเท่ากับ 2 ล้านบาท*
              </p>
            </a>
          </div>
        </section>

        <section className="relative h-full px-6 py-20 bg-secondary">
          <div className="absolute left-0 flex justify-center w-full -top-40">
            <Image src={Circle} width={300} height={300} alt="circle image" />
          </div>
          <div className="flex flex-col items-center justify-center space-y-6 text-white pt-28">
            <div className="flex flex-col items-center space-y-2">
              <h3 className="text-4xl font-bold">ผู้สูงอายุ 11 ล้านคน</h3>
              <Image src={ElderlyLogo} width={350} height={180} alt="elderly logo" />
            </div>
            <div className="flex flex-col items-center space-y-2">
              <p className="text-lg font-bold">บ้านพักคนชราของรัฐท้ั้งประเทศ</p>
              <p className="text-4xl font-bold">12 แห่ง</p>
              <Image src={ElderlyHome} width={350} alt="elderly home" />
            </div>
            <div className="flex flex-col items-center space-y-8">
              <p className="text-base text-center font-body">
                ปัจจุบัน ไทยมีศูนย์พัฒนาการจัดสวัสดิการสังคมผู้สูงอายุของรัฐเพียง 12 แห่ง
                <br />
                ขณะที่ประชากรผู้สูงอายุทั่วประเทศมีมากกว่า 11 ล้านคน**
              </p>
              <p className="text-xs font-body">** ข้อมูลจากกรมกิจการผู้สูงอายุ</p>
            </div>
          </div>
        </section>

        <section className="relative h-full pt-6 bg-[#F9EFE9] md:pt-12">
          <div className="max-w-6xl px-6 py-8 mx-auto space-y-12 text-body">
            <h2 className="text-2xl font-bold leading-relaxed text-center md:text-4xl">
              แต่ยังมีความท้าทายที่ต้องฝ่าฟัน
              <br />
              เพื่อให้เกิดนโยบายที่ตอบโจทย์
            </h2>
            <div className="grid grid-cols-1 gap-8 lg:gap-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col col-span-1 space-y-4 text-center">
                <Image src={Icon1} width={120} height={120} priority />
                <p className="mx-auto text-base font-body sm:max-w-sm">
                  ขาดการบูรณาการ ระหว่างบริการทางสุขภาพและสังคม ทั้งในด้านการวางแผน การส่งต่อทรัพยากรและข้อมูล การกำหนดมาตรฐาน และตรวจสอบคุณภาพ
                </p>
              </div>
              <div className="flex flex-col col-span-1 space-y-4 text-center">
                <Image src={Icon2} width={120} height={120} priority />
                <p className="mx-auto text-base font-body sm:max-w-sm">
                  อุปสรรคด้านข้อกฎหมายที่เกี่ยวข้องกับองค์การปกครองส่วนท้องถิ่น ทั้งอำนาจหน้าที่ และ งบประมาณ
                </p>
              </div>
              <div className="flex flex-col col-span-1 space-y-4 text-center">
                <Image src={Icon3} width={120} height={120} priority />
                <p className="mx-auto text-base font-body sm:max-w-sm">ขาดการลงทุนโครงสร้างพื้นฐาน/กลไกที่ช่วยกระตุ้นให้เกิดบริการสำหรับผู้สูงอายุ</p>
              </div>
              <div className="flex flex-col col-span-1 space-y-4 text-center">
                <Image src={Icon4} width={120} height={120} priority />
                <p className="mx-auto text-base font-body sm:max-w-sm">
                  ขาดบริการทางสังคมอย่างเป็นระบบ ภาคส่วนความร่วมมือ รูปแบบ และประเภทของการบริการไม่หลากหลาย
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto text-body">
            <div className="w-full h-full max-w-4xl px-6 pt-16 pb-6 mx-auto space-y-8 text-white md:px-24 bg-secondary">
              <div className="flex flex-col items-center h-full space-y-6 md:justify-between md:flex-row md:space-y-0">
                <h3 className="text-3xl font-bold">ทำอย่างไร?</h3>
                <p className="font-bold text-center md:max-w-sm md:text-left font-body">
                  เพื่อให้เกิดนโยบายที่ตอบสนองแนวคิด <br /> Aging in Place อย่างมีคุณภาพ หลากหลาย และทั่วถึง
                </p>
              </div>
              <p className="flex flex-col flex-wrap text-base text-center font-body md:block">
                <span>บ้านหรือที่อยู่อาศัยที่เหมาะสม</span> <span>|</span>{' '}
                <span>ชุดบริการที่จำเป็นเพื่ออาศัยในถิ่นที่อยู่เดิมอย่างมีคุณภาพชีวิตที่ดีได้ ในบริบทสังคมไทย</span> <span>|</span>{' '}
                <span>สร้างความร่วมมือและบูรณาการระหว่างรัฐบาล องค์การปกครองส่วนท้องถิ่น ภาคเอกชน ชุมชน และภาคประชาสังคม ผ่านโมเดลการทำงานรูปแบบใหม่</span>
              </p>
            </div>
          </div>
        </section>
        <section className="relative h-full bg-[#DDA27F]">
          <div className="w-full h-full max-w-4xl px-6 pb-6 mx-auto space-y-8 text-white md:pb-12 md:px-24 bg-secondary">
            <div className="w-full border-t-2 border-white md:px-24" />
            <p className="text-center font-body">โดยแบ่งออกเป็น 2 หัวข้อย่อย</p>
            <div className="grid w-full grid-cols-1 gap-12 mt-6 md:grid-cols-2">
              <div className="flex flex-col col-span-1 space-y-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 shrink-0" viewBox="0 0 50 50">
                  <path
                    fill="#c7642a"
                    d="m282.975 18.132 2.6-8.1a.66.66 0 0 1 1.288.2l-.032 8.508a.66.66 0 0 0 1.195.388l4.975-6.9a.66.66 0 0 1 1.162.592L291.5 20.9a.66.66 0 0 0 1.016.738l6.864-5.027a.66.66 0 0 1 .922.922l-5.025 6.867a.66.66 0 0 0 .739 1.016l8.082-2.66a.66.66 0 0 1 .592 1.162l-6.9 4.975a.66.66 0 0 0 .388 1.195l8.508-.032a.66.66 0 0 1 .2 1.288l-8.1 2.6a.66.66 0 0 0 0 1.256l8.1 2.6a.66.66 0 0 1-.2 1.288l-8.508-.032a.66.66 0 0 0-.388 1.195l6.9 4.975a.66.66 0 0 1-.592 1.162l-8.082-2.66a.66.66 0 0 0-.739 1.016l5.027 6.864a.66.66 0 0 1-.922.922l-6.864-5.03a.66.66 0 0 0-1.016.738l2.66 8.082a.66.66 0 0 1-1.162.592l-4.975-6.9a.66.66 0 0 0-1.195.388l.032 8.508a.66.66 0 0 1-1.288.2l-2.6-8.1a.66.66 0 0 0-1.256 0l-2.6 8.1a.66.66 0 0 1-1.288-.2l.032-8.508a.66.66 0 0 0-1.195-.388l-4.975 6.9a.66.66 0 0 1-1.162-.592l2.66-8.082a.66.66 0 0 0-1.017-.738l-6.864 5.027a.66.66 0 0 1-.922-.922l5.027-6.864a.66.66 0 0 0-.738-1.016l-8.082 2.66a.66.66 0 0 1-.594-1.16l6.9-4.975a.66.66 0 0 0-.388-1.195l-8.508.032a.66.66 0 0 1-.2-1.288l8.1-2.6a.66.66 0 0 0 0-1.256l-8.1-2.6a.66.66 0 0 1 .2-1.288l8.508.032a.66.66 0 0 0 .388-1.195L260 23.92a.66.66 0 0 1 .592-1.162l8.082 2.66a.66.66 0 0 0 .738-1.016l-5.027-6.864a.66.66 0 0 1 .922-.922l6.864 5.027a.66.66 0 0 0 1.017-.738l-2.66-8.082a.66.66 0 0 1 1.162-.592l4.975 6.9a.66.66 0 0 0 1.195-.388l-.032-8.508a.66.66 0 0 1 1.288-.2l2.6 8.1a.66.66 0 0 0 1.259-.003z"
                    transform="translate(-257.346 -9.572)"
                  />
                </svg>
                <p className="font-body">การพัฒนาชุดบริการสำคัญที่ตอบสนองต่อความต้องการของผู้สูงอายุในการใช้ชีวิตในถิ่นที่เดิม (Aging in Place) </p>
              </div>
              <div className="flex flex-col col-span-1 space-y-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 shrink-0" viewBox="0 0 50 50">
                  <path
                    fill="#36723b"
                    d="m282.975 18.132 2.6-8.1a.66.66 0 0 1 1.288.2l-.032 8.508a.66.66 0 0 0 1.195.388l4.975-6.9a.66.66 0 0 1 1.162.592L291.5 20.9a.66.66 0 0 0 1.016.738l6.864-5.027a.66.66 0 0 1 .922.922l-5.025 6.867a.66.66 0 0 0 .739 1.016l8.082-2.66a.66.66 0 0 1 .592 1.162l-6.9 4.975a.66.66 0 0 0 .388 1.195l8.508-.032a.66.66 0 0 1 .2 1.288l-8.1 2.6a.66.66 0 0 0 0 1.256l8.1 2.6a.66.66 0 0 1-.2 1.288l-8.508-.032a.66.66 0 0 0-.388 1.195l6.9 4.975a.66.66 0 0 1-.592 1.162l-8.082-2.66a.66.66 0 0 0-.739 1.016l5.027 6.864a.66.66 0 0 1-.922.922l-6.864-5.03a.66.66 0 0 0-1.016.738l2.66 8.082a.66.66 0 0 1-1.162.592l-4.975-6.9a.66.66 0 0 0-1.195.388l.032 8.508a.66.66 0 0 1-1.288.2l-2.6-8.1a.66.66 0 0 0-1.256 0l-2.6 8.1a.66.66 0 0 1-1.288-.2l.032-8.508a.66.66 0 0 0-1.195-.388l-4.975 6.9a.66.66 0 0 1-1.162-.592l2.66-8.082a.66.66 0 0 0-1.017-.738l-6.864 5.027a.66.66 0 0 1-.922-.922l5.027-6.864a.66.66 0 0 0-.738-1.016l-8.082 2.66a.66.66 0 0 1-.594-1.16l6.9-4.975a.66.66 0 0 0-.388-1.195l-8.508.032a.66.66 0 0 1-.2-1.288l8.1-2.6a.66.66 0 0 0 0-1.256l-8.1-2.6a.66.66 0 0 1 .2-1.288l8.508.032a.66.66 0 0 0 .388-1.195L260 23.92a.66.66 0 0 1 .592-1.162l8.082 2.66a.66.66 0 0 0 .738-1.016l-5.027-6.864a.66.66 0 0 1 .922-.922l6.864 5.027a.66.66 0 0 0 1.017-.738l-2.66-8.082a.66.66 0 0 1 1.162-.592l4.975 6.9a.66.66 0 0 0 1.195-.388l-.032-8.508a.66.66 0 0 1 1.288-.2l2.6 8.1a.66.66 0 0 0 1.259-.003z"
                    transform="translate(-257.346 -9.572)"
                  />
                </svg>
                <p className="font-body">
                  การปรับการจัดการและบทบาทการทำงานขององค์กรปกครองส่วนท้องถิ่น เพื่อสนับสนุนการจัดบริการสำหรับผู้สูงอายุที่บ้านที่เหมาะสมกับบริบทของไทย{' '}
                </p>
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
        <section className="relative h-full bg-[#c7642a]">
          <div className="max-w-4xl mx-auto bg-[#2b2b2b] pb-12">
            <div className="relative overflow-hidden w-full h-[300px] flex justify-center">
              <TimelineSummary />
            </div>
            <div className="grid w-full grid-cols-1 gap-12 px-6 mt-6 text-white md:gap-24 md:grid-cols-2 md:px-24">
              <div className="flex flex-col max-w-sm col-span-1 space-y-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 shrink-0" viewBox="0 0 50 50">
                  <path
                    fill="#c7642a"
                    d="m282.975 18.132 2.6-8.1a.66.66 0 0 1 1.288.2l-.032 8.508a.66.66 0 0 0 1.195.388l4.975-6.9a.66.66 0 0 1 1.162.592L291.5 20.9a.66.66 0 0 0 1.016.738l6.864-5.027a.66.66 0 0 1 .922.922l-5.025 6.867a.66.66 0 0 0 .739 1.016l8.082-2.66a.66.66 0 0 1 .592 1.162l-6.9 4.975a.66.66 0 0 0 .388 1.195l8.508-.032a.66.66 0 0 1 .2 1.288l-8.1 2.6a.66.66 0 0 0 0 1.256l8.1 2.6a.66.66 0 0 1-.2 1.288l-8.508-.032a.66.66 0 0 0-.388 1.195l6.9 4.975a.66.66 0 0 1-.592 1.162l-8.082-2.66a.66.66 0 0 0-.739 1.016l5.027 6.864a.66.66 0 0 1-.922.922l-6.864-5.03a.66.66 0 0 0-1.016.738l2.66 8.082a.66.66 0 0 1-1.162.592l-4.975-6.9a.66.66 0 0 0-1.195.388l.032 8.508a.66.66 0 0 1-1.288.2l-2.6-8.1a.66.66 0 0 0-1.256 0l-2.6 8.1a.66.66 0 0 1-1.288-.2l.032-8.508a.66.66 0 0 0-1.195-.388l-4.975 6.9a.66.66 0 0 1-1.162-.592l2.66-8.082a.66.66 0 0 0-1.017-.738l-6.864 5.027a.66.66 0 0 1-.922-.922l5.027-6.864a.66.66 0 0 0-.738-1.016l-8.082 2.66a.66.66 0 0 1-.594-1.16l6.9-4.975a.66.66 0 0 0-.388-1.195l-8.508.032a.66.66 0 0 1-.2-1.288l8.1-2.6a.66.66 0 0 0 0-1.256l-8.1-2.6a.66.66 0 0 1 .2-1.288l8.508.032a.66.66 0 0 0 .388-1.195L260 23.92a.66.66 0 0 1 .592-1.162l8.082 2.66a.66.66 0 0 0 .738-1.016l-5.027-6.864a.66.66 0 0 1 .922-.922l6.864 5.027a.66.66 0 0 0 1.017-.738l-2.66-8.082a.66.66 0 0 1 1.162-.592l4.975 6.9a.66.66 0 0 0 1.195-.388l-.032-8.508a.66.66 0 0 1 1.288-.2l2.6 8.1a.66.66 0 0 0 1.259-.003z"
                    transform="translate(-257.346 -9.572)"
                  />
                </svg>
                <p>การพัฒนาชุดบริการสำคัญที่ตอบสนองต่อ ความต้องการของผู้สูงอายุในการใช้ชีวิต ในถิ่นที่เดิม (Aging in Place) </p>
                <div className="w-full border-t-2 border-white md:px-24" />
                <div className="pt-6 space-y-6">
                  <ul className="flex flex-col space-y-6">
                    <li className="space-y-2">
                      <h3 className="text-xl font-bold">ข้อเสนอระยะสั้น</h3>
                      <p className="font-body">การจัดทำกรอบแนวคิดชุดบริการสำคัญสำหรับผู้สูงอายุในบริบทไทย</p>
                    </li>
                    <li className="space-y-2">
                      <h3 className="text-xl font-bold">ข้อเสนอระยะกลาง</h3>
                      <p className="font-body">ปรับเปลี่ยนรูปแบบการจ่ายเงินอุดหนุนด้านการจัดบริการสำหรับผู้สูงอายุ</p>
                    </li>
                    <li className="space-y-2">
                      <h3 className="text-xl font-bold">ข้อเสนอระยะยาว</h3>
                      <p className="font-body">ผลักดันให้มีหน่วยงานภาครัฐที่ทำหน้าที่ในฐานะเจ้าภาพการจัดบริการทางสังคมเพื่อพัฒนาคุณภาพชีวิตผู้สูงอายุ</p>
                    </li>
                  </ul>
                  <Link href="/archive#thematic-briefs">
                    <a
                      className="text-[#c7642a] inline-flex items-center btn bg-white hover:text-white hover:bg-primary rounded-full"
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
                    fill="#36723b"
                    d="m282.975 18.132 2.6-8.1a.66.66 0 0 1 1.288.2l-.032 8.508a.66.66 0 0 0 1.195.388l4.975-6.9a.66.66 0 0 1 1.162.592L291.5 20.9a.66.66 0 0 0 1.016.738l6.864-5.027a.66.66 0 0 1 .922.922l-5.025 6.867a.66.66 0 0 0 .739 1.016l8.082-2.66a.66.66 0 0 1 .592 1.162l-6.9 4.975a.66.66 0 0 0 .388 1.195l8.508-.032a.66.66 0 0 1 .2 1.288l-8.1 2.6a.66.66 0 0 0 0 1.256l8.1 2.6a.66.66 0 0 1-.2 1.288l-8.508-.032a.66.66 0 0 0-.388 1.195l6.9 4.975a.66.66 0 0 1-.592 1.162l-8.082-2.66a.66.66 0 0 0-.739 1.016l5.027 6.864a.66.66 0 0 1-.922.922l-6.864-5.03a.66.66 0 0 0-1.016.738l2.66 8.082a.66.66 0 0 1-1.162.592l-4.975-6.9a.66.66 0 0 0-1.195.388l.032 8.508a.66.66 0 0 1-1.288.2l-2.6-8.1a.66.66 0 0 0-1.256 0l-2.6 8.1a.66.66 0 0 1-1.288-.2l.032-8.508a.66.66 0 0 0-1.195-.388l-4.975 6.9a.66.66 0 0 1-1.162-.592l2.66-8.082a.66.66 0 0 0-1.017-.738l-6.864 5.027a.66.66 0 0 1-.922-.922l5.027-6.864a.66.66 0 0 0-.738-1.016l-8.082 2.66a.66.66 0 0 1-.594-1.16l6.9-4.975a.66.66 0 0 0-.388-1.195l-8.508.032a.66.66 0 0 1-.2-1.288l8.1-2.6a.66.66 0 0 0 0-1.256l-8.1-2.6a.66.66 0 0 1 .2-1.288l8.508.032a.66.66 0 0 0 .388-1.195L260 23.92a.66.66 0 0 1 .592-1.162l8.082 2.66a.66.66 0 0 0 .738-1.016l-5.027-6.864a.66.66 0 0 1 .922-.922l6.864 5.027a.66.66 0 0 0 1.017-.738l-2.66-8.082a.66.66 0 0 1 1.162-.592l4.975 6.9a.66.66 0 0 0 1.195-.388l-.032-8.508a.66.66 0 0 1 1.288-.2l2.6 8.1a.66.66 0 0 0 1.259-.003z"
                    transform="translate(-257.346 -9.572)"
                  />
                </svg>
                <p>การปรับการจัดการและบทบาทการทำงานขององค์กรปกครองส่วนท้องถิ่น เพื่อสนับสนุนการจัดบริการสำหรับผู้สูงอายุที่บ้านที่เหมาะสมกับบริบทของไทย</p>
                <div className="w-full border-t-2 border-white md:px-24" />
                <div className="pt-6 space-y-6">
                  <ul className="flex flex-col space-y-6">
                    <li className="space-y-2">
                      <h3 className="text-xl font-bold">ข้อเสนอ 1</h3>
                      <p className="font-body">ข้อเสนอแนะเพื่อส่งเสริมบทบาทการทำงานด้านผู้สูงอายุขององค์กรปกครอง ส่วนท้องถิ่น</p>
                    </li>
                  </ul>
                  <Link href="/archive#thematic-briefs">
                    <a
                      className="text-[#36723b] inline-flex bg-white hover:text-white hover:bg-[#36723b] btn rounded-full"
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
        <section className="relative h-full bg-[#F9EFE9]">
          <div className="py-12 max-w-7xl mx-auto lg:py-24 lg:mb-24">
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
                    <h3 className="text-xl font-bold">ผู้เข้าร่วมแสดงความสนใจและอยากผลักดันต่อ</h3>
                    <p className="font-body">
                      ตัวแทนหน่วยงานภาครัฐที่มาร่วม มีความเปิดกว้างต่อการรับแนวคิดใหม่ พยายามหาแนวทางในการพัฒนาบทบาทของหน่วยงานในการส่งเสริมงานด้านผู้สูงอายุ
                    </p>
                  </li>
                  <li className="space-y-2 md:space-y-4">
                    <h3 className="text-xl font-bold">เปิดโอกาสการเรียนรู้ระหว่างพื้นที่</h3>
                    <p className="font-body">
                      ทั้งจากผู้ปฏิบัติงาน ผู้เชี่ยวชาญ นักวิชาการ รวมไปถึงญาติผู้ป่วยระยะประคับประคอง และตัวแทนระดับเขตสุขภาพ เพื่อนำไปปรับปรุง
                      ปรับใช้กับหน่วยงาน ชุมชน หรือส่วนของตนเอง
                    </p>
                  </li>
                  <li className="space-y-2 md:space-y-4">
                    <h3 className="text-xl font-bold">เกิดพื้นที่คลายข้อสงสัยระหว่างหน่วยงานส่วนกลางและท้องถิ่น</h3>
                    <p className="font-body">
                      เปิดพื้นที่ให้ อปท. ได้มีโอกาสพูดคุยโดยตรงกับตัวแทนจากหน่วยงานนโยบาย หลายท่านสะท้อนว่าเป็นประโยชน์
                      เนื่องจากที่ผ่านมาไม่ค่อยมีโอกาสได้สื่อสารโดยตรง กระบวนการนี้ทำให้ได้รับฟังความเห็นระหว่างกันและกัน
                      และได้คลายความสงสัยในหลายปัญหาข้อติดขัด
                    </p>
                  </li>
                  <li className="space-y-2 md:space-y-4">
                    <h3 className="text-xl font-bold">ได้ประเด็นที่สมควรศึกษาวิจัยต่อเพื่อพัฒนานโยบาย</h3>
                    <p className="font-body">ได้หัวข้อสิ่งที่น่าจะนำไปศึกษาเพิ่มเติมเพื่อช่วยกำหนด กรอบนโยบายต่อไปได้ เช่น การจัดการทรัพยากรในแต่ละพื้นที่</p>
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

export default AipPage
