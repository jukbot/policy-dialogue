import Image from 'next/image'
import BoardGame from '/public/image/process/boardgame.svg'
import Discussion from '/public/image/process/discussion.svg'
import OnlinePublicEngagement from '/public/image/process/online-public-engagement.svg'
import PatientJourney from '/public/image/process/patient-journey.svg'
import RealtimeTools from '/public/image/process/realtime-tools.svg'

const PostProcess = () => {
  return (
    <div className="grid max-w-6xl grid-cols-1 gap-8 px-12 mx-auto md:gap-16 md:grid-cols-3">
      <div className="flow-root">
        <div className="space-y-3">
          <Image className="flex-shrink-0 w-12 h-12" width="48" height="48" aria-hidden="true" src={Discussion} alt="intervew" />
          <h3 className="text-xl font-bold">Discussion</h3>
          <p className="text-sm leading-relaxed sm:text-base font-body">
            การแลกเปลี่ยน ถกเถียง หารือจะเกิดขึ้นได้ต่อเมื่อมีคำถามที่น่าสนใจ ทำให้คนต่างมุมอยากแชร์ประเด็นที่ตนเกี่ยวข้อง ทั้งแลกเปลี่ยนกันเอง
            หรือแลกเปลี่ยนกับทีมงาน
          </p>
        </div>
      </div>

      <div className="flow-root">
        <div className="space-y-4">
          <Image className="flex-shrink-0 w-12 h-12" width="48" height="48" aria-hidden="true" src={BoardGame} alt="boardgame" />
          <h3 className="text-xl font-bold">Board Game</h3>
          <p className="text-sm leading-relaxed sm:text-base font-body">
            ช่วยจำลองสถานการณ์ให้ผู้เข้าร่วมได้สะท้อนแนวคิดและวิธีการทำงาน เพื่อลดข้อจำกัดจากการสวมหัวโขน และสร้างบรรยากาศที่ผ่อนคลาย
          </p>
        </div>
      </div>

      <div className="flow-root">
        <div className="space-y-4">
          <Image className="flex-shrink-0 w-12 h-12" width="48" height="48" aria-hidden="true" src={RealtimeTools} alt="realtime tools" />
          <h3 className="text-xl font-bold">Realtime Tools</h3>
          <p className="text-sm leading-relaxed sm:text-base font-body">
            กิจกรรมที่ให้ผู้เข้าร่วมทำแบบสอบถาม หรือโหวต แล้วนำผลมาแสดงทันที เพื่อใช้ผลนั้นๆ ในกระบวนการต่อไป
          </p>
        </div>
      </div>

      <div className="flow-root">
        <div className="space-y-4">
          <div className="inline-flex space-x-2">
            <span className="text-2xl font-bold leading-none align-top">•</span>
            <h3 className="font-bold">Brainstorming by Mural / Post-it / Visual Note</h3>
          </div>
          <p className="text-sm leading-relaxed sm:text-base font-body">ใช้กระดานเป็นพื้นที่กลางสำหรับระดมความเห็น เพื่อสร้างการมีส่วนร่วมที่สนุกสนานมากขึ้น</p>
        </div>
      </div>

      <div className="flow-root">
        <div className="space-y-4">
          <Image className="flex-shrink-0 w-12 h-12" width="48" height="48" aria-hidden="true" src={PatientJourney} alt="patient journey" />
          <h3 className="text-xl font-bold">Patient Journey</h3>
          <p className="text-sm leading-relaxed sm:text-base font-body">
            การยกตัวอย่าง case study เส้นทางชีวิตคนไข้เมื่อเจ็บป่วยในช่วงชีวิตต่างๆ เพื่อให้ผู้เข้าร่วมเห็นภาพชัดเจน ได้ insight ที่ค่อนข้างละเอียด
            และข้อมูลที่ไม่ได้คาดหวังเอาไว้ล่วงหน้า
          </p>
        </div>
      </div>

      <div className="flow-root">
        <div className="space-y-4">
          <Image className="flex-shrink-0 w-12 h-12" width="48" height="48" aria-hidden="true" src={OnlinePublicEngagement} alt="online public engagement" />
          <h3 className="text-xl font-bold">Online Public Engagement</h3>
          <p className="text-sm leading-relaxed sm:text-base font-body">
            ใช้เว็บแอปพลิเคชั่นเพื่อสื่อสารและสำรวจความคิดเห็นในวงกว้าง สร้างการรับรู้ต่อประเด็นนั้นๆ และ
            อาจใช้ผลลัพธ์ที่ได้มาเป็นข้อมูลตั้งต้นจัดวงหารือครั้งต่อไป
          </p>
        </div>
      </div>
    </div>
  )
}

export default PostProcess
