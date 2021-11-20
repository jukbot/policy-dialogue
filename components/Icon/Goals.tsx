import React from 'react'

interface Props {
  className?: string
}

const Goals = (props: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={77.621} height={76.621} viewBox="0 0 77.621 76.621" {...props}>
      <defs>
        <style>{'.prefix__cls-6{fill:none}.prefix__cls-5{stroke:none}'}</style>
      </defs>
      <g id="prefix__Group_333" data-name="Group 333" transform="translate(-1250 -1736.379)">
        <g id="prefix__Ellipse_294" data-name="Ellipse 294" transform="translate(1250 1738)" strokeWidth={3} stroke="#36723b" fill="none">
          <circle className="prefix__cls-5" cx={37.5} cy={37.5} r={37.5} />
          <circle className="prefix__cls-6" cx={37.5} cy={37.5} r={36} />
        </g>
        <g id="prefix__Ellipse_295" data-name="Ellipse 295" transform="translate(1263 1751)" stroke="#f04e30" strokeWidth={3} fill="none">
          <circle className="prefix__cls-5" cx={25} cy={25} r={25} />
          <circle className="prefix__cls-6" cx={25} cy={25} r={23.5} />
        </g>
        <circle id="prefix__Ellipse_296" data-name="Ellipse 296" cx={12.5} cy={12.5} r={12.5} transform="translate(1275 1763)" fill="#242054" />
        <path id="prefix__Line_49" data-name="Line 49" d="M1287.5 1775.5l38-37" strokeLinecap="round" strokeWidth={3} stroke="#36723b" fill="none" />
      </g>
    </svg>
  )
}

export default Goals
