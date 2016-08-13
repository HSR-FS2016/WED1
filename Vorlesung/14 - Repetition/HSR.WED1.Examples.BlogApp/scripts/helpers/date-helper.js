Handlebars.registerHelper('date', function(date, format) {
	return moment(date).format(format);
});
