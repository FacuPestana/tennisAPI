let apiKey = 'siMvzuSP0NkMW22QSs2zlgo1wlXs1FDOb6ZVOzkp';
let rankingList = document.getElementById('ranking');

// URL con parámetro rank_type=ATP
let url = `https://api.api-tennis.com/tennis/?method=get_rankings&APIkey=${apiKey}&rank_type=ATP`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error("Error en la respuesta de la API: " + response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log("Datos de la API:", data); // Esto te permite ver exactamente qué devuelve

    if (data.success === 1 && data.result && data.result.length > 0) {
      let atpRanking = data.result[0].players;

      // Creamos elementos <li> para cada jugador y los agregamos al <ul>
      atpRanking.slice(0, 10).forEach(player => {
        let li = document.createElement("li");
        li.textContent = `${player.ranking}. ${player.player} (${player.country_code})`;
        rankingList.appendChild(li);
      });
    } else {
      // No agregamos nada si no hay datos, pero la API falló
      let li = document.createElement("li");
      li.textContent = "La API no devolvió datos.";
      rankingList.appendChild(li);
    }
  })
  .catch(error => {
    console.error("Hubo un problema con la petición:", error);
    let li = document.createElement("li");
    li.textContent = "Error al conectar con la API.";
    rankingList.appendChild(li);
  });
