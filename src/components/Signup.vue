<template>
  <form class="sign-form" @submit.prevent="signUp">
    <input type="text" v-model="user" id="user" placeholder="User name" required>
    <input type="email" v-model="email" id="email" placeholder="Email" required>
    <input type="password" v-model="password" id="password" placeholder="Password" required>
    <div class="error" v-if="error">{{ error }}</div>
    <div class="buttons">
      <div class="sign-button" @click="close">Cancel</div>
      <button class="sign-button" type="submit">Sign Up</button>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/signup'

export default {
  setup(props, context) {
    const { error, signup } = useSignup()
    const email = ref('')
    const user = ref('')
    const password = ref('')
    error.value = null;

    const signUp = async () => {
      await signup(email.value, password.value, user.value);
      if(!error.value) context.emit('enter')
    }

    const close = () => context.emit('close')

    return {
      email,
      user,
      password,
      signUp,
      close,
      error
    }
  }
}
</script>

