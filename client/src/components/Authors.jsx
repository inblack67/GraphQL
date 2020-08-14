import React from 'react'
import { graphql } from 'react-apollo'
import Preloader from './Preloader'
import { fetchAuthorsQuery } from '../queries/authors'

const Authors = (props) => {

    const { authors, loading } = props.data;

    if (loading) {
        return <Preloader />
    }

    return (
        <div>
            <h1>Authors</h1>
            <ul>
                {authors && authors.map(author => <li key={author.id}>
                    {author.name}
                </li>)}
            </ul>
        </div>
    )
}

export default graphql(fetchAuthorsQuery)(Authors);
