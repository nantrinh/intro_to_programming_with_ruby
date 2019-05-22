var id = -1;

function makeProduct(name, stock, price) {
  return {
    id: id += 1,
    name: name,
    stock: stock,
    price: price,
    describe: function () {
      console.log(`Name: ${this.name}`);
      console.log(`ID: ${this.id}`);
      console.log(`Price: $${this.price}`);
      console.log(`Stock: ${this.stock}`);
    }, 
    setPrice: function (newPrice) {
      if (newPrice < 0) {
        return 'New price must be at least 0'; 
      }
      this.price = newPrice;
    },
  }
}

var scissors = makeProduct('Scissors', 8, 10);

//var drill = makeProduct('Cordless Drill', 15, 45);

scissors.describe();
scissors.setPrice(2);
scissors.describe();
