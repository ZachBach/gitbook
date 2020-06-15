module.exports = function (sequelize, DataTypes) {
    var Likes = sequelize.define('Likes', {
        // The email cannot be null, and must be a proper email before creation
        likescount: {
            type: DataTypes.INTEGER,
        },
        userid: {
            type: DataTypes.STRING,
        },
        postid: {
            type: DataTypes.INTEGER,
        },
        status: {
            type: DataTypes.BOOLEAN,
        }
    });
    return Likes;
};
