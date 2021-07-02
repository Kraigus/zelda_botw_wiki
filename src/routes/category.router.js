const { Router } = require('express');
const { renderCategoryPage } = require('../controllers/category.controller');
router = Router();

router.route('/:category').get(renderCategoryPage);

module.exports = { categoryRouter: router };
