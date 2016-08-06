Combinatorics = new Module();

Combinatorics.exposedFunctions = ["P(n,r)", "C(n,r)"];
Combinatorics.requires = "Base";
Combinatorics.description = "Combinatorics library";
Combinatorics.name = "Combinatorics";

Combinatorics.functions = {
  combinations: {
    func: function(n, r) {
      return fac(n) / fac(n - r)
    },
    syntax: "C_,_"
  },

  permutations: {
    func: function(n, r) {
      return fac(n) / (fac(r) * fac(n - r))
    },
    syntax: "P_,_"
  }

}

function fac(num) {
  var rval = 1;
  for (var i = 2; i <= num; i++)
    rval = rval * i;
  return rval;
}