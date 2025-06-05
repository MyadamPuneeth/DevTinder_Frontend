import React, { useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addConnection } from '../utils/connectionSlice'

const connections = () => {
  const connections = useSelector((store) => store.connection)
  const dispatch = useDispatch()
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnection(res?.data))
    }
    catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchConnections();
  }, [])

  console.log("before");

  if (!connections) return;

  if (connections.length === 0) return <h1>No Connections Found</h1>
  console.log("after");

  return (
    <div className='text-center my-10'>
      <h1 className='text-bold text-2xl'>Connections</h1>

      {connections.map((connection) => {
        console.log(connection)
        const { firstName, lastName, photoUrl, age, gender, about } = connection
        return (
          <div className='flex m-4 p-4 rounded-lg bg-base-200 w-1/2'>
            <div>
              <img src={photoUrl} alt="photo" className='w-20 h-20 rounded-full' />
            </div>
            <div className='text-left mx-4'>
              <h2 className='font-bold'>{firstName + " " + lastName}</h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
            </div>

          </div>
        )
      })}

    </div>
  )
}

export default connections