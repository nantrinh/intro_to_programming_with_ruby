var invoices = {
  paid: [],
  unpaid: [],
  add: function (name, amount) {
    this.unpaid.push({
      name: name,
      amount: amount
    }); 
  },
  totalDue: function () {
    return this.unpaid.reduce((total, invoice) => total + invoice.amount, 0); 
  },
  totalPaid: function () {
    return this.paid.reduce((total, invoice) => total + invoice.amount, 0); 
  },

  payInvoice: function(name) {
    var stillUnpaid = [];
    this.unpaid.forEach(function (invoice) {
      if (invoice.name === name) {
        invoices.paid.push(invoice); 
      } else {
        stillUnpaid.push(invoice); 
      } 
    });
    this.unpaid = stillUnpaid;
  }
};

invoices.add('Spensa', 3);
invoices.add('Jorgen', 10);
invoices.add('Cobb', 1);
console.log(invoices.totalDue());
invoices.payInvoice('Cobb');
console.log(invoices.totalPaid());
console.log(invoices.totalDue());
