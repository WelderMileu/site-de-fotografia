(function(){
	const $ = (e) => document.querySelector(e);

	$(".bars").addEventListener("click", () => {
		$(".navbar-nav").classList.toggle("toggle");
	});

})();