// Функція створення ID або Key.
export function getId(num){
    const ABC = "AaBbCcDdEeFfGgHhIiJiKkLlMmNnJjPpQqRrSsTtUuVvWwXxYyZz";
    const NUMBERS = "0123456789";
    const LETTERS = ABC + NUMBERS;
    let newId= "";
    for (let i = 0; i < 8; i++) {
        newId += LETTERS[Math.floor(Math.random() * LETTERS.length)];
    }
    newId +=  `_${num}`;
    return newId;
}


// Пошук обєкта обраної сторінки.
export const searchObjPageGame = (data,idPag)=>{
	let objPage ='';
	data.forEach(({id,title,info,paramGame,infoLink,infoGame,img})=>{
		if(id === idPag){
			objPage = {id,title,info,paramGame,infoLink,infoGame,img}
		}
	})
	return objPage
}

//Функція підрахунку результатів.
export const changeResult = (a,b,c) =>{
	const newArr ={
	 numMines:0,
	 numFlag:0,
	 numClear:0,
	 numNoClear:0,
	}

	if(a){
		 newArr.numMines  += a.numMines;
		 newArr.numFlag += a.numFlag;
		 newArr.numClear += a.numClear;
		 newArr.numNoClear += a.numNoClear;
	}
	if(b){
		 newArr.numMines  += b.numMines;
		 newArr.numFlag += b.numFlag;
		 newArr.numClear += b.numClear;
		 newArr.numNoClear += b.numNoClear;
	 }
	 if(c){
		 newArr.numMines  += c.numMines;
		 newArr.numFlag += c.numFlag;
		 newArr.numClear += c.numClear;
		 newArr.numNoClear += c.numNoClear;
	 }
	return newArr
 }

//Функція підрахунку результатів перемог.
export const changeWin = (a,b,c)=>{
	let result = false;

	let newA = false;
	let newB = false;
	let newC = false;
	a === null? newA = true: newA = a.gameWin;
	b === null? newB = true: newB = b.gameWin;
	c === null? newC = true: newC = c.gameWin;
	newA && newB && newC?result = true : result = false;

	return result        
}


// Функція зміни обєкту табло-інформаціїї гри.
export const changeInfoTable = (gameArr,idEl) =>{
	let cauntMines = 0,
	cauntFlag = 0,
	cauntClear = 0,
	length = 0;

	gameArr.forEach((el,i)=>{
		length = i+1
		if(el.databomb){
			cauntMines += 1;
		}
		if(el.checked && !el.databomb){
			cauntClear += 1;
		}
		if(el.flag){
			cauntFlag += 1;
		}

	})

	let newTable = {
		id:idEl,
		numMines:cauntMines,
        numFlag:cauntFlag,
        numClear:cauntClear,
        numNoClear:length - cauntMines,
        gameWin:length - cauntMines === cauntClear ? true: false,
	}

	return newTable
}

// Функція створення обєкту гри.
export function createGame(numColumn,numBomb,cellSize){

	let x = 0,
	y = 0,
	numberColors= ['#3498db', '#2ecc71', '#e74c3c', '#9b59b6', '#f1c40f', '#1abc9c', '#34495e', '#7f8c8d',],
	bombs = [],
	numbers = [];

	const objGaame ={
		elements :[],
		boardStyle:{width : numColumn * cellSize + 'rem'},
	}

	for (let i = 0; i < numColumn * numColumn; i++) {
		const arr = {
			style:{width :cellSize + 'rem',height : cellSize + 'rem',fontSize : cellSize/1.5 + 'rem'},
			className:'tile',
			dataTile:`${x},${y}`,
			coordinates:`${x},${y}`,
			dataNum:0,
			content: false,
			checked: false,
			flag:false,
			databomb:false,
		}
		// додати бомби
		let random_boolean = Math.random() < numBomb;

		if (random_boolean) {
			bombs.push(`${x},${y}`);
			if (x > 0) numbers.push(`${x-1},${y}`);
			if (x < numColumn - 1) numbers.push(`${x+1},${y}`);
			if (y > 0) numbers.push(`${x},${y-1}`);
			if (y < numColumn - 1) numbers.push(`${x},${y+1}`);
			
			if (x > 0 && y > 0) numbers.push(`${x-1},${y-1}`);
			if (x < numColumn - 1 && y < numColumn - 1) numbers.push(`${x+1},${y+1}`);
			
			if (y > 0 && x < numColumn - 1) numbers.push(`${x+1},${y-1}`);
			if (x > 0 && y < numColumn - 1) numbers.push(`${x-1},${y+1}`);
		}

		x++;
		if (x >= numColumn) {
			x = 0;
			y++;
		}
		objGaame.elements.push(arr);
	}

	numbers.forEach(num => {
		let coords = num.split(',');

		objGaame.elements.forEach((e)=>{
			if(bombs.includes(e.coordinates)){
				e.dataNum = false;
				e.databomb = true;
			}
			else if(`${parseInt(coords[0])},${parseInt(coords[1])}`=== e.coordinates){
				e.dataNum = e.dataNum + 1;
				e.style = {...e.style ,color: numberColors[e.dataNum-1]};
			}
		})
	});
	return objGaame;
}


/* Перевірити сусідні комірки */
export function checkNeighborCells (dataArr, coordinate){
    const newArr = dataArr;
	// Координати натиснутої клітинки.
	let coords = coordinate.split(','),
	x = parseInt(coords[0]),
	y = parseInt(coords[1]),
	// Координати сусідніх клітинок.
	cellU = `${x},${y-1}`,
	cellUR = `${x+1},${y-1}`,
	cellR = `${x+1},${y}`,
	cellDR = `${x+1},${y+1}`,
	cellD = `${x},${y+1}`,
	cellDL = `${x-1},${y+1}`,
	cellL = `${x-1},${y}`,
	cellUL = `${x-1},${y-1}`;

	/* Перевіряємо сусідні клітинки змінюємо масив гри.*/
	newArr.forEach((el) => {
		if(!el.checked && !el.databomb){
			if(el.coordinates === cellU || 
				el.coordinates === cellUR ||
				el.coordinates === cellR ||
				el.coordinates === cellDR ||
				el.coordinates === cellD ||
				el.coordinates === cellDL ||
				el.coordinates === cellL ||
				el.coordinates === cellUL
				){
				if(el.dataNum === 0){ 
					el.checked = true;
				}
				else {
					el.checked = true;
					el.content = el.dataNum;
				}
			}
		}
	});
	/* Повертаємо змінений масив гри.*/
    return newArr
}
