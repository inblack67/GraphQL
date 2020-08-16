import gql from 'graphql-tag'

export const fetchBooksQuery = gql`
{
    books{
        title,
        genre,
        id
    }
}`;

// ! = not null gql type
export const addBookMutation = gql`
mutation($title: String!, $genre: String!, $authorId: ID!){
    addBook(title: $title, genre: $genre, authorId: $authorId){
        title,
        genre,
        id
    }
}`;


