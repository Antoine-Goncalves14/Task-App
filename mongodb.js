// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName);

    // db.collection('users').findOne(
    //   { _id: ObjectID('5f22bbf5f290a572b471a289') },
    //   (error, user) => {
    //     if (error) {
    //       return console.log('Unable to fetch');
    //     }

    //     console.log(user);
    //   }
    // );

    // db.collection('users')
    //   .find({ age: 23 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    db.collection('tasks').findOne(
      { _id: ObjectID('5f229059edc1c06c5969b37c') },
      (error, task) => {
        if (error) {
          return console.log('Unable to fetch');
        }

        console.log(task);
      }
    );

    db.collection('tasks')
      .find({ completed: false })
      .toArray((error, tasks) => {
        console.log(tasks);
      });
  }
);
