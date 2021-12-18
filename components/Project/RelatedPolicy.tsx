import { ArrowRightIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const RelatedPolicy = () => {
  return (
    <section className="relative h-full space-y-12 bg-white">
      <div className="max-w-6xl px-6 py-16 mx-auto space-y-12 sm:px-12">
        <div className="my-4 space-y-4 text-center text-body">
          <h2 className="text-4xl font-bold">ข้อเสนอเชิงนโยบายที่เกี่ยวข้อง</h2>
          <p className="text-base font-body">จากการสังเคราะห์ข้อมูลที่ได้มาจากกระบวนการที่ใช้วิธีการอันหลากหลาย จึงเกิดเป็นข้อเสนอเชิงนโยบายขึ้น</p>
        </div>
        <ul className="flex justify-center w-full space-x-6 overflow-x-auto md:space-x-12 flex-nowrap">
          <li className="flex flex-col items-center justify-between min-w-64 shrink-0 p-6 bg-[#36723b] text-white h-72 text-center">
            <p className="mt-12 font-bold whitespace-normal">
              การเสริมพลังองค์กรปกครองส่วนท้องถิ่นเพื่อยกระดับคุณภาพชีวิตผู้สูงอายุในชุมชน และส่งเสริมการมีส่วนร่วมของประชาชน
            </p>
            <Link href="/archive#aip-1">
              <a target="_self">
                <ArrowRightIcon className="w-8 h-8 fill-current shrink-0 hover:text-primary" />
              </a>
            </Link>
          </li>
          <li className="shrink-0 flex flex-col items-center justify-between w-64 p-6 bg-[#daa13d] text-white h-72 text-center">
            <p className="mt-12 font-bold whitespace-normal">การจัดการโครงสร้างเครือข่ายบริการสุขภาพระดับจังหวัด</p>
            <Link href="/archive#aip-2">
              <a target="_self">
                <ArrowRightIcon className="w-8 h-8 fill-current shrink-0 hover:text-primary" />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default RelatedPolicy
