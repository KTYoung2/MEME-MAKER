 
 <canvas></canvas>
 canvas API는 JS로 그래픽을 그릴 수 있게 해주는 API
 WebGL API로 2D, 3D 그래픽을 그릴 수 있음


 //페인트 브러쉬 설정
const ctx = canvas.getContext("2d");
                              2d설정. 그 아래에 있는 인자들은 3d임


canvas의 좌표는 js에서 설정해둔 
canvas.width = 800;
canvas.height = 800;
크기 테두리 꼭지점부터 시작 된다 (0)
(시작점)-------- > x축
|
|
▽ y축

//단색으로 모양을 풀로 채우기 (fill + rect 함수)
ctx.fillRect() 함수는 4개의 인자를 가지고 있다. 
                    ---> x,y,width,height

//선 만들기 함수. 복수 가능
ctx.rect();

//모양 색 풀로 채우기
ctx.fill();

//선만 만들기
ctx.stroke();

//색 바꾸기 
ctx.fillStyle = "원하는색";

//선 경로 바꾸기
ctx.beginPath();

** 선을 만들고, 선을 만들고 색을 적용 -> 경로 변경 -> 선을 만들고 색을 적용 
모든 단계를 적용해줘야함. 함수를 호출했다고 해서 모든 경로에 적용 되는 게 아님. 
경로가 바뀔 때마다 다시 함수를 호출해줘야한 다는 뜻. 

//선을 긋지 않으면서 (포인터)브러쉬 옮기기
ctx.moveTo();

//선을 그으면서 브러쉬 움직이기
ctx.lineTo();


//라인 굵기 변경
ctx.lineWidth = 


//집 그리기
ctx.fillRect(200, 200, 50, 200);
ctx.fillRect(400, 200, 50, 200);
ctx.fillRect(300, 300, 50, 100);
ctx.fillRect(200, 200, 200, 20);
ctx.moveTo(200, 200);
ctx.lineTo(325, 100);
ctx.lineTo(450, 200);
ctx.fill();


////동그라미

ctx.arc(x축, y축, 반지름, 동그라미 시작점, 동그라미 마지막지점 2 * Math.PI);

https://www.w3schools.com/tags/canvas_arc.asp 
참고사이트
                

사람 만들기

ctx.fillRect(210 - 40, 200 - 20, 15,  100);
ctx.fillRect(350 - 40, 200 - 20, 15,  100);
ctx.fillRect(260 - 40, 200 - 20, 60, 200);

//동그라미
ctx.arc(250, 100, 50, 0, 2 * Math.PI);
ctx.fill();

//다른 경로의 색을 바꾸는 거니까 경로 변경
ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(260 + 10, 80, 8, 0, 2 * Math.PI);
ctx.arc(220 + 10 , 80, 8, 0, 2 * Math.PI);
ctx.fill();

