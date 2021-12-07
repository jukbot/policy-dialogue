import { selectedProjectAtom } from '@/stores/global'
import { projectList } from '@/utils/projectIcon'
import { useAtom } from 'jotai'
import React from 'react'

interface Props {
  className?: string
}

const PolicyWheelMobile = (props: Props): JSX.Element => {
  const [selectedProject, setSelectedProject] = useAtom(selectedProjectAtom)

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" width={640} height={640} viewBox="0 0 302 305" {...props}>
      <defs>
        <style>
          {
            '.cls-3{fill:#fff}.cls-5{stroke:#f04e30}.cls-3,.cls-6{stroke:#707070}.cls-3,.cls-4,.cls-6{opacity:.35}.cls-4{fill:#707070}.cls-12,.cls-5,.cls-6{fill:none}.cls-5,.cls-6{stroke-dasharray:3 3}.cls-10{fill:#cdcdcd}.cls-11{stroke:none}'
          }
        </style>
      </defs>
      <g id="Group_1248" data-name="Group 1248" transform="translate(-23 -401)">
        <g id="Group_678" data-name="aip" transform="translate(-21 -6135)" onClick={() => setSelectedProject(projectList[0])}>
          <g id="Ellipse_1255" data-name="aip-circle" transform="translate(176 6541)" className={`${selectedProject.icon === 'aip' ? 'cls-5' : 'cls-3'}`}>
            <circle className="cls-11" cx={20} cy={20} r={20} />
            <circle className="cls-12" cx={20} cy={20} r={19.5} />
          </g>
          <path
            id="Path_406"
            data-name="aip-icon"
            d="m268.26 13.218 1.107-3.45a.281.281 0 0 1 .548.087l-.014 3.623a.281.281 0 0 0 .509.165l2.119-2.939a.281.281 0 0 1 .495.252l-1.133 3.444a.281.281 0 0 0 .433.314l2.923-2.141a.281.281 0 0 1 .393.393l-2.14 2.921a.281.281 0 0 0 .315.433l3.442-1.133a.281.281 0 0 1 .252.495l-2.941 2.118a.281.281 0 0 0 .165.509l3.623-.014a.281.281 0 0 1 .087.548l-3.45 1.107a.281.281 0 0 0 0 .535l3.45 1.107a.281.281 0 0 1-.087.548l-3.623-.014a.281.281 0 0 0-.165.509l2.939 2.119a.281.281 0 0 1-.252.495l-3.442-1.133a.281.281 0 0 0-.315.433l2.141 2.923a.281.281 0 0 1-.393.393l-2.923-2.141a.281.281 0 0 0-.433.314l1.133 3.442a.281.281 0 0 1-.495.252l-2.119-2.939a.281.281 0 0 0-.509.165l.014 3.623a.281.281 0 0 1-.548.087l-1.107-3.45a.281.281 0 0 0-.535 0l-1.107 3.45a.281.281 0 0 1-.548-.087l.014-3.623a.281.281 0 0 0-.509-.165l-2.119 2.939a.281.281 0 0 1-.495-.252l1.133-3.442a.281.281 0 0 0-.433-.314l-2.923 2.141a.281.281 0 0 1-.393-.393l2.141-2.923a.281.281 0 0 0-.314-.433l-3.441 1.134a.281.281 0 0 1-.252-.495l2.939-2.119a.281.281 0 0 0-.165-.509l-3.623.014a.281.281 0 0 1-.087-.548l3.45-1.107a.281.281 0 0 0 0-.535l-3.45-1.107a.281.281 0 0 1 .087-.548l3.623.014a.281.281 0 0 0 .165-.509l-2.939-2.119a.281.281 0 0 1 .252-.495l3.442 1.133a.281.281 0 0 0 .314-.433l-2.141-2.923a.281.281 0 0 1 .393-.393l2.923 2.141a.281.281 0 0 0 .433-.314l-1.133-3.442a.281.281 0 0 1 .495-.252l2.119 2.939a.281.281 0 0 0 .509-.165l-.014-3.623a.281.281 0 0 1 .548-.087l1.107 3.45a.281.281 0 0 0 .535 0z"
            transform="translate(-72 6541)"
            className={`${selectedProject.icon === 'aip' ? 'fill-[#c7642a]' : 'cls-4'} `}
          />
        </g>
        <g id="Group_697" data-name="imc" transform="translate(-21 -6135)" onClick={() => setSelectedProject(projectList[1])}>
          <g id="Group_691" data-name="Group 691">
            <g id="Ellipse_197" data-name="imc-circle" transform="translate(286 6598)" className={`${selectedProject.icon === 'imc' ? 'cls-5' : 'cls-3'}`}>
              <circle className="cls-11" cx={20} cy={20} r={20} />
              <circle className="cls-12" cx={20} cy={20} r={19.5} />
            </g>
            <path
              id="Path_176"
              data-name="imc-icon"
              d="M516.647 12.912c0-1.266-1.371-2.4-3.549-3.187 1.544-.451 2.484-1.05 2.484-1.707 0-.966-2.032-1.806-5.025-2.236.5-.244.8-.53.8-.838 0-.882-2.4-1.6-5.352-1.6s-5.352.715-5.352 1.6c0 .307.291.594.8.838-2.993.43-5.025 1.27-5.025 2.236 0 .657.941 1.256 2.484 1.707-2.178.783-3.549 1.92-3.549 3.187s1.393 2.422 3.6 3.206c-1.575.453-2.538 1.058-2.538 1.723 0 .966 2.032 1.806 5.025 2.236-.5.244-.8.53-.8.838 0 .882 2.4 1.6 5.352 1.6s5.352-.715 5.352-1.6c0-.307-.291-.594-.8-.838 2.993-.43 5.025-1.27 5.025-2.236 0-.665-.962-1.27-2.538-1.723 2.213-.784 3.606-1.93 3.606-3.206z"
              transform="translate(-200.001 6605.071)"
              className={`${selectedProject.icon === 'imc' ? 'fill-[#CECECE]' : 'cls-4'}`}
            />
          </g>
        </g>
        <g id="Group_696" data-name="lsd" transform="translate(-21 -6135)" onClick={() => setSelectedProject(projectList[6])}>
          <g id="Ellipse_213" data-name="lsd-circle" transform="translate(64 6598)" className={`${selectedProject.icon === 'lsd' ? 'cls-5' : 'cls-3'}`}>
            <circle className="cls-11" cx={20} cy={20} r={20} />
            <circle className="cls-12" cx={20} cy={20} r={19.5} />
          </g>
          <path
            id="Path_182"
            data-name="lsd-icon"
            d="M175.543 606.615H172.4a.352.352 0 01-.305-.529l1.571-2.72a2.959 2.959 0 00-1.083-4.042 2.959 2.959 0 00-4.042 1.083l-1.571 2.72a.352.352 0 01-.61 0l-1.571-2.72a2.959 2.959 0 00-4.042-1.083 2.959 2.959 0 00-1.083 4.042l1.571 2.72a.352.352 0 01-.305.529h-3.142a2.959 2.959 0 00-2.959 2.959 2.959 2.959 0 002.959 2.959h3.142a.352.352 0 01.305.528l-1.571 2.721a2.959 2.959 0 001.083 4.042 2.959 2.959 0 004.042-1.083l1.571-2.721a.352.352 0 01.61 0l1.571 2.721a2.959 2.959 0 004.042 1.083 2.959 2.959 0 001.083-4.042l-1.566-2.722a.352.352 0 01.305-.528h3.141a2.959 2.959 0 002.959-2.959 2.959 2.959 0 00-2.962-2.958z"
            transform="translate(-82.832 6008.073)"
            className={`${selectedProject.icon === 'lsd' ? 'fill-[#daa13d]' : 'cls-4'}`}
          />
        </g>
        <g id="Group_693" data-name="pc" transform="translate(-21 -6135)" onClick={() => setSelectedProject(projectList[3])}>
          <g id="Ellipse_214" data-name="pc-circle" transform="translate(234 6801)" className={`${selectedProject.icon === 'pc' ? 'cls-5' : 'cls-3'}`}>
            <circle className="cls-11" cx={20} cy={20} r={20} />
            <circle className="cls-12" cx={20} cy={20} r={19.5} />
          </g>
          <path
            id="Path_174"
            data-name="pc-icon"
            d="M1607.947 1189.993c-2.092-1.859-5.444-2.164-8.854-1.107-3.409-1.056-6.762-.752-8.854 1.107s-2.434 4.84-1.246 7.87c-1.188 3.03-.846 6.011 1.246 7.87s5.445 2.164 8.854 1.107c3.409 1.056 6.762.752 8.854-1.107s2.434-4.84 1.246-7.87c1.188-3.031.846-6.011-1.246-7.87z"
            transform="translate(-1345.094 5623.137)"
            className={`${selectedProject.icon === 'pc' ? 'fill-[#3f36b7]' : 'cls-4'}`}
          />
        </g>
        <g id="Group_692" data-name="ltc" transform="translate(-21 -6135)" onClick={() => setSelectedProject(projectList[2])}>
          <g id="Ellipse_209" data-name="ltc-circle" transform="translate(306 6715)" className={`${selectedProject.icon === 'ltc' ? 'cls-5' : 'cls-3'}`}>
            <circle className="cls-11" cx={20} cy={20} r={20} />
            <circle className="cls-12" cx={20} cy={20} r={19.5} />
          </g>
          {/* <path
            id="Path_59"
            data-name="ltc-icon"
            d="M1374.506 41.633c-3.532 0-6.771 1.93-9.3 5.143-2.526-3.213-5.765-5.143-9.3-5.143-8.069 0-14.609 10.074-14.609 22.5s6.541 22.5 14.609 22.5c3.532 0 6.771-1.93 9.3-5.143 2.526 3.213 5.765 5.143 9.3 5.143 8.069 0 14.609-10.074 14.609-22.5s-6.54-22.5-14.609-22.5z"
            transform="translate(-1025.484 6683.785)"
            className={`${selectedProject.icon === 'ltc' ? 'fill-[#CECECE]' : 'cls-4'}`}
          /> */}
          <path
            id="Path_173"
            data-name="ltc-icon"
            d="M1355.443 41.633a4.673 4.673 0 0 1-7.918 0c-3.436 0-6.221 4.29-6.221 9.582s2.786 9.582 6.221 9.582a4.673 4.673 0 0 1 7.918 0c3.436 0 6.222-4.29 6.222-9.582s-2.786-9.582-6.222-9.582z"
            transform="translate(-1025.484 6683.785)"
            className={`${selectedProject.icon === 'ltc' ? 'fill-[#CECECE]' : 'cls-4'}`}
          />
        </g>
        <g id="Group_695" data-name="gm" transform="translate(-21 -6135)" onClick={() => setSelectedProject(projectList[5])}>
          <g id="Ellipse_212" data-name="gm-circle" transform="translate(44 6715)" className={`${selectedProject.icon === 'gm' ? 'cls-5' : 'cls-3'}`}>
            <circle className="cls-11" cx={20} cy={20} r={20} />
            <circle className="cls-12" cx={20} cy={20} r={19.5} />
          </g>
          <path
            id="Path_181"
            data-name="gm-icon"
            d="M861.915 30.326h-17.871a2.393 2.393 0 01-.757-4.663l3.881-1.294h-3.124a2.393 2.393 0 01-.757-4.663l3.881-1.294h-3.124a2.393 2.393 0 010-4.786h17.871a2.393 2.393 0 01.757 4.663l-3.881 1.294h3.124a2.393 2.393 0 01.757 4.663l-3.881 1.294h3.124a2.393 2.393 0 010 4.786z"
            transform="translate(-788.981 6713.606)"
            className={`${selectedProject.icon === 'gm' ? 'fill-[#CECECE]' : 'cls-4'}`}
          />
        </g>
        <g id="Group_694" data-name="dt" transform="translate(-21 -6135)" onClick={() => setSelectedProject(projectList[4])}>
          <g id="Ellipse_217" data-name="dt-circle" transform="translate(116 6801)" className={`${selectedProject.icon === 'dt' ? 'cls-5' : 'cls-3'}`}>
            <circle className="cls-11" cx={20} cy={20} r={20} />
            <circle className="cls-12" cx={20} cy={20} r={19.5} />
          </g>
          <path
            id="Path_175"
            data-name="dt-icon"
            d="M728.212 1099.153a6.223 6.223 0 00-8.789-8.789 8.362 8.362 0 10-6.215 15 6.223 6.223 0 0012.429 0 3.373 3.373 0 002.574-6.215z"
            transform="translate(-583.424 5721.847)"
            className={`${selectedProject.icon === 'dt' ? 'fill-[#CECECE]' : 'cls-4'}`}
          />
          {/* <path id="Path_56"
            data-name="dt-icon"
            className={`${selectedProject.icon === 'dt' ? 'fill-[#CECECE]' : 'cls-4'}`}
            d="M754.415 1113.507a7.919 7.919 0 0 0-6.045-14.594 7.919 7.919 0 0 0-14.593-6.045 7.919 7.919 0 0 0-14.593 6.045 7.919 7.919 0 0 0-6.045 14.594 7.919 7.919 0 0 0 6.045 14.593 7.919 7.919 0 0 0 14.593 6.045 7.919 7.919 0 0 0 14.593-6.045 7.919 7.919 0 0 0 6.045-14.593z"
            transform="translate(-583.424 5721.847)"
          /> */}
        </g>
        <g id="Group_1247" data-name="Group 1247">
          <path id="Path_516" data-name="aip" className={selectedProject.icon === 'aip' ? 'cls-5' : 'cls-6'} transform="translate(175 445.5)" d="M0 38.009V0" />
          <path
            id="Line_25"
            data-name="imc"
            className={selectedProject.icon === 'imc' ? 'cls-5' : 'cls-6'}
            transform="translate(238.677 494.582)"
            d="M0 21.719L30.236 0"
          />
          <path
            id="Line_32"
            data-name="lsd"
            className={selectedProject.icon === 'lsd' ? 'cls-5' : 'cls-6'}
            transform="translate(78.816 494.582)"
            d="M30.236 21.719L0 0"
          />
          <path
            id="Line_26"
            data-name="ltc"
            className={selectedProject.icon === 'ltc' ? 'cls-5' : 'cls-6'}
            transform="translate(250.964 584.857)"
            d="M0 0l35.409 10.226"
          />
          <path
            id="Line_33"
            data-name="gm"
            className={selectedProject.icon === 'gm' ? 'cls-5' : 'cls-6'}
            transform="translate(61.422 584.874)"
            d="M35.409 0L0 10.226"
          />
          <path
            id="Line_27"
            data-name="pc"
            className={selectedProject.icon === 'pc' ? 'cls-5' : 'cls-6'}
            transform="translate(208.441 635.114)"
            d="M0 0l16.183 32.791"
          />
          <path
            id="Line_34"
            data-name="dt"
            className={selectedProject.icon === 'dt' ? 'cls-5' : 'cls-6'}
            transform="translate(123.24 635.114)"
            d="M16.183 0L0 32.791"
          />
          <g id="Group_1246" data-name="Group 1246">
            <circle id="Ellipse_1240" data-name="Ellipse 1240" cx={60} cy={60} r={60} transform="translate(115 503)" opacity={0.1} fill="#f04e30" />
            <text
              id="\u0E19\u0E42\u0E22\u0E1A\u0E32\u0E22\u0E40\u0E1E\u0E37\u0E48\u0E2D_\u0E2A\u0E31\u0E07\u0E04\u0E21\u0E2A\u0E39\u0E07\u0E27\u0E31\u0E22"
              data-name="\u0E19\u0E42\u0E22\u0E1A\u0E32\u0E22\u0E40\u0E1E\u0E37\u0E48\u0E2D \u0E2A\u0E31\u0E07\u0E04\u0E21\u0E2A\u0E39\u0E07\u0E27\u0E31\u0E22"
              transform="translate(176 554)"
              fill="#191919"
              fontSize="16px"
              fontFamily="IBMPlexSansThaiLooped, sans-serif"
              fontWeight={600}
            >
              <tspan x={-42.864} y={0}>
                {'\u0E19\u0E42\u0E22\u0E1A\u0E32\u0E22\u0E40\u0E1E\u0E37\u0E48\u0E2D'}
              </tspan>
              <tspan x={-39.848} y={27}>
                {'\u0E2A\u0E31\u0E07\u0E04\u0E21\u0E2A\u0E39\u0E07\u0E27\u0E31\u0E22'}
              </tspan>
            </text>
            <g id="Ellipse_1239" data-name="Ellipse 1239" className="cls-5" transform="translate(95 483.492)">
              <circle className="cls-11" cx={79.864} cy={79.864} r={79.864} />
              <circle className="cls-12" cx={79.864} cy={79.864} r={79.364} />
            </g>
            <circle
              id="Ellipse_1242"
              data-name="aip"
              className={selectedProject.icon !== 'aip' ? 'cls-10' : ''}
              cx={5}
              cy={5}
              r={5}
              transform="translate(170 478.509)"
              fill="#f04e30"
            />
            <circle
              id="Ellipse_190"
              data-name="imc"
              className={selectedProject.icon !== 'imc' ? 'cls-10' : ''}
              cx={5}
              cy={5}
              r={5}
              transform="translate(232.555 511.3)"
            />
            <circle
              id="Ellipse_207"
              data-name="lsd"
              className={selectedProject.icon !== 'lsd' ? 'cls-10' : ''}
              cx={5}
              cy={5}
              r={5}
              transform="translate(105.174 511.3)"
            />
            <circle
              id="Ellipse_191"
              data-name="ltc"
              className={selectedProject.icon !== 'ltc' ? 'cls-10' : ''}
              cx={5}
              cy={5}
              r={5}
              transform="translate(245.843 579.857)"
            />
            <circle
              id="Ellipse_210"
              data-name="gm"
              className={selectedProject.icon !== 'gm' ? 'cls-10' : ''}
              cx={5}
              cy={5}
              r={5}
              transform="translate(91.951 579.874)"
            />
            <circle
              id="Ellipse_192"
              data-name="pc"
              className={selectedProject.icon !== 'pc' ? 'cls-10' : ''}
              cx={5}
              cy={5}
              r={5}
              transform="translate(203.441 630.114)"
            />
            <circle
              id="Ellipse_215"
              data-name="dt"
              className={selectedProject.icon !== 'dt' ? 'cls-10' : ''}
              cx={5}
              cy={5}
              r={5}
              transform="translate(134.423 630.114)"
            />
          </g>
        </g>
      </g>
    </svg>
  )
}

export default PolicyWheelMobile
