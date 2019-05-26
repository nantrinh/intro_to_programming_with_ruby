// every object has a full copy of the methods, which may be redundant
// there isn't a way for us to inspect whether the object was created from a function, so it is difficult to tell whether an object is of a certain "type"

// function makeObj() {
//   return {
//     propA: 10,
//     propB: 20,
//   };
// }

function createInvoice(services) {
  var phone = 3000;
  var internet = 5500;
  if (services !== undefined && typeof services === 'object') {
    if (services['phone'] !== undefined) {
      phone = services['phone']; 
    }

    if (services['internet'] !== undefined) {
      internet = services['internet']; 
    }
  }

  return {
    phone: phone,
    internet: internet,
    total: function () {
      return this.phone + this.internet; 
    } 
  };
}

function invoiceTotal(invoices) {
  var total = 0;
  var i;

  for (i = 0; i < invoices.length; i += 1) {
    total += invoices[i].total();
  }

  return total;
}

var invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({
  internet: 6500,
}));

invoices.push(createInvoice({
  phone: 2000,
}));

invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));

console.log(invoiceTotal(invoices));             // => 31000
