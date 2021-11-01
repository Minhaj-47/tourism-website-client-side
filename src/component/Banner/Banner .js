//this is banner section
import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div id="banner">
      <Carousel fade>
        <Carousel.Item>
          <img
            className=" d-block w-100"
            src="https://i.ibb.co/2K5VdLY/Beautiful-aerial-view-of-beach-and-sea.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text-warning fw-bolder bg-light rounded opacity-75">
              ADVENTURE IS WORHWHILE
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-25"
            src="https://i.ibb.co/YbRG3nT/Tourism-with-backpack-walking-on-wooden-path-Vang-vieng-in-Laos.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="text-warning fw-bolder bg-light rounded opacity-75">
              ADVENTURE IS WORHWHILE
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-25"
            src="https://i.ibb.co/vPJCWWp/Beautiful-girl-standing-on-viewpoint-at-Koh-Nangyuan-island-near-Koh-Tao-island-Surat-Thani-in-Thail.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="text-warning fw-bolder bg-light rounded opacity-75">
              ADVENTURE IS WORHWHILE
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-25"
            src="https://i.ibb.co/nD2kmS3/Woman-with-hat-sitting-on-chairs-beach-in-beautiful-tropical-beach-Woman-relaxing-on-a-tropical-beac.jpg"
            alt="Fourth slide"
          />

          <Carousel.Caption>
            <h3 className="text-warning fw-bolder bg-light rounded opacity-75">
              ADVENTURE IS WORHWHILE
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
