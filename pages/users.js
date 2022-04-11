import React from 'react'
import User from '../components/User'

const UserList = ({ users }) => {
    // console.log('users', users)
    return (
        <>
            <h1>List of users</h1>
            {
                users.map((user, index) => {
                    return <div key={user.id}>
                        <User user={user} />
                    </div>
                })
            }
        </>
    )
}

export default UserList

export async function getStaticProps() { // function only on server side never access on client side
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    //  console.log(data);
    return {
        props: {
            users: data
        }
    }
}