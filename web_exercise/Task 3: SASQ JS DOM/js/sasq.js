let baseArray = [];
let idMap = new Map();
let idValue = 0
	, arrCounter = 0;
let lastIdValue, firstIdValue;

function hasElement(value) {
	return idMap.has(value);
}

function createNode(flag) {
	let baseItem = document.getElementById("baseItem");
	let cloneItem = baseItem.cloneNode(true);
	cloneItem.id = "element" + idValue;
	let itemText = cloneItem.querySelector("#itemText");
	let newValue;
	while (true) {
		newValue = prompt("enter element value");
		if (!hasElement(newValue) && newValue != "") {
			arrCounter++;
			break;
		}
	}
	itemText.innerHTML = newValue;
	idValue++;
	return cloneItem;
}
Element.prototype.appendAfter = function (element) {
	element.parentNode.insertBefore(this, element.nextSibling);
}, false;
Element.prototype.appendBefore = function (element) {
	element.parentNode.insertBefore(this, element);
}, true;

function push() {
	cloneItem = createNode();
	cloneItem.classList.add("animePush");
	cloneItem.classList.remove("hidden");
	if (arrCounter == 1) {
		document.getElementById("myItems")
			.appendChild(cloneItem);
		firstIdValue = lastIdValue = cloneItem.id;
	} else {
		cloneItem.appendAfter(document.getElementById(lastIdValue));
		lastIdValue = cloneItem.id;
	}
	value = document.getElementById(cloneItem.id)
		.querySelector("#itemText")
		.innerHTML;
	baseArray.push(value);
	idMap.set(value, cloneItem.id);
	toggleCols();
}

function pop() {
	document.getElementById(lastIdValue)
		.classList.add("animePop");
	let deletingValue = baseArray.pop();
	idMap.delete(deletingValue);
	let tempLastId = lastIdValue;
	if (arrCounter == 1) {
		arrCounter = 0;
		setTimeout(function () {
			document.getElementById(tempLastId)
				.remove();
		}, 998);
		firstIdValue = lastIdValue = "";
	} else {
		arrCounter--;
		setTimeout(function () {
			document.getElementById(tempLastId)
				.remove();
		}, 998);
		lastIdValue = idMap.get(baseArray[baseArray.length - 1]);
	}
	toggleCols();
}

function unshift() {
	cloneItem = createNode();
	cloneItem.classList.add("animeNQ");
	cloneItem.classList.remove("hidden");
	if (arrCounter == 1) {
		document.getElementById("myItems")
			.appendChild(cloneItem);
		firstIdValue = lastIdValue = cloneItem.id;
	} else {
		cloneItem.appendBefore(document.getElementById(firstIdValue));
		firstIdValue = cloneItem.id;
	}
	value = document.getElementById(cloneItem.id)
		.querySelector("#itemText")
		.innerHTML;
	baseArray.unshift(value);
	idMap.set(value, cloneItem.id);
	toggleCols();
}

function shift() {
	document.getElementById(firstIdValue)
		.classList.add("animeDQ");
	let deletingValue = baseArray.shift();
	idMap.delete(deletingValue);
	let tempFirstId = firstIdValue;
	if (arrCounter == 1) {
		arrCounter = 0;
		setTimeout(function () {
			document.getElementById(tempFirstId)
				.remove();
		}, 998);
		firstIdValue = lastIdValue = "";
	} else {
		arrCounter--;
		setTimeout(function () {
			document.getElementById(tempFirstId)
				.remove();
		}, 998);
		firstIdValue = idMap.get(baseArray[0]);
	}
	toggleCols();
}

function toggleCols() {
	let btnPop = document.getElementById("btnPop");
	let btnShift = document.getElementById("btnShift");
	if (arrCounter == 0) {
		btnPop.classList.add("hidden");
		btnShift.classList.add("hidden");
	} else {
		btnPop.classList.remove("hidden");
		btnShift.classList.remove("hidden");
	}
}