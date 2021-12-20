interface Props {
  className?: string
  position?: string
  bgColor?: string
  borderColor?: string
  bgHover?: string
  text: string
}

const PolicyCircle = ({ className, position = '', bgColor = '', bgHover = '', borderColor = '', text = '' }: Props): JSX.Element => {
  return (
    <div className={`relative group ${className}`}>
      <div
        className={`w-32 h-32 lg:h-48 lg:w-48 absolute border-2 ${borderColor} rounded-full transition transform ${position} group-hover:translate-x-0 group-hover:translate-y-0`}
      />
      <div
        className={`relative w-32 h-32 lg:w-48 lg:h-48 flex justify-center items-center rounded-full group cursor-pointer bg-center bg-blend-multiply bg-no-repeat bg-cover transition ${bgHover} ${bgColor}`}
      >
        <h3 className="relative w-3/4 text-base text-center text-white lg:text-xl font-body">{text}</h3>
      </div>
    </div>
  )
}

export default PolicyCircle
