import { atom } from 'jotai'

interface Project {
  id: number
  url: string
  title: string
  description: string
  icon: string
  enabled: boolean
}

export const selectedTeamAtom = atom<number | null>(0)
export const selectedProjectAtom = atom<Project>({
  id: 0,
  url: '/project/aip',
  title: 'Aging in Place',
  description: 'การสูงวัยในถิ่นที่อยู่อาศัยเดิมอย่างมีสุขภาวะ',
  icon: 'aip',
  enabled: true,
})
