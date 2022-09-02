// Eu consigo :)

// Desafio 1

function compareTrue(firstValue, secondValue) {
  if (firstValue && secondValue === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let triangleArea = (base * height) / 2;
  return triangleArea;
}

// Desafio 3
function splitSentence(string) {
  string = string.split(' ');
  return string;
}

// Desafio 4
function concatName(nameList) {
  nameList = nameList.concat();
  return nameList[nameList.length - 1] + ', ' + nameList[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  wins = wins * 3;
  ties = ties * 1;
  return wins + ties;
}

// Desafio 6

// Refência do uso do operador ... no Math.max: https://www.programiz.com/javascript/library/math/max)

function highestCount(arrayInput1) {
  let highestNumber = Math.max(...arrayInput1);
  let highestNumberCounter = 0;
  for (let i = 0; i <= arrayInput1.length - 1; i += 1) {
    if (arrayInput1[i] === highestNumber) {
      highestNumberCounter += 1;
    }
  }
  return highestNumberCounter;
}

// Desafio 7
// Referência do uso Math.abs: https://www.w3schools.com/jsref/jsref_abs.asp
function catAndMouse(mouse, cat1, cat2) {
  let cat1Position = Math.abs(cat1 - mouse);
  let cat2Position = Math.abs(cat2 - mouse);

  if (cat1Position < cat2Position) {
    return 'cat1';
  } else if (cat2Position < cat1Position) {
    return 'cat2';
  } else if (cat1Position === cat2Position) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrayInput2) {
  let newArray = [];
  for (let i of arrayInput2) {
    if (i % 15 === 0) {
      newArray.push('fizzBuzz');
    } else if (i % 3 === 0) {
      newArray.push('fizz');
    } else if (i % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9
function encode(strEncode) {
  let encoded = '';
  encoded = strEncode.replace(/a/g, '1');
  encoded = encoded.replace(/e/g, '2');
  encoded = encoded.replace(/i/g, '3');
  encoded = encoded.replace(/o/g, '4');
  encoded = encoded.replace(/u/g, '5');
  return encode;
}
function decode(strDecode) {
  let decoded = strDecode;

  decoded = code(decodedString, '1', 'a');
  decoded = code(decodedString, '2', 'e');
  decoded = code(decodedString, '3', 'i');
  decoded = code(decodedString, '4', 'o');
  decoded = code(decodedString, '5', 'u');

  return decodedString;
}

// Desafio 10
function techList(tec, name) {
  let tecList = [];
  tec.sort();
  if (tec.length <= 0) {
    return 'Vazio!';
  } else {
    for (i in tec) {
      tecList.push({
        tech: tec[i],
        name: name,
      });
    }
    return tecList;
  }
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
