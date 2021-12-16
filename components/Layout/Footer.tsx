import { isModalOpenAtom } from '@/stores/global'
import { ArrowSmRightIcon } from '@heroicons/react/outline'
import { useAtom } from 'jotai'
import Image from 'next/image'
import Link from 'next/link'
import { FormEvent, useCallback, useState } from 'react'
import toast from 'react-hot-toast'
import SocialMedia from '../Footer/SocialMedia'
import Logo from '/public/image/logo/logo.svg'
import RiseImpactLogo from '/public/image/logo/rise-impact-white.svg'

const Footer = (): JSX.Element => {
  const [email, setEmail] = useState<string>('')
  const [, setModalState] = useAtom(isModalOpenAtom)

  const handleFormSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (!email) {
        return toast.error('โปรดระบุอีเมล')
      }

      if (!localStorage.getItem('policy-dialogue:has-submit-contact')) {
        setModalState({ open: true, type: 'newsletter', link: null })
      } else {
        setModalState({ open: false, type: 'newsletter', link: null })
        await fetch('/api/subscribe', {
          method: 'POST',
          body: JSON.stringify({
            email,
            name: null,
          }),
        })
        toast.success('สมัครรับข่าวสารและกิจกรรม จาก Policy Dialogue เรียบร้อย')
      }
      setEmail('')
      e.currentTarget?.reset()
    },
    [email, setModalState]
  )

  return (
    <footer className="relative flex flex-col w-full p-6 mx-auto space-y-6 lg:p-12 bg-secondary">
      <ul className="grid w-full gap-4 text-white lg:grid-cols-4 font-body">
        <li className="col-span-1 text-center">
          <Link href="/">
            <a>
              <Image src={Logo} alt="logo" className="w-full h-full" objectFit="contain" width="200" height="80" />
            </a>
          </Link>
        </li>
        <li className="col-span-1">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link href="/project">
                <a className="text-link">นโยบายเพื่อสังคมสูงวัย</a>
              </Link>
            </li>
            <li>
              <Link href="/process">
                <a className="text-link">การออกแบบนโยบายอย่างมีส่วนร่วม</a>
              </Link>
            </li>
            <li>
              <Link href="/value">
                <a className="text-link">คุณค่าของนโยบาย</a>
              </Link>
            </li>
            <li>
              <Link href="/guideline">
                <a className="text-link">คู่มือการจัดกระบวนการ</a>
              </Link>
            </li>
            <li>
              <Link href="/archive">
                <a className="text-link">คลังข้อมูล</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="text-link">เกี่ยวกับเรา</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="flex flex-col col-span-1 space-y-8">
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
              <Image src={RiseImpactLogo} alt="logo" className="w-full h-full" objectFit="contain" />
            </a>
          </div>
          <p className="font-bold">สำนักงานใหญ่</p>
          <p>
            บริษัท ไรซ์ อิมแพค จำกัด
            <br /> 14 ซอยเจริญนคร 2 ถนนเจริญนคร
            <br /> แขวงคลองต้นไทร เขตคลองสาน
            <br /> กรุงเทพ 10600
          </p>
        </li>
      </ul>
      <div className="pt-6 text-white border-t border-slate-200/75 font-body">
        <p className="text-sm">Copyright &copy; {new Date().getFullYear()} Rise Impact. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
