export const goToChannel = (subscribed, navigate) => id => {
  if (subscribed) navigate('ChannelMemberView', { id });
  else navigate('ChannelPublicView', { id });
};
