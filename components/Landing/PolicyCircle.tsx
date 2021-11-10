interface Props {
  className?: string
  position?: string
  bgColor?: string
  borderColor?: string
  bgHover?: string
  text: string
}
const PolicyCircle = ({ className, position, bgColor, bgHover, borderColor, text }: Props): JSX.Element => {
  return (
    <div className="relative group">
      <div
        className={`h-48 w-48 absolute border-2 ${borderColor} rounded-full transition transform ${position} group-hover:translate-x-0 group-hover:translate-y-0`}
      />
      <div
        className={`relative w-48 h-48 flex justify-center items-center rounded-full group cursor-pointer bg-center bg-blend-multiply bg-no-repeat bg-cover transition ${bgHover} ${bgColor}`}
        {...className}
      >
        <h3 className="relative w-3/4 text-lg text-center text-white sm:text-2xl font-body">{text}</h3>
      </div>
    </div>
  )
}

export default PolicyCircle
