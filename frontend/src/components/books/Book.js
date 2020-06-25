import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {deleteBook, editBook, getCurrentBook} from '../../redux/actions';
import bookImg from '../../assets/img/bookplaceholder.jpg';

const Book = props => {
    const token = localStorage.getItem('token');
    const userLoaded = useSelector(state => state.userLoaded);
    const currentUser = useSelector(state => state.currentUser);

    const dispatch = useDispatch();
    const dispatchDeleteBook = () => {
        dispatch(deleteBook({
            _id: props.book._id
        }, '_id name year author genre description'));
    }

    // const dispatchSetBook = () => {
    //     dispatch(getCurrentBook());
    // }
//     return <div className="col-md-4 mb-3">
//         <div className="card">
//         <img src={bookImg} className="card-img-top"/>
//         <div className="card-body">
//             <button type="button" className="btn btn-danger mb-1" onClick={dispatchDeleteBook}>Изтрий</button>
//             <h5 className="card-title">{props.book.name}</h5>
//             <p className="card-text">{props.book.year}</p>
//             <p className="card-text">{props.book.author}</p>
//             <p className="card-text">{props.book.genre}</p>
//             <p className="card-text">{props.book.description}</p>
//         </div>
//     </div>
// </div>

        return <li className="list-group-item"> 
                    <img src={bookImg} className="book-img thumbnail img-responsive"/>
                    {/* <div className="card-body">
                        <button type="button" className="btn btn-danger mb-1" onClick={dispatchDeleteBook}>Изтрий</button>
                        <h5 className="card-title">{props.book.name}</h5>
                        <p className="card-text">{props.book.year}</p>
                        <p className="card-text">{props.book.author}</p>
                        <p className="card-text">{props.book.genre}</p>
                        <p className="card-text">{props.book.description}</p>
                    </div> */}
                    <div className="book-info">  
                        <h4>{props.book.name}</h4>   
                        <p>{props.book.description}</p>
                        {token && currentUser.userType == 'author' ? (
                            <div className="btnWrap">
                                <button type="button" onClick={dispatchDeleteBook} className="btn btn-danger pull-right remove-post">
                                    <span className="glyphicon glyphicon-remove"></span>
                                    <span className="hidden-xs">Delete</span>
                                </button>
                                {/* <button type="button" onClick={dispatchEditBook} className="btn btn-danger pull-right editBtn"> */}
                                <button type="button"onClick={() => {props.editRow(props.book)}} className="btn btn-danger pull-right editBtn">
                                    <span className="glyphicon glyphicon-remove"></span>
                                    <span className="hidden-xs">Edit</span>
                                </button>
                                <button type="button" onClick={() => {props.selectBook(props.book)}} className="btn btn-danger pull-right detailsBtn">
                                    <span className="glyphicon glyphicon-remove"></span>
                                    <span className="hidden-xs">Details</span>
                                </button>
                            </div>
                         ): (
                            <div className="btnWrap">
                                <button type="button" onClick={() => {props.selectBook(props.book)}} className="btn btn-danger pull-right detailsBtn">
                                    <span className="glyphicon glyphicon-remove"></span>
                                    <span className="hidden-xs">Details</span>
                                </button>
                            </div>
                        )}
                    </div>
                </li>
}

export default Book;