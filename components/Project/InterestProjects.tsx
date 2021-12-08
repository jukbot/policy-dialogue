const InterestProjects = () => {
  return (
    <section className="relative h-full space-y-12 bg-secondary">
      <div className="max-w-6xl px-6 py-16 mx-auto space-y-12 text-white sm:px-12">
        <h2 className="text-4xl font-bold">นโยบายสูงอายุที่คุณอาจสนใจ</h2>

        <ul className="flex w-full space-x-6 overflow-x-auto flex-nowrap whitespace-nowrap">
          <li className="flex flex-col justify-between w-64 p-6 bg-white h-72 text-secondary">
            <div className="space-y-1">
              <p className="text-lg font-bold">
                กลไกการติดตามขับเคลื่อน
                <br /> นโยบายเรื่องผู้สูงอายุ
              </p>
              <p className="text-sm font-body">(Governing Mechanism)</p>
            </div>
          </li>
          <li className="flex flex-col justify-between w-64 p-6 bg-white h-72 text-secondary">
            <div className="space-y-1">
              <p className="text-lg font-bold">
                ระบบบริการสำหรับผู้ป่วย
                <br />
                โรคสมองเสื่อม
              </p>
              <p className="text-sm font-body">(Dementia)</p>
            </div>
          </li>
          <li className="flex flex-col justify-between w-64 p-6 bg-white h-72 text-secondary">
            <div className="space-y-1">
              <p className="text-lg font-bold">
                ระบบบริการดูแลแบบ
                <br />
                ประคับประคอง
              </p>
              <p className="text-sm font-body">(Palliative Care)</p>
            </div>
          </li>
          <li className="flex flex-col justify-between w-64 p-6 bg-white h-72 text-secondary">
            <div className="space-y-1">
              <p className="text-lg font-bold">
                ระบบบริการระยะยาวสำหรับ
                <br />
                กลุ่มผู้สูงอายุที่มีภาวะพึ่งพิง
              </p>
              <p className="text-sm font-body">(Long Term Care)</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default InterestProjects
