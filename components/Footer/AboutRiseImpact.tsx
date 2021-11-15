import RiseImpactLogo from '/public/image/logo/rise-impact.svg'
import Link from 'next/link'
import Image from 'next/image'

const AboutRiseImpact = () => {
  return (
    <div className="flex justify-center w-full sm:w-3/4">
      <div className="flex flex-col items-center justify-between w-full p-8 bg-local bg-white bg-no-repeat bg-contain sm:px-24 lg:flex-row rounded-xl lg:bg-footer-size bg-top-right bg-rise-impact-footer">
        <div>
          <Image src={RiseImpactLogo} alt="rise-impact-logo" className="w-full h-full" width="240" height="120" />
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
