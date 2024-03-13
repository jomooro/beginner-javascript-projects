document.addEventListener("DOMContentLoaded", () => {
  const chargeLevel = document.getElementById("charge-level");
  const charge = document.getElementById("charge");
  const chargingTimeRef = document.getElementById("charging-time");

  function updateBatteryStatus() {
    navigator.getBattery().then(battery => {
      // Update charge level
      chargeLevel.textContent = `${Math.floor(battery.level * 100)}%`;

      // Update charge indicator
      charge.style.width = `${battery.level * 100}%`;

      // Update charging time
      if (battery.charging) {
        chargingTimeRef.textContent = `Charging`;
      } else {
        chargingTimeRef.textContent = "Not currently charging";
      }
    });
  }

  function updateChargingInfo() {
    if (battery.charging) {
      charge.classList.add("active");
      chargingTimeRef.innerText = "";
    } else {
      charge.classList.remove("active");
    }
  }

  // Check battery status initially
  updateBatteryStatus();

  // Listen for changes in battery status
  navigator.getBattery().then(battery => {
    battery.addEventListener("chargingchange", () => {
      updateBatteryStatus();
      updateChargingInfo(); 
    });
    battery.addEventListener("levelchange", updateBatteryStatus);
  });
});
