const clips = [
  {
    titulo: "Pentakill épico 🔥",
    imagen: "../img/ml1.jpg",
    link: "https://www.youtube.com/"
  },
  {
    titulo: "Partida rankeada intensa",
    imagen: "../img/ml2.jpg",
    link: "https://www.twitch.tv/"
  },
  {
    titulo: "Final clutch",
    imagen: "../img/ml3.jpg",
    link: "https://www.youtube.com/"
  }
];

const container = document.getElementById("clips-container");

clips.forEach(clip => {
  const card = document.createElement("a");
  card.className = "clip-card";
  card.href = clip.link;
  card.target = "_blank";

  card.innerHTML = `
    <img src="${clip.imagen}" alt="${clip.titulo}">
    <span>${clip.titulo}</span>
  `;

  container.appendChild(card);
});