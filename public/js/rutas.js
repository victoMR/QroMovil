const searchInput = document.getElementById("search");
  const routeList = document.getElementById("routeList");
  const allRoutesList = document.getElementById("allRoutesList");
  
  // Definir tus propias rutas de autobús
  const routes = [
    { "id": 10, "name": "Juncos" },
    { "id": 2, "name": "Azucenas" },
    { "id": 3, "name": "Col. 10 de abril" },
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
      return; // No mostrar sugerencias si no hay texto en la búsqueda
    }
  
    const filteredRoutes = routes.filter(route => route.name.toLowerCase().includes(searchTerm));
  
    filteredRoutes.forEach(route => {
      const li = document.createElement("li");
      li.textContent = route.name;
      li.classList.add("list-group-item");
      routeList.appendChild(li);
    });
  });
  
  // Mostrar todas las rutas disponibles
  routes.forEach(route => {
    const li = document.createElement("li");
    li.textContent = route.name;
    li.classList.add("list-group-item");
    allRoutesList.appendChild(li);
  });