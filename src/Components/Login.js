import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/validate";

const Login = ()=>{

    const [isSignInForm, setIsSignInForm] = useState(true);
    const name=useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick= ()=>{
        // console.log(name?.current?.value);
        
        console.log(email.current.value);
        console.log(password.current.value);
        const message = checkValidData(email.current.value,password.current.value)
        console.log(message);
        setErrorMessage(message);
        
    }
    return (
        <div className="">

            <Header/>

            <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg" alt='Trending movies' className=""/>
            </div>

            <form onSubmit={(e)=>e.preventDefault()} className="p-12 bg-black absolute bg-opacity-80 w-1/3 mx-auto my-32 right-0 left-0 rounded-xl">
                <h2 className="font-bold text-3xl text-white py-2 mb-6">{isSignInForm? "Sign In":"Sign Up"}</h2>
                {!isSignInForm && <input type="text" placeholder="Full Name" ref={name} className="p-2 my-2 w-full rounded-md text-white bg-black border border-white py-4"/>}
                <input type="text" placeholder="Email Address" ref={email} className="p-2 my-2 w-full rounded-md text-white bg-black border border-white py-4"/>
                <input type="password" placeholder="Password" ref={password} className="p-2 my-2 w-full rounded-md text-white bg-black border border-white py-4"/>

                <p className="text-red-500">{errorMessage} </p>
                <button className="px-4 py-2 bg-red-700 text-white w-full  rounded-md my-2  border border-white font-bold opacity-100" onClick={handleButtonClick}>{isSignInForm? "Sign In" : "Sign Up"}</button>

                <div className="my-4">
                <span className="text-gray-400">{isSignInForm? "New to Netflix? " : "Already a User? "}</span> 
                <span className="text-white text-md my-4 cursor-pointer hover:border-b font-semibold" onClick={toggleSignInForm}>{isSignInForm? "Sign up now." : "Sign In now."}</span>
                </div>
                 

            </form>
        </div>
    )
}

export default Login;