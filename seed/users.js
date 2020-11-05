const db = require("../db/connection");
const user = require("../models/user");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const users = [
    {
      firstName: "Andrew",
    lastName: "Ferris",
    emailAddress: "AppleHutCEO@AppleHut.com",
    cityTown: "Cupertino",
    state: "  CA",
    password: "TigerKingIsMyKing",
    },
  ];

  await user.insertMany(users);
  console.log("Created users!");
};
const run = async () => {
  await main();
  db.close();
};

run();
