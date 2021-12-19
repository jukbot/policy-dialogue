import Accordion from '@/components/Global/Accordion'
import { selectedTeamAtom } from '@/stores/global'
import { useAtom } from 'jotai'

const TeamRoleContent = () => {
  const [selectedTeam, setSelectedTeam] = useAtom(selectedTeamAtom)
  return (
    <>
      <div className="flex-col hidden space-y-4 md:flex">
        <h3 className="text-4xl font-bold">บทบาทของทีม</h3>
        <p className="text-sm sm:text-base font-body">ทีม RISE Impact แบ่งการทำงานเป็นทีมย่อยของแต่ละประเด็น ออกเป็น 3 บทบาท ดังนี้</p>
      </div>
      <div className="space-y-2">
        <Accordion title="ทีมเนื้อหา" number={0} isOpen={selectedTeam === 0} toggleClick={() => setSelectedTeam(selectedTeam === 0 ? null : 0)}>
          <p>ศึกษาค้นคว้าข้อมูล เพื่อทำความเข้าใจ เรียบเรียง คิดวิเคราะห์ สังเคราะห์ประเด็นที่เกี่ยวข้องให้ถูกต้องและทันเหตุการณ์</p>
          <div className="space-y-2">
            <span className="font-bold">Skills Checklist</span>
            <ul className="flex flex-col space-y-1 leading-relaxed list-inside">
              <li className="flex space-x-2">
                <span className="text-xl font-bold leading-none align-top">•</span>
                <p>ทักษะการมองภาพรวม เชื่อมโยงประเด็น หรือ การคิดเชิงระบบ</p>
              </li>
              <li className="flex space-x-2">
                <span className="text-xl font-bold leading-none align-top">•</span>
                <p>ทักษะการค้นคว้าหาข้อมูล</p>
              </li>
              <li className="flex space-x-2">
                <span className="text-xl font-bold leading-none align-top">•</span>
                <p>ทักษะการวิเคราะห์และสังเคราะห์</p>
              </li>
              <li className="flex space-x-2">
                <span className="text-xl font-bold leading-none align-top">•</span>
                <p>ทักษะการเขียน</p>
              </li>
            </ul>
          </div>
        </Accordion>
        <Accordion title="ทีมจัดกระบวนการ" number={1} isOpen={selectedTeam === 1} toggleClick={() => setSelectedTeam(selectedTeam === 1 ? null : 1)}>
          <p>คิด จำกัดขอบเขตเนื้อหา และดำเนินกิจกรรมให้เหมาะสมกับเนื้อหาที่มี เพื่อบรรลุเป้าหมายทั้ง 3 ลำดับชั้นในแต่ละวงหารือ</p>
          <div className="space-y-2">
            <span className="font-bold">Skills Checklist</span>
            <ul className="flex flex-col space-y-1 leading-relaxed list-inside">
              <li className="flex space-x-2">
                <span className="text-xl font-bold leading-none align-top">•</span>
                <p>ทักษะการตั้งคำถาม</p>
              </li>
              <li className="flex space-x-2">
                <span className="text-xl font-bold leading-none align-top">•</span>
                <p>ทักษะการตัดสินใจ</p>
              </li>
              <li className="flex space-x-2">
                <span className="text-xl font-bold leading-none align-top">•</span>
                <p>ความสามารถในการปรับตัว</p>
              </li>
              <li className="flex space-x-2">
                <span className="text-xl font-bold leading-none align-top">•</span>
                <p>ทักษะการชวนคุย (Moderator)</p>
              </li>
              <li className="flex space-x-2">
                <span className="text-xl font-bold leading-none align-top">•</span>
                <p>ทักษะการคิดเชิงวิพากษ์ (Critical thinkng)</p>
              </li>
            </ul>
          </div>
        </Accordion>
        <Accordion title="ทีมประสานงาน" number={2} isOpen={selectedTeam === 2} toggleClick={() => setSelectedTeam(selectedTeam === 2 ? null : 2)}>
          <p>ติดต่อประสานงานทั้งภายในทีมย่อย ทีมหลัก และ ผู้ที่เกี่ยวข้องกับกระบวนการตั้งแต่ต้นจนจบ</p>
          <div className="space-y-2">
            <span className="font-bold">Skills Checklist</span>
            <ul className="flex flex-col space-y-1 leading-relaxed list-inside">
              <li className="flex space-x-2">
                <span className="text-xl font-bold leading-none align-top">•</span>
                <p>ทักษะการสื่อสารกับผู้คนหลากหลายรูปแบบ</p>
              </li>
              <li className="flex space-x-2">
                <span className="text-xl font-bold leading-none align-top">•</span>
                <p>ความสามารถในการสื่อสารบนหลากหลายแพลตฟอร์ม</p>
              </li>
              <li className="flex space-x-2">
                <span className="text-xl font-bold leading-none align-top">•</span>
                <p>ทักษะการแก้ปัญหาเฉพาะหน้า</p>
              </li>
              <li className="flex space-x-2">
                <span className="text-xl font-bold leading-none align-top">•</span>
                <p>ความสามารถการจัดเตรียมอำนวยความสะดวกต่าง ๆ</p>
              </li>
            </ul>
          </div>
        </Accordion>
      </div>
    </>
  )
}

export default TeamRoleContent
