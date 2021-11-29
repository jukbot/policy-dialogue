import Meta from '@/data/meta.json'

const SocialMedia = (): JSX.Element => {
  return (
    <div className="flex justify-center space-x-8 md:justify-start">
      <a href={Meta.facebookUrl} target="_blank" rel="noreferrer noopener" className="text-white hover:text-primary">
        <span className="sr-only">Facebook</span>
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      </a>

      <a href={Meta.linkedin} target="_blank" rel="noreferrer noopener" className="text-white hover:text-primary">
        <span className="sr-only">Linkedin</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </a>

      {/* <a href={Meta.twitterUrl} target="_blank" rel="noreferrer noopener" className="text-white hover:text-primary">
        <span className="sr-only">Twitter</span>
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      </a> */}

      {/* <a href={Meta.lineUrl} target="_blank" rel="noreferrer noopener" className="text-white hover:text-primary">
        <span className="sr-only">LINE</span>
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 23.456 22.841">
          <path
            d="M23.4 12.709l-.007-.06v-.005l-.027-.226-.019-.156-.006-.047h-.012a8.909 8.909 0 0 0-2.289-4.49 11.672 11.672 0 0 0-4.552-3 13.814 13.814 0 0 0-4.773-.837 13.4 13.4 0 0 0-6.27 1.518C1.842 7.326-.283 10.847.031 14.38A9.255 9.255 0 0 0 2.1 19.412a11.172 11.172 0 0 0 4.39 3.216 16.694 16.694 0 0 0 3.266.879l.132.026c.31.061.394.146.415.179a.388.388 0 0 1 0 .252l-.045.186a3.708 3.708 0 0 0-.148 1.566 1.092 1.092 0 0 0 1.108 1.017 4.1 4.1 0 0 0 1.838-.708l.064-.038c1.142-.671 2.218-1.427 3.027-2.011a26.323 26.323 0 0 0 5.285-4.6 9.09 9.09 0 0 0 1.968-6.667zM7.3 16.286H5.281a.554.554 0 0 1-.554-.554v-4.247a.554.554 0 0 1 1.107 0v3.694H7.3a.554.554 0 0 1 0 1.107zm2.111-.569a.554.554 0 0 1-1.107 0V11.47a.554.554 0 0 1 1.107 0zm5.005 0a.554.554 0 0 1-1 .325L11.425 13.3v2.421a.554.554 0 0 1-1.107 0v-4.13a.554.554 0 0 1 1-.325l1.994 2.746V11.47a.554.554 0 1 1 1.107 0zm4.035.467h-2.736a.554.554 0 0 1-.554-.554v-4.247a.554.554 0 0 1 .554-.554h2.656a.554.554 0 1 1 0 1.107h-2.1v1.016h1.706a.554.554 0 1 1 0 1.107h-1.708v1.016h2.187a.554.554 0 0 1 0 1.107z"
            transform="translate(0 -3.893)"
          />
        </svg>
      </a> */}

      <a href={Meta.youtubeUrl} target="_blank" rel="noreferrer noopener" className="text-white hover:text-primary">
        <span className="sr-only">Youtube</span>
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 305.0671 247.9995" aria-hidden="true">
          <path
            d="M93.333 117.559V47.775l61.334 34.893zm136.43-91.742c-2.699-10.162-10.651-18.165-20.747-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.555 7.652 7.603 15.655 4.904 25.817 0 44.236 0 82.667 0 82.667s0 38.429 4.904 56.849c2.699 10.163 10.65 18.165 20.747 20.883 18.3 4.934 91.682 4.934 91.682 4.934s73.383 0 91.683-4.934c10.096-2.718 18.048-10.72 20.747-20.883 4.904-18.42 4.904-56.85 4.904-56.85s0-38.43-4.904-56.849"
            fill="currentColor"
          />
        </svg>
      </a>
    </div>
  )
}

export default SocialMedia
