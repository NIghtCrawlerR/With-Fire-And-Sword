import React, { useState } from 'react';
import classNames from 'classnames';
import update from 'lodash/update';

import { INSTRUMENTS, PATH, HINTS } from 'constants/grid';
import { createEmptyGrid, isInstrumentAllowed } from 'helpers/grid';
import Grid from 'components/Grid';
import './LevelCreator.scss';

const LevelCreator = () => {
  const [activeInstrument, setActiveIstrument] = useState(PATH);
  const [grid, setGrid] = useState(createEmptyGrid());
  const [hint, setHint] = useState(null);

  const handleCellClick = (rowIndex, cellIndex) => {
    const newGrid = [...grid];
    const cell = newGrid[rowIndex][cellIndex];
    const hasPath = cell.includes(PATH);

    if (cell.includes(activeInstrument)) { // remove existing unit from grid
      update(newGrid, `[${rowIndex}][${cellIndex}]`, () => cell.filter(item => item !== activeInstrument));
    } else { // add new unit to grid
      if (!isInstrumentAllowed(activeInstrument, grid)) {
        setHint(HINTS[activeInstrument]);

        return null;
      }

      if (!hasPath && activeInstrument !== PATH) {
        cell.push(PATH);
      }

      cell.push(activeInstrument);
      setHint(null);
    }

    setGrid(newGrid);
  };

  return (
    <div className="LevelCreator">
      <Grid
        grid={grid}
        allowClick
        handleCellClick={handleCellClick}
      />

      <div className="LevelCreator__instruments">
        {INSTRUMENTS.map(instrument => (
          <div
            key={instrument.name}
            className={classNames('LevelCreator__instrument-item', {
              active: instrument.symbol === activeInstrument,
            })}
            onClick={() => setActiveIstrument(instrument.symbol)}
          >
            {instrument.name}
          </div>
        ))}
      </div>
      <p className="LevelCreator__hint">
        {hint}
      </p>
    </div>
  );
};

export default LevelCreator;