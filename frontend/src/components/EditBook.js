import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import {editBook} from '../redux/actions';
import {getBooks} from "../redux/actions";

const EditBook = () => {

    const dispatch = useDispatch();
    // const currentBook = useSelector(state => state.currentBook);
    const currentBook = useSelector(state => state.bookDetails);
    const history = useHistory();
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [description, setDescription] = useState('');

    const dispatchEditBook = () => {
        dispatch(editBook({
            _id: currentBook._id,
            name,
            year,
            author,
            genre,
            description
        }));
        window.location.reload();
        history.push(`/books`);

        dispatch(getBooks('_id name year author genre description'));

        setName('');
        setYear('');
        setAuthor('');
        setGenre('');
        setDescription('');
    }
    // const selectBook = book => {
    //     dispatch(actions.selectBook({id:book.id,volumeInfo: book.volumeInfo}));
    // }
    useEffect(() => {
        if(Object.keys(currentBook).length){
            setName(currentBook.name);
            setYear(currentBook.year);
            setAuthor(currentBook.author);
            setGenre(currentBook.genre);
            setDescription(currentBook.description);
        }
        dispatch(getBooks('_id name year author genre description'));
    }, [currentBook]);

    return <form>
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
        <button type="button" className="btn btn-primary" onClick={dispatchEditBook}>Update</button>
    </form>
}

export default EditBook;


