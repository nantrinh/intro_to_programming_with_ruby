var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();
// 'This is global'
// line 4 references the variable defined on line 1
// inner scopes can access outer scopes
