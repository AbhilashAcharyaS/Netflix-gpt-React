import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../Utils/firebase"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../Utils/userSlice";


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store=>store.user);
  const handleSignOut = ()=>{
    signOut(auth).then(()=>{
    }).catch((error)=>{
      navigate("/error");
    })
  }

  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName,photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL:photoURL }));
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }
    });
  }, []);

  return (
    <div className="absolute px-32 z-10 bg-gradient-to-b from-black to-transparent w-full flex justify-between">
        <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" className="w-48 " alt="logo"/>

        {user && <div className="flex my-2">
          <img className="w-20 h-12 mt-2"
          // src={user?.photoURL}
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
          alt="user-icon"/>
          <button onClick={handleSignOut} className="text-white bg-red-600 font-semibold w-20 h-12 mt-2 hover:scale-105 p-2 rounded-lg">Sign Out</button>
        </div>}
    </div>
  )
}

export default Header