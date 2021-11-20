import React from 'react'

interface Props {
  className?: string
}

const Process = (props: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={75} height={75} viewBox="0 0 75 75" {...props}>
      <defs>
        <clipPath id="clip-path">
          <path id="Rectangle_329" data-name="Rectangle 329" transform="translate(777 1738)" d="M0 0h38v38H0z" fill="#fff" stroke="#707070" />
        </clipPath>
        <clipPath id="clip-path-2">
          <path id="Rectangle_331" data-name="Rectangle 331" d="M0 0h38v38H0z" stroke="#6badcc" fill="#6badcb" />
        </clipPath>
        <clipPath id="clip-path-3">
          <path id="Rectangle_330" data-name="Rectangle 330" className="cls-3" d="M0 0h38v38H0z" />
        </clipPath>
        <style>{'.cls-3{fill:#242054}.cls-11{fill:none}.cls-10{stroke:none}'}</style>
      </defs>
      <g id="Group_194" data-name="Group 194" transform="translate(-777 -1688)">
        <g id="Ellipse_297" data-name="Ellipse 297" transform="translate(777 1688)" strokeWidth="10px" stroke="#daa13d" fill="none">
          <circle className="cls-10" cx={37.5} cy={37.5} r={37.5} />
          <circle className="cls-11" cx={37.5} cy={37.5} r={32.5} />
        </g>
        <g id="Mask_Group_38" data-name="Mask Group 38" transform="translate(0 -50)" clipPath="url(#clip-path)">
          <g id="Ellipse_298" data-name="Ellipse 298" transform="translate(777 1738)" stroke="#f04e30" strokeWidth="10px" fill="none">
            <circle className="cls-10" cx={37.5} cy={37.5} r={37.5} />
            <circle className="cls-11" cx={37.5} cy={37.5} r={32.5} />
          </g>
        </g>
        <g id="Mask_Group_40" data-name="Mask Group 40" transform="translate(814 1725)" clipPath="url(#clip-path-2)">
          <g id="Ellipse_300" data-name="Ellipse 300" transform="translate(-37 -37)" strokeWidth="10px" fill="none" stroke="#6badcc">
            <circle className="cls-10" cx={37.5} cy={37.5} r={37.5} />
            <circle className="cls-11" cx={37.5} cy={37.5} r={32.5} />
          </g>
        </g>
        <g id="Mask_Group_39" data-name="Mask Group 39" transform="translate(814 1688)" clipPath="url(#clip-path-3)">
          <circle id="Ellipse_299" data-name="Ellipse 299" className="cls-3" cx={37.5} cy={37.5} r={37.5} transform="translate(-37)" />
        </g>
      </g>
    </svg>
  )
}

export default Process
