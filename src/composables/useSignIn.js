import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const error = ref(null)

const signIn = async (email, password) => {

  error.value = null

  try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password)
      error.value = null
      console.log(res)
      return res
  } catch(err) {
      console.log(err.value)
      error.value = 'Usuário ou senha inválidos'
  }
}

const useSignIn = () => {
  return { error, signIn}
}

export default useSignIn