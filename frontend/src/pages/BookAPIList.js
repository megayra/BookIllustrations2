import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import moment from "moment";
import * as actions from "../redux/actions";
import { useHistory } from 'react-router-dom';


const BookAPIList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSortTerm] = useState("");
  const [books, setBooks] = useState([]);
  var img;

  const onInputChange = e => {
    setSearchTerm(e.target.value);
  };

  const onSortChange = e => {
    setSortTerm(e.target.value);

    const sortedBooks = books.sort((a, b) => {
      if(b.volumeInfo.publishedDate && a.volumeInfo.publishedDate){
      if (e.target.value === "Newest") {
        return (
          parseInt(b.volumeInfo.publishedDate.substring(0, 4)) -
          parseInt(a.volumeInfo.publishedDate.substring(0, 4))
        );
      } else if (e.target.value === "Oldest") {
        return (
          parseInt(a.volumeInfo.publishedDate.substring(0, 4)) -
          parseInt(b.volumeInfo.publishedDate.substring(0, 4))
        );
      }
    }
    });
    setBooks(sortedBooks);
  };

  useEffect(() => {
    getAllBooks();  
  }, []);

  const getAllBooks = async () => {
    const result = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=averageRating:3.5&max-results=60`);
    setBooks(result.data.items);
    // setBooksAPI
  };

  let API_URL = `https://www.googleapis.com/books/v1/volumes`;

  const fetchBooks = async () => {
    const result = await axios.get(`${API_URL}?q=${searchTerm}`);
    setBooks(result.data.items);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    fetchBooks();
  };

  const bookAuthors = authors => {
    if (authors) {
      if (authors.length <= 2) {
        authors = authors.join(" and ");
      } else if (authors.length > 2) {
        let lastAuthor = " and " + authors.slice(-1);
        authors.pop();
        authors = authors.join(", ");
        authors += lastAuthor;
      }
      return authors;
    }
  };

  const dispatch = useDispatch();
  const history = useHistory();
  const selectBook = book => {
    dispatch(actions.selectBookAPI({id:book.id,volumeInfo: book.volumeInfo}));
    history.push(`/bookapidetails/${book.id}`);
  }

  return (
    <section className="searchSection my-5">
      <h2>Search for books</h2>
      <form className="searchForm" onSubmit={onSubmitHandler}>
          <input
            type="search"
            placeholder=""
            value={searchTerm}
            onChange={onInputChange}
          />
          <button type="submit">Search</button>
          <div className="mx-sm-3">
          <select
            defaultValue="Sort"
            onChange={onSortChange}
            className="btn btn-outline-secondary"
          >
            <option disabled value="Sort">
              Sort
            </option>
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
          </select>
        </div>
      </form>
      <div className="row">
        {books.map((book, index) => {
          if(book.volumeInfo.imageLinks) {
            img = book.volumeInfo.imageLinks.small;
          } else {
            img = null;
          }
          return (

            <div key={index} className="col-md-3">
                <div className="p-3 d-flex singleBook border shadow-sm mb-3 bg-white rounded">
                    <img className="movie-image" alt=""
                    src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}/>
                    <div className="d-flex flex-column">
                        <div className="">
                            <h5>{book.volumeInfo.title}</h5>
                            <p>{moment(book.volumeInfo.publishedDate).format("MMMM Do YYYY")}</p>
                            {/* <div className="mt-3 bookDescription">
                                {book.volumeInfo.description}
                            </div> */}
                        </div>
                        <div className="mt-auto border-top pt-3">
                            <button type="button"
                            onClick={() => {selectBook(book)}}
                            className="btn btn-link">
                                More details...
                            </button>
                        </div> 
                    </div>
                </div>
        </div>

          );
        })}
      </div>
    </section>
  );
};

export default BookAPIList
