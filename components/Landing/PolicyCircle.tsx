interface Props {
  className?: string
  bgColor?: string
  borderColor?: string
  text: string
}
const PolicyCircle = ({ className, bgColor, borderColor, text }: Props): JSX.Element => {
  return (
    <div className={`relative w-48 h-48 flex justify-center items-center rounded-full ${bgColor}`} {...className}>
      <div
        className={`h-48 w-48 absolute border-2 ${borderColor} rounded-full transition transform -translate-x-4 -translate-y-4 hover:translate-x-0 hover:translate-y-0`}
      />
      <h3 className="w-2/3 text-xl text-center text-white sm:text-2xl font-body">{text}</h3>
    </div>
  )
}

export default PolicyCircle
