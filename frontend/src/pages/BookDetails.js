import React, {Component} from "react";
import {withRouter} from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import bookImg from '../assets/img/bookpl.jpg';
import ImgList from './ImgList';

let editedBook;

class BookDetails extends Component {

    constructor() {
        super();
    }
    handleSubmit = event => {
        if(event.target.elements.name.value && event.target.elements.img.value){
            var name = event.target.elements.name.value;
            var imageUrl = event.target.elements.img.value;
            var bookId = this.props.bookDetails._id;
            var userId = this.props.currentUser._id;
            this.props.addIllustration({name, imageUrl, bookId, userId},'_id name imageUrl bookId userId');
            event.target.elements.name.value = '';
            event.target.elements.img.value = '';
        }
    }

    // componentDidMount(){
    //     this.props.getBooks('_id name year author genre description');
    //     this.props.getCurrentBook();
    // }

    // selectBook = book => {
    //     this.props.selectBook(book);
    //     this.props.history.push(`/bookdetails/${book._id}`);
    // }

    render() {
        return (
            <div className="book-details my-5">
                <div className="card">
                    <div className="card-body">
                        <h2>{this.props.bookDetails.name}</h2>
                        <div className="details-content">
                            <img src={bookImg} className="book-img thumbnail img-responsive"/>
                            <div className="book-content">
                                <p>Description:</p>
                                <p>{this.props.bookDetails.description}</p>
                                <p>Author: <span>{this.props.bookDetails.author}</span></p>
                                <p>Genre:  <span>{this.props.bookDetails.genre}</span></p>
                                <p>Year:  <span>{this.props.bookDetails.year}</span></p>
                            </div>            
                        </div>
                    </div>
                </div>
                {this.props.token && this.props.currentUser.userType == 'illustrator'? (
                    <div className="card form-card">
                        <form onSubmit={event => {
                            event.preventDefault();
                            this.handleSubmit(event);
                        }}>         
                            <label>Name</label>
                            <input type="text" name="name" />
                            <label>Illustration URL</label>
                            <input type="text" name="img" />
                            <button>Add Illustration</button>
                        </form>
                    </div>
                ): (
                    <div className="emptyDiv"></div>
                )}
                <ImgList />
                {/* {this.props.bookDetails.illustrations ? (
                    this.props.bookDetails.illustrations.map(illustration => (
                    <div className="card form-card illust-card"  key={illustration.id}> 
                        <h4>{illustration.name}</h4>
                        <img src={illustration.img} className="book-img thumbnail img-responsive"/>     
                    </div>
                ))
                ) : (<div></div> )} */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        bookDetails: state.bookDetails,
        token: state.token,
        currentUser: state.currentUser
    }
};

const mapStateToDispatch = dispatch => {
  return bindActionCreators({
      selectBook: actions.selectBook,
      addIllustration: actions.addIllustration,
      editBook: actions.editBook,
    //   updateBook: actions.updateBook
  }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(withRouter(BookDetails));
