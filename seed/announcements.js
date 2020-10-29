const db = require("../db/connection");
const announcement = require("../models/announcement");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const announcements = [
    {
      title: "Test 1",
      imgURL:
        "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      content: "This should be the first test item",
      category: "Kyle likes cats",
    },
    {
      title: "Test 2",
      imgURL:
        "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      content: "This should be the second test item",
      category: "Kevin hates cats",
    },
  ];

  await announcement.insertMany(announcements);
  console.log("Created announcements!");
};
const run = async () => {
  await main();
  db.close();
};

run();
