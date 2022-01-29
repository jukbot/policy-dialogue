import { classNames } from '@/utils/formatClass'
import projectList from '@/data/projects.json'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon, XIcon } from '@heroicons/react/outline'
import { MenuIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
// import { useWindowScroll } from 'react-use'
import { Close } from '../Icon'
import ProjectDropDown from '../Navbar/ProjectDropdown'
import Logo from '/public/image/logo/logo.svg'

const mobileNav = [
  { name: 'หน้าแรก', href: '/' },
  { name: 'การออกแบบนโยบายอย่างมีส่วนร่วม', href: '/process' },
  { name: 'คู่มือการจัดกระบวนการ', href: '/guideline' },
  { name: 'คุณค่ากระบวนการ', href: '/value' },
  { name: 'คลังข้อมูล', href: '/archive' },
  { name: 'เกี่ยวกับเรา', href: '/about' },
]

const desktopNav = [
  { name: 'การออกแบบนโยบายอย่างมีส่วนร่วม', href: '/process' },
  { name: 'คู่มือการจัดกระบวนการ', href: '/guideline' },
  { name: 'คุณค่ากระบวนการ', href: '/value' },
  { name: 'คลังข้อมูล', href: '/archive' },
  { name: 'เกี่ยวกับเรา', href: '/about' },
]

const Navbar = (): JSX.Element => {
  const { pathname } = useRouter()
  const y = 0
  // const { y } = useWindowScroll()

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className={`fixed z-10 w-full px-6 sm:py-2 mx-auto xl:px-24 bg-black transition ${y < 30 ? 'sm:bg-opacity-100' : 'sm:bg-opacity-100'}`}>
            <div className="relative flex items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center xl:hidden">
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
                      <Image className="hidden xl:block" width="120" height="60" src={Logo} priority decoding="async" alt="logo" />
                    </a>
                  </Link>
                </div>
                <div className="hidden w-full xl:block">
                  <div className="flex justify-center space-x-4 whitespace-nowrap">
                    <ProjectDropDown />
                    {desktopNav.map((item) => (
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

          <Disclosure.Panel className="xl:hidden">
            <div className="fixed z-20 w-full h-screen px-6 pt-12 pb-3 space-y-6 overflow-y-auto bg-secondary">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex items-center justify-center w-full text-white">
                      <span>นโยบายเพื่อสังคมสูงวัย</span>
                      <ChevronDownIcon className={`${open ? 'transform rotate-180' : ''} w-4 h-4 text-primary ml-2`} />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-2 py-2">
                      <ul className="space-y-4">
                        {projectList
                          .sort((x, y) => Number(y.enabled) - Number(x.enabled))
                          .map((project) => (
                            <li key={project.id}>
                              <Disclosure.Button
                                key={project.id}
                                as="a"
                                href={project.enabled ? project.url : '#'}
                                className={classNames(
                                  pathname === project.url ? ' text-primary' : project.enabled ? 'text-link' : 'text-neutral-500',
                                  'text-sm text-center font-body flex justify-center'
                                )}
                                aria-current={pathname === project.url ? 'page' : undefined}
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
              <div className="pt-8 space-y-6 border-t border-white border-opacity-40">
                {mobileNav.map((item) => (
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
