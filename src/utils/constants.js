export const STREAM_SERVICES = {
  TWITCH: 'twitch',
  YOUTUBE: 'youtube',
  GOODGAME: 'goodgame',
  NONOLIVE: 'nonolive',
  WASD: 'wasd',
};

export const PRESETS = {
  nytick: {
    player: 'nytick',
    chats: 'honeymad,nytick',
  },
  gg: {
    player: 'goodgame@41677',
    chats: 'honeymad,goodgame@41677',
  },
  nonolive: {
    player: 'nonolive@18407291',
    chats: 'honeymad,nonolive@18407291',
  },
  wasd: {
    player: 'wasd@22196',
    chats: 'honeymad,wasd@22196',
  },
  youtube: {
    player: id => `youtube@${id}`,
    chats: id => `honeymad,youtube@${id}`,
  },
};
