<template>
  <div class="welcome container">
    <p>Welcome</p>
    <div v-if="showLoginForm">
      <h2>Entrar</h2>
      <SignInForm @signIn="enterChat" />
      <p>Ainda não tem uma conta? <span @click="showLoginForm = false">Criar</span></p>
    </div>
    <div v-else>
      <h2>Criar Conta</h2>
      <SignUpForm @signUp="enterChat" />
        <p>Já possui uma conta? <span @click="showLoginForm = true">Entrar</span></p>
    </div>
  </div>
</template>

<script>
  import SignUpForm from '../components/SignUpForm.vue'
  import SignInForm from '../components/SignInForm.vue'

  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  export default {
    components: { SignInForm, SignUpForm },
    setup() {
      const showLoginForm = ref(true)
      const router = useRouter()
     
     const enterChat = () => {
       router.push({ name: 'chatroom' })
      }

      return { showLoginForm, enterChat }
    }
  }
</script>

<style>
  .welcome {
    text-align: center;
    padding: 20px 0;
  }

  /* forms */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }

  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }

  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }

  .welcome span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }

  .welcome button {
    margin: 20px auto;
  }
</style>