(function(){
	const $ = (e) => document.querySelector(e);

	// toggle menu

	$(".bars").addEventListener("click", () => {
		$(".navbar-nav").classList.toggle("toggle");
	});

	// Mudar cor do menu quanto o top chegar a 10px
	window.onscroll = function(){
  	var top = window.pageYOffset || document.documentElement.scrollTop
   		if( top >= 1 ) {
   			$(".nav").style.transition = ".5s ease-in-out";
   			$(".contatos").style.transition = ".5s ease-in-out";
       		$(".nav").style.backgroundColor = "var(--azulEscuro)";
       		$(".contatos").style.backgroundColor = "var(--azulEscuro)";
   		}else{
   			$(".nav").style.backgroundColor = "transparent";
   			$(".contatos").style.backgroundColor = "transparent";
   		}
	}

})();