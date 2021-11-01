// this is contact sectin where you can provide your thought about us
import React from "react";
import { Button } from "react-bootstrap";
import "./contact.css";
const Contact = () => {
  return (
    <div id="Contacts">
      <h1 class="heading">
        <span>c</span>
        <span>o</span>
        <span>n</span>
        <span>t</span>
        <span>a</span>
        <span>c</span>
        <span>t</span>
      </h1>
      <div className="row d-flex justify-content-center align-items-center contact">
        <div className="col-md-5">
          <img
            src="https://i.ibb.co/wy9SWV7/contact-img.png"
            className="px-3 w-100"
          />
        </div>
        <div className="col-md-7">
          <form action="">
            <div class="inputBox">
              <input type="text" placeholder="name" />
              <input type="email" placeholder="email" />
            </div>
            <div class="inputBox">
              <input type="number" placeholder="number" />
              <input type="text" placeholder="subject" />
            </div>
            <textarea
              placeholder="message"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <Button className="booking-btn rounded p-2">Send Messge</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
