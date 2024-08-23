const inputValue = document.getElementById("userinput");

const number = document.querySelectorAll(".numbers").forEach(function(item) {
	item.addEventListener("click", function(e){
		if(inputValue.innerText === "0") {
			inputValue.innerText = "";
		}
		if(inputValue.innerText === "NaN") {
			inputValue.innerText = "";
		}
		inputValue.innerText += e.target.innerHTML.trim();
	});
});

/something going on here but idk what/

const calculate = document.querySelectorAll(".operations").forEach(function(item) {
	item.addEventListener("click", function(e){
		console.log(e.target.innerHTML);
		let lastValue = inputValue.innertext.substring(inputValue.innerText.length, inputValue.innerText.length-1);

		if(!isNaN(lastValue) && e.target.innerText === "=") {
			inputValue.innerText = eval(inputValue.innerText);
		} else if(e.target.innerHTML === "AC") {
			inputValue.innerText = "0";
		} else if(e.target.innerHTML === "DEL") {
			inputValue.innerText = inputValue.innertext.substring(0, inputValue.innerText.length-1);
			if(inputValue.innerText.length == 0) {
				inputValue.innerText = "0";
			}
		}else {
			if(!isNaN(lastValue)) {
				inputValue.innerText += e.target.innerHTML;
			}
		}
	});
});