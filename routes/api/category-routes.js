const router = require('express').Router();
const { Category, Product, Tag } = require('../../models');

// The `/api/categories` endpoint


// find all categories
router.get('/', (req, res) => {
  Category.findAll({
    // be sure to include its associated Products
    include: [{model: Product}],
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


// find one category by its `id` value
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    // be sure to include its associated Products
    include: [{model: Product}]
  })
  .then(dbCategoryData => {
    if (!dbCategoryData) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


// create a new category
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name,
    id: req.body.id
  })
  .then(dbCategoryData => {
    if (!dbCategoryData) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.console.log(err);
    res.status(500).json(err);
  });

});


// update a category by its `id` value
router.put('/:id', (req, res) => {
  // expects {category_name: 'belts'}
  Category.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
  .then(dbCategoryData => {
    if (!dbCategoryData[0]) {
      res.status(404).json({ message: 'No category found by that id.'})
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

  // delete a category by its `id` value
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbCategoryData => {
    if (!dbCategoryData){
      res.status(404).json({ message: 'No category by that id.'})
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
