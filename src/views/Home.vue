<template>
  <div class="container">
    <img src="../assets/logo.png" />
    <h1>Lokko Chatroom</h1>
    <div class="main" v-if="buttons">
      <button @click="toggleSignUp">Sign Up</button>
      <button @click="toggleSignIn">Sign In</button>
    </div>
    <SignUp class="main" v-if="signUp" @close="toggleSignUp" @enter="enterChatroom" />
    <SignIn class="main" v-if="signIn" @close="toggleSignIn" @enter="enterChatroom" />
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { ref } from 'vue';
import SignUp from '../components/Signup'
import SignIn from '../components/Signin'

export default {
  name: "Home",
  components: { SignUp, SignIn },
  setup() {
    const router = useRouter()
    const buttons = ref(true);
    const signUp = ref(false);
    const signIn = ref(false);
    
    const toggleSignUp = () => { 
      signUp.value = !signUp.value
      buttons.value = !buttons.value
    }
    const toggleSignIn = () => { 
      signIn.value = !signIn.value
      buttons.value = !buttons.value
    }

    const enterChatroom = () => router.push({ name: 'Chatroom' })

    return {
      buttons,
      signUp,
      signIn,
      toggleSignUp,
      toggleSignIn,
      enterChatroom
    }
  }
};
</script>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  background-image: url("../assets/bg.jpg");
  background-size: cover;

  img {
    width: 80%;
    max-width: 200px;
  }

  h1 {
    margin-bottom: 1.5rem;
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 0.2rem;
    color: #fff;
    text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;

  }
}

.main {
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  button {
    width: 80%;
    margin: 0.35rem;
    padding: 0.75rem 1.5rem;
    border: 3px solid #000;
    border-radius: 30px;
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: 0.2rem;
    cursor: pointer;
    background-color: #63B4B8;
    color: #fff;
    text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
  }

  button:last-child {
    background-color: #A9E4D7;
  }

  button:hover {
    background-color: #04858b;
  }
}

.error {
  font-size: 0.75rem;
  color: #ff6d6d;
}

.sign-form {
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #6D23AB;
  border: 3px solid #000;
  border-radius: 30px;

  input {
    width: 80%;
    margin: 0.4rem 0;
    padding: 0.4rem 1.5rem;
    background-color: #D3B6F4;
    border: 1px solid #000;
    border-radius: 15px;
  }

  .buttons {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.25rem;

    .sign-button {
      width: 48%;
      padding: 0.7rem 1.5rem;
      border: 2px solid #000;
      border-radius: 15px;
      font-size: 0.9rem;
      font-weight: bold;
      letter-spacing: 0.2rem;
      cursor: pointer;
      background-color: #63B4B8;
      color: #fff;
      text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;

      p {
        margin: 0;
        padding: 0;
      }
    }

    .sign-button:last-child {
      background-color: #A9E4D7;
    }

    .sign-button:hover {
      background-color: #04858b;
    }
  }
}

</style>
