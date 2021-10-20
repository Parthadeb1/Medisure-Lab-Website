import { useEffect, useState } from "react"
import initAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut   } from "firebase/auth";


initAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //using google 
    const signInUsingGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            console.log(result.user)
            setUser(result.user);
        })
        .catch(error =>{
            setError(error.message);
        })
        .finally(()=> setIsLoading(false));
    }

    const logOut = () =>{
        setIsLoading(true);
        signOut(auth)
        .then(() =>{
            setUser({})
        })
        .finally(()=> setIsLoading(false));
    }
// observe whether user auth state change or not//
    useEffect(()=>{
       const unsubscribed = onAuthStateChanged(auth,(user) =>{
            if (user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    },[])

    return{
        user,
        error,
        logOut,
        signInUsingGoogle,
        isLoading
    }

}
export default useFirebase;