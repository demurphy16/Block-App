import React, { useState, useEffect } from "react";
// import "./PostEdit.css";
import { useParams, Redirect } from "react-router-dom";
import Layout from "../../components/Shared/Layout/Layout";
import { getAnnouncement, updateAnnouncement } from "../../services/announcements";

const PostEdit = (props) => {
  const [announcement, setAnnouncement] = useState({
    title: "",
    imgURL: "",
    content: "",
    category:""
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const announcement = await getAnnouncement(id);
      setAnnouncement(announcement);
    };
    fetchPost();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAnnouncement({
      ...announcement,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let { id } = props.match.params;
    const updated = await updateAnnouncement(id, announcement);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/announcements/${props.match.params.id}`} />;
  }

  return (
    <Layout user={props.user}>
      <div className="post-edit">
        <div className="image-container">
          <img className="edit-announcement-image" src={announcement.imgURL} alt={announcement.title} />
          <form onSubmit={handleSubmit}>
            <input
              className="edit-input-image-link"
              placeholder="Image Link"
              value={announcement.imgURL}
              name="imgURL"
              required
              onChange={handleChange}
            />
          </form>
        </div>
        <form className="edit-form" onSubmit={handleSubmit}>
          <input
            className="edit-input-title"
            placeholder="Title"
            value={announcement.title}
            name="title"
            required
            autoFocus
            onChange={handleChange}
          />
          <textarea
            className="edit-textarea-content"
            rows={10}
            cols={78}
            placeholder="content"
            value={announcement.content}
            name="content"
            required
            onChange={handleChange}
          />
          <input
            className="edit-announcement-category"
            placeholder="Announcement Category"
            value={announcement.category}
            name="category"
            required
            onChange={handleChange}
          />
          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default PostEdit;