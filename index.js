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
let coins = 100;
const coinCounter = document.getElementById("coin-counter");
const callHistoryContainer = document.querySelector("aside");
const callButtons = document.querySelectorAll(".emergency-card button");
callButtons.forEach((btn) => {
  if (btn.querySelector(".fa-phone")) {
    btn.addEventListener("click", () => {
      const card = btn.closest(".emergency-card");
      const serviceName = card.querySelector("h1").textContent;
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
});

function addCallHistory(name, number) {
  const historySection = callHistoryContainer;
  if (!document.getElementById("history-list")) {
    const list = document.createElement("div");
    list.id = "history-list";
    historySection.appendChild(list);
  }
  const list = document.getElementById("history-list");
  const item = document.createElement("div");
  item.className = "flex justify-between items-center bg-[#FAFAFA] p-2 mt-3 rounded";
  item.innerHTML = `
    <div>
      <h2 class="font-bold">${name}</h2>
      <h4>${number}</h4>
    </div>
    <div>
      <h4>${new Date().toLocaleTimeString()}</h4>
    </div>
  `;
  list.prepend(item); 
}

const clearBtn = document.querySelector("aside button");
clearBtn.addEventListener("click", () => {
  const list = document.getElementById("history-list");
  if (list) {
    list.innerHTML = "";
  }
});

let copyCount = 0;
let callHistoryContainer = document.querySelector("aside");

document.querySelectorAll(".emergency-card .fa-copy").forEach((copyBtn) => {
  copyBtn.parentElement.addEventListener("click", function () {
 
    let card = this.closest(".emergency-card");
    let number = card.querySelector("h1.text-xl").innerText;

    navigator.clipboard.writeText(number).then(() => {
      copyCount++;
      document.getElementById("coin-counter").innerText = 100 + copyCount; 
      alert(`Copied: ${number}`);
    });
  });
});

document.querySelectorAll(".emergency-card .fa-phone").forEach((callBtn) => {
  callBtn.parentElement.addEventListener("click", function () {
    let card = this.closest(".emergency-card");
    let title = card.querySelector("h1.text-md").innerText;
    let number = card.querySelector("h1.text-xl").innerText;

    let now = new Date();
    let time = now.toLocaleTimeString();

    let callHistoryContainer = document.querySelector("aside");
    let div = document.createElement("div");
    div.className = "flex justify-between items-center bg-[#FAFAFA] p-2 mt-3";
    div.innerHTML = `
      <div>
        <h2 class="font-bold">${title}</h2>
        <h4>${number}</h4>
      </div>
      <div>
        <h4>${time}</h4>
      </div>
    `;
    callHistoryContainer.appendChild(div);
  });
});

document.querySelector("aside button").addEventListener("click", function () {
  let items = callHistoryContainer.querySelectorAll("div.flex.justify-between ~ div");
  items.forEach(item => item.remove());
});

