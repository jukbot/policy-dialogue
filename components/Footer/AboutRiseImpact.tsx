import Link from 'next/link'
// import RiseImpactLogo from '/public/image/logo/rise-impact.svg'

const AboutRiseImpact = () => {
  return (
    <div className="flex justify-center w-full max-w-6xl">
      <div className="flex flex-col items-center justify-between w-full p-8 bg-local bg-white bg-no-repeat bg-contain sm:px-24 md:flex-row rounded-xl lg:bg-footer-size bg-top-right lg:bg-rise-impact-footer">
        <div>
          <img src={'/image/logo/rise-impact.svg'} alt="rise-impact-logo" width="240" height="120" />
        </div>
        <div>
          <Link href="/about">
            <a className="w-3/4 px-12 btn sm:w-max">เกี่ยวกับเรา</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutRiseImpact
