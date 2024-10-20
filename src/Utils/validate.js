export const checkValidData = (email,password)=>{
    // const isNameValid= name.length>3 && name.length<8;
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/.test(password);

    // if(!isNameValid) return "Name is invalid"
    if(!isEmailValid) return "Email is invalid";
    if(!isPasswordValid) return "Password is invalid (It should have 5+ characters containing atleast 1 digit, 1 lowerCase & 1 upperCase letter)";
    return null;
}