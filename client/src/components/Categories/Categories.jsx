import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
                      src="https://img.freepik.com/free-photo/view-allergens-commonly-found-grains_23-2150170281.jpg?size=626&ext=jpg&ga=GA1.2.651598837.1679294721&semt=sph"

            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
                      src="https://img.freepik.com/free-photo/green-tea-bud-leaves-green-tea-plantations-morning_335224-955.jpg?size=626&ext=jpg&ga=GA1.2.651598837.1679294721&semt=sph"

            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Trending products
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://img.freepik.com/free-photo/countryside-field-sunny-day-countryside_181624-23127.jpg?size=626&ext=jpg&ga=GA1.1.651598837.1679294721&semt=sph"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Season products
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://img.freepik.com/premium-photo/indian-farmer-field_75648-189.jpg?size=626&ext=jpg&ga=GA1.1.651598837.1679294721&semt=sph"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Featured products
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://img.freepik.com/free-photo/vertical-shot-green-wheat-field-white-sky-background_181624-56085.jpg?size=626&ext=jpg&ga=GA1.2.651598837.1679294721&semt=sph"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  All Products
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://img.freepik.com/free-photo/hands-holding-fresh-grain-harvest_53876-139753.jpg?size=626&ext=jpg&ga=GA1.2.651598837.1679294721&semt=sph"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
Millets
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
