<template>
  <form class="message-area">
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
        id: user.value.uid,
        author: user.value.displayName,
        photo: user.value.photoURL,
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
form.message-area {
  width: 85%;
  max-width: 800px;
}

textarea {
  display: block;
  width: 100%;
  padding-left: 1rem;
  padding-top: 1rem;
  resize: none;
  border: none;
  border-radius: 0 0 20px 20px;
  background-color: #949494;
  border: 2px solid #000;
  border-top: none;
}

textarea::placeholder {
  color: #222222;
}
</style>