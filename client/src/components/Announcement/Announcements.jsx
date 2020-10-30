import React, { useState, useEffect } from "react";
// import "./Announcements.css";

import Announcement from "../../components/Announcement/Announcement";
import Layout from "../../components/shared/Layout/Layout";
import { getAnnouncements } from "../../services/announcements";

const Announcements = () => {
  const [setAnnouncements, setAllAnnouncements] = useState([]);
  // const [queriedPosts, setQueriedPosts] = useState([]);
 

  useEffect(() => {
    const fetchAnnouncements = async () => {
      const announcements = await getAnnouncements();
      setAllAnnouncements(announcements);
      // setQueriedAnnouncements(announcements);
    };
    fetchAnnouncements();
  }, []);



  // const handleSearch = (event) => {
  //   const newQueriedPosts = allPosts.filter((post) =>
  //     post.title.toLowerCase().includes(event.target.value.toLowerCase())
  //   );
  //   setQueriedPosts(newQueriedPosts);
  // };

  // const handleSubmit = (event) => event.preventDefault();

  const announcementsJSX = setAnnouncements.map((announcement, index) => (
    <Announcement
      _id={announcement._id}
      imgURL={announcement.imgURL}
      category={announcement.category}
      title={announcement.title}
      content={announcement.content}
      key={index}
    />
  ));

  return (
    <Layout>
      {/* <Search onSubmit={handleSubmit} onChange={handleSearch} /> */}
      <div className="announcements">{announcementsJSX}</div>
    </Layout>
  );
};

export default Announcements;