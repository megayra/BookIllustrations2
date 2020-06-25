import React, {Component} from "react";
import { Carousel } from 'react-bootstrap';
import bookImg from '../assets/img/cosmos.jpg';
import bookImg1 from '../assets/img/invitation.jpg';
import bookImg2 from '../assets/img/voyage.jpg';

import bookImg3 from '../assets/img/library.jpg';
import bookImg4 from '../assets/img/blogo.png';

class Home extends Component {

    render() {
        return <div className="home-wrapper">
          <div className="headerHome">
            <img
                  className="d-block w-100"
                  src={bookImg3}
                  alt="First slide"
                />
            <div className="heading">
              <h1> Place for your illustrations</h1>
            </div>
          </div>
          <div className="secondSection">
            <div class="content">
              <div class="icon-div">
              <img className=""
                  src={bookImg4}
                  alt="icon"
                />
              </div>
              <div class="icon-heading">
                <h1>You can find your illustrator</h1>
                <h5 class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5>

                <p class="text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
          <div className="slider-home">
          <div className="carousel-wrapper">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={bookImg}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Different Illustrations</h3>
                  <p>Add your book illustrations.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={bookImg1}
                  alt="Third slide"
                />
            
                <Carousel.Caption>
                  <h3>Book Illustrations</h3>
                  <p>Add your illustrations.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={bookImg2}
                  alt="Third slide"
                />
            
                <Carousel.Caption>
                  <h3>Diverse Illustrations for our books</h3>
                  <p>Add your illustrations.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          </div>
      </div>
    }
}

export default Home;
