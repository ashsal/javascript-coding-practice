function printMultiplicationTable(tableOf, tableTill) {
  // validation that tableOf and tableTill are positive integers
  for (let i = 1; i <= tableTill; i++) {
    console.log(`${tableOf} x ${i} = ${tableOf * i}`);
  }
}

function printMultiplicationTable2(tableOf, tableTill) {
  // validation that tableOf and tableTill are positive integers
  let counter = 1;
  for (let i = tableOf; i <= tableOf * tableTill; i = i + tableOf) {
    console.log(`${tableOf} x ${counter} = ${i}`);
    counter++;
  }
}

printMultiplicationTable(2, 10);
console.log("printMultiplicationTable2");
printMultiplicationTable2(2, 10);
