import { ArrowRightIcon } from '@heroicons/react/outline'
import { Policy } from '@types'
import Link from 'next/link'

interface Props {
  policies: Policy[]
}

const RelatedPolicy = ({ policies = [] }: Props) => {
  return (
    <section className="relative h-full bg-white">
      <div className="max-w-6xl px-6 py-12 mx-auto space-y-8 md:space-y-12 sm:px-12">
        <div className="my-4 space-y-4 text-center text-body">
          <h2 className="text-4xl font-bold">ข้อเสนอเชิงนโยบายที่เกี่ยวข้อง</h2>
          <p className="text-base font-body">จากการสังเคราะห์ข้อมูลที่ได้มาจากกระบวนการที่ใช้วิธีการอันหลากหลาย จึงเกิดเป็นข้อเสนอเชิงนโยบายขึ้น</p>
        </div>
        <ul className={`flex w-full space-x-6 overflow-x-auto ${policies.length === 1 && 'justify-center'} md:justify-center md:space-x-12 flex-nowrap`}>
          {policies.map((policy) => (
            <li key={policy.id} className={`shrink-0 flex flex-col items-center justify-between w-64 p-6 ${policy.color} text-white h-72 text-center`}>
              <p className="mt-12 font-bold whitespace-normal">{policy.text}</p>
              <Link href={policy.url}>
                <a target="_self" title="ไปหน้าคลังข้อมูล">
                  <ArrowRightIcon className="w-8 h-8 fill-current shrink-0 hover:text-neutral-900" />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default RelatedPolicy
