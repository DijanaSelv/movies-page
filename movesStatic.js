const movies = [
  // Action

  {
    title: "The Dark Knight",
    year: "2008",
    genre: "Action",
    description:
      "When the menace known as The Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    director: "Christopher Nolan",
    rating: "9.0",
    duration: "2:32",
    poster:
      "https://media-cache.cinematerial.com/p/500x/udapnxr3/the-dark-knight-movie-poster.jpg?v=1456051180",
  },
  {
    title: "Mad Max: Fury Road",
    year: "2015",
    genre: "Action",
    description:
      "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler with the aid of a drifter named Max.",
    director: "George Miller",
    rating: "8.1",
    duration: "2:00",
    poster:
      "https://media-cache.cinematerial.com/p/500x/vfnqrhoe/mad-max-fury-road-movie-poster.jpg?v=1456406531",
  },
  {
    title: "Die Hard",
    year: "1988",
    genre: "Action",
    description:
      "An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.",
    director: "John McTiernan",
    rating: "8.2",
    duration: "2:12",
    poster:
      "https://media-cache.cinematerial.com/p/500x/4zgmdto6/die-hard-advance-movie-poster.jpg?v=1456380391",
  },
  {
    title: "Gladiator",
    year: "2000",
    genre: "Action",
    description:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    director: "Ridley Scott",
    rating: "8.5",
    duration: "2:35",
    poster:
      "https://media-cache.cinematerial.com/p/500x/eoqdxh0o/gladiator-movie-poster.jpg?v=1456289024",
  },
  {
    title: "John Wick",
    year: "2014",
    genre: "Action",
    description:
      "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
    director: "Chad Stahelski",
    rating: "7.4",
    duration: "1:41",
    poster:
      "https://media-cache.cinematerial.com/p/500x/at0xa68s/john-wick-chapter-two-movie-poster.jpg?v=1540745957",
  },

  // Drama
  {
    title: "The Shawshank Redemption",
    year: "1994",
    genre: "Drama",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    director: "Frank Darabont",
    rating: "9.3",
    duration: "2:22",
    poster:
      "https://media-cache.cinematerial.com/p/500x/b5v2e9jg/the-shawshank-redemption-movie-poster.jpg?v=1596989012",
  },
  {
    title: "Forrest Gump",
    year: "1994",
    genre: "Drama",
    description:
      "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
    director: "Robert Zemeckis",
    rating: "8.8",
    duration: "2:22",
    poster:
      "https://media-cache.cinematerial.com/p/500x/hncfztv7/forrest-gump-movie-poster.jpg?v=1602182137",
  },
  {
    title: "The Godfather",
    year: "1972",
    genre: "Drama",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    director: "Francis Ford Coppola",
    rating: "9.2",
    duration: "2:55",
    poster:
      "https://media-cache.cinematerial.com/p/500x/1suyyfwy/the-godfather-movie-poster.jpg?v=1456733600",
  },

  {
    title: "The Green Mile",
    year: "1999",
    genre: "Drama",
    description:
      "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
    director: "Frank Darabont",
    rating: "8.6",
    duration: "3:09",
    poster:
      "https://media-cache.cinematerial.com/p/500x/vcg2c3x8/the-green-mile-movie-poster.jpg?v=1596986494",
  },

  // Sci-Fi
  {
    title: "Dune: Part Two",
    year: "2024",
    genre: "Sci-Fi",
    description:
      "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    director: "Denis Villeneuve",
    rating: "8.8",
    duration: "2:46",
    poster:
      "https://media-cache.cinematerial.com/p/500x/llixelmk/dune-part-two-movie-poster.jpg?v=1701466136",
  },
  {
    title: "Interstellar",
    year: "2014",
    genre: "Sci-Fi",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    director: "Christopher Nolan",
    rating: "8.6",
    duration: "2:49",
    poster:
      "https://media-cache.cinematerial.com/p/500x/efx2wmcd/interstellar-movie-poster.jpg?v=1456424455",
  },
  {
    title: "Blade Runner 2049",
    year: "2017",
    genre: "Sci-Fi",
    description:
      "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years.",
    director: "Denis Villeneuve",
    rating: "8.0",
    duration: "2:44",
    poster:
      "https://media-cache.cinematerial.com/p/500x/pms2nqxh/blade-runner-2049-movie-poster.jpg?v=1523893642",
  },
  {
    title: "The Matrix",
    year: "1999",
    genre: "Sci-Fi",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    director: "Lana Wachowski, Lilly Wachowski",
    rating: "8.7",
    duration: "2:16",
    poster:
      "https://media-cache.cinematerial.com/p/500x/sejtqyfp/the-matrix-movie-poster.jpg?v=1673723611",
  },
  {
    title: "Arrival",
    year: "2016",
    genre: "Sci-Fi",
    description:
      "When mysterious spacecraft touch down across the globe, an elite team, led by expert linguist Louise Banks, is brought together to investigate.",
    director: "Denis Villeneuve",
    rating: "7.9",
    duration: "1:56",
    poster:
      "https://media-cache.cinematerial.com/p/500x/4wijjaoj/arrival-movie-poster.jpg?v=1508019661",
  },
  {
    title: "The Martian",
    year: "2015",
    genre: "Sci-Fi",
    description:
      "An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.",
    director: "Ridley Scott",
    rating: "8.0",
    duration: "2:24",
    poster:
      "https://media-cache.cinematerial.com/p/500x/j1e5e7nr/the-martian-movie-poster.jpg?v=1456808885",
  },

  // Fantasy
  {
    title: "Charlie and the Chocolate Factory",
    year: "2005",
    genre: "Fantasy",
    description:
      "A young boy wins a tour through the most magnificent chocolate factory in the world, led by the world's most unusual candy maker.",
    director: "Tim Burton",
    rating: "6.6",
    duration: "1:55",
    poster:
      "https://media-cache.cinematerial.com/p/500x/lufkxtvp/charlie-and-the-chocolate-factory-movie-poster.jpg?v=1456196325",
  },
  {
    title: "Avatar",
    year: "2009",
    genre: "Fantasy",
    description:
      "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    director: "James Cameron",
    rating: "7.8",
    duration: "2:42",
    poster:
      "https://media-cache.cinematerial.com/p/500x/yonz5gr7/avatar-theatrical-movie-poster.jpg?v=1456799710",
  },
  {
    title: "Harry Potter and the Deathly Hallows: Part 2",
    year: "2011",
    genre: "Fantasy",
    description:
      "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
    director: "David Yates",
    rating: "8.1",
    duration: "2:10",
    poster:
      "https://media-cache.cinematerial.com/p/500x/pc6mfc7o/harry-potter-and-the-deathly-hallows-part-ii-movie-poster.jpg?v=1456721312",
  },
  {
    title: "Pan's Labyrinth",
    year: "2006",
    genre: "Fantasy",
    description:
      "In the Falangist Spain of 1944, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world.",
    director: "Guillermo del Toro",
    rating: "8.2",
    duration: "1:58",
    poster:
      "https://media-cache.cinematerial.com/p/500x/ptw7vguh/el-laberinto-del-fauno-spanish-movie-poster.jpg?v=1456303053",
  },

  {
    title: "The Princess Bride",
    year: "1987",
    genre: "Fantasy",
    description:
      "While home sick in bed, a young boy's grandfather reads him the story of a farmboy-turned-pirate who encounters numerous obstacles, enemies and allies.",
    director: "Rob Reiner",
    rating: "8.1",
    duration: "1:38",
    poster:
      "https://media-cache.cinematerial.com/p/500x/iug9oeku/the-princess-bride-movie-poster.jpg?v=1456262950",
  },

  // Historical
  {
    title: "Schindler's List",
    year: "1993",
    genre: "Historical",
    description:
      "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce.",
    director: "Steven Spielberg",
    rating: "8.9",
    duration: "3:15",
    poster:
      "https://media-cache.cinematerial.com/p/500x/qbsdx7kq/schindlers-list-movie-poster.jpg?v=1456259195",
  },
  {
    title: "Dunkirk",
    year: "2017",
    genre: "Historical",
    description:
      "Allied soldiers from Belgium, the British Empire, and France are surrounded by the German Army and evacuated during a fierce battle in World War II.",
    director: "Christopher Nolan",
    rating: "7.8",
    duration: "1:46",
    poster:
      "https://media-cache.cinematerial.com/p/500x/i8nzz3oh/dunkirk-teaser-movie-poster.jpg?v=1481772419",
  },
  {
    title: "Braveheart",
    year: "1995",
    genre: "Historical",
    description:
      "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.",
    director: "Mel Gibson",
    rating: "8.3",
    duration: "2:58",
    poster:
      "https://media-cache.cinematerial.com/p/500x/mhzphbzt/braveheart-movie-poster.jpg?v=1690739147",
  },

  {
    title: "Saving Private Ryan",
    year: "1998",
    genre: "Historical",
    description:
      "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
    director: "Steven Spielberg",
    rating: "8.6",
    duration: "2:49",
    poster:
      "https://media-cache.cinematerial.com/p/500x/timgoz1w/saving-private-ryan-movie-poster.jpg?v=1456232067",
  },

  // Documentary
  {
    title: "Blackfish",
    year: "2013",
    genre: "Documentary",
    description:
      "A documentary following the controversial captivity of killer whales, and its dangers for both humans and whales.",
    director: "Gabriela Cowperthwaite",
    rating: "8.1",
    duration: "1:23",
    poster:
      "https://media-cache.cinematerial.com/p/500x/tgyicqab/blackfish-movie-poster.jpg?v=1456513907",
  },
  {
    title: "The Cove",
    year: "2009",
    genre: "Documentary",
    description:
      "A documentary on the dolphin hunting operations in Taiji, Japan and its impact on the local environment and community.",
    director: "Louie Psihoyos",
    rating: "8.4",
    duration: "1:32",
    poster:
      "https://media-cache.cinematerial.com/p/500x/zuenzfrh/the-cove-movie-poster.jpg?v=1456022712",
  },
  {
    title: "Won't You Be My Neighbor?",
    year: "2018",
    genre: "Documentary",
    description:
      "An exploration of the life, lessons, and legacy of iconic children's television host, Fred Rogers.",
    director: "Morgan Neville",
    rating: "8.4",
    duration: "1:34",
    poster:
      "https://media-cache.cinematerial.com/p/500x/0nkxejbq/wont-you-be-my-neighbor-movie-poster.jpg?v=1524312229",
  },
  {
    title: "Jiro Dreams of Sushi",
    year: "2011",
    genre: "Documentary",
    description:
      "A documentary on 85-year-old sushi master Jiro Ono, his renowned Tokyo restaurant, and his relationship with his son and eventual heir, Yoshikazu.",
    director: "David Gelb",
    rating: "7.9",
    duration: "1:21",
    poster:
      "https://media-cache.cinematerial.com/p/500x/kbfxlely/jiro-dreams-of-sushi-movie-poster.jpg?v=1456673644",
  },
  {
    title: "March of the Penguins",
    year: "2005",
    genre: "Documentary",
    description:
      "In the Antarctic, every March since the beginning of time, the quest begins to find the perfect mate and start a family.",
    director: "Luc Jacquet",
    rating: "7.5",
    duration: "1:20",
    poster:
      "https://media-cache.cinematerial.com/p/500x/nsfnbtfi/march-of-the-penguins-french-poster.jpg?v=1456152622",
  },
];
export default movies;
