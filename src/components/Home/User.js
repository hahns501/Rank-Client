import React, {useState} from 'react';

const User = () => {
    const [userData, setUserData] = useState({userID: 1, userName: 'Sang Han'})

    return (
        <div className={"User"}>
            <h1>Welcome, {userData.userName}</h1>
            
        </div>
    )
}

export default User