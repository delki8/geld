const mongo = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
let collections = {};

mongo.connect(url,
  { useNewUrlParser: true,
    useUnifiedTopology: true },
  )
  .then((client) => {
    const db = client.db('geld');
    collections['transaction'] = db.collection('transaction');
  })
  .catch(err => console.error(err));

module.exports = {
  collections
};