import React from 'react';

import Button from 'components/Button';
import './StartMenu.scss';

const StartMenu = () => (
  <div className="StartMenu">
    <Button
      link
      to="/levels"
      className="StartMenu__btn"
    >
      Play game
    </Button>
    <Button
      link
      to="/level-creator"
      className="StartMenu__btn"
    >
      Create level
    </Button>
  </div>
);

export default StartMenu;