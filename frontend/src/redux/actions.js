import types from './action-types';
import networkClient from '../network/network-client';
import graphQLService from '../network/graphql-service';


// export function setBooks (books) {
//     return {type: types.SET_BOOKS, payload: books}
// }
export function setError (error) {
    return { type: types.SET_ERROR, payload: error };
}

//Books

export function selectBook(book){
    return {type: types.SET_BOOK_DETAILS, payload: book};
}

// export function addBook(book){
//     return {type: types.ADD_BOOK, payload: book};
// }

// export function updateBook(id, book){
//     return {type: types.UPDATE_BOOK, payload: book, id: id};
// }

// export function removeBook(index){
//     return {type: types.REMOVE_BOOK, payload: index};
// }

// export function addIllustration(img){
//     return {type: types.ADD_IMG, payload: img};
// }

// Book Database
export function setBooksAPI (books) {
    return {type: types.SET_BOOKSAPI, payload: books}
}

// export function setCurrentBookPage (page) {
//     return {type: types.SET_CURRENTBOOK_PAGE, payload: page}
// }

// export function setTotalBooksPages (pages) {
//     return {type: types.SET_TOTALBOOKS_PAGES, payload: pages}
// }

export function selectBookAPI(book){
    return {type: types.SET_BOOKSAPI_DETAILS, payload: book};
}





//NEW
export const getGames = (responseFields = "_id") => async dispatch => {
    try {
        const response = await graphQLService.getGames(responseFields);
        dispatch(setGames(response.data.games));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }
};

export function setGames (games) {
    return {type: types.SET_GAMES, payload: games}
}

export function addGameToStore (game) {
    return {type: types.ADD_GAME, payload: game}
}

export const addGame = (variables, responseFields = "_id") => async dispatch => {
    try {
        const response = await graphQLService.addGame(variables, responseFields);
        dispatch(addGameToStore(response.data.addGame));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }
};

export const deleteGame = (variables, responseFields = "_id") => async dispatch => {
    try {
        const response = await graphQLService.deleteGame(variables, responseFields);
        dispatch(deleteGameFromStore(response.data.deleteGame._id));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }
};

export function deleteGameFromStore (game) {
    return {type: types.DELETE_GAME, payload: game}
}

export const addGameToUser = (variables, responseFields = "_id") => async dispatch => {
    try {
        const response = await graphQLService.editUser(variables, responseFields);
        dispatch(saveCurrentUser(response.data.editUser));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }
};

// BOOKS Mongo

export const getBooks = (responseFields = "_id") => async dispatch => {
    try {
        const response = await graphQLService.getBooks(responseFields);
        dispatch(setBooks(response.data.books));
console.log('Set books in get action', response.data.books);
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }
};

export function setBooks (books) {
    return {type: types.SET_BOOKS, payload: books}
}

export function addBookToStore (book) {
    return {type: types.ADD_BOOK, payload: book}
}

export const addBook = (variables, responseFields = "_id") => async dispatch => {
    try {
        const response = await graphQLService.addBook(variables, responseFields);
        dispatch(addBookToStore(response.data.addBook));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }
};

export const deleteBook = (variables, responseFields = "_id") => async dispatch => {
    try {
        const response = await graphQLService.deleteBook(variables, responseFields);
        dispatch(deleteBookFromStore(response.data.deleteBook._id));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }
};

export function deleteBookFromStore (book) {
    return {type: types.DELETE_BOOK, payload: book}
}

//EDIT book
export const editBook = (variables, responseFields = "_id name year author genre description illustrations {name}") => async dispatch => {
    try {
        const response = await graphQLService.editBook(variables, responseFields);
        dispatch(getCurrentBook());
    } catch(e) {
        console.log(e);
        dispatch(setGraphQLError({request: "editBook", errors: []}))
    }
}

export const getCurrentBook = () => async dispatch => {
    try {
        const response = await graphQLService.currentBook();
        dispatch(saveCurrentBook(response.data.currentBook));
        dispatch(setBookLoaded());
        console.log(response.data.currentBook);
    } catch(e) {
        console.log(e);
        // dispatch(saveToken(''));
        dispatch(setBookLoaded());
    }
}

export function saveCurrentBook(book){
    return {type: types.SET_BOOK, payload: book}
}

export function setBookLoaded(){
    return {type: types.SET_BOOK_LOADED, payload: true}
}

// USER
export const addUser = variables => async dispatch => {
    try {
        const response = await graphQLService.addUser(variables);
        dispatch(getCurrentUser());
        dispatch(saveToken(response.data.addUser));
        console.log(response.data.addUser);
    } catch(e){
        e.graphQLErrors.forEach(error => {
            console.log(error);
        })
        dispatch(setGraphQLError({request: "addUser", errors: []}));
    }
}


export const editUser = (variables, responseFields = "_id firstName lastName email userType games {name}") => async dispatch => {
    try {
        const response = await graphQLService.editUser(variables, responseFields);
        dispatch(getCurrentUser());
    } catch(e){
        console.log(e);
        dispatch(setGraphQLError({request: "editUser", errors: []}))
    }
}

export const login = variables => async dispatch => {
    try {
        const response = await graphQLService.login(variables);
        dispatch(getCurrentUser());
        dispatch(saveToken(response.data.login));
        console.log('login token', localStorage.getItem('token'));
        //console.log(response.data.login); encoded
    } catch(e){
        console.log(e);
        dispatch(setGraphQLError({request: "login", errors: []}))
    }
}

export const logout = variables => async dispatch => {
    console.log('Logout');
    dispatch(saveToken(''));
    dispatch(setUserLoaded());
    // dispatch(saveCurrentUser({}));
    // dispatch(clearCurrentUser({}));
    localStorage.clear();
    console.log('logout token', localStorage.getItem('token'));
}

export function saveToken(token) {
    return {type: types.SAVE_TOKEN, payload: token}
}

export function setUserLoaded(){
    return {type: types.SET_USER_LOADED, payload: true}
}

export function setGraphQLError (error) {
    return { type: types.ADD_GRAPHQL_ERROR, payload: error };
}

export const getCurrentUser = () => async dispatch => {
    try {
        const response = await graphQLService.currentUser();
        dispatch(saveCurrentUser(response.data.currentUser));
        console.log(response.data.currentUser); // doesnt get the new login, only after refresh
        dispatch(setUserLoaded());
    } catch(e){
        dispatch(saveToken(''));
        dispatch(setUserLoaded());
    }
}

export function saveCurrentUser(user){
    return {type: types.SET_USER, payload: user}
}

export function clearCurrentUser(user){
    return {type: types.CLEAR_USER, payload: user}
}

//
export const getUsers = (responseFields = "_id") => async dispatch => {
    try {
        const response = await graphQLService.getUsers(responseFields);
        dispatch(setUsers(response.data.users));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }
};

export function setUsers (users) {
    return {type: types.SET_USERS, payload: users}
}

// ILLUSTRATIONS Mongo

export const getIllustrations = (responseFields = "_id") => async dispatch => {
    try {
        const response = await graphQLService.getIllustrations(responseFields);
        dispatch(setIllustrations(response.data.illustrations));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }
};

export function setIllustrations (illustrations) {
    return {type: types.SET_ILLUSTRATIONS, payload: illustrations}
}

export function addIllustrationToStore (illustration) {
    return {type: types.ADD_ILLUSTRATION, payload: illustration}
}

export const addIllustration = (variables, responseFields = "_id") => async dispatch => {
    console.log('Illust variables: ', variables);
    try {
        const response = await graphQLService.addIllustration(variables, responseFields);
        dispatch(addIllustrationToStore(response.data.addIllustration));
        console.log('Illust actions: ', response.data.addIllustration);
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }
};

export const deleteIllustration = (variables, responseFields = "_id") => async dispatch => {
    try {
        const response = await graphQLService.deleteIllustration(variables, responseFields);
        dispatch(deleteIllustrationFromStore(response.data.deleteIllustration._id));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }
};

export function deleteIllustrationFromStore (illustration) {
    return {type: types.DELETE_ILLUSTRATION, payload: illustration}
}