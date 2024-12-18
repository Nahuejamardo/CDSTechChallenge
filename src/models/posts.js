import { DataTypes } from "sequelize";
import { instanceMethods, classMethods, hooks } from "../helpers/posts.js";

/**
 * Initialize Post definition
 *
 * @param sequelize Sequelize Instance
 * @returns {PostClass} Returns the Post model
 */
const Post = function (sequelize) {
  /** Create the schema */
  const model = sequelize.define(
    "post",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        initialAutoIncrement: 1,
        primaryKey: true,
      },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      authorId: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      instanceMethods,
      classMethods,
      hooks,
    }
  );

  return model;
};

export default Post;
