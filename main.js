const map = document.getElementById("map");
const treasure = document.getElementById("treasure");

const treasureX = Math.floor(Math.random() * (window.innerWidth - 100));
const treasureY = Math.floor(Math.random() * (window.innerHeight - 100));

treasure.style.left = treasureX + "px";
treasure.style.top = treasureY + "px";

console.log("Координати скарбу:");
console.log("X:", treasureX);
console.log("Y:", treasureY);

map.addEventListener("click", function(event) {
    const x = event.clientX;
    const y = event.clientY;

    const cross = document.createElement("div");
    cross.classList.add("cross");
    cross.textContent = "✖";
    cross.style.left = x + "px";
    cross.style.top = y + "px";

    document.body.appendChild(cross);

    const rect = treasure.getBoundingClientRect();

    if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
        alert("Ви перемогли!");
    }
});