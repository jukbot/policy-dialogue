export const trackUserDownload = (path: string) => {
  fetch(`/api/track/${path}`, {
    headers: {
      'content-type': 'text/ping',
    },
    body: 'PING\u0000',
    method: 'POST',
  })
}

export const downloadContent = (fileName: string) => {
  const newWindow = window.open(`/pdf/${fileName}`, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
  trackUserDownload(fileName)
}
