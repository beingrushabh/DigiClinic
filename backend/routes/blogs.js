const express = require("express");
const router = express.Router();

const Blog = require("../models/blogs");

router.get("/author/:id", (req, res) => {
	const reg = new RegExp(`^${req.params.id}$`, "i");

	Blog.find({ author: reg }).then((result) => {
		console.log(result);
		res.json(result);
	});
});

router.get("/", (req, res) => {
	Blog.find().then((result) => {
		console.log(result);
		res.json(result);
	});
});

router.post("/", (req, res) => {
	const body = req.body;

	if (!body.author || !body.title || !body.content || !body.tags) res.status(400).send("Wrong Format.");

	new Blog({
		title: body.title,
		content: body.content,
		date: new Date().toISOString(),
		author: body.author,
		tags: body.tags,
	}).save();

	res.send(body);
});

module.exports = router;
