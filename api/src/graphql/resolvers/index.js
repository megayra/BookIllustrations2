import {mergeResolvers} from "merge-graphql-schemas";
import User from "./User";
import Game from "./Game";
import Illustration from "./Illustration";
import Book from "./Book";

const resolvers = [User, Game, Illustration, Book];

export default mergeResolvers(resolvers);