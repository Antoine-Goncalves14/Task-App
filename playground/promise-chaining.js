require('../src/db/mongoose');
const User = require('../src/models/user');

User.findByIdAndUpdate('5f23e072af4b45033c67aa86', {
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
