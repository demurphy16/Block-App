import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.css";

function Layout(props) {
  return (
    <div className="layout">
      <Header />
      <div className="layout-children">
        {props.children}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
