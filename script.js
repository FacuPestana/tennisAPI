let apiKey = 'siMvzuSP0NkMW22QSs2zlgo1wlXs1FDOb6ZVOzkp';
let rankingList = document.getElementById('ranking');
let rankingUrl = `https://api.api-tennis.com/tennis/?method=get_rankings&APIkey=${apiKey}&rank_type=ATP`;

fetch(rankingUrl)
  .then(response => response.json())
  .then(data => {
    let rankings = data.rankings || [];
    rankingList.innerHTML = '';
    rankings.slice(0, 10).forEach(player => {
      const listItem = document.createElement('li');
      listItem.textContent = `${player.rank}. ${player.player_name} - Puntos: ${player.points}`;
      rankingList.appendChild(listItem);
    });
  })
  .catch(error => console.error('Error al obtener los rankings:', error));


let eventsUrl = `https://api.api-tennis.com/tennis/?method=get_events&APIkey=${apiKey}`;

fetch(eventsUrl)
  .then(response => response.json())
  .then(data => {
    let events = data.events || [];
    let eventsList = document.getElementById('events');
    eventsList.innerHTML = '';
    events.forEach(event => {
      const eventItem = document.createElement('li');
      eventItem.textContent = `${event.name} - Fecha: ${event.date}`;
      eventsList.appendChild(eventItem);
    });
  })
  .catch(error => console.error('Error al obtener los eventos:', error));
