import { firebaseClient } from '@/libs/firebase/firebaseClient'
import { getDownloadURL, getStorage, ref } from 'firebase/storage'

export const getDownloadFileUrl = async (filePath: string): Promise<string> => {
  const fileRef = ref(getStorage(firebaseClient), `pdf${filePath}`)
  try {
    const url = await getDownloadURL(fileRef)
    return url
  } catch (error: any) {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error?.code) {
      case 'storage/object-not-found':
        console.error('File does not exist')
        break
      case 'storage/unauthorized':
        console.error("User doesn't have permission to access the object")
        break
      case 'storage/canceled':
        console.error('User canceled the upload')
        break
      case 'storage/unknown':
        console.error('Unknown error occurred, inspect the server response')
        break
    }
    return ''
  }
}
