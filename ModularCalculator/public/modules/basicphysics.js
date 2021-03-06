var BasePhysics = new Module();

BasePhysics.exposedFunctions = ["p(m,v)", kinx(x0, v0, t)];
BasePhysics.requires = "";
BasePhysics.description = "Basic functionality.";
BasePhysics.name = "Base";

BasePhysics.functions = 
[
	[
		function impulse(m,v){return m*v },
		'p_,_'

		function kinematicX(x0, v0, t){return x0 + v0*t}
		'kinx_,_,_'
	]
];

module.exports.BasePhysics;