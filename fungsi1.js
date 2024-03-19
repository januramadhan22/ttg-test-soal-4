function generateEvenNumbers(totalNumber, totalGroup) {
  let startNumber = 2;
  const evenNumbers = [];
  const groupedNumbers = [];

  for (let i = 0; i < totalNumber; i++) {
    evenNumbers.push(startNumber);
    startNumber += 2;
  }

  let index = 0;
  const numbersPerGroup = Math.ceil(totalNumber / totalGroup);
  for (let i = 0; i < totalGroup; i++) {
    const group = evenNumbers.slice(index, index + numbersPerGroup);
    groupedNumbers.push(group);
    index += numbersPerGroup;
  }

  return groupedNumbers;
}

const totalNumber1 = 10;
const totalGroup1 = 2;
console.log(generateEvenNumbers(totalNumber1, totalGroup1));

const totalNumber2 = 7;
const totalGroup2 = 3;
console.log(generateEvenNumbers(totalNumber2, totalGroup2));
