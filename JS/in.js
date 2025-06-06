let room = document.getElementById("cube");
let rotateX = 20;
let rotateY = 0;  
let isDragging = false; 
let prevX, prevY; 


document.addEventListener("mousedown", (e) => startDrag(e.clientX, e.clientY));
document.addEventListener("mousemove", (e) => drag(e.clientX, e.clientY));
document.addEventListener("mouseup", () => (isDragging = false));


document.addEventListener("touchstart", (e) => {
    if (e.touches.length === 1) { 
        startDrag(e.touches[0].clientX, e.touches[0].clientY);
    }
});

document.addEventListener("touchmove", (e) => {
    if (e.touches.length === 1) {
        e.preventDefault(); 
        drag(e.touches[0].clientX, e.touches[0].clientY);
    }
}, { passive: false }); 

document.addEventListener("touchend", () => (isDragging = false));

function startDrag(x, y) {
    isDragging = true; 
    prevX = x; 
    prevY = y; 
}

function drag(x, y) {
    if (!isDragging) return; 
    let deltaX = x - prevX; 
    let deltaY = y - prevY; 
    prevX = x; 
    prevY = y; 


    rotateX = Math.max(-90, Math.min(90, rotateX + deltaY * 0.5)); 
    rotateY += deltaX * 0.5; 


    requestAnimationFrame(() => {
        room.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
}

