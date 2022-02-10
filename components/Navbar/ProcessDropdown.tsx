import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment } from 'react'

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

const ProcessDropdown = () => {
  const { pathname } = useRouter()

  return (
    <>
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`
              ${open ? 'text-primary' : 'text-link'}
               inline-flex items-center text-sm font-body`}
            >
              <span>กระบวนการของเรา</span>
              <ChevronDownIcon
                className={`${open ? '' : 'text-opacity-75'}
                ml-2 h-4 w-4 text-primary transition ease-in-out duration-150`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-150"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute inset-x-0 z-10 w-60 transform -translate-x-10 shadow-xl">
                <div className="bg-[#474747]">
                  <div className="flex flex-col space-y-6 p-6 mx-auto mt-4 overflow-hidden">
                    {processMenu.map((item) => (
                      <Popover.Button as={Link} key={item.id} href={item.url}>
                        <a
                          onClick={() => close()}
                          aria-current={pathname === item.url ? 'page' : undefined}
                          className={`${pathname === item.url ? 'text-primary' : 'text-link'} relative text-center transition`}
                        >
                          <p className="text-sm">{item.title}</p>
                        </a>
                      </Popover.Button>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  )
}

export default ProcessDropdown
