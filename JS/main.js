
let cube = document.getElementById("cube");
let rotateX = -20;
let rotateY = 30;
let isDragging = false;
let prevX, prevY;


function autoRotate() {
    rotateY += 0.5;
    cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}


let rotationInterval = setInterval(autoRotate, 50);


document.addEventListener("mousedown", (e) => {
    isDragging = true;
    prevX = e.clientX;
    prevY = e.clientY;
    clearInterval(rotationInterval);
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    let deltaX = e.clientX - prevX;
    let deltaY = e.clientY - prevY;
    prevX = e.clientX;
    prevY = e.clientY;
    rotateX += deltaY * 0.5;
    rotateY += deltaX * 0.5;
    cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    rotationInterval = setInterval(autoRotate, 50);
});

// 버튼 클릭 이벤트
function pressButton() {
    alert("If you truly want to see what you've been blind to, click here.");
    window.location.href = "./in.html"; // 클릭 시 in.html로 이동
}



  const aboutBtn = document.getElementById('aboutBtn');
  const popup = document.getElementById('popup');
  const closeBtn = document.getElementById('closeBtn');

  aboutBtn.addEventListener('click', () => {
    popup.classList.remove('hidden');
  });

  closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
  });

