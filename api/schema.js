const { GraphQLInputObjectType } = require("graphql");

const { all: allTransactions, add: addTransaction } = require("./resolvers/TransactionResolver");

const { GraphQLObjectType,
        GraphQLSchema,
        GraphQLID,
        GraphQLString,
        GraphQLList,
} = require('graphql');

const transactionType = new GraphQLObjectType({
  name: 'transactionType',
  fields: {
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
  }
});

const inputTransactionType = new GraphQLInputObjectType({
  name: 'inputTransactionType',
  fields: {
    name: { type: GraphQLString }
  }
});

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    transactions: {
      type: GraphQLList(transactionType),
      resolve: allTransactions,
    }
  }
});

const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTransaction: {
      type: transactionType,
      args: {
        transaction: {
          type: inputTransactionType
        },
      },
      resolve: addTransaction,
    }
  }
});

const schema = new GraphQLSchema({
  query: queryType,
  mutation: mutationType,
});

module.exports = {
  schema
};