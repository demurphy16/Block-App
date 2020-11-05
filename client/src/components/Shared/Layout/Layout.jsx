import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.css";

function Layout(props) {
  const { signIn } = props;

  return (
    <div className="layout">
      <Header signIn={signIn} />
      <div className="layout-children">
        {props.children}
        <Footer signIn={signIn} />
      </div>
    </div>
  );
}

export default Layout;
