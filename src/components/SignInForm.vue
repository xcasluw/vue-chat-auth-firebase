<template>
    <form @submit.prevent="handleSubmit">
        <input type="email" required placeholder="E-mail" v-model="email">
        <input type="password" required placeholder="Password" v-model="password">
        <div class="error">
            {{ error }}
        </div>
        <button>Sign In</button>
    </form>
</template>

<script>
  import { ref } from 'vue'
  import useSignIn from '../composables/useSignIn'

  export default {
      setup(props, context) {
          // refs
          const email = ref('')
          const password = ref('')

          const { error, signIn } = useSignIn()

          const handleSubmit = async () => {
              await signIn(email.value, password.value)
              if (!error.value) {
                  context.emit('signIn')
              }
          }

          return { email, password, handleSubmit, error }
      }
  }
</script>

<style>

</style>