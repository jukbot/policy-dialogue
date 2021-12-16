import Timeline from '@/components/Project/AIP/Timeline'
import TimelineHeader from '@/components/Project/AIP/TimelineHeader'
import TimelineSummary from '@/components/Project/AIP/TimelineSummary'
import InterestProjects from '@/components/Project/InterestProjects'
import RelatedPolicy from '@/components/Project/RelatedPolicy'
import { DownloadIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Circle from '/public/image/aip/circle.webp'
import ElderlyHome from '/public/image/aip/elderly-home.svg'
import ElderlyLogo from '/public/image/aip/elderly-logo.svg'
import HeroImage from '/public/image/aip/hero-image.webp'
import Icon1 from '/public/image/aip/icon-1.svg'
import Icon2 from '/public/image/aip/icon-2.svg'
import Icon3 from '/public/image/aip/icon-3.svg'
import Icon4 from '/public/image/aip/icon-4.svg'
import Result1 from '/public/image/aip/testimonial-1.webp'
import Result2 from '/public/image/aip/testimonial-2.webp'
import Result3 from '/public/image/aip/testimonial-3.webp'

const AipPage = () => {
  return (
    <main className="relative">
      <section className="relative h-full h-[90vh] transition grid items-center bg-[#c7642a]">
        <div className="items-center justify-between lg:flex">
          <div className="flex flex-col justify-start px-6 py-12 mt-0 lg:mt-12 space-y-4 text-center text-white item-center lg:item-start lg:text-left lg:ml-48">
            <h1 className="text-2xl lg:text-4xl font-semibold leading-snug lg:text-5xl">
              เตรียมพร้อมอย่างไร ?<br />
              หากอยากอยู่บ้านในยามชรา
            </h1>
            <h2 className="text-base lg:text-lg leading-snug sm:text-xl font-body">
              แนวคิดการชราในถิ่นที่อยู่เดิม (Aging in Place)
              <br /> นโยบายเพื่อการเตรียมพร้อมด้านที่อยู่อาศัยและ
              <br /> บริการทางสังคมสำหรับผู้สูงอายุ
            </h2>
          </div>
          <Image src={HeroImage} width={800} height={480} className="w-full" alt="cover image" />
        </div>
      </section>

      <section className="relative h-full bg-[#FCF5EB]">
        <section className="absolute left-0 w-full h-full space-y-12 -top-24 ">
          <div className="relative max-w-6xl p-12 mx-auto md:space-x-8 bg-secondary h-80">
            <h2 className="relative text-lg font-bold leading-snug tracking-wide text-white md:text-center md:text-3xl">
              ปัจจุบันประเทศไทยมีนโยบายที่รองรับ
              <br />
              สังคมผู้สูงวัยที่โดดเด่นด้านสุขภาพ แต่ยังขาด
              <br />
              การพัฒนามิติด้านที่อยู่อาศัยและสังคม ซึ่งสำคัญไม่แพ้กัน
            </h2>
            <p className="flex mt-6 text-white leading-snug opacity-75 md:justify-center md:text-center font-body">
              ส่งผลให้ผู้สูงอายุส่วนหนึ่ง ประสบปัญหาด้านที่อยู่อาศัย
              <br />
              ขาดการซ่อมแซมและไม่มีรูปแบบที่เหมาะสม ใช้ชีวิตได้ยากลำบากหากต้องอยู่ลำพัง
            </p>
          </div>
        </section>

        <div className="relative grid grid-cols-1 gap-6 pt-72 md:grid-cols-2">
          <div className="relative col-span-1 px-6 md:px-0">
            <Image src={Result1} height="640" width="1024" className="w-full" alt="expect-ressult-1" />
          </div>
          <div className="flex flex-col col-span-1 p-6 space-y-4 md:space-y-8 md:pt-8 xl:pt-16 sm:px-16 text-body">
            <h3 className="text-2xl font-bold leading-snug">
              คงจะดี หากผู้สูงอายุสามารถเลือกอยู่ที่บ้าน
              <br />
              หรือที่อยู่อาศัยเดิมได้นานที่สุดเท่าที่ต้องการ
              <br />
              ได้อย่างสะดวกปลอดภัย
            </h3>
            <p className="leading-relaxed font-body">
              แม้ว่าจะมีสภาวะทางร่างกาย สังคมและจิตใจที่ค่อยๆ
              <br /> เสื่อมถอยจากความชรา
            </p>
          </div>
        </div>

        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col order-last col-span-1 p-6 space-y-4 md:order-first md:space-y-8 md:pt-8 xl:pt-16 sm:px-16 text-body">
            <h3 className="text-2xl font-bold leading-snug">
              ผู้สูงอายุมีแนวโน้มที่จะมีความรู้สึกเชิงบวกต่อการดำรงชีวิต
              <br />
              หากสามารถอาศัยอยู่ที่บ้านของตนเองได้ต่อเนื่อง
            </h3>
            <p className="leading-relaxed font-body">
              เพราะ ‘บ้าน’ คือพื้นที่ที่ให้ความรู้สึกปลอดภัย
              <br /> มีสังคมและสิ่งแวดล้อมที่ผู้สูงอายุคุ้นเคย ลดความกังวลด้านจิตใจ
              <br /> ส่งผลดีต่อการดูแลรักษาสุขภาพ ควบคุมโรค และคุณภาพชีวิต
            </p>
          </div>
          <div className="relative col-span-1 px-6 md:px-0">
            <Image src={Result2} height="640" width="1024" className="w-full" alt="expect-ressult-2" />
          </div>
        </div>

        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="relative col-span-1 px-6 md:px-0">
            <Image src={Result3} height="640" width="1024" className="w-full" alt="expect-ressult-3" />
          </div>
          <div className="relative flex flex-col col-span-1 p-6 space-y-4 md:space-y-8 md:pt-8 xl:pt-16 sm:px-24 text-body">
            <h3 className="text-2xl font-bold leading-snug">
              ตอบสนองการดูแลผู้สูงอายุในประเทศไทย
              <br />
              ที่มีแนวโน้มสูงขึ้นในทุกปี
            </h3>
            <p className="leading-relaxed font-body">
              สามารถลดการพึ่งพิงสถานบริบาลที่มีค่าใช้จ่ายมาก
              <br /> ทั้งงบประมาณภาครัฐและของผู้สูงอายุเอง
            </p>
          </div>
        </div>
      </section>

      <section className="relative h-full bg-[#D28354]">
        <div className="flex flex-col items-center justify-center px-6 pb-32 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="62" height="180" viewBox="0 0 62 330">
            <text data-name="!" transform="translate(0 223)" fill="#fff" fontFamily="IBMPlexSansThai, sans-serif" fontWeight="600" fontSize="200">
              <tspan x="0" y="0">
                !
              </tspan>
            </text>
          </svg>
          <p className="text-base font-bold text-center sm:text-lg lg:text-2xl max-w-prose">
            การลงทุนสร้างบ้านพักคนชรา 1 แห่งในปัจจุบัน
            <br /> ต้องใช้เงินลงทุนในการสร้างประมาณ 305 ล้านบาท สำหรับผู้สูงอายุ 150 คน
            <br /> หรือคิดเป็นเงินลงทุนต่อหัวเท่ากับ 2 ล้านบาท*
          </p>
          <p className="mt-4 text-xs text-center font-body max-w-prose">
            *อ้างอิงงบประมาณในการสร้างบ้านพักคนชราจากงบประมาณในการก่อสร้างบ้านพักคนชราบึงสะแกงาม จำนวน 305 ล้านบาท แหล่งที่มา
            https://www.prachachat.net/property/news-596824
          </p>
        </div>
      </section>

      <section className="relative h-full px-6 py-20 bg-secondary">
        <div className="absolute left-0 flex justify-center w-full -top-24">
          <Image src={Circle} width={250} height={250} alt="circle image" />
        </div>
        <div className="flex flex-col items-center justify-center pt-24 space-y-6 text-white">
          <div className="flex flex-col items-center space-y-2">
            <h3 className="text-3xl font-bold">ผู้สูงอายุ 11 ล้านคน</h3>
            <Image src={ElderlyLogo} width={300} height={150} alt="elderly logo" />
          </div>
          <div className="flex flex-col items-center space-y-2">
            <p className="text-sm font-bold">บ้านพักคนชระของรัฐท้ั้งประเทศ</p>
            <p className="text-4xl font-bold">12 แห่ง</p>
            <Image src={ElderlyHome} width={300} alt="elderly home" />
          </div>
          <div className="flex flex-col items-center space-y-8">
            <p className="text-sm text-center sm:text-base font-body">
              ปัจจุบัน ไทยมีบ้านพักคนชราของรัฐเพียง 12 แห่ง
              <br />
              ขณะที่ประชากรผู้สูงอายุทั่วประเทศมีมากกว่า 11 ล้านคน**
            </p>
            <p className="text-xs font-body">** ข้อมูลจากกรมกิจการผู้สูงอายุ</p>
          </div>
        </div>
      </section>

      <section className="relative h-full pt-6 bg-[#F9EFE9] sm:pt-12">
        <div className="max-w-6xl px-6 py-8 mx-auto space-y-12 text-body">
          <h2 className="text-2xl font-bold leading-snug text-center md:text-4xl">
            แต่ยังมีความท้าทายที่ต้องฝ่าฝัน
            <br />
            เพื่อให้เกิดนโยบายที่ตอบโจทย์
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="flex flex-col col-span-1 space-y-4 text-center">
              <Image src={Icon1} width={120} height={120} />
              <p className="text-sm sm:text-base font-body">
                ขาดการบูรณาการ ระหว่างบริการทางสุขภาพและสังคม ทั้งในด้านการวางแผน การส่งต่อทรัพยากรและข้อมูล การกำหนดมาตรฐาน และตรวจสอบคุณภาพ
              </p>
            </div>
            <div className="flex flex-col col-span-1 space-y-4 text-center">
              <Image src={Icon2} width={120} height={120} />
              <p className="text-sm sm:text-base font-body">อุปสรรคด้านข้อกฎหมายที่เกี่ยวข้องกับองค์การปกครองส่วนท้องถิ่น ทั้งอำนาจหน้าที่ และ งบประมาณ</p>
            </div>
            <div className="flex flex-col col-span-1 space-y-4 text-center">
              <Image src={Icon3} width={120} height={120} />
              <p className="text-sm sm:text-base font-body">ขาดการลงทุนโครงสร้างพื้นฐาน/กลไกที่ช่วยกระตุ้นให้เกิดบริการสำหรับ ผู้สูงอายุ</p>
            </div>
            <div className="flex flex-col col-span-1 space-y-4 text-center">
              <Image src={Icon4} width={120} height={120} />
              <p className="text-sm sm:text-base font-body">ขาดบริการทางสังคมอย่างเป็นระบบ ภาคส่วนความร่วมมือ รูปแบบ และประเภทของการบริการไม่หลากหลาย</p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto text-body">
          <div className="w-full h-full max-w-4xl px-6 pt-16 pb-6 mx-auto space-y-8 text-white md:px-24 bg-secondary">
            <div className="flex flex-col items-center space-y-6 md:justify-between md:flex-row md:space-y-0">
              <h3 className="text-3xl font-bold">ทำอย่างไร?</h3>
              <p className="font-bold text-center md:max-w-sm md:text-left font-body">
                เพื่อให้เกิดนโยบายที่ตอบสนองแนวคิด <br /> Aging in place อย่างมีคุณภาพ หลากหลาย และทั่วถึง
              </p>
            </div>
            <p className="text-base text-center font-body">
              บ้านหรือที่อยู่อาศัยที่เหมาะสม | ชุดบริการที่จำเป็นเพื่ออาศัยในถิ่นที่อยู่เดิมอย่างมีคุณภาพชีวิตที่ดีได้ ในบริบทสังคมไทย |
              สร้างความร่วมมือและบูรณาการระหว่างรัฐบาล องค์การปกครองส่วนท้องถิ่น ภาคเอกชน ชุมชน และภาคประชาสังคม ผ่านโมเดลการทำงานรูปแบบใหม่
            </p>
          </div>
        </div>
      </section>
      <section className="relative h-full bg-[#DDA27F]">
        <div className="max-w-6xl mx-auto text-body">
          <div className="w-full h-full max-w-4xl px-6 pb-6 md:pb-12 mx-auto space-y-8 text-white md:px-24 bg-secondary">
            <div className="w-full border-t-2 border-white md:px-24" />
            <p className="text-base text-center font-body">โดยแบ่งออกเป็น 2 หัวข้อย่อย</p>
            <div className="grid w-full grid-cols-1 gap-12 mt-6 md:grid-cols-2">
              <div className="flex flex-col col-span-1 space-y-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="shrink-0 w-8 h-8" viewBox="0 0 50 50">
                  <path
                    fill="#c7642a"
                    d="m282.975 18.132 2.6-8.1a.66.66 0 0 1 1.288.2l-.032 8.508a.66.66 0 0 0 1.195.388l4.975-6.9a.66.66 0 0 1 1.162.592L291.5 20.9a.66.66 0 0 0 1.016.738l6.864-5.027a.66.66 0 0 1 .922.922l-5.025 6.867a.66.66 0 0 0 .739 1.016l8.082-2.66a.66.66 0 0 1 .592 1.162l-6.9 4.975a.66.66 0 0 0 .388 1.195l8.508-.032a.66.66 0 0 1 .2 1.288l-8.1 2.6a.66.66 0 0 0 0 1.256l8.1 2.6a.66.66 0 0 1-.2 1.288l-8.508-.032a.66.66 0 0 0-.388 1.195l6.9 4.975a.66.66 0 0 1-.592 1.162l-8.082-2.66a.66.66 0 0 0-.739 1.016l5.027 6.864a.66.66 0 0 1-.922.922l-6.864-5.03a.66.66 0 0 0-1.016.738l2.66 8.082a.66.66 0 0 1-1.162.592l-4.975-6.9a.66.66 0 0 0-1.195.388l.032 8.508a.66.66 0 0 1-1.288.2l-2.6-8.1a.66.66 0 0 0-1.256 0l-2.6 8.1a.66.66 0 0 1-1.288-.2l.032-8.508a.66.66 0 0 0-1.195-.388l-4.975 6.9a.66.66 0 0 1-1.162-.592l2.66-8.082a.66.66 0 0 0-1.017-.738l-6.864 5.027a.66.66 0 0 1-.922-.922l5.027-6.864a.66.66 0 0 0-.738-1.016l-8.082 2.66a.66.66 0 0 1-.594-1.16l6.9-4.975a.66.66 0 0 0-.388-1.195l-8.508.032a.66.66 0 0 1-.2-1.288l8.1-2.6a.66.66 0 0 0 0-1.256l-8.1-2.6a.66.66 0 0 1 .2-1.288l8.508.032a.66.66 0 0 0 .388-1.195L260 23.92a.66.66 0 0 1 .592-1.162l8.082 2.66a.66.66 0 0 0 .738-1.016l-5.027-6.864a.66.66 0 0 1 .922-.922l6.864 5.027a.66.66 0 0 0 1.017-.738l-2.66-8.082a.66.66 0 0 1 1.162-.592l4.975 6.9a.66.66 0 0 0 1.195-.388l-.032-8.508a.66.66 0 0 1 1.288-.2l2.6 8.1a.66.66 0 0 0 1.259-.003z"
                    transform="translate(-257.346 -9.572)"
                  />
                </svg>
                <p>การพัฒนาชุดบริการสำคัญที่ตอบสนองต่อความต้องการของผู้สูงอายุในการใช้ชีวิตในถิ่นที่เดิม (Aging in Place) </p>
              </div>
              <div className="flex flex-col col-span-1 space-y-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="shrink-0 w-8 h-8" viewBox="0 0 50 50">
                  <path
                    fill="#36723b"
                    d="m282.975 18.132 2.6-8.1a.66.66 0 0 1 1.288.2l-.032 8.508a.66.66 0 0 0 1.195.388l4.975-6.9a.66.66 0 0 1 1.162.592L291.5 20.9a.66.66 0 0 0 1.016.738l6.864-5.027a.66.66 0 0 1 .922.922l-5.025 6.867a.66.66 0 0 0 .739 1.016l8.082-2.66a.66.66 0 0 1 .592 1.162l-6.9 4.975a.66.66 0 0 0 .388 1.195l8.508-.032a.66.66 0 0 1 .2 1.288l-8.1 2.6a.66.66 0 0 0 0 1.256l8.1 2.6a.66.66 0 0 1-.2 1.288l-8.508-.032a.66.66 0 0 0-.388 1.195l6.9 4.975a.66.66 0 0 1-.592 1.162l-8.082-2.66a.66.66 0 0 0-.739 1.016l5.027 6.864a.66.66 0 0 1-.922.922l-6.864-5.03a.66.66 0 0 0-1.016.738l2.66 8.082a.66.66 0 0 1-1.162.592l-4.975-6.9a.66.66 0 0 0-1.195.388l.032 8.508a.66.66 0 0 1-1.288.2l-2.6-8.1a.66.66 0 0 0-1.256 0l-2.6 8.1a.66.66 0 0 1-1.288-.2l.032-8.508a.66.66 0 0 0-1.195-.388l-4.975 6.9a.66.66 0 0 1-1.162-.592l2.66-8.082a.66.66 0 0 0-1.017-.738l-6.864 5.027a.66.66 0 0 1-.922-.922l5.027-6.864a.66.66 0 0 0-.738-1.016l-8.082 2.66a.66.66 0 0 1-.594-1.16l6.9-4.975a.66.66 0 0 0-.388-1.195l-8.508.032a.66.66 0 0 1-.2-1.288l8.1-2.6a.66.66 0 0 0 0-1.256l-8.1-2.6a.66.66 0 0 1 .2-1.288l8.508.032a.66.66 0 0 0 .388-1.195L260 23.92a.66.66 0 0 1 .592-1.162l8.082 2.66a.66.66 0 0 0 .738-1.016l-5.027-6.864a.66.66 0 0 1 .922-.922l6.864 5.027a.66.66 0 0 0 1.017-.738l-2.66-8.082a.66.66 0 0 1 1.162-.592l4.975 6.9a.66.66 0 0 0 1.195-.388l-.032-8.508a.66.66 0 0 1 1.288-.2l2.6 8.1a.66.66 0 0 0 1.259-.003z"
                    transform="translate(-257.346 -9.572)"
                  />
                </svg>

                <p>การปรับการจัดการและบทบาทการทำงานขององค์กรปกครองส่วนท้องถิ่น เพื่อสนับสนุนการจัดบริการสำหรับผู้สูงอายุที่บ้านที่เหมาะสมกับบริบทของไทย </p>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex justify-center">
            <TimelineHeader />
          </div>
          <Timeline />
        </div>
      </section>
      <section className="relative h-full bg-[#c7642a]">
        <div className="max-w-4xl mx-auto bg-[#2b2b2b] pb-12">
          <div className="w-full h-full flex justify-center">
            <TimelineSummary />
          </div>
          <div className="grid w-full grid-cols-1 gap-12 md:gap-24 mt-6 md:grid-cols-2 px-24 text-white">
            <div className="flex flex-col col-span-1 max-w-sm space-y-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="shrink-0 w-8 h-8" viewBox="0 0 50 50">
                <path
                  fill="#c7642a"
                  d="m282.975 18.132 2.6-8.1a.66.66 0 0 1 1.288.2l-.032 8.508a.66.66 0 0 0 1.195.388l4.975-6.9a.66.66 0 0 1 1.162.592L291.5 20.9a.66.66 0 0 0 1.016.738l6.864-5.027a.66.66 0 0 1 .922.922l-5.025 6.867a.66.66 0 0 0 .739 1.016l8.082-2.66a.66.66 0 0 1 .592 1.162l-6.9 4.975a.66.66 0 0 0 .388 1.195l8.508-.032a.66.66 0 0 1 .2 1.288l-8.1 2.6a.66.66 0 0 0 0 1.256l8.1 2.6a.66.66 0 0 1-.2 1.288l-8.508-.032a.66.66 0 0 0-.388 1.195l6.9 4.975a.66.66 0 0 1-.592 1.162l-8.082-2.66a.66.66 0 0 0-.739 1.016l5.027 6.864a.66.66 0 0 1-.922.922l-6.864-5.03a.66.66 0 0 0-1.016.738l2.66 8.082a.66.66 0 0 1-1.162.592l-4.975-6.9a.66.66 0 0 0-1.195.388l.032 8.508a.66.66 0 0 1-1.288.2l-2.6-8.1a.66.66 0 0 0-1.256 0l-2.6 8.1a.66.66 0 0 1-1.288-.2l.032-8.508a.66.66 0 0 0-1.195-.388l-4.975 6.9a.66.66 0 0 1-1.162-.592l2.66-8.082a.66.66 0 0 0-1.017-.738l-6.864 5.027a.66.66 0 0 1-.922-.922l5.027-6.864a.66.66 0 0 0-.738-1.016l-8.082 2.66a.66.66 0 0 1-.594-1.16l6.9-4.975a.66.66 0 0 0-.388-1.195l-8.508.032a.66.66 0 0 1-.2-1.288l8.1-2.6a.66.66 0 0 0 0-1.256l-8.1-2.6a.66.66 0 0 1 .2-1.288l8.508.032a.66.66 0 0 0 .388-1.195L260 23.92a.66.66 0 0 1 .592-1.162l8.082 2.66a.66.66 0 0 0 .738-1.016l-5.027-6.864a.66.66 0 0 1 .922-.922l6.864 5.027a.66.66 0 0 0 1.017-.738l-2.66-8.082a.66.66 0 0 1 1.162-.592l4.975 6.9a.66.66 0 0 0 1.195-.388l-.032-8.508a.66.66 0 0 1 1.288-.2l2.6 8.1a.66.66 0 0 0 1.259-.003z"
                  transform="translate(-257.346 -9.572)"
                />
              </svg>
              <p>การพัฒนาชุดบริการสำคัญที่ตอบสนองต่อ ความต้องการของผู้สูงอายุในการใช้ชีวิต ในถิ่นที่เดิม (Aging in Place) </p>
              <div className="w-full border-t-2 border-white md:px-24" />
              <div className="pt-6 space-y-6">
                <ul className="flex flex-col space-y-4">
                  <li className="space-y-2">
                    <h3 className="font-bold text-lg">ข้อเสนอระยะสั้น</h3>
                    <p className="font-body text-sm">การจัดทำกรอบแนวคิดชุดบริการสำคัญสำหรับผู้สูงอายุในบริบทไทย</p>
                  </li>
                  <li className="space-y-2">
                    <h3 className="font-bold text-lg">ข้อเสนอระยะกลาง</h3>
                    <p className="font-body text-sm">ปรับเปลี่ยนรูปแบบการจ่ายเงินอุดหนุนด้านการจัดบริการสำหรับผู้สูงอายุ</p>
                  </li>
                  <li className="space-y-2">
                    <h3 className="font-bold text-lg">ข้อเสนอระยะยาว</h3>
                    <p className="font-body text-sm">ผลักดันให้มีหน่วยงานภาครัฐที่ทำหน้าที่ในฐานะเจ้าภาพการจัดบริการทางสังคมเพื่อพัฒนาคุณภาพชีวิตผู้สูงอายุ</p>
                  </li>
                </ul>
                <a
                  className="text-[#c7642a] text-sm inline-flex btn py-2 bg-white hover:text-white rounded-full"
                  href="javascript:void(0)"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <DownloadIcon className="w-6 h-6 fill-current mr-2" />
                  <span>ดาวน์โหลดข้อสรุป</span>
                </a>
              </div>
            </div>
            <div className="flex flex-col col-span-1 max-w-sm space-y-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="shrink-0 w-8 h-8" viewBox="0 0 50 50">
                <path
                  fill="#36723b"
                  d="m282.975 18.132 2.6-8.1a.66.66 0 0 1 1.288.2l-.032 8.508a.66.66 0 0 0 1.195.388l4.975-6.9a.66.66 0 0 1 1.162.592L291.5 20.9a.66.66 0 0 0 1.016.738l6.864-5.027a.66.66 0 0 1 .922.922l-5.025 6.867a.66.66 0 0 0 .739 1.016l8.082-2.66a.66.66 0 0 1 .592 1.162l-6.9 4.975a.66.66 0 0 0 .388 1.195l8.508-.032a.66.66 0 0 1 .2 1.288l-8.1 2.6a.66.66 0 0 0 0 1.256l8.1 2.6a.66.66 0 0 1-.2 1.288l-8.508-.032a.66.66 0 0 0-.388 1.195l6.9 4.975a.66.66 0 0 1-.592 1.162l-8.082-2.66a.66.66 0 0 0-.739 1.016l5.027 6.864a.66.66 0 0 1-.922.922l-6.864-5.03a.66.66 0 0 0-1.016.738l2.66 8.082a.66.66 0 0 1-1.162.592l-4.975-6.9a.66.66 0 0 0-1.195.388l.032 8.508a.66.66 0 0 1-1.288.2l-2.6-8.1a.66.66 0 0 0-1.256 0l-2.6 8.1a.66.66 0 0 1-1.288-.2l.032-8.508a.66.66 0 0 0-1.195-.388l-4.975 6.9a.66.66 0 0 1-1.162-.592l2.66-8.082a.66.66 0 0 0-1.017-.738l-6.864 5.027a.66.66 0 0 1-.922-.922l5.027-6.864a.66.66 0 0 0-.738-1.016l-8.082 2.66a.66.66 0 0 1-.594-1.16l6.9-4.975a.66.66 0 0 0-.388-1.195l-8.508.032a.66.66 0 0 1-.2-1.288l8.1-2.6a.66.66 0 0 0 0-1.256l-8.1-2.6a.66.66 0 0 1 .2-1.288l8.508.032a.66.66 0 0 0 .388-1.195L260 23.92a.66.66 0 0 1 .592-1.162l8.082 2.66a.66.66 0 0 0 .738-1.016l-5.027-6.864a.66.66 0 0 1 .922-.922l6.864 5.027a.66.66 0 0 0 1.017-.738l-2.66-8.082a.66.66 0 0 1 1.162-.592l4.975 6.9a.66.66 0 0 0 1.195-.388l-.032-8.508a.66.66 0 0 1 1.288-.2l2.6 8.1a.66.66 0 0 0 1.259-.003z"
                  transform="translate(-257.346 -9.572)"
                />
              </svg>
              <p>การปรับการจัดการและบทบาทการทำงานขององค์กรปกครองส่วนท้องถิ่น เพื่อสนับสนุนการจัดบริการสำหรับผู้สูงอายุที่บ้านที่เหมาะสมกับบริบทของไทย</p>
              <div className="w-full border-t-2 border-white md:px-24" />
              <div className="pt-6 space-y-6">
                <ul className="flex flex-col space-y-4">
                  <li className="space-y-2">
                    <h3 className="font-bold text-lg">ข้อเสนอ 1</h3>
                    <p className="font-body text-sm">ข้อเสนอแนะเพื่อส่งเสริมบทบาทการทำงานด้านผู้สูงอายุขององค์กรปกครอง ส่วนท้องถิ่น</p>
                  </li>
                </ul>
                <a
                  className="text-[#36723b] text-sm inline-flex btn py-2 bg-white hover:text-white rounded-full"
                  href="javascript:void(0)"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <DownloadIcon className="w-6 h-6 fill-current mr-2" />
                  <span>ดาวน์โหลดข้อสรุป</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RelatedPolicy />
      <InterestProjects />
    </main>
  )
}

export default AipPage
