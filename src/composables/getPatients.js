import { ref, watchEffect } from 'vue'
import { projetcFirestore } from '../firebase/config'

const getPatients = (collection, user) => {
  const error = ref(null)
  const documents = ref(null)

  let collectionRef = projetcFirestore.collection(collection)
    .where('careTeamId', '==', 3)

  const unsub = collectionRef.onSnapshot((snap) => {
    let results = []

    snap.docs.forEach(doc => {
      doc.data().email && results.push({ ...doc.data(), id: doc.id })
    })
    documents.value = results
    error.value = null
  }, (err) => {
    console.log(err.message)
    documents.value = null
    error.value = 'Houve um erro ao tentar recuperar pacientes'
  })

  watchEffect((onInvalidate) => {
    // unsub from prev collection when watcher is stopped (component unmounted)
    onInvalidate(() => unsub())
  })

  return { documents, error }
}

export default getPatients