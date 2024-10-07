import { useState } from "react";
import axios from 'axios'


const LoginForm = () =>{
    const [username, setUsername] = useState('');
    const [passwaord, setPasswaord] = useState('');
    const [number,setNumber] = useState();
    const [error, setError] = useState<string | nuull>(null)

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/login", {
                username,
                password,
            });

            console.log("Login successful", response.data);
        } catch (error) {
            setError("Invalid credentials or server error");
        }
    };



    return(
        <>
        </>
    )
}

export default LoginForm;