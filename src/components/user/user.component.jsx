import React from 'react';

import './user.styles.scss';

const User = ({user}) => (
    <div>
        {console.log(user)}
        <img src={user.avatar_url} alt="Image"/>
        <h1>{user.login}</h1>
        <p>{user.bio}</p>
        <p>{user.blog}</p>
    </div>
)

export default User;