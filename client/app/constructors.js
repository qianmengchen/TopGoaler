export const constructChannel = (title, subtitle, user) => {
  return {
    title,
    subtitle,
    creator: user,
    subscribed: true
  };
};
