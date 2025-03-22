import React from 'react';
import './circle.module.css';


function CircleMenu() {
  return (
    <nav className="circle-menu">
      <div className="center" />
      <ul>
        <li>
          <a className="icon-gist-secret" href="#">
            <span className="segment" />
          </a>
        </li>
        <li>
          <a className="icon-hubot" href="#" />
        </li>
        <li>
          <a className="icon-hourglass" href="#" />
        </li>
        <li>
          <a className="icon-light-bulb" href="#" />
        </li>
        <li>
          <a className="icon-squirrel" href="#">
            <span className="segment" />
          </a>
        </li>
        <li>
          <a className="icon-law" href="#" />
        </li>
      </ul>
    </nav>
  );
}

export default CircleMenu;