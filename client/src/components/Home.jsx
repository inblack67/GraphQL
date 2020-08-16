import React from 'react'
import Books from './Books'
import Authors from './Authors'
import AddBook from './AddBook'

const Home = () => {
    return (
        <div className='text-white text-center'>
            <h1>home</h1>
            <Books />
            <Authors />
            <AddBook />
        </div>
    )
}

export default Home
