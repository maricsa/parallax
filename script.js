
// var documentEl = document.getElementById("layer2").addEventListener("scroll", function(){
//   var currScrollPos = documentEl.scrollTop();
//   // prlx.css('background-position', '0' + -currScrollPos/4 + 'px');
//   document.getElementById("prlx").style.backgroundPosition = '0px' + -currScrollPos/4+ 'px'; 
// });

(function() {
	var documentEl = $(document),
	    layer2 = $("#layer2")

	    documentEl.on('scroll', function() {
	    	var currScrollPos = documentEl.scrollTop();
	    	layer2.css('background-position', '0' + -currScrollPos/4 + '3px')
	    })
});