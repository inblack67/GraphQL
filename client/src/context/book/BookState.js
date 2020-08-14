import React, { useReducer } from 'react'
import BookContext from './bookContext'
import BookReducer from './bookReducer'
import { gql } from 'apollo-boost'

const BookState = (props) => {

    const initalState = {
        loading: true,
        books: [],
        authors: []
    }

    const [state, dispatch] = useReducer(BookReducer, initalState);

    const getBooksQuery = gql`
    {
        books{
            title,
            genre
        }
    }
    `

    const getBooks = () => {

    }

    return (
        <BookContext.Provider value={{
            loading: state.loading,
            books: state.books,
            authors: state.authors,
            getBooks,
            getBooksQuery
        }}>
            { props.children }
        </BookContext.Provider>
    )
}

export default BookState
