import { Project } from '@types'

interface Props {
  projects: Project[]
}

const InterestProjects = ({ projects }: Props) => {
  console.log(projects)
  return (
    <section className="relative h-full space-y-12 bg-secondary">
      <div className="max-w-6xl px-6 py-12 mx-auto space-y-12 text-white sm:px-12">
        <h2 className="text-4xl font-bold">นโยบายสูงอายุที่คุณอาจสนใจ</h2>

        <ul className="flex w-full space-x-6 overflow-x-auto flex-nowrap whitespace-nowrap">
          <div className="relative">
            {/* <div className="bg-[#a8a8a8] flex p-6 items-center justify-center absolute -top-10 z-10 w-24 h-24 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="145.593" height="107.312" viewBox="0 0 145.593 107.312">
                <path
                  data-name="Path 306"
                  d="M971.865 120.938H857.03a15.377 15.377 0 0 1-4.863-29.966l24.933-8.313h-20.07a15.377 15.377 0 0 1-4.863-29.966l24.933-8.312h-20.07a15.377 15.377 0 0 1 0-30.755h114.835a15.377 15.377 0 0 1 4.863 29.966L951.791 51.9h20.074a15.377 15.377 0 0 1 4.863 29.966l-24.937 8.312h20.074a15.377 15.377 0 1 1 0 30.755z"
                  transform="translate(-841.651 -13.626)"
                  fill="#fff"
                />
              </svg>
            </div> */}
            <li className="flex flex-col justify-between w-64 p-6 bg-white shrink-0 h-72 text-secondary">
              <div className="space-y-1">
                <p className="text-lg font-bold">
                  กลไกการติดตามขับเคลื่อน
                  <br /> นโยบายเรื่องผู้สูงอายุ
                </p>
                <p className="text-sm font-body">(Governing Mechanism)</p>
              </div>
            </li>
          </div>
          <li className="flex flex-col justify-between w-64 p-6 bg-white shrink-0 h-72 text-secondary">
            <div className="space-y-1">
              <p className="text-lg font-bold">
                ระบบบริการสำหรับผู้ป่วย
                <br />
                โรคสมองเสื่อม
              </p>
              <p className="text-sm font-body">(Dementia)</p>
            </div>
          </li>
          <li className="flex flex-col justify-between w-64 p-6 bg-white shrink-0 h-72 text-secondary">
            <div className="space-y-1">
              <p className="text-lg font-bold">
                ระบบบริการดูแลแบบ
                <br />
                ประคับประคอง
              </p>
              <p className="text-sm font-body">(Palliative Care)</p>
            </div>
          </li>
          <li className="flex flex-col justify-between w-64 p-6 bg-white shrink-0 h-72 text-secondary">
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
