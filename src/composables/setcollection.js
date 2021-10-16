import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'
import { addDoc, collection } from 'firebase/firestore'

const setCollection = (collectionName) => {
  const error = ref(null)

  const addMessage = async (message) => {
    error.value = null
    
    try {
      await addDoc(collection(projectFirestore, collectionName), message);
    } catch(err) {
      error.value = err.message
    }
  }

  return {
    error,
    addMessage
  }
}

export default setCollection