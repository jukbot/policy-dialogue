import projects from '@/data/projects.json'
import { selectedProjectAtom } from '@/stores/global'
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
      <g id="Group_1248" data-name="outer-circle-group" transform="translate(-23 -401)">
        <g id="Group_678" data-name="aip" transform="translate(-21 -6135)" onClick={() => setSelectedProject(projects[0])}>
          <g id="Ellipse_1255" data-name="aip-circle" transform="translate(176 6541)" className={`${selectedProject.icon === 'aip' ? 'cls-5' : 'cls-3'}`}>
            <circle className="cls-11" cx={20} cy={20} r={20} />
            <circle className="cls-12" cx={20} cy={20} r={19.5} />
          </g>
          <g id="Group_1184" data-name="Group 1184" transform="translate(7.96 7.96)">
            <path
              id="Path_369"
              data-name="aip-icon"
              className={`${selectedProject.icon === 'aip' ? 'fill-[#c7642a]' : 'cls-4'} `}
              d="m270.8 14.064 1.364-4.251a.346.346 0 0 1 .676.107l-.017 4.465a.346.346 0 0 0 .627.2l2.611-3.622a.346.346 0 0 1 .61.311l-1.4 4.241a.346.346 0 0 0 .533.387l3.6-2.638a.346.346 0 0 1 .484.484l-2.638 3.6a.346.346 0 0 0 .388.533l4.241-1.4a.346.346 0 0 1 .311.61l-3.622 2.611a.346.346 0 0 0 .2.627l4.465-.017a.346.346 0 0 1 .107.676l-4.251 1.364a.346.346 0 0 0 0 .659l4.251 1.364a.346.346 0 0 1-.107.676l-4.465-.017a.346.346 0 0 0-.2.627l3.622 2.611a.346.346 0 0 1-.311.61l-4.241-1.4a.346.346 0 0 0-.388.533l2.638 3.6a.346.346 0 0 1-.484.484l-3.6-2.638a.346.346 0 0 0-.533.387l1.4 4.241a.346.346 0 0 1-.61.311l-2.611-3.622a.346.346 0 0 0-.627.2l.017 4.465a.346.346 0 0 1-.676.107l-1.364-4.232a.346.346 0 0 0-.659 0l-1.364 4.251a.346.346 0 0 1-.676-.107l.012-4.462a.346.346 0 0 0-.627-.2l-2.611 3.622a.346.346 0 0 1-.61-.311l1.4-4.241a.346.346 0 0 0-.533-.387l-3.6 2.638a.346.346 0 0 1-.484-.484l2.638-3.6a.346.346 0 0 0-.387-.533l-4.241 1.4a.346.346 0 0 1-.311-.61l3.622-2.611a.346.346 0 0 0-.2-.627l-4.465.017a.346.346 0 0 1-.107-.676l4.251-1.364a.346.346 0 0 0 0-.659L257.587 21a.346.346 0 0 1 .107-.676l4.465.017a.346.346 0 0 0 .2-.627l-3.618-2.614a.346.346 0 0 1 .311-.61l4.241 1.4a.346.346 0 0 0 .387-.533l-2.638-3.6a.346.346 0 0 1 .484-.484l3.6 2.638a.346.346 0 0 0 .533-.387l-1.4-4.241a.346.346 0 0 1 .61-.311l2.611 3.622a.346.346 0 0 0 .627-.2L268.1 9.92a.346.346 0 0 1 .676-.107l1.364 4.251a.346.346 0 0 0 .66 0z"
              transform="translate(-82.5 6531)"
            />
          </g>
        </g>
        <g id="Group_697" data-name="imc" transform="translate(-21 -6135)" onClick={() => setSelectedProject(projects[1])}>
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
        <g id="Group_696" data-name="lsd" transform="translate(-21 -6135)" onClick={() => setSelectedProject(projects[6])}>
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
        <g id="Group_693" data-name="pc" transform="translate(-21 -6135)" onClick={() => setSelectedProject(projects[3])}>
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
        <g id="Group_692" data-name="ltc" transform="translate(-21 -6135)" onClick={() => setSelectedProject(projects[2])}>
          <g id="Ellipse_209" data-name="ltc-circle" transform="translate(306 6715)" className={`${selectedProject.icon === 'ltc' ? 'cls-5' : 'cls-3'}`}>
            <circle className="cls-11" cx={20} cy={20} r={20} />
            <circle className="cls-12" cx={20} cy={20} r={19.5} />
          </g>
          <path
            id="Path_59"
            data-name="ltc-icon"
            d="M21.26 7.26a5 5 0 0 0-3.91 2.3 5 5 0 0 0-3.92-2.3c-3.41 0-6.16 4.51-6.16 10.09S10 27.43 13.43 27.43a5 5 0 0 0 3.92-2.3 5 5 0 0 0 3.91 2.3c3.41 0 6.16-4.51 6.16-10.08S24.67 7.26 21.26 7.26z"
            transform="translate(309 6718)"
            className={`${selectedProject.icon === 'ltc' ? 'fill-[#CECECE]' : 'cls-4'}`}
          />
        </g>
        <g id="Group_695" data-name="gm" transform="translate(-21 -6135)" onClick={() => setSelectedProject(projects[5])}>
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
        <g id="Group_694" data-name="dt" transform="translate(-21 -6135)" onClick={() => setSelectedProject(projects[4])}>
          <g id="Ellipse_217" data-name="dt-circle" transform="translate(116 6801)" className={`${selectedProject.icon === 'dt' ? 'cls-5' : 'cls-3'}`}>
            <circle className="cls-11" cx={20} cy={20} r={20} />
            <circle className="cls-12" cx={20} cy={20} r={19.5} />
          </g>
          <path
            id="Path_175"
            data-name="dt-icon"
            className={`${selectedProject.icon === 'dt' ? 'fill-[#CECECE]' : 'cls-4'}`}
            d="M26.38 17.35A3.47 3.47 0 0 0 23.73 11a3.46 3.46 0 0 0-6.38-2.65A3.47 3.47 0 0 0 11 11a3.47 3.47 0 0 0-2.65 6.39A3.46 3.46 0 0 0 11 23.73a3.47 3.47 0 0 0 6.39 2.65 3.46 3.46 0 0 0 6.38-2.65 3.46 3.46 0 0 0 2.65-6.38z"
            transform="translate(119 6804)"
          />
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
          <g id="Group_1246" data-name="center-text-circle">
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
            <g id="Ellipse_1239" data-name="center-border" className="cls-5" transform="translate(95 483.492)">
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
