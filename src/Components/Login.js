import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/validate";
import { auth } from "../Utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { BG_IMG_URL } from "../Utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  // const name = useRef(null);
  const[name, setName] = useState('TestUser')
  const [email,setEmail] = useState('testUser@gmail.com');
  const [password,setPassword] = useState('testUser#321@');
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    // document.getElementById("signInForm").reset();
    setErrorMessage(null);
  };

  const onInputButtonValueChange = ()=>{
    setErrorMessage(null);
  }

  const handleButtonClick = () => {
    // console.log(name?.current?.value);

    // console.log(email.current.value);
    // console.log(password.current.value);
    const message = checkValidData(email, password);
    // console.log(message);
    setErrorMessage(message);

    if (message) return;
    if (!isSignInForm) {
      //signup

      createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name,
            photoURL: "https://avatars.githubusercontent.com/u/49024964?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          let errorMessage = error.message;
          if(errorMessage === "Firebase: Error (auth/network-request-failed).") errorMessage="Check your Internet connection!";
          if(errorMessage === "Firebase: Error (auth/invalid-credential).") errorMessage="Invalid credentials, Check your password!"; 
          if(errorMessage === "Firebase: Error (auth/email-already-in-use).") errorMessage="Account already exists! Please Sign In.";
          setErrorMessage(errorMessage);
          // ..
        });
    } else {
      //sign in
      signInWithEmailAndPassword(
        auth,
        email,
        password
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          let errorMessage = error.message;
          if(errorMessage === "Firebase: Error (auth/network-request-failed).") errorMessage="Check your Internet connection!";
          if(errorMessage === "Firebase: Error (auth/invalid-credential).") errorMessage="Invalid credentials, Check your password!"; 
          if(errorMessage === "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).") errorMessage="Access to this account has been temporarily disabled due to many failed login attempts. You can try again later."
          
          setErrorMessage(errorMessage);
        });
    }
  };
  return (
    <div className="">
      <Header />

      <div className="absolute brightness-75">
        <img
          src={BG_IMG_URL}
          alt="Trending movies"
          className="h-screen object-cover md:w-screen md:h-screen"
        />
      </div>

      <form id="signInForm"
        onSubmit={(e) => e.preventDefault()}
        className="p-12 sm:px-12 sm:py-8 bg-black absolute bg-opacity-80 w-4/5 md:w-1/3 mx-auto my-40 md:my-24 right-0 left-0 rounded-xl"
      >
        <h2 className="font-bold text-3xl text-center md:text-left text-white py-2 mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e)=>{setName(e.target.value); setErrorMessage(null)}}
            minLength={3}
            // ref={name}
            className="p-2 my-2 w-full rounded-md text-white bg-black border border-white py-4"
          />
        )}
        <input
          type="text"
          // onChange={onInputButtonValueChange}
          placeholder="Email Address"
          value={email}
          onChange={(e)=>{setEmail(e.target.value); setErrorMessage(null)}}
          className="p-2 my-2 w-full rounded-md text-white bg-black border border-white py-4"
        />
        <input
          type="password"
          // onChange={onInputButtonValueChange}
          placeholder="Password"
          value={password}
          // ref={password}
          onChange={(e)=>{setPassword(e.target.value); setErrorMessage(null)}}
          className="p-2 my-2 w-full rounded-md text-white bg-black border border-white py-4"
        />

        <p className="text-red-500 w-full text-center">{errorMessage} </p>
        <button
          className="px-4 py-2 bg-red-700 text-white w-full  rounded-md my-2  border border-white font-bold opacity-100"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <div className="my-4">
          <span className="text-gray-400">
            {isSignInForm ? "New to Netflix? " : "Already a User? "}
          </span>
          <span
            className="text-white text-md my-4 cursor-pointer hover:border-b font-semibold"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign up now." : "Sign In now."}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
