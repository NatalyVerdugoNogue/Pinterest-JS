window.controller = {};


window.onload = () => {
  window.controller.firstScreen();
  window.model.inputSearch();
  window.view.modal();
};


window.controller.firstScreen = () => {
  window.model.getRandomImage().then((cardImgRandom) => {
    window.view.card(cardImgRandom)
  });
};

window.controller.searchScreen = () => {
  window.model.getImagesSearch().then((cardImgSearch) => {
    window.view.card(cardImgSearch)
  });
};
