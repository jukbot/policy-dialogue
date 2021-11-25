import React from 'react'

interface Props {
  className?: string
}

const Plus = (props: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <style>{'.prefix__cls-2{fill:none;stroke:#fff;stroke-width:2px}'}</style>
      </defs>
      <g id="prefix__Group_1214" data-name="Group 1214" transform="translate(-1046 -882)">
        <g id="prefix__Group_560" data-name="Group 560" transform="translate(0 -933)">
          <g id="prefix__Path_515" data-name="Path 515" fill="#f04e30">
            <path
              d="M32.5 64a31.396 31.396 0 01-22.274-9.226A31.396 31.396 0 011 32.5a31.396 31.396 0 019.226-22.274A31.396 31.396 0 0132.5 1a31.396 31.396 0 0122.274 9.226A31.396 31.396 0 0164 32.5a31.396 31.396 0 01-9.226 22.274A31.396 31.396 0 0132.5 64z"
              transform="rotate(180 555.5 940)"
            />
            <path
              d="M32.5 2a30.401 30.401 0 00-21.567 8.933A30.401 30.401 0 002 32.5a30.401 30.401 0 008.933 21.567A30.401 30.401 0 0032.5 63a30.401 30.401 0 0021.567-8.933A30.401 30.401 0 0063 32.5a30.401 30.401 0 00-8.933-21.567A30.401 30.401 0 0032.5 2m0-2C50.45 0 65 14.55 65 32.5S50.45 65 32.5 65 0 50.45 0 32.5 14.55 0 32.5 0z"
              transform="rotate(180 555.5 940)"
            />
          </g>
        </g>
        <path id="prefix__Line_197" data-name="Line 197" className="prefix__cls-2" transform="translate(1078.5 895.5)" d="M0 38V0" />
        <path id="prefix__Line_198" data-name="Line 198" className="prefix__cls-2" transform="rotate(90 91.5 1006)" d="M0 38V0" />
      </g>
    </svg>
  )
}

export default Plus
