import React from 'react'
import Preloader from './Preloader'
import { Query } from 'react-apollo'
import { fetchAuthorsQuery } from '../queries/authors'

const Authors = () => {

    return (
        <div>
            <h1>Authors</h1>
            <Query query={fetchAuthorsQuery}>
                {
                    ({ loading, error, data }) => {
                        if (loading) {
                            return <Preloader />
                        }
                        if (error) {
                            console.error(error)
                            return;
                        }
                        return data.authors.map(author => <div className='text-black' key={author.id}>
                            {author.name}
                        </div>)
                    }
                }
            </Query>
        </div>
    )
}

export default Authors;
