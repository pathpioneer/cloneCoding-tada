const downContainer = document.getElementById("downImg");

function down(){
    window.scrollTo(0,950);
}

var nowScroll = window.pageYOffset;
window.onscroll = function(){
    var currentScroll = window.pageYOffset;
    if(nowScroll > currentScroll){
        document.querySelector(".menu").style.top = "0";
    }else{
        document.querySelector(".menu").style.top = "-80px";
    }
    nowScroll = currentScroll;
}
