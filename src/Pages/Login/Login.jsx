import "./Login.css"
import login_logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
import { useState } from "react";
import { login, signUp } from "../../firebase/firebase";
import { toast } from "react-toastify";
const Login = () => {
    const [signState, setSignState] = useState("Sign In");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const use_auth = async(e)=>{
        e.preventDefault()
        if(signState === "Sign In"){
            login(email, password)
        }else{
            // password validation
            if(password.length < 6){
                toast.error("Password must be at least 6 characters")
                return
            }
            signUp(name, email, password)
        }
    }
    return (
        <div className="login">
            <Link to="/"><img src={login_logo} alt="" className="login-logo" /></Link>
            <div className="login-form">
                <h1>{signState}</h1>
                <form  onSubmit={use_auth}>
                    {signState  === "Sign Up" && <input type="text" placeholder="your name" value={name} onChange={e=>setName(e.target.value)} />}
                    <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
                    <button type="submit">{signState}</button>
                    <div className="form-help">
                        <div className="remember">
                            <input type="checkbox"/>
                            <label htmlFor="">Remember me</label>
                        </div>
                        <p>Need Help?</p>
                    </div>
                </form>
                <div className="form-switch">
                    {
                        signState ==="Sign In"?<p>New to Netflix? <span onClick={()=>setSignState("Sign Up")}>Sign Up Now</span></p>:
                        <p>Already have account? <span onClick={()=>setSignState("Sign In")}>Sign In Now</span></p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;