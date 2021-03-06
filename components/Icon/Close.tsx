import React from 'react'

interface Props {
  className?: string
}

const Close = (props: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65" {...props}>
      <defs>
        <style>{'.cls-2{fill:none;stroke:#fff;stroke-linecap:round}'}</style>
      </defs>
      <g id="Group_441" data-name="Group 441" transform="translate(-163 -700)">
        <g id="Ellipse_250" data-name="Ellipse 250" transform="translate(163 700)" fill="#f04e30" stroke="#f04e30" strokeWidth="2px">
          <circle cx={32.5} cy={32.5} r={32.5} stroke="none" />
          <circle cx={32.5} cy={32.5} r={31.5} fill="none" />
        </g>
        <g id="Group_436" data-name="Group 436" transform="rotate(45 226 658.865)">
          <path id="Line_107" data-name="Line 107" className="cls-2" transform="translate(256.5 720.5)" d="M0 0v24" />
          <path id="Line_108" data-name="Line 108" className="cls-2" transform="rotate(90 -232 500.5)" d="M0 0v24" />
        </g>
      </g>
    </svg>
  )
}

export default Close
