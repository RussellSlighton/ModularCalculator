var Scientific = new Module();

Scientific.exposedFunctions = ["sin(x), cos(x), tan(x)"];
Scientific.requires = "";
Scientific.description = "Basic functionality.";
Scientific.name = "Scientific";

Scientific.functions = 
[
	[
		function sin(x){return Math.sin(x)},
		'sin_'

		function cos(x){return Math.cos(x)},
		'cos_'

		function tan(x){return Math.tan(x)},
		'tan_'
	]
];

module.exports.Scientific;