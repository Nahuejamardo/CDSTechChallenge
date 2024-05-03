import express from 'express'
import { Favorite } from '../models/index.js';
const router = express.Router();

/* GET favorites listing. */
router.get('/', async function(req, res) {
  const favorites = await Favorite.findAll()
  
  res.json(favorites);
});

/* GET favorite by id. */
router.get('/:favoriteId', async function(req, res) {
  const { favoriteId } = req.params
  const favorite = await Favorite.findByPk(favoriteId)
  
  res.json(favorite);
});

export default router
