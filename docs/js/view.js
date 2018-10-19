window.view = {};

window.view.card = (oImg) => {
  let oImgHits = oImg.hits;
  let htmlCard = '';

  for (let i = 0; i < oImgHits.length; i++) {

    htmlCard = htmlCard +
      `<div class="card">
      <button type="button" class="btn-img" data-toggle="modal" data-target="#basicModal""
        onclick="window.view.modalImg('${oImgHits[i].webformatURL}','${oImgHits[i].user}')">
        <img class="card-img p-sm-2 p-0" src="${oImgHits[i].webformatURL}" alt="Card image">
      </button>
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
          <div class="modal-header text-center">
            <h5 class="modal-title" id="exampleModalLongTitle">Crear Pin</h5>
            <button type="button" class="close btn-gen py-2 px-3" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body"><div class="container-fluid">
            <div class="row px-5">
              <div class="col-5 modal-img">
                <div class="row px-5">
                  <div class="col-12 pdi-camera text-center">
                    <i class="fas fa-camera camera"></i>
                  </div>
                  <div class="col-12 text-center p-3">
                    <span class="modal-text-camera">Arrastra y suelta, o haz clic para cargar</span>
                  </div>
                </div>
              </div>
              <div class="col-7 py-4 pl-5 pr-0">
                <div class="row">
                  <div class="col-12 pb-1">
                    <span class="">Sitio web</span>
                    </div>
                  <div class="col-12">
                    <input type="text" placeholder="Añade la URL con la que enlaza este Pin" class="modal-input pl-2">
                  </div>
                  <div class="col-12 pt-3 pb-1">
                    <span class="">Descripción</span>
                    </div>
                  <div class="col-12">
                    <textarea name="" class="modal-textarea pl-2" placeholder="Di algo más sobre este Pin"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div class="modal-footer">
            <div class="container-fluid">
              <div class="row">
                <div class="col-auto p-0 border-btn-l">
                  <button type="button" class="btn btn-sec1">Cargar Pin</button>
                </div>
                <div class="col-auto p-0 border-btn-r">
                  <button type="button" class="btn btn-sec2">Guardar desde el sitio</button>
                </div>
                <div class="col-auto ml-auto">
                  <button type="button" class="btn btn-sec2 listo" data-dismiss="modal">Listo</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
};


window.view.modalImg = (image, user) => {
  let divModalMore = document.getElementById('modalMore');
  divModalMore.innerHTML =
    `<div class="modal fade" id="basicModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row">
                <div class="col-auto">
                  <div class="col-auto btn-gen py-sm-2 px-sm-3 py-0 px-2">
                    <i class="fas fa-ellipsis-h colorIcon pt-1 mt-1"></i>
                  </div>
                </div>
                <div class="col-auto ml-auto">
                  <button type="button" class="btn btn-secondary a-url">
                    <i class="fas fa-upload"></i>
                    Enviar
                  </button>
                </div>
                <div class="col-auto">
                  <button type="button" class="btn btn-danger">
                    <i class="fas fa-thumbtack"></i>
                    Guardar
                  </button>
                </div>
              </div>
              <div class="row pt-3">
                <div class="col-6 px-5">
                  <img class="size-img" src="${image}" alt="Card image">
                </div>
                <div class="col-6 px-5 pt-3">
                  <div class="row">
                    <div class="col-12 btn-url text-center py-1 mb-2">
                    <a href="${image}" class="a-url">
                    <i class="fas fa-share"></i>
                    URL</a>
                    </div>
                    <div class="col-12 py-4 line">
                      <div class="row">
                        <div class="col-auto">
                        <span class="text-com">Comentarios</span>
                        </div>
                        <div class="col-auto ml-auto">
                          <div class="col-auto btn-gen py-sm-2 px-sm-3 py-0 px-2">
                            <i class="fas fa-chevron-down text-com-i"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 pt-2 line">
                    <span class="text-user">${user}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
};