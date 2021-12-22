import { projectDropdown, projectIcon } from '@/utils/projectIcon'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment } from 'react'

const ProjectDropDown = () => {
  const { pathname } = useRouter()

  return (
    <>
      <Popover className="relative z-10">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`
              ${open ? 'text-primary' : 'text-link'}
               inline-flex items-center text-sm font-body`}
            >
              <span>นโยบายเพื่อสังคมสูงวัย</span>
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
              <Popover.Panel className="absolute inset-x-0 z-10 w-screen max-w-6xl transform -translate-x-32 shadow-xl">
                <div className="bg-[#474747]">
                  <div className="grid p-6 mx-auto mt-6 overflow-hidden gap-y-2 lg:grid-cols-7 max-w-7xl">
                    {projectDropdown.map((item) => (
                      <Popover.Button as={Link} key={item.id} href={item.enabled ? item.url : '#'}>
                        <a
                          onClick={() => close()}
                          className={`${
                            item.enabled ? (pathname === item.url ? 'text-primary' : 'text-link') : 'text-white opacity-50'
                          } relative flex flex-col w-full h-full col-span-1 p-2 -m-3 shrink-0 space-y-2 transition`}
                        >
                          <div className="inline-flex">{projectIcon.get(item.icon)}</div>
                          <div className="flex flex-col flex-1 text-sm whitespace-normal font-body">
                            <p>{item.description}</p>
                            <p className="font-bold">({item.title})</p>
                          </div>
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

export default ProjectDropDown
