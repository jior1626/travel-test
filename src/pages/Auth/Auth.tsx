import { useState } from "react";
import "./Auth.css"
import Login from "./Login/Login";
import Register from "./Register/Register";

const Auth = () => {

    const [isLogin, setIsLogin] = useState(true);

    return (
        <>
            {isLogin ? <Login /> : <Register />}
        </>
    )
}

export default Auth;