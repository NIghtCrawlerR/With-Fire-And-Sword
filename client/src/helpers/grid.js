import { GRID_SIZE, PLAYER, TARGET } from 'constants/grid';
import flattenDeep from 'lodash/flattenDeep';

export const isGridCellEmpty = (cell) => !cell.length;

export const createEmptyGrid = () => {
  const grid = [];

  for (let i = 0; i < GRID_SIZE; i++) {
    const gridRow = [];

    for (let k = 0; k < GRID_SIZE; k++) {
      gridRow.push([]);
    }

    grid.push(gridRow);
  }

  return grid;
};

export const hasPlayer = (grid) => {
  const flattenGrid = flattenDeep(grid);
  return flattenGrid.includes(PLAYER);
};

export const hasTarget = (grid) => {
  const flattenGrid = flattenDeep(grid);
  return flattenGrid.includes(TARGET);
};

export const isInstrumentAllowed = (instrument, grid) => {
  switch(instrument) {
    case PLAYER:
      return !hasPlayer(grid);
    
    case TARGET:
      return !hasTarget(grid);

    default:
      return true;
  }
}