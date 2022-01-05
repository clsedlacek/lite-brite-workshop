(() => {

	const debugGrid = [
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

	// CSS classes / HTML IDs
	const cellCoreClass = 'liteBriteApp__colorCell';
	const gridPortraitClass = 'liteBriteApp__colorGrid--portrait';
	const gridLandscapeClass = 'liteBriteApp__colorGrid--landscape';
	const countDisplayId = 'liteBriteApp__colorCount';
	const gridElementId = 'liteBriteApp__colorGrid';

	interface GridImportData {
		grid: Array<Array<number>>
	}

	// defines a palette color usable for coloring grid cells
	interface PaletteColor {
		id: number,
		name: string,
		hexColor: string,
		maxAvailable: number | null // null indicates unlimited available
	}

	// defines a color grid cell with associated HTML element
	class ColorCell {
		element: HTMLElement | null;
		color: PaletteColor;
		constructor(color: PaletteColor, element?: HTMLElement | null) {
			this.color = color;
			this.element = element || null;
		}
		updateColor(newColor: PaletteColor) {
			const oldColor = this.color;
			const oldColorClass = cellCoreClass + '--' + oldColor.name;
			const newColorClass = cellCoreClass + '--' + newColor.name;
			const negativeCountClass = 'liteBriteApp__colorCount--negative';

			if (this.element) {
				this.element.classList.remove(oldColorClass);
				this.element.classList.add(newColorClass);
				this.element.style.color = newColor.hexColor;
			}
			this.color = newColor;

			const oldColorCountElement = document.getElementById(countDisplayId + oldColor.id);
			const newColorCountElement = document.getElementById(countDisplayId + newColor.id);
			const oldColorCount = countGridColor(appState.colorGrid, oldColor);
			const newColorCount = countGridColor(appState.colorGrid, newColor);

			if (oldColorCountElement) {
				oldColorCountElement.classList.remove(negativeCountClass);
			}
			if (newColorCountElement) {
				newColorCountElement.classList.remove(negativeCountClass);
			}

			let oldColorAvailableDisplay = '';
			let newColorAvailableDisplay = '';

			if (oldColor.maxAvailable !== null) {
				const oldColorAvailable = (oldColor.maxAvailable - oldColorCount);
				oldColorAvailableDisplay = oldColorAvailable.toString() + ' left';
				if (oldColorAvailable < 0 && oldColorCountElement) {
					oldColorCountElement.classList.add(negativeCountClass);
				}
			}

			if (newColor.maxAvailable !== null) {
				const newColorAvailable = (newColor.maxAvailable - newColorCount);
				newColorAvailableDisplay = newColorAvailable.toString() + ' left';
				if (newColorAvailable < 0 && newColorCountElement) {
					newColorCountElement.classList.add(negativeCountClass);
				}
			}

			if (oldColorCountElement) {
				oldColorCountElement.innerHTML = oldColorAvailableDisplay;
			}
			if (newColorCountElement) {
				newColorCountElement.innerHTML = newColorAvailableDisplay;
			}
		}
	}

	// default color palette
	const colorList = [
		{
			id: 0,
			name: 'None',
			hexColor: '#222222',
			maxAvailable: null
		},
		{
			id: 1,
			name: 'White',
			hexColor: '#e0e0e0',
			maxAvailable: 114
		},
		{
			id: 2,
			name: 'Pink',
			hexColor: '#dd44dd',
			maxAvailable: 120
		},
		{
			id: 3,
			name: 'Blue',
			hexColor: '#22dddd',
			maxAvailable: 112
		},
		{
			id: 4,
			name: 'Orange',
			hexColor: '#ffaa22',
			maxAvailable: 106
		},
		{
			id: 5,
			name: 'Green',
			hexColor: '#22dd22',
			maxAvailable: 131
		},
		{
			id: 6,
			name: 'Yellow',
			hexColor: '#dddd22',
			maxAvailable: 110
		},
	];

	const appState = {
		colorGrid: [] as Array<Array<ColorCell>>,
		gridHistory: [] as Array<Array<Array<ColorCell>>>,
		historyStepsBack: 0,
		selectedColorId: 1,
		isDrawing: false
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

	// import grid from export data
	function importGrid(importData: GridImportData) {
		for (let y=0; y<importData.grid.length; y++) {
			for (let x=0; x<importData.grid[y].length; x++) {
				const color = lookupColorId(importData.grid[y][x]);
				if (appState.colorGrid[y] && appState.colorGrid[y][x] && color) {
					appState.colorGrid[y][x].updateColor(color);
				}
			}
		}
		addGridHistory(appState.colorGrid);
	}

	// generate export data for grid
	function exportGrid(grid: Array<Array<ColorCell>>): GridImportData {
		const exportData = {
			grid: [] as Array<Array<number>>
		};

		for (let y=0; y<grid.length; y++) {
			const exportRow = [];
			for (let x=0; x<grid[y].length; x++) {
				exportRow.push(grid[y][x].color.id);
			}
			exportData.grid.push(exportRow);
		}

		return exportData;
	}

	// create new color grid with row sizes specified from top to bottom
	function createGrid(rowSizes: Array<number>) { // TODO ADD RETURN TYPE SIGNATURE
		const defaultColor = colorList[0];
		const colorGrid = [];
		for (let y=0; y<rowSizes.length; y++) {
			const gridRow = [];
			for (let x=0; x<rowSizes[y]; x++) {
				const gridCell = new ColorCell(defaultColor, null);
				gridRow.push(gridCell);
			}
			colorGrid.push(gridRow);
		}
		return colorGrid;
	}

	// resets color grid to blank pattern state
	function resetGrid() {
		for (let y=0; y<appState.colorGrid.length; y++) {
			for (let x=0; x<appState.colorGrid[y].length; x++) {
				appState.colorGrid[y][x].updateColor(colorList[0]);
			}
		}
	}

	// refreshes visual display of a grid including HTML elements
	// for loading pattern, undo/redo, etc.
	function refreshGridDisplay(grid: Array<Array<ColorCell>>) {
		for (let y=0; y<grid.length; y++) {
			for (let x=0; x<grid[y].length; x++) {
				const cell = grid[y][x];
				cell.updateColor(cell.color);
			}
		}
	}

	// copies grid structure keeping same HTML element instances
	function copyGridState(grid: Array<Array<ColorCell>>): Array<Array<ColorCell>> {
		const copyGrid = [];
		for (let y=0; y<grid.length; y++) {
			const copyRow = [];
			for (let x=0; x<grid[y].length; x++) {
				const originalCell = grid[y][x];
				const copyCell = new ColorCell(originalCell.color, originalCell.element);
				copyRow.push(copyCell);
			}
			copyGrid.push(copyRow);
		}
		return copyGrid;
	}

	// add grid snapshot to history
	function addGridHistory(grid: Array<Array<ColorCell>>) {
		removeGridHistoryFuture();
		const historyGrid = copyGridState(grid);
		appState.gridHistory.push(historyGrid);
	}

	// retrieve grid snapshot from history
	function getGridHistoryStep(offset: number): Array<Array<ColorCell>> | null {
		if (appState.gridHistory.length - offset > 0) {
			const index = appState.gridHistory.length - 1 - offset;
			return appState.gridHistory[index];
		}
		return null;
	}

	// restores grid history at offset to app state
	function restoreGridHistoryStep(offset: number) {
		const historyGrid = getGridHistoryStep(offset);
		if (historyGrid) {
			const displayGrid = copyGridState(historyGrid);
			appState.colorGrid = displayGrid;
			refreshGridDisplay(appState.colorGrid);
		}
	}

	// makes current grid history most current by removing steps newer than current snapshot and resetting step offset
	function removeGridHistoryFuture() {
		const finalIndex = appState.gridHistory.length - 1;
		const index = finalIndex - (appState.historyStepsBack - 1);
		appState.gridHistory.splice(index, finalIndex);
		appState.historyStepsBack = 0;
	}

	// counts how many of a specified color is used on grid
	function countGridColor(grid: Array<Array<ColorCell>>, color: PaletteColor): number {
		let count = 0;
		for (let y=0; y<grid.length; y++) {
			for (let x=0; x<grid[y].length; x++) {
				if (grid[y][x].color === color) {
					count = count + 1;
				}
			}
		}
		return count;
	}

	// creates HTML element for clickable color cell with click event listener
	function createColorCellElement(cellColor: PaletteColor, gridX: number, gridY: number): HTMLElement {
		const cellCoreClass = 'liteBriteApp__colorCell';
		const cellColorClass = cellCoreClass + '--' + cellColor.name;
		const colorCellElement = document.createElement('button');
		colorCellElement.innerHTML = '\u2B24 ';
		colorCellElement.classList.add(cellCoreClass, cellColorClass);
		colorCellElement.style.color = cellColor.hexColor;

		colorCellElement.addEventListener('mousedown', e => {
			if (e.buttons === 1) {
				appState.isDrawing = true;

				const newCellColor = lookupColorId(appState.selectedColorId) || colorList[0];
				appState.colorGrid[gridY][gridX].updateColor(newCellColor);
			}
		});

		colorCellElement.addEventListener('mouseup', e => {
			if (appState.isDrawing) {
				// update undo/redo history
				addGridHistory(appState.colorGrid);
			}
			appState.isDrawing = false;
		});

		colorCellElement.addEventListener('mouseenter', e => {
			// update cell color if left mouse button is pressed
			if (appState.isDrawing) {
				const newCellColor = lookupColorId(appState.selectedColorId) || colorList[0];
				appState.colorGrid[gridY][gridX].updateColor(newCellColor);
			}
		});

		return colorCellElement;
	}

	// creates HTML element for active color selection button with click event listener
	function createColorSelectElement(cellColor: PaletteColor): HTMLElement {
		const colorSelectCoreClass = 'liteBriteApp__colorSelect';
		const specificColorClass = colorSelectCoreClass + '--' + cellColor.name;
		const selectedClass = colorSelectCoreClass + '--selected';

		const colorSelectElement = document.createElement('li');
		const colorButtonElement = document.createElement('button');
		const colorCountElement = document.createElement('span');

		colorSelectElement.classList.add(colorSelectCoreClass, specificColorClass);
		if (appState.selectedColorId === cellColor.id) {
			colorSelectElement.classList.add(selectedClass);
		}

		colorButtonElement.innerHTML = cellColor.name;
		colorButtonElement.style.background = cellColor.hexColor;

		colorCountElement.classList.add('liteBriteApp__colorCount');
		colorCountElement.id = countDisplayId + cellColor.id;
		colorCountElement.innerHTML = (cellColor.maxAvailable !== null) ? (cellColor.maxAvailable.toString() + ' left') : '';

		// click event
		colorButtonElement.addEventListener('click', e => {
			appState.selectedColorId = cellColor.id;
			// clear selected button CSS class
			const colorButtons = document.getElementsByClassName(selectedClass);
			for (let b = 0; b<colorButtons.length; b++) {
				colorButtons[b].classList.remove(selectedClass);
			}
			colorSelectElement.classList.add(selectedClass);
		});

		if (cellColor.maxAvailable !== null) {
			colorButtonElement.appendChild(colorCountElement);
		}
		colorSelectElement.appendChild(colorButtonElement);

		return colorSelectElement;
	}

	// creates HTML element with proper children for color grid container
	function createColorGridElement(): HTMLElement {
		const colorGridContainerElement = document.createElement('div');
		colorGridContainerElement.classList.add('liteBriteApp__colorGrid')
		colorGridContainerElement.id = gridElementId;

		for (let y=0; y<appState.colorGrid.length; y++) {
			const colorGridRowElement = document.createElement('div');
			colorGridRowElement.classList.add('liteBriteApp__colorRow');
			for (let x=0; x<appState.colorGrid[y].length; x++) {
				const currentCellColor = appState.colorGrid[y][x].color;
				const colorCellElement = createColorCellElement(currentCellColor, x, y);
				appState.colorGrid[y][x].element = colorCellElement;

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

	// creates HTML element for undo command
	function createUndoElement(): HTMLElement {
		const undoElement = document.createElement('button');
		undoElement.classList.add('liteBriteApp__undo');
		undoElement.innerHTML = 'Undo';

		undoElement.addEventListener('click', e => {
			const newOffset = appState.historyStepsBack + 1;
			if (getGridHistoryStep(newOffset)) {
				appState.historyStepsBack = newOffset;
				restoreGridHistoryStep(newOffset);
			}
		})

		return undoElement;
	}

	// creates HTML element for redo command
	function createRedoElement(): HTMLElement {
		const redoElement = document.createElement('button');
		redoElement.classList.add('liteBriteApp__redo');
		redoElement.innerHTML = 'Redo';

		redoElement.addEventListener('click', e => {
			const newOffset = appState.historyStepsBack - 1;
			if (getGridHistoryStep(newOffset)) {
				appState.historyStepsBack = newOffset;
				restoreGridHistoryStep(newOffset);
			}
		})

		return redoElement;
	}

	function createPortraitElement(): HTMLElement {
		const portraitElement = document.createElement('button');
		portraitElement.classList.add('liteBriteApp__portrait');
		portraitElement.innerHTML = 'Portrait';

		portraitElement.addEventListener('click', e => {
			const gridElement = document.getElementById(gridElementId);
			if (gridElement) {
				gridElement.classList.remove(gridLandscapeClass);
				gridElement.classList.add(gridPortraitClass);
			}
		});

		return portraitElement;
	}

	function createLandscapeElement(): HTMLElement {
		const landscapeElement = document.createElement('button');
		landscapeElement.classList.add('liteBriteApp__landscape');
		landscapeElement.innerHTML = 'Landscape';

		landscapeElement.addEventListener('click', e => {
			const gridElement = document.getElementById(gridElementId);
			if (gridElement) {
				gridElement.classList.remove(gridPortraitClass);
				gridElement.classList.add(gridLandscapeClass);
			}
		});

		return landscapeElement;
	}

	// creates HTML element for color grid reset command
	function createGridResetElement(): HTMLElement {
		const gridResetElement = document.createElement('button');
		gridResetElement.classList.add('liteBriteApp__gridReset');
		gridResetElement.innerHTML = 'Clear pattern';

		gridResetElement.addEventListener('click', e=> {
			resetGrid();
			addGridHistory(appState.colorGrid);
		});

		return gridResetElement;
	}

	function createImportExportElement(): HTMLElement {
		const importExportElement = document.createElement('div');
		importExportElement.classList.add('liteBriteApp__importExport');

		const textField = document.createElement('textarea');
		textField.classList.add('liteBriteApp__importExportText');

		const importButton = document.createElement('button');
		importButton.classList.add('liteBriteApp__import');
		importButton.innerHTML = 'Import';

		const exportButton = document.createElement('button');
		exportButton.classList.add('liteBriteApp__export');
		exportButton.innerHTML = 'Export';

		importButton.addEventListener('click', e => {
			try {
				const importData = JSON.parse(textField.value) as GridImportData;
				importGrid(importData);
			}
			catch {
				console.log('Could not parse pattern import data');
				console.dir(textField);
			}
		});

		exportButton.addEventListener('click', e => {
			try {
				const exportData = JSON.stringify(exportGrid(appState.colorGrid));
				textField.value = exportData;
			}
			catch {
				throw 'Could not export pattern data';
			}
		});

		importExportElement.appendChild(textField);
		importExportElement.appendChild(importButton);
		importExportElement.appendChild(exportButton);

		return importExportElement;
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

		// create undo/redo buttons
		const undoElement = createUndoElement();
		const redoElement = createRedoElement();

		const landscapeElement = createLandscapeElement();
		const portraitElement = createPortraitElement();

		// create color grid reset button
		const gridResetElement = createGridResetElement();

		// create import/export UI
		const importExportElement = createImportExportElement();

		panelContainerElement.appendChild(panelTitleElement);
		panelContainerElement.appendChild(colorListElement);
		panelContainerElement.appendChild(undoElement);
		panelContainerElement.appendChild(redoElement);
		panelContainerElement.appendChild(landscapeElement);
		panelContainerElement.appendChild(portraitElement);
		panelContainerElement.appendChild(gridResetElement);
		panelContainerElement.appendChild(importExportElement);

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
		const gridRowSizes = [
			9, 16, 21, 24, 27,
			30, 31, 32, 35, 36,
			37, 38, 39, 40, 41,
			42, 41, 42, 41, 42,
			41, 42, 41, 42, 41,
			40, 39, 38, 37, 36,
			35, 32, 31, 30, 27,
			24, 21, 16, 9

		];
		// init grid layout
		appState.colorGrid = createGrid(gridRowSizes);

		// init HTML UI
		initAppHTML(containerElement);

		// init grid drawing history
		addGridHistory(appState.colorGrid);

		// done
		console.log('App initialized');
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




})();