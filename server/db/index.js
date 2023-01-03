const Sequelize = require('sequelize');
const { STRING } = Sequelize;
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost/jungle'
);

const commonAttr = {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
};

const Users = db.define('users', {
  ...commonAttr,
  name: {
    type: STRING,
  },
});

const Categories = db.define('categories', {
  name: {
    type: STRING,
  },
});

const Items = db.define('items', {
  name: {
    type: STRING,
  },
});

const Cart = db.define('cart');

Items.belongsTo(Categories);
Categories.hasMany(Items);
Cart.belongsTo(Items);
Cart.belongsTo(Users);
Cart.hasMany(Items);
Cart.hasMany(Users);

const syncAndSeed = async () => {
  const [
    steve,
    tony,
    jennifer,
    groceries,
    toys,
    apple,
    banana,
    hammer,
    shield,
  ] = await Promise.all([
    Users.create({
      name: 'Steve',
    }),

    Users.create({
      name: 'Tony',
    }),
    Users.create({
      name: 'Jennifer',
    }),

    Categories.create({
      name: 'Groceries',
    }),

    Categories.create({
      name: 'Toys',
    }),
    Items.create({
      name: 'apple',
    }),
    Items.create({
      name: 'banana',
    }),
    Items.create({
      name: 'hammer',
    }),
    Items.create({
      name: 'shield',
    }),
  ]);

  apple.categoryId = groceries.id;
  banana.categoryId = groceries.id;
  shield.categoryId = toys.id;
  hammer.categoryId = toys.id;

  await Promise.all([
    apple.save(),
    shield.save(),
    hammer.save(),
    banana.save(),
  ]);

  await Promise.all([
    Cart.create({
      userId: steve.id,
      itemId: shield.id,
    }),
    Cart.create({
      userId: steve.id,
      itemId: apple.id,
    }),
    Cart.create({
      userId: tony.id,
      itemId: hammer.id,
    }),
  ]);
};

module.exports = {
  db,
  Users,
  Categories,
  Items,
  Cart,
  syncAndSeed,
};
