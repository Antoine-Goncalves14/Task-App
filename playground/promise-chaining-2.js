require('../src/db/mongoose');
const User = require('../src/models/task');
const Task = require('../src/models/task');

User.findByIdAndDelete('5f24121cce81850c991077bd')
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
