require('../src/db/mongoose');
const User = require('../src/models/user');

User.findByIdAndUpdate('5f240e5de3b2d10b21fff9bb', {
  age: 23,
})
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 23 });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
