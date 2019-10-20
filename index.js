const express = require('express');
const graphqlHTTP = require('express-graphql');
const path = require('path');
const cors = require('cors');
const { schema } = require('./api/schema');

const app = express();
app.use(cors());

// serve the static files from the react app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

// handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 8090;
app.listen(port);

console.log('App is listening on port ' + port);