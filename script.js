document.addEventListener('DOMContentLoaded', function() {
  const registros = [];
  const reservas = [];
  const comidasContainer = document.querySelector('.comidas-container');
  const listaRegistros = document.getElementById('registros');
  const listaReservas = document.getElementById('reservas');
  const registroForm = document.getElementById('registroForm');
  const reservaBtn = document.getElementById('reservaBtn');
  const datosReserva = document.getElementById('datosReserva');

  const comidas = [
    { nombre: 'Silpancho', imagen: 'imgs/silpancho.jpg' },
    { nombre: 'Salteñas', imagen: 'imgs/saltenas.jpg' },
    { nombre: 'Anticuchos', imagen: 'imgs/anticuchos.jpg' },
    { nombre: 'Lomo Saltado', imagen: 'imgs/lomosaltado.jpg' },
    { nombre: 'Majadito', imagen: 'imgs/majadito.jpg' },
    { nombre: 'Pique Macho', imagen: 'imgs/pique.jpg' }
    
  ];

  comidas.forEach(comida => {
    const divComida = document.createElement('div');
    divComida.classList.add('comidas');

    const imgComida = document.createElement('img');
    imgComida.src = comida.imagen;
    imgComida.alt = comida.nombre;
    imgComida.classList.add('comida-img');

    const pComida = document.createElement('p');
    pComida.textContent = comida.nombre;

    divComida.appendChild(imgComida);
    divComida.appendChild(pComida);

    comidasContainer.appendChild(divComida);
  });

  //búsqueda
  document.getElementById('busqueda').addEventListener('input', function() {
    const filtro = this.value.toLowerCase();
    const comidas = document.querySelectorAll('.comidas');

    comidas.forEach(comida => {
      const nombre = comida.querySelector('p').textContent.toLowerCase();
      const coincide = nombre.includes(filtro);

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

    const nombre = this.nombre.value;
    const email = this.email.value;
    const telefono = this.telefono.value;

    const registro = {
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
      const li = document.createElement('li');
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
    const nombre = prompt('Ingresa tu nombre:');
    const email = prompt('Ingresa tu correo electrónico:');
    const telefono = prompt('Ingresa tu número de teléfono:');

    const reserva = {
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
      const li = document.createElement('li');
      li.innerHTML = `
        <p>Nombre: ${reserva.nombre}</p>
        <p>Correo electrónico: ${reserva.email}</p>
        <p>Teléfono: ${reserva.telefono}</p>
      `;
      listaReservas.appendChild(li);
    });
  }
});
