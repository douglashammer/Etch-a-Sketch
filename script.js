const container = document.querySelector('.grid-container')

const makeRows = (rows, cols) => {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for(let c = 0; c < (rows * cols); c++) {
    let cell = document.createElement('div');
    container.appendChild(cell).className = 'grid-item';
  };
};

makeRows(16, 16);
