const TimelineHeader = () => {
  return (
    <div className="absolute top-0 h-full w-min">
      <svg xmlns="http://www.w3.org/2000/svg" width="600" viewBox="0 0 780 390">
        <g data-name="Group 1572">
          <path
            d="M614 1166a396.24 396.24 0 0 1-39.875-2.014 389.417 389.417 0 0 1-348.111-348.111A396.218 396.218 0 0 1 224 776h780a396.226 396.226 0 0 1-2.013 39.875 389.416 389.416 0 0 1-348.112 348.112A396.248 396.248 0 0 1 614 1166z"
            transform="translate(-224 -776)"
            fill="#fff"
          />
          <text transform="translate(440 90)" fontSize="2.5rem" fontFamily="IBMPlexSansThai,san-serif" fontWeight="600" fill="#3f36b7">
            <tspan x="-230.025" y="0">
              กระบวนการหาคำตอบ
            </tspan>
          </text>
          <text transform="translate(120 130)" fontSize="1.5rem" fontFamily="IBMPlexSansThaiLooped,san-serif" fill="#3f36b7">
            <tspan x="75.238" y="28">
              RISE Impact{' '}
            </tspan>
            <tspan y="28">ได้จัดกระบวนการหารือ</tspan>
            <tspan x="68" y="69">
              เชิงนโยบายในประเด็นนี้ทั้งหมด 3 ครั้ง
            </tspan>
            <tspan x="146.688" y="110">
              รวมผู้เข้าร่วมกว่า 96 คน
            </tspan>
          </text>
        </g>
      </svg>
    </div>
  )
}

export default TimelineHeader
