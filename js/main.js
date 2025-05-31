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
    title: "Fast And Fractured (2025)",
    description: "A different take on the battle royale genre. A frenetic physics based driving game, shooter battle royale",
    videoSrc: getVideoSrc("FastAndFractured/carmeUnique.mp4"),
    link: "bug-shooter.html",
    team: "6",
    duration: "2 Months",
    tech: "Unity C#",
    role: "Lead Programmer"
  }
  
];

const projectGrid = document.getElementById("projectGrid");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.onclick = () => (window.location.href = project.link);

    let infoBarHTML = GenerateInfoBar(project)

  card.innerHTML = `
  <div class="video-container">
    <video src="${project.videoSrc}" autoplay muted loop></video>
    ${infoBarHTML}
  </div>
  <div class="overlay">
    <h3>${project.title}</h3>
    <p class="role">${project.role}</p>
    <p>${project.description}</p>
  </div>
`;

  projectGrid.appendChild(card);
});

function GenerateInfoBar(project) {
    let infoBarHTML = `<div class="info-bar">`;

  if (project.team) {
    infoBarHTML += `
      <div class="info-item">
        <img src="assets/Icons/teamIcon.png" alt="Team" class="icon" />
        <span>${project.team}</span>
      </div>`;
  }

  if (project.duration) {
    infoBarHTML += `
      <div class="info-item">
        <img src="assets/Icons/timeIcon.png" alt="Duration" class="icon" />
        <span>${project.duration}</span>
      </div>`;
  }

  if (project.tech) {
    infoBarHTML += `
      <div class="info-item">
        <img src="assets/Icons/softwareIcon.png" alt="Tech" class="icon" />
        <span>${project.tech}</span>
      </div>`;
  }

  infoBarHTML += `</div>`; // Close info-bar

  return infoBarHTML;
}

function getVideoSrc(fileName) {
    return `assets/${fileName}`;
}