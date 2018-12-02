/**
 * An action object to redirect to different views of a channel.
 *
 * @function goToChannel
 * @param {boolean} subscribed - The boolean showing whether the current user is in the channel.
 * @param {Function} navigate - The naviagator which takes a string and redirect to corresponding page.
 */
export const goToChannel = (subscribed, navigate) => id => {
  if (subscribed) navigate('ChannelMemberView', { id });
  else navigate('ChannelPublicView', { id });
};
