
import author from './authors.js'
import post from './posts.js'
import favorite from './favorites.js'
import sequelize from '../config/db.js';

const Author = author(sequelize);
const Post = post(sequelize);
const Favorite = favorite(sequelize);

Author.hasMany(Post)
Author.hasMany(Favorite)
Author.belongsToMany(Post, { as: 'favoritePosts', through: Favorite })

Post.belongsTo(Author)
Post.hasMany(Favorite)

Favorite.belongsTo(Author)
Favorite.belongsTo(Post)

export {
  Author,
  Post,
  Favorite,
};
