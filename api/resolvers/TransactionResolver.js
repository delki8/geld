const { collections } = require('../../database');

module.exports = {
  all: () => collections['transaction'].find().toArray(),
};