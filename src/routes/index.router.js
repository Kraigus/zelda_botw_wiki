const { Router } = require('express');
const { renderIndexPage } = require('../controllers/index.controller');
const fetch = require('node-fetch');
router = Router();

router.route('/').get(renderIndexPage);
router.route('/post/view').post(async (req, res) => {
  try {
    console.log(req.body.name);
    const response = await fetch(
      `https://botw-compendium.herokuapp.com/api/v2/entry/${req.body.name}`
    );
    const answer = await response.json();
    console.log(answer);
    if (answer.message === 'no results') {
      res.redirect('/');
    } else {
      res.render('profile', { allEntries: answer });
    }
  } catch (error) {
    res.redirect('/');
  }
});

router.route('/post/:id').get(async (req, res) => {
  try {
    const response = await fetch(
      `https://botw-compendium.herokuapp.com/api/v2/entry/${req.params.id}`
    );
    const answer = await response.json();
    console.log(answer);
    if (answer.message === 'no results') {
      res.redirect('/');
    } else {
      res.render('profile', { allEntries: answer });
    }
  } catch (error) {
    res.redirect('/');
  }
});

module.exports = { indexRouter: router };
