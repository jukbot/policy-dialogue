import { classNames } from '@/utils/formatClass'
import projectList from '@/data/projects.json'
import { Disclosure } from '@headlessui/react'
import { ArrowSmRightIcon, ChevronDownIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { FormEvent, useCallback, useState } from 'react'
import toast from 'react-hot-toast'
import SocialMedia from '../Footer/SocialMedia'
import ProjectDropdown from '../Navbar/ProjectDropdown'
import ProcessDropdown from '../Navbar/ProcessDropdown'

const processMenu = [
  {
    id: 1,
    title: 'กระบวนการ',
    url: '/process',
  },
  {
    id: 2,
    title: 'คู่มือการจัดกระบวนการ',
    url: '/guideline',
  },
  {
    id: 3,
    title: 'คุณค่าของกระบวนการ',
    url: '/value',
  },
]

const Footer = (): JSX.Element => {
  const [email, setEmail] = useState<string>('')

  const handleFormSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (!email) {
        return toast.error('โปรดระบุอีเมล')
      }

      await fetch('/api/subscribe', {
        method: 'POST',
        body: JSON.stringify({
          email,
          name: null,
        }),
      })
      toast.success('สมัครรับข่าวสารและกิจกรรม จาก Policy Dialogue เรียบร้อย')

      setEmail('')
      e.currentTarget?.reset()
    },
    [email]
  )

  return (
    <footer className="relative bottom-0 flex flex-col w-full h-full p-6 mx-auto space-y-6 overflow-hidden lg:p-12 bg-secondary">
      <ul className="grid w-full h-full gap-4 text-white gap-y-8 md:grid-cols-2 lg:grid-cols-4 font-body">
        <li className="col-span-full lg:col-span-1 lg:text-center">
          <Link href="/">
            <a>
              <div>
                <img src={'/image/logo/logo.svg'} alt="logo" className="object-contain lg:mx-auto" width="200" height="80" />
              </div>
            </a>
          </Link>
        </li>
        <li className="col-span-1">
          <ul className="flex flex-col space-y-4">
            <li className="block md:hidden">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex items-center w-full text-white pb-1">
                      <span className="text-sm">นโยบายเพื่อสังคมสูงวัย</span>
                      <ChevronDownIcon className={`${open ? 'transform rotate-180' : ''} w-4 h-4 text-primary ml-2`} />
                    </Disclosure.Button>
                    <Disclosure.Panel className="py-2">
                      <ul className="space-y-4">
                        {projectList
                          .sort((x, y) => Number(y.enabled) - Number(x.enabled))
                          .map((project) => (
                            <li key={project.id}>
                              <Disclosure.Button
                                key={project.id}
                                as="a"
                                href={project.enabled ? project.url : '#'}
                                className={classNames(project.enabled ? 'text-link' : 'text-neutral-500', 'text-sm font-body flex')}
                              >
                                {project.description} <br /> ({project.title})
                              </Disclosure.Button>
                            </li>
                          ))}
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </li>
            <li className="block md:hidden">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex items-center w-full text-white pb-1">
                      <span className="text-sm">กระบวนการ</span>
                      <ChevronDownIcon className={`${open ? 'transform rotate-180' : ''} w-4 h-4 text-primary ml-2`} />
                    </Disclosure.Button>
                    <Disclosure.Panel className="py-2">
                      <ul className="space-y-4">
                        {processMenu.map((process) => (
                          <li key={process.id}>
                            <Disclosure.Button key={process.id} as="a" href={process.url} className={classNames('text-link', 'text-sm font-body flex')}>
                              {process.title}
                            </Disclosure.Button>
                          </li>
                        ))}
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </li>
            <li className="hidden md:block">
              <ProjectDropdown />
            </li>
            <li className="hidden md:block">
              <ProcessDropdown />
            </li>
            <li>
              <Link href="/article">
                <a className="text-sm text-link">ข่าวสารและบทความ</a>
              </Link>
            </li>
            <li>
              <Link href="/archive">
                <a className="text-sm text-link">คลังข้อมูล</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="text-sm text-link">เกี่ยวกับเรา</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="flex flex-col space-y-8 col-span-full lg:col-span-1">
          <div className="flex flex-col space-y-4">
            <h4 className="font-bold">ต้องการรับข่าวสารเกี่ยวกับ Policy Dialogue</h4>
            <div className="relative mt-1 sm:max-w-[270px]">
              <form onSubmit={(e) => handleFormSubmit(e)}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full px-6 py-4 border-primary bg-transparent rounded-full placeholder-[#a8a8a8] focus:ring-primary focus:border-primary sm:text-sm"
                  placeholder="dialogue.policy@example.com"
                />
                <button type="submit" className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer">
                  <ArrowSmRightIcon className="w-6 h-6 text-primary" aria-hidden="true" />
                </button>
              </form>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="font-bold">ช่องทางการสื่อสาร</h4>
            <SocialMedia />
          </div>
        </li>
        <li className="flex flex-col items-start col-span-1 space-y-4">
          <div>
            <a href="https://www.riseimpact.co/" target="_blank" rel="noreferrer noopenner">
              <div>
                <img src={'/image/logo/rise-impact-white.svg'} alt="logo" className="object-contain" width="150" height="60" />
              </div>
            </a>
          </div>
          <p className="font-bold">สำนักงานใหญ่</p>
          <p className="text-sm">
            บริษัท ไรซ์ อิมแพค จำกัด
            <br /> 14 ซอยเจริญนคร 2 ถนนเจริญนคร
            <br /> แขวงคลองต้นไทร เขตคลองสาน
            <br /> กรุงเทพ 10600
          </p>
        </li>
      </ul>
      <div className="py-4 text-white border-t md:pt-6 border-gray-200/50 font-body">
        <p className="text-sm">Copyright &copy; {new Date().getFullYear()} RISE Impact. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
