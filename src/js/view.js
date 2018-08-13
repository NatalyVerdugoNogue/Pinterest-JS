window.view = {};

window.view.card = (oImg) => {
  let oImgHits = oImg.hits;
  let htmlCard = '';

  for (let i = 0; i < oImgHits.length; i++) {

    htmlCard = htmlCard +
      `<div class="card">
      <img class="card-img p-sm-2 p-0" src="${oImgHits[i].largeImageURL}" alt="Card image">
      <div class="card-body p-1">
        <div class="row m-0">
          <div class="col-sm-1 col-2 p-0 pl-2">
            <i class="fas fa-tag text-tag"></i>
          </div>
          <div class="col-sm-10 col-8 p-0 pl-sm-1 pt-2 pt-sm-0">
            <p class="card-text">${oImgHits[i].tags.split(',')[0]}</p>
          </div>
          <div class="col-1 p-0 pr-2">
            <i class="fas fa-ellipsis-h text-card text-righ"></i>
          </div>
        </div>
      </div>
    </div>`;
  }
  let divCardImg = document.getElementById('cardImg');
  divCardImg.innerHTML = htmlCard;
};