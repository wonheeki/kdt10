import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import App from './App1';
// import App from './App2';
import App from './App3';
// import counterReducer from './store/counterReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import visibleReducer from './store/visibleReducer';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './store';
import { composeWithDevTools } from 'redux-devtools-extension';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const store = createStore(counterReducer);
// const store = createStore(visibleReducer);
const store = configureStore({ reducer: rootReducer }, composeWithDevTools());
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <App1 /> */}
    </Provider>
  </React.StrictMode>
);
