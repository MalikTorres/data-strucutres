'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    // console.log(
    //   `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    // );
  },

  orderPasta: function (ing1, ing2, ing3) {
    // console.log(
    //   `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3} `
    // );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];





// Rest Pattern and Parameters

// 1) Destructuring
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

// console.log(pizza, risotto, otherFood);

// Objects

const { sat, ...weekdays } = restaurant.openingHours;
//  console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  // console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);
// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

// Assignments

/* 
Destructure the keywords property (array) of the first book from the books array into variables called mainKeyword and rest. The first keyword should be assigned to mainKeyword, and the rest of the keywords should be assigned to the rest variable (it should be an array).

*/

const [mainKeyword, ...rest] = books[0].keywords;
// console.log(mainKeyword,rest);

/*
Destructure the second book from the books array into a variable called bookPublisher. The bookPublisher variable should be assigned with the value of the publisher property of the book object. Assign the rest of the properties to the restOfTheBook variable.
*/

const { publisher: bookPublisher, ...restOfTheBook } = books[1];
// console.log(restOfTheBook);

const printBookAuthorsCount = function (title, ...authors) {
  // console.log(`The book ${title} has ${authors.length} authors`);
};

printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

// SPREAD Operator
//const arr = [7, 8, 9];
//const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
//console.log(badNewArr);

//const newArr = [1, 2, ...arr];
//console.log(newArr);

//console.log(...newArr);

//const newMenu = [...restaurant.mainMenu, 'Gnocci'];
//console.log(newMenu);

// Copy array
//const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
//const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//console.log(menu);

// Iterables: arrys, strings, maps, sets. NOT objects

//const str = 'Malik';
//const letters = [...str, ' ', 'S'];
// console.log(letters);
// console.log(...str);

// Real world example
// const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt('Ingredient 2?'), prompt('Ingredient 2?'), prompt('Ingredient 3')];
// console.log(ingredients);

//restaurant.orderPasta(...ingredients);
// Objects
//const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
//console.log(newRestaurant);

//const restaurantCopy = { ...restaurant };
//restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// SPREAD ASSIGNMENTS

/* Each book object has the author property, which stores an array of strings (author names) if there are multiple authors, or a single string (author name) if there is just one author.

Declare an array called bookAuthors, and fill it with authors of the first two books from the books array. The bookAuthors array should have just one level (no nested arrays). */

//let bookAuthors = [...books[0].author, ...books[1].author];

//console.log(bookAuthors);

/* Write a function called spellWord that accepts a single string as an argument. This function should log to the console each letter of the argument separated by a space.*/

// function spellWord(str) {
  
//  let word = str
//  console.log(...word)
// }
// spellWord('Javascript');

// DESTRUCTURING OBJECTS
// const {name , openingHours, categories} = restaurant;
//console.log(name, openingHours, categories);

// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
//console.log(restaurantName, hours, tags);

// Default values
//const { menu = [], starterMenu: starters = []} = restaurant;
//console.log(menu, starters);

// Mutating variables
// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c: 14};

// Nested objects
// const {
  //   fri: {open, close}
  // } = openingHours
  // console.log(open, close);
  
  // Destructuring Objects assignments
  
  // 2.4
  let bookTitle = 'unknown';
  let bookAuthor = 'unkown';
  
  // let objB = {bookTitle: books[0].title, bookAuthor: books[0].author}
  // Assignment solution 2.5
  ({ title: bookTitle, author: bookAuthor } = books[0]);
  // console.log(objB);
  
  //2.5
  // MY SOLUTION
  // let bookRating = books[0].thirdParty.goodreads.rating;
  // console.log(bookRating);
  
  // ASSIGNMENT SOLUTION
  const {
    thirdParty: {
      goodreads: { bookRating },
    },
  } = books[0];
  
  // Similar problem to 2.5
  
  /*
  Using the books array, destructure the sixth book object to extract the following properties:
  
  The title of the book.
  The reviewsCount from the goodreads nested object. Rename it to totalReviews.
  The pages property. Rename it to pageCount.
  Do most of the work on the left side of the assignment operator.
  
  After destructuring, print the values of title, totalReviews, and pageCount.
  */
 // SOLUTION //
 const {
   title,
   thirdParty: {
     goodreads: { reviewsCount: totalReviews },
    },
    pages: pageCount,
  } = books[5];
  
  // console.log(`Title: ${title}`);
  // console.log(`Good reads review count ${totalReviews}`);
  // console.log(`Pages ${pageCount}`);
  
  // DESTRUCTURING ARRAYS//
  
  // const arr = [2, 3, 4];
  // const a = arr[0];
  // const b = arr[1];
  // const c = arr[2];
  
  // const [x, y, z] = arr;
  // console.log(x, y, z);
  // console.log(arr);
  
  // let [main, , secondary] = restaurant.categories;
  //console.log(main, secondary);
  
  // Switching Variables
  // let temp = main;
  // main = secondary
  // secondary = temp;
  
  // [main, secondary] = [secondary, main]
  //console.log(main, secondary);
  
  // Recevie 2 return values from a function
  // const [starter, mainCourse] = restaurant.order(2, 0);
  //console.log(starter, mainCourse);
  
  // Nested destructuring
  // const nested = [2, 4, [5, 6]];
  // const [i, ,j] = nested;
  // console.log(i, j);
  // const [i, , [j, k]] = nested;
  //console.log(i, j, k);
  
  // Default values
  // const [p = 1, q = 1, r = 1] = [8, 9];
  
  //console.log(p, q, r);
  
  // Short circuting(&& and ||)
  
  //console.log('---- OR -----');
  // use ANY data type, return ANY data type, short-circuting
  // console.log(3 || 'Malik');
  // console.log('' || 'Malik');
  // console.log(true || 0);
  // console.log(undefined || null);
  
  // console.log(undefined || 0 || '' || 'Hello' || 23 || null);
  
  // restaurant.numGuests = 23;
  // const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
  // console.log(guests1);
  
  // const guests2 = restaurant.numGuests || 10;
  // console.log(guests2);
  
  // console.log('---- AND ----');
  // console.log(0 && 'Malik');
  // console.log(7 && 'Malik');
  
  // console.log('Hello' && 23 && null && 'Malik');
  
  // Practical example
  if (restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms', 'spinach');
  }
  
  restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
  
  // SHORT CIRCUTING ASSIGNMENTS
  
  /*Some of the book objects have the programmingLanguage property, which specifies what programming language is used in the book, for example
  
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    ...
    programmingLanguage: 'Java',     // <-- HERE
    }
    Write a function called hasExamplesInJava that takes a book object from the books array as an argument. This function should return true if the book uses Java, or a string 'no data available' if it uses other language or no programming language at all.*/
    
    function asExamplesInJava(obj) {
      obj = books.programmingLanguage === 'Java' || 'no data available';
      
      return obj;
    }
    let result = asExamplesInJava(books[0]);
    console.log(result);
    
    /*
    Some of the book objects have the onlineContent property, which is either true or false. Loop over the books array, and for the books that provide online content, log to the console a string in this format: "${title}" provides online content. Use short-circuiting.
    
    {
      title: 'Operating System Concepts',
      ... removed for clarity
      onlineContent: false,          // <-- HERE
      },
      
      
      
      */
     
     // books.forEach(book => {
      //   let title = book.title;
      //   book.onlineContent && console.log(`"${title}" provides online content`);
      // });
      // The Nullish Coalescing Operator(??)
      
      //restaurant.numGuests = 0;
      const guests = restaurant.numGuests || 10;
      console.log(guests);
      
      // Nullish" null and undefined (NOT 0 or '')
      const guestCorrect = restaurant.numGuests ?? 10;
      console.log(guestCorrect);
      // The Nullish Coalescing Operator(??) ASSIGNMENTS

      /*There are objects in the books array that don't have the onlineContent property at all. Loop over the books array, and log a string to the console in this format: "${title}" provides no data about its online content. */
        
      books.forEach((book)=>{
        let title = book.title;
        book.onlineContent ??
          console.log(`${title} provides no data about its online content.`);
      });