import { DataTypes } from "sequelize"
import { instanceMethods, classMethods, hooks } from '../helpers/favorites.js'

/**
 * Initialize Favorite definition
 *
 * @param sequelize Sequelize Instance
 * @returns {FavoriteClass} Returns the Favorite model
 */
 const Favorite = function( sequelize ) {

  /** Create the schema */
  const model = sequelize.define(
      'favorite',
      {
        id:{
          type: DataTypes.INTEGER,
          autoIncrement: true,
          initialAutoIncrement: 1,
          primaryKey: true
        },
        authorId: DataTypes.INTEGER,
        postId: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      },
      {
          instanceMethods,
          classMethods,
          hooks,
      }
  );

  return model

};

export default Favorite
