import AboutRiseImpact from '@/components/Footer/AboutRiseImpact'
import Header from '@/components/Layout/Header'
import { isModalOpenAtom } from '@/stores/global'
import { downloadContent } from '@/utils/userAnalytics'
import { ArrowCircleDownIcon } from '@heroicons/react/solid'
import { useAtom } from 'jotai'
import Link from 'next/link'
import { MouseEvent, useCallback } from 'react'

const ArchivePage = () => {
  const [, setModalState] = useAtom(isModalOpenAtom)

  const checkDownload = useCallback(
    (e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>, fileName: string) => {
      e.preventDefault()
      const hasSendContact = localStorage.getItem('policy-dialogue:has-submit-contact')
      if (!hasSendContact) {
        setModalState({ type: 'download', open: true, link: fileName })
      } else {
        downloadContent(fileName)
      }
    },
    [setModalState]
  )

  return (
    <>
      <Header title="คลังข้อมูล" description="คลังข้อมูลและเอกสารดาวน์โหลด" />
      <main className="relative">
        <div className="absolute top-0 right-0 w-full h-full bg-no-repeat bg-contain mix-blend-screen bg-archive-hero-shape" />
        <section className="relative grid h-[75vh] ≈ bg-cover bg-no-repeat items-center bg-archive-pattern-mobile sm:bg-archive-pattern">
          <div className="flex flex-col items-center justify-center pt-24 space-y-1 text-white lg:items-start lg:justify-start lg:ml-48">
            <h1 className="text-4xl font-semibold lg:text-6xl">Archive</h1>
            <h2 className="text-base md:text-xl lg:text-2xl font-body">คลังข้อมูลและเอกสารดาวน์โหลด</h2>
          </div>
        </section>

        <section className="relative h-full space-y-12 bg-white">
          <div className="max-w-6xl px-6 py-16 mx-auto space-y-12 sm:px-12 text-body">
            <div className="flex flex-col space-y-2" id="thematic-briefs">
              <h2 className="text-3xl font-bold">ข้อสรุปจากกระบวนการ</h2>
              <h3 className="text-xl font-body">thematic briefs</h3>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col place-content-between space-y-6 p-6 bg-[#c7642a] h-48 text-white">
                <div className="flex space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current shrink-0 current-color" viewBox="0 0 30 30">
                    <path
                      data-name="Path 278"
                      d="m272.723 14.708 1.559-4.861a.4.4 0 0 1 .773.122l-.019 5.1a.4.4 0 0 0 .717.233l2.985-4.141a.4.4 0 0 1 .7.355l-1.6 4.849a.4.4 0 0 0 .61.443l4.119-3.016a.4.4 0 0 1 .553.553l-3.02 4.124a.4.4 0 0 0 .443.61l4.849-1.6a.4.4 0 0 1 .355.7l-4.141 2.985a.4.4 0 0 0 .233.717l5.1-.019a.4.4 0 0 1 .122.773L282.21 24.2a.4.4 0 0 0 0 .754l4.861 1.559a.4.4 0 0 1-.122.773l-5.1-.019a.4.4 0 0 0-.233.717l4.141 2.985a.4.4 0 0 1-.355.7l-4.849-1.6a.4.4 0 0 0-.443.61l3.016 4.119a.4.4 0 0 1-.553.553l-4.119-3.016a.4.4 0 0 0-.61.443l1.6 4.849a.4.4 0 0 1-.7.355l-2.985-4.141a.4.4 0 0 0-.717.233l.019 5.1a.4.4 0 0 1-.773.122l-1.559-4.861a.4.4 0 0 0-.754 0L270.41 39.3a.4.4 0 0 1-.773-.122l.019-5.1a.4.4 0 0 0-.717-.233l-2.985 4.141a.4.4 0 0 1-.7-.355l1.6-4.849a.4.4 0 0 0-.61-.443l-4.119 3.016a.4.4 0 0 1-.553-.553l3.016-4.119a.4.4 0 0 0-.443-.61l-4.849 1.6a.4.4 0 0 1-.355-.7l4.141-2.985a.4.4 0 0 0-.233-.717l-5.1.019a.4.4 0 0 1-.122-.773l4.861-1.559a.4.4 0 0 0 0-.754l-4.861-1.559a.4.4 0 0 1 .122-.773l5.1.019a.4.4 0 0 0 .233-.717l-4.141-2.985a.4.4 0 0 1 .355-.7l4.849 1.6a.4.4 0 0 0 .443-.61l-3.016-4.119a.4.4 0 0 1 .553-.553l4.119 3.016a.4.4 0 0 0 .61-.443l-1.6-4.849a.4.4 0 0 1 .7-.355l2.985 4.141a.4.4 0 0 0 .717-.233l-.019-5.1a.4.4 0 0 1 .773-.122l1.559 4.861a.4.4 0 0 0 .754-.015z"
                      transform="translate(-257.346 -9.572)"
                    />
                  </svg>
                  <div className="space-y-1">
                    <p className="text-lg font-bold">Aging in place</p>
                    <p className="font-body">การสูงวัยในถิ่นที่อยู่อาศัยเดิมอย่างมีสุขภาวะ</p>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-auto space-x-6 text-sm font-body">
                  <a
                    className="btn-white"
                    href="javascript:void(0)"
                    target="_blank"
                    rel="noopener noreferrer"
                    type="application/pdf"
                    onClick={(e) => checkDownload(e, '/archive/thematic-briefs/AIP1.pdf')}
                  >
                    <ArrowCircleDownIcon className="w-8 h-8 fill-current" />
                    <span>ข้อสรุป 1</span>
                  </a>
                  <a
                    className="btn-white"
                    href="javascript:void(0)"
                    target="_blank"
                    rel="noopener noreferrer"
                    type="application/pdf"
                    onClick={(e) => checkDownload(e, '/archive/thematic-briefs/AIP2.pdf')}
                  >
                    <ArrowCircleDownIcon className="w-8 h-8 fill-current" />
                    <span>ข้อสรุป 2</span>
                  </a>
                </div>
              </div>
              <div className="flex flex-col place-content-between space-y-6 p-6 bg-[#a8a8a8] h-48 text-white">
                <div className="flex space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current shrink-0 current-color" viewBox="0 0 50 45">
                    <path
                      data-name="Path 130"
                      d="M545.354 25.807c0-2.974-3.219-5.645-8.333-7.483 3.624-1.059 5.833-2.466 5.833-4.009 0-2.269-4.773-4.241-11.8-5.251 1.183-.572 1.867-1.245 1.867-1.967 0-2.071-5.627-3.75-12.568-3.75S507.786 5.026 507.786 7.1c0 .722.684 1.4 1.867 1.967-7.027 1.01-11.8 2.982-11.8 5.251 0 1.543 2.209 2.95 5.833 4.009-5.114 1.839-8.333 4.509-8.333 7.483 0 3 3.272 5.688 8.459 7.528-3.7 1.063-5.959 2.484-5.959 4.045 0 2.269 4.773 4.241 11.8 5.251-1.183.572-1.867 1.245-1.867 1.967 0 2.071 5.627 3.75 12.568 3.75s12.568-1.679 12.568-3.75c0-.722-.684-1.4-1.867-1.967 7.027-1.01 11.8-2.982 11.8-5.251 0-1.561-2.26-2.982-5.959-4.045 5.186-1.843 8.458-4.538 8.458-7.531z"
                      transform="translate(-495.354 -3.347)"
                    />
                  </svg>

                  <div className="space-y-1">
                    <p className="text-lg font-bold">Intermediate Care</p>
                    <p className="font-body">
                      ระบบการดูแลผู้ป่วยระยะกลาง สำหรับผู้สูงอายุ ที่อยู่ในช่วง
                      <br /> 6 เดือนทองหลังพ้นภาวะวิกฤต
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-auto text-sm font-body">
                  <p>เร็วๆ นี้</p>
                </div>
              </div>
              <div className="flex flex-col place-content-between space-y-6 p-6 bg-[#a8a8a8] h-48 text-white">
                <div className="flex space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current shrink-0 current-color" viewBox="0 0 50 50">
                    <path
                      id="Path_56"
                      data-name="Path 56"
                      d="M754.415,1113.507a7.919,7.919,0,0,0-6.045-14.594,7.919,7.919,0,0,0-14.593-6.045,7.919,7.919,0,0,0-14.593,6.045,7.919,7.919,0,0,0-6.045,14.594,7.919,7.919,0,0,0,6.045,14.593,7.919,7.919,0,0,0,14.593,6.045,7.919,7.919,0,0,0,14.593-6.045,7.919,7.919,0,0,0,6.045-14.593Z"
                      transform="translate(-708.777 -1088.507)"
                    />
                  </svg>
                  <div className="space-y-1">
                    <p className="text-lg font-bold">Dementia</p>
                    <p className="font-body">ระบบบริการสำหรับผู้ป่วยโรคสมองเสื่อม</p>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-auto text-sm font-body">
                  <p>เร็วๆ นี้</p>
                </div>
              </div>
              <div className="flex flex-col place-content-between space-y-6 p-6 bg-[#a8a8a8] h-48 text-white">
                <div className="flex space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current shrink-0 current-color" viewBox="0 0 47.812 45">
                    <path
                      data-name="Path 236"
                      d="M1374.506 41.633c-3.532 0-6.771 1.93-9.3 5.143-2.526-3.213-5.765-5.143-9.3-5.143-8.069 0-14.609 10.074-14.609 22.5s6.541 22.5 14.609 22.5c3.532 0 6.771-1.93 9.3-5.143 2.526 3.213 5.765 5.143 9.3 5.143 8.069 0 14.609-10.074 14.609-22.5s-6.54-22.5-14.609-22.5z"
                      transform="translate(-1341.303 -41.633)"
                    />
                  </svg>
                  <div className="space-y-1">
                    <p className="text-lg font-bold">Long-Term Care</p>
                    <p className="font-body">ระบบการดูแลระยะยาวสำหรับผู้สูงอายุ ที่มีภาวะพึ่งพิง</p>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-auto text-sm font-body">
                  <p>เร็วๆ นี้</p>
                </div>
              </div>
              <div className="flex flex-col place-content-between space-y-6 p-6 bg-[#3f36b7] h-48 text-white">
                <div className="flex space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current shrink-0 current-color" viewBox="0 0 50.625 45">
                    <path
                      data-name="Path 129"
                      d="M1634.417 1192.3c-4.912-4.366-12.785-5.081-20.791-2.6-8.006-2.48-15.878-1.766-20.791 2.6s-5.716 11.364-2.926 18.481c-2.791 7.116-1.986 14.114 2.926 18.481s12.785 5.081 20.791 2.6c8.006 2.481 15.878 1.766 20.791-2.6s5.716-11.364 2.926-18.481c2.79-7.116 1.986-14.114-2.926-18.481z"
                      transform="translate(-1588.313 -1188.281)"
                    />
                  </svg>
                  <div className="space-y-1">
                    <p className="text-lg font-bold">Palliative Care</p>
                    <p className="font-body">ระบบการดูแลแบบประคับประคอง ในช่วงท้ายของชีวิต</p>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-auto space-x-6 text-sm font-body">
                  <a
                    className="btn-white"
                    href="javascript:void(0)"
                    target="_blank"
                    rel="noopener noreferrer"
                    type="application/pdf"
                    onClick={(e) => checkDownload(e, '/archive/thematic-briefs/PC.pdf')}
                  >
                    <ArrowCircleDownIcon className="w-8 h-8 fill-current" />
                    <span>ข้อสรุป</span>
                  </a>
                </div>
              </div>
              <div className="flex flex-col place-content-between space-y-6 p-6 bg-[#daa13d] h-48 text-white">
                <div className="flex space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current shrink-0 current-color" viewBox="0 0 50 44.978">
                    <path
                      data-name="Path 55"
                      d="M198.582 615.166h-6.636a.744.744 0 0 1-.644-1.116l3.318-5.747a6.25 6.25 0 0 0-2.288-8.538 6.25 6.25 0 0 0-8.538 2.288l-3.318 5.747a.744.744 0 0 1-1.289 0l-3.318-5.747a6.25 6.25 0 0 0-8.538-2.288 6.25 6.25 0 0 0-2.288 8.538l3.318 5.747a.744.744 0 0 1-.644 1.116h-6.636a6.25 6.25 0 0 0-6.25 6.25 6.25 6.25 0 0 0 6.25 6.25h6.636a.744.744 0 0 1 .644 1.116l-3.318 5.747a6.25 6.25 0 0 0 2.288 8.538 6.25 6.25 0 0 0 8.538-2.288l3.318-5.747a.744.744 0 0 1 1.289 0l3.318 5.747a6.25 6.25 0 0 0 8.538 2.288 6.25 6.25 0 0 0 2.288-8.538l-3.318-5.747a.744.744 0 0 1 .644-1.116h6.636a6.25 6.25 0 0 0 6.25-6.25 6.25 6.25 0 0 0-6.25-6.25z"
                      transform="translate(-154.832 -598.927)"
                    />
                  </svg>
                  <div className="space-y-1">
                    <p className="text-lg font-bold">Local Service Delivery</p>
                    <p className="font-body"> การจัดการโครงสร้างเครือข่าย ระบบบริการสุขภาพระดับจังหวัด</p>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-auto space-x-6 text-sm font-body">
                  <a
                    className="btn-white"
                    href="javascript:void(0)"
                    target="_blank"
                    rel="noopener noreferrer"
                    type="application/pdf"
                    onClick={(e) => checkDownload(e, '/archive/thematic-briefs/LSD.pdf')}
                  >
                    <ArrowCircleDownIcon className="w-8 h-8 fill-current" />
                    <span>ข้อสรุป</span>
                  </a>
                </div>
              </div>
              <div className="flex flex-col place-content-between space-y-6 p-6 bg-[#a8a8a8] h-48 text-white">
                <div className="flex space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current shrink-0 current-color" viewBox="0 0 50 36.853">
                    <path
                      data-name="Path 237"
                      d="M886.369 50.479h-39.436a5.281 5.281 0 0 1-1.67-10.291l8.564-2.855h-6.894a5.281 5.281 0 0 1-1.67-10.291l8.564-2.855h-6.894a5.281 5.281 0 1 1 0-10.562h39.437a5.281 5.281 0 0 1 1.67 10.291l-8.564 2.855h6.894a5.281 5.281 0 0 1 1.67 10.291l-8.564 2.855h6.894a5.281 5.281 0 1 1 0 10.562z"
                      transform="translate(-841.651 -13.626)"
                    />
                  </svg>
                  <div className="space-y-1">
                    <p className="text-lg font-bold">Governing mechanism</p>
                    <p className="font-body">กลไกการติดตามขับเคลื่อนนโยบายเรื่องผู้สูงอายุ</p>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-auto text-sm font-body">
                  <p>เร็วๆ นี้</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-2" id="policy-recommendations">
              <h2 className="text-3xl font-bold">ข้อเสนอแนะ</h2>
              <h2 className="text-3xl font-bold">เชิงนโยบาย</h2>
              <h3 className="text-xl font-body">policy recommendations</h3>
              <p className="w-1/2 text-sm leading-relaxed font-body">
                จากผลลัพธ์การจัดกระบวนการ 7 ประเด็นหลัก
                <br /> ตลอดระยะเวลา 1 ปีที่ผ่านมา ทีมได้วิเคราะห์
                <br /> และสังเคราะห์ผลสรุปในทุกประเด็น ออกเป็นข้อเสนอ
                <br /> เชิงนโยบาย 4 เรื่อง เพื่อสร้างการเปลี่ยนแปลงเชิงระบบ
                <br /> รองรับสังคมสูงวัย
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 pb-6 border-b border-slate-500/75 md:grid-cols-2">
              <div className="col-span-1" id="ccu">
                <p className="text-lg font-bold">
                  การพัฒนาหน่วยประสานการดูแล
                  <br />
                  เพื่อยกระดับการให้บริการแก่ผู้สูงอายุ
                  <br />
                  และผู้ป่วยในระดับจังหวัด
                  <br /> (Care Coordination Unit - CCU)
                </p>
              </div>
              <div className="col-span-1 space-y-6">
                <p className="text-sm leading-relaxed font-body">
                  จากสถานการณ์ปัจจุบัน แม้ว่าระบบบริการสุขภาพ ของไทยจะมีหลายระดับและครอบคลุม แต่ยังคงมีช่องว่างสำหรับการดูแลผู้สูงอายุ หน่วยงานต่างๆ
                  ไม่ได้ประสานงานอย่างไร้รอยต่ออย่างแท้จริง และอาจให้บริการแก่ประชาชนได้ไม่เต็มศักยภาพ ส่งผลให้ผู้ปฏิบัติงานมีภาระอันหนักอึ้ง
                  ทั้งการบริการสุขภาพและการบริการทางสังคม รวมทั้งประชาชนเอง ไม่ทราบถึงสิทธิของตนที่จะได้รับการบริการ
                  หรือหากทราบก็ไม่มีผู้ที่คอยประสานงานเพื่อให้มั่นใจว่าประชาชนจะได้รับสิทธิประโยชน์ดังกล่าว
                </p>
                <p className="text-sm leading-relaxed font-body">
                  ผู้จัดทำโครงการจึงเห็นว่าควรมี “หน่วยประสานการดูแล” (Care Coordination Unit - CCU) อยู่ประจำโรงพยาบาลระดับต่างๆ
                  ตั้งแต่โรงพยาบาลชุมชนขึ้นไปถึงโรงพยาลทั่วไป และโรงพยาบาลศูนย์ เพื่อเป็นกลไกสำคัญสำหรับการดูแลอย่างรอบด้านแก่ผู้สูงอายุ ผู้ป่วย ญาติ และ อปท.
                  ที่เกี่ยวข้อง โดยคาดหวังว่าจะทำให้ประชาชนเข้าถึงบริการทางสุขภาพ และสังคมมากขึ้น
                </p>
                <a
                  className="flex items-center space-x-1 text-sm text-primary hover:text-accent font-body"
                  href="javascript:void(0)"
                  target="_blank"
                  rel="noopener noreferrer"
                  type="application/pdf"
                  onClick={(e) => checkDownload(e, '/archive/policy-recommendations/Policy_Recommendation_CCU.pdf')}
                >
                  <ArrowCircleDownIcon className="w-8 h-8 fill-current" />
                  <span>ดาวน์โหลดเอกสาร</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 pb-6 border-b border-slate-500 md:grid-cols-2">
              <div className="col-span-1" id="aip-1">
                <p className="text-lg font-bold">
                  การเสริมพลังองค์กรปกครองส่วนท้องถิ่น
                  <br />
                  เพื่อยกระดับคุณภาพชีวิตผู้สูงอายุในชุมชน
                  <br />
                  และส่งเสริมการมีส่วนร่วมของประชาชน
                </p>
              </div>
              <div className="col-span-1 space-y-6">
                <p className="text-sm leading-relaxed font-body">
                  ปัจจุบัน องค์กรปกครองส่วนท้องถิ่น (อปท.) มีบทบาทสำคัญอย่างยิ่งในการให้บริการประชาชนในชุมชนของตัวเองในด้านต่างๆ
                  ซึ่งรวมถึงการให้บริการและสร้างสภาพแวดล้อมที่เป็นมิตรกับการใช้ชีวิตของผู้สูงอายุที่จะเพิ่มจำนวนขึ้นอย่างรวดเร็ว แต่อปท.
                  ยังไม่สามารถให้บริการแก่ผู้สูงอายุได้อย่างเต็มที่จากหลายสาเหตุ ได้แก่
                  <br />
                  <br />- การมีโครงการและกองทุนจากหลายหน่วยงานหลายกระทรวง โดย อปท. เป็นผู้ดำเนินการแต่ไม่มีอำนาจบริหารจัดการงบประมาณในตัวเอง
                  <br />- อปท. ประสบความยากลำบากในการเข้าถึงฐานข้อมูลจากราชการส่วนภูมิภาค
                  <br />- อปท. หลายแห่งยังไม่ได้จัดกระบวนการที่ให้ประชาชนมีส่วนร่วมในการเล่าถึงปัญหาและข้อเสนอแนะต่างๆ แก่ อปท. มากพอ
                  <br />- ยังมีผู้สูงอายุและผู้ดูแลหลักที่เป็นญาติจำนวนมากที่ต้องการบริการเสริมเพิ่มเติม เช่น รถสำหรับผู้สูงอายุที่มีภาวะพึ่งพิง
                </p>
                <p className="text-sm leading-relaxed font-body">
                  ด้วยเหตุนี้ ผู้จัดทำโครงการจึงได้มีข้อเสนอแนวทางการเสริมพลังให้องค์กรปกครองส่วนท้องถิ่น โดยมีจุดประสงค์เพื่อเสริมสร้างความแข็งแรงของชุมชน
                  และเพื่อให้ผู้สูงอายุในพื้นที่มีคุณภาพชีวิตที่ดีขึ้น
                </p>
                <a
                  className="flex items-center space-x-1 text-sm text-primary hover:text-accent font-body"
                  href="javascript:void(0)"
                  target="_blank"
                  rel="noopener noreferrer"
                  type="application/pdf"
                  onClick={(e) => checkDownload(e, '/archive/policy-recommendations/Policy_Recommendation_อปท.pdf')}
                >
                  <ArrowCircleDownIcon className="w-8 h-8 fill-current" />
                  <span>ดาวน์โหลดเอกสาร</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 pb-6 border-b border-slate-500 md:grid-cols-2">
              <div className="col-span-1">
                <p className="text-lg font-bold" id="pc-3">
                  การปรับเกณฑ์การจ่ายชดเชยค่าบริการสาธารณสุข
                  <br />
                  ของสำนักงานหลักประกันสุขภาพแห่งชาติ
                  <br />
                  เพื่อส่งเสริมการดูแลระยะกลาง (Intermediate care)
                  <br />
                  อย่างเข้มข้นในระดับโรงพยาบาลชุมชน
                </p>
              </div>
              <div className="col-span-1 space-y-6">
                <p className="text-sm leading-relaxed font-body">
                  การดูแลผู้ป่วยระยะกลาง (intermediate care - IMC) มีความสำคัญในแง่ที่จะช่วยให้ผู้ป่วยไม่กลายเป็นผู้พิการ ช่วยให้ดำเนินชีวิตได้อย่างอิสระ
                  ลดอัตราการกลายเป็นผู้ป่วยระยะยาว และอาจลดภาระทางการคลังของประเทศได้ในอนาคต
                </p>
                <p className="text-sm leading-relaxed font-body">
                  แต่ระบบการดูแลผู้ป่วยระยะกลางในประเทศไทย ไม่ได้มุ่งเน้นไปที่การฟื้นฟูสมรรถภาพผู้ป่วยอย่างต่อเนื่อง และไม่ไร้รอยต่ออย่างแท้จริง
                  โรงพยาบาลศูนย์แออัด ทำให้คนไข้ถูกจำหน่ายออกจากโรงพยาบาลก่อนกำหนด ทั้งยังเน้นการรักษาแบบผู้ป่วยนอก (OPD)
                  ซึ่งเสี่ยงว่าผู้ป่วยจะหลุดออกจากระบบการรักษา ท้ายที่สุดจะไม่ได้รับการฟื้นฟูอย่างเพียงพอ
                </p>
                <p className="text-sm leading-relaxed font-body">
                  ทีมจัดทำโครงการจึงเสนอให้ปรับเกณฑ์การเบิกจ่ายเงินจากกองทุนฟื้นฟูสมรรถภาพทางการแพทย์ของ สปสช. โดยคาดหวังว่าจะส่งเสริม
                  ให้โรงพยาบาลชุมชนมีทรัพยากรและศักยภาพมากขึ้นในการดูแลผู้ป่วยระยะกลาง เพิ่มการเข้าถึงบริการฟื้นฟูสมรรถภาพอย่างเข้มข้น เพียงพอ ต่อเนื่อง
                  และไม่หลุดหายจากระบบ
                </p>
                <a
                  className="flex items-center space-x-1 text-sm text-primary hover:text-accent font-body"
                  href="javascript:void(0)"
                  target="_blank"
                  rel="noopener noreferrer"
                  type="application/pdf"
                  onClick={(e) => checkDownload(e, '/archive/policy-recommendations/Policy_Recommendation_IMC.pdf')}
                >
                  <ArrowCircleDownIcon className="w-8 h-8 fill-current" />
                  <span>ดาวน์โหลดเอกสาร</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 pb-6 border-b border-slate-500 md:grid-cols-2">
              <div className="col-span-1">
                <p className="text-lg font-bold">
                  การปรับกลไกการทำงานของคณะกรรมการ
                  <br />
                  ผู้สูงอายุแห่งชาติ และองค์กรที่เกี่ยวข้อง
                  <br />
                  เพื่อส่งเสริมการผลักดันนโยบายรองรับสังคมสูงวัย
                  <br />
                  (Governing mechanism)
                </p>
              </div>
              <div className="col-span-1 space-y-6">
                <p className="text-sm leading-relaxed font-body">
                  รัฐบาลไทยหลายยุคหลายสมัยได้ให้ความสำคัญกับนโยบายที่เกี่ยวข้องกับผู้สูงอายุ รวมถึงการพิทักษ์สิทธิของผู้สูงอายุมาโดยตลอด แต่กระบวนการทำงานของ
                  กผส. และคณะอนุกรรมการต่างๆ ยังขาดการมีส่วนร่วมของภาคประชาชน
                </p>
                <p className="text-sm leading-relaxed font-body">
                  ผู้จัดทำโครงการจึงได้เสนอแนวทางการยกระดับการทำงานของ กผส. และคณะอนุกรรมการที่เกี่ยวข้องให้เกิดการออกแบบติดตามนโยบายที่ประชาชนเป็นศูนย์กลาง
                  และก่อเกิด “วงจรสะท้อนผล” (feedback loop) ในการกำหนดนโยบาย โดยคาดหวังว่าการมีส่วนร่วมของภาคประชาชนและภาคประชาสังคม รวมถึงการสร้าง feedback
                  loop ในการกำหนดนโยบาย จะทำให้การออกแบบและพัฒนานโยบายเป็นไปโดยคำนึงถึงประชาชนเป็นศูนย์กลางมากยิ่งขึ้น
                </p>
                <a
                  className="flex items-center space-x-1 text-sm text-primary hover:text-accent font-body"
                  href="javascript:void(0)"
                  target="_blank"
                  rel="noopener noreferrer"
                  type="application/pdf"
                  onClick={(e) => checkDownload(e, '/archive/policy-recommendations/Policy_Recommendation_GM.pdf')}
                >
                  <ArrowCircleDownIcon className="w-8 h-8 fill-current" />
                  <span>ดาวน์โหลดเอกสาร</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col space-y-2" id="practical-guidelines">
              <h2 className="text-3xl font-bold">ถอดบทเรียนและแนวทาง</h2>
              <h2 className="text-3xl font-bold">การจัดกระบวนการ</h2>
              <h2 className="text-3xl font-bold">โพลิซี ไดอะล็อก</h2>
              <h3 className="text-xl font-body">practical guidelines</h3>
            </div>

            <ul className="flex w-full snap-x space-x-6 overflow-x-auto flex-nowrap whitespace-nowrap">
              <li className="flex flex-col justify-between p-6 h-72 w-64 text-white bg-[#6badcb] shrink-0">
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
                <a
                  className="btn-white"
                  href="javascript:void(0)"
                  target="_blank"
                  rel="noopener noreferrer"
                  type="application/pdf"
                  onClick={(e) => checkDownload(e, '/archive/practical-guidelines/Policy_Dialogue_Guideline.pdf')}
                >
                  <ArrowCircleDownIcon className="w-8 h-8 fill-current" />
                  <span>ดาวน์โหลดเอกสาร</span>
                </a>
              </li>
              <li className="flex flex-col justify-between p-6 h-72 w-64 text-white bg-[#36723b] shrink-0">
                <div className="space-y-1">
                  <p className="text-lg font-bold">กระบวนการ</p>
                  <p className="text-sm font-body">
                    Policy Dialogue ใช้วิธีการอะไร
                    <br />
                    บ้าง เพื่อหาคำตอบ
                  </p>
                </div>
                <a
                  className="btn-white"
                  href="javascript:void(0)"
                  target="_blank"
                  rel="noopener noreferrer"
                  type="application/pdf"
                  onClick={(e) => checkDownload(e, '/archive/practical-guidelines/Policy_Dialogue_Methods.pdf')}
                >
                  <ArrowCircleDownIcon className="w-8 h-8 fill-current" />
                  <span>ดาวน์โหลดเอกสาร</span>
                </a>
              </li>
              <li className="flex flex-col justify-between p-6 h-72 w-64 text-white bg-[#daa13d] shrink-0">
                <div className="space-y-1">
                  <p className="text-lg font-bold">คุณค่าของกระบวนการ</p>
                  <p className="text-sm font-body">
                    สิ่งที่เราเชื่อและประโยชน์ของ
                    <br /> &lsquo;Policy Dialogue&rsquo;
                  </p>
                </div>
                <a
                  className="btn-white"
                  href="javascript:void(0)"
                  target="_blank"
                  rel="noopener noreferrer"
                  type="application/pdf"
                  onClick={(e) => checkDownload(e, '/archive/practical-guidelines/Policy_Dialogue_Value.pdf')}
                >
                  <ArrowCircleDownIcon className="w-8 h-8 fill-current" />
                  <span>ดาวน์โหลดเอกสาร</span>
                </a>
              </li>
              <li className="flex flex-col justify-between p-6 h-72 w-64 text-white bg-[#cc79a7] shrink-0">
                <div className="space-y-1">
                  <p className="text-lg font-bold">จัดการอย่างไรให้สำเร็จ</p>
                  <p className="text-sm font-body">
                    รวบรวมปัญหาที่พบ
                    <br /> และข้อควรคำนึง
                    <br />
                    เพื่อให้กระบวนการราบรื่น
                  </p>
                </div>
                <a
                  className="btn-white"
                  href="javascript:void(0)"
                  target="_blank"
                  rel="noopener noreferrer"
                  type="application/pdf"
                  onClick={(e) => checkDownload(e, '/archive/practical-guidelines/Policy_Dialogue_Tips.pdf')}
                >
                  <ArrowCircleDownIcon className="w-8 h-8 fill-current" />
                  <span>ดาวน์โหลดเอกสาร</span>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="relative h-full px-6 pt-24 bg-center bg-no-repeat bg-cover bg-secondary bg-landing-footer">
          <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-8">
            <div className="leading-snug text-4xl font-bold text-center text-white lg:text-5xl">
              <h3>โพลิซี ไดอะล็อก</h3>
              <h3>ทำงานอย่างไร ?</h3>
            </div>
            <p className="text-base text-center text-white font-body lg:text-lg max-w-prose">
              เราได้จัดทำคู่มือการจัดกระบวนการจากประสบการณ์ของทีมงาน ผู้ที่สนใจสามารถนำไปปรับใช้สำหรับออกแบบและพัฒนานโยบาย ทุกระดับ ทุกประเด็นในสังคม
              เพื่อร่วมกันสร้างการเปลี่ยนแปลงเชิงระบบ
            </p>
            <div className="flex justify-center pt-8 pb-12">
              <Link href="/guideline">
                <a className="w-full btn">คู่มือการจัดกระบวนการ</a>
              </Link>
            </div>
            <AboutRiseImpact />
          </div>
        </section>
      </main>
    </>
  )
}

export default ArchivePage
