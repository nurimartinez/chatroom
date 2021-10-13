import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const user = ref(projectAuth.currentUser)

projectAuth.onAuthStateChanged(chatUser => {
  console.log(chatUser)
  user.value = chatUser
})

const getUser = () => {
  return { user }
}

export default getUser