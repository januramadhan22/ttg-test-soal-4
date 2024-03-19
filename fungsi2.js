function generateTriangle(rows) {
  let triangle = "";
  let numAsterisks = rows * 2 - 1;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < numAsterisks; j++) {
      triangle += "*";
    }
    triangle += "\n";
    numAsterisks -= 2;
  }
  return triangle;
}

const rows1 = 3;
const rows2 = 5;
console.log(generateTriangle(rows1));
console.log(generateTriangle(rows2));
