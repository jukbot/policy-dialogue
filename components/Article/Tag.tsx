const Tag = () => {
  return (
    <section className="relative w-full flex space-x-2 px-6 sm:px-0">
      <button className="inline-flex items-center px-2.5 py-1 text-sm bg-primary hover:bg-[#707070]  text-white">แสดงทั้งหมด</button>
      <button className="inline-flex items-center px-2.5 py-1 text-sm bg-[#707070] hover:bg-primary text-white">#สุขภาพ</button>
      <button className="inline-flex items-center px-2.5 py-1 text-sm bg-[#707070] hover:bg-primary text-white">#สังคม</button>
      <button className="inline-flex items-center px-2.5 py-1 text-sm bg-[#707070] hover:bg-primary text-white">#ที่อยู่อาศัย</button>
    </section>
  )
}

export default Tag
