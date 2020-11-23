import React from 'react';
import image from './picture.png';
import './App.css';

declare module '*.png'

const App: React.FC = () => {
  return (
    <div className="main-page">
      <h1 className="main-header">First React Application</h1>
      <img src={image} alt="" className="main-image" />
    </div>
  );
}

export default App;
