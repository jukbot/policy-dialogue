import { projectLargeIcon } from '@/utils/projectIcon'
import { Project } from '@types'
import Link from 'next/link'
import { memo } from 'react'

interface Props {
  projects: Project[]
}

const shouldRerender = (prevProps: Props, nextProps: Props) => {
  return JSON.stringify(prevProps.projects) === JSON.stringify(nextProps.projects)
}

const InterestProjects = ({ projects = [] }: Props) => {
  return (
    <section className="relative h-full space-y-12 bg-secondary">
      <div className="max-w-6xl px-6 py-12 mx-auto space-y-12 text-white md:px-12 xl:px-0">
        <h2 className="text-4xl font-bold">นโยบายสูงอายุที่คุณอาจสนใจ</h2>

        <ul className="flex w-full space-x-6 overflow-x-auto xl:justify-center flex-nowrap">
          {projects.map((project) => (
            <li key={project.icon} className="relative w-64 overflow-visible shrink-0">
              <Link href={project.enabled ? project.url : 'javascript:void(0)'}>
                <a>
                  <div
                    className={`shrink-0 ${project.color} ${
                      project.enabled ? 'hover:brightness-90' : ''
                    } flex p-6 items-center justify-center w-52 h-36 left-1/2 -translate-x-1/2 top-0  absolute`}
                  >
                    {projectLargeIcon.get(project.icon)}
                  </div>
                </a>
              </Link>
              <div className="flex flex-col justify-start h-64 p-6 mt-16 space-y-6 bg-white text-secondary">
                <div className="mt-20 space-y-1">
                  <p className="text-lg font-bold">{project.description}</p>
                  <p className="text-sm font-body">({project.title})</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default memo(InterestProjects, shouldRerender)
