let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let circles = document.querySelectorAll(".circle");
let bars = document.querySelectorAll(".bar");

let index = 0;
nextBtn.addEventListener("click",()=>{
	prevBtn.disabled = false;
	bars[index].classList.add("active");
	circles[index+1].classList.add("active");
	index++;
	if(index==4){
		nextBtn.disabled = true;
	}
});

prevBtn.addEventListener("click",()=>{
	bars[index-1].classList.remove("active")
	circles[index].classList.remove("active");
	index--;
	nextBtn.disabled = false;
	if(index==0){
		prevBtn.disabled = true;
	}
})
