const request = require('request');

module.exports = {

loadData: function() {

// Get channel_creator table
request('http://localhost:8001/channel_creator/', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(res.body);
  });

// Get channel_task table
request('http://localhost:8001/channel_task/', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    
  });
  
  // Get channel_user_subscribe table
  request('http://localhost:8001/channel_user_subscribe/', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    
  });
  
  // Get task_info table
  request('http://localhost:8001/task_info/', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    
  });
  
  //Get user_channel_point info
  request('http://localhost:8001/user_channel_point/', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    
  });
  
  // Get user_task_info table
  request('http://localhost:8001/user_task_info/', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    
  });

    }
}










