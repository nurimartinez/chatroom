<template>
  <form>
    <textarea 
    placeholder="Write your message and press enter..."
    v-model="message"
    @keypress.enter="sendMessage"
    ></textarea>
    <div>{{ error }}</div>
  </form>
</template>

<script>
import getUser from '../composables/getuser'
import setCollection from '../composables/setcollection'
import { timestamp } from '../firebase/config'
import { ref } from 'vue'
export default {
  setup() {
    const { error, addMessage } = setCollection('messages')
    const { user } = getUser()
    const message = ref()

    const sendMessage = async () => {
      const newMessage = {
        author: user.value.displayName,
        message: message.value,
        createdAt: timestamp
      }
      await addMessage(newMessage)
      if(!error.value) message.value = '';
    }

    return {
      message,
      sendMessage,
      error
    }
  }
}
</script>

<style>

</style>