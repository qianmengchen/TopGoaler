export const goToChannel = (subscribed, navigate) => channel_id => {
  if (subscribed) navigate('ChannelMemberView', { channel_id });
  else navigate('ChannelPublicView', { channel_id });
};
