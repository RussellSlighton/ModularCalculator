var Base = new Module();

Base.exposedFunctions = ["+", "-", "*", "/", "=", "1", "2", "3", "4", '5', '6', '7', '8', '9', "10"];
Base.requires = "";
Base.description = "Basic functionality.";
Base.name = "Base";

Base.functions = 
[
	[
		function minus(x,y){return x -y },
		'_-_'
	]
];