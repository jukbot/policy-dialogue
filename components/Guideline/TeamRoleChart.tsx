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
          <circle cx="300" cy="300" r="300" stroke="none" />
          <circle cx="300" cy="300" r="298.5" fill="none" />
        </g>
        <path id="Path_551" data-name="Path 551" fill="#ffffff" d="M150 0A150 150 0 1 1 0 150 150 150 0 0 1 150 0z" transform="translate(1196 556)" />
        {/* <circle id="Ellipse_406" data-name="Ellipse 406" cx={150} cy={150} r={150} transform="translate(1196 556)" fill="#36723b" /> */}
        <g id="Group_1401" data-name="Group 1401" transform="translate(1252.757 668.686)">
          <g id="Group_535" data-name="Group 535">
            <path
              id="Path_231"
              data-name="Path 231"
              fill="#f04e30"
              d="M12.353 46.025h15.483c4.308 0 7.646 1.208 9.87 3.434a10.626 10.626 0 0 1 2.9 7.742v.1a10.52 10.52 0 0 1-7.256 10.5l8.27 12.094h-8.703l-7.256-10.839h-5.856v10.835h-7.452zm15 16.45c3.628 0 5.709-1.937 5.709-4.789v-.1c0-3.193-2.228-4.84-5.856-4.84h-7.4v9.727z"
              transform="translate(-12.353 -45.541)"
            />
            <path id="Path_232" data-name="Path 232" fill="#f04e30" d="M32.55 46.025H40v33.866h-7.45z" transform="translate(2.764 -45.541)" />
            <path
              id="Path_233"
              data-name="Path 233"
              fill="#f04e30"
              d="m40.323 75.164 4.4-5.273C47.775 72.407 50.968 74 54.839 74c3.046 0 4.884-1.21 4.884-3.194v-.1c0-1.887-1.159-2.855-6.821-4.307-6.821-1.741-11.223-3.626-11.223-10.355v-.1c0-6.144 4.934-10.208 11.853-10.208a19.618 19.618 0 0 1 12.58 4.3l-3.872 5.629c-3-2.079-5.952-3.338-8.807-3.338s-4.352 1.306-4.352 2.953v.094c0 2.228 1.449 2.951 7.305 4.452 6.87 1.79 10.741 4.259 10.741 10.16v.1c0 6.725-5.13 10.5-12.435 10.5a21.552 21.552 0 0 1-14.369-5.422z"
              transform="translate(8.582 -45.748)"
            />
            <path
              id="Path_234"
              data-name="Path 234"
              fill="#f04e30"
              d="M59.357 46.025H84.9v6.627H66.76v6.872h15.967v6.626H66.76v7.115h18.385v6.627H59.357z"
              transform="translate(22.829 -45.541)"
            />
          </g>
          <g id="Group_536" data-name="Group 536" transform="translate(37.608 38.362)">
            <path id="Path_235" data-name="Path 235" fill="#242054" d="M33.862 67.97h3.247v28.778h-3.247z" transform="translate(-33.862 -67.477)" />
            <path
              id="Path_236"
              data-name="Path 236"
              fill="#242054"
              d="M40.54 67.97h3.287l10.486 15.7 10.482-15.7h3.291v28.778h-3.249V73.439L54.353 88.854h-.163L43.7 73.478v23.27h-3.16z"
              transform="translate(-28.864 -67.477)"
            />
            <path
              id="Path_237"
              data-name="Path 237"
              fill="#242054"
              d="M60.951 67.97h10.774c6.494 0 10.769 3.453 10.769 9.127v.082c0 6.207-5.179 9.416-11.306 9.416H64.2v10.153h-3.249zm10.361 15.663c4.77 0 7.894-2.549 7.894-6.33v-.084c0-4.112-3.084-6.249-7.73-6.249H64.2v12.663z"
              transform="translate(-13.586 -67.477)"
            />
            <path
              id="Path_238"
              data-name="Path 238"
              fill="#242054"
              d="M86.717 67.853h3.044l13.114 28.983h-3.494l-3.373-7.606H80.345l-3.411 7.606H73.6zm8.019 18.459L88.2 71.635l-6.58 14.677z"
              transform="translate(-4.117 -67.565)"
            />
            <path
              id="Path_239"
              data-name="Path 239"
              fill="#242054"
              d="M91.9 82.653v-.082c0-8.143 6.085-14.883 14.551-14.883a14.979 14.979 0 0 1 11.225 4.564l-2.221 2.383a12.511 12.511 0 0 0-9.045-3.946c-6.371 0-11.141 5.181-11.141 11.8v.084c0 6.66 4.81 11.879 11.141 11.879 3.948 0 6.538-1.521 9.293-4.151l2.137 2.1c-3 3.042-6.289 5.057-11.512 5.057-8.305-.006-14.428-6.543-14.428-14.805z"
              transform="translate(9.577 -67.688)"
            />
            <path
              id="Path_240"
              data-name="Path 240"
              fill="#242054"
              d="M118.465 70.97h-9.66v-3h22.611v3h-9.66v25.778h-3.291z"
              transform="translate(22.231 -67.477)"
            />
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
            className={`${selectedTeam === 1 ? 'fill-[#ffffff] stroke-[#f04e30]' : 'group-hover:fill-[#ffffff] group-hover:stroke-[#f04e30]'} transition`}
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
            className={`${selectedTeam === 2 ? 'fill-[#ffffff] stroke-[#f04e30]' : 'group-hover:fill-[#ffffff] group-hover:stroke-[#f04e30]'} transition`}
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
            className={`${selectedTeam === 0 ? 'fill-[#ffffff] stroke-[#f04e30]' : 'group-hover:fill-[#ffffff] group-hover:stroke-[#f04e30]'} transition`}
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
