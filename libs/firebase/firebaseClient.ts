import { Analytics, getAnalytics } from 'firebase/analytics'
import { FirebaseApp, initializeApp } from 'firebase/app'
// import { AppCheck, initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check'
import { FirebaseStorage, getStorage } from 'firebase/storage'

let firebaseClient: FirebaseApp
let storage: FirebaseStorage
let analytics: Analytics
// let appCheck: AppCheck

const firebaseConfig = {
  apiKey: 'AIzaSyA8zlz8nCahtP4NslgVsRuxmFf7OXQGM3M',
  authDomain: 'policy-dialogue.firebaseapp.com',
  projectId: 'policy-dialogue',
  storageBucket: 'policy-dialogue.appspot.com',
  messagingSenderId: '104941627354',
  appId: '1:104941627354:web:b5f44ebdb9ee927b34c2e3',
}

if (typeof window !== 'undefined' && !window.firebase) {
  firebaseClient = initializeApp(firebaseConfig)
  // appCheck = initializeAppCheck(firebaseClient, {
  //   provider: new ReCaptchaV3Provider(process.env['NEXT_PUBLIC_RECAPTCHA_SITE_KEY'] ?? ''),
  //   // Optional argument. If true, the SDK automatically refreshes App Check
  //   // tokens as needed.
  //   isTokenAutoRefreshEnabled: true,
  // })
  ;(window as any).firebase = firebaseClient
  storage = getStorage(firebaseClient)
  analytics = getAnalytics(firebaseClient)
}

export { firebaseClient, storage, analytics }
