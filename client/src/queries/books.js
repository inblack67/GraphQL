import gql from 'graphql-tag'

export const fetchBooksQuery = gql`
{
    books{
        title,
        genre,
        id
    }
}`;

export const addBookMutation = gql`
mutation{
    addBook(name: "", genre: "", authorId: ""){
        title,
        genre,
        id
    }
}`;

