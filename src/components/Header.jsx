import React,{useEffect} from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/store/userSlice";
import { useDispatch } from "react-redux";
import { LOGO_URL } from "../utils/constants";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //subscribing to the app
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  //using firebase api for dispatching an action
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component unmounts
    return ()=> unsubscribe();
  });

  return (
    <div className="absolute py-2 w-screen bg-gradient-to-b from-black z-40 flex justify-between">
      <img
        className="w-44"
        src={LOGO_URL}
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
          <img className="w-12 h-12" src={user?.photoURL} alt="userIcon" />
          <button className="font-bold text-white" onClick={handleSignOut}>
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
