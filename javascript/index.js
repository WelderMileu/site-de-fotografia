(function(){
	const $ = (e) => document.querySelector(e);

	// toggle menu

	$(".bars").addEventListener("click", () => {
		$(".navbar-nav").classList.toggle("toggle");
	});

	// Mudar cor do menu quanto o top chegar a 10px
	window.addEventListener("scroll", () => {
		if (window.scrollTop >= 10) {
			$(".nav").style.backgroudColor = "black";
			console.log($(".content").scrollTop);
		}else{
			$(".nav").style.backgroudColor = "blue";
			console.log($(".content").scrollTop);
		}
	})

})();