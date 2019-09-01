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
    newItem: function(e) {
      e.preventDefault(); 
      this.last_id += 1;
      var item = this.add();
      var $item = $(this.template.replace(/ID/g, item.id));
      $("#inventory").append($item);
    },
    bindEvents: function() {
      $("#add_item").on("click", this.newItem.bind(this)); 
    },
    init: function() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    }
  };

})();

$(inventory.init.bind(inventory));
