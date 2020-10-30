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
    return <Redirect to={`/announcements`} />;
  }
  return (
      <Layout user={props.user}>
        <form className="create-form" onSubmit={handleSubmit}>
          <input
            className="input-name"
            placeholder="Title"
            value={announcement.title}
            name="title"
            required
            autoFocus
            onChange={handleChange}
          />
          <textarea
            className="input-content"
            rows={10}
            placeholder="Content"
            value={announcement.content}
            name="content"
            required
            onChange={handleChange}
          />
          <input
            className="input-image-link"
            placeholder="Image Link"
            value={announcement.imgURL}
            name="imgURL"
            required
            onChange={handleChange}
          />
          <input
            className="input-category"
            placeholder="Category"
            value={announcement.category}
            name="category"
            required
            onChange={handleChange}
          />
          <button type="submit" className="submit-button">
            Create Announcement
          </button>
        </form>
      </Layout>
  );
};

export default PostCreate;