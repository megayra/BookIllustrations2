import Book from "../../models/Book";
import { response } from "express";

export default {
    Query: {
        book: (root, args) => {
            return new Promise((resolve, reject) => {
                Book.findOne(args).exec((error, response)=> {
                    error ? reject(error) : resolve(response);
                })
            })
        },
        books: () => {
            return new Promise((resolve, reject) => {
                Book.find({}).populate().exec((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        },
        currentBook: async (root, args, {book}) => {
            if(!book){
                throw new ValidationError([{
                    key: 'book',
                    message: 'book_not_selected',
                }])
            }
            return await Book.findById(book._id);   
        }
    },
    Mutation: {
        addBook: (root, {name, year, author, genre, description}) => {
            const newBook = new Book({name, year, author, genre, description});
            return new Promise((resolve, reject) => {
                newBook.save((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        },
        deleteBook: (root, {_id}) => {
            return new Promise((resolve, reject) => {
                Book.findByIdAndRemove({_id}).exec((error, response) => {
                    error ? reject(error): resolve(response);
                })
            })
        },
        editBook: (root, {_id, name, year, author, genre, description}) => {
            return new Promise((resolve, reject) => {
                Book.findByIdAndUpdate({_id}, {$set: {name, year, author, genre, description}}, {new: true}).exec((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        },
        // editBook: async (root, {_id, name, year, author, genre, description}, {book} ) => {
        //     if(!book){
        //         throw new Error("Book is not set!");
        //     }
        //     const response = await Book.findByIdAndUpdate({_id}, {$set: {
        //         name, 
        //         year, 
        //         author, 
        //         genre, 
        //         description
        //     }}, {new: true}).exec();
        //     if(!response){
        //         throw new Error(`Cannot edit book: ${_id}`);
        //     }
        //     return response;
        // }
    }
}