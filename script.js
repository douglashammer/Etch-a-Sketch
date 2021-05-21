const game = () => {
	const container = document.querySelector('.grid-container');
	const large = [11, 15];
	const medium = [32, 45];
	const small = [65, 90];

	function createGrid(size = medium) {
		for (let c = 0; c < size[0] * size[1]; c++) {
			let cell = document.createElement('div');
			cell.style.backgroundColor = '#cdcfce';
			container.appendChild(cell).className = 'grid-item';
		}
		container.classList.remove('sm-grid', 'med-grid', 'lg-grid');
		if (size === medium) {
			container.classList.add('med-grid');
		} else if (size === small) {
			container.classList.add('sm-grid');
		} else if (size === large) {
			container.classList.add('lg-grid');
		}
	}

	let classic = '#5c5c5c';
	let rainbow = [
		'#ff0000',
		'#ffa500',
		'#ffff00',
		'#008000',
		'#0000ff',
		'#4b0082',
		'#ee82ee',
	];

	function draw(color = classic) {
		let cells = document.querySelectorAll('.grid-item');
		cells = [...cells];

		cells.forEach((cell) => {
			cell.addEventListener('mouseover', (e) => {
				if (color === classic) {
					e.target.style.backgroundColor = classic;
				} else if (color === rainbow) {
					e.target.style.backgroundColor =
						rainbow[Math.floor(Math.random() * rainbow.length)];
				}
			});
		});
	}

	function eraseGrid() {
		let cells = document.querySelectorAll('.grid-item');
		cells.forEach((cell) => {
			cell.style.backgroundColor = '#cdcfce';
		});
	}

	function resetGrid() {
		let cells = document.querySelectorAll('.grid-item');
		cells.forEach((cell) => {
			cell.parentNode.removeChild(cell);
		});
	}

	//Button selectors
	let sizeBtns = document.querySelectorAll('#btns > .size-btn');
	sizeBtns = [...sizeBtns];
	const eraseBtn = document.querySelector('.reset-btn');
	let modeBtns = document.querySelectorAll('#btns > .mode');
	modeBtns = [...modeBtns];

	sizeBtns.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			if (e.target.classList.contains('sm-btn')) {
				resetGrid();
				createGrid(small);
			} else if (e.target.classList.contains('med-btn')) {
				resetGrid();
				createGrid(medium);
			} else if (e.target.classList.contains('lg-btn')) {
				resetGrid();
				createGrid(large);
			}
			draw();
		});
	});

	modeBtns.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			if (e.target.classList.contains('classic-mode')) {
				draw();
			} else if (e.target.classList.contains('rainbow-mode')) {
				draw(rainbow);
			}
		});
	});

	eraseBtn.addEventListener('click', (e) => {
		eraseGrid();
	});

	createGrid();
	draw();
};

game();
