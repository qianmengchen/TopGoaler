export const constructChannel = (title, subtitle, creator, image_url) => {
  if (!image_url)
    image_url = 'http://shortlink.in/themes/v3/styles/img/url-link.png';
  return {
    title,
    subtitle,
    creator,
    image_url
  };
};
