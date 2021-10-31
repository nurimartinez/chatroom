import { initializeApp } from 'firebase/app'
import { getFirestore, serverTimestamp } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA3no20UQZ4-OY6fyuSsRLDPRTA62uU_9E",
  authDomain: "lokko-chatroom.firebaseapp.com",
  projectId: "lokko-chatroom",
  storageBucket: "lokko-chatroom.appspot.com",
  messagingSenderId: "637087996073",
  appId: "1:637087996073:web:67a1700190e841281bf1b8"
};

// Init Firebase
const app = initializeApp(firebaseConfig)
const projectAuth = getAuth(app)
const projectFirestore = getFirestore()
const timestamp = serverTimestamp()

export { projectAuth, projectFirestore, timestamp }