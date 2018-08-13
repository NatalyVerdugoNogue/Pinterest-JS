window.view = {};

window.view.card = (oImg) => {
  let oImgHits = oImg.hits;
  let htmlCard = '';

  for (let i = 0; i < oImgHits.length; i++) {

    htmlCard = htmlCard +
      `<div class="card">
      <img class="card-img p-sm-2 p-0" src="${oImgHits[i].webformatURL}" alt="Card image">
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


window.view.modal = () => {
  let divModalMore = document.getElementById('modalMore');
  divModalMore.innerHTML =
    `<div class="modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>`;
};