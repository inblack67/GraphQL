import React from 'react'
import Preloader from './Preloader'
import { Query } from 'react-apollo'
import { fetchBooksQuery } from '../queries/books'

const Books = () => {

    return (
        <div className='text-black'>
            <h1>Books</h1>
            <Query query={fetchBooksQuery}>
                {
                    ({loading, error, data}) => {
                        if (loading) {
                            return <Preloader />
                        }
                        if (error) {
                            console.error(error)
                            return;
                        }
                        return data.books.map(book => <div key={book.id}>
                            {book.title}
                        </div>)
                    }
                }
            </Query>
        </div>
    )
}

export default Books;