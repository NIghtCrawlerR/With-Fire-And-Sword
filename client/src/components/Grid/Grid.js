import React from 'react';
import PropTypes from 'prop-types';

import GridCell from './GridCell';
import './Grid.scss';

const Grid = ({ grid, allowClick, handleCellClick }) => (
  <div className="Grid">
    {grid.map((row, rowIndex) => row.map((cell, cellIndex) => (
      <GridCell
        key={cellIndex}
        cell={cell}
        allowClick={allowClick}
        handleCellClick={() => handleCellClick(rowIndex, cellIndex)}
      />
    )))}
  </div>
);

Grid.propTypes = {
  allowClick: PropTypes.bool,
  handleCellClick: PropTypes.func,
};

Grid.defaultProps = {
  allowClick: false,
  handleCellClick: () => {},
};

export default Grid;