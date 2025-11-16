type PrimitiveValue = string | number | boolean;
const formatValue = (value: PrimitiveValue): PrimitiveValue => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  }
  return !value;
};

const getLength = (value: string | number[]): number => {
  if (typeof value === "string") {
    return value.length;
  }
  return value.length;
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

interface Item {
  title: string;
  rating: 0 | 1 | 2 | 3 | 4 | 5;
}
const filterByRating = (arr: Item[]): Item[] => {
  const filteredByRating = arr.filter((element) => element.rating >= 4);
  return filteredByRating;
};

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}
const filterActiveUsers = (arr: User[]): User[] => {
  const filteredArrWithActiveUser = arr.filter(
    (element) => element.isActive === true
  );
  return filteredArrWithActiveUser;
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (object: Book) => {
  console.log(
    `Title: ${object.title}, Author: ${object.author}, Published: ${
      object.publishedYear
    }, Available: ${object.isAvailable ? "Yes" : "No"}`
  );
};

// Create a function getUniqueValues that accepts two arrays and returns a new array containing only the unique values from both arrays, without any duplicates.

// Requirements:
// You must write the correct type for the function parameter and the return type.
// The function should handle arrays of strings or numbers.
// You are not allowed to use any built-in methods to solve this problem.

const getUniqueValues = <T extends string | number>(
  arr1: T[],
  arr2: T[]
): T[] => {
  const restArr = [...arr1, ...arr2];
  const newArr = [];

  for (let i = 0; i < restArr.length; i++) {
    
      for (let i = 0; i < newArr.length; i++) {
            
      }
    
  }
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 5, 3, 6, 7];
console.log(getUniqueValues(array1, array2));
[1, 2, 3, 4, 5, 6, 7]; // expected result

// Create a function calculateTotalPrice that accepts an array of product objects. Each product object contains the following properties:

// name (string)
// price (number)
// quantity (number)
// discount? (optional number, percentage between 0-100)
// The function should return the total price of all products in the array, taking into account the discount for each product (if provided). If the array is empty, return 0.

// Requirements:
// You must write the correct type for the function parameter and the return type.
// Use array methods (map, reduce, etc.) to calculate the total.
// The total price of each product is calculated as: (price * quantity).
// Correctly handle products with and without the discount property.
