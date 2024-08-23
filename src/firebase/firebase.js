import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";



const firebaseConfig = {
    apiKey: "AIzaSyChk0d2tprlI-3EfSWz39HfZYSFPDi38hM",
    authDomain: "simple-firbase-51599.firebaseapp.com",
    projectId: "simple-firbase-51599",
    storageBucket: "simple-firbase-51599.appspot.com",
    messagingSenderId: "715003400543",
    appId: "1:715003400543:web:108fbb1c96565272c026ea",
    measurementId: "G-LP1BW8Z2Q3"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;
    await addDoc(collection(db, "user"),{
      uid: user.uid,
      name,
      authProvider: "local",
    });
    toast.success("User Signup successfully!")
  } catch (error) {
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};


const login = async (email, password) =>{
    try {
        await signInWithEmailAndPassword(auth, email, password)
        toast.success("User Login Successfully!")
    } catch (error) {
      toast.error(error.code.split("/")[1].split("-").join(" "));
    }
}

const logOut = ()=>{
    signOut(auth)
    toast.success("User Log Out Successfully!")
}

export {
    auth, 
    db,
    signUp,
    login,
    logOut
}