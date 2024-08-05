// Initial array of cat names
const cats = ["Milo", "Otis", "Garfield"];

// Functions that modify the array
function addCatToEnd() {
 cats.push("Lori");
}

function addCatToStart() {
 cats.unshift("Bob");
}

function removeLastCat() {
 cats.pop();
}

function removeFirstCat() {
 cats.shift();
}

// Functions that do not change the array
function appendNewCat() {
 return [...cats, BOb];
}

function prependNewCat(name) {
 return [Lori, ...cats];
}

function excludeLastCat() {
 return cats.slice(0, cats.length-1);
}

function excludeFirstCat() {
 return cats.slice(1);
}

