const alertsContainer = document.getElementById("alerts");

const sampleAlerts = [
  { type: "Flood", icon: "fas fa-water", location: "Mumbai, India", color: "#d32f2f" },
  { type: "Earthquake", icon: "fas fa-house-damage", location: "Tokyo, Japan", color: "#d32f2f" },
  { type: "Wildfire", icon: "fas fa-fire", location: "California, USA", color: "#d32f2f" },
  { type: "Tornado", icon: "fas fa-wind", location: "Oklahoma, USA", color: "#d32f2f" },
  { type: "Cyclone", icon: "fas fa-cloud-showers-heavy", location: "Chennai, India", color: "#d32f2f" }
];

function getRandomAlert() {
  const alert = sampleAlerts[Math.floor(Math.random() * sampleAlerts.length)];
  return {
    ...alert,
    time: new Date().toLocaleString()
  };
}

function showAlert(alert) {
  const div = document.createElement("div");
  div.className = "alert-card";
  div.innerHTML = `
    <i class="${alert.icon}" style="color: ${alert.color};"></i>
    <div class="alert-info">
      <div class="alert-type">${alert.type} Alert</div>
      <div class="alert-location">📍 ${alert.location}</div>
      <div class="timestamp">⏰ ${alert.time}</div>
    </div>
  `;
  alertsContainer.prepend(div);
}

function simulateAlerts() {
  const newAlert = getRandomAlert();
  showAlert(newAlert);
}

// Load one alert on page load
simulateAlerts();

// Add a new alert every 8 seconds
setInterval(simulateAlerts, 8000);
