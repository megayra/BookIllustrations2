export default `

    input IllustrationInput {
        _id: String!
        name: String!
        imageUrl: String!
        bookId: String!
        userId: String!
    }

    type Illustration {
        _id: String!
        name: String!
        imageUrl: String!
        bookId: String!
        userId: String!
    }

    type Query {
        illustration(_id: String!): Illustration
        illustrations: [Illustration]
    }

    type Mutation {
        addIllustration(name: String!, imageUrl: String!, bookId: String!, userId: String!): Illustration
        deleteIllustration(_id: String!): Illustration
        editIllustration(_id: String!, name: String, imageUrl: String, bookId: String, userId: String): Illustration
    }

`