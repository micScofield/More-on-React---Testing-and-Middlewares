import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from 'components/App';
import Root from 'Root';

const app = (
  <Root>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Root>
);

ReactDOM.render(
  <React.StrictMode>{app}</React.StrictMode>,
  document.getElementById('root')
);
