import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut  } from "firebase/auth";
import { useEffect, useState } from "react";

import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();

const useFirebase =()=>{
    const [user, setUser]=useState({});
    const [error, setError]=useState('');
    const [isloding, setIsloding]= useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const singInUsingGoogle= () =>{
        setIsloding(true)        
         return signInWithPopup(auth, googleProvider);
    //   .finally(()=>setIsloding(false))
    }

    useEffect(() =>{
     const  unsubscribe = onAuthStateChanged(auth, user=>{
            if(user){
                
                setUser(user);
            }
            else{
                setUser({});     
            }
            setIsloding(false);
        })
        return unsubscribe;
    },[]);

  const logout = () =>{
    setIsloding(true) 
      signOut(auth)
      .then(()=> {
        setUser({});
      })
      .finally(()=> setIsloding(false))
  }


    return {
        user,
        error,
        singInUsingGoogle,
        logout,
        setUser,
        setError,
        setIsloding,
        isloding
    }
     
}


export default useFirebase;