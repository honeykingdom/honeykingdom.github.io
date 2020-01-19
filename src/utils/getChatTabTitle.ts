import { Frame, StreamService } from "./types";

const getChatTabTitle = ({ service, payload }: Frame) =>
  service === StreamService.twitch ? payload : service;

export default getChatTabTitle;
