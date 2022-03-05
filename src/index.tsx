import ReactDOM from 'react-dom';

import GlobalProvider from 'GlobalProvider';
import App from 'App';

ReactDOM.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,
  document.getElementById('root')
);
