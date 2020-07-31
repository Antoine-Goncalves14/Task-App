require('../src/db/mongoose');
const User = require('../src/models/user');

// User.findByIdAndUpdate('5f240e5de3b2d10b21fff9bb', {
//   age: 23,
// })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 23 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount('5f240e5de3b2d10b21fff9bb', 24)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
