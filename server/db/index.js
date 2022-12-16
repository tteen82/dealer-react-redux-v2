const Sequelize = require('sequelize');
const { STRING, TEXT } = Sequelize;
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost/avengers'
);

const Movies = db.define('movies', {
  title: {
    type: STRING,
  },
  year: {
    type: STRING,
  },
  imagesrc: {
    type: TEXT,
  },
  synopsis: {
    type: TEXT,
  },
});

const Heros = db.define('heros', {
  name: {
    type: STRING,
  },
});

const Casting = db.define('casting');

Casting.belongsTo(Heros);
Casting.belongsTo(Movies);
Casting.hasMany(Heros);
Casting.hasMany(Movies);

const syncAndSeed = async () => {
  await Promise.all(
    [
      Movies.create({
        title: 'The Avengers',
        year: '2012',
        imagesrc:
          'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
        synopsis:
          'When Thors evil brother, Loki (Tom Hiddleston), gains access to the unlimited power of the energy cube called the Tesseract, Nick Fury (Samuel L. Jackson), director of S.H.I.E.L.D., initiates a superhero recruitment effort to defeat the unprecedented threat to Earth. Joining Furys dream team are Iron Man (Robert Downey Jr.), Captain America (Chris Evans), the Hulk (Mark Ruffalo), Thor (Chris Hemsworth), the Black Widow (Scarlett Johansson) and Hawkeye (Jeremy Renner).',
      }),
    ],
    [
      Movies.create({
        title: 'Avengers: Age of Ultron',
        year: '2015',
        imagesrc:
          'https://www.ocmoviereviews.com/wp-content/uploads/2015/05/avengers-age-of-ultron.jpg',
        synopsis:
          'When Tony Stark (Robert Downey Jr.) jump-starts a dormant peacekeeping program, things go terribly awry, forcing him, Thor (Chris Hemsworth), the Incredible Hulk (Mark Ruffalo) and the rest of the Avengers to reassemble. As the fate of Earth hangs in the balance, the team is put to the ultimate test as they battle Ultron, a technological terror hell-bent on human extinction. Along the way, they encounter two mysterious and powerful newcomers, Pietro and Wanda Maximoff.',
      }),
    ],
    [
      Movies.create({
        title: 'Avengers: Infinity War',
        year: '2018',
        imagesrc:
          'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg',
        synopsis:
          'Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. The fate of the planet and existence itself has never been more uncertain as everything the Avengers have fought for has led up to this moment.',
      }),
    ],
    [
      Movies.create({
        title: 'Avengers: End Game',
        year: '2019',
        imagesrc:
          'https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810',
        synopsis:
          'drift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.',
      }),
    ],
    [
      Heros.create({
        name: 'Robert Downey Jr.',
      }),
    ],
    [
      Heros.create({
        name: 'Chris Evans',
      }),
    ],
    [
      Heros.create({
        name: 'Mark Ruffalo',
      }),
    ],
    [
      Heros.create({
        name: 'Chris Hemsworth',
      }),
    ],
    [
      Heros.create({
        name: 'Scarlett Johansson',
      }),
    ],
    [
      Heros.create({
        name: 'Jeremy Renner',
      }),
    ],
    [
      Heros.create({
        name: 'Tom Hiddleston',
      }),
    ],
    [
      Heros.create({
        name: 'Clark Gregg',
      }),
    ],
    [
      Heros.create({
        name: 'Stellan Skarsgård',
      }),
    ],
    [
      Heros.create({
        name: 'Samuel L. Jackson',
      }),
    ],
    [
      Heros.create({
        name: 'Don Cheadle',
      }),
    ],
    [
      Heros.create({
        name: 'Aaron Tylor-Johnson',
      }),
    ],
    [
      Heros.create({
        name: 'Elizabeth Olsen',
      }),
    ],
    [
      Heros.create({
        name: 'Paul Bettany',
      }),
    ],
    [
      Heros.create({
        name: 'Cobie Smulders',
      }),
    ],
    [
      Heros.create({
        name: 'Athony Mackie',
      }),
    ],
    [
      Heros.create({
        name: 'Hayley Atwell',
      }),
    ],
    [
      Heros.create({
        name: 'Idris Elba',
      }),
    ],
    [
      Heros.create({
        name: 'James Spader',
      }),
    ],
    [
      Heros.create({
        name: 'Benedict Cumberbatch',
      }),
    ],
    [
      Heros.create({
        name: 'Tom Holland',
      }),
    ],
    [
      Heros.create({
        name: 'Chadwick Boseman',
      }),
    ],
    [
      Heros.create({
        name: 'Sebastian Stan',
      }),
    ],
    [
      Heros.create({
        name: 'Peter Dinklage',
      }),
    ],
    [
      Heros.create({
        name: 'Benedict Wong',
      }),
    ],
    [
      Heros.create({
        name: 'Pom Klementieff',
      }),
    ],
    [
      Heros.create({
        name: 'Karen Gillan',
      }),
    ],
    [
      Heros.create({
        name: 'Dave Bautista',
      }),
    ],
    [
      Heros.create({
        name: 'Zoe Saldaña',
      }),
    ],
    [
      Heros.create({
        name: 'Vin Diesel',
      }),
    ],
    [
      Heros.create({
        name: 'Bradley Cooper',
      }),
    ],
    [
      Heros.create({
        name: 'Gwyneth Paltrow',
      }),
    ],
    [
      Heros.create({
        name: 'Benicio del Toro',
      }),
    ],
    [
      Heros.create({
        name: 'Josh Brolin',
      }),
    ],
    [
      Heros.create({
        name: 'Chris Pratt',
      }),
    ],
    [
      Heros.create({
        name: 'Paul Rudd',
      }),
    ],
    [
      Heros.create({
        name: 'Brie Larson',
      }),
    ],
    [
      Heros.create({
        name: 'Danai Gurira',
      }),
    ],
    [
      Heros.create({
        name: 'Jon Favreau',
      }),
    ],
    [
      Casting.create({
        heroId: 1,
        movieId: 1,
      }),
    ],
    [
      Casting.create({
        heroId: 2,
        movieId: 1,
      }),
    ],
    [
      Casting.create({
        heroId: 3,
        movieId: 1,
      }),
    ],
    [
      Casting.create({
        heroId: 4,
        movieId: 1,
      }),
    ],
    [
      Casting.create({
        heroId: 5,
        movieId: 1,
      }),
    ],
    [
      Casting.create({
        heroId: 6,
        movieId: 1,
      }),
    ],
    [
      Casting.create({
        heroId: 7,
        movieId: 1,
      }),
    ],
    [
      Casting.create({
        heroId: 8,
        movieId: 1,
      }),
    ],
    [
      Casting.create({
        heroId: 9,
        movieId: 1,
      }),
    ],
    [
      Casting.create({
        heroId: 10,
        movieId: 1,
      }),
    ],
    [
      Casting.create({
        heroId: 1,
        movieId: 2,
      }),
    ],
    [
      Casting.create({
        heroId: 2,
        movieId: 2,
      }),
    ],
    [
      Casting.create({
        heroId: 3,
        movieId: 2,
      }),
    ],
    [
      Casting.create({
        heroId: 4,
        movieId: 2,
      }),
    ],
    [
      Casting.create({
        heroId: 5,
        movieId: 2,
      }),
    ],
    [
      Casting.create({
        heroId: 6,
        movieId: 2,
      }),
    ],
    [
      Casting.create({
        heroId: 11,
        movieId: 2,
      }),
    ],
    [
      Casting.create({
        heroId: 12,
        movieId: 2,
      }),
    ],
    [
      Casting.create({
        heroId: 13,
        movieId: 2,
      }),
    ],
    [
      Casting.create({
        heroId: 14,
        movieId: 2,
      }),
    ],
    [
      Casting.create({
        heroId: 15,
        movieId: 2,
      }),
    ],
    [
      Casting.create({
        heroId: 16,
        movieId: 2,
      }),
    ],
    [
      Casting.create({
        heroId: 17,
        movieId: 2,
      }),
    ],
    [
      Casting.create({
        heroId: 18,
        movieId: 2,
      }),
    ],
    [
      Casting.create({
        heroId: 19,
        movieId: 2,
      }),
    ],
    [
      Casting.create({
        heroId: 10,
        movieId: 2,
      }),
    ],
    [
      Casting.create({
        heroId: 1,
        movieId: 3,
      }),
    ],
    [
      Casting.create({
        heroId: 2,
        movieId: 3,
      }),
    ],
    [
      Casting.create({
        heroId: 3,
        movieId: 3,
      }),
    ],
    [
      Casting.create({
        heroId: 4,
        movieId: 3,
      }),
    ],
    [
      Casting.create({
        heroId: 5,
        movieId: 3,
      }),
    ],
    [
      Casting.create({
        heroId: 20,
        movieId: 3,
      }),
    ],
    [
      Casting.create({
        heroId: 11,
        movieId: 3,
      }),
    ],
    [
      Casting.create({
        heroId: 21,
        movieId: 3,
      }),
    ],
    [
      Casting.create({
        heroId: 22,
        movieId: 3,
      }),
    ],
    [
      Casting.create({
        heroId: 14,
        movieId: 3,
      }),
    ],
    [
      Casting.create({
        heroId: 13,
        movieId: 3,
      }),
    ],
    [
      Casting.create({
        heroId: 16,
        movieId: 3,
      }),
    ],
    [
      Casting.create({
        heroId: 23,
        movieId: 3,
      }),
    ],
    [
      Casting.create({
        heroId: 7,
        movieId: 3,
      }),
    ],
    [
      Casting.create({
        heroId: 18,
        movieId: 3,
      }),
    ],
    [
      Casting.create({
        heroId: 24,
        movieId: 3,
      }),
    ],
    [
      Casting.create({
        heroId: 25,
        movieId: 3,
      }),
    ],
    [
      Casting.create({
        heroId: 26,
        movieId: 3,
      }),
    ],
    [
      Casting.create({
        heroId: 27,
        movieId: 3,
      }),
    ],
    [
      Casting.create({
        heroId: 28,
        movieId: 3,
      }),
    ],
    [
      Casting.create({
        heroId: 29,
        movieId: 3,
      }),
    ],
    [
      Casting.create({
        heroId: 30,
        movieId: 3,
      }),
    ],
    [
      Casting.create({
        heroId: 31,
        movieId: 3,
      }),
    ],
    [
      Casting.create({
        heroId: 32,
        movieId: 3,
      }),
    ],
    [
      Casting.create({
        heroId: 33,
        movieId: 3,
      }),
    ],
    [
      Casting.create({
        heroId: 34,
        movieId: 3,
      }),
    ],
    [
      Casting.create({
        heroId: 35,
        movieId: 3,
      }),
    ],
    [
      Casting.create({
        heroId: 1,
        movieId: 4,
      }),
    ],
    [
      Casting.create({
        heroId: 2,
        movieId: 4,
      }),
    ],
    [
      Casting.create({
        heroId: 3,
        movieId: 4,
      }),
    ],
    [
      Casting.create({
        heroId: 4,
        movieId: 4,
      }),
    ],
    [
      Casting.create({
        heroId: 5,
        movieId: 4,
      }),
    ],
    [
      Casting.create({
        heroId: 6,
        movieId: 4,
      }),
    ],
    [
      Casting.create({
        heroId: 11,
        movieId: 4,
      }),
    ],
    [
      Casting.create({
        heroId: 36,
        movieId: 4,
      }),
    ],
    [
      Casting.create({
        heroId: 37,
        movieId: 4,
      }),
    ],
    [
      Casting.create({
        heroId: 27,
        movieId: 4,
      }),
    ],
    [
      Casting.create({
        heroId: 38,
        movieId: 4,
      }),
    ],
    [
      Casting.create({
        heroId: 25,
        movieId: 4,
      }),
    ],
    [
      Casting.create({
        heroId: 39,
        movieId: 4,
      }),
    ],
    [
      Casting.create({
        heroId: 31,
        movieId: 4,
      }),
    ],
    [
      Casting.create({
        heroId: 32,
        movieId: 4,
      }),
    ],
    [
      Casting.create({
        heroId: 34,
        movieId: 4,
      }),
    ]
  );
};

module.exports = {
  db,
  Movies,
  Heros,
  Casting,
  syncAndSeed,
};
