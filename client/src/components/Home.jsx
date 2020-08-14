import React from 'react'
import Books from './Books'
import Authors from './Authors'

const Home = () => {
    return (
        <div className='bg-gray-900 text-white'>
            <h1>home</h1>
            <Books />
            <Authors />
        </div>
    )
}

export default Home
