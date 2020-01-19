import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle, css } from "styled-components";

import Player from "./Player";
import { StreamService, Frame } from "./utils/types";
import getChatTabTitle from "./utils/getChatTabTitle";
import usePlayerAndChat from "./hooks/usePlayerAndChat";
import useIsMobile from "./hooks/useIsMobile";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-black: #0e0c13;
    --color-violet: #2c2541;
    --color-violet-dark: #1f1925;
    --chat-tabs-height: 20px;
    --chat-witdh: 340px;
  }
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
  }
`;
const Container = styled.div<{ isMobile: boolean }>`
  display: flex;
  align-items: flex-start;
  height: 100vh;
  font-family: sans-serif;

  ${p =>
    p.isMobile &&
    css`
      flex-direction: column;
      align-items: stretch;
    `}
`;
const WasdIconOverflow = styled.div`
  position: absolute;
  top: 54px;
  right: var(--chat-witdh);
  width: 32px;
  height: 28px;
`;
const PlayerWrapper = styled.div<{ service: StreamService; isMobile: boolean }>`
  position: relative;
  flex-grow: 1;
  height: 100%;

  ${p =>
    p.service === StreamService.wasd &&
    css`
      --wasd-offset-top: 48px;

      height: calc(100% + var(--wasd-offset-top));
      margin-top: calc(-1 * var(--wasd-offset-top));
      margin-right: -320px;
    `};

  ${p =>
    p.isMobile &&
    css`
      height: auto;
      flex-grow: 0;
      flex-shrink: 0;

      &:after {
        display: block;
        content: "";
        padding-top: 56.25%;
      }
    `}
`;
const StyledPlayer = styled(Player)`
  position: absolute;
  top: 0;
  left: 0;
  border: none;
  width: 100%;
  height: 100%;
`;
const ChatsWrapper = styled.div<{ isMobile: boolean }>`
  position: relative;
  flex-shrink: 0;
  width: var(--chat-witdh);

  ${p =>
    p.isMobile &&
    css`
      width: 100%;
      flex-grow: 1;
    `}
`;
const ChatTabs = styled.div`
  display: flex;
  height: var(--chat-tabs-height);
  border-bottom: 1px solid var(--color-violet);
`;
const ChatTab = styled.div<{ active: boolean }>`
  flex-grow: 1;
  flex-basis: 0;
  color: ${p => (p.active ? "#d3d3d3" : "#898395")};
  background-color: ${p =>
    p.active ? "var(--color-violet-dark)" : "var(--color-black)"};
  font-family: sans-serif;
  font-size: 12px;
  font-weight: bold;
  line-height: var(--chat-tabs-height);
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: var(--color-violet-dark);
  }
  &:not(:last-child) {
    border-right: 1px solid var(--color-violet);
  }
`;
const Chat = styled.iframe<{ active: boolean; isMobile: boolean }>`
  display: ${p => (p.active ? "block" : "none")};
  width: 100%;
  height: calc(100vh - var(--chat-tabs-height));
  border: none;
  background-color: #fff;

  ${p =>
    p.isMobile &&
    css`
      height: calc(100% - var(--chat-tabs-height));
    `}
`;

const App = () => {
  const { player, chats } = usePlayerAndChat();
  const [activeChat, setActiveChat] = useState(chats[0].url);

  const isMobileSize = useIsMobile();
  const isMobile = isMobileSize && player.service !== StreamService.wasd;

  useEffect(() => setActiveChat(chats[0].url), [setActiveChat, chats]);

  // remove wads chat if it the same as the player
  const renderedChatFrames = chats.filter(
    ({ service, payload }: Frame) =>
      !(service === StreamService.wasd && payload === player.payload)
  );

  return (
    <>
      <Container isMobile={isMobile}>
        <PlayerWrapper service={player.service} isMobile={isMobile}>
          <StyledPlayer
            src={player.url}
            title={`${player.service} - ${player.payload}`}
          />
        </PlayerWrapper>
        {player.service === StreamService.wasd && <WasdIconOverflow />}
        <ChatsWrapper isMobile={isMobile}>
          <ChatTabs>
            {chats.map(chat => (
              <ChatTab
                key={chat.url}
                active={chat.url === activeChat}
                onClick={() => setActiveChat(chat.url)}
              >
                {getChatTabTitle(chat)}
              </ChatTab>
            ))}
          </ChatTabs>
          {renderedChatFrames.map(({ url }) => (
            <Chat
              key={url}
              active={url === activeChat}
              src={url}
              isMobile={isMobile}
            />
          ))}
        </ChatsWrapper>
      </Container>
      <GlobalStyle />
    </>
  );
};

export default App;
