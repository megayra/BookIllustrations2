import Illustration from "../../models/Illustration";
import { response } from "express";

export default {
    Query: {
        illustration: (root, args) => {
            return new Promise((resolve, reject) => {
                Illustration.findOne(args).exec((error, response)=> {
                    error ? reject(error) : resolve(response);
                })
            })
        },
        illustrations: () => {
            return new Promise((resolve, reject) => {
                Illustration.find({}).populate().exec((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        }
    },
    Mutation: {
        addIllustration: (root, {name, imageUrl, bookId, userId }) => {
            const newIllustration = new Illustration({name, imageUrl, bookId, userId});
            return new Promise((resolve, reject) => {
                newIllustration.save((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        },
        deleteIllustration: (root, {_id}) => {
            return new Promise((resolve, reject) => {
                Illustration.findByIdAndRemove({_id}).exec((error, response) => {
                    error ? reject(error): resolve(response);
                })
            })
        },
        editIllustration: (root, {_id, name, imageUrl, bookId, userId}) => {
            return new Promise((resolve, reject) => {
                Illustration.findByIdAndUpdate({_id}, {$set: {name, description, imageUrl, bookId, userId}}, {new: true}).exec((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        }
    }
}