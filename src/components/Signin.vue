<template>
  <form class="sign-form" @submit.prevent="signIn">
    <input type="email" v-model="email" id="email" placeholder="Email" required>
    <input type="password" v-model="password" id="password" placeholder="Password" required>
    <div class="error" v-if="error">{{ error }}</div>
    <div class="buttons">
      <div class="sign-button" @click="close"><p>Cancel</p></div>
      <button class="sign-button" type="submit">Sign in</button>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../composables/login'

export default {
  setup(props, context) {
    const { error, login } = useLogin()
    const email = ref('');
    const password = ref('');

    const signIn = async () => {
      await login(email.value, password.value)
      if(!error.value) context.emit('enter')
    }

    const close = () => context.emit('close');

    return {
      email,
      password,
      signIn,
      close,
      error
    }
  }
}
</script>
