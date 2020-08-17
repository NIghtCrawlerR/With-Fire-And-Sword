import React from 'react';
import isArray from 'lodash/isArray';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { PATH, TARGET, COIN, PLAYER, ENEMY } from 'constants/grid';
import { isGridCellEmpty } from 'helpers/grid';
import { Player, Coin, Enemy, Target } from 'components/GameUnits';

import './GridCell.scss';

const GridCell = ({ cell, allowClick, handleCellClick }) => {
  const isFilled = () => isArray(cell) && cell.includes(PATH);
  const isTargetCell = () => isArray(cell) && cell.includes(TARGET);
  const hasCoin = () => isArray(cell) && cell.includes(COIN);
  const hasPlayer = () => isArray(cell) && cell.includes(PLAYER);
  const hasEnemy = () => isArray(cell) && cell.includes(ENEMY);

  return (
    <div
      className={classNames('GridCell', {
        'GridCell--empty': isGridCellEmpty(cell),
        'GridCell--filled': isFilled(),
        'GridCell--clickable': allowClick,
      })}
      onClick={handleCellClick}
    >
      {isTargetCell() && <Target />}
      {hasCoin() && <Coin />}
      {hasPlayer() && <Player />}
      {hasEnemy() && <Enemy />}
    </div>
  );
};

GridCell.propTypes = {
  allowClick: PropTypes.bool,
  handleCellClick: PropTypes.func,
};

GridCell.defaultProps = {
  allowClick: false,
  handleCellClick: () => {},
};

export default GridCell;