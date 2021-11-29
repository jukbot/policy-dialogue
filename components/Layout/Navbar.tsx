import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useWindowScroll } from 'react-use'
import Logo from '/public/image/logo/logo.svg'

const navigation = [
  { name: 'นโยบายเพื่อสังคมสูงวัย', href: '/' },
  { name: 'การออกแบบนโยบายอย่างมีส่วนร่วม', href: '/process' },
  { name: 'คู่มือการจัดกระบวนการ', href: '/guideline' },
  { name: 'คุณค่ากระบวนการ', href: '/value' },
  { name: 'คลังข้อมูล', href: '/archive' },
  { name: 'เกี่ยวกับเรา', href: '/about' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = (): JSX.Element => {
  const { pathname } = useRouter()
  const { y } = useWindowScroll()

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className={`fixed z-10 w-full px-6 sm:py-4 mx-auto lg:px-24 bg-black transition ${y < 30 ? 'sm:bg-opacity-0' : 'sm:bg-opacity-100'}`}>
            <div className="relative flex items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-4 text-white rounded-md hover:text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? <XIcon className="block w-6 h-6" aria-hidden="true" /> : <MenuIcon className="block w-6 h-6" aria-hidden="true" />}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-between flex-1 w-full justify-items-stretch">
                <div className="flex items-center flex-shrink-0">
                  <Link href="/">
                    <a>
                      <Image className="hidden w-auto h-full lg:block" width="120" height="60" src={Logo} alt="logo" />
                    </a>
                  </Link>
                </div>
                <div className="hidden w-full lg:block">
                  <div className="flex justify-center space-x-4 whitespace-nowrap">
                    {navigation.map((item) => (
                      <Link href={item.href} key={item.name}>
                        <a
                          className={classNames(pathname === item.href ? ' text-primary' : 'text-white hover:text-primary', 'px-2 text-sm font-body')}
                          aria-current={pathname === item.href ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="absolute w-full h-full px-6 pt-12 pb-3 space-y-1 bg-secondary">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    pathname === item.href ? ' text-white' : 'text-gray-300 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={pathname === item.href ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar
