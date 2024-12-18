import express from "express";
import { Post } from "../models/index.js";
const router = express.Router();

/* GET posts listing. */
router.get("/", async function (req, res) {
  const posts = await Post.findAll();

  res.json(posts);
});

/* GET post by id. */
router.get("/:postId", async function (req, res) {
  const { postId } = req.params;
  const post = await Post.findByPk(postId);

  res.json(post);
});

export default router;
