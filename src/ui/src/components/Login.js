import { useState } from 'react';
import { encode } from "base-64";
import { useNavigate } from 'react-router';
import { HOME } from '../constants/routes'

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            fetch("/login", {
                method: "POST",
                headers: new Headers({
                'Authorization': 'Basic ' + encode(email + ":" + password),
                'Content-Type': 'text/html; charset=utf-8'
                })
            }).then((res) => res.text()
            ).then((data) => {
                console.log(data);
                navigate(HOME, {state: data});
            }
            )
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <h3>Login here</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='email' value={email} onChange={handleEmail}/>
                <input type="password" placeholder='password'value={password} onChange={handlePassword}/>
                <input type="submit" />
            </form>
        </div>
    );
}

export default Login;