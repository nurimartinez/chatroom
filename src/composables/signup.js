import { createUserWithEmailAndPassword, updateProfile } from '@firebase/auth';
import { projectAuth } from '../firebase/config'
import { ref } from 'vue'

const error = ref(null);

const signup = async (email, password, user) => {

  error.value = null;
  const photos = [ './assets/parrot.jpg', './assets/rhino.jpg', './assets/turtle.jpg'];
  const number = Math.round(Math.random()*2)

  try {
    const res = await createUserWithEmailAndPassword(projectAuth, email, password)
    if(!res) throw new Error('The sign up was not possible');
    console.log(res.user)
    await updateProfile(projectAuth.currentUser, { displayName: user, photoURL: photos[number] })
    error.value = null
    return res
  } catch(err) {
    console.log(err.message);
    error.value = err.message.slice(10);
  }

}

const useSignup = () => {
  return { error, signup }
}

export default useSignup