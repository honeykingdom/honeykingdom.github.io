import { Frame } from "./types";
import { StreamService } from "./constants";

const getChatTabTitle = ({ service, payload }: Frame) =>
  service === StreamService.twitch ? payload : service;

export default getChatTabTitle;
