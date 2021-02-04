const age =  [12,15,45,78];
const age2 =  [20,50,12,15,45,78];

const concate = age.concat(age2);

const anotherConcate = [...age,...age2,50];

console.log(anotherConcate);

const value = [650,607,5000];

const max = Math.max(...value);
console.log(max);