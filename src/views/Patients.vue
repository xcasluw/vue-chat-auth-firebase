<template>
  <div class="container">
    <Navbar />
    <div v-if="documents">
      <div class="patients" v-for="patient in documents" :key="patient.id">
          <div>
              <p>{{ patient.name }}</p>
              <p class="email">{{ patient.email }}</p>
          </div>
          <button @click="handleClick">Iniciar Chat</button>
      </div>
    </div>
  </div>
</template>

<script>
  import getPatients from '../composables/getPatients'
  import getCollection from '../composables/getCollection'
  import Navbar from '../components/Navbar.vue'
  import GetUser from '../composables/getUser'

  import { ref, watch, computed } from 'vue'
  import { useRouter } from 'vue-router'

  export default {
    components: { Navbar },
    setup() {
      const { user } = GetUser()
      const router = useRouter()

      const { error, documents } = getPatients('users-saas', user.value)
      // const { error, documents } = getCollection('users-saas')

      const formattedDocuments = computed(() => {
        if (documents.value) {
          return documents.value.map(doc => {
            return { ...doc }
          })
        }
      })

      watch(user, () => {
        if (!user.value) {
          router.push({ name: 'Welcome' })
        }
      })

      return { error, documents, user, formattedDocuments }
    }
  }
</script>

<style scoped>

    .patients {
      padding: 20px;
      border-bottom: 1px solid #eee;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .patients p {
        margin: 2px auto;
        font-size: 16px;
        color: #444;
    }

    .patients p.email {
        font-size: 14px;
        color: #999;
    }

    button {
      background-color: #444;
    }
</style>