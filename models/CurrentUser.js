module.exports = function (sequelize, DataTypes) {
    var CurrentUser = sequelize.define('CurrentUser', {
        // The email cannot be null, and must be a proper email before creation
        CurrentUserId: {
            type: DataTypes.INTEGER,
            unique: true,
        },
        CurrentUserToken: {
            type: DataTypes.STRING,
        },
        CurrentUserGitHubHandle: {
            type: DataTypes.STRING
        }
    });
    return CurrentUser;
};
