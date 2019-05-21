var express = require('express');

const app = express();
require('./app/index');
// require('./redisDemo')

// app.get('/api/v1/todos/:key', (req, res) => {
    // let key = req.params.key;
    // console.log("key value---->",key,"xzjkbxvkjfdbfjk")
    // res.status(200).send({
    //     success: 'true',
    //     message: 'todos retrieved successfully',
    // });
    // client.del(key, function(err,reply){
  
    //   if(err){
    //     res.status(200).send({
    //       success: 'false',
    //       message: "error occurred",
    //     })
    //   }else if(reply == 1) {
    //     res.status(200).send({
    //       success: 'true',
    //       message: "deleted successfully",
    //     })
    //   }else {
    //     res.status(200).send({
    //       success: 'true',
    //       message: "Key is not available in redis cache",
    //     })
    //   }
      
    // })
    
  // });
  const PORT = 5000;

  app.get('/', function (req, res) {
    res.send('GET request to the homepage qwe')
  })
  
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
  });
  