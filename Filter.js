// ++++++++++++++++  Using Filter  ++++++++++++++++++++

// Filter

let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myNums = myArr.filter( (item) => item > 6 );
console.log(myNums);


// Good example for understanding filter

const books = [
    {
      name: "To Kill a Mockingbird",
      genre: "Fiction",
      publishingYear: 1960,
      editionYear: 2006
    },
    {
      name: "Dystopian",
      genre: "Fantasy",
      publishingYear: 1949,
      editionYear: 2009
    },
    {
      name: "The Great Gatsby",
      genre: "Classic",
      publishingYear: 1925,
      editionYear: 2004
    },
    {
      name: "The Catcher in the Rye",
      genre: "Literary Fiction",
      publishingYear: 1951,
      editionYear: 2010
    },
    {
      name: "The Hobbit",
      genre: "Fantasy",
      publishingYear: 1937,
      editionYear: 2012
    },
    {
      name: "Pride and Prejudice",
      genre: "Romance",
      publishingYear: 1813,
      editionYear: 2008
    },
    {
      name: "Moby Dick",
      genre: "Adventure",
      publishingYear: 1851,
      editionYear: 2015
    },
    {
      name: "War and Peace",
      genre: "Historical Fiction",
      publishingYear: 1869,
      editionYear: 2007
    }
  ];
  
  const FantasyBks = books.filter( (Bk) => Bk.genre === "Fantasy" );
  console.log(FantasyBks); // Will Print Books with genre Fantasy


  const BkAftTwoThousand = books.filter( (published) => published.publishingYear > 1950  && published.editionYear > 2000);
  console.log(BkAftTwoThousand); // Will Print Books Published after 1950 and edition is after 2000
  