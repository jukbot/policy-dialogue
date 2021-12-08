import { isModalOpenAtom } from '@/stores/global'
import { downloadContent } from '@/utils/userAnalytics'
import { useForm, ValidationError } from '@formspree/react'
import { Dialog, Transition } from '@headlessui/react'
import { useAtom } from 'jotai'
import React, { FormEvent, Fragment, useCallback, useState } from 'react'

const DownloadModal = ({ isOpen, fileName }: { isOpen: boolean; fileName: string | null }) => {
  const [, setModalState] = useAtom(isModalOpenAtom)
  const [organizeType, setOrganizeType] = useState<string>('')
  const [state, handleSubmit] = useForm('mqknzlyd')

  const handleFormSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      handleSubmit(e)
      // e.preventDefault()
      e.currentTarget.reset()
      localStorage.setItem('policy-dialogue:has-submit-contact', 'true')
      if (e.currentTarget.email.value) {
        localStorage.setItem('policy-dialogue:email', e.currentTarget.email.value)
      }
      if (fileName) downloadContent(fileName)
      setModalState({ open: false, type: 'download', link: null })
    },
    [fileName, handleSubmit, setModalState]
  )

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-hidden" onClose={() => setModalState({ open: false, type: 'download', link: null })}>
        <div className="min-h-screen text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-70" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full h-screen max-w-xl p-6 space-y-8 overflow-hidden text-left align-middle transition-all transform bg-black shadow-xl sm:my-8 sm:h-auto sm:p-12 sm:bg-gray">
              <div className="space-y-4 md:space-y-2">
                <Dialog.Title as="h2" className="text-xl leading-6 text-white sm:text-[#a3a3a3]">
                  ให้เราได้รู้จักคุณ
                </Dialog.Title>
                <Dialog.Title as="p" className="text-xl leading-6 text-white sm:text-[#a3a3a3]">
                  Allow us to get to know you
                </Dialog.Title>
              </div>
              <form onSubmit={(e) => handleFormSubmit(e)}>
                <div className="space-y-6">
                  <div className="items-start grid-cols-5 gap-4 sm:grid">
                    <label htmlFor="fullname" className="col-span-1 label-input">
                      ชื่อ-สกุล
                    </label>
                    <div className="col-span-4">
                      <input type="text" name="full-name" id="fullname" placeholder="ชื่อ-สกุล" className="bg-white text-input" maxLength={60} />
                    </div>
                  </div>
                  <div className="items-start grid-cols-5 gap-4 sm:grid">
                    <label htmlFor="organizename" className="col-span-1 label-input">
                      ชื่อองค์กร
                    </label>
                    <div className="col-span-4">
                      <input
                        type="text"
                        name="organization-name"
                        id="organizename"
                        placeholder="ชื่อองค์กรของคุณ"
                        className="bg-white text-input"
                        maxLength={60}
                      />
                    </div>
                  </div>
                  <div className="items-start grid-cols-5 gap-4 sm:grid">
                    <label htmlFor="organizetype" className="col-span-1 label-input">
                      ประเภทองค์กร
                      <span aria-hidden="true" className="required">
                        *
                      </span>
                    </label>
                    <div className="col-span-4">
                      <select
                        name="organize-type"
                        defaultValue=""
                        id="organizetype"
                        onChange={(e) => setOrganizeType(e.target.value)}
                        required
                        className="bg-white text-input"
                      >
                        <option value="" disabled className="text-[#707070]">
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
                        <input type="text" required name="organize-other" placeholder="ระบุประเภทองค์กร" className="mt-2 bg-white text-input" maxLength={60} />
                      )}
                    </div>
                  </div>
                  <div className="items-start grid-cols-5 gap-4 sm:grid">
                    <label htmlFor="email" className="col-span-1 label-input">
                      อีเมล{' '}
                      <span aria-hidden="true" className="required">
                        *
                      </span>
                    </label>
                    <div className="col-span-4">
                      <input type="email" name="email" id="email" required placeholder="youremail@mail.com" className="bg-white text-input" maxLength={60} />
                    </div>
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>
                <div className="flex mt-8 space-x-6">
                  <button
                    type="button"
                    className="w-full bg-[#a3a3a3] rounded-none btn"
                    onClick={() => setModalState({ open: false, type: 'download', link: null })}
                  >
                    ยกเลิก
                  </button>
                  <button type="submit" className="w-full rounded-none btn">
                    ดาวน์โหลด
                  </button>
                </div>
              </form>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default DownloadModal
