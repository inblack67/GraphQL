import { gql } from 'apollo-boost'

export const fetchBooksQuery = gql`
{
    books{
        title,
        genre,
        id
    }
}
`