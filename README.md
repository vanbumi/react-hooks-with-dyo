```
import React, { useState } from 'react';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);

    const handleSubmit = event => {
        event.preventDefault();
        const userData = {
            username,
            password
        }
        setUser(userData);
        setUsername("");
        setPassword("");
    }


    return (
        <div style={{
            marginBottom:'160px'
            }}>
            <h1>Login</h1>
            <div
                style={{ 
                    textAlign:'center'
                 }}
            >
                <form
                    style={{
                        display: 'grid',
                        alignItems: 'center',
                        justifyItems: 'center'
                    }}
                    onSubmit={handleSubmit}
                >
                    <input 
                        type="text"
                        placeholder="username"
                        value={username}
                        onChange={event => setUsername(event.target.value)}
                    />
                    <input 
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
                <br/>    
                {user && JSON.stringify(user, null, 2)}
            </div>
        </div>
    )
}
```