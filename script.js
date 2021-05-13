const container = document.querySelector('.grid-container')

function createGrid(size = 33 * 45) {
  for(let c = 0; c < size; c++) {
    let cell = document.createElement('div');
    container.appendChild(cell).className = 'grid-item';
    cell.addEventListener('mouseover', e => {
      e.target.style.backgroundColor = 'grey';
    })
  };
  container.style.gridTemplateColumns = `repeat(${45}, auto)`;
  container.style.gridTemplateRows = `repeat(${33}, auto)`;
};
createGrid();

function changeSize() {
  const large = 11 * 15;
  const medium = 33 * 45;
  const small = 65 * 90;

}

let sizeBtns = document.querySelectorAll('#btns > button');
sizeBtns = [...sizeBtns];

sizeBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    if(e.target.classList.contains('sm-btn')) {
      console.log('thats sm.')
    } else if (e.target.classList.contains('med-btn')) {
      console.log('thats med');
    } else if (e.target.classList.contains('lg-btn')) {
      console.log('thats lg!');
    }
  });
});

