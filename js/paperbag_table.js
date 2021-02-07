var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1zDoOogCrorRYYAjconkjtI-iO4M1FdR4GrQOjTXbs4o/edit?usp=sharing'

function init() {
    Tabletop.init({ 
		key: publicSpreadsheetUrl,
        callback: showInfo,
        simpleSheet: true 
	});
}

function showInfo(data, tabletop) {

    alert('Successfully processed!')
	console.log(data);

	var table = new Tabulator("#paperbag_table", {
		responsiveLayoutCollapseStartOpen:false,
		responsiveLayout:"collapse",
		tooltips:true,
		addRowPos:"top",
		history:true,
		pagination:"local",
		paginationSize:20,
		movableColumns:true,
		resizableRows:true,
		data:data,
		initialSort: [
			{column:"name", dir:"asc"},
		],
		columns:[
			{formatter:"responsiveCollapse", headerSort:false},
			{title:"Date of study", field:"Date of study", responsive:0},
			{title:"Locale", field:"Locale", responsive:0},
			{title:"Study Author", field:"Study Author"},
			{title:"Date that ordinance came into effect", field:"Date that ordinance came into effect"},
			{title:"Type", field:"Type"},
			{title:"Amount of Fee", field:"Amount of Fee"},
			{title:"Destination of fee", field:"Destination of fee"},
			{title:"Key Manipulation", field:"Key Manipulation"},
			{title:"Study Methodology", field:"Study Methodology"},
			{title:"Key Stats", field:"Key Stats"},
			{title:"Paragraph Summary", field:"Paragraph Summary"},
			{title:"Link to Study or Official Website", field:"Link to Study or Official Website"},
			{title:"Link to Text of Law", field:"Link to Text of Law"},
			{title:"Type of Study Author", field:"Type of Study Author"},
			{title:"Other Notes", field:"Other Notes"}
		]
	});
}

window.addEventListener('DOMContentLoaded', init);
