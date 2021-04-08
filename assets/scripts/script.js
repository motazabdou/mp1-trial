let checkbtn = document.querySelector(".checkbtn");

checkbtn.addEventListener("click", function(){
    document.querySelector(".nav-list").style.display="block";
    document.querySelector(".nav-list").style.top="50px";
    document.querySelector(".nav-list").style.right="0";

    checkbtn.addEventListener("click", function(){
    document.querySelector(".nav-list").style.right="-150vw";
    });
});



$(".step").click( function() {
	$(this).addClass("active").prevAll().addClass("active");
	$(this).nextAll().removeClass("active");
});

$(".step01").click( function() {
	$("#line-progress").css("width", "3%");
	$(".background").addClass("active").siblings().removeClass("active");
});

$(".step02").click( function() {
	$("#line-progress").css("width", "25%");
	$(".education").addClass("active").siblings().removeClass("active");
});

$(".step03").click( function() {
	$("#line-progress").css("width", "50%");
	$(".skill").addClass("active").siblings().removeClass("active");
});

$(".step04").click( function() {
	$("#line-progress").css("width", "75%");
	$(".interests").addClass("active").siblings().removeClass("active");
});

$(".step05").click( function() {
	$("#line-progress").css("width", "100%");
	$(".analysis").addClass("active").siblings().removeClass("active");
});