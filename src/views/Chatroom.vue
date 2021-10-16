<template>
  <div class="container">
    <Navbar />
    <Chat />
    <Message />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Message from '../components/Message'
import Chat from '../components/Chat'
import getUser from '../composables/getuser'
import { useRouter } from 'vue-router'
import { watch } from 'vue'
export default {
  components: { Navbar, Message, Chat },
  setup() {
    const { user } = getUser()
    const router = useRouter()

    watch(user, () => {
      if(!user.value) router.push({ name: 'Home'})
    })
    
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  max-height: 100vh;
  text-align: center;
  background-image: url("../assets/bg.jpg");
  background-size: cover;

}
</style>