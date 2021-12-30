import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
	return (
		<Link to={"/"} className='m-3 px-8 py-6 text-white bg-indigo-400 shadow-lg rounded-tr-3xl rounded-bl-3xl text-xl'>
			Small Connect
		</Link>
	)
}

export default Logo
