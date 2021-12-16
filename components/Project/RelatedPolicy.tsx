import { ArrowRightIcon } from '@heroicons/react/outline'

const RelatedPolicy = () => {
  return (
    <section className="relative h-full space-y-12 bg-white">
      <div className="max-w-6xl px-6 py-16 mx-auto space-y-12 sm:px-12">
        <div className="text-center space-y-4 my-4 text-body">
          <h2 className="text-4xl font-bold">ข้อเสนอเชิงนโยบายที่เกี่ยวข้อง</h2>
          <p className="text-base font-body">จากการสังเคราะห์ข้อมูลที่ได้มาจากกระบวนการที่ใช้วิธีการอันหลากหลาย จึงเกิดเป็นข้อเสนอเชิงนโยบายขึ้น</p>
        </div>
        <ul className="flex w-full space-x-6 md:space-x-12 justify-center overflow-x-auto flex-nowrap">
          <li className="flex flex-col items-center justify-between w-64 p-6 bg-[#36723b] text-white h-72 text-center">
            <p className="font-bold mt-12">การเสริมพลังองค์กรปกครองส่วนท้องถิ่นเพื่อยกระดับคุณภาพชีวิตผู้สูงอายุในชุมชน และส่งเสริมการมีส่วนร่วมของประชาชน</p>
            <ArrowRightIcon className="shrink-0 w-8 h-8" />
          </li>
          <li className="flex flex-col items-center justify-between w-64 p-6 bg-[#daa13d] text-white h-72 text-center">
            <p className="font-bold mt-12">การจัดการโครงสร้างเครือข่ายบริการสุขภาพระดับจังหวัด</p>
            <ArrowRightIcon className="shrink-0 w-8 h-8" />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default RelatedPolicy
