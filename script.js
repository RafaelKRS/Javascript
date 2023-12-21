document.addEventListener('DOMContentLoaded', function() {
  let registros = [];
  let reservas = [];
  let comidasContainer = document.querySelector('.comidas-container');
  let listaRegistros = document.getElementById('registros');
  let listaReservas = document.getElementById('reservas');
  let registroForm = document.getElementById('registroForm');
  let reservaBtn = document.getElementById('reservaBtn');
  let datosReserva = document.getElementById('datosReserva');

  let comidas = [
    { nombre: 'Silpancho', imagen: 'imgs/silpancho.jpg' },
    { nombre: 'Salteñas', imagen: 'imgs/saltenas.jpg' },
    { nombre: 'Anticuchos', imagen: 'imgs/anticuchos.jpg' },
    { nombre: 'Lomo Saltado', imagen: 'imgs/lomosaltado.jpg' },
    { nombre: 'Majadito', imagen: 'imgs/majadito.jpg' },
    { nombre: 'Pique Macho', imagen: 'imgs/pique.jpg' }
    
  ];

  comidas.forEach(comida => {
    let divComida = document.createElement('div');
    divComida.classList.add('comidas');

    let imgComida = document.createElement('img');
    imgComida.src = comida.imagen;
    imgComida.alt = comida.nombre;
    imgComida.classList.add('comida-img');

    let pComida = document.createElement('p');
    pComida.textContent = comida.nombre;

    divComida.appendChild(imgComida);
    divComida.appendChild(pComida);

    comidasContainer.appendChild(divComida);
  });

  //búsqueda
  document.getElementById('busqueda').addEventListener('input', function() {
    let filtro = this.value.toLowerCase();
    let comidas = document.querySelectorAll('.comidas');

    comidas.forEach(comida => {
      let nombre = comida.querySelector('p').textContent.toLowerCase();
      let coincide = nombre.includes(filtro);

      if (coincide) {
        comida.style.display = 'block';
      } else {
        comida.style.display = 'none';
      }
    });
  });

  //registro
  registroForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let nombre = this.nombre.value;
    let email = this.email.value;
    let telefono = this.telefono.value;

    let registro = {
      nombre,
      email,
      telefono
    };

    registros.push(registro);
    mostrarRegistros();
    this.reset();
  });

  function mostrarRegistros() {
    listaRegistros.innerHTML = '';
    registros.forEach(registro => {
      let li = document.createElement('li');
      li.innerHTML = `
        <p>Nombre: ${registro.nombre}</p>
        <p>Correo electrónico: ${registro.email}</p>
        <p>Teléfono: ${registro.telefono}</p>
      `;
      listaRegistros.appendChild(li);
    });
  }

  //reserva
  reservaBtn.addEventListener('click', function() {
    let nombre = prompt('Ingresa tu nombre:');
    let email = prompt('Ingresa tu correo electrónico:');
    let telefono = prompt('Ingresa tu número de teléfono:');

    let reserva = {
      nombre,
      email,
      telefono
    };

    reservas.push(reserva);
    mostrarReservas();
  });

  function mostrarReservas() {
    listaReservas.innerHTML = '';
    reservas.forEach(reserva => {
      let li = document.createElement('li');
      li.innerHTML = `
        <p>Nombre: ${reserva.nombre}</p>
        <p>Correo electrónico: ${reserva.email}</p>
        <p>Teléfono: ${reserva.telefono}</p>
      `;
      listaReservas.appendChild(li);
    });
  }
});
