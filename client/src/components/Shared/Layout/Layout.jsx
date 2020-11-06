import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.css";

function Layout(props) {
  const { deleteStorage, user } = props;

  return (
    <div className="layout">
      <Header deleteStorage={deleteStorage} user={user} />
      <div className="layout-children">
        {props.children}
        <Footer user={user} />
      </div>
    </div>
  );
}

export default Layout;
