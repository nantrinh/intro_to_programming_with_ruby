function makeBank() {
  var accountNumber = 100;
  var accounts = [];
  return {
    openAccount: function() {
      accountNumber += 1;
      var newAccount = makeAccount(accountNumber); 
      accounts.push(newAccount);
      return newAccount;
    },
    transfer: function(source, destination, amount) {
      if (source.balance < amount) {
        return 'Insufficient funds'; 
      } else {
        source.withdraw(amount);
        destination.deposit(amount); 
        return amount;
      } 
    },
  }
}

function makeAccount(number) {
  var balance = 0;
  var transactions = [];
  return {
    number: function () {
      return number;
    },
    balance: function () {
      return balance;
    },
    transactions: function () {
      return transactions;
    },
    deposit: function(amount) {
      balance += amount;
      transactions.push({type: 'deposit', amount: amount})
      return amount;
    },
    withdraw: function(amount) {
      if (amount > balance) {
        amount = balance; 
      }
      transactions.push({type: 'withdraw', amount: amount})
      balance -= amount;
      return amount;
    },
  };
};

var bank = makeBank();
var source = bank.openAccount();
var destination = bank.openAccount();
source.deposit(10);
console.log(bank.transfer(source, destination, 7));
console.log(source.balance());
console.log(destination.balance());
console.log(bank.accounts);
