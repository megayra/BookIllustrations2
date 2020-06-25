import mongoose from "mongoose";

const Schema = mongoose.Schema;

const IllustrationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    bookId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
    // user: { 
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: 'User' ??? User.schema
    //   }
})

const Illustration = mongoose.model("Illustration", IllustrationSchema);

export default Illustration;