module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    user_id: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    user_name: {
      type: DataTypes.STRING,
      unique: true
    },
    avatar: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    bio: {
      type: DataTypes.STRING,
    },
    profile: {
      type: DataTypes.STRING,
    },    
  });
  return User;
};