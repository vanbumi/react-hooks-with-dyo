import React, { useState } from 'react';

const initialFormState = {
        username: '',
        email: '',
        password: ''
    }

export default function Register() {
    const [form, setForm] = useState(initialFormState);

    const [user, setUser] = useState(null);

    const handleChange = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        setUser(form);
        setForm(initialFormState);
    }

    return (
        <div style={{marginBottom: '60px', textAlign: 'center'}}>
            <h1>Register</h1>

            <div>
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
                        placeholder='username'
                        name='username'
                        onChange={handleChange}
                        value={form.username}
                    />
                    <input 
                        type="text"
                        placeholder="email"
                        name='email'
                        onChange={handleChange}
                        value={form.email}
                    />
                    <input 
                        type="password"
                        placeholder="passoword"
                        name='password'
                        onChange={handleChange}
                        value={form.password}
                    />
                    <button type="submit">Submit</button>
                </form>

                { user && JSON.stringify(user, null, 2) }
            </div>
        </div>
    )
}