(()=>{
	let app = {trabalhos:[], links:[]}, path = "assets/images/trabalhos";

	rivets.bind($('#app'), app);
	rivets.binders.bg = (el, value) => {el.style = `background-image:url("${path}/${value}")`};

	$.ajax({url: "assets/scripts/data.js"}).done(data => {
		$.extend(app, $.parseJSON(data)[0]);
	});
})();