import { Transition } from '@headlessui/react'
import { PropsWithChildren } from 'react'

interface Props {
  title: string
  isOpen: boolean
  number: number
  toggleClick?: (id: number) => void
}

const Accordion = ({ title, children, isOpen: isOpen, number, toggleClick = () => {} }: PropsWithChildren<Props>): JSX.Element => {
  return (
    <section>
      <dt>
        <button
          className={`flex justify-between w-full py-2 text-xl font-bold text-left items-start mr-3 group focus:outline-none`}
          onClick={() => toggleClick(number)}
        >
          <span className={`${isOpen ? 'text-white' : ''} text-white`}>{title}</span>
          <span className="flex items-center ml-6 h-7 text-primary">
            <svg
              className={`${isOpen ? '-rotate-180' : 'rotate-0'} w-6 h-6 transform`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
      </dt>
      <dd className="pr-6">
        <Transition
          show={isOpen}
          enter="transition duration-100"
          enterFrom="transform opacity-0"
          enterTo="transform opacity-100"
          leave="transition duration-150"
          leaveFrom="transform opacity-100"
          leaveTo="transform opacity-0"
        >
          <div className={`${isOpen ? 'block' : 'hidden'} flex flex-col py-2 space-y-4 text-sm font-body`}>{children}</div>
        </Transition>
      </dd>
    </section>
  )
}

export default Accordion
