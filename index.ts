(() => {


	// default color palette
	const colorList = [
		{
			id: 0,
			name: 'None',
			hexColor: '#222222'
		},
		{
			id: 1,
			name: 'White',
			hexColor: '#e0e0e0'
		},
		{
			id: 2,
			name: 'Pink',
			hexColor: '#dd44dd'
		},
		{
			id: 3,
			name: 'Blue',
			hexColor: '#22dddd'
		},
		{
			id: 4,
			name: 'Orange',
			hexColor: '#ffaa22'
		},
		{
			id: 5,
			name: 'Green',
			hexColor: '#22dd22'
		},
		{
			id: 6,
			name: 'Yellow',
			hexColor: '#dddd22'
		},
	];

	const appState = {
		colorGrid: [] as Array<Array<number>>,
		selectedColorId: 1
	}

	// initialize app to required HTML container element
	const appContainerId = 'liteBriteApp__container';
	const appContainerElement = document.getElementById(appContainerId);
	if (appContainerElement) {
		init(appContainerElement);
	}
	else {
		throw 'App container element #liteBriteApp-container not found, cannot initialize app';
	}

	function lookupColorId(colorId: number) {
		for (let i=0; i<colorList.length; i++) {
			if (colorId === colorList[i].id) {
				return colorList[i];
			}
		}	
		return null;
	}

	// main function / app init
	function init(containerElement: HTMLElement) {
		// temp grid layout
		appState.colorGrid = [
			[0,3,3,3,3,3,3,3,0],
			[0,0,0,0,0,3,3,3,3,3,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,3,3,3,3,3,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,4,4,4,0,0,0,0,0,0,0,0,0,0,5,0,5,0,5,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,5,0,5,0,0,0,0,0,0,0,0,0],
			[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,5,0,5,0,0,0,0,0,0,0,0,0],
			[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,1,1,1,1,1,1,1,1,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
			[0,1,1,1,1,1,1,1,1,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
			[0,1,1,1,1,1,1,1,1,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
			[0,1,1,1,1,1,1,1,1,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
			[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
			[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,3,3,3,3,3,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,3,3,3,3,3,0,0,0,0,0,0],
			[0,3,3,3,3,3,3,3,0]
		];

		// create main workspace element
		const workspaceContainerElement = document.createElement('div');
		workspaceContainerElement.classList.add('liteBriteApp__workspace');

		// create HTML grid and append elements for each cell in grid
		const colorGridContainerElement = document.createElement('div');
		colorGridContainerElement.classList.add('liteBriteApp__colorGrid')

		for (let y=0; y<appState.colorGrid.length; y++) {
			const colorGridRowElement = document.createElement('div');
			colorGridRowElement.classList.add('liteBriteApp__colorRow');
			for (let x=0; x<appState.colorGrid[y].length; x++) {
				const currentCellColorId = appState.colorGrid[y][x];
				const currentCellColor = lookupColorId(currentCellColorId) || colorList[0];

				const cellCoreClass = 'liteBriteApp__colorCell';
				const cellColorClass = cellCoreClass + '--' + currentCellColor.name;
				const colorCellElement = document.createElement('button');
				colorCellElement.innerHTML = '\u2B24 ';
				colorCellElement.classList.add(cellCoreClass, cellColorClass);
				colorCellElement.style.color = currentCellColor.hexColor;

				// click event listener
				colorCellElement.addEventListener('click', e => {
					const oldCellColor = lookupColorId(appState.colorGrid[y][x]) || colorList[0];
					const newCellColor = lookupColorId(appState.selectedColorId) || colorList[0];
					const oldColorClass = cellCoreClass + '--' + oldCellColor.name;
					const newColorClass = cellCoreClass + '--' + newCellColor.name;
					colorCellElement.classList.remove(oldColorClass);
					colorCellElement.classList.add(newColorClass);
					colorCellElement.style.color = newCellColor.hexColor;
					appState.colorGrid[y][x] = newCellColor.id;
					console.log('changed cell '+x+','+y+' from '+oldCellColor.name+' to '+newCellColor.name);
				});

				colorGridRowElement.appendChild(colorCellElement);
			}
			colorGridContainerElement.appendChild(colorGridRowElement);
		}

		workspaceContainerElement.appendChild(colorGridContainerElement);


		// create main menu panel
		const panelContainerElement = document.createElement('div');
		panelContainerElement.classList.add('liteBriteApp__panel');

		// create panel/app title
		const panelTitleElement = document.createElement('h2');
		panelTitleElement.innerHTML = 'Lite Brite Oval Workshop';

		// create color selector list
		const colorListElement = document.createElement('ul');
		colorListElement.classList.add('liteBriteApp__colorList');

		for (let i=0; i<colorList.length; i++) {
			const currentColor = colorList[i];
			const colorButtonCoreClass = 'liteBriteApp__colorSelect';
			const specificColorClass = colorButtonCoreClass + '--' + currentColor.name;
			const selectedClass = colorButtonCoreClass + '--selected';
			const colorButtonElement = document.createElement('button');
			colorButtonElement.innerHTML = currentColor.name;
			colorButtonElement.classList.add(colorButtonCoreClass, specificColorClass);
			if (appState.selectedColorId === currentColor.id) {
				colorButtonElement.classList.add(selectedClass);
			}
			colorButtonElement.style.background = currentColor.hexColor;

			// click event
			colorButtonElement.addEventListener('click', e => {
				appState.selectedColorId = currentColor.id;
				// clear selected button CSS class
				const colorButtons = document.getElementsByClassName(selectedClass);
				for (let b = 0; b<colorButtons.length; b++) {
					colorButtons[b].classList.remove(selectedClass);
				}
				colorButtonElement.classList.add(selectedClass);
			});

			colorListElement.appendChild(colorButtonElement);
		}

		panelContainerElement.appendChild(panelTitleElement);
		panelContainerElement.appendChild(colorListElement);

		// finish UI build
		containerElement.appendChild(workspaceContainerElement);
		containerElement.appendChild(panelContainerElement);

		console.log('App initialized');
	}




})();