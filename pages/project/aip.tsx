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
      <section className="relative h-[75vh] lg:h-[90vh] transition grid items-center bg-[#c7642a]">
        <div className="items-center justify-between lg:flex">
          <div className="flex flex-col justify-start pt-24 space-y-4 text-white item-center lg:item-start lg:ml-48">
            <h1 className="text-4xl font-semibold leading-relaxed lg:text-5xl">
              เตรียมพร้อมอย่างไร ?<br />
              หากอยากอยู่บ้านในยามชรา
            </h1>
            <h2 className="text-lg leading-relaxed sm:text-xl font-body">
              แนวคิดการชราในถิ่นที่อยู่เดิม (Aging in Place)
              <br /> นโยบายเพื่อการเตรียมพร้อมด้านที่อยู่อาศัยและ
              <br /> บริการทางสังคมสำหรับผู้สูงอายุ
            </h2>
          </div>
          <Image src={HeroImage} width={800} height={480} alt="cover image" />
        </div>
      </section>

      <section className="relative h-full bg-[#FCF5EB]">
        <section className="absolute left-0 w-full h-full space-y-12 -top-24 ">
          <div className="relative max-w-6xl p-12 mx-auto space-x-8 bg-secondary h-80">
            <h2 className="relative text-3xl font-bold leading-relaxed tracking-wide text-center text-white">
              ปัจจุบันประเทศไทยมีนโยบายที่รองรับ
              <br />
              สังคมผู้สูงวัยที่โดดเด่นด้านสุขภาพ แต่ยังขาด
              <br />
              การพัฒนามิติด้านที่อยู่อาศัยและสังคม ซึ่งสำคัญไม่แพ้กัน
            </h2>
            <p className="flex justify-center mt-6 text-center text-white opacity-75 font-body">
              ส่งผลให้ผู้สูงอายุส่วนหนึ่ง ประสบปัญหาด้านที่อยู่อาศัย
              <br />
              ขาดการซ่อมแซมและไม่มีรูปแบบที่เหมาะสม ใช้ชีวิตได้ยากลำบากหากต้องอยู่ลำพัง
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-6 pt-72 md:grid-cols-2">
          <div className="relative col-span-1 px-6 md:px-0">
            <Image src={Result1} height="640" width="1024" className="w-full" alt="expect-ressult-1" />
          </div>
          <div className="flex flex-col col-span-1 px-6 space-y-4 md:space-y-8 md:pt-8 xl:pt-16 sm:px-16 text-body">
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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col order-last col-span-1 px-6 space-y-4 md:order-first md:space-y-8 md:pt-8 xl:pt-16 sm:px-16 text-body">
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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="relative col-span-1 px-6 md:px-0">
            <Image src={Result3} height="640" width="1024" className="w-full" alt="expect-ressult-3" />
          </div>
          <div className="relative flex flex-col col-span-1 px-6 space-y-4 md:space-y-8 md:pt-8 xl:pt-16 sm:px-24 text-body">
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

      <section className="relative px-6 h-full bg-[#D28354]">
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

      <section className="relative h-full py-12 bg-[#F9EFE9] sm:py-24">
        <div className="max-w-6xl mx-auto space-y-12 text-body">
          <h2 className="text-4xl font-bold leading-snug text-center">
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
      </section>
      <section className="relative h-full space-y-12 bg-secondary">
        <div className="max-w-6xl px-6 py-16 mx-auto space-y-12 text-white sm:px-12">
          <h2 className="text-4xl font-bold">นโยบายสูงอายุที่คุณอาจสนใจ</h2>

          <ul className="flex w-full space-x-6 overflow-x-auto flex-nowrap whitespace-nowrap">
            <li className="flex flex-col justify-between w-64 p-6 bg-white h-72 text-secondary">
              <div className="space-y-1">
                <p className="text-lg font-bold">
                  กลไกการติดตามขับเคลื่อน
                  <br /> นโยบายเรื่องผู้สูงอายุ
                </p>
                <p className="text-sm font-body">(Governing Mechanism)</p>
              </div>
            </li>
            <li className="flex flex-col justify-between w-64 p-6 bg-white h-72 text-secondary">
              <div className="space-y-1">
                <p className="text-lg font-bold">
                  ระบบบริการสำหรับผู้ป่วย
                  <br />
                  โรคสมองเสื่อม
                </p>
                <p className="text-sm font-body">(Dementia)</p>
              </div>
            </li>
            <li className="flex flex-col justify-between w-64 p-6 bg-white h-72 text-secondary">
              <div className="space-y-1">
                <p className="text-lg font-bold">
                  ระบบบริการดูแลแบบ
                  <br />
                  ประคับประคอง
                </p>
                <p className="text-sm font-body">(Palliative Care)</p>
              </div>
            </li>
            <li className="flex flex-col justify-between w-64 p-6 bg-white h-72 text-secondary">
              <div className="space-y-1">
                <p className="text-lg font-bold">
                  ระบบบริการระยะยาวสำหรับ
                  <br />
                  กลุ่มผู้สูงอายุที่มีภาวะพึ่งพิง
                </p>
                <p className="text-sm font-body">(Long Term Care)</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default AipPage
