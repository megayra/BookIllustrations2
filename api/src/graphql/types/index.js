import {mergeTypes} from "merge-graphql-schemas";
import User from "./User";
import Game from "./Game";
import Illustration from "./Illustration";
import Book from "./Book";

const typeDefs = [User, Game, Illustration, Book];

export default mergeTypes(typeDefs, {all: true});