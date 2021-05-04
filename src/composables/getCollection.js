import { ref, watchEffect } from 'vue'
import { projetcFirestore } from '../firebase/config'

const getCollection = (collection) => {
  const error = ref(null)
  const documents = ref(null)

  let collectionRef = projetcFirestore.collection(collection)
    .orderBy('createdAt')

  const unsub = collectionRef.onSnapshot((snap) => {
    let results = []

    snap.docs.forEach(doc => {
      doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
    })
    documents.value = results
    error.value = null
  }, (err) => {
    console.log(err.message)
    documents.value = null
    error.value = 'Houve um erro ao tentar recuperar mensagens'
  })

  watchEffect((onInvalidate) => {
    // unsub from prev collection when watcher is stopped (component unmounted)
    onInvalidate(() => unsub())
  })

  return { documents, error }
}

export default getCollection