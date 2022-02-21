import Image from 'next/image'
import LongTerm from '/public/image/value/long-term.svg'
import Participant from '/public/image/value/participant.svg'
import ShortTerm from '/public/image/value/short-term.svg'

const SystemValue = () => {
  return (
    <div className="relative grid max-w-6xl grid-cols-1 gap-8 px-6 mx-auto md:px-12 md:gap-16 md:grid-cols-3 transition duration-300 ">
      <div className="flow-root">
        <div className="space-y-4">
          <Image className="shrink-0" height="48" width="64" priority aria-hidden="true" src={Participant} alt="participant" />
          <h3 className="text-xl font-bold">ผู้มีส่วนร่วมได้แลกเปลี่ยนโลกทัศน์</h3>
          <p className="text-sm leading-relaxed sm:text-base font-body">
            เกิดการแลกเปลี่ยนกัน ทำให้เห็นโอกาสและความเป็นไปได้ใหม่ๆ ที่จะแก้ปัญหา หรือลงมือทำในทางที่ต่างออกไป
            รวมถึงเห็นศักยภาพของตนเองในฐานะผู้ขับเคลื่อนในเรื่องนั้นๆ มากขึ้น
          </p>
        </div>
      </div>
      <div className="flow-root">
        <div className="space-y-4">
          <Image className="shrink-0" height="48" width="48" priority aria-hidden="true" src={ShortTerm} alt="short term" />
          <h3 className="text-xl font-bold">เกิดผลในระยะสั้น</h3>
          <p className="text-sm leading-relaxed sm:text-base font-body">
            เห็นวิธีการที่เป็นรูปธรรม ทำให้เกิดการลงมือทำทันทีหลังจากการแลกเปลี่ยนในกระบวนการ เช่น การสื่อสารข้อมูลในวงกว้าง
            การนำความเห็นจากวงไปปรับใช้ในหน้างานที่ทำอยู่
          </p>
        </div>
      </div>
      <div className="flow-root">
        <div className="space-y-4">
          <Image className="shrink-0" height="48" width="100" priority aria-hidden="true" src={LongTerm} alt="long term" />
          <h3 className="text-xl font-bold">เกิดการเปลี่ยนแปลงระยะยาว</h3>
          <p className="text-sm leading-relaxed sm:text-base font-body">
            เกิดเครือข่ายระหว่างองค์กรของผู้เข้าร่วม ทำให้ได้ร่วมกันผลักดันประเด็นนโยบายต่อไป เช่น การชักชวนกันมาร่วมทำงานวิจัย
            การทำโครงการพัฒนาเครื่องมือร่วมกัน
          </p>
        </div>
      </div>
    </div>
  )
}

export default SystemValue
