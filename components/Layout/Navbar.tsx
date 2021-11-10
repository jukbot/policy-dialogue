import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Logo from '/public/image/logo/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

const navigation = [
  { name: 'นโยบายเพื่อสังคมสูงวัย', href: '/', current: true },
  { name: 'การออกแบบนโยบายอย่างมีส่วนร่วม', href: '/process', current: false },
  { name: 'คู่มือการจัดกระบวนการ', href: '/guideline', current: false },
  { name: 'คุณค่ากระบวนการ', href: '/value', current: false },
  { name: 'คลังข้อมูล', href: '/archive', current: false },
  { name: 'เกี่ยวกับเรา', href: '/about', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = (): JSX.Element => {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="absolute z-10 w-full px-6 py-6 mx-auto lg:px-24">
            <div className="relative flex items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-4 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                <div className="hidden w-full sm:block">
                  <div className="flex justify-center space-x-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(item.current ? ' text-primary' : 'text-white hover:text-primary', 'px-2 text-sm')}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(item.current ? ' text-white' : 'text-gray-300 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium')}
                  aria-current={item.current ? 'page' : undefined}
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
