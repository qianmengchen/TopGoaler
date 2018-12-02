/**
 * Returns the channel object for given properties.
 *
 * @function constructChannel
 * @param {string} title - The title of the channel.
 * @param {string} subtitle - The subtitle of the channel.
 * @param {number} creator - The id of the creator.
 * @param {string} image_url - The image_url of the channel.
 * @returns {Object} - The channel object for given properties.
 */
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
