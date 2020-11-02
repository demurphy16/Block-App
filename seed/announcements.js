const db = require("../db/connection");
const announcement = require("../models/announcement");
import construction from "../client/src/assets/img/Announcements_Construction.jps";
import indian from "../client/src/assets/img/indian-parade.jpeg";
import vote from "../client/src/assets/img/Announcements_I_Voted.jpg";
// import spanish from "../client/src/assets/img/"
import cat from "../client/src/assets/img/Announcements_Cats.jpg";

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const announcements = [
    {
      title: "Construction on Rogers St",
      imgURL: construction,
      content:
        "There is construction on Rogers St which is currently blocking the Clarkson intersection.",
      category: "Construction",
    },
    {
      title: "West Indian Day Parade",
      imgURL: indian,
      content:
        "Join us this Saturday for the West Indian Day Parade. This is an event that celebrates the rich West indian culture.",
      category: "Event",
    },
    {
      title: "Are you registered to vote?",
      imgURL: vote,
      content:
        "The deadline to register is coming soon. Find resources to register online today.",
      category: "Local Government",
    },
    {
      title: "BPL Virtual Spanish Group",
      imgURL: indian,
      content:
        "Join the Brooklyn Public Library for their virtual Spanish program.",
      category: "Resources",
    },
    {
      title: "CAT FOUND!!!!",
      imgURL: cat,
      content:
        "We found this tabby on the intersection of Winthrop and Bedford",
      category: "Neighborhood",
    },
    {
      title: "Lunch Special at Mr.Kings",
      imgURL: construction,
      content:
        "Come down to Mr.Kings between 12:00-3:00pm for $10 lunch specials",
      category: "Local Business",
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
