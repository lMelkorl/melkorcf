import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'alertifyjs/build/css/alertify.min.css';
import { Provider } from 'react-redux';
import configureStore from './redux/reducers/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <App />
    </Provider>
  </React.StrictMode>
);