const { collections } = require('../../database');

module.exports = {
  all: () => collections['transaction'].find().toArray(),
  add: (r, input) => collections['transaction'].insertOne(input.transaction),
};