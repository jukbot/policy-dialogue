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

export interface CoverImage {
  url: string
}

export interface Color {
  hex: string
}

export interface Article {
  id: string
  title: string
  url: string
  coverImage: CoverImage
  createdAt: Date
  color: Color
}
