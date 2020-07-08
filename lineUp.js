var PREMIUM = document.getElementById("PREMIUM");
var AIR = document.getElementById("AIR");
var PRIVATE = document.getElementById("PRIVATE");
var GOLF = document.getElementById("GOLF");
var lineConst = document.getElementById("content22");


let lineUplist = ["premium", "air", "private", "golf"];

var i = 4;

function goLeft(){
    if(i !== 0){
        i = (i-1)%4;
    }else{
        i = 0;
        i = 3;
    }
    coloring(i);
}

function goRight(){
    i = (i+1)%4;
    coloring(i);
}

function coloring(i){
    if(i==4 || i==0){
        PREMIUM.style.color = "#43BCDC";
        AIR.style.color = "grey";
        PRIVATE.style.color = "grey";
        GOLF.style.color = "grey";
        showImage(i);
    }else if(i==1){
        PREMIUM.style.color = "grey";
        AIR.style.color = "#43BCDC";
        PRIVATE.style.color = "grey";
        GOLF.style.color = "grey";
        showImage(i);
    }else if(i==2){
        PREMIUM.style.color = "grey";
        AIR.style.color = "grey";
        PRIVATE.style.color = "#43BCDC ";
        GOLF.style.color = "grey";
        showImage(i);
    }else if(i==3){
        PREMIUM.style.color = "grey";
        AIR.style.color = "grey";
        PRIVATE.style.color = "grey";
        GOLF.style.color = "#43BCDC";
        showImage(i);
    }
}

var largeText = document.querySelector(".L-1");
var largeTextP = largeText.querySelector("p");
var textL2C = document.querySelector(".L-2");
var textL2 = textL2C.querySelector("h7");

var li_1 = document.getElementById("li-1");
var li_2 = document.getElementById("li-2");
var li_3 = document.getElementById("li-3");
var li_4 = document.getElementById("li-4");

function showImage(i){
    if(i==4 || i==0){
        document.lineUpImg.src = "premium.png";
        largeTextP.innerText = "PREMIUM";
        textL2.innerText = "준고급 세단과 전문 드라이버";
        li_1.innerText = "호출 즉시 시스템으로 바로배차";
        li_2.innerText = "2,800cc 이상 프리미엄 세단의 편안한 승차감";
        li_3.innerText = "베테랑 전문 드라이버의 안정적인 운행";
        li_4.innerText = "중요한 비즈니스, 특별한 약속, 의전을 위한 이동";
    }else if(i==1){
        document.lineUpImg.src = "air.png";
        largeTextP.innerText = "AIR";
        textL2.innerText = "공항을 갈 때도, 공항에서 올 때도";
        li_1.innerText = "원하는 시간과 장소로 예약";
        li_2.innerText = "필요에 따라 3가지 차종 중 선택(세단, RV, VIP VAN)";
        li_3.innerText = "\'Air 특가\'를 통해 운행 임박건은 최대 30% 할인 제공";
        li_4.innerText = "새벽/야간 비행도 걱정 없이 편안한 공항 이동";
    }else if(i==2){
        document.lineUpImg.src = "private.png";
        largeTextP.innerText = "PRIVATE";
        textL2.innerText = "나만의 일정에 맞추어 원하는 시간만큼";
        li_1.innerText = "원하는 시간과 장소로 예약";
        li_2.innerText = "필요에 따라 3가지 차종 중 선택(세단, RV, VIP VAN)";
        li_3.innerText = "이용 시간 중 경유지 자유롭게 지정 가능";
        li_4.innerText = "워크숍, 가족 모임, 골프장 이동, 결혼식 이동 등";
    }else if(i==3){
        document.lineUpImg.src = "golf.png";
        largeTextP.innerText = "GOLF";
        textL2.innerText = "편안한 라운딩을 위한 골프장 이동";
        li_1.innerText = "원하는 시간과 장소로 예약";
        li_2.innerText = "필요에 따라 2가지 차종 중 선택(RV, VIP VAN)";
        li_3.innerText = "이용 시간 중 경유지 자유롭게 지정 가능";
        li_4.innerText = "골프장 왕복 이동 서비스";
    }
}

function lineUpClick_0(){
    i = 4;
    coloring(i);
    showImage(i);
}

function lineUpClick_1(){
    i = 1;
    coloring(i);
    showImage(i);
}

function lineUpClick_2(){
    i = 2;
    coloring(i);
    showImage(i);
}

function lineUpClick_3(){
    i = 3;
    coloring(i);
    showImage(i);
}

function init(){
    coloring(i);
}

init();