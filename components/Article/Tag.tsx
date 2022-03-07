import { Tag } from '@types'
import Link from 'next/link'

const TagList = ({ tags, currentTag }: { tags: Tag[]; currentTag: string }) => {
  return (
    <section id="all" className="relative flex flex-wrap items-start justify-start w-full px-6 sm:px-0">
      <Link href="#all">
        <a
          className={`${
            currentTag === 'all' || currentTag === '' ? 'bg-primary' : 'bg-[#707070] hover:bg-primary'
          } inline-flex items-center px-2.5 py-1 mr-2 text-sm text-white transition`}
        >
          แสดงทั้งหมด
        </a>
      </Link>
      {tags.map((tag, index) => (
        <Link href={`#${tag.title}`} key={index}>
          <a
            className={`${
              currentTag.trim() === tag.title.trim() ? 'bg-primary' : 'bg-[#707070] hover:bg-primary'
            } transition inline-flex items-center px-2.5 py-1 text-sm mb-2 mr-2 text-white`}
          >
            {tag.title}
          </a>
        </Link>
      ))}
    </section>
  )
}

export default TagList
