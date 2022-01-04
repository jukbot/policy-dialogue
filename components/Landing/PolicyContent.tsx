import projects from '@/data/projects.json'
import { selectedProjectAtom } from '@/stores/global'
import { projectIcon } from '@/utils/projectIcon'
import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@heroicons/react/outline'
import { useAtom } from 'jotai'
import Link from 'next/link'
import PolicyWheel from './PolicyWheel'
import PolicyWheelMobile from './PolicyWheelMobile'

const PolicyContent = () => {
  const [selectedProject, setSelectedProject] = useAtom(selectedProjectAtom)

  return (
    <div className="relative">
      <PolicyWheel className="hidden min-w-[1024px] w-full h-full fill-current text-primary lg:block px-8" />
      <PolicyWheelMobile className="flex justify-center max-w-[512px] w-full h-full fill-current text-primary lg:hidden" />
      <div className="flex justify-center mx-auto my-4 space-x-6 text-primary lg:hidden">
        <ArrowCircleLeftIcon
          className="w-8 h-8 cursor-pointer shrink-0"
          onClick={() => {
            setSelectedProject(projects[selectedProject.id === 0 ? projects.length - 1 : (selectedProject.id - 1) % projects.length])
          }}
        />
        <ArrowCircleRightIcon
          className="w-8 h-8 cursor-pointer shrink-0"
          onClick={() => {
            setSelectedProject(projects[(selectedProject.id + 1) % projects.length])
          }}
        />
      </div>
      <div className="flex flex-col justify-between w-full h-50 p-6 mt-8 space-y-4 rounded-lg lg:hidden bg-[#FFECEA]">
        <div className="flex space-x-4">
          {projectIcon.get(selectedProject.icon)}
          <div className="space-y-1">
            <p className="text-lg font-bold">{selectedProject?.title}</p>
            <p className="font-body">{selectedProject?.description}</p>
          </div>
        </div>
        <Link href={selectedProject?.url} passHref>
          <button disabled={!selectedProject?.enabled} className={`${selectedProject?.enabled ? 'btn' : 'btn-disabled'} w-full`}>
            {selectedProject?.enabled ? 'อ่านต่อ' : 'เร็วๆ นี้'}
          </button>
        </Link>
      </div>
    </div>
  )
}

export default PolicyContent
