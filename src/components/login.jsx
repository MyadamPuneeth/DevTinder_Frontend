import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { redirect, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants'

const Login = () => {

    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [isLoginForm, setIsLoginForm] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleLogin = async () => {
        try {
            const res = await axios.post(BASE_URL + "/login", {
                emailId,
                password
            }, { withCredentials: true })
            dispatch(addUser(res.data))
            return navigate("/")
        }
        catch (err) {
            setError(err?.response?.data || "Oops Something went wrong")
            console.log(err.message);
        }
    }

    const handleSignup = async () =>{
        try {
            const res = await axios.post(BASE_URL+"/signup",
                {firstName, lastName, emailId, password},
                {withCredentials:true}
            );
            setIsLoginForm(true)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='flex justify-center my-10'>
            <div className="card card-border bg-base-200 w-96">
                <div className="card-body">
                    <h2 className="card-title flex justify-center">{isLoginForm ? "Login" : "Sign Up"}</h2>
                    {!isLoginForm && <>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                            <input
                                type="email"
                                value={firstName}
                                placeholder="Type here"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                            <input
                                type="email"
                                value={lastName}
                                placeholder="Type here"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div></>}

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1 mx-1">Email</label>
                        <input
                            type="email"
                            value={emailId}
                            placeholder="Type here"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setEmailId(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1 mx-1">Password</label>
                        <input
                            type="password"
                            placeholder="Type here"
                            value={password}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <p className='text-red-500 pl-1 pb-4'>{error}</p>
                    <div className="flex justify-center">
                        <button className="bg-blue-600 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
                            onClick={isLoginForm? handleLogin : handleSignup}
                        >
                            {isLoginForm? "Login":"Sign Up"}
                        </button>
                    </div>
                    <p onClick={() => setIsLoginForm((value) => !value)} className='text-blue-500 m-auto mt-4 hover:underline hover:text-blue-800 hover:cursor-pointer'>{isLoginForm? "Not a User? Sign Up here": "Existing user? Login here"}</p>
                </div>
            </div>
        </div>
    )
}
export default Login