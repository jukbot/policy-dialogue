import Image from 'next/image'
import HeroImage from '/public/image/pc/hero-image.webp'
import Result1 from '/public/image/pc/testimonial-1.webp'
import Result2 from '/public/image/pc/testimonial-2.webp'
import Result3 from '/public/image/pc/testimonial-3.webp'

const PcPage = () => {
  return (
    <main className="relative">
      <section className="relative h-[75vh] lg:h-[90vh] transition grid items-center bg-[#3f36b7]">
        <div className="items-center justify-between lg:flex">
          <div className="flex flex-col justify-start pt-24 space-y-4 text-white item-center lg:item-start lg:ml-48">
            <h1 className="text-4xl font-semibold leading-relaxed lg:text-5xl">บั้นปลายชีวิตคนไทย</h1>
            <h1 className="text-4xl font-semibold leading-relaxed lg:text-5xl">อยู่อย่างไรจึงเป็นสุข ?</h1>
            <h2 className="text-lg leading-relaxed sm:text-xl font-body">
              นโยบายระบบการดูแลผู้ป่วยแบบประคับประคอง
              <br />
              (Palliative Care)
            </h2>
          </div>
          <Image src={HeroImage} width={800} height={480} alt="cover image" />
        </div>
      </section>

      <section className="relative h-full bg-[#EBEAF8]">
        <section className="absolute left-0 w-full h-full space-y-12 -top-24 ">
          <div className="relative max-w-6xl p-12 mx-auto space-x-8 bg-secondary h-80">
            <h2 className="relative text-3xl font-bold leading-relaxed tracking-wide text-center text-white">
              ปัจจุบัน การดูแลผู้ป่วยแบบประคับประคอง
              <br />
              ในประเทศไทย วางอยู่บนฐานของการ
              <br />
              ‘ยื้อความตาย’ เป็นหลัก
            </h2>
            <p className="flex justify-center mt-6 text-center text-white opacity-75 font-body">
              ส่งผลให้ผู้ป่วยต้องรับการรักษาในโรงพยาบาล ประกอบกับ
              <br />
              &apos;อัตราการครองเตียง&apos; ในโรงพยาบาลที่สูงขึ้นจาก <br />
              &apos;อัตราการเจ็บป่วย&apos; ด้วยโรคไม่ติดต่อเรื้อรังที่เพิ่มขึ้นอย่างต่อเนื่อง
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

export default PcPage
