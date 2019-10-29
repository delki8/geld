const { collections } = require('../../database');

module.exports = {
  all: () => collections['transaction'].find().toArray(),
  add: (r, { transaction }) => collections['transaction'].insertOne(transaction),
};