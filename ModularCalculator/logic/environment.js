function Environment(storage, modules, adjacencyMatrix, nodeDict) {
  this.storage = storage;
  this.modules = modules;
    //r: node, c: dependents
  this.adjacencyMatrix = adjacencyMatrix;
  this.nodeDict = nodeDict;
  
  //[ [0,1,0,0], //2 depends on 1
  //    [0,0,1,0],
//      [0,0,0,1],
  //    [0,0,0,0]
//    ];
  
  this.run = function() {
    
    this.parse();
    
    //run backwards starting from the answer evaluating dependencies
    return this.evaluate(this.getFinalNode());
  };
  
  //assumption: there is only one top level function at a time
  this.parse = function(modules, input){
    identifyExpressions()
    //wff
    //find naked function
    //expose and run parse
  }
  
  this.getFinalNode = function() {
    //check circular first!
    for (r = 0; r < this.adjacencyMatrix.length; r++) {
      var isFinal = true;
      for (c = 0; c < this.adjacencyMatrix.length; c++) {
        if (this.adjacencyMatrix[r][c] == 1) {
          isFinal = false;
        }
      }
      if (isFinal) {
        return r;
      }
    }
  };

  this.getDependencies = function(node) {
    var relationVector = this.adjacencyMatrix.map(x => x[node]);
    var dependencies = [];
    for (var i = 0; i < relationVector.length; i++) {
      if (relationVector[i] == 1) {
        dependencies[dependencies.length] = i;
      }
    }
    return dependencies;
  };


  this.evaluate = function(node) {
    var dependencies = this.getDependencies(node);
    var results = dependencies.map( x=> this.evaluate(x));
    var func = this.nodeDict[node];
    var val = func.apply(undefined, results);
    return val;
  };
}