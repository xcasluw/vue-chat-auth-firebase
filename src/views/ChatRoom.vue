<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue'
  import NewChatForm from '../components/NewChatForm.vue'
  import ChatWindow from '../components/ChatWindow.vue'
  import GetUser from '../composables/getUser'

  import { ref, watch } from 'vue'
  import { useRouter } from 'vue-router'

  export default {
    components: { Navbar, NewChatForm, ChatWindow },
    setup() {
      const { user } = GetUser()
      const router = useRouter()

      watch(user, () => {
        if (!user.value) {
          router.push({ name: 'Welcome' })
        }
      })
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