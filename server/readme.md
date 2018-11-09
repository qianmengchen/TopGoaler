## TopGoaler Server


## Run

Run `node server.js` under server file to run your server

Then in webbrowser, (I choose safari), use http call to connect with server.
or, you can use curl call in terminal.

For example ,
curl http:/localhost:8001/channel_creator/bxzhu_channel will helpe you to get channel=bxzhu_channel in table channel_creator


## For TopGoaler Developer
If you want to connect our database using some mysql editor, the public ip of database is 35.184.195.161, account name is root, password is cs130

Currently, we have 6 tables,
channel_creator: 
    usage: stores the channel and creator_user
    columns: channel, creator

channel_task:
    usage: stores the channel and task
    columns: channel, task

channel_user_subscribe:
    usage: stores the channel and user who subscribe the corresponding channel
    columns: channel, user  

task_info:
    usage: stores information for a specific task
    columns: task, channel, creator, point

user_channel_point:
    usage: use for user perfomance analysis, for each channel user subscribed, there is a point for that user.
    columns: task, channel, point

user_task_info:
    usage: stores information for a specific task for a user
    columns: user, task, channel, state, task_log

 ## Userful documentation

 https://code.tutsplus.com/series/code-your-first-api-with-nodejs-and-express--cms-1291
 
 

## Contributors

Qianmeng Chen

Pochao Yang

Zhouheng Sun

Amir Saad

Brian Be

Bingxin Zhu