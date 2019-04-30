export const getChatUrl = ({ service, payload }) => {
  switch (service) {
    case 'twitch':
    default:
      return `//www.twitch.tv/embed/${payload}/chat?darkpopout`;

    case 'nonolive':
      return `//www.nonolive.com/popout/chat/${payload}`;
  }
};

export const getPlayerUrl = ({ service, payload }) => {
  switch (service) {
    case 'twitch':
    default:
      return `//player.twitch.tv/?channel=${payload}`;

    case 'nonolive':
      return `//www.nonolive.com/room/${payload}`;
  }
};
