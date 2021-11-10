interface Props {
  className?: string
  position?: string
  bgColor?: string
  borderColor?: string
  text: string
}
const PolicyCircle = ({ className, position, bgColor, borderColor, text }: Props): JSX.Element => {
  return (
    <div className={`relative w-48 h-48 flex justify-center items-center rounded-full group cursor-pointer ${bgColor}`} {...className}>
      <div
        className={`h-48 w-48 absolute border-2 ${borderColor} rounded-full transition transform ${position} group-hover:translate-x-0 group-hover:translate-y-0`}
      />
      <h3 className="relative w-2/3 text-lg text-center text-white sm:text-2xl font-body">{text}</h3>
    </div>
  )
}

export default PolicyCircle
