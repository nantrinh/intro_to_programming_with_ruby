var a = 'global';

function checkScope() {
  var a = 'local';
  function nested() {
    var a = 'nested';
    function superNested() {
      a = 'superNested';
      return a;
    }

    return superNested();
  }

  return nested();
}

console.log(checkScope());
console.log(a);

// equivalent to
var a;
a = 'global';

function checkScope() {
  var a;
  a = 'local';
  function nested() {
    var a;
    a = 'nested';
    function superNested() {
      a = 'superNested';
      return a;
    }

    return superNested();
  }

  return nested();
}

console.log(checkScope()); 
// 'superNested' is returned from superNested(),
// which is returned through the other two functions
console.log(a);
// 'global'
// the outermost variable `a` is unaffected by the
// checkScope() function because variable shadowing occurs
// inside checkScope()
