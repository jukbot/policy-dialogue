import React from 'react'

interface Props {
  className?: string
}

const Teamwork = (props: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={53.741} height={53.74} viewBox="0 0 53.741 53.74" {...props}>
      <g data-name="Group 1071" transform="translate(-785.13 -1749.13)">
        <path data-name="Line 50" d="M787.251 1751.25l24.75 24.75" stroke="#cc79a7" fill="none" strokeLinecap="round" strokeWidth="3px" />
        <path data-name="Line 55" d="M811.999 1775.999l-24.749 24.749" stroke="#36723b" fill="none" strokeLinecap="round" strokeWidth="3px" />
        <path data-name="Line 53" d="M812 1776l24.748 24.749" stroke="#f04e30" fill="none" strokeLinecap="round" strokeWidth="3px" />
        <path data-name="Line 54" d="M836.75 1751.25L812 1776" stroke="#daa13d" fill="none" strokeLinecap="round" strokeWidth="3px" />
        <circle data-name="Ellipse 324" cx={10} cy={10} r={10} transform="translate(802 1766)" fill="#242054" />
      </g>
    </svg>
  )
}

export default Teamwork
