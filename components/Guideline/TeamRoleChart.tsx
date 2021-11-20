import { selectedTeamAtom } from '@/stores/global'
import { useAtom } from 'jotai'

interface Props {
  className?: string
}

const TeamRoleChart = (props: Props): JSX.Element => {
  const [selectedTeam, setSelectedTeam] = useAtom(selectedTeamAtom)

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-20 0 750 700" {...props}>
      <defs>
        <style>
          {
            '.primary-text{fill:#f04e30;font-size:1.65rem;font-family:IBMPlexSansThai,sans-serif;font-weight:600}.white-text{fill:#fff;font-size:1.65rem;font-family:IBMPlexSansThai,sans-serif}'
          }
        </style>
      </defs>
      <g id="Group_1398" data-name="Group 1398" transform="translate(-1013 -406)">
        <g id="Ellipse_404" data-name="Ellipse 404" transform="translate(1046 406)" stroke="#fff" strokeWidth="3px" strokeDasharray="8 8" fill="none">
          <circle cx={300} cy={300} r={300} stroke="none" />
          <circle cx={300} cy={300} r={298.5} />
        </g>
        <circle id="Ellipse_406" data-name="Ellipse 406" cx={150} cy={150} r={150} transform="translate(1196 556)" fill="#36723b" />
        <g id="Group_537" data-name="Group 537" transform="translate(1270 675)" fill="#fff" letterSpacing=".05em">
          <g id="Group_535" data-name="Group 535">
            <path
              id="Path_231"
              data-name="Path 231"
              d="M12.353 46.025h12.063c3.357 0 5.957.941 7.69 2.676a8.279 8.279 0 0 1 2.263 6.032v.075a8.2 8.2 0 0 1-5.654 8.181l6.444 9.423h-6.784l-5.654-8.442h-4.562v8.442h-5.806zm11.689 12.817c2.827 0 4.448-1.509 4.448-3.731v-.076c0-2.488-1.736-3.771-4.562-3.771h-5.769v7.579z"
              transform="translate(-12.353 -45.648)"
            />
            <path id="Path_232" data-name="Path 232" d="M32.55 46.025h5.8v26.387h-5.8z" transform="translate(-5.035 -45.648)" />
            <path
              id="Path_233"
              data-name="Path 233"
              d="m40.323 68.668 3.43-4.109a12.108 12.108 0 0 0 7.88 3.2c2.373 0 3.8-.943 3.8-2.489v-.07c0-1.47-.9-2.225-5.314-3.355-5.314-1.357-8.745-2.825-8.745-8.068V53.7c0-4.787 3.844-7.953 9.235-7.953a15.285 15.285 0 0 1 9.8 3.354L57.4 53.475a12.39 12.39 0 0 0-6.862-2.6c-2.223 0-3.391 1.018-3.391 2.3v.074c0 1.736 1.129 2.3 5.692 3.468 5.353 1.4 8.369 3.319 8.369 7.916v.076c0 5.239-4 8.179-9.689 8.179a16.792 16.792 0 0 1-11.196-4.22z"
              transform="translate(-2.219 -45.748)"
            />
            <path
              id="Path_234"
              data-name="Path 234"
              d="M59.357 46.025h19.9v5.163H65.125v5.354h12.441v5.163H65.125v5.543H79.45v5.163H59.357z"
              transform="translate(4.677 -45.648)"
            />
          </g>
          <g id="Group_536" data-name="Group 536" transform="translate(29.302 29.889)">
            <path id="Path_235" data-name="Path 235" d="M33.862 67.97h2.53v22.422h-2.53z" transform="translate(-33.862 -67.586)" />
            <path
              id="Path_236"
              data-name="Path 236"
              d="M40.54 67.97h2.56l8.17 12.236 8.168-12.236H62v22.422h-2.529V72.231L51.3 84.242h-.127l-8.17-11.98v18.13H40.54z"
              transform="translate(-31.442 -67.586)"
            />
            <path
              id="Path_237"
              data-name="Path 237"
              d="M60.951 67.97h8.395c5.06 0 8.391 2.691 8.391 7.111v.064c0 4.836-4.035 7.336-8.809 7.336h-5.446v7.911h-2.531zm8.073 12.2c3.716 0 6.151-1.986 6.151-4.932v-.065c0-3.2-2.4-4.869-6.023-4.869h-5.67v9.866z"
              transform="translate(-24.047 -67.586)"
            />
            <path
              id="Path_238"
              data-name="Path 238"
              d="M83.82 67.853h2.372L96.41 90.435h-2.722l-2.628-5.926h-12.2l-2.66 5.926h-2.6zm6.248 14.382L84.974 70.8l-5.125 11.435z"
              transform="translate(-19.463 -67.628)"
            />
            <path
              id="Path_239"
              data-name="Path 239"
              d="M91.9 79.348v-.064a11.3 11.3 0 0 1 11.337-11.6 11.671 11.671 0 0 1 8.746 3.556l-1.73 1.857a9.748 9.748 0 0 0-7.047-3.075c-4.964 0-8.681 4.037-8.681 9.193v.065c0 5.189 3.748 9.256 8.681 9.256 3.076 0 5.094-1.185 7.241-3.234l1.665 1.633a11.676 11.676 0 0 1-8.969 3.94A11.183 11.183 0 0 1 91.9 79.348z"
              transform="translate(-12.835 -67.688)"
            />
            <path id="Path_240" data-name="Path 240" d="M116.332 70.308h-7.527V67.97h17.617v2.338H118.9v20.084h-2.564z" transform="translate(-6.709 -67.586)" />
          </g>
        </g>
        <g id="Group_615" data-name="Group 615" className="group role-icon" onClick={() => setSelectedTeam(1)}>
          <circle
            id="Ellipse_409"
            data-name="Ellipse 409"
            cx={87.5}
            cy={87.5}
            r={selectedTeam === 1 ? 100 : 87.5}
            transform="translate(1507 451)"
            fill="#6badcb"
            strokeWidth="6"
            className={`${selectedTeam === 1 ? 'fill-[#ffffff] stroke-[#f04e30]' : 'group-hover:fill-[#ffffff] group-hover:stroke-[#f04e30]'}`}
          />
          <text
            id="\u0E17\u0E35\u0E21\u0E08\u0E31\u0E14_\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23"
            data-name="\u0E17\u0E35\u0E21\u0E08\u0E31\u0E14 \u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23"
            className={`${selectedTeam === 1 ? 'primary-text' : 'group-hover:fill-[#f04e30] white-text'}`}
            transform="translate(1495 499)"
          >
            <tspan x={70} y={28}>
              {'\u0E17\u0E35\u0E21\u0E08\u0E31\u0E14'}
            </tspan>
            <tspan x={35} y={69}>
              {'\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23'}
            </tspan>
          </text>
        </g>
        <g id="Group_613" data-name="Group 613" className="group role-icon" onClick={() => setSelectedTeam(2)}>
          <circle
            id="Ellipse_408"
            data-name="Ellipse 408"
            cx={87.5}
            cy={87.5}
            r={selectedTeam === 2 ? 100 : 87.5}
            transform="translate(1259 917)"
            fill="#cc79a7"
            strokeWidth="6"
            className={`${selectedTeam === 2 ? 'fill-[#ffffff] stroke-[#f04e30]' : 'group-hover:fill-[#ffffff] group-hover:stroke-[#f04e30]'}`}
          />
          <text
            id="\u0E17\u0E35\u0E21_\u0E1B\u0E23\u0E30\u0E2A\u0E32\u0E19\u0E07\u0E32\u0E19"
            data-name="\u0E17\u0E35\u0E21 \u0E1B\u0E23\u0E30\u0E2A\u0E32\u0E19\u0E07\u0E32\u0E19"
            className={`${selectedTeam === 2 ? 'primary-text' : 'group-hover:fill-[#f04e30] white-text'}`}
            transform="translate(1247 964)"
          >
            <tspan x={80} y={28}>
              {'\u0E17\u0E35\u0E21'}
            </tspan>
            <tspan x={35} y={69}>
              {'\u0E1B\u0E23\u0E30\u0E2A\u0E32\u0E19\u0E07\u0E32\u0E19'}
            </tspan>
          </text>
        </g>

        <g id="Group_611" data-name="Group 611" className="group role-icon" transform="translate(.001 -2700)" onClick={() => setSelectedTeam(0)}>
          <circle
            id="Ellipse_400"
            data-name="Ellipse 400"
            cx={87.5}
            cy={87.5}
            r={selectedTeam === 0 ? 100 : 87.5}
            transform="translate(1012.999 3149)"
            fill="#daa13d"
            strokeWidth="6"
            className={`${selectedTeam === 0 ? 'fill-[#ffffff] stroke-[#f04e30]' : 'group-hover:fill-[#ffffff] group-hover:stroke-[#f04e30]'}`}
          />
          <text
            id="\u0E17\u0E35\u0E21\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32"
            className={`${selectedTeam === 0 ? 'primary-text' : 'group-hover:fill-[#f04e30] white-text'}`}
            transform="translate(1012.999 3216)"
          >
            <tspan x={35} y={28}>
              {'\u0E17\u0E35\u0E21\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32'}
            </tspan>
          </text>
        </g>
      </g>
    </svg>
  )
}

export default TeamRoleChart
