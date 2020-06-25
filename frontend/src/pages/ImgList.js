import React, { Fragment, Component} from 'react';
import { connect } from "react-redux";
import bookImg from '../assets/img/bookplaceholder.jpg';
import * as actions from "../redux/actions";
import {bindActionCreators} from "redux";

class ImgList extends Component {

  componentDidMount(){
      this.props.getIllustrations('_id name imageUrl bookId userId');
      this.props.getUsers('_id firstName lastName email userType');
      console.log('Users',this.props.users);
  }

  deleteIllustr = illustration => {
    this.props.deleteIllustration({
        _id: illustration._id
    }, '_id name');

    console.log('Ill id: ', illustration._id);
  }

  render() {
    return (
        <div>
          {/* {this.props.bookDetails.illustrations ? (
                this.props.bookDetails.illustrations.map(illustration => (
                <div className="card form-card illust-card"  key={illustration.id}> 
                <h4>{illustration.name}</h4>
                <img src={illustration.img} className="book-img thumbnail img-responsive"/>     
            </div>
            ))
            ) : (<div></div> )} */}

            { this.props.illustrations.filter(item => item.bookId == this.props.bookDetails._id) ? (
                this.props.illustrations.filter(item => item.bookId == this.props.bookDetails._id).map(illustration => (
                <div className="card form-card illust-card"  key={illustration._id}> 
                <h4>{illustration.name}</h4> 
                
                {this.props.users.filter(user => user._id == illustration.userId) ? (
                    this.props.users.filter(user => user._id == illustration.userId).map((user, index) => (
                    <div key={index} className="illustator"><span>Illustrator's name: <span className="illName"> {user.firstName}  {user.lastName} </span></span>                                 
                    {this.props.currentUser._id == illustration.userId ? (
                        <button type="button" onClick={() => { this.deleteIllustr(illustration)}} className="btn btn-danger pull-right remove-post">
                            <span className="glyphicon glyphicon-remove"></span>
                            <span className="hidden-xs">Delete</span>
                        </button>): (<div className="emptyDiv"></div>)}
                    </div>))
                ): (
                    <div></div> 
                )}
                <img src={illustration.imageUrl} className="book-img thumbnail img-responsive"/>     
            </div>
            ))
            ) : (<div></div> )}
        </div>     
    )
  }
}

const mapStateToProps = state => {
    return {
        bookDetails: state.bookDetails,
        illustrations: state.illustrations,
        users: state.users,
        currentUser: state.currentUser
    }
};

const mapStateToDispatch = dispatch => {
  return bindActionCreators({
      getIllustrations: actions.getIllustrations,
      getCurrentBook: actions.getCurrentBook,
      getUsers: actions.getUsers,
      deleteIllustration: actions.deleteIllustration,
  }, dispatch)
}
export default connect(mapStateToProps, mapStateToDispatch)(ImgList);
