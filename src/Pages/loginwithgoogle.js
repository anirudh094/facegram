import React, { useEffect, useState } from "react";
import { auth,provider } from "./Firebase/Firebaseconfig";
import {signInWithPopup} from "firebase/auth";
//import "./loginpage.css"

function SignINwithGoogle() {

    const [value,setValue] = useState('');
    const handleClick = ()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
            localStorage.setItem("name",data.user.displayName)
            localStorage.setItem("photo",data.user.photoURL)
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'));
    },[])

    // const logout =()=>{
    //     localStorage.clear();
    //     window.location.reload();
    // }

  return (
    <>
        {value?<p></p>:
            <button onClick={handleClick}>SignIn</button>
        }
        
    </>
  );
};

export default SignINwithGoogle;
