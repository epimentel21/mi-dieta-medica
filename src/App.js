import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const firebaseConfig = {
  apiKey: "AIzaSyCLahLbWHq36JMrOgprctCC7TdwCFZsRpI",
  authDomain: "nutricloud-pro.firebaseapp.com",
  projectId: "nutricloud-pro",
  storageBucket: "nutricloud-pro.firebasestorage.app",
  messagingSenderId: "235206653188",
  appId: "1:235206653188:web:bc3e0a9d9eda676c340c51",
  measurementId: "G-9G01TNQ3S2"
};
