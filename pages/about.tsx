import Team from '@/data/team.json'
import Contributor from '@/data/contributors.json'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <div className="relative">
      <main className="relative">
        <section className="relative grid h-[50vh] lg:h-[75vh] bg-left-bottom bg-cover sm:bg-contain bg-no-repeat transition flex items-center bg-about-pattern-mobile sm:bg-about-pattern">
          <div className="flex justify-center pt-24 text-white lg:justify-start lg:ml-48">
            <h1 className="text-5xl font-semibold lg:text-6xl">เกี่ยวกับเรา</h1>
          </div>
          <div className="fixed w-full h-full absolute bottom-0 right-0 triangle-bottom-right mix-blend-screen opacity-75 from-[#191919] to-[#242054] bg-gradient-to-b bottom-0" />
        </section>

        <section className="relative h-full space-y-12 bg-white">
          <div className="grid grid-cols-1 gap-16 py-16 mx-auto lg:py-32 md:grid-cols-2 max-w-7xl">
            <div className="flex flex-col col-span-1 px-6 sm:px-12 text-body">
              <div className="space-y-2">
                <h2 className="text-4xl font-semibold sm:text-5xl">HELLO!</h2>
                <h2 className="text-4xl font-semibold sm:text-5xl">WE ARE RISE IMPACT</h2>
              </div>
            </div>
            <div className="relative col-span-1 px-6 sm:px-12">
              <p className="lg:text-lg max-w-prose font-body">
                พวกเราเป็นองค์กรเล็กที่ไม่ขึ้นกับใคร และมองว่าองค์กร
                <br /> ของเราจะช่วยกระตุ้นให้เกิดการเปลี่ยนแปลงเชิงระบบ
                <br /> โดยมุ่งใช้ความเป็นองค์กรที่ยืดหยุ่นนี้ เชื่อมช่องว่างทั้งหลาย
                <br /> ในระบบนิเวศของนวัตกรรมทางสังคม
                <br /> เพื่อสร้างผลกระทบเชิงบวกให้มากขึ้นกว่าเดิม
              </p>
            </div>
          </div>
          <div className="px-6 py-12 mx-auto text-center max-w-7xl lg:px-12">
            <div className="space-y-12">
              <div className="mx-auto sm:max-w-xl lg:max-w-5xl">
                <h2 className="text-4xl font-bold lg:text-6xl">RISE IMPACT Team</h2>
              </div>
              <ul role="list" className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3">
                {Team.map((person) => (
                  <li key={person.name}>
                    <div className="space-y-6">
                      <Image className="mx-auto rounded-full w-36 h-36 xl:w-48 xl:h-48" priority width="200" height="200" src={person.imageUrl} alt="profile" />
                      <div className="space-y-2">
                        <div className="space-y-1 text-lg leading-6 font-body">
                          <h3 className="font-bold">{person.name}</h3>
                          <p className="font-light">{person.role}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="px-6 pt-12 mx-auto text-center pb-36 max-w-7xl lg:px-12">
            <div className="space-y-12 lg:space-y-24">
              <div className="mx-auto sm:max-w-xl lg:max-w-5xl">
                <h2 className="text-4xl font-bold lg:text-6xl">Contributors</h2>
              </div>
              <ul role="list" className="mx-auto space-y-8 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-16 sm:space-y-0">
                {Contributor.map((person) => (
                  <li key={person.name}>
                    <div className="text-lg leading-6 text-center font-body">
                      <h3 className="font-bold">{person.name}</h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="relative h-full bg-secondary">
          <div className="px-6 py-24 mx-auto space-y-12 lg:px-12 max-w-7xl">
            <div className="space-y-2 text-white">
              <h2 className="text-4xl font-bold lg:text-6xl">ติดต่อเรา</h2>
              <p className="text-4xl font-body">Get in touch!</p>
            </div>
            <form>
              <div className="grid grid-cols-1 gap-y-6 gap-x-12 lg:grid-cols-2">
                <div className="col-span-1 space-y-6">
                  <div className="grid items-start grid-cols-3 gap-4">
                    <label htmlFor="fullname" className="label-input">
                      ชื่อ/นามสกุล
                    </label>
                    <div className="col-span-2">
                      <input type="text" name="fullName" id="fullname" placeholder="ชื่อ/นามสกุล" className="text-input" />
                    </div>
                  </div>
                  <div className="grid items-start grid-cols-3 gap-4">
                    <label htmlFor="organizename" className="label-input">
                      ชื่อองค์กร
                    </label>
                    <div className="col-span-2">
                      <input type="text" name="organizeName" id="organizename" placeholder="ชื่อองค์กรของคุณ" className="text-input" />
                    </div>
                  </div>
                  <div className="grid items-start grid-cols-3 gap-4">
                    <label htmlFor="organizetype" className="label-input">
                      ประเภทองค์กร *
                    </label>
                    <div className="col-span-2">
                      <select name="organizetType" id="organizetype" placeholder="ชื่อ/นามสกุล" required className="text-input">
                        <option selected disabled className="text-[#707070]">
                          เลือกประเภทองค์กร
                        </option>
                        <option value="public">ไม่รู้</option>
                        <option value="private">ไม่ทราบ</option>
                        <option value="government">ไม่บอก</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid items-start grid-cols-3 gap-4">
                    <label htmlFor="email" className="label-input">
                      อีเมล *
                    </label>
                    <div className="col-span-2">
                      <input type="email" name="email" id="email" required placeholder="youremail@mail.com" className="text-input" />
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="grid items-start grid-cols-3 gap-4">
                    <label htmlFor="message" className="flex col-span-1 label-input lg:justify-end lg:mr-6">
                      ข้อความ
                    </label>
                    <div className="col-span-2 space-y-6">
                      <textarea name="message" id="message" maxLength={1000} rows={11} placeholder="ข้อความของคุณ" className="text-input" defaultValue={''} />
                      <button
                        type="submit"
                        className="inline-flex justify-center px-12 py-4 text-center text-white border border-transparent rounded-none lg:w-full bg-primary hover:bg-accent"
                      >
                        บันทึก
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

export default AboutPage
