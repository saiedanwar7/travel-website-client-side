// import { getAuth, GoogleAuthProvider, signInWithPopup,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
// import { useEffect, useState } from "react";
// import initializeAuthentication from "../Firebase/firebase.init";


// initializeAuthentication();

// const useFirebase = () =>{
//     const auth = getAuth();
//     const googleProvider = new GoogleAuthProvider();

//      const[user, setUser] = useState([]);
//      const [isLogin, setIsLogin] = useState(true)

//     //  const[error, setError] = useState('');
//     //  const[email, setEmail] = useState('');
//     //  const[password, setPassword] = useState('');
//     //  const[name, setName] = useState("");
    
//     // console.log(isLogin);

 


//     /*----- Google Sign IN ------ */ 

//     const signInUsingGoogle = () =>{
//         // signInWithPopup(auth, googleProvider)
//         // .then(result=>{
//         //     console.log(result.user)
//         //     setUser(result.user)
//         // })
//         setIsLogin(true);
//         return signInWithPopup(auth, googleProvider)
//         // .catch((error =>{
//         //     setError(error.message)
//         // }))
//     };
//     const handleError = () =>{
//         setError('')
//     }

//   //----- Auth Object -----
//   useEffect(() =>{
//     onAuthStateChanged(auth, user=>{
//         if(user){
//            // console.log('inside state change', user);
//             setUser(user);
//         }
//         else{

//         }
//         setIsLogin(false);
//     })
// }, []);


//   // ----- signOut -------
//   const logOut = () =>{
//     setIsLogin(true)
//     signOut(auth)
//     .then(() => {
//         setUser({})
        
//       })
//       .finally(() => setIsLogin(false))
//     };  
// //       .catch((error) => {
// //         setError(error.message)
// //       });
// // }




//   // //----- email ------

//   //    const handleEmailChange = e =>{
//   //        setEmail(e.target.value);
//   //        setError("")
//   //    }

//   //  //------- Password --------

//   //  const handlePasswordChange = e =>{
//   //   setPassword(e.target.value);
//   // }

//   // //---------- Name -----------

//   // const handleNameChange = e =>{
//   //     setName(e.target.value);
//   //     setError("") 
//   // }


//   //------- display-user ---------

//    const setUserName = () =>{
//        updateProfile(auth.currentUser, {
//             displayName: name
//        })
//             .then(result =>{ })
//    }
  
//    //--------- User Registration -----------

//    const handleRegistration = e => {
//     e.preventDefault();
//     // console.log(email, password,name);

//     if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
//         setError('invaild email address')
//         return
//     }
//     if (password.length < 6) {
//         setError('password must be at least 6 characters long')
//         return
//     };
//     if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
//         setError('password must be at least 2 characters Upper case')
//         return
//     };

  
//     createUserWithEmailAndPassword(auth, email, password)
//         .then(result => {
//             setUserName()
//             const info = {...result.user, displayName: name}
//             setUser(info)
//             setError("");
//            // console.log(result.user);
            
//         })

// };




//   //------------- User Login -------------
//      const handleLogin = e =>{
//       e.preventDefault();
//         signInWithEmailAndPassword(auth, email, password)
//         .then(result =>{
//             const user = result.user;
//             setUser(user)
//             setError('')
//     })

//     .catch(error => {
//         setError(error.message)
//       //  console.log(error);
//         setError("Your Email & Password Is Worng");
//     })

    

//   }




  
    
//     return{
//         user,
//         error,
//         signInUsingGoogle,
//         logOut,
//         handleRegistration,
//         isLogin,
//         setIsLogin,
//         handleLogin,
//         handleError


//     };


// }


// export default useFirebase;


//-------------------- ------------

import initAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";


initAuthentication();

const useFirebase = () => {

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState([]);
    const [isLodding, setIsLodding] = useState(true)

    const signInUsingGoogle = () => {
        setIsLodding(true);
        // return signInWithPopup(auth, googleProvider)
        return signInWithPopup(auth, googleProvider)
           


    };

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                // console.log("inside", user);
                setUser(user)
            }
            else {

            }
            setIsLodding(false);
        })
    }, []);

    // Log out/ Sign out
    const logOut = () => {
        setIsLodding(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLodding(false))
    };

    return {
        user,
        logOut,
        signInUsingGoogle,
        isLodding
    };
}

export default useFirebase;