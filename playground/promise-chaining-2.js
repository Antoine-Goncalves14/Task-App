require('../src/db/mongoose');
const Task = require('../src/models/task');

// User.findByIdAndDelete('5f24121cce81850c991077bd')
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id, completed) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed });
  return count;
};

deleteTaskAndCount('5f2411d9f7cd220c77940039', false)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
