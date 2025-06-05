import React from 'react'
import { useState } from 'react';
import UseCard from './UseCard';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const EditProfileCard = ({ user }) => {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [gender, setGender] = useState(user.gender);
    const [age, setAge] = useState(user.age);
    const [about, setAbout] = useState(user.about);
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const [showToast, setShowToast] = useState(false);

    const saveProfile = async () => {
        setError("")
        try {
            const res = await axios.patch(
                BASE_URL + "/profile/edit",
                {
                    firstName,
                    lastName,
                    age,
                    gender,
                    about,
                    photoUrl
                },
                { withCredentials: true }
            );
            dispatch(addUser(res?.data?.data))
            setShowToast(true)
            const i = setInterval(() => {
                setShowToast(false)
            },3000);
        }
        catch (err) {
            setError(err?.response?.data || "Oops something went wrong")
            console.error(err)
        }
    }

    return (
        <>
            <div className="flex justify-center my-10">
                <div className="flex justify-center mx-10">
                    <div className="card card-border bg-base-200 w-96">
                        <div className="card-body">
                            <h2 className="card-title">Edit Profile</h2>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Firstname</label>
                                <input
                                    type="text"
                                    value={firstName}
                                    placeholder="Type here"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Lastname</label>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    value={lastName}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Photo Url</label>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    value={photoUrl}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={(e) => setPhotoUrl(e.target.value)}
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    value={age}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={(e) => setAge(e.target.value)}
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    value={gender}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={(e) => setGender(e.target.value)}
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-1">About</label>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    value={about}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={(e) => setAbout(e.target.value)}
                                />
                            </div>

                            <p className='text-red-500 pl-1 pb-4'>{error}</p>
                            <div className="flex justify-center">
                                <button className="bg-blue-600 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
                                    onClick={saveProfile}
                                >
                                    Save Profile
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <UseCard user={{ firstName, lastName, photoUrl, age, about, gender }} />
            </div>
            {showToast && (<div className="toast toast-top toast-start mt-20">
                <div className="alert alert-success">
                    <span>Profile Saved Successfully</span>
                </div>
            </div>)}
        </>

    )
}

export default EditProfileCard