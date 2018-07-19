const express = require('express')
const app = express()

app.get('/', (req, res) => {

  var MongoClient = require('mongodb').MongoClient

  MongoClient.connect('mongodb://104.210.223.124:27017', (err, client) => {
    // Client returned
    var db = client.db('app');

    db.collection('users').find({}).toArray(function (findErr, result) {
      if (findErr) res.send('error');
      else res.json(result);
      client.close();
    });
  });
})



app.listen(3000, () => console.log('Example app listening on port 3000!'))