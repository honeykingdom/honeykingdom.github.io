import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

document.title = 'HoneyNyticK - Twitch';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-black: #0e0c13;
    --color-violet: #2c2541;
    --color-violet-dark: #1f1925;
  }
  body {
    margin: 0;
  }
`;
const Container = styled.div`
  display: flex;
  height: 100vh;
`;
const Player = styled.iframe.attrs({ allowfullscreen: 'true' })`
  border: none;
  width: 100%;
`;
const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ChatTabs = styled.div`
  display: flex;
  border-bottom: 1px solid var(--color-violet);
`;
const ChatTab = styled.div`
  padding: 6px 0;
  flex-grow: 1;
  flex-basis: 0;
  color: #d3d3d3;
  background-color: var(${props => (props.active ? '--color-violet-dark' : '--color-black')});
  font-family: sans-serif;
  font-size: 12px;
  text-align: center;
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  cursor: pointer;
  &:hover {
    background-color: var(--color-violet-dark);
  }
  &:not(:last-child) {
    border-right: 1px solid var(--color-violet);
  }
`;
const Chat = styled.iframe`
  border: none;
  display: ${props => (props.active ? 'block' : 'none')};
  width: 340px;
  flex-grow: 1;
  flex-shrink: 0;
`;

const player = 'honeymad';
const chats = ['honeymad', 'nytick'];

const getTwitchChat = channel => `//www.twitch.tv/embed/${channel}/chat?darkpopout`;
const getTwitchPlayer = channel => `//player.twitch.tv/?channel=${channel}`;

const App = () => {
  const [activeChat, setActiveChat] = useState(chats[0]);

  return (
    <>
      <Container>
        <Player src={getTwitchPlayer(player)} />
        <ChatWrapper>
          <ChatTabs>
            {chats.map(chat => (
              <ChatTab key={chat} active={chat === activeChat} onClick={() => setActiveChat(chat)}>
                {chat}
              </ChatTab>
            ))}
          </ChatTabs>
          {chats.map(chat => (
            <Chat key={chat} active={chat === activeChat} src={getTwitchChat(chat)} />
          ))}
        </ChatWrapper>
      </Container>
      <GlobalStyle />
    </>
  );
};

export default App;
