import React, {Component} from "react";
import {withRouter} from 'react-router-dom';
import { connect } from "react-redux";
import bookImg from '../assets/img/enchanted.jpg';

class BookAPIDetails extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="row bookapi-details">
                <div className="card">
                    <div className="card-body">
                        <h2>{this.props.bookAPIDetails.volumeInfo.title}</h2>
                        <div className="detailsapi-content">
                            <img src={`http://books.google.com/books/content?id=${this.props.bookAPIDetails.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} className="book-img thumbnail img-responsive"/>
                            <div className="book-content">
                                <p>Description:</p>
                                <p>{this.props.bookAPIDetails.volumeInfo.description != null ? this.props.bookAPIDetails.volumeInfo.description : 'No description available'}</p>
                                <p>Author: <span>{this.props.bookAPIDetails.volumeInfo.authors != null ? this.props.bookAPIDetails.volumeInfo.authors : 'No information'}</span></p>
                                <p>Genre:  <span>{this.props.bookAPIDetails.volumeInfo.categories != null ? this.props.bookAPIDetails.volumeInfo.categories : 'No info' }</span></p>
                                <p>Date:  <span>{this.props.bookAPIDetails.volumeInfo.publishedDate}</span></p>
                            </div>            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        bookAPIDetails: state.bookAPIDetails,
    }
};

export default connect(mapStateToProps, null)(withRouter(BookAPIDetails));
