import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addRequest, removeRequest } from '../utils/reqSlice'

const requests = () => {

    const requests = useSelector(store => store.request)
    const dispatch = useDispatch();

    const fetchRequest = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/request/pending", { withCredentials: true });
            dispatch(addRequest(res?.data))
        }

        catch (err) {
            console.error(err)
        }
    }

    const reviewRequest = async (status, _id) => {
        try {
            const res = await axios.post(BASE_URL + "/request/review/" + status + "/" + _id, {}, {
                withCredentials: true
            });
            dispatch(removeRequest(_id));
        }
        catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchRequest()
    }, []);

    if (!requests) return;

    if (requests.length === 0) return <h1 className='my-10 flex justify-center'>No Requests Found</h1>
    console.log("after");

    return (
        <div className='text-center my-10'>
            <h1 className='text-bold text-2xl'>Pending Requests</h1>

            {requests.map((request) => {
                console.log(request)
                const { firstName, lastName, photoUrl, age, gender, about, _id } = request.fromUserId
                return (
                    <div className='flex justify-center'>
                        <div key={_id} className='flex m-4 p-4 rounded-lg bg-base-200 w-1/2 justify-between'>
                            <div>
                                <img src={photoUrl} alt="photo" className='w-20 h-20 rounded-full' />
                            </div>
                            <div className='text-left mx-4'>
                                <h2 className='font-bold'>{firstName + " " + lastName}</h2>
                                {age && gender && <p>{age + ", " + gender}</p>}
                                <p>{about}</p>
                            </div>
                            <div className=''>
                                <button className="btn btn-primary mx-1" onClick={() => reviewRequest("rejected", request._id)}>Reject</button>
                                <button className="btn btn-secondary mx-1" onClick={() => reviewRequest("accepted", request._id)}>Accept</button>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default requests