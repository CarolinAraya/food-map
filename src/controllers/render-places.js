 /* get places */

 function getInfoPlacesAndPrint(place) {
    var id = place.place_id;
    var name = place.name;
    var address = place.vicinity;
    var photo = place.photos
                    ? place.photos[0].getUrl({'maxWidth': 350, 'maxHeight': 350})
                    : "./assets/img/restaurant-icon.jpg";

    var modals = document.getElementById("modals");
    var images = document.getElementById("images");

    images.innerHTML += `<div id="restaurant" class="photos modal-trigger" href="#modal${id}">
        <img src='${photo}'></img>
    </div>`;

    modals.innerHTML += `<div id="modal${id}" class="modal">
        <div class="modal-content">
            <h4>${name}</h4><p>${address}</p>
        </div>
        <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
    </div>`;

    $('.modal').modal();
}