const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt } = graphql;

const books = [
    { id: '1', title: 'lorem', genre: 'oka' },
    { id: '2', title: 'ipsum', genre: 'not' },
    { id: '3', title: 'harry', genre: 'react' },
]

const authors = [
    { id: '1', name: 'lorem', age: 23 },
    { id: '2', name: 'ipsum', age: 43 },
    { id: '3', name: 'harry', age: 32 },
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        genre: { type: GraphQLString },
    })
})

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
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
        }
    }
})

// frontend
// book('123'){
//     name: 'harry'
// }

module.exports = new GraphQLSchema({
    query: RootQuery
})