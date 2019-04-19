var basket = 'empty';

function goShopping() {
  function shop1() {
    basket = 'tv';
  }

  console.log(basket); // 'empty'; resolves to the variable declared on line 1 

  function shop2() {
    basket = 'computer';
  }

  function shop3() {
    var basket = 'play station';
    console.log(basket);
  }

  shop1(); // this reassigns the variable declared on line 1 to 'tv'
  shop2(); // this reassigns the variable declared on line 1 to 'computer'
  shop3(); // 'play station'; variable shadowing

  console.log(basket); // 'computer'; shop2() was called on line 20, which reassigned the variable declared on line 1 as 'computer'
}

goShopping();
// 'empty'
// 'play station'
// 'computer'
