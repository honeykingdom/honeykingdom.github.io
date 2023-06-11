import { useState, useEffect } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import MarkGitHubSvg from '@primer/octicons/build/svg/mark-github-16.svg';

import { StreamService } from './utils/constants';
import type { Frame } from './utils/types';
import getChatTabTitle from './utils/getChatTabTitle';
import usePlayerAndChat from './hooks/usePlayerAndChat';
import useIsMobile from './hooks/useIsMobile';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-black: #0e0c13;
    --color-violet: #2c2541;
    --color-violet-dark: #1f1925;
    --chat-tabs-height: 20px;
    --chat-width: 340px;
  }
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
  }
`;
const Container = styled.div<{ $isMobile: boolean }>`
  display: flex;
  align-items: flex-start;
  height: 100vh;
  font-family: sans-serif;

  ${(p) =>
    p.$isMobile &&
    css`
      flex-direction: column;
      align-items: stretch;
    `}
`;
const WasdIconOverflow = styled.div`
  position: absolute;
  top: 54px;
  right: var(--chat-width);
  width: 32px;
  height: 28px;
`;
type PlayerWrapperProps = {
  $service: StreamService;
  $isMobile: boolean;
};
const PlayerWrapper = styled.div<PlayerWrapperProps>`
  position: relative;
  flex-grow: 1;
  height: 100%;

  ${(p) =>
    p.$service === StreamService.wasd &&
    css`
      --wasd-offset-top: 48px;

      height: calc(100% + var(--wasd-offset-top));
      margin-top: calc(-1 * var(--wasd-offset-top));
      margin-right: -320px;
    `};

  ${(p) =>
    p.$isMobile &&
    css`
      height: auto;
      flex-grow: 0;
      flex-shrink: 0;

      &:after {
        display: block;
        content: '';
        padding-top: 56.25%;
      }
    `}
`;
const Player = styled.iframe.attrs({
  allow: 'autoplay',
  allowFullScreen: true,
})`
  position: absolute;
  top: 0;
  left: 0;
  border: none;
  width: 100%;
  height: 100%;
`;
const ChatsWrapper = styled.div<{ $isMobile: boolean }>`
  position: relative;
  flex-shrink: 0;
  width: var(--chat-width);

  ${(p) =>
    p.$isMobile &&
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
const ChatTabsInner = styled.div`
  display: flex;
  flex-grow: 1;
`;
const ChatTab = styled.div<{ $active: boolean }>`
  flex-grow: 1;
  flex-basis: 0;
  color: ${(p) => (p.$active ? '#d3d3d3' : '#898395')};
  background-color: ${(p) =>
    p.$active ? 'var(--color-violet-dark)' : 'var(--color-black)'};
  font-family: sans-serif;
  font-size: 12px;
  font-weight: bold;
  line-height: var(--chat-tabs-height);
  text-align: center;
  border-right: 1px solid var(--color-violet);
  cursor: pointer;

  &:hover {
    background-color: var(--color-violet-dark);
  }
`;
const GitHubLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--chat-tabs-height);
  background-color: var(--color-black);

  &:hover {
    background-color: var(--color-violet-dark);
  }

  svg path {
    fill: #898395;
  }
`;
const Chat = styled.iframe<{ $active: boolean; $isMobile: boolean }>`
  display: ${(p) => (p.$active ? 'block' : 'none')};
  width: 100%;
  height: calc(100vh - var(--chat-tabs-height));
  border: none;
  background-color: #fff;

  ${(p) =>
    p.$isMobile &&
    css`
      height: calc(100% - var(--chat-tabs-height));
    `}
`;

const handleGitHubLinkClick = () =>
  ga('send', {
    category: 'User Interface',
    eventAction: 'GitHub Repository Click',
  });

const Home = () => {
  const { player, chats } = usePlayerAndChat();
  const [activeChat, setActiveChat] = useState(chats[0].url);

  const isMobileSize = useIsMobile();
  const isMobile = isMobileSize && player.service !== StreamService.wasd;

  useEffect(() => setActiveChat(chats[0].url), [setActiveChat, chats]);

  // remove wads chat if it the same as the player
  const renderedChatFrames = chats.filter(
    ({ service, payload }: Frame) =>
      !(service === StreamService.wasd && payload === player.payload),
  );

  console.log({ player, chats });

  return (
    <>
      <Container $isMobile={isMobile}>
        <PlayerWrapper $service={player.service} $isMobile={isMobile}>
          <Player
            src={player.url}
            title={`${player.service} - ${player.payload}`}
          />
        </PlayerWrapper>
        {player.service === StreamService.wasd && <WasdIconOverflow />}
        <ChatsWrapper $isMobile={isMobile}>
          <ChatTabs>
            <ChatTabsInner>
              {chats.map((chat) => (
                <ChatTab
                  key={chat.url}
                  $active={chat.url === activeChat}
                  onClick={() => setActiveChat(chat.url)}
                >
                  {getChatTabTitle(chat)}
                </ChatTab>
              ))}
            </ChatTabsInner>
            <GitHubLink
              target="_blank"
              rel="noreferrer noopener"
              href="//github.com/honeykingdom/honeykingdom.github.io"
              title="Репозиторий на GitHub"
              onClick={handleGitHubLinkClick}
            >
              <MarkGitHubSvg />
            </GitHubLink>
          </ChatTabs>
          {renderedChatFrames.map(({ url }) => (
            <Chat
              key={url}
              src={url}
              $active={url === activeChat}
              $isMobile={isMobile}
            />
          ))}
        </ChatsWrapper>
      </Container>
      <GlobalStyle />
    </>
  );
};

export default Home;
