<template>
  <h1>Chatroom</h1>
  <Navbar />
  <Message />
</template>

<script>
import Navbar from '../components/Navbar'
import Message from '../components/Message'
import getUser from '../composables/getuser'
import { useRouter } from 'vue-router'
import { watch } from 'vue'
export default {
  components: { Navbar, Message },
  setup() {
    const { user } = getUser()
    const router = useRouter()

    watch(user, () => {
      if(!user.value) router.push({ name: 'Home'})
    })
    
  }
}
</script>

<style>

</style>