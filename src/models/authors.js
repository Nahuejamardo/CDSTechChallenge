import { DataTypes } from "sequelize"
import { instanceMethods, classMethods, hooks } from '../helpers/authors.js'

/**
 * Initialize Author definition
 *
 * @param sequelize Sequelize Instance
 * @returns {AuthorClass} Returns the Author model
 */
 const Author = function( sequelize ) {

  /** Create the schema */
  const model = sequelize.define(
      'author',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          initialAutoIncrement: 1,
          primaryKey: true,
        },
        name: DataTypes.STRING,
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

export default Author
