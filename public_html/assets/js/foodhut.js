/*!
=========================================================
* FoodHut Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

new WOW().init();

function initMap() {
    var uluru = {lat: 37.227837, lng: -95.700513};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
 }
 let salidaVar= document.getElementById("salida")
 let parrafo1 = document.createElement("p")
 let parrafo2 = document.createElement("p")
 let todo=""
 function promptMe(){
    var userAdjective = window.prompt("Por favor ingrese su mail");
    alert (userAdjective);
    var userAdjective1 = prompt("Por favor ingrese el numero de invitados");
    alert (userAdjective1);
    var userAdjective2 = prompt("Por favor ingrese la fecha de la reserva");
    alert (userAdjective2);
    var userAdjective3 = prompt("Por favor ingrese el horario de la reservacion");
    alert (userAdjective3);

    
    todo=todo+"\nReserva a nombres: "+userAdjective+" con "+userAdjective1+' invitados, en la fecha '+userAdjective2+' a horas '+userAdjective3
    // todo = `${todo}Reserva 

    //                 nombre`

    /*parrafo1.textContent="Reserva"
    parrafo2.textContent="nombre"
    
    salidaVar.appendChild(parrafo1)
    salidaVar.appendChild(parrafo2)*/
    window.confirm(todo)

    salidaVar.textContent= todo

}

function promptMe1(){
    salidaVar.textContent=""
    todo=""
}
