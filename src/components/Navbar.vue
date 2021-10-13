<template>
  <h2>Navbar</h2>
  <div v-if="user">
    <div>{{ user.displayName }}</div>
    <img :src="user.photoURL" alt="">
  </div>
  <button @click="logoutUser">Logout</button>
</template>

<script>
import useLogout from '../composables/logout'
import getUser from '../composables/getuser'
export default {
  setup(props, context) {
    const { error, logout } = useLogout()
    const { user } = getUser()

    const logoutUser = async () => await logout()

    return {
      logoutUser,
      user
    }

  }
}
</script>

<style lang="scss" scoped>
img {
  width: 35px;
}
</style>