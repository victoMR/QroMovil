const searchInput = document.getElementById("search");
  const routeList = document.getElementById("routeList");
  const allRoutesList = document.getElementById("allRoutesList");
  
  // Definir tus propias rutas de autobús
  const routes = [
    { "id": 10, "name": "Juncos" },
    { "id": 2, "name": "Azucenas" },
    { "id": 3, "name": "Col. 10 de abril" },
    // Agregar más rutas según sea necesario
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