// script.js

document.addEventListener("DOMContentLoaded", function () {
	let input = document.createElement("input");
	input.type="text";
	input.placeholder="Спитайте кулю, і потрясіть";

	input.className = "inp";
	let ballDiv = document.createElement("div");
    ballDiv.className = "ballDiv";

    let ballImg = document.createElement("img");
    ballImg.src = "img/magic_ball.png";
    ballImg.alt = "magic ball image";
    
    let ballOut = document.createElement("p");
    ballOut.className = "ballOut";
   

    ballDiv.appendChild(input);
ballDiv.appendChild(ballOut);
    ballDiv.appendChild(ballImg);
    
    document.body.appendChild(ballDiv);
    
    ballImg.addEventListener("click", function () {
        console.log("Клік на кулю");
        if(input.value !== '')
        {
        	input.value = '';
        	ballOut.style.opacity = 0;
        	let possibleAnswers = [
                "Так",
                "Ні",
                "Можливо"
            ];
        	let ans = possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];

        	ballOut.innerHTML = ans;
        	ballImg.classList.add("shake");
        	
       		setTimeout(function () {
       			ballImg.classList.remove("shake");
				ballOut.classList.add("fadeIn");}, 500);

       		ballOut.classList.remove("fadeIn");
       		input.placeholder="Спитайте кулю, і потрясіть";
        } else{
        	input.placeholder="Введіть текст";
        	alert("Вам потрібно ввести текст")
        }
    });

   
});
