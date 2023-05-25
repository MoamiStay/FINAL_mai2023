import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from "./Styles/GlobalStyles";
import Theme from "./Styles/Theme";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import 'antd/dist/antd.css'; // Import the CSS file
import 'moment/locale/en-gb'; // Import the locale for moment.js
import moment from 'moment'; // Import moment.js

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme>
      <GlobalStyle />
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </Theme>
  </React.StrictMode>
);

