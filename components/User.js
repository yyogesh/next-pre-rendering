import React from 'react'

const User = ({ user }) => {
    return (
        <p>{user.name} - {user.email}</p>
    )
}

export default User