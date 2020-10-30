import React from "react";
import Announcements from "../../components/Announcement/Announcements";
import Layout from "../../components/Shared/Layout/Layout";
import Title from "../../components/Title/title";
import ContentCard from "../../components/ContentCard/ContentCard";
import "./Home.css";

function Home(props) {
  return (
    <Layout>
      <div className="home">
        <Title />
        <div className="content-container">
          <ContentCard cardType={true} />
          <ContentCard cardType={false} />
          <Announcements />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
