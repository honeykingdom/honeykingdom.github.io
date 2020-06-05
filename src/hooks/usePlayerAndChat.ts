import { useState, useEffect } from 'react';
import getPlayerAndChat from 'utils/getPlayerAndChat';

const getPlayerAndChatData = () =>
  getPlayerAndChat({
    hash: window.location.hash,
    searchParams: window.location.search,
  });

const usePlayerAndChat = () => {
  const [state, setState] = useState(getPlayerAndChatData);

  useEffect(() => {
    const handleHashChange = () => {
      setState(getPlayerAndChatData());
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return state;
};

export default usePlayerAndChat;
