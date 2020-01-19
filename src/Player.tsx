import React from "react";

type Props = {
  className?: string;
  src: string;
  title: string;
};

const Player = ({ className, src, title }: Props) => (
  <iframe
    className={className}
    src={src}
    title={title}
    allow="autoplay"
    allowFullScreen
  />
);

export default Player;
