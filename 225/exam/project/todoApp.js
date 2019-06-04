// todoManager: returns a set of todos from a todoList
// todoList: an object that has a collection of todo objects
//   - returns a copy of the collection anytime a method  returns all or a subset of it
//   - does not allow users to manipulate todo object values directly
//   - provides an interface for manipulating the collection of objects (add, update, delete, etc)
// todo: an object with the following properties and shared methods
//   Properties:
//   * id (must be unique)
//   * title
//   * completed
//   * month
//   * year
//   * description
//   
//   Shared Methods:
//   * isWithinMonthYear(month, year)

var todoData1 = {
  title: 'Buy Milk',
  month: '1',
  year: '2017',
  description: 'Milk for baby',
};

var todoData2 = {
  title: 'Buy Apples',
  month: '',
  year: '2017',
  description: 'An apple a day keeps the doctor away',
};

var todoData3 = {
  title: 'Buy chocolate',
  month: '1',
  year: '',
  description: 'For the cheat day',
};

var todoData4 = {
  title: 'Buy Veggies',
  month: '',
  year: '',
  description: 'For the daily fiber needs',
};

var todoData5 = {
  title: 'Water Plants',
  month: '5',
  year: '2018',
  description: 'Plants need water too!',
};

var todoData6 = {
  title: 'Entertain the cat',
  month: '',
  year: '2019',
  description: 'Cat did not like the juggling much last time',
};

var invalidTodoData1 = {
  title: 'Buy Veggies',
  month: '0', // should be between 1 and 12
  year: '',
  description: 'For the daily fiber needs',
};

var invalidTodoData2 = {
  title: 'Buy Veggies',
  month: '1.5', // must be integer 
  year: '',
  description: 'For the daily fiber needs',
};

var invalidTodoData3 = {
  title: 'Buy Veggies',
  month: '1',
  year: '-9', // cannot be negative
  description: 'For the daily fiber needs',
};

var invalidTodoData4 = {
  title: '    ', // cannot only be whitespace
  month: '1',
  year: '1200',
  description: 'For the daily fiber needs',
};

var invalidTodoData5 = {
  title: 'Broccoli',
  month: '1',
  year: '1200',
  description: '   ', // cannot only be whitespace
};

var todoSet1 = [todoData1, todoData2, todoData3, todoData4];
var todoSet2 = [todoData5, todoData6];
var invalidTodoSet = [invalidTodoData1, invalidTodoData2, invalidTodoData3, invalidTodoData4, invalidTodoData5];

function isValidMonth(month) {
  return (
    typeof month === 'string'
    && (month.length === 0 
        || (!/[^0-9]/.test(month) && Number(month) >= 1 && Number(month) <= 12)
       )
  );
}

function isValidYear(year) {
  return (
    typeof year === 'string'
    && (year.length === 0 || (!/[^0-9]/.test(year) && Number(year) >= 0))
  );
}

function isValidTitle(title) {
  return (typeof title === 'string' && title.length > 0);
}

function isValidDescription(description) {
  return (typeof description === 'string' && description.length > 0);
}

function isValidTodoData(todoData) {
  return (
    isValidTitle(todoData.title.trim())
    && isValidMonth(todoData.month.trim())
    && isValidYear(todoData.year.trim())
    && isValidDescription(todoData.description.trim())
  );
}

var todo = {
  isWithinMonthYear: function(month, year) {
    return (this.month === month && this.year === year); 
  },
}

var todoList = (function() {
  var lists = {};
  var nextListID = -1;

  function createTodo(id, todoData) {
    var newTodo = Object.create(todo);
    newTodo.id = id;
    newTodo.title = todoData.title.trim();
    newTodo.month = todoData.month.trim();
    newTodo.year = todoData.year.trim();
    newTodo.description = todoData.description.trim();
    newTodo.completed = false;
    return newTodo;
  }

  function getTodo(listID, id) {
    var requestedTodo;
    var i;
    var list = lists[listID].list;
    for (i = 0; i < list.length; i += 1) {
      if (list[i].id === id) {
        requestedTodo = list[i]; 
        break;
      }
    }
    return requestedTodo;
  }

  function copy(toCopy) {
    if (toCopy === undefined) {
      return undefined; 
    }

    var newTodo = Object.create(todo); 
    Object.getOwnPropertyNames(toCopy).forEach(function(key) {
      newTodo[key] = toCopy[key]; 
    });

    return newTodo;
  }

  return {
    init: function(todoSet) {
      if (todoSet.every(todoData => isValidTodoData(todoData))) {
        this.listID = nextListID += 1;

        lists[this.listID] = {
          list: [], 
          nextTodoID: -1,
        }

        todoSet.forEach(todoData => {
          lists[this.listID].list.push(createTodo(lists[this.listID].nextTodoID += 1, todoData));
        }, this);

        return this;
      }

      return {invalidInput: true};
    },

    // for debugging purposes
    print: function() {
      console.log(lists[this.listID].list)
    },

    addTodo: function(todoData) {
      if (isValidTodoData(todoData)) {
        lists[this.listID].list.push(createTodo(lists[this.listID].nextTodoID, todoData));
        return true;
      } 
      return false;
    },

    deleteTodo: function(id) {
      var list = lists[this.ListID].list;
      var previous_length = list.length;
      list = list.filter(todo => todo.id != id);
      return list.length != previous_length;
    },

    returnTodo: function(id) {
      return copy(getTodo(this.listID, id));
    },

    updateTodo: function(id, newData) {
      var toChange = getTodo(this.listID, id); 
      var changed = false;

      if (toChange === undefined) {
        return false; 
      }

      if (isValidTitle(newData.title)) {
        toChange.title = newData.title; 
        changed = true;
      }

      if (isValidMonth(newData.month)) {
        toChange.month = newData.month; 
        changed = true;
      }

      if (isValidYear(newData.year)) {
        toChange.year = newData.year; 
        changed = true;
      }

      if (isValidDescription(newData.description)) {
        toChange.description = newData.description; 
        changed = true;
      }
      
      if (typeof newData.completed === 'boolean') {
        toChange.completed = newData.completed; 
        changed = true;
      }
      return changed;
    },
  };
}());

console.log('***Testing todoList.init***')
var list1 = Object.create(todoList).init(todoSet1);
console.log('list 1');
list1.print();

// making sure they produce separate lists
var list2 = Object.create(todoList).init(todoSet2);
console.log('list 2');
list2.print();
console.log('list 1');
list1.print();

invalidTodoSet.forEach(function(invalidTodo) {
  console.log(Object.create(todoList).init([todoData1, invalidTodo, todoData2]));
  // logs {invalidInput: true} 5 times 
});

console.log('***Testing todoList.addTodo***')
console.log(list1.addTodo({
  title: 'Read',
  month: '3',
  year: '2019',
  description: 'To feed the soul',
})); // true
console.log(list1.addTodo(invalidTodoData1)); // false 
list1.print(); // Read todo is the last item

console.log('***Testing todoList.deleteTodo***')
console.log(list1.deleteTodo(3)); // true
list1.print(); // id 3 todo has been deleted
console.log(list1.deleteTodo(3)); // false 
list1.print(); // nothing has been deleted

console.log('***Testing todoList.returnTodo***')
var testTodo = list1.returnTodo(1);
testTodo.title = 'Pizza';
console.log(testTodo); // title changed to 'Pizza'
console.log(list1.returnTodo(1)); // title of todo 1 should remain unchanged;
console.log(list1.returnTodo(7)); // undefined

console.log('***Testing todoList.updateTodo***')
console.log(list1.returnTodo(1));
console.log(list1.updateTodo(1, {description: 'Lactose Free'})); // true
console.log(list1.returnTodo(1)); // should say lactose free
console.log(list1.updateTodo(1, {title: 'Buy 2 Gallons of Milk', month: 6})); // true
console.log(list1.returnTodo(1)); // should  have changed to reflected the above
console.log(list1.updateTodo(1, {month: '-1'})); // false because month is invalid
console.log(list1.updateTodo(9, {title: 'Eat wheatgrass'})); // false because id 9 does not exist in the list 
