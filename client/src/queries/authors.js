import { gql } from 'apollo-boost'

export const fetchAuthorsQuery = gql`
{
    authors{
        name,
        age,
        id
    }
}
`