import Image from 'next/image'
import AffectPerson from '/public/image/value/affect-person.svg'
import Authority from '/public/image/value/authority.svg'
import Developer from '/public/image/value/developer.svg'
import UsageStaff from '/public/image/value/usage-staff.svg'

const PolicyValue = () => {
  return (
    <div className="grid max-w-6xl grid-cols-1 gap-8 px-12 mx-auto md:gap-16 md:grid-cols-2">
      <div className="flow-root">
        <div className="space-y-4">
          <Image className="flex-shrink-0" width="64" height="64" aria-hidden="true" src={Authority} alt="authority" />
          <h3 className="text-xl font-bold">ผู้มีอำนาจในการกำหนดหรือตัดสินใจระดับนโยบาย</h3>
          <ul className="space-y-4 text-sm leading-relaxed list-inside sm:text-base">
            <li className="inline-flex space-x-2">
              <span className="text-2xl font-bold leading-none align-top">•</span>
              <div className="space-y-1">
                <p className="font-body">ได้รับข้อมูลหรือข้อเสนอเกี่ยวกับนโยบายจากผู้ที่มีส่วนร่วมในกระบวนการ และอาจช่วยลดความตึงเครียดของความเห็นต่างลงได้</p>
              </div>
            </li>
            <li className="inline-flex space-x-2">
              <span className="text-2xl font-bold leading-none align-top">•</span>
              <div className="space-y-1">
                <p className="font-body">
                  ได้ทำความเข้าใจปัญหาที่เกิดขึ้นจากประสบการณ์จริงของผู้ปฏิบัติงาน ซึ่งอาจมีส่วนช่วยในการขับเคลื่อนนโยบาย หรือออกแบบการแก้ไขปัญหาในอนาคต
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="flow-root">
        <div className="space-y-3">
          <Image className="flex-shrink-0" width="64" height="64" aria-hidden="true" src={Developer} alt="developer" />
          <h3 className="text-xl font-bold">ผู้ที่มีบทบาทในการพัฒนาหรือเสนอนโยบาย</h3>
          <ul className="space-y-4 text-sm leading-relaxed list-inside sm:text-base">
            <li className="inline-flex space-x-2">
              <span className="text-2xl font-bold leading-none align-top">•</span>
              <div className="space-y-1">
                <p className="font-body">
                  เป็นเครื่องมือในการพัฒนานโยบายสาธารณะที่สร้างการมีส่วนร่วม ทำให้สามารถตอบสนองต่อการเปลี่ยนแปลง ของสถานการณ์ต่างๆ
                  ได้รวดเร็วและยืดหยุ่นกว่าการทำงานวิจัย
                </p>
              </div>
            </li>
            <li className="inline-flex space-x-2">
              <span className="text-2xl font-bold leading-none align-top">•</span>
              <div className="space-y-1">
                <p className="font-body">เกิดการพูดคุยแลกเปลี่ยน เพื่อหาจุดร่วมระหว่างผู้ที่เกี่ยวข้องกับประเด็นนั้นๆ ทุกระดับ</p>
              </div>
            </li>
            <li className="inline-flex space-x-2">
              <span className="text-2xl font-bold leading-none align-top">•</span>
              <div className="space-y-1">
                <p className="font-body">
                  เปิดโอกาสให้ผู้เข้าร่วมที่มาจากบริบทที่ต่างกัน ได้แลกเปลี่ยน เห็นจุดร่วมและจุดต่าง ทำให้เกิดทางเลือกใหม่ๆ ที่อาจเป็นการต่อยอดนโยบายต่อไป
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="flow-root">
        <div className="space-y-4">
          <Image className="flex-shrink-0" width="64" height="64" aria-hidden="true" src={UsageStaff} alt="usage staff" />
          <h3 className="text-xl font-bold">ผู้ที่ต้องนำนโยบายไปปฏิบัติใช้</h3>
          <ul className="space-y-4 text-sm leading-relaxed list-inside sm:text-base">
            <li className="inline-flex space-x-2">
              <span className="text-2xl font-bold leading-none align-top">•</span>
              <div className="space-y-1">
                <p className="font-body">
                  เป็นพื้นที่ ‘ส่งเสียง’ ได้มีส่วนร่วมในการออกแบบนโยบายที่จะมีผลกับการทำงาน ทั้งยังได้รับรู้ข้อจำกัดของผู้ที่เกี่ยวข้อง ในบทบาทอื่น
                </p>
              </div>
            </li>
            <li className="inline-flex space-x-2">
              <span className="text-2xl font-bold leading-none align-top">•</span>
              <div className="space-y-1">
                <p className="font-body">เมื่อได้มีส่วนร่วม ทำให้รู้สึกว่าตัวเองเป็นส่วนสำคัญของประเด็นนั้นๆ นำไปสู่การผลักดันให้เกิดการลงมือทำจริง</p>
              </div>
            </li>
            <li className="inline-flex space-x-2">
              <span className="text-2xl font-bold leading-none align-top">•</span>
              <div className="space-y-1">
                <p className="font-body">เกิดการแลกเปลี่ยนและแชร์ทรัพยากร ข่าวสาร ข้อมูล ความรู้ระหว่างพื้นที่และองค์กร</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="flow-root">
        <div className="space-y-4">
          <Image className="flex-shrink-0" width="64" height="64" aria-hidden="true" src={AffectPerson} alt="affect person" />
          <h3 className="text-xl font-bold">เราทุกคนที่ได้รับผลกระทบจากนโยบาย</h3>
          <p className="text-sm leading-relaxed sm:text-base font-body">
            ได้มีโอกาสทำความเข้าใจประเด็นเชิงนโยบาย ร่วมให้ความเห็นบนฐานความรู้ และสะท้อนความต้องการและสิ่งที่ไม่พึงประสงค์ของนโยบายนั้นๆ
            เพื่อที่ผู้ที่มีบทบาทจะนำข้อมูลไปทำงานต่อ
          </p>
        </div>
      </div>
    </div>
  )
}

export default PolicyValue
