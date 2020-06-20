const express = require("express");
const api = express.Router();
const Blog = require("../models/blogs");

api.get("/author/:id", (req, res) => {
	const reg = new RegExp(`^${req.params.id}$`, "i");

	Blog.find({ author: reg }).then((result) => {
		console.log(result);
		res.json(result);
	});
});

api.route("/")
	.get((req, res) => {
		Blog.find().then((result) => {
			console.log(result);
			res.json(result);
		});
	})
	.post((req, res) => {
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

api.post("/:id/comment", (req, res) => {
	const body = req.body;

	if (!body.author || !body.comment) res.status(400).send("Wrong Format.");

	Blog.updateOne(
		{ _id: req.params.id },
		{
			$push: {
				comments: {
					author: body.author,
					comment: body.comment,
					date: new Date().toISOString(),
				},
			},
		},
		(err, response) => {
			if (err) {
				res.status(500).send("Error in saving the comment");
				return;
			}

			res.send(response);
		}
	);
});

module.exports = api;
