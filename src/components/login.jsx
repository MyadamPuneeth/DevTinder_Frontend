import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import {BASE_URL} from '../utils/constants'

const Login = () => {

    const [emailId, setEmailId] = useState("Super@gmail.com");
    const [password, setPassword] = useState("Super@123");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async() => {
        try {
            const res = await axios.post( BASE_URL + "/login",{
                emailId,
                password
            },{withCredentials:true})
            dispatch(addUser(res.data))
            return navigate("/")
        }
        catch (err){
            console.log(err.message);
        }
    }

    return (
        <div className='flex justify-center my-10'>
            <div className="card card-border bg-base-200 w-96">
                <div className="card-body">
                    <h2 className="card-title">Login</h2>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            value={emailId}
                            placeholder="Type here"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setEmailId(e.target.value)}
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="Type here"
                            value={password}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-blue-600 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
                        onClick={handleLogin}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login