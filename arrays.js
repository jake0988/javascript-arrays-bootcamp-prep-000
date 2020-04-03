var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element) {
  var beg = array
  var neg = element
  beg = [neg,...beg]
  return beg;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var beg = array;
  var neg = element;
  beg = beg.unshift(neg);
  return beg;
}

function addElementToEndOfArray(array, element) {
  var beg = array
  var neg = element
  beg = [...beg, neg]
  return beg;
}

function destructivelyAddElementToEndOfArray(array, element) {
  var beg = array;
  var neg = element;
  beg = beg.push(neg);
  return beg;
}

function accessElementInArray(array, index) {
  var amount = array
  var number = index
  return array[number];
}
