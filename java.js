
//Part:1
function sumArray(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
  
  function averageArray(numbers) {
    if (numbers.length === 0) return 0;
    return sumArray(numbers) / numbers.length;
  }
  
  function longestString(strings) {
    return strings.reduce((longest, current) => (current.length > longest.length ? current : longest), "");
  }
  
  function stringsLongerThan(strings, length) {
    return strings.filter(str => str.length > length);
  }
  
 
  function printNumbers(n) {
    if (n > 0) {
      printNumbers(n - 1);
      console.log(n);
    }
  }
  
  console.log(sumArray([1, 2, 3]));  // Output: 6
  console.log(averageArray([1, 2, 3]));  // Output: 2
  console.log(longestString(['say', 'hello', 'in', 'the', 'morning']));  // Output: 'morning'
  console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));  // Output: ['hello', 'morning']
  printNumbers(5);  // Output: 1, 2, 3, 4, 5
  

  //Part:2
  const data = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  ];
  
  const sortedByAge = data.sort((a, b) => a.age - b.age);
  const ageLessThan50 = data.filter(person => person.age <= 50);
  
  const mappedData = data.map(person => ({
    ...person,
    job: person.occupation,
    age: parseInt(person.age) + 1
  }));
  
  const sumOfAges = data.reduce((acc, person) => acc + parseInt(person.age), 0);
  const averageAge = sumOfAges / data.length;
  



//Part:3
function incrementAge(person) {
    person.age = (parseInt(person.age) || 0) + 1;
    person.updated_at = new Date();
  }
  
  function copyAndIncrementAge(person) {
    const copy = { ...person, age: (parseInt(person.age) || 0) + 1, updated_at: new Date() };
    return copy;
  }
  



