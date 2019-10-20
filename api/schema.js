const { TransactionResolver } = require("./resolvers/TransactionResolver");

const { GraphQLObjectType,
        GraphQLSchema,
        GraphQLInt,
        GraphQLString,
        GraphQLList,
} = require('graphql');

const transactionType = new GraphQLObjectType({
  name: 'transactionType',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
  }
});

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    transactions: {
      type: GraphQLList(transactionType),
      resolve: TransactionResolver,
    }
  }
});

const schema = new GraphQLSchema({
  query: queryType
});

module.exports = {
  schema
};