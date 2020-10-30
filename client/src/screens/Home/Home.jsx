import React from "react";
import Layout from "../../components/Shared/Layout/Layout";
import Title from "../../components/Title/title";
import ContentCard from "../../components/ContentCard/ContentCard";

function Home(props) {
  return (
    <Layout>
      <div className="home">
        <Title />
        <div className="content-container">
          <ContentCard cardType={true} />
          <ContentCard cardType={false} />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
