import { Button, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

function SignUp() {
    return (
        <div className='p-6 min-h-screen grid content-center justify-items-center gap-y-5'>
            <Logo />
            <form action="/api/signin" method="post"
                className='w-96 px-12 py-8 grid content-center justify-items-center gap-y-5 bg-white shadow-lg rounded'
            >
                <span className='text-2xl text-indigo-400' >SignUp</span>
                <TextField
                    type="text"
                    label='Username'
                    fullWidth
                />
                <TextField
                    type="email"
                    label='Email'
                    fullWidth
                />
                <TextField
                    type="password"
                    label='Password'
                    fullWidth
                />
                <TextField
                    type="password"
                    label='Confirm Password'
                    fullWidth
                />
                <Button type='submit' variant='contained'>
                    Sign Up
                </Button>
            </form>
            <span>
                Already have account? <Link className='text-indigo-600' to={'/signin'}>SignIn here</Link>
            </span>
        </div>
    )
}

export default SignUp
