<template>
  <form @submit.prevent="signUp">
    <label for="user">User name</label>
    <input type="text" v-model="user" id="user" required>
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
import useSignup from '../composables/signup'

export default {
  setup(props, context) {
    const { error, signup } = useSignup()
    const email = ref('')
    const user = ref('')
    const password = ref('')

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

<style lang="scss" scoped>
.error {
  font-size: 0.75rem;
  color: #ff6d6d;
}
</style>