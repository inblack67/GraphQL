const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const data = [
    { id: '1', title: 'lorem', genre: 'oka' },
    { id: '2', title: 'ipsum', genre: 'not' },
    { id: '3', title: 'harry', genre: 'react' },
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        genre: { type: GraphQLString },
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLString } },
            resolve: (parent, args) => {
                return data.find(el => el.id === args.id);
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