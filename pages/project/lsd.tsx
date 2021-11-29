import Image from 'next/image'
import HeroImage from '/public/image/lsd/hero-image.webp'
import Result1 from '/public/image/lsd/testimonial-1.webp'
import Result2 from '/public/image/lsd/testimonial-2.webp'
import Result3 from '/public/image/lsd/testimonial-3.webp'

const LsdPage = () => {
  return (
    <main className="relative">
      <section className="relative h-[75vh] lg:h-[90vh] transition grid items-center bg-[#daa13d]">
        <div className="items-center justify-between lg:flex">
          <div className="flex flex-col justify-start pt-24 space-y-4 item-center lg:item-start lg:ml-48">
            <h1 className="text-4xl font-semibold leading-relaxed lg:text-5xl">ระบบการดูแลผู้สูงอายุ</h1>
            <h1 className="text-4xl font-semibold leading-relaxed lg:text-5xl">แบบใดที่คนไทยต้องการ?</h1>
            <h2 className="text-lg leading-relaxed sm:text-xl font-body">
              การจัดการโครงสร้างเครือข่ายบริการสุขภาพระดับจังหวัด
              <br /> (Local Service Delivery Network)
              <br /> นโยบายเพื่อผู้สูงอายุที่ต้องจับเข่าคุย
            </h2>
          </div>
          <Image src={HeroImage} width={800} height={480} alt="cover image" />
        </div>
      </section>

      <section className="relative h-full bg-[#F9EFE9]">
        <section className="absolute left-0 w-full h-full space-y-12 -top-24 ">
          <div className="relative max-w-6xl p-12 mx-auto space-x-8 bg-secondary h-80">
            <h2 className="relative text-3xl font-bold leading-relaxed tracking-wide text-center text-white">
              ปัจจุบัน ยังมีผู้สูงอายุ
              <br />
              ที่เข้าไม่ถึงการรักษาหรือตกหล่น
              <br />
              จากบริการสุขภาพที่ควรได้รับ
            </h2>
            <p className="flex justify-center mt-6 text-center text-white font-body opacity-75">
              ส่งผลต่อสุขภาพกายใจของผู้สูงอายุและคนในครอบครัว
              <br />
              ทั้งยังเสียโอกาสทางเศรษฐกิจเมื่อผู้สูงอายุไม่สามารถดูแลตนเองได้
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-6 pt-72 md:grid-cols-2">
          <div className="relative col-span-1 px-6 md:px-0">
            <Image src={Result1} height="640" width="1024" className="w-full" alt="expect-ressult-1" />
          </div>
          <div className="flex flex-col col-span-1 px-6 space-y-4 md:space-y-8 md:pt-8 xl:pt-16 sm:px-16 text-body">
            <h3 className="text-2xl font-bold leading-snug">จะดีกว่าไหม?</h3>
            <p className="leading-relaxed font-body">
              หากประเทศไทยมีระบบดูแลผู้สูงอายุแบบองค์รวม และไร้รอยต่อ
              <br /> สามารถยกระดับเครือข่ายการบริการ ในท้องถิ่นให้เป็นมาตรฐานและครอบคลุม
              <br />
              <br /> - มีหน่วยประสานงานเรื่องสิทธิในโรงพยาบาล
              <br /> - ไม่ยุ่งยากเรื่องข้อมูลและการติดต่อ
              <br /> - มีบริการรถรับ-ส่งจากบ้านถึงโรงพยาบาล
              <br /> - มีกลุ่มให้คำปรึกษาและกำลังใจแก่ครอบครัว
              <br /> - มีอุปกรณ์ที่จำเป็นให้หมุนเวียนใช้ฟรี ฯลฯ
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col order-last col-span-1 px-6 space-y-4 md:order-first md:space-y-8 md:pt-8 xl:pt-16 sm:px-24 text-body">
            <h3 className="text-2xl font-bold leading-snug">
              เพิ่มการเข้าถึงระบบบริการที่จำเป็น
              <br />
              มีชีวิตยามชราที่แข็งแรง
              <br />
              ให้มากที่สุดเท่าที่จะเป็นไปได้
            </h3>
          </div>
          <div className="relative col-span-1 px-6 md:px-0">
            <Image src={Result2} height="640" width="1024" className="w-full" alt="expect-ressult-2" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="relative col-span-1 px-6 md:px-0">
            <Image src={Result3} height="640" width="1024" className="w-full" alt="expect-ressult-3" />
          </div>
          <div className="relative flex flex-col col-span-1 px-6 space-y-4 md:space-y-8 md:pt-8 xl:pt-16 sm:px-16 text-body">
            <h3 className="text-2xl font-bold leading-snug">เพื่อพัฒนาคุณภาพชีวิตของผู้สูงอายุ</h3>
            <p className="leading-relaxed font-body">
              ได้รับบริการสุขภาพครบถ้วน ต่อเนื่อง และทันเวลา
              <br />
              ทั้งด้านการรักษาและการป้องกันโรค รวมถึงการทำกายภาพฟื้นฟู
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

export default LsdPage
