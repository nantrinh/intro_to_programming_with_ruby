var inventory;

(function() {
  inventory = {
    last_id: 0,
    collection: [],
    setDate: function() {
      $("#order_date").text((new Date()).toUTCString());
    },
    cacheTemplate: function() {
      var $i_tmpl = $("#inventory_item").remove(); 
      this.template = $i_tmpl.html();
    },
    add: function() {
       var item = {
        id: this.last_id,
        name: "",
        stock_number: "",
        quantity: 1,
      };
      this.collection.push(item);
      return item;
    },
    remove: function(idx) {
      idx = Number(idx);
      this.collection = this.collection.filter(function(item) {
        return item.id !== idx;
      });
    },
    get: function(id) {
      var found_item;
      this.collection.forEach(function(item) {
        if (item.id === id) {
          found_item = item;
        } 
      });
      return found_item;
    },
    update: function($item) {
      var id = this.findId($item);
      var item = this.get(id);
      item.name = $item.find("[name^=item_name]").val();
      item.stock_number = $item.find("[name^=stock_number]").val();
      item.item_quantity = $item.find("[name^=item_quantity]").val();
    },
    newItem: function(e) {
      e.preventDefault(); 
      this.last_id += 1;
      var item = this.add();
      var $item = $(this.template.replace(/ID/g, item.id));
      $("#inventory").append($item);
    },
    findParent: function(e) {
      return $(e.target).closest("tr"); 
    },
    findId: function($item) {
      return Number($item.find("input[type=hidden]").val()); 
    },
    deleteItem: function(e) {
      e.preventDefault();
      var $item = this.findParent(e).remove();
      this.remove(this.findId($item));
    },
    updateItem: function(e) {
      var $item = this.findParent(e);
      this.update($item);
    },
    bindEvents: function() {
      $("#add_item").on("click", this.newItem.bind(this)); 
      $("#inventory").on("click", "a.delete", this.deleteItem.bind(this));
      $("#inventory").on("blur", ":input", this.updateItem.bind(this));
    },
    init: function() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    }
  };

})();

$(inventory.init.bind(inventory));
