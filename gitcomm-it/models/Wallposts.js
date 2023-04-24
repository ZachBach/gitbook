module.exports = function (sequelize, DataTypes) {
  var WallPost = sequelize.define('WallPost', {
    // The email cannot be null, and must be a proper email before creation
    wallPostId: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    wallPostContent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userid: {
      type: DataTypes.STRING,
    },
    parentpostid: {
      type: DataTypes.INTEGER,
    }
  });
  return WallPost;
};
