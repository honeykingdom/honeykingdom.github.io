import type { Preset } from './types';

export enum StreamService {
  twitch = 'twitch',
  youtube = 'youtube',
  goodgame = 'goodgame',
  rutube = 'rutube',
  vkplay = 'vkplay',
}

export const PRESETS: Record<string, Preset> = {
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
  'gg-nuke73': {
    player: 'goodgame@3610',
    chats: 'nuke73,goodgame@3610',
  },
  'gg-peacedaria': {
    player: 'goodgame@187660',
    chats: 'peacedaria',
  },
  'gg-praden': {
    player: 'goodgame@176695',
    chats: 'praden,goodgame@176695',
  },
  youtube: {
    player: (id: string) => `youtube@${id}`,
    chats: (id: string) => `honeymad,youtube@${id}`,
  },
  'rt-lasqa': {
    player: (id: string) => `rutube@${id}`,
    chats: () => 'lasqa',
  },
};
