document.addEventListener("DOMContentLoaded", () => {
    let moviesData = [];
  
    // Función para obtener datos de películas
    fetch('https://japceibal.github.io/japflix_api/movies-data.json')
      .then(response => response.json())
      .then(data => {
        moviesData = data;
        console.log("Datos de películas cargados:", moviesData); // Solo para depuración
      })
      .catch(error => console.error('Error al cargar los datos:', error));
  
    // Función para generar estrellas basadas en la calificación
    function generateStars(vote_average) {
      const stars = Math.round(vote_average / 2); // Calificaciones sobre 5 estrellas
      let starHtml = '';
      for (let i = 1; i <= 5; i++) {
        if (i <= stars) {
          starHtml += '<span class="fa fa-star checked"></span>';
        } else {
          starHtml += '<span class="fa fa-star"></span>';
        }
      }
      return starHtml;
    }
  
    // Estilo de las estrellas doradas
    const style = document.createElement('style');
    style.textContent = `.checked { color: gold; }`;
    document.head.appendChild(style);
  
    // evento de búsqueda
    document.getElementById('btnBuscar').addEventListener('click', () => {
      const searchValue = document.getElementById('inputBuscar').value.toLowerCase();
      const filteredMovies = moviesData.filter(movie => movie.title.toLowerCase().includes(searchValue));
  
      const lista = document.getElementById('lista');
      lista.innerHTML = ''; // Limpiar la lista antes de agregar nuevos elementos
  
      if (filteredMovies.length === 0) {
        lista.innerHTML = '<li class="list-group-item text-center">No se encontraron resultados</li>';
      } else {
        filteredMovies.forEach(movie => {
          const movieItem = document.createElement('li');
          movieItem.classList.add('list-group-item', 'bg-dark', 'text-white', 'border-light');
  
          // Creando el contenido
        })}  })});