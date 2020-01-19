// eslint-disable-next-line import/prefer-default-export
export enum StreamService {
  twitch = "twitch",
  youtube = "youtube",
  goodgame = "goodgame",
  wasd = "wasd",
  mixer = "mixer"
}

type MakePresetField = (id: string) => string;

export type PresetText = {
  player: string;
  chats: string;
};

export type PresetFunction = {
  player: MakePresetField;
  chats: MakePresetField;
};

export type Preset = PresetText | PresetFunction;

export type Frame = {
  service: StreamService;
  /**
   * chanel id, channel name or youtube id
   */
  payload: string;
  url: string;
};
