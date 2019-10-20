const { GraphQLObjectType,
        GraphQLSchema,
        GraphQLInt,
        GraphQLString,
        GraphQLList,
} = require('graphql');

const itemType = new GraphQLObjectType({
  name: 'itemType',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
  }
});

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    items: {
      type: GraphQLList(itemType),
      resolve: function() {
        return [{id: "1", name: 'Item1'}, {id: "2", name: 'Item2'}];
      }
    }
  }
});

const schema = new GraphQLSchema({
  query: queryType
});

module.exports = {
  schema
};