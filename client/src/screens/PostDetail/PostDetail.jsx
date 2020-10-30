import React, { useState, useEffect } from "react";
// import "./PostDetail.css";
import Layout from "../../components/shared/Layout/Layout";
import { getAnnouncement, deleteAnnouncement } from "../../services/announcements";
import { useParams, Link } from "react-router-dom";

const PostDetail = () => {
  const [announcement, setAnnouncement] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const announcement = await getAnnouncement(id);
      setAnnouncement(announcement);
      setLoaded(true);
    };
    fetchPost();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <Layout>
      <div className="announcement-detail">
        <img className="announcement-detail-image" src={announcement.imgURL} alt={announcement.title} />
        <div className="detail">
          <div className="title">{announcement.title}</div>
          <div className="content">{announcement.content}</div>
          <div className="button-container">
            <button className="edit-button">
              <Link className="edit-link" to={`/announcements/${announcement._id}/edit`}>
                Edit
              </Link>
            </button>
            <button
              className="delete-button"
              onClick={() => deleteAnnouncement(announcement._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostDetail;