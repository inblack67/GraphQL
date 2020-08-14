import React from 'react'
import Preloader from './Preloader'
import { graphql } from 'react-apollo'
import { fetchBooksQuery } from '../queries/books'

const Books = (props) => {

    const { books, loading } = props.data;

    if (loading) {
        return <Preloader />
    }

    return (
        <div>
            <ul>
                <h1>Books</h1>
                {books && books.map(book => <li key={book.id}>
                    {book.title}
                </li>)}
            </ul>
        </div>
    )
}

export default graphql(fetchBooksQuery)(Books);