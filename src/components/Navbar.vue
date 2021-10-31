<template>
  <nav v-if="user">
    <div class="navbar">
      <div class="name">¡Hey there, {{ user.displayName }}!</div>
      <i @click="logoutUser" class="fas fa-power-off"></i>
    </div>
  </nav>
</template>

<script>
import useLogout from "../composables/logout";
import getUser from "../composables/getuser";
export default {
  setup() {
    const { logout } = useLogout();
    const { user } = getUser();

    const logoutUser = async () => await logout();

    return {
      logoutUser,
      user
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  width: 85%;
  max-width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background-color: #6D23AB;
  border: 2px solid #000;
  border-bottom: none;
  border-radius: 20px 20px 0 0;

  i.fas {
    font-size: 2rem;
    color: #fff;
    text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000,
      1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
    cursor: pointer;
  }

  .name {
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: 0.2rem;
    color: #fff;
    text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000,
      1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
  }
}
</style>