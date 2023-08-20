const searchInput = document.getElementById("search");
  const routeList = document.getElementById("routeList");
  const allRoutesList = document.getElementById("allRoutesList");
  
  // Definir tus propias rutas de autobús
  const routes = [
    { "id": "juncos", "name": "Juncos" },
    { "id": "azucenas", "name": "Azucenas" },
    { "id": "col_2010_20de_20abril", "name": "Col 10 de abril" },
    { "id": 4, "name": "Las Flores" },
    { "id": 5, "name": "Bosque Real" },
    { "id": 6, "name": "Valle Verde" },
    { "id": 7, "name": "El Roble" },
    { "id": 8, "name": "Rinconada" },
    { "id": 9, "name": "Santa Lucía" },
    { "id": 11, "name": "Monte Bello" },
    { "id": 12, "name": "Los Pinos" },
    { "id": 13, "name": "Prado Norte" },
    { "id": 14, "name": "San Ángel" },
    // You can add more routes as needed
];

  
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  routeList.innerHTML = "";

  if (searchTerm.length === 0) {
      return;
  }

  const filteredRoutes = routes.filter(route => route.name.toLowerCase().includes(searchTerm));

  filteredRoutes.forEach(route => {
      const button = document.createElement("button");
      button.textContent = route.name;
      button.classList.add("list-group-item", "route-button");
      button.addEventListener("click", () => {
          redirectToRoute(route.id); // Llamada a función para redirigir al usuario
      });
      routeList.appendChild(button);
  });
});

routes.forEach(route => {
  const button = document.createElement("button");
  button.textContent = route.name;
  button.classList.add("list-group-item", "route-button");
  button.addEventListener("click", () => {
      redirectToRoute(route.id); // Llamada a función para redirigir al usuario
  });
  allRoutesList.appendChild(button);
});

function redirectToRoute(routeID) {
  // Aquí debes realizar la redirección del usuario utilizando la información del routeId
  // Por ejemplo, puedes utilizar window.location.href o fetch para redirigir a través del servidor
  window.location.href = '/' + encodeURIComponent(routeID);
  console.log("Redirigiendo al usuario a la ruta con Nombre:", routeID);
}