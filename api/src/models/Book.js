import mongoose from "mongoose";
import Illustration from "./Illustration";

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    illustrations: {
        type: [Illustration.schema]
    },
    // illustrations: [{
    //     mongoose.Schema.Types.ObjectId, 
    //     ref: 'Illustration' 
    // }],
    // author: { 
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: 'Author' 
    //   }
})

const Book = mongoose.model("Book", BookSchema);

export default Book;