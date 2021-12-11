import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
// import { useWindowScroll } from 'react-use'
import { Close } from '../Icon'
import ProjectDropDown from '../Navbar/ProjectDropdown'
import Logo from '/public/image/logo/logo.svg'

const navigation = [
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
  const y = 0
  // const { y } = useWindowScroll()

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className={`fixed z-10 w-full px-6 sm:py-2 mx-auto lg:px-24 bg-black transition ${y < 30 ? 'sm:bg-opacity-100' : 'sm:bg-opacity-100'}`}>
            <div className="relative flex items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-4 text-white hover:text-white hover:bg-primary">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6 fill-current" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block w-6 h-6 fill-current" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-between flex-1 w-full justify-items-stretch">
                <div className="flex items-center justify-center shrink-0">
                  <Link href="/">
                    <a className="flex">
                      <Image className="hidden lg:block" width="120" height="60" src={Logo} priority decoding="async" alt="logo" />
                    </a>
                  </Link>
                </div>
                <div className="hidden w-full lg:block">
                  <div className="flex justify-center space-x-4 whitespace-nowrap">
                    <ProjectDropDown />
                    {navigation.map((item) => (
                      <Link href={item.href} key={item.name}>
                        <a
                          className={classNames(
                            pathname === item.href ? ' text-primary' : 'text-link',
                            'px-2 text-sm font-body transition ease-in-out duration-150'
                          )}
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
            <div className="fixed z-20 w-full h-screen px-6 pt-12 pb-3 space-y-6 overflow-hidden bg-secondary">
              <Link href="/project/aip">
                <a
                  className={classNames(
                    pathname === '/project/aip' ? ' text-primary' : 'text-link',
                    'text-base text-center font-body flex justify-center transition ease-in-out duration-150'
                  )}
                  aria-current={pathname === '/project/aip' ? 'page' : undefined}
                >
                  นโยบายเพื่อสังคมสูงวัย
                </a>
              </Link>
              <div className="pt-8 mx-20 space-y-8 border-t border-white border-opacity-40">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(pathname === item.href ? ' text-primary' : 'text-link', 'block text-base text-center font-body')}
                    aria-current={pathname === item.href ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="flex justify-center w-full whitespace-nowrap">
                <Disclosure.Button className="p-4 text-white">
                  <span className="sr-only">close menu</span>
                  {open ? <Close className="block w-12 h-12 text-primary" aria-hidden="true" /> : null}
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar
