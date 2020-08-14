const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList } = graphql;

const books = [
    { id: '1', title: 'lorem', genre: 'oka', authorId: '4' },
    { id: '2', title: 'ipsum', genre: 'not', authorId: '5' },
    { id: '3', title: 'harry', genre: 'react', authorId: '6' },
    { id: '4', title: 'harry', genre: 'react', authorId: '4' },
    { id: '5', title: 'harry', genre: 'react', authorId: '4' },
]

const authors = [
    { id: '4', name: 'lorem', age: 23 },
    { id: '5', name: 'ipsum', age: 43 },
    { id: '6', name: 'harry', age: 32 },
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve: (parent, args) => {
                return authors.find(author => author.id === parent.authorId);
            }
        }
    }),
})

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: {
            type: new GraphQLList(BookType), // new list of books
            resolve: (parent, args) => {
                return books.filter(book => book.authorId === parent.id)
            }
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },  // id will be string as usual, no mattered if entered as an int or string
            resolve: (parent, args) => {
                return books.find(el => el.id === args.id);
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve: (parent, args) => {
                return authors.find(el => el.id === args.id);
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve: (parent, args) => books
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve: (parent, args) => authors
        },
    }
})

// frontend
// book('123'){
//     name: 'harry'
// }

module.exports = new GraphQLSchema({
    query: RootQuery
})