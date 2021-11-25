import Image from 'next/image'
import Fieldwork from '/public/image/process/fieldwork.svg'
import InternalMeeting from '/public/image/process/internal-meeting.svg'
import Interview from '/public/image/process/interview.svg'
import LiteratureReview from '/public/image/process/literature-review.svg'
import Seminar from '/public/image/process/seminar.svg'

const PreProcess = () => {
  return (
    <div className="grid max-w-6xl grid-cols-1 gap-8 px-12 mx-auto md:gap-12 md:grid-cols-3">
      <div className="flow-root">
        <div className="space-y-3">
          <Image className="flex-shrink-0 w-12 h-12" width="48" height="48" aria-hidden="true" src={Interview} alt="intervew" />
          <h3 className="text-xl font-bold">Interview</h3>
          <p className="text-sm leading-relaxed sm:text-base font-body">สัมภาษณ์เจาะลึกผู้ที่เกี่ยวข้อง</p>
        </div>
      </div>
      <div className="flow-root">
        <div className="space-y-4">
          <Image className="flex-shrink-0 w-12 h-12" width="48" height="48" aria-hidden="true" src={Seminar} alt="seminar" />
          <h3 className="text-xl font-bold">Seminar</h3>
          <p className="text-sm leading-relaxed sm:text-base font-body">เข้าร่วมงานเสวนาวิชาการ-วงประชุมภายนอก ทั้งแบบออนไลน์และ ออฟไลน์</p>
        </div>
      </div>
      <div className="flow-root">
        <div className="space-y-4">
          <Image className="flex-shrink-0 w-12 h-12" width="48" height="48" aria-hidden="true" src={Fieldwork} alt="fieldwork" />
          <h3 className="text-xl font-bold">Fieldwork</h3>
          <p className="text-sm leading-relaxed sm:text-base font-body">
            ลงพื้นที่-ดูงานในสถานที่ต่าง ๆ ที่เกี่ยวข้อง เช่น ชมรมผู้สูงอายุ โรงพยาบาลส่งเสริมสุขภาพตำบล (รพ.สต.) สำนักงานเทศบาลตำบล
          </p>
        </div>
      </div>
      <div className="flow-root">
        <div className="space-y-4">
          <Image className="flex-shrink-0 w-12 h-12" width="48" height="48" aria-hidden="true" src={LiteratureReview} alt="literature review" />
          <h3 className="text-xl font-bold">Literature Review</h3>
          <p className="text-sm leading-relaxed sm:text-base font-body">ค้นคว้าข้อมูลจากรายงานวิจัย บทความวิชาการ และเอกสาร ที่น่าเชื่อถือ</p>
        </div>
      </div>
      <div className="flow-root">
        <div className="space-y-4">
          <Image className="flex-shrink-0 w-12 h-12" width="48" height="48" aria-hidden="true" src={InternalMeeting} alt="internal meeting" />
          <h3 className="text-xl font-bold">Internal Meeting / Synthesis</h3>
          <p className="text-sm leading-relaxed sm:text-base font-body">ประชุมระดมสมองภายในทีม</p>
        </div>
      </div>
    </div>
  )
}

export default PreProcess
