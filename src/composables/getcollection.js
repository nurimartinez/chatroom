import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'
import { collection, onSnapshot, query } from 'firebase/firestore'

const getCollection = (collectionName) => {
  const documents = ref([])
  const error = ref(null)

  const q = query(collection(projectFirestore, collectionName))
  onSnapshot(q, (querySnapshot) => {
    const results = [];
    querySnapshot.forEach((doc) => results.push(doc.data()));
    documents.value = results
    error.value = null
    }, (err) => {
      documents.value = null
      error.value = 'Error'
  })

  return { error, documents }

}

export default getCollection