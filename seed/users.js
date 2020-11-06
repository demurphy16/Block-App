const db = require("../db/connection");
const user = require("../models/user");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const users = [
    {
      firstName: "Andrew",
      lastName: "Ferris",
      emailAddress: "test@gmail.com",
      cityTown: "Cupertino",
      state: "  CA",
      password: "pass",
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
