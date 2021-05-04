import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const error = ref(null)

const signOut = async () => {
  error.value = null

  try {
      await projectAuth.signOut()
  } catch(err) {
      console.log(err.message)
      error.value = err.message
  }
}

const useSignOut = () => {
  return { error, signOut }
}

export default useSignOut