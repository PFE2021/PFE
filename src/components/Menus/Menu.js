import React from "react";
import "../../App.css";
import profile1 from "../../images/profile1.jpg";
import { NavLink, Link } from "react-router-dom";

const Menu = () => {
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://www.w3schools.com/w3css/4/w3.css"
        />
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1"
        />
        <title>Borkan admin</title>
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        />
        <link rel="stylesheet" type="text/css" href="style.css" />
      </head>

      <body>
        <input type="checkbox" id="nav-toggle" />
        <div className="sidebar">
          <div className="sidebar-brand">
            <h2>
              <span className="lab la-accusoft"></span> <span>Borkan</span>
            </h2>
          </div>

          <div className="sidebar-menu">
            <ul>
              <li>
                <NavLink
                  to="/dashboard"
                  activeStyle={{
                    backgroundColor: "#fff",
                    color: "#ff6106",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                  }}
                >
                  <span className="las la-igloo"></span>
                  <span>Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/productList"
                  activeStyle={{
                    backgroundColor: "#fff",
                    color: "#ff6106",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                  }}
                >
                  <span className="las la-clipboard-list"></span>
                  <span>Product List</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/addProduct"
                  activeStyle={{
                    backgroundColor: "#fff",
                    color: "#ff6106",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                  }}
                >
                  <span className="las la-plus"></span>
                  <span>Add Product</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/category"
                  activeStyle={{
                    backgroundColor: "#fff",
                    color: "#ff6106",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                  }}
                >
                  <span className="las la-list"></span>
                  <span>Category</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/orders"
                  activeStyle={{
                    backgroundColor: "#fff",
                    color: "#ff6106",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                  }}
                >
                  <span className="las la-clipboard"></span>
                  <span>Orders</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/customers"
                  activeStyle={{
                    backgroundColor: "#fff",
                    color: "#ff6106",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                  }}
                >
                  <span className="las la-users"></span>
                  <span>Customers</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/sales"
                  activeStyle={{
                    backgroundColor: "#fff",
                    color: "#ff6106",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                  }}
                >
                  <span className="las la-tags"></span>
                  <span>Sales</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-content">
          <header id="header">
            <h3>
              <label for="nav-toggle">
                <span className="las la-bars"></span>
              </label>
              Dashboard
            </h3>

            <div className="search-wrapper">
              <span className="las la-search"></span>
              <input type="search" placeholder="Search here" />
            </div>

            <div className="user-wrapper">
              <img src={profile1} width="40px" height="40px" alt="" />
              <div>
                <h4>Mehdi Hilmi</h4>
                <small>super admin</small>
              </div>
            </div>
          </header>
        </div>
      </body>
    </html>
  );
};

export default Menu;
