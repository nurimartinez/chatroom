<template>
  <form @submit.prevent="signIn">
    <label for="email">Email</label>
    <input type="email" v-model="email" id="email" required>
    <label for="password">Password</label>
    <input type="password" v-model="password" id="password" required>
    <div class="error" v-if="error">{{ error }}</div>
    <div class="buttons">
      <div @click="close">Cancel</div>
      <button type="submit">Sign Up</button>
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

<style lang="scss" scoped>
.error {
  font-size: 0.75rem;
  color: #ff6d6d;
}
</style>