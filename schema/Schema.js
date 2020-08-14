const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList } = graphql;
const Book = require('../models/Book');
const Author = require('../models/Author');

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve: async (parent, args) => {
                const author = await Author.findOne({ id: args.id });
                return author;
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
            resolve: async (parent, args) => {
                const books = await Book.find({ authorId: parent.id })
                return books;
            }
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },  // id will be string as usual, does not matter if entered as an int or string
            resolve: async (parent, args) => {
                const book = await Book.findById(args.id);
                return book;
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve: async (parent, args) => {
                const author = await Author.findById(args.id);
                return author;
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve: async (parent, args) => {
                const books = await Book.find();
                return books;
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve: async (parent, args) => {
                const authors = await Author.find();
                return authors;
            }
        },
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAuthor: {
            type: AuthorType,
            args:
            {
                name: { type: GraphQLString },
                age: { type: GraphQLInt }
            },
            resolve: async (parent, args) => {
                const { name, age } = args;
                const newAuthor = await Author.create({ name, age });
                return newAuthor;
            } 
        },
        addBook: {
            type: BookType,
            args:
            {
                title: { type: GraphQLString },
                genre: { type: GraphQLString },
                authorId: { type: GraphQLID }
            },
            resolve: async (parent, args) => {
                const { title, genre, authorId } = args;
                const newBook = await Book.create({ title, genre, authorId });
                return newBook;
            } 
        },
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})