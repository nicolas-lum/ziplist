const list1 = [1, 2, 4, 8];
const list2 = ['a', 'b', 'c', 'e'];


function zipList(even, odd) {
  let i = 0;
  const newList = [];

  while (i < even.length) {
    newList.push(even[i], odd[i]);
    i++;
  }
  return newList;
}

function zipListTheSimpleWay(listA, listB) {
  return _.flatten(_.zip(listA, listB));
}


console.log(zipList(list1, list2));
console.log(zipListTheSimpleWay(list1, list2));
