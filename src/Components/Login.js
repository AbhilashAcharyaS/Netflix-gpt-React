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
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // console.log(name?.current?.value);

    // console.log(email.current.value);
    // console.log(password.current.value);
    const message = checkValidData(email.current.value, password.current.value);
    // console.log(message);
    setErrorMessage(message);

    if (message) return;
    if (!isSignInForm) {
      //signup

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
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
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
          // ..
        });
    } else {
      //sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
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

      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-12 bg-black absolute bg-opacity-80 w-4/5 md:w-1/3 mx-auto my-48 md:my-32 right-0 left-0 rounded-xl"
      >
        <h2 className="font-bold text-3xl text-center md:text-left text-white py-2 mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            ref={name}
            className="p-2 my-2 w-full rounded-md text-white bg-black border border-white py-4"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          ref={email}
          className="p-2 my-2 w-full rounded-md text-white bg-black border border-white py-4"
        />
        <input
          type="password"
          placeholder="Password"
          ref={password}
          className="p-2 my-2 w-full rounded-md text-white bg-black border border-white py-4"
        />

        <p className="text-red-500">{errorMessage} </p>
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
