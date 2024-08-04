var numbers = [12, 23, 34, 45];
//use push to add element to an array as the last element array
numbers.push(56, 67);
console.log(numbers);

var friends = ["Farabi", "Imran", "Sabbir", "Mehrab", "Sakib", "Azim"];
friends.push("unknown");
//use push to add element to an array as the last element array
friends.push("Adiba", "Nishat", "Nipa",);
console.log(friends);
//use pop to delete element to an array as the last element array
friends.pop();
friends.pop();
console.log(friends);

// add an element beginning of an array
var company = ["Nike", "Puma", "New Balance"];
company.unshift("Adidas");
console.log(company);
//delete/remove an element beginning of an array
company.shift();
console.log(company);

