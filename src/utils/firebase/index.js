import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup , createUserWithEmailAndPassword} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4NHdB9LqulCC_CM0aHZ4EAA9mJyd16Mk",
  authDomain: "crwn-clothing-db-a311b.firebaseapp.com",
  projectId: "crwn-clothing-db-a311b",
  storageBucket: "crwn-clothing-db-a311b.appspot.com",
  messagingSenderId: "678963034428",
  appId: "1:678963034428:web:48f810ba207364cc800639",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
const db = getFirestore(app);
export const signInWhithGooglePopup = () => signInWithPopup(auth, provider);

export const createUser = async (userAuth) => {
  const userDocumentRef = doc(db, "users", userAuth.uid);
  const snapshot = await getDoc(userDocumentRef);
  if (!snapshot.exists()) {
    const { email, displayName } = userAuth;
    const createdAt = new Date();
    setDoc(userDocumentRef, { email, displayName, createdAt });
  }
};

export const  createAuthUserWithEmailAndPassword= async(email,password)=>{
  createUserWithEmailAndPassword(auth,email,password)
}
