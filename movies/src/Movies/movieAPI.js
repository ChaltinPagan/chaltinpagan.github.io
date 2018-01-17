const movies = [
  {
    id: "1",
    title: "Eternal Sunshine of the Spotless Mind",
    year: "2004",
    genre: ["sci-fi", "romance", "comedy"],
    director: ["Michel Gondry"],
    actors: ["Jim Carrey", "Kate Winslet"],
    link: "http://www.imdb.com/title/tt0338013/?ref_=nv_sr_1",
    img:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
  },
  {
    id: "2",
    title: "Harry Potter and the Prisoner of Azkaban",
    year: "2004",
    genre: ["fantasy", "drama", "family"],
    director: ["Alfonso Cuarón"],
    actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    link: "http://www.imdb.com/title/tt0304141/?ref_=nv_sr_2",
    img:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SY1000_CR0,0,676,1000_AL_.jpg"
  },
  {
    id: "3",
    title: "Singin' in the Rain",
    year: "1952",
    genre: ["comedy", "musical"],
    director: ["Gene Kelly", "Stanley Donen"],
    actors: ["Gene Kelly", "Debbie Reynolds"],
    link: "http://www.imdb.com/title/tt0045152/?ref_=nv_sr_1",
    img:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZDRjNGViMjQtOThlMi00MTA3LThkYzQtNzJkYjBkMGE0YzE1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg"
  },
  {
    id: "4",
    title: "Up",
    year: "2009",
    genre: ["comedy", "family", "animation"],
    director: ["Pete Docter"],
    actors: ["Ed Asner", "Christopher Plummer"],
    link: "http://www.imdb.com/title/tt1049413/?ref_=fn_al_tt_1",
    img:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_SY1000_CR0,0,664,1000_AL_.jpg"
  },
  {
    id: "5",
    title: "The Incredibles",
    year: "2004",
    genre: ["comedy", "family", "superhero", "animation"],
    director: ["Brad Bird"],
    actors: ["Craig T. Nelson", "Holly Hunter"],
    link: "http://www.imdb.com/title/tt0317705/?ref_=nv_sr_1",
    img:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
  },
  {
    id: "6",
    title: "Hairspray (2007)",
    year: "2007",
    genre: ["comedy", "musical"],
    director: ["Adam Shankman"],
    actors: ["John Travolta", "Michelle Pfeiffer", "Queen Latifah"],
    link: "http://www.imdb.com/title/tt0427327/?ref_=nv_sr_1",
    img:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTIyMTMzNzIyNV5BMl5BanBnXkFtZTcwMjM1NDk0MQ@@._V1_.jpg"
  },
  {
    id: "7",
    title: "Anomalisa",
    year: "2015",
    genre: ["drama", "romance", "animation"],
    director: ["Charlie Kaufman", "Duke Johnson"],
    actors: ["David Thewlis", "Jennifer Jason Leigh"],
    link: "http://www.imdb.com/title/tt2401878/?ref_=nv_sr_3",
    img:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ3NDQyODg1MV5BMl5BanBnXkFtZTgwMDQxNjQ0NzE@._V1_.jpg"
  },
  {
    id: "8",
    title: "You've Got Mail",
    year: "1998",
    genre: ["comedy", "romance"],
    director: ["Nora Ephron"],
    actors: ["Tom Hanks", "Meg Ryan"],
    link: "http://www.imdb.com/title/tt0128853/?ref_=nv_sr_1",
    img:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZTcxNzgzZjMtYzZiZC00MmE1LTg3MzQtZDAxMTYyZWE4MDNhL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
  },
  {
    id: "9",
    title: "Miss Congeniality",
    year: "2000",
    genre: ["comedy", "feminist"],
    director: ["Donald Petrie"],
    actors: ["Sandra Bullock"],
    link: "http://www.imdb.com/title/tt0212346/?ref_=nv_sr_1",
    img:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BYmRjNTJkOGMtMmRhYi00MWUwLTlmOTMtMzIyOTM3NTUyZDQ4XkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
  },
  {
    id: "10",
    title: "The Chorus",
    year: "2004",
    genre: ["drama", "foreign"],
    director: ["Christophe Barratier"],
    actors: ["Gérard Jugnot"],
    link: "http://www.imdb.com/title/tt0372824/?ref_=nv_sr_1",
    img:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg3OTQwOTk3OF5BMl5BanBnXkFtZTYwMzA3OTg2._V1_.jpg"
  },
  {
    id: "11",
    title: "Scott Pilgrim vs. the World",
    year: "2010",
    genre: ["comedy", "superhero", "romance"],
    director: ["Edgar Wright"],
    actors: ["Michael Cera", "Mary Elizabeth Winstead,"],
    link: "http://www.imdb.com/title/tt0446029/?ref_=nv_sr_4",
    img:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkwNTczNTMyOF5BMl5BanBnXkFtZTcwNzUxOTUyMw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
  },
  {
    id: "12",
    title: "Big Fish",
    year: "2003",
    genre: ["comedy", "fantasy", "romance"],
    director: ["Tim Burton"],
    actors: ["Ewan McGregor", "Alison Lohman"],
    link: "http://www.imdb.com/title/tt0319061/?ref_=nv_sr_1",
    img:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYyMzM3MzgyNV5BMl5BanBnXkFtZTcwMTI4MzUyMQ@@._V1_.jpg"
  },
  {
    id: "13",
    title: "Moulin Rouge",
    year: "2001",
    genre: ["comedy", "musical", "romance"],
    director: ["Baz Luhrmann"],
    actors: ["Ewan McGregor", "Nicole Kidman"],
    link: "http://www.imdb.com/title/tt0203009/?ref_=nv_sr_1",
    img:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BODg5MTk2YmYtMzQyOC00OGUzLWFlZDYtMjBkNTk3MTA3ZjU0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg"
  },
  {
    id: "14",
    title: "Howl's Moving Castle",
    year: "2004",
    genre: ["anime", "foreign", "drama", "family", "animation", "fantasy"],
    director: ["Hiyao Miyazaki"],
    actors: ["Christian Bale (English-dubbed version)", "Emily Mortimer (English-dubbed version)" ],
    link: "http://www.imdb.com/title/tt0347149/?ref_=nv_sr_1",
    img: 
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNWM2ZmU5YjQtZjdiNi00ZjU3LTg1NzYtYTgxMTBmNTJkYmIxXkEyXkFqcGdeQXVyMzg2MzE2OTE@._V1_SY1000_SX674_AL_.jpg"
  },
  {
    id: "15",
    title: "Yours, Mine and Ours",
    year: "1968",
    genre: ["comedy", "family"],
    director: ["Melville Shavelson"],
    actors: ["Lucille Ball", "Henry Fonda"],
    link: "http://www.imdb.com/title/tt0063829/?ref_=nv_sr_2",
    img: 
      "https://images-na.ssl-images-amazon.com/images/M/MV5BOTlhNzYyNzctNmYwOS00OGE3LTgyZWQtYzJkNmEzZGY3NjNjXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
  },
  {
    id: "16",
    title: "Strictly Ballroom",
    year: "1992",
    genre: ["comedy", "foreign"],
    director: ["Baz Luhrmann"],
    actors: ["Paul Mercurio", "Tara Morice"],
    link: "http://www.imdb.com/title/tt0105488/?ref_=nv_sr_1",
    img:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNjg3NjU1MjU4N15BMl5BanBnXkFtZTYwNzY4NzI5._V1_.jpg"
  },
  {
    id: "17",
    title: "Muriel's Wedding",
    year: "1994",
    genre: ["comedy", "family", "foreign"],
    director: ["P.J. Hogan"],
    actors: ["Toni Collette", "Rachel Griffiths"],
    link: "http://www.imdb.com/title/tt0110598/?ref_=nv_sr_1",
    img:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNTU2M2Q0YzktZGE4MC00YTQ1LWJmZGUtYzdjZTdiODBkY2ZmXkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_SY1000_CR0,0,676,1000_AL_.jpg"
  },
  {
    id: "18",
    title: "Bridesmaids",
    year: "2011",
    genre: ["comedy", "feminist"],
    director: ["Paul Feig"],
    actors: ["Kristen Wiig", "Melissa McCarthy"],
    link: "http://www.imdb.com/title/tt1478338/?ref_=nv_sr_3",
    img: 
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAyOTMyMzUxNl5BMl5BanBnXkFtZTcwODI4MzE0NA@@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
  }
];

const getAll = () => movies;

const getOne = id => movies.find(movie => movie.id === id);

const getGenre = choice => movies.filter(movie => movie.genre.includes(choice));

//This is for the drop-down select button on the Genre page.
const getAllGenre = () => {
  //This takes the genre property of each object. Genre is an array and is concated to the variable 'all', which is an array with an empty string.
  //'all' contains an empty string because I want the first choice for my select drop-down list to be blank.
  let all = [""];
  movies.forEach(el => {
    all = all.concat(el.genre);
  });

  //"all" conatains duplicate elements in the array.
  //To de-dupe, filter the array and use indexOf() to find the first instance of an element.
  //De-dupe solution from http://www.jstips.co/en/javascript/deduplicate-an-array/.
  //Push the element into a new array "allFilter."
  let allFilter = [];
  all.filter((el, i, arr) => {
    if (arr.indexOf(el) === i) {
      allFilter.push(el)
    };
  });

  //Return the de-duped array. Sort alphabetically with .sort().
  return allFilter.sort();
};

//Solution from Stack Overflow https://stackoverflow.com/a/8175198.
const alphaMovies = () =>
  movies.sort((a, b) => {
    return b.title < a.title ? 1 // if b should come earlier, push a to end
      : b.title > a.title ? -1 // if b should come later, push a to begin
        : 0;                   // a and b are equal
  });
//const getAlphaMovies = () => alphaMovies;
// console.log(alphaMovies());
// console.log(getAllGenre());
//console.log(getAll()); 
//console.log(alphaMovies);
console.log(alphaMovies());

export default {
  getOne,
  getAll,
  getGenre,
  getAllGenre, 
  alphaMovies
};
