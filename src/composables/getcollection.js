import { ref, watchEffect, onI} from 'vue'
import { projectFirestore } from '../firebase/config'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'

const getCollection = (collectionName) => {
  const documents = ref([])
  const error = ref(null)

  const q = query(collection(projectFirestore, collectionName), orderBy('createdAt'))
  let unsubs = onSnapshot(q, (querySnapshot) => {
    const results = [];
    querySnapshot.forEach(doc => {
      if(doc.data().createdAt) results.push(doc.data())
    });
    documents.value = results
    error.value = null
    }, (err) => {
      documents.value = null
      error.value = 'Error'
  })

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsubs())
  })

  return { error, documents }

}

export default getCollection