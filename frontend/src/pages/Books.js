import React, {Fragment, Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../redux/actions";
import AddBook from '../components/AddBook';
import EditBook from '../components/EditBook';
import Book from '../components/books/Book';
import {withRouter} from 'react-router-dom';

class Books extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bookState: this.props.books,
        //   currentBook: { id: null, name: '', year: '', author: '', genre: '', description: '', illustrations: [] },
          editing: false
        }
    }

    listView = () => {
        document.querySelector('.content').classList.remove('grid-group-wrapper');
        document.querySelector('.content').classList.add('list-group-wrapper');
        document.querySelector('.content').style.flexDirection = 'column';
        document.querySelector('.gridBtn').classList.remove('active');
        document.querySelector('.listBtn').classList.add('active');
    }

    gridView = () => {
        document.querySelector('.content').classList.remove('list-group-wrapper');
        document.querySelector('.content').classList.add('grid-group-wrapper');
        document.querySelector('.content').style.flexDirection = 'row';
        document.querySelector('.listBtn').classList.remove('active');
        document.querySelector('.gridBtn').classList.add('active');
    }

    componentDidMount(){
        this.props.getBooks('_id name year author genre description');
        this.props.getCurrentBook();
        // console.log('Books.js this props GetBooks', this.props.books);
        console.log('Books.js this props', this.props.books);
    }

    selectBook = book => {
        this.props.selectBook(book);
        this.props.history.push(`/bookdetails/${book._id}`);
    }
    // const dispatchEditBook = () => {
    //     dispatch(editBook({
    //         _id: props.book._id
    //     }, '_id name year author genre description'));
    // }
    editRow = book => {
        this.props.selectBook(book);
        this.props.getCurrentBook();
        this.setState({editing: true});
        // this.setState({ currentBook: { id: book.id, name: book.name, year: book.year, author: book.author, genre: book.genre, description: book.description }})
    }

    plusBook = book => {
        // this.props.addBook({
        //     name,
        //     year,
        //     author,
        //     genre,
        //     description
        // }, '_id name year author genre description');
        this.props.getBooks('_id name year author genre description');
        console.log('Kaima', this.props.books);
    }

    // renderBooks = () => {
    //     const booksList = this.props.books.map(book => {
    //         return <Book key={book._id} book={book} selectBook={this.selectBook} />
    //     })
    //     return booksList;
    // }
    render() {
        // return <div className="row">
        //     <div className="col-md-3">
        //         <AddBook/>
        //     </div>
        //     <div className="col">
        //         <div className="row">
        //             {this.renderBooks()}
        //         </div>
        //     </div>
        // </div>
        return  <div className={this.props.token && this.props.currentUser.userType == 'author' ? 'book-container my-5' : 'book-container-list my-5'}>
            {this.props.token && this.props.currentUser.userType == 'author'? (
                    <div className="book-form card">               
                        {this.state.editing ? (
                            <Fragment>
                                <h5>Edit book</h5>
                                <EditBook editing={this.state.editing}/>
                            </Fragment>
                            ) : (
                            <Fragment>
                                <h5>Add book</h5>
                                <AddBook plusBook={this.plusBook}/>
                            </Fragment>
                        )}
                        </div>
                    ): (
                        <div className="emptyDiv"></div>
                    )}
                    <div className="book-list">
                        <div className="listHeader">
                            <h5>List of books</h5>             
                            <div className="options">
                                <button className="btn active listBtn" onClick={this.listView}><i className="fa fa-bars"></i> List</button>
                                <button className="btn gridBtn" onClick={this.gridView}><i className="fa fa-th-large"></i> Grid</button>
                            </div>
                        </div>
                        <ul className="content list-group list-group-wrapper">
                            {/* {this.renderBooks()} */}
                            {this.props.books.length > 0 ? (
                                this.props.books.map(book => (
                                    <Book key={book._id} book={book} editRow={this.editRow} selectBook={this.selectBook} />
                                ))
                                ) : (
                                    <div className="book-info">  
                                        <p>No books</p>
                                    </div>
                            )}
                        </ul>
                    </div>
                </div>
    }
}

const mapStateToProps = state => {
    return {
        books: state.books,
        token: state.token,
        currentUser: state.currentUser
    }
}

const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        selectBook: actions.selectBook,
        getBooks: actions.getBooks,
        getCurrentBook: actions.getCurrentBook,
        addBook: actions.addBook,
        getCurrentUser: actions.getCurrentUser,
    }, dispatch)
}

export default connect(mapStateToProps, mapStateToDispatch)(withRouter(Books));