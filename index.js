// Heart functionality
let heartCount = 0;
const heartCounter = document.getElementById("heart-counter");
const heartButtons = document.querySelectorAll(".emergency-card .fa-heart");

heartButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    heartCount++;
    heartCounter.textContent = heartCount;
    btn.classList.remove("fa-regular");
    btn.classList.add("fa-solid", "text-red-500");
  });
});
// Coins & Call functionality
let coins = 100;
const coinCounter = document.getElementById("coin-counter");
const callHistoryContainer = document.querySelector("aside");
const callButtons = document.querySelectorAll(".emergency-card button");

callButtons.forEach((btn) => {
  // Call button
  if (btn.querySelector(".fa-phone")) {
    btn.addEventListener("click", () => {
      const card = btn.closest(".emergency-card");
      const serviceName = card.querySelector("h1.text-md").textContent;
      const serviceNumber = card.querySelector("h1.text-xl").textContent;

      if (coins < 20) {
        alert("আপনার কাছে পর্যাপ্ত কয়েন নেই (কমপক্ষে 20 প্রয়োজন)");
        return;
      }
      coins -= 20;
      coinCounter.textContent = coins;
      alert(`Calling ${serviceName} at ${serviceNumber}...`);
      addCallHistory(serviceName, serviceNumber);
    });
  }
  // Copy button
  if (btn.querySelector(".fa-copy")) {
    btn.addEventListener("click", () => {
      const card = btn.closest(".emergency-card");
      const number = card.querySelector("h1.text-xl").textContent;

      navigator.clipboard.writeText(number).then(() => {
        coins++;
        coinCounter.textContent = coins;
        alert(`Copied: ${number}`);
      });
    });
  }
});
// Add call history
function addCallHistory(name, number) {
  const list = document.createElement("div");
  list.className = "flex justify-between items-center bg-[#FAFAFA] p-2 mt-3 rounded";
  const now = new Date();
  const time = now.toLocaleTimeString();
  list.innerHTML = `
    <div>
      <h2 class="font-bold">${name}</h2>
      <h4>${number}</h4>
    </div>
    <div>
      <h4>${time}</h4>
    </div>
  `;
  callHistoryContainer.appendChild(list);
}
// Clear history
const clearBtn = document.querySelector("aside button");
clearBtn.addEventListener("click", () => {
  const items = callHistoryContainer.querySelectorAll("div.flex.justify-between.items-center");
  items.forEach((item) => item.remove());
});
