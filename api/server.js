const express = require("express");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
	res.json({ message: "Chris Tutors Portfolio back end" });
});

module.exports = server;
