// CRUD create read update delete

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

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

    // db.collection('users').insertOne(
    //   {
    //     name: 'Antoine',
    //     age: 23,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert user');
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection('users').insertMany(
    //   [
    //     {
    //       name: 'Kelly',
    //       age: 23,
    //     },
    //     {
    //       name: 'Léon',
    //       age: 0,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       console.log('Unable to insert documents');
    //     }

    //     console.log(result.ops);
    //   }
    // );

    db.collection('tasks').insertMany(
      [
        {
          description: 'First description',
          completed: true,
        },
        {
          description: 'Second description',
          completed: false,
        },
        {
          description: 'Third description',
          completed: true,
        },
      ],
      (error, result) => {
        if (error) {
          console.log('Unable to insert document');
        }

        console.log(result.ops);
      }
    );
  }
);
