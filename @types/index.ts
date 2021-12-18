export interface Project {
  id: number
  title: string
  description: string
  color?: string
  icon: string
  url: string
  enabled: boolean
}

export interface Policy {
  id: number
  text: string
  url: string
  color: string
}
