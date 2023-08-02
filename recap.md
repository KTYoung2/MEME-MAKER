 
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

//단색으로 모양을 풀로 채우기 
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