export default function analyzeArray(array) {
  const returnObject = {
    average: average(array),
    min: min(array),
    max: max(array),
    length: length(array),
  };

  return returnObject;
}

function average(array) {
  const sum = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  return sum / array.length;
}

function min(array) {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
  }

  return min;
}

function max(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }

  return max;
}

function length(array) {
  return array.length;
}
