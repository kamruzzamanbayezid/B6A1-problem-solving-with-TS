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
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type Item = {
  title: string;
  rating: number;
};
const filterByRating = (arr: Item[]): Item[] => {
  const filteredByRating = arr.filter((element) => element.rating >= 4);
  return filteredByRating;
};

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
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

const getUniqueValues = <T extends string | number>(
  arr1: T[],
  arr2: T[]
): T[] => {
  const restArr = [...arr1, ...arr2];
  const newArr: T[] = [];

  for (let i = 0; i < restArr.length; i++) {
    let matchElement = false;

    for (let j = 0; j < newArr.length; j++) {
      if (newArr[j] === restArr[i]) {
        matchElement = true;
        break;
      }
    }

    if (!matchElement) {
      newArr[newArr.length] = restArr[i];
    }
  }

  return newArr;
};

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};
const calculateTotalPrice = (arr: Product[]): number => {
  const totalPrice = arr.reduce((prev, curr) => {
    const discountPrice = curr.discount
      ? curr.price * (curr?.discount / 100)
      : 0;
    const priceAfterDis = curr.price - discountPrice;
    return prev + priceAfterDis * curr.quantity;
  }, 0);
  return totalPrice;
};
