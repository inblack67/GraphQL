import gql from 'graphql-tag'

export const fetchAuthorsQuery = gql`
{
    authors{
        name,
        age,
        id
    }
}`;