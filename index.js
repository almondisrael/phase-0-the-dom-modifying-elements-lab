// Write your code here!
// Gets the main element by its ID and removes it
let mainId = document.getElementById('main');
mainId.remove();

// Creates the newHeader element, sets its ID and text content, and appends it to the body
let newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Clive Nyaga is the champion';
document.body.append(newHeader);