import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import AuthProvider from './contexts/AuthContext';
import DatabaseProvider from './contexts/DatabaseContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DatabaseProvider>
        <AuthProvider>
          <App/>
        </AuthProvider>
      </DatabaseProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
