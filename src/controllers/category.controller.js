const fetch = require('node-fetch');

const renderCategoryPage = async (req, res) => {
  const mainUrl = `https://botw-compendium.herokuapp.com/api/v2/category/${req.params.category}`;
  console.log(mainUrl);
  let response = await fetch(mainUrl);
  const fromServer = await response.json();
  if (req.params.category !== 'creatures') {
    const allEntries = fromServer.data.sort((a, b) =>
      a.name > b.name ? 1 : -1
    );
    console.log(allEntries);
    res.render('category', { allEntries: allEntries });
  } else {
    const allEntries = fromServer.data.food
      .concat(fromServer.data.non_food)
      .sort((a, b) => (a.name > b.name ? 1 : -1));

    res.render('category', {
      allEntries: allEntries,
    });
  }
};

module.exports = { renderCategoryPage };
