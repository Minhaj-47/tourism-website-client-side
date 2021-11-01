//here mention some extra service we provide
import React from "react";
import "./compliments.css";

const Compliments = () => {
  return (
    <div id="services">
      <h1 className="heading">
        <span>s</span>
        <span>e</span>
        <span>r</span>
        <span>v</span>
        <span>i</span>
        <span>c</span>
        <span>e</span>
        <span>s</span>
      </h1>
      <div className="box-container">
        <div className="box">
          <i className="fas fa-hotel"></i>
          <h3>affordable hotels</h3>
          <p>
            We reseach constantly to give our customers affordable hotels with
            good service.We don't lower our quality in the name of affordable
            hotel.
          </p>
        </div>
        <div className="box">
          <i className="fas fa-utensils"></i>
          <h3>food and drinks</h3>
          <p>
            We have complimentary drinks availabe ..plus we different kind of
            drinks available from different culture and cousine..you name one we
            will get that drink for you.
          </p>
        </div>
        <div className="box">
          <i className="fas fa-bullhorn"></i>
          <h3>safty guide</h3>
          <p>
            we will provide a guide with you to show you around and give you the
            knowledge of that place history.Your safety will be our first
            priority , our guide service is among the best in the world.
          </p>
        </div>
        <div className="box">
          <i className="fas fa-globe-asia"></i>
          <h3>around the world</h3>
          <p>
            we have all kind of packages for traveling different parts of the
            world. If you are new to travel our company is the right choice for
            you to travel with ,there will be no hidden cost ..and all the
            travel expenses and information will be available for you guys to
            see.
          </p>
        </div>
        <div className="box">
          <i className="fas fa-plane"></i>
          <h3>fastest travel</h3>
          <p>
            we will make sure you're flight will be on time . And you don't have
            wait forever for transport in a unknown country we will provide
            everything.
          </p>
        </div>
        <div className="box">
          <i className="fas fa-hiking"></i>
          <h3>adventures</h3>
          <p>
            Those who love adventures , we are happy to inform you guys that we
            include many adventure sport in our packages like
            snorkling,hiking,diving,paracyling and so on..
          </p>
        </div>
      </div>
    </div>
  );
};

export default Compliments;
