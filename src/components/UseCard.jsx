import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { removeUserFromFeed } from '../utils/feedSlice';

const UseCard = ({ user }) => {
    if (!user){
        return <h1 className='my-10 flex justify-center'>No more users Found</h1>
    }
    const { firstName, lastName, age, gender, about, skill, photoUrl } = user
    const dispatch = useDispatch();

    const sendRequest = async (status, userId) => {
        try {
            const res = await axios.post(BASE_URL + "/request/send/" + status + "/" + userId, {}, {
                withCredentials: true
            });
            dispatch(removeUserFromFeed(userId))
        }
        catch (err) {
            console.error(err)
        }
    }
    return (
        <div className="card bg-base-300 w-96 shadow-sm ">
            <figure>
                <img
                    src={user.photoUrl}
                    alt={user.firstName} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{firstName + lastName}</h2>
                <p>{age + ", " + gender}</p>
                <p>{about}</p>
                <div className="card-actions justify-center pt-3">
                    <button className="btn btn-primary" onClick={() => sendRequest("ignored", user._id)}>Ignore</button>
                    <button className="btn btn-secondary" onClick={() => sendRequest("intrested", user._id)}>Intrested</button>
                </div>
            </div>
        </div>
    )
}

export default UseCard