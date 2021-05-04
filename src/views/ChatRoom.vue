<template>
  <div class="container">
    <Navbar />
  </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue'

  import { ref } from 'vue'

  export default {
    components: { Navbar },
    setup() {
      const showLoginForm = ref(true)
      return { showLoginForm }
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