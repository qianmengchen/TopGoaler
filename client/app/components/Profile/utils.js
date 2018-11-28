export const userChannelFilter = id => user_channel =>
  user_channel.user_id === id;

export const channelGetter = (user_channels, channels) =>
  user_channels.map(user_channel => channels[user_channel.channel_id]);

export const userTaskFilter = id => user_task => user_task.user_id === id;

export const taskGetter = (user_tasks, tasks) =>
  user_tasks.map(user_task => tasks[user_task.task_id]);
