// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category'
});

// Products belongToMany Tags (through ProductTag)
Products.belongToMany(Tag, {
  foreignKey: 'ProductTag'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongToMany(Product, {
  foreignKey: 'ProductTag'
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
