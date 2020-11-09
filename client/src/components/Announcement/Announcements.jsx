import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Announcements.css";

import Announcement from "../../components/Announcement/Announcement";
import { getAnnouncements } from "../../services/announcements";

const Announcements = () => {
  const [setAnnouncements, setAllAnnouncements] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      const announcements = await getAnnouncements();
      setAllAnnouncements(announcements);
    };
    fetchAnnouncements();
  }, []);

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
    <div className="announcements">
      <div className="announcements-content">
        <h2>Announcements</h2>
        <Link className="create-link" to="/announcements/create">
          Make an announcement
        </Link>
      </div>
      <div className="announcements-subheader">
        <h3>Check out the current announcements.</h3>
      </div>
      <div className="announcements-container">{announcementsJSX}</div>
    </div>
  );
};

export default Announcements;
