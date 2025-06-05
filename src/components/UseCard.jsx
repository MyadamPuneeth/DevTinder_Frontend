import React from 'react'

const UseCard = ({user}) => {
    const {firstName, lastName, age, gender, about, skill, photoUrl} = user
    console.log(user);
    return (
        <div className="card bg-base-300 w-96 shadow-sm ">
            <figure>
                <img
                    src={user.photoUrl}
                    alt={user.firstName} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{firstName+lastName}</h2>
                <p>{age+", "+gender}</p>
                <p>{about}</p>
                <div className="card-actions justify-center pt-3">
                    <button className="btn btn-primary">Ignore</button>
                    <button className="btn btn-secondary">Intrested</button>
                </div>
            </div>
        </div>
    )
}

export default UseCard