export const constructChannel = (channel, user) => {
  return {
    channel,
    creator: user,
    subscribed: true
  };
};
