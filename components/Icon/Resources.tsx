import React from 'react'

interface Props {
  className?: string
}

const Resources = (props: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={55.155} height={88.5} viewBox="0 0 55.155 88.5" {...props}>
      <defs>
        <style>{'.cls-1{fill:none;stroke:#f04e30;stroke-linecap:round;stroke-width:4px}'}</style>
      </defs>
      <g id="Group_324" data-name="Group 324" transform="translate(-1245.171 -1236.5)">
        <path id="Line_57" data-name="Line 57" className="cls-1" transform="rotate(45 -900.727 2138.03)" d="M0 0h35" />
        <path id="Line_56" data-name="Line 56" className="cls-1" transform="rotate(135 387.147 900.283)" d="M0 0h35" />
        <path id="Line_58" data-name="Line 58" className="cls-1" transform="rotate(90 -7.627 1280.374)" d="M0 0h35" />
        <circle id="Ellipse_325" data-name="Ellipse 325" cx={11} cy={11} r={11} transform="translate(1262.248 1252)" fill="#242054" />
        <circle id="Ellipse_326" data-name="Ellipse 326" cx={6.5} cy={6.5} r={6.5} transform="translate(1281.248 1243)" fill="#6badcb" />
        <circle id="Ellipse_327" data-name="Ellipse 327" cx={6.5} cy={6.5} r={6.5} transform="translate(1274.748 1236.5)" fill="#daa13d" />
      </g>
    </svg>
  )
}

export default Resources
