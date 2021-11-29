import Image from 'next/image'
import HeroImage from '/public/image/aip/hero-image.webp'
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

      <section className="relative h-full bg-[#F9EFE9]">
        <section className="absolute w-full h-full space-y-12 -top-24 ">
          <div className="relative max-w-6xl p-12 mx-auto space-x-8 bg-secondary h-80">
            <h2 className="relative text-3xl font-bold leading-relaxed tracking-wide text-center text-white">
              ปัจจุบันประเทศไทยมีนโยบายที่รองรับ
              <br />
              สังคมผู้สูงวัยที่โดดเด่นด้านสุขภาพ แต่ยังขาด
              <br />
              การพัฒนามิติด้านที่อยู่อาศัยและสังคม ซึ่งสำคัญไม่แพ้กัน
            </h2>
            <p className="flex justify-center mt-6 text-center text-white font-body opacity-70">
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
            <h3 className="text-2xl font-bold">เนื้อหาที่ได้</h3>
            <ul className="space-y-4 text-sm leading-relaxed list-inside sm:text-base">
              <li className="inline-flex space-x-2">
                <span className="text-2xl font-bold leading-none align-top">•</span>
                <div className="space-y-1">
                  <p className="font-bold">ข้อมูลเชิงลึก</p>
                  <p className="font-body">จากผู้เข้าร่วม จุดร่วมของปัญหา อุปสรรคและช่องโหว่ของประเด็นนั้นๆ</p>
                </div>
              </li>
              <li className="inline-flex space-x-2">
                <span className="text-2xl font-bold leading-none align-top">•</span>
                <div className="space-y-1">
                  <p className="font-bold">ความคิดเห็น</p>
                  <p className="font-body">ความคิดเห็นของผู้เข้าร่วมที่หลากหลาย ไปจนถึงข้อเสนอที่เกิดขึ้นจากวง</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col order-last col-span-1 px-6 space-y-4 md:order-first md:space-y-8 md:pt-8 xl:pt-16 sm:px-16 text-body">
            <h3 className="text-2xl font-bold">ช่วยในการขับเคลื่อนนโยบาย</h3>
            <ul className="space-y-4 text-sm leading-relaxed list-inside sm:text-base">
              <li className="inline-flex space-x-2">
                <span className="text-2xl font-bold leading-none align-top">•</span>
                <div className="space-y-1">
                  <p className="font-bold">สร้างการมีส่วนร่วมกับผู้คน</p>
                  <p className="font-body">
                    ภาคส่วนต่างๆ เข้าใจกันมากขึ้น ซึ่งอาจมีส่วนช่วยในการขับเคลื่อนนโยบาย หรือออกแบบการแก้ไขปัญหาในอนาคต สร้างความเข้าใจ หาจุดร่วม
                    และแลกเปลี่ยนความต่าง อาจทำให้เกิดทางเลือกใหม่จากภาพที่ชัดขึ้น
                  </p>
                </div>
              </li>
              <li className="inline-flex space-x-2">
                <span className="text-2xl font-bold leading-none align-top">•</span>
                <div className="space-y-1">
                  <p className="font-bold">โอกาสในการผลักดันต่อ</p>
                  <p className="font-body">ผู้กำหนดนโยบายและผู้ที่นำไปใช้ในพื้นที่ได้รับฟังกันและกัน สามารถเติมเต็มและเพิ่มโอกาสผลักดันนโยบายร่วมกันต่อได้</p>
                </div>
              </li>
              <li className="inline-flex space-x-2">
                <span className="text-2xl font-bold leading-none align-top">•</span>
                <div className="space-y-1">
                  <p className="font-bold">การสื่อสารในวงกว้าง</p>
                  <p className="font-body">เป็นอีกกระบอกเสียง แสดงพลังความต้องการและร่วมผลักดันนโยบาย</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative col-span-1 px-6 md:px-0">
            <Image src={Result2} height="640" width="1024" className="w-full" alt="expect-ressult-2" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="relative col-span-1 px-6 md:px-0">
            <Image src={Result3} height="640" width="1024" className="w-full" alt="expect-ressult-3" />
          </div>
          <div className="flex flex-col col-span-1 px-6 space-y-4 md:space-y-8 md:pt-8 xl:pt-16 sm:px-16 text-body">
            <h3 className="text-2xl font-bold">ตอบสนองการพัฒนา</h3>
            <ul className="space-y-4 text-sm leading-relaxed list-inside sm:text-base">
              <li className="inline-flex space-x-2">
                <span className="text-2xl font-bold leading-none align-top">•</span>
                <div className="space-y-1">
                  <p className="font-bold">ลดช่องว่างระหว่างตำแหน่งงาน</p>
                  <p className="font-body">เกิดการพูดคุยแลกเปลี่ยนกันระหว่างผู้กำหนดใช้นโยบายและผู้ปฏิบัติงาน ทำให้ลดช่องว่างระหว่างกัน </p>
                </div>
              </li>
              <li className="inline-flex space-x-2">
                <span className="text-2xl font-bold leading-none align-top">•</span>
                <div className="space-y-1">
                  <p className="font-bold">เปลี่ยน-ปรับโจทย์ได้อย่างเหมาะสม</p>
                  <p className="font-body">มีความยืดหยุ่นในการทบทวนสมมติฐานและตีโจทย์ เพื่อเลือกโจทย์ที่สามารถตอบสนองต่อบริบทที่เหมาะสมที่สุด</p>
                </div>
              </li>
              <li className="inline-flex space-x-2">
                <span className="text-2xl font-bold leading-none align-top">•</span>
                <div className="space-y-1">
                  <p className="font-bold">เกิดการแบ่งปันทรัพยากร</p>
                  <p className="font-body">ผู้เข้าร่วมได้เรียนรู้จากประสบการณ์ในพื้นที่อื่น เกิดการผลักดันและสร้างแรงบันดาลใจในการปฏิบัติงานต่อ</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="relative h-full space-y-12 bg-white">
        <div className="grid max-w-6xl grid-cols-1 gap-16 py-16 mx-auto lg:py-32 md:grid-cols-2">
          <div className="flex flex-col col-span-1 px-6 sm:px-12 text-body">
            <div className="space-y-2">
              <h2 className="text-4xl font-semibold sm:text-5xl">HELLO!</h2>
              <h2 className="text-4xl font-semibold sm:text-5xl">WE ARE RISE IMPACT</h2>
            </div>
          </div>
          <div className="relative col-span-1 px-6 sm:px-12">
            <p className="lg:text-lg max-w-prose font-body">
              พวกเราเป็นองค์กรเล็กที่ไม่ขึ้นกับใคร และมองว่าองค์กร
              <br /> ของเราจะช่วยกระตุ้นให้เกิดการเปลี่ยนแปลงเชิงระบบ
              <br /> โดยมุ่งใช้ความเป็นองค์กรที่ยืดหยุ่นนี้ เชื่อมช่องว่างทั้งหลาย
              <br /> ในระบบนิเวศของนวัตกรรมทางสังคม
              <br /> เพื่อสร้างผลกระทบเชิงบวกให้มากขึ้นกว่าเดิม
            </p>
          </div>
        </div>
        <div className="max-w-6xl px-6 py-12 mx-auto text-center lg:px-12">
          <div className="space-y-12">
            <div className="mx-auto">
              <h2 className="text-4xl font-bold lg:text-6xl">RISE IMPACT Team</h2>
            </div>
          </div>
        </div>
        <div className="max-w-6xl px-6 pt-12 mx-auto text-center pb-36 lg:px-12">
          <div className="space-y-12 lg:space-y-24">
            <div className="mx-auto sm:max-w-xl lg:max-w-5xl">
              <h2 className="text-4xl font-bold lg:text-6xl">Contributors</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="relative h-full space-y-12 bg-secondary">
        <div className="max-w-6xl px-6 py-16 mx-auto space-y-12 text-white sm:px-12">
          <h2 className="text-4xl font-bold">นโยบายสูงอายุที่คุณอาจสนใจ</h2>

          <ul className="flex w-full space-x-6 overflow-x-auto flex-nowrap whitespace-nowrap">
            <li className="flex flex-col justify-between p-6 h-72 w-64 text-white bg-[#6badcb]">
              <div className="space-y-1">
                <p className="text-lg font-bold">
                  คู่มือการจัดกระบวนการ
                  <br /> ฉบับเต็ม
                </p>
                <p className="text-sm font-body">
                  จากประสบการณ์ของ
                  <br /> RISE Impact
                </p>
              </div>
            </li>
            <li className="flex flex-col justify-between p-6 h-72 w-64 text-white bg-[#36723b]">
              <div className="space-y-1">
                <p className="text-lg font-bold">กระบวนการ</p>
                <p className="text-sm font-body">
                  Policy Dialogue ใช้วิธีการอะไร
                  <br />
                  บ้าง เพื่อหาคำตอบ
                </p>
              </div>
            </li>
            <li className="flex flex-col justify-between p-6 h-72 w-64 text-white bg-[#daa13d]">
              <div className="space-y-1">
                <p className="text-lg font-bold">คุณค่าของกระบวนการ</p>
                <p className="text-sm font-body">
                  สิ่งที่เราเชื่อและประโยชน์ของ
                  <br /> ‘policy dialogue’
                </p>
              </div>
            </li>
            <li className="flex flex-col justify-between p-6 h-72 w-64 text-white bg-[#cc79a7]">
              <div className="space-y-1">
                <p className="text-lg font-bold">จัดการอย่างไรให้สำเร็จ</p>
                <p className="text-sm font-body">
                  รวบรวมปัญหาที่พบ
                  <br /> และข้อควรคำนึง
                  <br />
                  เพื่อให้กระบวนการราบรื่น
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default AipPage
