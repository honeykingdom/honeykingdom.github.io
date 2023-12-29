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
    chats: 'honeymad,goodgame@Maddyson',
  },
  'gg-lasqa': {
    player: 'goodgame@99600',
    chats: 'lasqa,goodgame@gegeboyz',
  },
  'gg-segall': {
    player: 'goodgame@172112',
    chats: 'segall,goodgame@pleb',
  },
  'gg-arrowwoods': {
    player: 'goodgame@137757',
    chats: 'arrowwoods,goodgame@Arrowwood',
  },
  'gg-melharucos': {
    player: 'goodgame@171713',
    chats: 'melharucos,goodgame@melharucos',
  },
  'gg-liz0n': {
    player: 'goodgame@188564',
    chats: 'liz0n,goodgame@KINOklub',
  },
  'gg-roadhouse': {
    player: 'goodgame@165622',
    chats: 'roadhouse,goodgame@r0adhousegg',
  },
  'gg-peacedaria': {
    player: 'goodgame@187660',
    chats: 'peacedaria',
  },
  'gg-praden': {
    player: 'goodgame@176695',
    chats: 'praden,goodgame@Praden',
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
