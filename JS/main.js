
let cube = document.getElementById("cube");
let rotateX = -20;
let rotateY = 30;
let isDragging = false;
let prevX, prevY;

// 자동 회전
function autoRotate() {
    rotateY += 1;
    cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}
let rotationInterval = setInterval(autoRotate, 50);

// 마우스로 조작
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
    alert("SOS!");
    window.location.href = "./in.html"; // 클릭 시 in.html로 이동
}

