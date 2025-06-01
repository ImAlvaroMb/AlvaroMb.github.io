const projects = [
  {
    title: "Fast And Fractured (2025)",
    description: "A different take on the battle royale genre. A frenetic physics based driving game, shooter battle royale",
    videoSrc: getVideoSrc("FastAndFractured/carmeUnique.mp4"),
    link: "FastAndFractured.html",
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

const projectDetail = document.getElementById("projectDetail");
let animDelay = 0;
projects.forEach(project => {
  setTimeout(() => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.onclick = () => showProjectDetail(project)

    let infoBarHTML = generateInfoBar(project)

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
    card.classList.add("animate-in");
    projectGrid.appendChild(card);
  }, animDelay);
  animDelay += 150;
});

function generateInfoBar(project) {
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

function showProjectDetail(project) {
  projectGrid.classList.add("animate-out");

  // Wait for the animation to finish
  setTimeout(() => {
    projectGrid.classList.add("hidden");
    projectGrid.classList.remove("animate-out");

    // Load detail content
    projectDetail.innerHTML = `
      <button id="backBtn">← Back</button>
      <h2>${project.title}</h2>
      <video src="${project.videoSrc}" autoplay muted loop style="width: 100%; max-width: 600px; margin: 1rem 0;"></video>
      <p><strong>Role:</strong> ${project.role || "N/A"}</p>
      <p><strong>Description:</strong> ${project.description}</p>
      <p><strong>Duration:</strong> ${project.duration}</p>
      <p><strong>Team:</strong> ${project.team}</p>
      <p><strong>Tech:</strong> ${project.tech}</p>
    `;

    // Show detail panel with animation
    projectDetail.classList.remove("hidden");
    projectDetail.classList.add("animate-in");

    document.getElementById("backBtn").onclick = backToGrid;
  }, 600);
}

function backToGrid() {
  projectDetail.classList.add("animate-out");

  setTimeout(() => {
    projectDetail.classList.add("hidden");
    projectDetail.classList.remove("animate-out");
    projectGrid.classList.remove("hidden");
    projectGrid.classList.add("animate-in");

    // Clean up
    setTimeout(() => {
      projectGrid.classList.remove("animate-in");
      projectDetail.innerHTML = "";
    }, 600);
  }, 600);
}