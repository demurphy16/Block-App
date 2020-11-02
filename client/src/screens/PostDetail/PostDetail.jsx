import React, { useState, useEffect } from "react";
import "./PostDetail.css"
import Layout from "../../components/Shared/Layout/Layout";
import { getAnnouncement, deleteAnnouncement } from "../../services/announcements";
import { useParams, Link, Redirect } from "react-router-dom";

const PostDetail = () => {
  const [announcement, setAnnouncement] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();
  const [isDeleted, setDeleted] = useState(false);

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const deleted = await deleteAnnouncement(announcement._id);
    setDeleted({ deleted });
  };

  if (isDeleted) {
    return <Redirect to={`/home`} />;
  }

  return (
    <Layout>
      <div className="announcement-detail">
        <img className="announcement-detail-image" src={announcement.imgURL} alt={announcement.title} />
        <div className="detail">
          <div className="detail-title">{announcement.title}</div>
          <div className="detail-content">{announcement.content}</div>
          <div className="detail-button-container">
            <button className="edit-button">
              <Link className="edit-link" to={`/announcements/${announcement._id}/edit`}>
                Edit
              </Link>
            </button>
            <button
              className="delete-button"
              onClick={handleSubmit}
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