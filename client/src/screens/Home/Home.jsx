import React from "react";
import Layout from "../../components/Shared/Layout/Layout";
import ContentCard from "../../components/ContentCard/ContentCard";

function Home(props) {
  // const [resources, setResources] = useState(true);
  // const [community, setCommunity] = useState(false);
  return (
    <Layout>
      <div className="home">
        <ContentCard cardType={true} />
        <ContentCard cardType={false} />
      </div>
    </Layout>
  );
}

export default Home;
