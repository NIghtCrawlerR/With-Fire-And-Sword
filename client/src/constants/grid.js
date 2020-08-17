export const GRID_SIZE = 16;

export const EMPTY_CELL = 0;
export const PATH = 'x';
export const TARGET = 'T';
export const COIN = 'c';
export const ENEMY = 'e';
export const PLAYER = 'P';

export const INSTRUMENTS = [{
  name: 'PATH',
  symbol: PATH,
}, {
  name: 'COIN',
  symbol: COIN,
}, {
  name: 'TARGET',
  symbol: TARGET,
}, {
  name: 'ENEMY',
  symbol: ENEMY,
}, {
  name: 'PLAYER',
  symbol: PLAYER,
}];

export const HINTS = {
  [PLAYER]: 'Only one player should be placed on grid',
  [TARGET]: 'Only one target should be placed on grid',
};