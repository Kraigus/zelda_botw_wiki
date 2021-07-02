const { response } = require('express');
const hyrule_compendium = require('hyrule-compendium');
const fetch = require('node-fetch');
let comp = new hyrule_compendium.compendium();

const renderIndexPage = async (req, res) => {
  const mainUrl = `https://botw-compendium.herokuapp.com/api/v2`;
  let response = await fetch(mainUrl);
  const allEntries = await response.json();
  const allCards = allEntries.data.creatures.food.concat(
    allEntries.data.creatures.non_food.concat(
      allEntries.data.equipment.concat(
        allEntries.data.monsters.concat(
          allEntries.data.materials.concat(allEntries.data.treasure)
        )
      )
    )
  );
  res.render('index', { allEntries: allCards.sort((a, b) => a.id - b.id) });
};

module.exports = { renderIndexPage };
