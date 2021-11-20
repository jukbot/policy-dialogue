import React from 'react'

interface Props {
  className?: string
}

const Content = (props: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={71} height={75} viewBox="0 0 71 75" {...props}>
      <defs>
        <style>{'.cls-5{fill:none}.cls-4{stroke:none}'}</style>
      </defs>
      <g id="Group_1070" data-name="Group 1070" transform="translate(-777 -1248)" strokeWidth="3px">
        <g id="Rectangle_359" data-name="Rectangle 359" transform="translate(777 1253)" stroke="#f04e30" fill="none">
          <rect className="cls-4" width={55} height={65} rx={5} />
          <rect className="cls-5" x={1.5} y={1.5} width={52} height={62} rx={3.5} />
        </g>
        <g id="Rectangle_360" data-name="Rectangle 360" transform="translate(793 1253)" fill="#cc79a7" stroke="#cb79a5">
          <rect className="cls-4" width={55} height={65} rx={5} />
          <rect className="cls-5" x={1.5} y={1.5} width={52} height={62} rx={3.5} />
        </g>
        <g id="Rectangle_361" data-name="Rectangle 361" transform="translate(785 1248)" fill="#242054" stroke="#242054">
          <rect className="cls-4" width={55} height={75} rx={5} />
          <rect className="cls-5" x={1.5} y={1.5} width={52} height={72} rx={3.5} />
        </g>
      </g>
    </svg>
  )
}

export default Content
