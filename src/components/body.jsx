import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';
import Footer from './Footer';


const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const UserData = useSelector(store => store.user);

    const fetchUser = async () => {
        try {
            if (UserData) {
                return
            }
            const res = await axios.get(BASE_URL + "/profile/view", {
                withCredentials: true
            });
            dispatch(addUser(res.data))
        }
        catch (err) {
            if (err.status === 401) {
                navigate("/login")
            }
            console.error(err)
        }
    }

    useEffect(() => {
        fetchUser();
    }, [])

    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar />
            <div className="flex-grow">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Body;