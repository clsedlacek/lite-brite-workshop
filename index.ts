(() => {

	// defines a palette color usable for coloring grid cells
	interface PaletteColor {
		id: number,
		name: string,
		hexColor: string
	}


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

	// lookup color from color list via ID number
	function lookupColorId(colorId: number) {
		for (let i=0; i<colorList.length; i++) {
			if (colorId === colorList[i].id) {
				return colorList[i];
			}
		}	
		return null;
	}

	// creates HTML element for clickable color cell with click event listener
	function createColorCellElement(cellColor: PaletteColor, gridX: number, gridY: number): HTMLElement {
		const cellCoreClass = 'liteBriteApp__colorCell';
		const cellColorClass = cellCoreClass + '--' + cellColor.name;
		const colorCellElement = document.createElement('button');
		colorCellElement.innerHTML = '\u2B24 ';
		colorCellElement.classList.add(cellCoreClass, cellColorClass);
		colorCellElement.style.color = cellColor.hexColor;

		// click event listener
		colorCellElement.addEventListener('click', e => {
			const oldCellColor = lookupColorId(appState.colorGrid[gridY][gridX]) || colorList[0];
			const newCellColor = lookupColorId(appState.selectedColorId) || colorList[0];
			const oldColorClass = cellCoreClass + '--' + oldCellColor.name;
			const newColorClass = cellCoreClass + '--' + newCellColor.name;
			colorCellElement.classList.remove(oldColorClass);
			colorCellElement.classList.add(newColorClass);
			colorCellElement.style.color = newCellColor.hexColor;
			appState.colorGrid[gridY][gridX] = newCellColor.id;
			console.log('changed cell '+gridX+','+gridY+' from '+oldCellColor.name+' to '+newCellColor.name);
		});

		return colorCellElement;
	}

	// creates HTML element for active color selection button with click event listener
	function createColorSelectElement(cellColor: PaletteColor): HTMLElement {
		const colorButtonCoreClass = 'liteBriteApp__colorSelect';
		const specificColorClass = colorButtonCoreClass + '--' + cellColor.name;
		const selectedClass = colorButtonCoreClass + '--selected';
		const colorButtonElement = document.createElement('button');
		colorButtonElement.innerHTML = cellColor.name;
		colorButtonElement.classList.add(colorButtonCoreClass, specificColorClass);
		if (appState.selectedColorId === cellColor.id) {
			colorButtonElement.classList.add(selectedClass);
		}
		colorButtonElement.style.background = cellColor.hexColor;

		// click event
		colorButtonElement.addEventListener('click', e => {
			appState.selectedColorId = cellColor.id;
			// clear selected button CSS class
			const colorButtons = document.getElementsByClassName(selectedClass);
			for (let b = 0; b<colorButtons.length; b++) {
				colorButtons[b].classList.remove(selectedClass);
			}
			colorButtonElement.classList.add(selectedClass);
		});
		return colorButtonElement;
	}

	// creates HTML element with proper children for color grid container
	function createColorGridElement(): HTMLElement {
		const colorGridContainerElement = document.createElement('div');
		colorGridContainerElement.classList.add('liteBriteApp__colorGrid')
		for (let y=0; y<appState.colorGrid.length; y++) {
			const colorGridRowElement = document.createElement('div');
			colorGridRowElement.classList.add('liteBriteApp__colorRow');
			for (let x=0; x<appState.colorGrid[y].length; x++) {
				const currentCellColorId = appState.colorGrid[y][x];
				const currentCellColor = lookupColorId(currentCellColorId) || colorList[0];
				const colorCellElement = createColorCellElement(currentCellColor, x, y);

				colorGridRowElement.appendChild(colorCellElement);
			}
			colorGridContainerElement.appendChild(colorGridRowElement);
		}
		return colorGridContainerElement;
	}

	// creates HTML element for main workspace area containing working pattern
	function createWorkspaceElement(): HTMLElement {
		const workspaceContainerElement = document.createElement('div');
		workspaceContainerElement.classList.add('liteBriteApp__workspace');

		// create HTML grid and append elements for each cell in grid
		const colorGridContainerElement = createColorGridElement();
		workspaceContainerElement.appendChild(colorGridContainerElement);

		return workspaceContainerElement;
	}

	// creates HTML element for color selector list
	function createColorListElement(): HTMLElement {
		const colorListElement = document.createElement('ul');
		colorListElement.classList.add('liteBriteApp__colorList');

		for (let i=0; i<colorList.length; i++) {
			const currentColor = colorList[i];
			const colorSelectElement = createColorSelectElement(currentColor);

			colorListElement.appendChild(colorSelectElement);
		}
		return colorListElement;
	}

	// creates HTML element for main panel area containing tool options and other settings
	function createPanelElement(): HTMLElement {
		const panelContainerElement = document.createElement('div');
		panelContainerElement.classList.add('liteBriteApp__panel');

		// create panel/app title
		const panelTitleElement = document.createElement('h2');
		panelTitleElement.innerHTML = 'Lite Brite Oval Workshop';

		// create color selector list
		const colorListElement = createColorListElement();

		panelContainerElement.appendChild(panelTitleElement);
		panelContainerElement.appendChild(colorListElement);

		return panelContainerElement;
	}

	// initializes application HTML UI
	function initAppHTML(containerElement: HTMLElement) {
		// create main workspace and panel elements
		const workspaceContainerElement = createWorkspaceElement();
		const panelContainerElement = createPanelElement();

		// finish UI build by appending all to app container
		containerElement.appendChild(workspaceContainerElement);
		containerElement.appendChild(panelContainerElement);
	}

	// main function / app init
	function init(containerElement: HTMLElement) {
		// set temp grid layout
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

		// init HTML UI
		initAppHTML(containerElement);

		// done
		console.log('App initialized');
	}




})();