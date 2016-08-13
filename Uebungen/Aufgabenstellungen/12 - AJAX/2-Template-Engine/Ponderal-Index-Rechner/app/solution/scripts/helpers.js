/**
 * @name between
 * @description Checks if a base value is betweenm value1 and value2
 *
 * @example usage:
 * 	{{#between base value1 value2}}<p>true</p>{{/else}}<p>false</p>{{/between}}
 * 	{{#between somevar '3' '5'}}<p>true</p>{{/else}}<p>false</p>{{/between}}
 *
 * @param base
 * @param value1
 * @param value2
 */
Handlebars.registerHelper('between', function(base, value1, value2, options) {
	return (Number(base) > Number(value1) && Number(base) < Number(value2)) ? options.fn(this) : options.inverse(this);
});

/**
 * @name lower
 * @description Checks if value1 < value2
 *
 * @example usage:
 * 	{{#lower value1 value2}}<p>smaller</p>{{/else}}<p>greater or equal</p>{{/between}}
 * 	{{#lower value1 '5'}}<p>samller then 5</p>{{/else}}<p>greater or equal 5</p>{{/between}}
 *
 * @param base
 * @param value1
 * @param value2
 */
Handlebars.registerHelper('lower', function(value1, value2, options) {
	return (Number(value1) < Number(value2)) ? options.fn(this) : options.inverse(this);
});

/**
 * @name greater
 * @description Checks if value1 > value2
 *
 * @example usage:
 * 	{{#greater value1 value2}}<p>greater</p>{{/else}}<p>smaller or equal</p>{{/between}}
 * 	{{#greater value1 '5'}}<p>greater then 5</p>{{/else}}<p>smaller or equal 5</p>{{/between}}
 *
 * @param base
 * @param value1
 * @param value2
 */
Handlebars.registerHelper('greater', function(value1, value2, options) {
	return (Number(value1) > Number(value2)) ? options.fn(this) : options.inverse(this);
});