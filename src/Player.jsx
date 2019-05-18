import React from 'react';
import pt from 'prop-types';

const Player = ({ className, src }) => (
  // eslint-disable-next-line jsx-a11y/iframe-has-title
  <iframe className={className} src={src} allow="autoplay" allowFullScreen="true" />
);
Player.propTypes = {
  className: pt.string,
  src: pt.string.isRequired,
};

export default Player;
