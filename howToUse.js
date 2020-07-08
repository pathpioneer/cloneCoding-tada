var k = 5;

function LL(){
    if(k==0) k = k+5;
    k = k-1;
    q = k%5;    
    slideImg(q);
    showTd(q);
}

function RR(){
    if(k==0) k = k+5;
    k = k+1;
    q = k%5;
    slideImg(q);
    showTd(q);
}

function slideImg(q){
    switch(q){
        case 0:
            document.CCC.src = "C1.jpg";
            break;
        case 1:
            document.CCC.src = "C2.jpg";
            break;
        case 2:
            document.CCC.src = "C3.jpg";
            break;
        case 3:
            document.CCC.src = "C4.jpg";
            break;
        case 4:
            document.CCC.src = "C5.jpg";
            break;
        default:
            null;
            break;
    }
}

var midContain = document.getElementById("midmid");
var bto_1 = document.getElementById("bto1");
var bto_2 = document.getElementById("bto2");

function showTd(q){
    switch(q){
        case 0:
            midContain.innerText = "회원가입";
            bto_1.innerText = "휴대폰 번호로 간편하게 가입한 후,";
            bto_2.innerText = "결제 카드 정보를 입력해주세요.";
            break;
        case 1:
            midContain.innerText = "예상금액 확인";
            bto_1.innerText = "원하는 목적지를 입력하고 예상 금액 확인 후,";
            bto_2.innerText = "차량을 호출하세요.";
            break;
        case 2:
            midContain.innerText = "탑승 확인";
            bto_1.innerText = "탑승 알림이 오면 호출한 타다 차량에 탑승하시고";
            bto_2.innerText = "마음 편히 이동하세요.";
            break;  
        case 3:
            midContain.innerText = "결제 완료";
            bto_1.innerText = "하차 후 입력하신 카드 정보로 자동 결제되며,";
            bto_2.innerText = "탑승하신 차량의 기사를 평가할 수 있어요.";
            break;  
        case 4:
            midContain.innerText = "예약 하기";
            bto_1.innerText = "상황에 따라 원하는 시간만큼";
            bto_2.innerText = "타다를 예약할 수도 있어요.";
            break;
        default:
            null;
            break;
    }
}