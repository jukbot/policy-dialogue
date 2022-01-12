import { analytics } from '@/libs/firebase/firebaseClient'
import { isSupported, logEvent, setUserId } from '@firebase/analytics'
import { getDownloadFileUrl } from './downloadUrl'

export const trackUserDownload = (path: string) => {
  fetch(`/api/track/${path}`, {
    headers: {
      'content-type': 'text/ping',
    },
    body: 'PING\u0000',
    method: 'POST',
  })
}

export const logUserEvent = async (eventName: string, data?: any) => {
  const isBrowserSupported = await isSupported()
  if (isBrowserSupported) {
    logEvent(analytics, eventName, data)
  }
}

export const downloadContent = async (fileName: string) => {
  const fileUrl = await getDownloadFileUrl(fileName)
  const newWindow = window.open(fileUrl, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
  trackUserDownload(fileName)

  const email = localStorage.getItem('policy-dialogue:email') || null
  logUserEvent('download', { fileName, page: fileName.split('/')[0], email })
}

export const setUserEmail = (email: string) => {
  setUserId(analytics, email)
}
