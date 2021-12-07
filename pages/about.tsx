import Contributor from '@/data/contributors.json'
import Team from '@/data/team.json'
import { useForm, ValidationError } from '@formspree/react'
import Image from 'next/image'
import { FormEvent, useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const AboutPage = () => {
  const [organizeType, setOrganizeType] = useState<string>('')
  const [state, handleSubmit] = useForm('mlezrlpp')
  const handleFormSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      handleSubmit(e)
      e.preventDefault()
      e.currentTarget.reset()
    },
    [handleSubmit]
  )

  useEffect(() => {
    if (state.succeeded) {
      toast.success('ขอบคุณสำหรับข้อมูลติดต่อเรา')
    }
  }, [state.succeeded])

  return (
    <main className="relative">
      <div className="absolute top-0 right-0 w-full h-full bg-no-repeat bg-contain opacity-75 bg-about-hero-shape" />
      <section className="relative h-[50vh] lg:h-[75vh] bg-left-bottom bg-cover sm:bg-contain bg-no-repeat grid items-center bg-about-pattern-mobile sm:bg-about-pattern">
        <div className="flex justify-center pt-24 text-white lg:justify-start lg:ml-48">
          <h1 className="text-4xl font-semibold lg:text-6xl">เกี่ยวกับเรา</h1>
        </div>
        <div className="w-full h-full absolute bottom-0 right-0 triangle-bottom-right mix-blend-screen opacity-50 from-[#191919] to-[#242054] bg-gradient-to-b" />
      </section>

      <section className="relative h-full space-y-12 bg-white">
        <div className="grid max-w-6xl grid-cols-1 gap-16 py-16 mx-auto lg:py-32 md:grid-cols-2">
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
        <div className="max-w-6xl px-6 py-12 mx-auto text-center lg:px-12">
          <div className="space-y-12">
            <div className="mx-auto">
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
        <div className="max-w-6xl px-6 pt-12 mx-auto text-center pb-36 lg:px-12">
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
        <div className="max-w-6xl px-6 py-24 mx-auto space-y-12 lg:px-12">
          <div className="space-y-2 text-white">
            <h2 className="text-4xl font-bold lg:text-6xl">ติดต่อเรา</h2>
            <p className="text-4xl font-body">Get in touch!</p>
          </div>
          <form onSubmit={(e) => handleFormSubmit(e)}>
            <div className="grid grid-cols-1 gap-y-6 gap-x-12 lg:grid-cols-2">
              <div className="col-span-1 space-y-6">
                <div className="grid items-start grid-cols-3 gap-4">
                  <label htmlFor="fullname" className="label-input">
                    ชื่อ-สกุล
                  </label>
                  <div className="col-span-2">
                    <input type="text" name="full-name" id="fullname" placeholder="ชื่อ-สกุล" className="text-input" maxLength={60} />
                  </div>
                </div>
                <div className="grid items-start grid-cols-3 gap-4">
                  <label htmlFor="organizename" className="label-input">
                    ชื่อองค์กร
                  </label>
                  <div className="col-span-2">
                    <input type="text" name="organization-name" id="organizename" placeholder="ชื่อองค์กรของคุณ" className="text-input" maxLength={60} />
                  </div>
                </div>
                <div className="grid items-start grid-cols-3 gap-4">
                  <label htmlFor="organizetype" className="label-input">
                    ประเภทองค์กร *
                  </label>
                  <div className="col-span-2">
                    <select name="organize-type" id="organizetype" onChange={(e) => setOrganizeType(e.target.value)} required className="text-input">
                      <option selected value="" disabled className="text-[#707070]">
                        เลือกประเภทองค์กร
                      </option>
                      <option value="central-government">หน่วยงานราชการ (ส่วนกลางและภูมิภาค)</option>
                      <option value="local-government">องค์กรปกครองส่วนท้องถิ่น</option>
                      <option value="independent-org">องค์กรอิสระ (รวมถึงภายใต้กำกับของรัฐ)</option>
                      <option value="public-company">บริษัทเอกชน ภาคธุรกิจ</option>
                      <option value="educational-institution">สถาบันการศึกษา/วิจัย</option>
                      <option value="student">นักเรียน นักศึกษา</option>
                      <option value="international-org">องค์กรระหว่างประเทศ</option>
                      <option value="civil-society-org">องค์กรหรือเครือข่ายภาคประชาสังคม</option>
                      <option value="other">อื่นๆ (โปรดระบุ)</option>
                    </select>
                    {organizeType === 'other' && (
                      <input type="text" required name="organize-other" placeholder="ระบุประเภทองค์กร" className="mt-2 text-input" maxLength={60} />
                    )}
                  </div>
                </div>
                <div className="grid items-start grid-cols-3 gap-4">
                  <label htmlFor="email" className="label-input">
                    อีเมล *
                  </label>
                  <div className="col-span-2">
                    <input type="email" name="email" id="email" required placeholder="youremail@mail.com" className="text-input" maxLength={60} />
                  </div>
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
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
                      disabled={state.submitting}
                      className="inline-flex justify-center px-12 py-4 text-center text-white border border-transparent rounded-none lg:w-full bg-primary hover:bg-accent"
                    >
                      ส่งข้อมูล{' '}
                      {state.submitting && (
                        <svg className="w-6 h-6 ml-3 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
