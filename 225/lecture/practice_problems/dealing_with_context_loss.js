var foo = {
  a: 0,
  incrementA: function() {
//     function increment() {
//       this.a += 1;
//     }

    var increment = function () {
      this.a += 1;
    }.bind(this);

    increment();
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();
console.log(foo.a);
