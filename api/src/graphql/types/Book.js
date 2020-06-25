export default `

    type Book {
        _id: String!
        name: String!
        year: String!
        author: String!
        genre: String!
        description: String!
        illustrations: [Illustration]
    }

    type Query {
        book(_id: String!): Book
        books: [Book]
        currentBook: Book
    }

    type Mutation {
        addBook(name: String!, year: String!, author: String!, genre: String!, description: String!): Book
        deleteBook(_id: String!): Book
        editBook(_id: String!, name: String!, year: String!, author: String!, genre: String!, description: String!): Book
    }

`