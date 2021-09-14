import { useState } from "react";
import { authService } from "../firebase";



const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");



  const handleChange = (event) => {
    const {target: {name, value}} = event;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password"){
      setPassword(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (newAccount) {
      //create account
      await authService.createUserWithEmailAndPassword(email, password);
      } else {
      //login
      await authService.signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev)

  return(
    <>
    <form onSubmit={onSubmit} className="container">
      <input name="email" type="text" placeholder="Email" required value={email} onChange={handleChange} className="authInput" />
      <input name="password" value={password} onChange={handleChange} type="password" placeholder="Password" required className="authInput"  />
      <input type="submit" value={newAccount? "create account" : "Log in"} className="authInput authSubmit" />
      {error && <span className="authError">{error}</span>}
    </form>
    <span onClick={toggleAccount} className="authSwitch" >
      {newAccount? <button>Sign in</button> : <button>Create account</button> } 
    </span>
    </>
  );
};

export default AuthForm;