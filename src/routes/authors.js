import express from 'express'
import { Author, Favorite, Post } from '../models/index.js';
const router = express.Router();

/* GET authors listing. */
router.get('/', async function(req, res) {
  const authors = await Author.findAll()
  
  res.json(authors);
});

/* GET author by id. */
router.get('/:authorId', async function(req, res) {
  const { authorId } = req.params
  const author = await Author.findByPk(authorId)
  const favoriteCount = await Favorite.count({ where: { authorId } })

  res.json({ ...author.dataValues, favoriteCount });
});

/* GET author posts. */
router.get('/:authorId/posts', async function(req, res) {
  const { authorId } = req.params
  const author = await Author.findByPk(authorId, {include: Post })
  const favoriteCount = await Favorite.count({ where: { authorId } })
  
  res.json({ ...author.dataValues, favoriteCount });
});

/* GET author favorites. */
router.get('/:authorId/favorites', async function(req, res) {
  const { authorId } = req.params
  const author = await Author.findByPk(authorId, {include: Favorite})
  const favoriteCount = await Favorite.count({ where: { authorId } })
  
  res.json({ ...author.dataValues, favoriteCount });
});

export default router;
