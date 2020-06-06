module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    user_id: {
      type: DataTypes.INTEGER,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    user_name: {
      type: DataTypes.STRING,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: { args: [6, 12], msg: 'Must be 6-12 characters' },
      },
    },
  });
  return User;
};