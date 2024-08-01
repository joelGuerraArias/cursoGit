// Array de cursos
const cursos = [
    {
      titulo: "JavaScript desde Cero",
      descripcion: "Aprende JavaScript desde los fundamentos hasta conceptos avanzados.",
      fecha: "Ene 2020",
      duracion: "5 horas",
      nivel: "Básico",
      rating: "4.5",
      imagen: "https://edteam-media.s3.amazonaws.com/courses/big/0ad71cb0-8168-4c41-bbb7-07d48d3a358b.png"
    },
    {
      titulo: "HTML y CSS para Principiantes",
      descripcion: "Domina la creación de páginas web con HTML y CSS.",
      fecha: "Feb 2020",
      duracion: "6 horas",
      nivel: "Básico",
      rating: "4.6",
      imagen: "https://edteam-media.s3.amazonaws.com/courses/big/efd02050-68b5-44b2-b170-b351005b84a8.png"
    },
    {
      titulo: "ReactJS: Construye Aplicaciones Web",
      descripcion: "Aprende a desarrollar aplicaciones web modernas con ReactJS.",
      fecha: "Mar 2020",
      duracion: "8 horas",
      nivel: "Intermedio",
      rating: "4.7",
      imagen: "https://edteam-media.s3.amazonaws.com/courses/big/e0ec088b-2473-4d40-b6f9-8b639a293e54.png"
    },
    {
      titulo: "Node.js: Desarrollo Backend",
      descripcion: "Desarrolla aplicaciones del lado del servidor con Node.js.",
      fecha: "Abr 2020",
      duracion: "7 horas",
      nivel: "Intermedio",
      rating: "4.8",
      imagen: "https://example.com/node-course.jpg"
    },
    {
      titulo: "Introducción a la Programación en Python",
      descripcion: "Comienza tu camino en la programación con Python.",
      fecha: "May 2020",
      duracion: "4 horas",
      nivel: "Básico",
      rating: "4.9",
      imagen: "https://example.com/python-course.jpg"
    }
  ];
  
  // Función para crear las tarjetas de curso
  function crearTarjetasDeCursos() {
    const container = document.getElementById('courses-container');
  
    cursos.forEach(curso => {
      const card = document.createElement('div');
      card.classList.add('card');
  
      card.innerHTML = `
        <img src="${curso.imagen}" alt="${curso.titulo}">
        <div class="card-content">
          <h3>${curso.titulo}</h3>
          <p>${curso.descripcion}</p>
        </div>
        <div class="card-footer">
          <span>${curso.fecha} · ${curso.duracion} · ${curso.nivel} · ${curso.rating} ★</span>
          <a href="#">Ver curso</a>
        </div>
      `;
  
      container.appendChild(card);
    });
  }
  
  // Llamar a la función para crear las tarjetas de curso cuando la página se cargue
  window.onload = crearTarjetasDeCursos;
  