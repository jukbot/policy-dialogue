// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageView = (url: string): void => {
  if (window.gtag) {
    window?.gtag('config', process.env['NEXT_PUBLIC_GTAG_ID'] ?? '', {
      page_path: url,
    })
  }
}

interface EventProps {
  action: string
  params: Gtag.CustomParams | Gtag.ControlParams | Gtag.EventParams | undefined
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const pageEvent = ({ action, params }: EventProps): void => {
  if (window.gtag) {
    window?.gtag('event', action, params)
  }
}
