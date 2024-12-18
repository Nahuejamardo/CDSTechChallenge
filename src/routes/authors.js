import express from "express";
import { Author, Favorite, Post } from "../models/index.js";
const router = express.Router();

/* GET authors listing. */
router.get("/", async function (req, res) {
  const authors = await Author.findAll();

  res.json(authors);
});

/* router.get('/', authorController.getAll);                  Router

const getAll = async (req, res) => {                          Controller
  const authors = await Author.findAll()
  
  res.json(authors);
}
  */

/* GET author by id. */
router.get("/:authorId", async function (req, res) {
  const { authorId } = req.params;
  const author = await Author.findByPk(authorId);
  const favoriteCount = await Favorite.count({ where: { authorId } });

  res.json({ ...author.dataValues, favoriteCount });
});

/* GET author posts. */
router.get("/:authorId/posts", async function (req, res) {
  const { authorId } = req.params;
  const author = await Author.findByPk(authorId, { include: Post });
  const favoriteCount = await Favorite.count({ where: { authorId } });

  res.json({ ...author.dataValues, favoriteCount });
});

/* GET author favorites. */
router.get("/:authorId/favorites", async function (req, res) {
  const { authorId } = req.params;
  const author = await Author.findByPk(authorId, { include: Favorite });
  const favoriteCount = await Favorite.count({ where: { authorId } });

  res.json({ ...author.dataValues, favoriteCount });
});

router.post("/", async (req, res) => {
  const { name } = req.body;
  const author = await Author.create({ name });
  res.json(author);
});

router.put("/:authorId/posts/:postId", async (req, res, next) => {
  try {
    const { authorId, postId } = req.params;
    const title = req.body.title;
    const content = req.body.title;
    const postCheck = await Post.findByPk(postId);
    if (!postCheck) {
      throw "Post no encontrado";
    }
    await Post.update({ title, content }, { where: { authorId, id: postId } });
    res.status(204).end();
  } catch (error) {
    console.log(error);
    next({ message: error });
  }
});
export default router;
