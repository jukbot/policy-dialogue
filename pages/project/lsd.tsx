import Header from '@/components/Layout/Header'
import InterestProjects from '@/components/Project/InterestProjects'
import Timeline from '@/components/Project/LSD/Timeline'
import TimelineHeader from '@/components/Project/LSD/TimelineHeader'
import TimelineMobile from '@/components/Project/LSD/TimelineMobile'
import TimelineSummary from '@/components/Project/LSD/TimelineSummary'
import RelatedPolicy from '@/components/Project/RelatedPolicy'
import Meta from '@/data/meta.json'
import projects from '@/data/projects.json'
import { ArrowRightIcon } from '@heroicons/react/outline'
import { DownloadIcon } from '@heroicons/react/solid'
import { Policy, Project } from '@types'
import Image from 'next/image'
import Link from 'next/link'
import Chart from '/public/image/lsd/chart.svg'
import Circle from '/public/image/lsd/circle.webp'
import HeroImage from '/public/image/lsd/hero-image.webp'
import Icon1 from '/public/image/lsd/icon-1.svg'
import Icon2 from '/public/image/lsd/icon-2.svg'
import Icon3 from '/public/image/lsd/icon-3.svg'
import Icon4 from '/public/image/lsd/icon-4.svg'
import Icon5 from '/public/image/lsd/icon-5.svg'
import Icon6 from '/public/image/lsd/icon-6.svg'
import ProcessResult from '/public/image/lsd/process-result.webp'
import Result1 from '/public/image/lsd/testimonial-1.webp'
import Result2 from '/public/image/lsd/testimonial-2.webp'
import Result3 from '/public/image/lsd/testimonial-3.webp'

const relatedPolicy: Policy[] = [
  {
    id: 0,
    text: 'การจัดการโครงสร้างเครือข่ายบริการสุขภาพ ระดับจังหวัด',
    url: '/archive#ccu',
    color: 'bg-[#36723b]',
  },
  {
    id: 1,
    text: 'การเสริมพลังองค์กรปกครองส่วนท้องถิ่นเพื่อยกระดับคุณภาพชีวิตผู้สูงอายุในชุมชน และส่งเสริมการมีส่วนร่วมของประชาชน',
    url: '/archive#aip-1',
    color: 'bg-[#daa13d]',
  },
  {
    id: 2,
    text: 'การปรับกลไกการทำงานของ คณะกรรมการผู้สูงอายแห่งชาติและองค์กรที่เกี่ยวข้อง เพื่อส่งเสริมการผลักดันนโยบายรองรับสังคมสูงวัย',
    url: '/archive#pc-3',
    color: 'bg-[#6badcb]',
  },
]

const interestProjects: Project[] = [projects[5], projects[4], projects[0], projects[3]]

const LsdPage = () => {
  return (
    <>
      <Header
        title="การจัดการโครงสร้างเครือข่ายบริการสุขภาพระดับจังหวัด (Local Service Delivery Network)"
        description="เตรียมพร้อมอย่างไร ? หากอยากอยู่บ้านในยามชรา"
        image={`${Meta.baseUrl}${HeroImage.src}`}
        width={HeroImage.width}
        height={HeroImage.height}
      />
      <main className="relative bg-[#FBF5EB]">
        <section className="relative h-full h-[90vh] transition grid items-center bg-[#daa13d]">
          <div className="items-center justify-between lg:mb-6 lg:flex">
            <div className="flex flex-col justify-start px-6 py-12 mt-0 space-y-4 text-center text-white lg:ml-12 lg:mt-12 item-center lg:item-start lg:text-left">
              <h1 className="text-2xl font-semibold leading-relaxed lg:text-4xl lg:text-5xl">
                ระบบการดูแลผู้สูงอายุ
                <br />
                แบบใดที่คนไทยต้องการ?
              </h1>
              <h2 className="text-base leading-snug lg:text-lg sm:text-xl font-body">
                การจัดการโครงสร้างเครือข่ายบริการสุขภาพระดับจังหวัด
                <br /> (Local Service Delivery Network)
                <br /> นโยบายเพื่อผู้สูงอายุที่ต้องจับเข่าคุย
              </h2>
            </div>
            <Image src={HeroImage} width={800} height={480} priority className="w-full" alt="cover image" />
          </div>
        </section>

        <section className="relative h-full bg-[#FCF5EB] pb-6 md:pb-0">
          <section className="absolute left-0 w-full h-full space-y-12 -top-24">
            <div className="relative flex flex-col max-w-6xl p-6 mx-auto space-y-6 md:items-center md: md:px-12 md:py-16 md:space-x-8 bg-secondary">
              <h2 className="relative text-lg font-bold leading-relaxed tracking-wide text-white md:text-center md:text-3xl">
                ปัจจุบัน ยังมีผู้สูงอายุ
                <br />
                ที่เข้าไม่ถึงการรักษาหรือตกหล่น
                <br />
                จากบริการสุขภาพที่ควรได้รับ
              </h2>
              <p className="relative flex max-w-2xl leading-relaxed text-white opacity-75 md:justify-center md:text-center font-body">
                ส่งผลต่อสุขภาพกายใจของผู้สูงอายุและคนในครอบครัว ทั้งยังเสียโอกาสทางเศรษฐกิจเมื่อผู้สูงอายุไม่สามารถดูแลตนเองได้
              </p>
            </div>
          </section>

          <div className="grid grid-cols-1 pt-48 md:gap-6 md:pt-72 md:grid-cols-2">
            <div className="relative col-span-1 px-6 md:px-0">
              <Image src={Result1} height="640" width="1024" className="w-full" alt="expect-ressult-1" />
            </div>
            <div className="relative flex flex-col col-span-1 p-6 space-y-2 md:space-y-8 md:pt-8 xl:pt-16 sm:px-16 text-body">
              <h3 className="text-2xl font-bold leading-snug">จะดีกว่าไหม?</h3>
              <p className="leading-relaxed font-body">
                หากประเทศไทยมีระบบดูแลผู้สูงอายุแบบองค์รวม และไร้รอยต่อ สามารถยกระดับเครือข่ายการบริการ ในท้องถิ่นให้เป็นมาตรฐานและครอบคลุม
                <br />
                <br />- มีหน่วยประสานงานเรื่องสิทธิในโรงพยาบาล
                <br />- ไม่ยุ่งยากเรื่องข้อมูลและการติดต่อ
                <br />- มีบริการรถรับ-ส่งจากบ้านถึงโรงพยาบาล
                <br />- มีกลุ่มให้คำปรึกษาและกำลังใจแก่ครอบครัว
                <br />- มีอุปกรณ์ที่จำเป็นให้หมุนเวียนใช้ฟรี ฯลฯ
              </p>
            </div>
          </div>

          <div className="relative grid grid-cols-1 md:gap-6 md:grid-cols-2">
            <div className="flex flex-col order-last col-span-1 p-6 space-y-2 md:space-y-8 md:order-first md:pt-8 xl:pt-16 sm:px-16 text-body">
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

          <div className="relative grid grid-cols-1 md:gap-6 md:grid-cols-2">
            <div className="col-span-1 px-6 md:px-0">
              <Image src={Result3} height="640" width="1024" className="w-full h-full" alt="expect-ressult-3" />
            </div>
            <div className="relative flex flex-col col-span-1 px-6 py-6 space-y-2 md:space-y-8 md:pt-8 xl:pt-16 sm:px-16 text-body">
              <h3 className="text-2xl font-bold leading-snug">เพื่อพัฒนาคุณภาพชีวิตของผู้สูงอายุ</h3>
              <p className="leading-relaxed font-body">
                ได้รับบริการสุขภาพครบถ้วน ต่อเนื่อง และทันเวลา
                <br />
                ทั้งด้านการรักษาและการป้องกันโรค รวมถึงการทำกายภาพฟื้นฟู
              </p>
            </div>
          </div>
        </section>

        <section className="relative h-full bg-[#E1B363]">
          <div className="flex flex-col items-center justify-center px-6 pb-32 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="62" height="180" viewBox="0 0 62 330">
              <text data-name="!" transform="translate(0 223)" fill="#fff" fontFamily="IBMPlexSansThai, sans-serif" fontWeight="600" fontSize="200">
                <tspan x="0" y="0">
                  !
                </tspan>
              </text>
            </svg>
            <p className="text-base font-bold text-center sm:text-lg lg:text-2xl max-w-prose">
              จำเป็นต้องมีระบบที่รองรับสัดส่วนผู้สูงอายุที่เพิ่มสูงขึ้นเรื่อยๆ
              <br />
              เพื่ออำนวยความสะดวก และลดอัตราที่ผู้สูงอายุจะเข้าสู่ภาวะพึ่งพิงโดยไม่จำเป็น
            </p>
          </div>
        </section>

        <section className="relative h-full px-6 py-20 bg-secondary">
          <div className="absolute left-0 flex justify-center w-full -top-24">
            <Image src={Circle} width={250} height={250} alt="circle image" />
          </div>
          <div className="flex flex-col items-center justify-center pt-24 space-y-6 text-white">
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-3xl font-bold">สัดส่วนผู้สูงอายุ ต่อประชากรทั้งหมด (%)</h3>
              <div>
                <Image src={Chart} width={400} height={250} alt="chart" />
              </div>
            </div>
            <div className="flex flex-col items-center space-y-8">
              <p className="text-base text-center font-body max-w-prose">
                จากข้อมูลปี พ.ศ. 2563 ประเทศไทยมีประชากรผู้สูงอายุกว่า 12 ล้านคน ซึ่งคิดเป็น 18% จากประชากรทั้งหมด 66.5 ล้านคน และคาดการณ์ว่าภายใน ปี พ.ศ. 2565
                สัดส่วนผู้สูงอายุจะเพิ่มขึ้นเป็น 20% ของประชากรทั้งหมด* ซึ่งหมายถึงการเข้าสู่ “สังคมสูงวัยอย่างสมบูรณ์ (Aged Society)”
              </p>
              <p className="text-xs font-body">*ข้อมูลจาก รายงานสถานการณ์ผู้สูงอายุไทย ปี 2563 โดย มส.ผส.</p>
            </div>
          </div>
        </section>

        <section className="relative h-full pt-6 bg-[#FBF5EB] md:pt-12">
          <div className="max-w-6xl px-6 py-8 mx-auto space-y-12 text-body">
            <h2 className="text-2xl font-bold leading-snug text-center md:text-4xl">
              แต่ยังมีความท้าทายที่ต้องฝ่าฟัน
              <br />
              เพื่อให้เกิดนโยบายที่ตอบโจทย์
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="flex flex-col col-span-1 space-y-4 text-center">
                <Image src={Icon1} width={120} height={120} />
                <p className="text-base font-body">การนำรูปแบบการจัดการที่มีอยู่ไปทำซ้ำหรือขยายผลในแต่ละพื้นที่ยังมีข้อจำกัด เนื่องจากบริบทที่แตกต่าง</p>
              </div>
              <div className="flex flex-col col-span-1 space-y-4 text-center">
                <Image src={Icon2} width={120} height={120} />
                <p className="text-base font-body">ในปัจจุบัน พยาบาลและนักกายภาพบำบัดมักต้องทำหน้าที่ประสานการดูแลไปด้วย ทำให้มีภาระงานหนักเกินควร</p>
              </div>
              <div className="flex flex-col col-span-1 space-y-4 text-center">
                <Image src={Icon3} width={120} height={120} />
                <p className="text-base font-body">
                  ขาดการบูรณาการการทำงานระดับหน่วยงานในพื้นที่ ทั้งโรงพยาบาลชุมชน โรงพยาบาลส่งเสริมสุขภาพตำบล องค์กรปกครองส่วนท้องถิ่น
                  และสำนักงานพัฒนาสังคมและความมั่นคงของมนุษย์จังหวัด
                </p>
              </div>
              <div className="flex flex-col col-span-1 space-y-4 text-center">
                <Image src={Icon4} width={120} height={120} />
                <p className="text-base font-body">
                  ขาดระบบขนส่งสาธารณะและโครงสร้างพื้นฐานที่เป็นมิตรกับผู้สูงอายุ หรือผู้ที่ต้องใช้กายอุปกรณ์
                  ทำให้เข้ารับบริการสุขภาพและเข้าร่วมกิจกรรมทางสังคมได้ยากลำบาก
                </p>
              </div>
              <div className="flex flex-col col-span-1 space-y-4 text-center">
                <Image src={Icon5} width={120} height={120} />
                <p className="text-base font-body">
                  ระบบการส่งต่อคนไข้ยังเน้นเป็นรายครั้งและดูแลเฉพาะโรค ทำให้หน่วยงานในพื้นที่ที่นอกเหนือจากโรงพยาบาลชุมชนไม่ได้รับข้อมูลคนไข้อย่างทั่วถึง
                </p>
              </div>
              <div className="flex flex-col col-span-1 space-y-4 text-center">
                <Image src={Icon6} width={120} height={120} />
                <p className="text-base font-body">
                  ภาครัฐขาดระบบการช่วยเหลือดูแลผู้สูงอายุชั่วคราว (respite care) รวมถึงระบบที่สามารถให้ความช่วยเหลือและคำปรึกษาแก่ญาติที่เป็นผู้ดูแลได้
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative h-full bg-[#E9C68A] md:mt-16">
          <div className="w-full mx-auto md:absolute md:h-72 md:-mt-12 text-body md:-transform-x-1/2">
            <div className="w-full h-full max-w-4xl px-6 py-16 mx-auto space-y-8 text-white md:px-24 bg-secondary">
              <div className="flex flex-col items-center space-y-6 md:justify-between md:flex-row md:space-y-0">
                <h3 className="text-3xl font-bold">ทำอย่างไร?</h3>
                <p className="leading-relaxed text-center md:max-w-sm md:text-left font-body">
                  จึงสามารถพัฒนาการจัดการเครือข่ายบริการสุขภาพสำหรับผู้สูงอายุในระดับจังหวัด เพื่อให้ผู้สูงอายุได้รับบริการสุขภาพที่ดีขึ้น อย่างน้อย 4
                  บริการสุขภาพ* ที่มีความจำเป็นต่อการรองรับสังคมสูงวัย
                </p>
              </div>
              <p className="text-sm text-center font-body">
                การดูแลผู้ป่วยระยะกลาง (Intermediate Care) การดูแลผู้สูงอายุระยะยาว (Long-Term Care)
                <br /> ผู้สูงอายุที่มีภาวะสมองเสื่อม และ การดูแลผู้ป่วยแบบประคับประคอง (Palliative Care)
              </p>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-0 md:px-6 text-body md:pt-[15rem]">
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
        <section className="relative h-full bg-[#daa13d]">
          <div className="max-w-4xl mx-auto bg-[#2b2b2b] pb-12">
            <div className="relative overflow-hidden w-full h-[300px] flex justify-center">
              <TimelineSummary />
            </div>
            <div className="grid w-full grid-cols-1 gap-12 px-6 mt-6 text-white md:gap-24 md:grid-cols-2 md:px-24">
              <div className="flex flex-col max-w-sm col-span-1 space-y-4">
                <div className="pt-6 space-y-6">
                  <ul className="flex flex-col space-y-6">
                    <li className="space-y-2">
                      <h3 className="text-xl font-bold">ข้อเสนอที่ 1</h3>
                      <p className="font-body">การบูรณาการข้อมูลเพื่อการดูแลอย่าง รอบด้าน</p>
                    </li>
                    <li className="space-y-2">
                      <h3 className="text-xl font-bold">ข้อเสนอที่ 2</h3>
                      <p className="font-body">การสร้างพื้นที่และบริการดูแลผู้สูงอายุชั่วคราว (Respite Care)</p>
                    </li>
                    <li className="space-y-2">
                      <h3 className="text-xl font-bold">ข้อเสนอที่ 3</h3>
                      <p className="font-body">การจัดกลุ่มหนุนใจ (Support Group) ให้ผู้ดูแล</p>
                    </li>
                    <li className="space-y-2">
                      <h3 className="text-xl font-bold">ข้อเสนอที่ 4</h3>
                      <p className="font-body">
                        การจัดระบบรถรับส่งให้เข้าถึงบริการสุขภาพและบริการทางสังคมสำหรับผู้สูงอายุทั้งกลุ่มติดสังคม ติดบ้าน และติดเตียง
                      </p>
                    </li>
                  </ul>
                  <Link href="/archive#thematic-briefs">
                    <a
                      className="inline-flex items-center bg-white rounded-full text-neutral-900 btn hover:text-white"
                      target="_self"
                      rel="noopener noreferrer"
                    >
                      <DownloadIcon className="w-5 h-5 mr-2 fill-current" />
                      <span>ดาวน์โหลดข้อสรุป</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col max-w-sm col-span-1 space-y-4">
                <div className="space-y-6 md:pt-6">
                  <ul className="flex flex-col space-y-6">
                    <li className="space-y-2">
                      <h3 className="text-xl font-bold">ข้อเสนอที่ 5</h3>
                      <p className="font-body">การพัฒนาหน่วยประสานการดูแลเพื่อยกระดับการให้บริการแก่ผู้สูงอายุและผู้ป่วยในระดับจังหวัด</p>
                    </li>
                  </ul>
                  <Link href="/archive#ccu">
                    <a className="inline-flex items-center text-white hover:text-primary" target="_self" rel="noopener noreferrer">
                      <ArrowRightIcon className="w-5 h-5 mr-2 fill-current text-primary" />
                      <span>Policy Recomendation หัวข้อ CCU</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative h-full bg-[#FBF5EB]">
          <div className="max-w-4xl py-12 mx-auto">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div className="flex flex-col col-span-1 space-y-6 text-body">
                <div className="px-6 space-y-6">
                  <h3 className="text-3xl font-bold leading-snug">
                    สิ่งที่เกิดขึ้นจาก
                    <br />
                    กระบวนการ
                  </h3>
                  <p className="font-body">Policy dialogue ไม่ได้มีแต่ผลลัพธ์เชิงเนื้อหา แต่ยังสามารถสร้างคุณค่าในการผลักดันเชิงนโยบาย</p>
                </div>
                <div className="left-0 px-6 md:absolute md:px-0 md:pt-48">
                  <Image width={640} height={380} src={ProcessResult} />
                </div>
              </div>
              <div className="h-full col-span-1 px-6">
                <ul className="space-y-12">
                  <li className="space-y-2 md:space-y-4">
                    <h3 className="text-xl font-bold">ผู้เข้าร่วมหลากหลายระดับได้หารือและแลกเปลี่ยนความคิดเห็น</h3>
                    <p className="font-body">
                      ผู้เข้าร่วมให้ความสนใจและมีแรงบันดาลใจอย่างมาก เนื่องจากประเด็นเหล่านี้ เป็นปัญหาสำคัญของการดูแลผู้สูงอายุในปัจจุบัน
                      เกิดความคิดเห็นผู้เข้าร่วม หลายระดับ หลายหน่วยงาน ทั้งระบบบริการสุขภาพ และหน่วยงานที่ดูแลคุณภาพชีวิตแบบองค์รวม
                    </p>
                  </li>
                  <li className="space-y-2 md:space-y-4">
                    <h3 className="text-xl font-bold">ผู้เข้าร่วมส่วนใหญ่มีความรู้สึกเชิงบวกต่อข้อเสนอเรื่องการบูรณาการข้อมูล</h3>
                    <p className="font-body">ผู้เข้าร่วมส่วนใหญ่มีความรู้สึกเชิงบวกต่อข้อเสนอเรื่องการบูรณาการข้อมูล</p>
                  </li>
                  <li className="space-y-2 md:space-y-4">
                    <h3 className="text-xl font-bold">
                      ผู้เข้าร่วมวงหารือทุกคนสนใจและรู้สึกว่าข้อเสนอเรื่องการจัดกลุ่มหนุนใจ (support group) สร้างแรงบันดาลใจ
                    </h3>
                    <p className="font-body">
                      ผู้เข้าร่วมจากหน่วยงานต่างๆ ทั้งกระทรวงสาธารณสุข กรมกิจการผู้สูงอายุ และองค์การปกครองส่วนท้องถิ่น มองว่าเรื่องนี้มีความสำคัญ
                      ทุกหน่วยงานกำลังพยายามทำอยู่และจะทำต่อไป หลังจากได้หารือในวงพูดคุย
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

export default LsdPage
