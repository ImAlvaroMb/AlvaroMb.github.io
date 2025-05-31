const projects = [
  {
    title: "Fast And Fractured (2025)",
    description: "A different take on the battle royale genre. A frenetic physics based driving game, shooter battle royale",
    videoSrc: getVideoSrc("FastAndFractured/carmeUnique.mp4"),
    link: "bug-shooter.html",
    team: "6",
    duration: "2 Months",
    tech: "Unity C#",
    role: "Lead Programmer"
  },
  {
    title: "Bömberbots (2022)",
    description: "Bomberman clone made in Lua using the Löve2D framework.",
    videoSrc: "bomberbots.mp4",
    link: "bomberbots.html"
  },
  {
    title: "Fast And Fractured (2025)",
    description: "A different take on the battle royale genre. A frenetic physics based driving game, shooter battle royale",
    videoSrc: getVideoSrc("FastAndFractured/carmeUnique.mp4"),
    link: "bug-shooter.html"
  },
  {
    title: "Fast And Fractured (2025)",
    description: "A different take on the battle royale genre. A frenetic physics based driving game, shooter battle royale",
    videoSrc: getVideoSrc("FastAndFractured/carmeUnique.mp4"),
    link: "bug-shooter.html"
  },
  {
    title: "Fast And Fractured (2025)",
    description: "A different take on the battle royale genre. A frenetic physics based driving game, shooter battle royale",
    videoSrc: getVideoSrc("FastAndFractured/carmeUnique.mp4"),
    link: "bug-shooter.html"
  },
  // Add more projects as needed
];

const projectGrid = document.getElementById("projectGrid");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.onclick = () => (window.location.href = project.link);

  card.innerHTML = `
  <div class="video-container">
    <video src="${project.videoSrc}" autoplay muted loop></video>
    <div class="info-bar">
      <span>👥 ${project.team}</span>
      <span>🕒 ${project.duration}</span>
      <span>💻 ${project.tech}</span>
    </div>
  </div>
  <div class="overlay">
    <h3>${project.title}</h3>
    <p class="role">${project.role}</p>
    <p>${project.description}</p>
  </div>
`;

  projectGrid.appendChild(card);
});


function getVideoSrc(fileName) {
    return `assets/${fileName}`;
}