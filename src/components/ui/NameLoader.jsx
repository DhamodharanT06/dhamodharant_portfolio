import React from 'react';
import './NameLoader.css';

const NameLoader = () => {
  return (
    <div className="loader" id="loader">
      <div className="loader-wrapper">
        <span className="loader-letter">D</span>
        <span className="loader-letter">h</span>
        <span className="loader-letter">a</span>
        <span className="loader-letter">m</span>
        <span className="loader-letter">o</span>
        <span className="loader-letter">d</span>
        <span className="loader-letter">h</span>
        <span className="loader-letter">a</span>
        <span className="loader-letter">r</span>
        <span className="loader-letter">a</span>
        <span className="loader-letter">n</span>
        <div className="loader-circle" />
      </div>
    </div>
  );
}

export default NameLoader;
