function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(entry => entry.id === inventoryItem);
}

function isItemAvailable(inventoryItem, transactions) {
  var filteredTransactions = transactionsFor(inventoryItem, transactions);
  var total = filteredTransactions.reduce(function (sum, entry) {
    switch (entry.movement) {
      case 'in':
        return sum + entry.quantity;
      case 'out':
        return sum - entry.quantity; 
      default:
        return sum;
    };
  }, 0); 
  return total > 0;
}

var transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 15 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
