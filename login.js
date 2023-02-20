const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const usernameInput = document.getElementById('username-input');
  const passwordInput = document.getElementById('password-input');
  
  const username = usernameInput.value;
  const password = passwordInput.value;

  Swal.fire({
    title: 'Iniciando sesión...',
    allowEscapeKey: false,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });

  axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then((response) => {
      const pokemonList = response.data.results;
      const foundPokemon = pokemonList.find(pokemon => pokemon.name === username);
      if (foundPokemon && password === '123') {
        Swal.fire({
          icon: 'success',
          title: '¡Inicio de sesión exitoso!',
          showConfirmButton: false,
          timer: 1500
        });
        setTimeout(() => {
          window.location.href = 'main.html';
        }, 1500);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Usuario o contraseña incorrectos',
          text: 'Psst.. Prueba con un pokemon y 123 ;)',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Ok'
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });
});
