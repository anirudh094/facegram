import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import {auth} from "./Firebase/Firebaseconfig";
import SignINwithGoogle from "./loginwithgoogle";
import { useNavigate } from "react-router-dom";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    navigate("/");
    localStorage.clear();
    window.location.reload();
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {authUser ? (
        <>
          {/* <p>{`Signed In as ${authUser.email}`}</p> */}
          <button onClick={userSignOut}>Sign Out</button>
        </>
      ) : (
        <>
          <SignINwithGoogle/>
        </>
      )}
    </div>
  );
};

export default AuthDetails;
