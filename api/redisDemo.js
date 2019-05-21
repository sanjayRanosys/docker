var redis = require('redis');
var client = redis.createClient();
// const https = require("https")
const url = "https://jsonplaceholder.typicode.com/posts/1";
var express = require('express');
// import db from './db/db';
// Set up the express app
const app = express();

client.on('connect', function() {
  console.log('Redis client connected');
});

client.on('error', function (err) {
  console.log('Something went wrong ' + err);
});

client.set('framework','value1', function (err,reply) {
  console.log( err + reply);
});

// get all todos
app.get('/api/v1/todos/:key', (req, res) => {
  let key = req.params.key;
  console.log("key value---->",key)
  client.del(key, function(err,reply){

    if(err){
      res.status(200).send({
        success: 'false',
        message: "error occurred",
      })
    }else if(reply == 1) {
      res.status(200).send({
        success: 'true',
        message: "deleted successfully",
      })
    }else {
      res.status(200).send({
        success: 'true',
        message: "Key is not available in redis cache",
      })
    }
    
  })
  
});
const PORT = 5001;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});




// client.set('my test key', 'my test value', function(error, result) {
//   if (error) console.log(error);
//   console.log('GET result ->', result)
// });
// client.get('my test key', function(error, result) {
//   if (error) throw error;
//   console.log('GET result ->', result)
// });


// https.get(url, res => {
//   res.setEncoding("utf8");
//   let body = "";
//   res.on("data", data => {
//     body += data;
//   });
//   res.on("end", () => {
//     body = JSON.parse(body);
//     client.set('json', JSON.stringify(body)); 
//     console.log(body);
//   });
// });

// client.set('framework', 'AngularJS', function(err, reply) {
//   console.log(reply);
// });
// client.get('framework', function(err, reply) {
//   console.log("framework key reply",reply);
// });
// client.del('framework', function(err, reply) {
//   console.log(reply);
// });