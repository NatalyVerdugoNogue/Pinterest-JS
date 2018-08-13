// var API_KEY = '9790155-f60ce239d82231d53d42a71ad';
// var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent('red roses');
// $.getJSON(URL, function (data) {
//   if (parseInt(data.totalHits) > 0)
//     $.each(data.hits, function (i, hit) { console.log(hit.pageURL); });
//   else
//     console.log('No hits');
// });

window.model = {};


window.onload = () => {
  window.model.getRandomImage();
  window.model.inputSearch();
};

window.model.inputSearch = () => {
  var input = document.getElementById('inputSearch');
  input.addEventListener('keyup', (event) => {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById('btnSearch').click();
    };
  });
};


window.model.getRandomImage = () => {
  return fetch('https://pixabay.com/api/?key=9790155-f60ce239d82231d53d42a71ad&lang=es').then((response) => {
    // si existe respuesta, que me la de en formato json
    if (response.ok) {
      return response.json();
      // si no existe respuesta arroja error
    } else {
      throw new Error('La llamada a la API falló');
    }
    // ahora pedire el dato,si hay dato damelo en la variable respuestaJson
  }).then((respuestaJson) => {
    console.log(respuestaJson);

    return respuestaJson;
    // todo lo que no funcione capturalo como error
  }).catch((err) => {
    console.error(err);
  });
};


window.model.getImagesSearch = () => {
  let searchText = document.getElementById('inputSearch').value;
  let encUri = encodeURIComponent(searchText);
  return fetch('https://pixabay.com/api/?key=9790155-f60ce239d82231d53d42a71ad&q=' + encUri + '&lang=es').then((response) => {
    // si existe respuesta, que me la de en formato json
    if (response.ok) {
      return response.json();
      // si no existe respuesta arroja error
    } else {
      throw new Error('La llamada a la API falló');
    }
    // ahora pedire el dato,si hay dato damelo en la variable respuestaJson
  }).then((respuestaJson) => {
    console.log(respuestaJson);

    return respuestaJson;
    // todo lo que no funcione capturalo como error
  }).catch((err) => {
    console.error(err);
  });
};

