var Aerospace = new Module();

Aerospace.exposedFunctions = ["TWR(Ft, m, g)", "deltaV(startM, endM, Isp)"];
Aerospace.requires = "";
Aerospace.description = "Basic functionality.";
Aerospace.name = "Aerospace";

Aerospace.functions = 
[
	[
		function deltaV(startM, endM, Isp){return ((startM/endM)*Isp*9.81) + m/s},
		'deltaV_,_,_'

		function TWR(Ft, m, g){return Ft / m * g},
		'TWR_,_,_'

	]
];

module.exports.Aerospace;