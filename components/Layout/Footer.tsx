import { ArrowSmRightIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'
import SocialMedia from '../Footer/SocialMedia'
import Logo from '/public/image/logo/logo.svg'
import RiseImpactLogo from '/public/image/logo/rise-impact-white.svg'

const Footer = (): JSX.Element => {
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
                <a className="text-white hover:text-primary">นโยบายเพื่อสังคมสูงวัย</a>
              </Link>
            </li>
            <li>
              <Link href="/process">
                <a className="text-white hover:text-primary">การออกแบบนโยบายอย่างมีส่วนร่วม</a>
              </Link>
            </li>
            <li>
              <Link href="/value">
                <a className="text-white hover:text-primary">คุณค่าของนโยบาย</a>
              </Link>
            </li>
            <li>
              <Link href="/guideline">
                <a className="text-white hover:text-primary">คู่มือการจัดกระบวนการ</a>
              </Link>
            </li>
            <li>
              <Link href="/archive">
                <a className="text-white hover:text-primary">คลังข้อมูล</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="text-white hover:text-primary">เกี่ยวกับเรา</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="flex flex-col col-span-1 space-y-8">
          <div className="flex flex-col space-y-4">
            <h4 className="font-bold">ต้องการรับข่าวสารเกี่ยวกับ Policy Dialogue</h4>
            <div className="relative mt-1 sm:max-w-[270px]">
              <form>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="block w-full px-6 py-4 border-primary bg-transparent rounded-full placeholder-[#a8a8a8] focus:ring-primary focus:border-primary sm:text-sm"
                  placeholder="dialogue.policy@example.com"
                />
                <button className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer">
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
            <Image src={RiseImpactLogo} alt="logo" className="w-full h-full" objectFit="contain" />
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
      <div className="pt-6 text-white border-t border-gray-200 font-body">
        <p className="text-sm">Copyright &copy; {new Date().getFullYear()} Rise Impact. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
