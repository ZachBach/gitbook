module.exports = async function (db) {
  try {
    const users = await db.User.bulkCreate([
      {
        firstName: 'Eric',
        lastName: 'Mo',
        email: 'ssorpg@gmail.com',
        password: 'this is not a safe password',
        user_id: 1,
        github_username:'test_github',
        specialty: 'javascript'
      },
      {
        firstName: 'Brian',
        lastName: 'Teacher',
        email: 'idontknow@somewhere.com',
        password: 'this is not a safe password',
        user_id: 2,
        github_username:'test_github',
        specialty: 'javascript'
      },
      {
        firstName: 'Zach',
        lastName:'React',
        email: 'idontknoweither@somewhere.com',
        password: 'this is not a safe password',
        user_id: 3,
        github_username:'test_github',
        specialty: 'javascript'
      },
    ]);
  }
  catch (error) {
    console.log(error.message);
  }
};