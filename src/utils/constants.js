export const STREAM_SERVICES = {
  TWITCH: 'twitch',
  YOUTUBE: 'youtube',
  GOODGAME: 'goodgame',
  NONOLIVE: 'nonolive',
  WASD: 'wasd',
  MIXER: 'mixer',
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
  'gg-lasqa': {
    player: 'goodgame@99600',
    chats: 'lasqa,goodgame@99600',
  },
  'gg-segall': {
    player: 'goodgame@99600',
    chats: 'segall,goodgame@99600',
  },
  'gg-arrowwoods': {
    player: 'goodgame@137757',
    chats: 'arrowwoods,goodgame@137757',
  },
  'gg-melharucos': {
    player: 'goodgame@171713',
    chats: 'melharucos,goodgame@171713',
  },
  'gg-liz0n': {
    player: 'goodgame@79564',
    chats: 'liz0n,goodgame@79564',
  },
  'gg-roadhouse': {
    player: 'goodgame@130743',
    chats: 'roadhouse,goodgame@130743',
  },
  'gg-zanuda': {
    player: 'goodgame@88446',
    chats: 'zanuda,goodgame@88446',
  },
  nonolive: {
    player: 'nonolive@18407291',
    chats: 'honeymad,nonolive@18407291',
  },
  wasd: {
    player: 'wasd@22196',
    chats: 'honeymad,wasd@22196',
  },
  'wasd-cake': {
    player: 'wasd@40656',
    chats: 'c_a_k_e,wasd@40656',
  },
  'wasd-zanuda': {
    player: 'wasd@20402',
    chats: 'zanuda,wasd@20402',
  },
  'wasd-lasqa': {
    player: 'wasd@164328',
    chats: 'lasqa,goodgame@99600,wasd@164328',
  },
  youtube: {
    player: (id) => `youtube@${id}`,
    chats: (id) => `honeymad,youtube@${id}`,
  },
  mixer: {
    player: 'mixer@JoaquinPanis',
    chats: 'honeymad,mixer@JoaquinPanis',
  },
};
