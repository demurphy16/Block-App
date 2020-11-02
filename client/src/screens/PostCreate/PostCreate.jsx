import React, { useState } from "react";
import "./PostCreate.css";
import Layout from "../../components/Shared/Layout/Layout";
import { Redirect } from "react-router-dom";
import { createAnnouncement } from "../../services/announcements";

const PostCreate = (props) => {
  const [announcement, setAnnouncement] = useState({
    title: "",
    imgURL: "",
    content: "",
    category: "",
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAnnouncement({
      ...announcement,
      [name]: value, // [] not always an array, inside object allows you to declare variable as a key
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createAnnouncement(announcement);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/`} />;
  }
  return (
    <Layout user={props.user}>
      <h1 className="create-title">Create Your Announcement</h1>
      <div className="form-container">
        <form className="create-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <div className="title-category">
              <input
                className="input input-title"
                placeholder="Title"
                value={announcement.title}
                name="title"
                required
                autoFocus
                onChange={handleChange}
              />
              <div className="dropdown">
              <label className="label-cat">Select Category:</label>
              <select
                className="input-category"
                value={announcement.category}
                name="category"
                required
                onChange={handleChange}>
                <option>Construction</option>
                <option>Event</option>
                <option>Local Government</option>
                <option>Resources</option>
                <option>Neighborhood</option>
                <option>Local Business</option>
            </select>
              </div>
              </div>
          <textarea
            className="input input-content"
            placeholder="Content"
            value={announcement.content}
            name="content"
            required
            onChange={handleChange}
          />
          <input
            className="input input-image-link"
            placeholder="Image Link"
            value={announcement.imgURL}
            name="imgURL"
            required
            onChange={handleChange}
          />
          <button type="submit" className="submit-button">
              Create Announcement
          </button>
          </div>
        </form>
        </div>
      </Layout>
  );
};

export default PostCreate;