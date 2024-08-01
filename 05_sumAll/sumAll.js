const sumAll = function(start, end) {
  if (!Number.isInteger(start) || !Number.isInteger(end)) {
    return "ERROR";
  }
  if (start < 0 || end < 0) { 
    return "ERROR";
  }

  let sum = 0;
  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }
  return (end * (end+1) - (start-1) * start) / 2;
};

// Do not edit below this line
module.exports = sumAll;
