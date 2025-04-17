import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_ICON } from "../Utils/constants";
import { removeSuggestions, toggleGptSearchView } from "../Utils/GPTSlice";
import { changeLang } from "../Utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
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

    return () => unsubscribe();
  }, []);

  const showGptSearch = useSelector(store=>store.gpt.showGptSearch);
  const lang = useSelector(store=>store.config.lang);

  const handleGPTButtonClick = ()=>{
    dispatch(toggleGptSearchView()); 
    dispatch(removeSuggestions())   
  }

  const handleLangChange = (e)=>{    
    dispatch(changeLang(e.target.value))
  }

  return (
    <div className="absolute px-32 z-10 bg-gradient-to-b from-black w-full flex flex-col md:flex-row md:justify-between">
      <div>
        <img src={LOGO} className="w-48 h-24 md:h-auto" alt="logo" />
      </div>

      {user && (
        <div className="flex my-2 mt-0 md:mt-2">
          <button className="bg-purple-700 text-white font-semibold md:h-12 md:w-40 mt-2 hover:scale-105 p-3 rounded-lg absolute left-6 md:static" onClick={handleGPTButtonClick}>
            {showGptSearch ? "Home" :"Search"}   
          </button>
          { showGptSearch && (<select className="bg-black text-white absolute left-24 md:static p-2 mt-3 md:m-4" onChange={handleLangChange}>
            {
              SUPPORTED_LANGUAGES.map((lang)=>(<option key={lang.identifier} value={lang.identifier}> {lang.name}</option> ))
            }
          </select>)}
        </div>
      )}
      {user && (
        <div className=" flex my-0 md:my-2 ">
          {user?.photoURL=== USER_ICON ?
          <img
          className="w-20 h-12 mt-0 md:mt-2 rounded-full  absolute right-[100px] md:static"
          src={user?.photoURL || USER_ICON}
          // src={USER_ICON}
          alt="user-icon"
        />
        : <img
        className="w-12 h-12 mt-0 md:mt-2 rounded-full absolute right-[120px] md:static md:mr-2 "
        src={user?.photoURL || USER_ICON}
        // src={USER_ICON}
        alt="user-icon"
      />
      }
          
          <button
            onClick={handleSignOut}
            className="text-white bg-red-600 font-semibold w-20 h-12 mt-0 md:mt-2 absolute right-8 md:static hover:scale-105 p-2 rounded-lg"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
