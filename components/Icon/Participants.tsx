import React from 'react'

interface Props {
  className?: string
}

const Participants = (props: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={96} height={84} viewBox="0 0 96 84" {...props}>
      <defs>
        <style>
          {'.cls-1,.cls-3,.cls-5{fill:none}.cls-1{stroke:#f04e30}.cls-1,.cls-3{stroke-width:3px}.cls-2{fill:#242054}.cls-3{stroke:#daa13d}.cls-4{stroke:none}'}
        </style>
      </defs>
      <g id="Group_1069" data-name="Group 1069" transform="translate(-302 -1239)">
        <g id="Ellipse_329" data-name="Ellipse 329" className="cls-1" transform="translate(345 1239)">
          <circle className="cls-4" cx={14} cy={14} r={14} />
          <circle className="cls-5" cx={14} cy={14} r={12.5} />
        </g>
        <g id="Rectangle_358" data-name="Rectangle 358" className="cls-1">
          <path
            className="cls-4"
            d="M25 0a25 25 0 0125 25v15.833A4.167 4.167 0 0145.833 45H4.167A4.167 4.167 0 010 40.833V25A25 25 0 0125 0z"
            transform="translate(334 1269)"
          />
          <path
            className="cls-5"
            d="M25 1.5A23.5 23.5 0 0148.5 25v15.614a2.886 2.886 0 01-2.886 2.886H4.386A2.886 2.886 0 011.5 40.614V25A23.5 23.5 0 0125 1.5z"
            transform="translate(334 1269)"
          />
        </g>
        <circle id="Ellipse_328" data-name="Ellipse 328" className="cls-2" cx={14} cy={14} r={14} transform="translate(313 1248)" />
        <path
          id="Rectangle_357"
          data-name="Rectangle 357"
          className="cls-2"
          d="M25 0a25 25 0 0125 25v15.833A4.167 4.167 0 0145.833 45H4.167A4.167 4.167 0 010 40.833V25A25 25 0 0125 0z"
          transform="translate(302 1278)"
        />
        <path id="Line_59" data-name="Line 59" className="cls-3" transform="translate(352 1302.5)" d="M0 0h46" />
        <path id="Line_60" data-name="Line 60" className="cls-3" transform="translate(352 1307.5)" d="M0 0h46" />
      </g>
    </svg>
  )
}

export default Participants
