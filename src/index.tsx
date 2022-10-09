import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';

import App from './App';

ReactGA.initialize('UA-139550930-1');
ReactGA.pageview(
  window.location.pathname + window.location.search + window.location.hash,
);

ReactDOM.render(<App />, document.getElementById('root'));
