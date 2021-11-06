import React from 'react'

interface Props {
  className?: string
}

const QuestionMark = (props: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={151} height={275} viewBox="0 0 151 275" {...props}>
      <g data-name="Group 625">
        <g data-name="Group 615" stroke="#fff" strokeWidth="3px" fontSize="260px" fontFamily="Helvetica" letterSpacing=".05em">
          <text data-name="?" transform="translate(3 212)" fill="none">
            <tspan x={0} y={0}>
              {'?'}
            </tspan>
          </text>
          <text data-name="?" transform="translate(3 203)" fill="#fff">
            <tspan x={0} y={0}>
              {'?'}
            </tspan>
          </text>
        </g>
      </g>
    </svg>
  )
}

export default QuestionMark
