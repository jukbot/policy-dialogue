import React from 'react'

interface Props {
  className?: string
}

const Minus = (props: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <style>{'.prefix__cls-1{fill:none;stroke:#fff;stroke-width:2px}'}</style>
      </defs>
      <g id="prefix__Group_559" data-name="Group 559" transform="rotate(90 1071 809)">
        <path id="prefix__Line_189" data-name="Line 189" className="prefix__cls-1" transform="translate(294.5 1846.5)" d="M0 2V0" />
        <g id="prefix__Group_1213" data-name="Group 1213">
          <g id="prefix__Ellipse_250" data-name="Ellipse 250" transform="translate(262 1815)" fill="#f04e30" stroke="#f04e30" strokeWidth={2}>
            <circle cx={32.5} cy={32.5} r={32.5} stroke="none" />
            <circle cx={32.5} cy={32.5} r={31.5} fill="none" />
          </g>
          <path id="prefix__Line_190" data-name="Line 190" className="prefix__cls-1" transform="translate(294.5 1828.5)" d="M0 38V0" />
        </g>
      </g>
    </svg>
  )
}

export default Minus
