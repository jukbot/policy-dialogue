import { Tag } from '@types'

const TagList = ({ tags }: { tags: Tag[] }) => {
  return (
    <section className="relative w-full flex space-x-2 px-6 sm:px-0">
      <button className="inline-flex items-center px-2.5 py-1 text-sm bg-primary text-white">แสดงทั้งหมด</button>
      {tags.map((tag, index) => (
        <button key={index} className="inline-flex items-center px-2.5 py-1 text-sm bg-[#707070] hover:bg-primary text-white">
          #{tag.title}
        </button>
      ))}
    </section>
  )
}

export default TagList
