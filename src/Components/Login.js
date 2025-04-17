import { useState } from "react";
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
import { BG_IMG_URL, USER_ICON } from "../Utils/constants";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  // const name = useRef(null);
  const [name, setName] = useState("TestUser");
  const [email, setEmail] = useState("testUser@gmail.com");
  const [password, setPassword] = useState("testUser#321@");
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    // document.getElementById("signInForm").reset();
    setErrorMessage(null);
  };

  // const onInputButtonValueChange = ()=>{
  //   setErrorMessage(null);
  // }

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

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name,
            photoURL:USER_ICON,
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
          // const errorCode = error.code;
          let errorMessage = error.message;
          if (errorMessage === "Firebase: Error (auth/network-request-failed).")
            errorMessage = "Check your Internet connection!";
          if (errorMessage === "Firebase: Error (auth/invalid-credential).")
            errorMessage = "Invalid credentials, Check your password!";
          if (errorMessage === "Firebase: Error (auth/email-already-in-use).")
            errorMessage = "Account already exists! Please Sign In.";
          setErrorMessage(errorMessage);
          // ..
        });
    } else {
      //sign in
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          let errorMessage = error.message;
          if (errorMessage === "Firebase: Error (auth/network-request-failed).")
            errorMessage = "Check your Internet connection!";
          if (errorMessage === "Firebase: Error (auth/invalid-credential).")
            errorMessage = "Invalid credentials, Check your password!";
          if (
            errorMessage ===
            "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."
          )
            errorMessage =
              "Access to this account has been temporarily disabled due to many failed login attempts. You can try again later.";

          setErrorMessage(errorMessage);
        });
    }
  };

  const handleGoogleSignUp = async () => {
    const provider = await new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...

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
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        setErrorMessage(errorMessage);
      });
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
        id="signInForm"
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
            onChange={(e) => {
              setName(e.target.value);
              setErrorMessage(null);
            }}
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
          onChange={(e) => {
            setEmail(e.target.value);
            setErrorMessage(null);
          }}
          className="p-2 my-2 w-full rounded-md text-white bg-black border border-white py-4"
        />
        <input
          type="password"
          // onChange={onInputButtonValueChange}
          placeholder="Password"
          value={password}
          // ref={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrorMessage(null);
          }}
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
            {isSignInForm ? "New to NetflixGPT? " : "Already a User? "}
          </span>
          <span
            className="text-white text-md my-4 cursor-pointer hover:border-b font-semibold"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign up now." : "Sign In now."}
          </span>
          <div className="text-white">
            <p className="text-center my-4">or</p>
            <button className="w-2/3 block mx-auto right-0 left-0 border rounded-xl py-1 bg-opacity-0" onClick={handleGoogleSignUp}>
              <p className="">Login with <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 48 48"
                  className="inline mb-1"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg></p>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
