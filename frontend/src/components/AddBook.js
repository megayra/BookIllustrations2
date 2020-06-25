import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {addBook} from '../redux/actions';
import {getBooks} from '../redux/actions';

const AddBook  = props  => {

    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [description, setDescription] = useState('');

    const dispatchAddBook = () => {
        dispatch(addBook({
            name,
            year,
            author,
            genre,
            description
        }, '_id name year author genre description'));

        setName('');
        setYear('');
        setAuthor('');
        setGenre('');
        setDescription('');

        dispatch(getBooks('_id name year author genre description'));
    }
    useEffect(() => {
        dispatch(getBooks('_id name year author genre description'));
    }, []);

    return <form id="book-form">
        <div className="form-group">
            <label>Title</label>
            <input type="text" value={name}
                className="form-control"
                onChange={e => setName(e.target.value)} />
        </div>
        <div className="form-group">
            <label>Year</label>
            <input type="text" value={year}
                className="form-control"
                onChange={e => setYear(e.target.value)} />
        </div>
        <div className="form-group">
            <label>Author</label>
            <input type="text" value={author}
                className="form-control"
                onChange={e => setAuthor(e.target.value)} />
        </div>
        <div className="form-group">
            <label>Genre</label>
            <input type="text" value={genre}
                className="form-control"
                onChange={e => setGenre(e.target.value)} />
        </div>
        <div className="form-group">
            <label>Description</label>
            <input 
                type="text" value={description}
                className="form-control"
                onChange={e => setDescription(e.target.value)} />
        </div>
        {/* <button type="button" className="btn btn-primary" onClick={dispatchAddBook} onClick={() => {props.plusBook(props.book)}}>Save</button> */}
        <button type="button" className="btn btn-primary" onClick={() => {props.plusBook(props.book);dispatchAddBook();}}>Save</button>
    </form>
}

export default AddBook;