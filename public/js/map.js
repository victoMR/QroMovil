var map = L.map("map").setView([0, 0], 5); // Initial view with zero coordinates

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 20
}).addTo(map);

var marker = null;

// Function to update the marker and circle based on address
function updateLocation(lat, lon, address) {
  if (marker) {
    map.removeLayer(marker);
  }

  if (lat !== 0 && lon !== 0) {
    map.setView([lat, lon], 15);
    marker = L.marker([lat, lon])
      .addTo(map)
      .bindPopup(address)
      .openPopup();

    var circle = L.circle([lat, lon], {
      color: "blue",
      fillColor: "blue",
      fillOpacity: 0.8,
      radius: 25, // Radius in meters
    }).addTo(map);
  }
}

// Function to search location based on address input
function searchLocation() {
  const address = document.getElementById("search").value;
  const nominatimUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${address}&limit=1`;

  fetch(nominatimUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0) {
        const lat = parseFloat(data[0].lat);
        const lon = parseFloat(data[0].lon);
        const addressText = data[0].display_name;

        updateLocation(lat, lon, addressText);
      } else {
        alert("No se pudo encontrar la ubicación.");
      }
    })
    .catch((error) => {
      console.error("Error en la solicitud de Nominatim:", error);
    });
}

// Get user's geolocation and center the map on it
navigator.geolocation.getCurrentPosition(
  (position) => {
    const userLat = position.coords.latitude;
    const userLon = position.coords.longitude;
    console.log(userLat, userLon);

    // Reverse geocoding to get user's address
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${userLat}&lon=${userLon}`)
      .then((response) => response.json())
      .then((data) => {
        const addressText = data.display_name;
        updateLocation(userLat, userLon, addressText);
      })
      .catch((error) => {
        console.error("Error en la solicitud de Nominatim:", error);
      });
  },
  (error) => {
    console.error("Error obteniendo la ubicación del usuario:", error);
  }
);
function searchLocation() {
  const address = document.getElementById("search").value;
  const nominatimUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${address}&limit=1`;

  fetch(nominatimUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0) {
        const lat = parseFloat(data[0].lat);
        const lon = parseFloat(data[0].lon);
        const addressText = data[0].display_name;

        updateLocation(lat, lon, addressText);
      } else {
        alert("No se pudo encontrar la ubicación.");
      }
    })
    .catch((error) => {
      console.error("Error en la solicitud de Nominatim:", error);
    });
}

// Get user's geolocation and center the map on it
navigator.geolocation.getCurrentPosition(
  (position) => {
    const userLat = position.coords.latitude;
    const userLon = position.coords.longitude;

    // Reverse geocoding to get user's address
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${userLat}&lon=${userLon}`)
      .then((response) => response.json())
      .then((data) => {
        const addressText = data.display_name;
        updateLocation(userLat, userLon, addressText);
      })
      .catch((error) => {
        console.error("Error en la solicitud de Nominatim:", error);
      });
  },
  (error) => {
    console.error("Error obteniendo la ubicación del usuario:", error);
  }
);