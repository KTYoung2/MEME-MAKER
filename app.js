const canvas = document.querySelector("canvas");
//페인트 브러쉬 설정
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;

const colors = [
    "#DC143C",
    "#FF7F50",
    "#FFD700",
    "#008000",
    "#0000CD",
    "#4B0082",
    "#800080",
];



function onClick(e) {
    const x = e.offsetX;
    const y = e.offsetY;
    ctx.beginPath();
    //클릭했을 때 선 그리기 시작점을  위해 설정
    ctx.moveTo(x - 1 , y - 1);
                     // Math.floor 반올림 메소드
    const color = colors[Math.floor(Math.random() * colors.length)];
    ctx.strokeStyle = color;
        //offsetX , offsetY 사용자가 클릭한 좌표 
    ctx.lineTo(x, y);
    ctx.stroke();
};

canvas.addEventListener("mousemove", onClick);